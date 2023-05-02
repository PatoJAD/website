---
title: 'StreamLabels en Arch Linux'
date: '2020-12-09 08:44:00'
description: 'Porque tener que hacer todo a mano si es mas facil contribuir con la comunidad'
type: 'aplicaciones'
tags:
    [
        'obs',
        'archalien',
        'arch',
        'debian',
        'ubuntu',
        'stream',
        'streamlabs',
        'streamlabels',
        'twitch',
        'youtube',
        'linuxbrowser',
    ]
category: ['Aplicaciones']
img: 'https://i.postimg.cc/QCbqwwJv/image.png'
authors: ['PatoJAD']
---

Hace un tiempo hablamos de {{< textlink text="StreamLabs" url="/aplicaciones/2020/11/streamlabs-en-linux/" >}} y de como este nos puede servir para realizar streamings en GNU/Linux. También hablamos de su herramienta Stream Labels la cual tiene como disponible un .deb para que lo utilicemos en linux. Lamentablemente los .deb solo funcionan en distribuciones basadas en Debian/Ubuntu y eso no suele ser compatible con todos los que intentamos realizar Streaming dado que los que jugamos sabemos que el mejor rendimiento está en Arch Linux.

## Una explicación no basta

{{< img src="https://i.postimg.cc/W4mRQDLy/image.png" >}}

Si bien en aquel {{< textlink text="artículo" url="/aplicaciones/2020/11/streamlabs-en-linux/" >}} explique cómo debería realizarse la conversión para utilizarlo en Arch no creo que todo el mundo tenga que ponerse a ver estas cosas. Por lo cual decidí subirlo a AUR para que todo aquel que desee utilizarlo pueda hacerlo sin ningún problema. por lo cual, a partir de hoy si queremos utilizarlo basta con un solo comando para utilizarlo.

```Shell
yay -S streamlabels
```

## ¿Cómo funciona AUR?¿Es difícil subir mi paquete?

{{< img src="https://i.postimg.cc/tCpSktNL/image.png" >}}

Realmente es muy sencillo, aunque vale aclarar que puede costar identificar bien en un inicio como hacerlo correctamente. Por lo cual a modo de muestra en esta oportunidad voy a dejar como está construido este repositorio de Stream Labels para que logren imaginarse como es. Todo el proceso del registro en AUR y demás confío en que pueden…

## PKGBUILD

Esta es la magia de AUR, con este archivo basta para subir un repo que esté disponible para todo el mundo. En este archivo vamos a encontrar, las sumas md5 de todos los archivos utilizados, el nombre del paquete, la versión, la descarga, el proceso de instalación, dependencias, descripción, etc…

{{< img src="https://i.postimg.cc/QCbqwwJv/image.png" >}}

```Shell
# Maintainer: Joaquin (Pato) Decima <https://patojad.com.ar/>

pkgname=streamlabels
pkgver=0.3.8
pkgrel=2
pkgdesc="Stream Labels is an application that runs on your computer that generates text files. These text files contain stats, including your top donor for the day, your most recent follower, and many others."
arch=('x86_64')
url="https://patojad.com.ar/aplicaciones/2020/12/streamlabels-en-arch-linux/"
license=('GPL')
source=("https://s3-us-west-2.amazonaws.com/streamlabs-electron/streamlabels_0.3.8_amd64.deb"
        "pjadalien.py")
md5sums=('ade077aa9baf135de156b169d8d4ecd8'
         '8b65bd2668e7b7acc0768e16841130bc')


package() {
    cd $_pkgbase
    python $srcdir/pjadalien.py $srcdir/streamlabels_0.3.8_amd64.deb
    sudo pacman -U $srcdir/streamlabels-0.3.8-1-x86_64.pkg.tar.gz
}
```

Como podemos ver este archivo usa 2 source, una que lo descarga desde la url y otro que se encuentra el en mismo repositorio, en este caso es un pjadalien.py que es nada más ni nada menos que archalien con una modificación para poder funcionar correctamente con el .deb que estamos utilizando.

```python
from __future__ import print_function
from __future__ import division
from __future__ import absolute_import
import sys
import os
from shutil import rmtree
from tempfile import mkdtemp
from getopt import gnu_getopt, GetoptError

pkgrel=1

def command_required(*cmd_list):
    """Check if the commands exist."""
    path = os.getenv('PATH')
    if path is not None:
        path_list = path.split(os.pathsep)
    else:
        print("The environment variable PATH is not defined.")
        sys.exit(1)

    for command in cmd_list:
        error = True

        for path in path_list:
            command_path = os.path.join(path, command)
            if os.access(command_path, os.X_OK):
                error = False
                break

        if error:
            print('The command \'%s\' is not found.' % command)
            sys.exit(1)


def fix_input_pkg(input_pkg):
    """Verify and fix the input package path.

    It returns the input package, modified.

    """
    if not os.path.isfile(input_pkg):
        print('\'%s\' doesn\'t exist.' % input_pkg)
        sys.exit(1)

    if not os.access(input_pkg, os.R_OK):
        print('\'%s\' is not accessible in reading.' % input_pkg)

    (_, input_ext) = os.path.splitext(input_pkg)

    if input_ext != '.deb':
        print('The extension of \'%s\' must be *.deb.' % input_pkg)
        sys.exit(1)

    # Convert to the absolute path
    input_pkg = os.path.abspath(input_pkg)

    return input_pkg


def usage():
    """Called when the user uses --help."""
    print('Convert a Debian or an RPM Package into an Arch Linux package'
          ' (and vice-versa).')
    print()
    print('Usage: %s [OPTIONS] debian_package.deb [arch_package.pkg.tar.gz]'
          % os.path.basename(sys.argv[0]))
    print()
    print("OPTIONS :")
    print("          -h, --help            Show this help")
    print()
    sys.exit(0)


def more_informations():
    """Asks the user to use --help."""
    print("--help for more informations.")
    sys.exit(1)


def handle_arguments():
    """Handle all options in the arguments.

    This function returns a dictionary that contain
    'input_pkg' and 'output_pkg' keywords.

    """
    result = {'input_pkg': '', 'output_pkg': ''}

    try:
        args = sys.argv[1:]
        optlist = gnu_getopt(args, 'h', ['help'])
    except GetoptError:
        print('Error when parsing arguments.')
        more_informations()

    if len(sys.argv) < 2:
        print('No input file.')
        more_informations()

    for option, _ in optlist[0]:
        if option in ['-h', '--help']:
            usage()

    result['input_pkg'] = optlist[1][0]

    if len(sys.argv) > 3:
        result['output_pkg'] = optlist[1][1]

    return result


def read_debcontrol(path):
    """Read some informations from debian/control."""
    result = {'name': '', 'maintainer': '', 'version': '',
              'description': '', 'size': '', 'architecture': ''}

    try:
        filedesc = open(path, 'r')
    except IOError:
        print('Cannot read debian package informations from \'%s\'.' % path)
        sys.exit(1)

    for line in filedesc.readlines():
        line = line.rstrip('\n')
        try:
            (variable, value) = [splited.strip().lower()
                                 for splited in line.split(':', 1)]
        except ValueError:
            continue

        if variable == 'package':
            result['name'] = value
        if variable == 'installed-size':
            result['size'] = value
        if variable == 'version':
            try:
                before, after = value.split(':')
            except ValueError:
                result[variable] = value
            else:
                result[variable] = after

            result[variable] = result[variable].replace('-', '_')
        elif variable in ['maintainer', 'version', 'description']:
            result[variable] = value
        elif variable == 'architecture':
            if value == 'amd64':
                result['architecture'] = 'x86_64'
            elif value == 'i386':
                result['architecture'] = 'i686'  # on Arch Linux, i686 only
            elif value == 'i686':
                result['architecture'] = 'i686'
            else:
                result['architecture'] = 'all'

    filedesc.close()

    for key, value in list(result.items()):
        if value == '' and key not in ['size']:
            print('The debian package doesn\'t '
                  'contain all needed informations.\n'
                  'The variable \'%s\' is empty.' % key)
            ##sys.exit(1)

    return result


def write_archcontrol(path, pkginfo):
    """Write an Arch Linux PKGINFO in 'path'.

    'pkginfo' is a dictionary that contain some informations
    returned by read_debcontrol().

    """
    try:
        filedesc = open(path, 'w')
    except IOError:
        print('\'%s\' is not accessible in writing.' % path)
        sys.exit(1)

    filedesc.write('# Generated by Alien Arch\n')
    filedesc.write('pkgname = %s\n' % pkginfo['name'])
    filedesc.write('pkgver = %s-%s\n' % (pkginfo['version'], pkgrel))
    filedesc.write('pkgdesc = %s\n' % pkginfo['description'])
    filedesc.write('packager = Arch Linux, Alien Arch '
                   '(http://www.archlinux.org)\n')
    filedesc.write('size = %s\n' % pkginfo['size'])
    filedesc.write('arch = %s\n' % pkginfo['architecture'])
    filedesc.write('license =\n')
    # filedesc.write('url =\n')
    # filedesc.write('builddate =\n')
    # filedesc.write('depend =\n')

    filedesc.close()


def convert(input_pkg, output_pkg=''):
    """Convert a Debian package to an Arch Linux package.

    input_pkg contains the input package, with *.deb extension.

    output_pkg contains the output package, with *.pkg.tar.gz extension. This
    argument is not obligatory.

    """
    (input_tmpd, output_tmpd) = (mkdtemp(), mkdtemp())

    input_pkg = fix_input_pkg(input_pkg)
    print('Conversion of %s...' % os.path.basename(input_pkg))
    print()

    def chdir(directory):
        """Change the directory."""
        try:
            os.chdir(directory)
        except OSError:
            print('Cannot chdir to %s.' % directory)
            sys.exit(1)

    try:
        chdir(input_tmpd)

        # Extraction of the deb archive
        os.system('ar x \'%s\'' % input_pkg)

        if os.path.exists('data.tar.gz'):
            data_path = 'data.tar.gz'
        else:
            for found_data_path in os.listdir('.'):
                if found_data_path.find('data.tar') == 0:
                    data_path = found_data_path
                    break

            if data_path == '':
                print("The data archive wasn't found inside %s" % input_pkg)
                sys.exit(1)

        # Extraction of control.tar.gz and data.tar.x
        os.system('tar xf \'%s\' -C \'%s\'' %
                  (os.path.join(input_tmpd, data_path),
                   output_tmpd))
        os.system('tar xf \'%s\'' %
                  (os.path.join(input_tmpd, 'control.tar.gz')))

        # Reading 'control' file, from the deb archive
        deb_info = read_debcontrol(os.path.join(input_tmpd, 'control'))

        # If the output filename is not specified, it will be created
        if output_pkg == '':
            output_pkg = os.path.join(os.path.dirname(input_pkg),
                                      '%s-%s-%s-%s''.pkg.tar.gz'
                                      % (deb_info['name'], deb_info['version'],
                                         pkgrel, deb_info['architecture']))

        # Creating Arch Linux package
        chdir(output_tmpd)
        os.system('find . -type f | sed -e \'s/^\\.\\///\' > .FILELIST')
        write_archcontrol('.PKGINFO', deb_info)
        os.system('tar zcf \'%s\' * .PKGINFO .FILELIST' % output_pkg)

        print("done.")
        print()
        print('The Arch Linux package:\n%s' % output_pkg)
    finally:
        rmtree(input_tmpd, True)
        rmtree(output_tmpd, True)


if __name__ == '__main__':
    try:
        command_required('ar', 'tar', 'find', 'sed')
        DATA = handle_arguments()
        convert(DATA['input_pkg'],
                DATA['output_pkg'])
    except KeyboardInterrupt:
        print("Interrupted.")

# vim:ai:et:sw=4:ts=4:sts=4:tw=78:fenc=utf-8
```

## .SRCINFO

Este es un archivo que si lo olvidamos solo trae problemas por lo cual yo tengo como regla personal siempre antes de hacer un commit a un repositorio AUR ejecutar este pequeño comando que se encarga nada más ni nada menos de actualizar este archivo el cual es necesario para que el commit sea aceptado.

```Shell
makepkg --printsrcinfo > .SRCINFO
```

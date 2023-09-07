---
title: 'Obteniendo información de comandos'
date: '2020-09-22 10:02:00'
description: 'Los comandos que usamos a diario tienen mucha informacion y vamos a ver como encontrarla'
type: 'post'
tags:
    [
        'help',
        'linux',
        'apropos',
        'comandos',
        'terminal',
        'consola',
        'man',
        'whatis',
    ]
categories: ['Linux']
img: 'https://i.postimg.cc/zvjB480Z/image.png'
authors: ['PatoJAD']
---

En esta oportunidad vamos a obtener más información sobre los comandos que podemos encontrar en nuestro Shell. Para esto vamos utilizar las herramientas que nos ofrecen con este fin.

## **help** – Ofrece ayuda sobre los shell builtins

bash tiene una ayuda integrada disponible para cada shell builtin. Para usarla, escribimos “help” seguido del nombre del shell builtin. Por ejemplo:

    help cd

Que genera una salida como la siguiente

    cd: cd [-L|[-P [-e]]] [dir]
    Change the shell working directory.

    Change the current directory to DIR. The default DIR is the value of the HOME shell variable.

    The variable CDPATH defines the search path for the directory containing DIR. Alternative directory names in CDPATH are separated by a colon (:). A null directory name is the same as the current directory. If DIR begins with a slash (/), then CDPATH is not used.

    If the directory is not found, and the shell option `cdable_vars' is set, the word is assumed to be a variable name. If that variable has a value, its value is used for DIR.

    Options:
    -L   force symbolic links to be followed
    -P   use the physical directory structure without following symbolic links
    -e   if the -P option is supplied, and the current working directory cannot be determined successfully, exit with a non-zero status

    The default is to follow symbolic links, as if `-L' were specified.

    Exit Status:
    Returns 0 if the directory is changed, and if $PWD is set successfully when -P is used; non-zero otherwise.

**Una nota sobre la notación:** Cuando aparecen corchetes en la descripción de la sintaxis de un comando, indican opciones adicionales. Una barra vertical indica que son elementos excluyentes entre ellos.

## **--help** – Muestra información de uso

![](https://i.postimg.cc/zvjB480Z/image.png)

Muchos programas ejecutables soportan una opción “--help” que muestra una descripción de la sintaxis y las opciones soportadas por el comando. Por ejemplo:

    mkdir --help

Que genera una salida como la siguiente

    Usage: mkdir [OPTION] DIRECTORY...
    Create the DIRECTORY(ies), if they do not already exist.

        -Z, --context=CONTEXT (SELinux) set security context to CONTEXT Mandatory arguments to long options are mandatory for short options too.
        -m, --mode=MODE   set file mode (as in chmod), not a=rwx – umask
        -p, --parents     no error if existing, make parent directories as needed
        -v, --verbose     print a message for each created directory
            --help        display this help and exit
            --version     output version information and exit


    Report bugs to <bug-coreutils@gnu.org>.

Algunos programas no soportan la opción “--help”, pero es importante probarlos de todas formas. A menudo el resultado es un error que revelará la misma información de uso.

## **man** – Muestra el manual de un programa

La mayoría de los programas ejecutables pensados para usarse en la línea de comandos proveen un documento llamado manual page o man page. Se usa un programa de paginación especial llamado man para verlos. Se usa así:

    man programa

![](https://i.postimg.cc/G2jdmzYv/image.png)

Donde “programa” es el nombre del comando que queremos ver. Las man pages varían algo en formato pero generalmente contienen un título, una sinopsis de la sintaxis del comando, una descripción del propósito del comando y una lista y descripción de cada opción del comando. Las man pages, de todas formas, no suelen incluir ejemplos, y están pensadas como una referencia, no como un tutorial. Como ejemplo, probaremos a ver la man page para el comando ls:

    man ls

En la mayoría de los sistemas Linux, man usa less para mostrar la man page, así que todos los comandos de less que nos son familiares funcionan cuando está mostrado la página.

**Si quieres saber más sobre man te dejo [un articulo](/post/2019/01/man-tu-manual-para-linux/) para leer**

## **apropos** – Muestra comandos apropiados

![](https://i.postimg.cc/ZYGzz1XX/image.png)

También es posible buscar en el listado de las man pages posibles coincidencias basadas en un término de búsqueda. Es muy tosco pero a veces ayuda. Aquí tienes un ejemplo de una búsqueda en las man pages utilizando el término de búsqueda “floppy”:

    apropos floppy

Generando una salida como:

    create_floppy_devices (8) - udev callout to create all possible floppy device based on the CMOS type
    fdformat              (8) - Low-level formats a floppy disk
    floppy                (8) - format floppy disks
    gfloppy               (1) - a simple floppy formatter for the GNOME
    mbadblocks            (1) - tests a floppy disk, and marks the bad blocks in the FAT
    mformat               (1) - add an MSDOS filesystem to a low-level formatted floppy disk

El primer campo de cada línea es el nombre de la man page, el segundo campo muestra la sección. Fíjate que el comando man con la opción “-k” ofrece exactamente la misma función que apropos.

## **whatis** – Muestra una descripción muy breve de un comando

![](https://i.postimg.cc/bwvTCv3P/image.png)

El programa whatis muestra el nombre y una descripción de una línea de una man page coincidente con una palabra especificada:

    whatis ls

Y genera una salida muy simple como la siguiente!

    ls               (1) - list directory contents

---

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

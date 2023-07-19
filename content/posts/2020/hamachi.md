---
title: '¿Como instalar Hamachi?'
date: '2020-12-11 09:13:00'
description: 'Una app que nos permite generar una red privada virtual, de esta forma podemos compartir recursos, jugar en “LAN”, y muchas cosas mas...'
type: 'aplicaciones'
tags:
    [
        'hamachi',
        'vpn',
        'debian',
        'arch',
        'ubuntu',
        'centos',
        'fedora',
        'rhel',
        'macos',
        'windows',
        'vpn',
        'logmain',
        'instalar',
        'deb',
        'rpm',
    ]
categories: ['Aplicaciones', 'Linux', 'Windows', 'MacOS']
img: 'https://i.postimg.cc/2yhM8CmK/image.png'
authors: ['PatoJAD']
---

![](https://i.postimg.cc/2yhM8CmK/image.png)

Hamachi es una app que nos permite generar una red privada virtual, de esta forma podemos compartir recursos, jugar en “LAN”, y muchas cosas más con personas que no se encuentran en la misma red, o en el mismo país…

## Debian Based

Para instalarlo en cualquier debian based tenemos que descargar el .deb e instalarlo, a continuación dejo los comandos actualizados al dia de la fecha.

```shell
wget https://www.vpn.net/installers/logmein-hamachi_2.1.0.203-1_amd64.deb
sudo dpkg -i logmein-hamachi_2.1.0.203-1_amd64.deb
sudo apt install -f
```

En el caso de que tengas una pc 32 bits, tranca palanca que estos ñatos tienen los 32 bits a manopla:

```shell
wget https://www.vpn.net/installers/logmein-hamachi_2.1.0.203-1_i386.deb
sudo dpkg -i logmein-hamachi_2.1.0.203-1_i386.deb
sudo apt install -f
```

## Fedora (y Similares)

También puede ser que tengas por ahi Fedora, CentOS o RHEL y quieras tener hamachi, no hay drama la instalación es asi de simple.

```shell
wget https://www.vpn.net/installers/logmein-hamachi-2.1.0.203-1.x86_64.rpm
sudo rpm –i logmein-hamachi-2.1.0.203-1.x86_64.rpm
```

Y si tu pc es 32 bits seria algo asi:

```shell
wget https://www.vpn.net/installers/logmein-hamachi-2.1.0.203-1.i486.rpm
sudo rpm –i logmein-hamachi-2.1.0.203-1.i486.rpm
```

## Cualquier otra distro

Existe una forma de instalarlo independientemente de la distro que estemos usando. Para esto debemos seguir los siguientes pasos:

```shell
wget https://www.vpn.net/installers/logmein-hamachi-2.1.0.203-x64.tgz
tar -xvzf logmein-hamachi-2.1.0.203-x64.tgz
cd logmein-hamachi-2.1.0.203-x64
./install.sh
```

Y en el caso de tener un Linux con 32 Bits podemos hacerlo de la siguiente manera:

```shell
wget https://www.vpn.net/installers/logmein-hamachi-2.1.0.203-x86.tgz
tar -xvzf logmein-hamachi-2.1.0.203-x86.tgz
cd logmein-hamachi-2.1.0.203-x86
./install.sh
```

## ARM

Existen unos compilados en BETA para esta arquitectura, a continuación dejo la web oficial de descarga donde no solo podrán obtener los ARM sino también podrán comprobar que la versión que puse sea la más actualizada.

{{< link text="ARM en Linux" url="https://www.vpn.net/linux" >}}

## Windows

![](https://imag.malavida.com/mvimgbig/download-fs/hamachi-1410-1.jpg)

En el caso de que uses Windows bastará con descargar el archivo .msi (Que veran a continuacion) e instalarlo con un doble click. Es importante recalcar que la descarga es directamente de la página oficial, no está alojado por este blog ni ningún otro

{{< link text="Descargar Para Windows" url="https://secure.logmein.com/hamachi.msi" >}}

## MacOS

![](https://images.sftcdn.net/images/t_app-cover-m,f_auto/p/2bea4bde-96d7-11e6-878e-00163ed833e7/2690128288/logmein-hamachi-screenshot.jpg)

En el caso de usar el sistema de la manzanita me cuesta un poco más poder definir correctamente el procedimiento porque no uso este sistema pero si puedo facilitarte la descarga oficial de su sitio y de ahi calculo que no debe ser muy complejo

{{< link text="Descargar para MacOS" url="https://secure.logmein.com/LogMeInHamachi.zip" >}}

---

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

---
title: 'Scrcpy'
date: '2020-11-13 09:32:00'
description: 'Hoy usaremos nuestro movil desde '
type: 'post'
tags:
    [
        'scrcpy',
        'android',
        'arch',
        'debian',
        'ubuntu',
        'snap',
        'windows',
        'integracion',
    ]
categories: ['Aplicaciones', 'Linux']
img: 'https://i.postimg.cc/BZzC6LnL/Captura-de-pantalla-de-2020-11-13-08-49-00.png'
authors: ['PatoJAD']
---

En lo personal soy una persona que dependo mucho de mi dispositivo celular para poder trabajar, ya que en el tengo apps relacionadas con 2FA y varios y realmente no es cómodo estar cambiando de dispositivo todo el tiempo, y más cuando olvidamos cargar el celular y no tiene la batería suficiente.

![](https://i.postimg.cc/BZzC6LnL/Captura-de-pantalla-de-2020-11-13-08-49-00.png)

Esta aplicación que estamos mostrando hoy es una solución para la gente como yo, que les gusta dejar el Celular conectado por USB y seguirlo usando sin sacar las manos del teclado.

## Instalación

Esta aplicación puede ser realmente útil dependiendo el usuario, por lo cual vamos a ir viendo el proceso de instalación para las diferentes distros.

### Debian/Ubuntu

En este caso vamos a encontrarlo en debian sid o testing y en ubuntu 20.04 (Antix lo tiene desde la versión 19) en adelante. De no tener estos repositorios lo más probable es que no lo encuentres para su uso. La instalación se hace mediante apt de la siguiente forma:

```bash
sudo apt install scrcpy
```

### Arch y derivadas

En este caso vamos a hacer uso de los repositorios de la comunidad conocidos como AUR en esta oportunidad vamos a tener las últimas versiones. Para esto vamos a hacer uso de YAY de la siguiente manera:

```bash
yay -S scrcpy
```

### Otras bases y distros

Podemos encontrar esta hermosa app en todas las distros de GNU/Linux pero puede que en algunos casos tengamos algún problema de dependencia, o simplemente el hecho de que queramos tener una versión actual nos puede empujar a cosas buenas (como instalar Arch) o cosas malas (como usar Snap). En fin, hay que saber que tenemos a disponibilidad el Snap para simplificar la instalación en diferentes distros.

```bash
snap install scrcpy
```

### Windows

En windows tenemos muchas posibilidades de instalarlo, como descargar el zip desde su git, sin embargo es importante mantener todo bien organizado y con buen funcionamiento, para lo cual recomiendo instalar Chocolatey

```cmd
choco install scrcpy
choco install adb
```

## Usando la app

En mi caso al instalarlo por AUR no me creo ningun icono entre mis apps pero podía ejecutarlo simplemente por la terminal de la siguiente forma:

```bash
scrcpy
```

Luego cree mi propio icono en el menú, pero bastará con ejecutarlo y tener nuestro celular conectado por usb. Es importante recordar que el celular tiene que tener el modo desarrollador y el USB debug. Para chequearlo podemos ver que lo reconozca adb de la siguiente manera.

```bash
adb devices
```

![](https://i.postimg.cc/7YTnTH5B/Captura-de-pantalla-de-2020-11-13-09-15-56.png)

En caso de tener algún error o necesitar ayuda no te olvides que estamos disponibles en el grupo de Telegram para todos ustedes!

[Unite a nuestra comunidad](https://t.me/PatoJADCommunity)

---

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

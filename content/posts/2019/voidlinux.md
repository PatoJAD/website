---
title: 'VoidLinux por José'
date: '2019-09-02'
description: 'José nos trae todo lo que tenemos que saber sobre Void Linux'
type: 'linux'
tags:
    [
        'linux',
        'void',
        'systemd',
        'xbps',
        'xbps-src',
        'musl',
        'glibc',
        'runit',
        'openrc',
        'linux',
        'distro',
        'distro linux',
        'distro independiente',
        'independiente',
        'independiente linux',
    ]
category: ['Linux']
img: 'https://i.blogs.es/5d2c62/void_linux/1366_2000.jpg'
authors: ['Jose Ma']
---

Hoy les hablaré un poco sobre una distribución muy subvalorada a mi parecer, una distribución Linux que mucha gente ni siquiera habrá nombrado mencionar y muchos menos la conocen siquiera. Hoy les voy a hablar sobra la magnífica {{< textlink text="Void Linux" url="www.voidlinux.org">}}.

Void Linux es una distribución de Linux absolutamente independiente, construida sobre Scratch – por lo que es un desarrollo totalmente original. Fue creada por el español Juan Romero Pardines y su primera versión fue lanzada en el año 2008. Utiliza un gestor de paquetes único también, denominado XBPS (X Binary Package System) el cual también fue diseñado e implementado desde cero. XBPS es un sistema de paquetes con licencia libre BSD con ciertas similitudes con pacman en su sintaxis y al igual que pacman es muy rápido.

XBPS es capaz de manejar los mas de 6000 programas que están disponibles en los repos de Void Linux y es capaz de compilar directamente desde las fuentes del propio software (XBPSSRC). La compilación la realiza sin ser root necesariamente.

{{< img src="https://i.ytimg.com/vi/hCgOsJ2cRTs/maxresdefault.jpg" >}}

Void Linux es una distribución “rolling release”, que se distribuye en distintas .isos (32 y 64 bits) con una gran variedad de entornos de escritorio disponibles: hay imágenes .isos con: Cinnamon, LXQT, LXDE, MATE, XFCE y Enlightenment. También hay disponibles .isos sin entornos de escritorios disponibles, para quienes quieran armar un sistema a su medida.

Otra de las mejores cualidades de Void Linux, es que utiliza Runit cómo su init, siendo una notable excepción al pésimo init de moda adoptado por la mayoría de las distribuciones hoy en día. Runit es un sistema mucho mas simple y mucho mas rápido que el tristemente famoso {{< textlink text="SystemD" url="https://patojad.com.ar/linux/nosystemd/" >}}. De hecho, cuando probé la distribución me sorprendió lo veloz que iba el sistema y la velocidad de inicio (arrancando varios servicios del sistema en paralelo) y apagado (en todos los casos, superior al init desarrollado por Red Hat). Ojalá otras distribuciones adoptaran este init, es excelente sin dudas.

{{< img src="https://i2.wp.com/itsfoss.com/wp-content/uploads/2019/04/Void-Linux-Neofetch.png?resize=800%2C562&ssl=1" >}}

La instalación de Void Linux, me hace recordar a la mejor distribución que existe en la faz de la Tierra (opinión personal, claro). A la venerable Slackware. Todo se realiza en la terminal, no existen los instaladores gráficos en Void (nada de Calamares, Ubiquity u otros). Simplemente, se abre la terminal y se escribe sudo void-installer (la contraseña es voidlinux) y se van siguiendo los pasos en el orden que aparecen en la pantalla. No es complicada de instalar, pero recomiendo hacerlo siguiendo los innumerables tutoriales que se encuentran en toda la web tanto en páginas web cómo en videos que existen en YouTube.

Void Linux fue la distribución pionera en la implementación de LibreSSL el cual es desarrollado por la gente de OpenBSD, sustituyendo a OpenSSL – es un fork del mismo, (recuerdan el desagradable episodio de inseguridad Heartbleed).

Si todo lo que les he comentado en el presente artículo, les ha gustado… Recomiendo que le den una oportunidad y descarguen una imagen Live de la distro y la prueben. También otra particularidad mas que presenta Void Linux, es que cuando vayan a descargar la distro se van a topar con 2 tipos de imágenes: están las imágenes comunes las que contienen la biblioteca estándar en GNU/Linux (Biblioteca GNU C) proporcionada por GLIBC (cómo lo hacen todas las distribuciones Linux) y están las imágenes con MUSL la cual es otra biblioteca C mas estándar por llamarlo de alguna manera a la que se vincularán muchos programas FOSS. MUSL es más liviano y rápido que GLIBC, pero puede ser incompatible con cierto software que no está escrito estrictamente para el estándar C. El GLIBC es más grande y generalmente más lento, pero permite y puede acomodar software que no está escrito correctamente en el estándar C debido a su implementación más indulgente.

{{< img src="https://i0.wp.com/techpadi.com/wp-content/uploads/2018/12/b7u0z2j3rloz.png?fit=1366%2C768" >}}

{{< link url="www.voidlinux.org/download/" text="Descargar" >}}

<center class="text-white"> Al final de la mencionada página, van a encontrar varios mirrors de descargas.</center>

Muy bien, esto ha sido todo por el momento. Como ya se habrán dado cuenta, no es obviamente una distribución Linux para todo el mundo, pero quienes busquen un sistema rápido, sin hinchazón de programas, muy novedoso y fiable, quizás Void Linux es lo que han estado buscando. Se los recomiendo. Hasta la próxima colegas….

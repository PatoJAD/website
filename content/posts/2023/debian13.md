---
title: 'Debian 12, ¿Que cambios tiene?'
date: '2023-06-11 11:34:00.00'
description: 'Mas allá de una instalación que podemos ver en cualquier tutorial vamos a ver que cambios nos trae Debian 12 "Bookworm"'
type: 'post'
tags:
    [
        'debian',
        'debian 12',
        'changelog',
        'cambios',
        'actualizaciones',
        'update',
        'bookworm',
        'debian 12 bookworm',
        'debian 12 bookworm cambios',
        'debian 12 bookworm novedades',
        'non-free',
        'firmware',
        'firmware non-free',
        'firmware no libre',
    ]
categories: ['Linux', 'Noticias']
img: 'https://debianpolska.pl/wp-content/uploads/2023/02/Debian12-Bookworm.jpg.webp'
authors: ['PatoJAD']
---

Si bien en internet está lleno de videos, mostrando instalaciones, o “recorriendo” **Debian 12** la verdad es que no encontré ninguno que hablara de los cambios que esto tiene.

**Debian** es una distribución muy importante para todo el mundo Linux o GNU/Linux, incluso su manual, si bien está orientado a **Debian** nos ayuda entender cosas muy importantes sobre linux de una forma muy didáctica y aplicable a cualquier distribución…

## El anuncio

No es difícil suscribirse a las listas de correo de **Debian** y recibir todas las novedades, pero muchos de los _Linuxtubers_ de turno ni se toman el tiempo de leer antes de hacer una “Review”

Por lo cual me gustaría brindar esta información para llenar esas reviews que claramente yo no voy a hacer…

> After 1 year, 9 months, and 28 days of development, the **Debian** project
> is proud to present its new stable version 12 (code name "bookworm").

o en español

> Después de 1 año, 9 meses y 28 días de desarrollo, el proyecto **Debian** se enorgullece en presentar su nueva versión estable 12 (nombre en clave "bookworm").

"bookworm" será “soportado” durante los próximos 5 años gracias a la combinación trabajo del [equipo de seguridad de Debian](https://security-team.debian.org/) y al [equipo de Debian LTS](https://wiki.debian.org/LTS).

## Resolución non-free

De acuerdo con la resolución de paquetes no libres (del 2022 que generó polémica para aquellos que siguen un ideal no financiado más que la usabilidad) se decidió separar el [firmware no libre](https://www.debian.org/vote/2022/vote_003) del resto de paquetes no libres, con el fin de poder elegir el uso del firmware y no de librerías o software non free (Lo que parece un punto medio entre la lógica de tener una distro usable en cualquier equipo y el intento de usar software libre todo lo que sea posible)

## Escritorios

Llega con algunas actualizaciones en los escritorios más populares, podemos resaltar los siguientes:

-   Gnome 43,
-   KDE Plasma 5.27,
-   LXDE 11,
-   LXQt 1.2.0,
-   MATE 1.26,
-   Xfce 4.18

## Cambios en los respositorios

Esta versión contiene más de 11.089 paquetes nuevos para un recuento total de 64.419 paquetes, mientras que más de 6.296 paquetes han sido retirados como "obsoleto". En esta versión se actualizaron 43.254 paquetes. El general el uso del disco para "bookworm" es de 365.016.420 kB (365 GB) y está compuesto por 1.341.564.204 líneas de código.

### Relevante para servidores

Debian 12 "bookworm" incluye numerosos paquetes de software actualizados (más de 67% de todos los paquetes de la versión anterior), tales como:

-   Apache 2.4.57
-   BIND DNS Server 9.18
-   Cryptsetup 2.6
-   Dovecot MTA 2.3.19
-   Emacs 28.2
-   Exim (default email server) 4.96
-   GNU Compiler Collection 12.2
-   GnuPG 2.2.40
-   The GNU C Library 2.36
-   lighthttpd 1.4.69
-   Linux kernel 6.1 series
-   LLVM/Clang toolchain 13.0.1, 14.0 (default), and 15.0.6
-   MariaDB 10.11
-   Nginx 1.22
-   OpenJDK 17
-   OpenLDAP 2.5.13
-   OpenSSH 9.2p1
-   Perl 5.36
-   PHP 8.2
-   Postfix MTA 3.7
-   PostgreSQL 15
-   Python 3, 3.11.2
-   Rustc 1.63
-   Samba 4.17
-   systemd 252
-   Vim 9.0

---

Fuente: debian-announce@lists.debian.org

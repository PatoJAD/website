---
title: Abrir puertos aaPanel
date: '2023-07-07 11:54:00.00'
description: Vamos a ver como abrir los puertos de aapanel en Debian, Ubuntu y Centos. De una forma simple y rapida.
type: video
videoId: 841us_UDqJA
tags: [aapanel, cpanel, panel, webserver, simple, ports, gratis, debian, ubuntu, centos, deepin, python, php, mysql, puertos, aapanel ports, abrir puertos, abrir puertos aapanel, configurar puertos, configurar puertos aapanel]
categories: [Linux, Aplicaciones]
img: https://i.postimg.cc/XNRRTBwn/aapanel.webp
authors: [PatoJAD]
---

Vamos a ver que puertos tenemos que tener habilitados para que aapanel funcione correctamente. Y como abrirlos en nuestro servidor utilizando `ufw`. Recuerda que si instalaste tal como lo vimos en el video anterior de [instalar aapanel](/post/2023/06/instalar-aapanel/) y no estas pudiendo ingresar a la url que dio el panel entonces es porque alguno de estos puertos no se encuentra abierto.

## ¿Qué es aaPanel?

**aaPanel** es un panel de control de hosting web gratuito y de código abierto que facilita la administración de servidores. Proporciona una interfaz gráfica intuitiva y amigable que permite a los usuarios gestionar servicios como **Apache**, **Nginx**, **PHP**, bases de datos y más, sin necesidad de conocimientos técnicos avanzados.

## Puertos

Los puertos que tenemos que abrir son los siguientes:

-   **20** - FTP
-   **21** - FTP
-   **80** - HTTP
-   **443** - HTTPS
-   **888** - aaPanel
-   **3306** - MySQL // Si necesitas acceder desde fuera del servidor
-   **8888** - phpMyAdmin
-   **7800** - aaPanel

## Comandos

A continuacion dejo los comandos utilizados en el video.

```bash
ufw allow 20
ufw allow 21
ufw allow 80
ufw allow 443
ufw allow 888
ufw allow 3306
#ufw allow 8888 // En mi caso no
ufw allow 7800
```

* * *

Fuente: <https://www.aapanel.com/>

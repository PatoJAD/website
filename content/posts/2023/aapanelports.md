---
title: 'Abrir puertos aapanel'
date: '2023-07-07 11:54:00.00'
description: 'Vamos a ver como abrir los puertos de aapanel en Debian, Ubuntu y Centos. De una forma simple y rapida.'
type: 'post'
tags:
    [
        'aapanel',
        'cpanel',
        'panel',
        'webserver',
        'simple',
        'ports',
        'gratis',
        'debian',
        'ubuntu',
        'centos',
        'deepin',
        'python',
        'php',
        'mysql',
        'puertos',
        'aapanel ports',
        'abrir puertos',
        'abrir puertos aapanel',
        'configurar puertos',
        'configurar puertos aapanel',
    ]
categories: ['Linux', 'Aplicaciones']
img: 'https://i.postimg.cc/XNRRTBwn/aapanel.webp'
authors: ['PatoJAD']
---

Vamos a ver que puertos tenemos que tener habilitados para que aapanel funcione correctamente. Y como abrirlos en nuestro servidor utilizando `ufw`. Recuerda que si instalaste tal como lo vimos en el video anterior de {{< textlink text="instalar aapanel" link="/post/2023/06/instalar-aapanel/" >}} y no estas pudiendo ingresar a la url que dio el panel entonces es porque alguno de estos puertos no se encuentra abierto.

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

## Video

Dejo a continuacion el video donde explico como abrir los puertos en el servidor utilizando `ufw`.

{{< youtube id="841us_UDqJA" >}}

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

---

Fuente: https://www.aapanel.com/

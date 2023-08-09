---
title: Instalar aaPanel
date: '2023-06-21 11:34:00.00'
description: Veamos la forma correcta de instalar aapanel en Debian, Ubuntu y Centos. De una forma simple y rapida.
type: post
tags: [aapanel, cpanel, panel, webserver, simple, instalacion, gratis, debian, ubuntu, centos, deepin, python, php, mysql, aapanel install, aapanel install debian, aapanel install ubuntu, aapanel install centos]
categories: [Linux, Aplicaciones]
img: https://i.postimg.cc/XNRRTBwn/aapanel.webp
authors: [PatoJAD]
---

aaPanel es un software que mejora la eficiencia de la gestión de servidores admite más de 100 funciones, como LEMP/LNMP/monitor/FTP/base de datos con un solo clic Después de más de 80 iteraciones, es completamente funcional y seguro, y ha sido aprobado e instalado por millones de usuarios en todo el mundo.

## Caracteristicas

-   **Website Manager:** Cree un sitio web de administración a través del panel y complete varias configuraciones de manera fácil y sencilla.
-   **Database Manager:** Un clic para crear, configurar, respaldar, restaurar la base de datos.
-   **File Manager:** Un administrador de archivos conveniente y eficiente que admite carga, descarga, empaquetado, descompresión y edición y visualización de archivos.
-   **App Store:** El software del servidor utilizado para la instalación se puede administrar fácilmente a través de la interfaz web.

{{< link text="Demo" link="http://demo.aapanel.com/fdgi87jbn" >}}

## Planes

### Basico

-   **Precio:** Gratis
-   **Sitios:** Ilimitados
-   Número **ilimitado** de dominios
-   Certificado SSL ilimitado (Let's Encrypt)
-   Protección de seguridad básica
-   Administrador de archivos con todas las funciones
-   Editor de archivos en línea
-   Use todos los complementos gratuitos

### Profesional

-   **Precio:** 14.5 USD/mes - 118.32 USD/año
-   **Sitios:** Ilimitados
-   Número **ilimitado** de dominios
-   Certificado SSL ilimitado (Let's Encrypt)
-   Protección de seguridad básica
-   Administrador de archivos con todas las funciones
-   Editor de archivos en línea
-   Use todos los complementos gratuitos
-   Use todos los complementos profesionales
    -   Nginx/Apache WAF
    -   Aplicación de teléfono móvil
    -   Sistema de endurecimiento
    -   Estadísticas del sitio web
    -   etc.

* * *

[Mas información](https://www.aapanel.com/new/pricing.html)

## Instalacion

{{< youtube id="nMUV835Yke8" >}}

### Comandos Utilizados

Para centos:

```bash
yum install -y wget && wget -O install.sh http://www.aapanel.com/script/install_6.0_en.sh && bash install.sh aapanel
```

Para deepin/ubuntu:

```bash
wget -O install.sh http://www.aapanel.com/script/install-ubuntu_6.0_en.sh && sudo bash install.sh aapanel
```

Para debian:

```bash
wget -O install.sh http://www.aapanel.com/script/install-ubuntu_6.0_en.sh && bash install.sh aapanel
```

{{< warning text="Asegúrese de que es un sistema operativo limpio, no hay otro entorno con Apache/Nginx/php/MySQL instalado (el entorno existente no se puede instalar)" >}}

{{< info text="Se recomienda utilizar los navegadores Chrome, Firefox y edge para acceder a la dirección de inicio de sesión del panel" >}}

* * *

[Fuente](https://www.aapanel.com/)

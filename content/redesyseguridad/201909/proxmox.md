---
title: '¿Que es proxmox?'
date: '2019-11-05'
description: 'Hoy vamos a hablar de Proxmox VE una distro para la virtualización '
type: 'redesyseguridad'
tags: ["Facebook","Clave","Filtrada"]
category: ["redesyseguridad"]
img: 'https://i.ytimg.com/vi/YVIJnFzobCg/maxresdefault.jpg'
authors: ["PatoJAD"]
---

## Proxmox Virtual Environment

{{< br >}}

Proxmox Virtual Environment (También conocido como ProxmoxVE) es un entorno de virtualización de servidores de Código Abierto distribuido bajo la licencia GPL. Es, más bien, una distribución de GNU/Linux basados en nada más ni nada menos que la madre de todas las distros Debian, pero con la simple diferencia que su Kernel fue cambiado por una versión modificada del kernel de RHEL una distro enfocada en la nube y servidores.

{{< img src="http://www.centrodeserviciosti.com.mx/wp-content/uploads/2018/02/proxmox4_webgui-1110x550.png" >}}

Proxmox, a diferencia de otros, incluye una consola Web y herramienta de líneas de comando. También proporciona una API REST (que dicho sea de paso se puede testear con nuestra {{< textlink text="restclient" url="https://rest.patojad.com.ar/" >}}) para herramientas de terceros. Es compatible con dos tipos de virtualización:
*	Los contenedores LXC
*	Y la virtualización con KVM

{{< br >}}

{{< publicidad >}}

## Historia

{{< br >}}

>El desarrollo de Proxmox VE empezó cuando Dietmar y Martin Maurer, dos desarrolladores de Linux, encontraron que OpenVZ no tenía ninguna herramienta de copias de seguridad y tampoco una GUI de administración. KVM fue apareciendo al mismo tiempo en Linux, y se añadió poco después. La primera versión pública tuvo lugar en abril de 2008, y la plataforma se ganó rápidamente atractivo uso. Fue una de las pocas plataformas en proporcionar soporte para contenedores fuera de lo común y una virtualización completa, administrado con una interfaz gráfica de usuario Web similares a las plataformas de ofertas comerciales.
>
>{{< citaname name="Wikipedia" >}}

## Características

{{< br >}}

{{< img src="https://www.ochobitshacenunbyte.com/wp-content/uploads/2017/08/Proxmox-VE-5-0-destacado.jpg" >}}

{{< br >}}

Proxmox destaca no solo por ser software libre, cosa que es muy importante sino también que salió al Mercado con mucha innovación y un nivel que hace frente a cualquier software privativo. Entre las cosas que se destacan la comunidad resalta:

* Es de código abierto
* Permite la migración en vivo
* Dispone de una alta habilitación de puentes de red
* Plantillas de construcción de SO
* Copias de seguridad programadas
* Herramientas de línea de comandos.

---

 Proxmox además de todo lo mencionado ya cuenta con mucha documentación. Y una comunidad muy activa. Dejamos también su {{< textlink text="Wiki" url="https://pve.proxmox.com/wiki/Main_Page" >}} una de las completas entre los proyectos de este alcance.

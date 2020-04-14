---
title: 'Actualiza GNU/Linux sin comandos con DistroUpdate'
date: '2020-04-14 11:22:00'
description: ' Los usuarios novatos prefieren usar herramientas gráficas que no todas las distribuciones tienen'
type: 'aplicaciones'
tags: ["popcorn","series","peliculas"]
category: ["Aplicaciones"]
img: 'https://instatecno.com/wp-content/uploads/2020/04/DistroUpdate-750x400.jpg'
authors: ["Juanro"]
---

Actualizar GNU/Linux para usuarios que conocen el sistema es muy fácil y sencillo, mas si se domina el terminal en el que **poniendo dos comandos ya estaría el sistema actualizado**. Los usuarios novatos no lo tienen tan sencillo y prefieren usar **herramientas gráficas que no todas las distribuciones tienen** o en algunos casos, no son fáciles de usar. Debido a esto se me ocurrió la idea de «crear» **DistroUpdate, una herramienta para actualizar el sistema gráficamente de forma sencilla.**

Lo de crear está entre comillas debido a que **DistroUpdater es un fork de mintUpdate,** la herramienta de actualización de Linux Mint que en mi opinión es una de las mas atractivas visualmente y fácil de usar, la cual he adaptado para **poder utilizarla en cualquier distribución basada en Debian o Ubuntu sin limitaciones.**

{{< br >}}
{{< br >}}

## Instalar DistroUpdate

{{< br >}}

DistroUpdate está disponible en {{< textlink text="Github" url="https://github.com/juanro49/distroupdate" >}} y para instalarlo hay que realizar los siguientes pasos:

Añadir el {{< textlink text="repositorio de PatoJAD" url="/repositorio/" >}} al sistema:

{{< br >}}

    echo 'deb https://gitlab.com/patojad/repository/raw/patojad/debs/ patojad main' | sudo tee /etc/apt/sources.list.d/patojad.list
    wget -qO - https://gitlab.com/LynxOS/repository/raw/lynxos/LynxPub.gpg | apt-key add -
    sudo apt update

{{< br >}}

**Instalar DistroUpdate** desde el nuevo repositorio

{{< br >}}

    sudo apt install distroupdate

{{< br >}}

Una vez instalado, solo tendremos que **iniciarlo y él solo nos notificará cuando hay actualizaciones y las mostrará para instalarlas.** Al igual que mintUpdate, permite ver el registro de cambios del paquete a actualizar o ver el historial de actualizaciones entre otras muchas opciones.

Algo que de momento **no está disponible es la sección de gestión del kernel**, para poder gestionar mas fácilmente los kernels instalados, algo que en el futuro intentaré que esté disponible.

Sin duda, con esta herramienta **se hace mas sencilla la adaptación a cualquier distro basada en Debian o Ubuntu para usuarios mas novatos**, a los cuales les suele asustar utilizar el terminal y prefieren una aplicación gráfica que les haga mas sencillo el proceso.

{{< br >}}

{{< textlink text="Fuente" url="https://instatecno.com/actualiza-gnu-linux-sin-comandos-distroupdate/" >}}

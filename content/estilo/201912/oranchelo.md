---
title: "Oranchelo"
date: "2019-12-09"
description: "Cambia la forma en que miras tu escritorio. Obtenga un tema de iconos cuidadosamente diseñado, brillante y limpio para Gnome Desktop."
type: "estilo"
tags: ["icons","GTK","KDE","QT"]
category: ["Estilo"]
img: "https://www.kdeblog.com/wp-content/uploads/2017/08/Oranchelo-Icon-Theme_crop.jpg"
authors: ["PatoJAD"]
---

## Oranchelo

{{< br >}}

Oranchelo es un tema de iconos de diseño plano para XFCE4 basado en Super Flat Remix e inspirado en "Corny icons" de Patryk Goworowski. Si bien su destino es XFCE tras probarlo en otros desktops pudimos ver que se adaptan bien, a ser sincero es uno de los mejores que vi en Desktops nuevos como Deepin. Su uso es simple para cualquier distro gracias a su propio instalador que trae en su repositorio de git

{{< br >}}
{{< img src="https://2.bp.blogspot.com/-IHBM65dQ7yo/V7k0DL0NX_I/AAAAAAAAHvk/4lPzxcDtnJUQ8weAzBIo_P5xTIeWYiuyQCEw/s1920/oranchelo-2.jpg" >}}
{{< br >}}

{{< br >}}

## Instalacion

{{< br >}}
{{< br >}}

### Ubuntu o derivados

{{< br >}}

La instalacion se realiza mediante PPA, por lo cual no sirve para Debian y relacionados dado que las PPA solo funcionan en Ubuntu y sus derivados

{{< br >}}

~~~
sudo add-apt-repository ppa:oranchelo/oranchelo-icon-theme
sudo apt-get update
sudo apt-get install oranchelo-icon-theme
~~~

{{< br >}}
{{< br >}}

### Arch y derivados

{{< br >}}

Dentro de Arch el metodo de instalacion es simple mediante AUR

{{< br >}}

~~~
yaourt oranchelo-icon-theme-git
~~~

{{< br >}}
{{< br >}}

### Debian y Fedora

{{< br >}}

Si bien los procesos de instalacion son diferentes ambos pueden descargar sus empaquetados desde el propio {{< textlink text="git del proyecto" url="https://github.com/OrancheloTeam/oranchelo-icon-theme/releases" >}}. Luego deben instalarlo y cada usuario sabra como hacerlo dado que ya conocen su sistema.

{{< br >}}
{{< br >}}

### Desde el codigo Fuente

{{< br >}}

Esta es la opcion mas linda para todos, es ejecutar un .sh tan simple que nos deja los iconos instalados y listos para usar. Este proceso es simple, descargamso el {{< textlink text="codigo fuente del proyecto" url="https://github.com/OrancheloTeam/oranchelo-icon-theme" >}}. Una vez que este deescargado abrimos una terminal en la carpeta del proyecto y ejecutamos el siguiente comando:

{{< br >}}

~~~
./oranchelo-installer.sh
~~~

{{< br >}}
{{< br >}}

### 100% Manual

{{< br >}}

La opción más simple, aunque debo admitir que para mí es la menos recomendable es la instalación 100% manual. Para esto debemos descargar el código fuente mencionado con anterioridad y copiar las carpetas Orchelo y Orchelo-green en /usr/share/icons or ~.local/share/icons

{{< br >}}
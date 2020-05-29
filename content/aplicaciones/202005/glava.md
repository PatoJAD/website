---
title: 'Glava'
date: '2020-05-29 08:53:00'
description: 'Ya podemos decirle adios a Cava, tenemos una alternativa con OpenGL y más funciones.'
type: 'aplicaciones'
tags: ["cava","glava","opengl","espectro","musica","shaders","audio-vizualizer"]
category: ["Aplicaciones"]
img: 'https://i2.wp.com/www.linuxlinks.com/wp-content/uploads/2019/07/Music-visualization.png?resize=700%2C350&ssl=1'
authors: ["PatoJAD"]
---

{{< br >}}
{{< img src="https://camo.githubusercontent.com/a4d7fd8c67e2e061f508c492fbe1f12187196bb9/68747470733a2f2f7468756d62732e6766796361742e636f6d2f44656669616e74496e666f726d616c496e6469616e7370696e796c6f6163682d73697a655f726573747269637465642e676966" >}}
{{< br >}}

GLava es un visualizador de espectro de audio OpenGL altamente configurable y de uso general para X11. El desarrollo es activo y se alienta la presentación de informes sobre problemas.

{{< br >}}
<div style="width: 100%; height: 0px; position: relative; padding-bottom: 56.250%;"><iframe src="https://streamable.com/e/dgpj8" frameborder="0" width="100%" height="100%" allowfullscreen style="width: 100%; height: 100%; position: absolute;"></iframe></div>
{{< br >}}

Un visualizador de audio funciona extrayendo información de forma de onda y / o frecuencia del audio y alimenta esta información a través de algunas reglas de visualización, que producen lo que ve en la pantalla. Las imágenes generalmente se generan y se representan en tiempo real y de manera sincronizada con la música a medida que se reproduce.

GLava hace que un visualizador de audio en tiempo real aparezca como si estuviera incrustado en el fondo de su escritorio o en una ventana. Cuando se muestra como fondo, se mostrará en la parte superior de su fondo de pantalla, dando la apariencia de un fondo de pantalla animado y en vivo.

{{< br >}}
{{< br >}}

## Configuración

{{< br >}}

GLava ofrece 5 módulos diferentes. Si queres probar los otros visualizadores, ejecutalos con el indicador `-m` o edita el archivo `~/.config/glava/rc.glsl.`

Si te qieres cambiar a algo diferente, podes probar el visualizador radial. Comparte similitudes con las barras, excepto que las barras se dibujan alrededor de un círculo.

{{< br >}}

    glava -m radial

Se puede probar de esa forma...

{{< br >}}
{{< br >}}

## Otras características

{{< br >}}

* Podes incrustar el visualizador de espectro de audio GLava OpenGL en el fondo del escritorio. Usar la bandera de escritorio. El software detecta el entorno de escritorio que está ejecutando y establece las propiedades apropiadas.
* Configura los módulos, editando los archivos (que están en GLSL 1 ). Cambia los colores, la transparencia y mucho más.
* Capacidad para transmitir tipos simples de datos a GLava en tiempo de ejecución a través de la función –pipe.
* Admite la mayoría de los administradores de ventanas compatibles con EWMH. Incluyen Mutter (GNOME, Budgie), KWin (KDE), Openbox (LXDE), Xfwm (XFCE), Fluxbox, IceWM y Bspwm. Algunos administradores de ventanas no son totalmente compatibles o necesitan pruebas como Enlightenment y Xmonad.
* Podes crear tus propios módulos.

{{< br >}}
{{< br >}}

## Instalacion

{{< br >}}

La instalación, nuevamente gracias a la comunidad, es más simple y no requiere andar compilando nada, basta con tener instalado nuestro repositorio. y podrás simplemente instalarlo de la siguiente manera:

{{< br >}}

    sudo apt install glava

{{< br >}}

El único detalle a marcar es que está pensado para x11, por lo cual no se puede asegurar ni negar, de momento, su funcionamiento el wayland.

{{< br >}}
{{< br >}}

---

{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

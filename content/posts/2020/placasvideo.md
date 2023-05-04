---
title: 'Mejorar el Rendimiento de tu placa de Video'
date: '2020-09-01 09:42:00'
description: 'Vamos a ver como mejorar el rendimiento de tu placa de video en este caso con ejemplo de una Intel UHD'
type: 'post'
tags: ['placa', 'linux', 'video', 'vulkan', 'opengl', 'intel', 'amd', 'gpu']
categories: ['Linux']
img: 'https://i0.wp.com/qepd.news/wp-content/uploads/2020/01/asrock-mother.jpg?fit=600%2C300&ssl=1'
authors: ['PatoJAD']
---

No porque no tengamos la mejor placa de video del mundo significa que no podamos jugar, pero si debemos mejorar el rendimiento siempre al extremo… Si bien esto es algo que yo acostumbro hacer sin importar la placa de video que tenga en este caso voy a explicar el procedimiento que uso para poder aumentar la performance del equipo y de la placa de video…

## Intel HD

En mi caso soy un típico pobretón uso placas integradas… por lo cual en este caso vamos a ser específicos de Intel sin embargo esto es fácil de proyectar a cualquier otro tipo de placas basta con pensar un poco…

## Limpiando el sistema

Lo primero que tenemos que hacer, que si bien no parece importante, se nota mucho la diferencia con solo borrar algunos paquetes que no están aprovechados. En este caso voy a usar synaptic para facilitar la tarea. Los que debemos eliminar son xserver-xorg-video-\* que no correspondan a nuestra placa de video en este caso seria algo asi:

    sudo apt remove xserver-xorg-video-radeon xserver-xorg-video-nouveau xserver-xorg-video-ati xserver-xorg-video-amdgpu xserver-xorg-video-all

En este caso eliminará estos controladores mejorando la performance y el consumo de xserver (No uso wayland pero debería revisarse en dicho caso)

## Eligiendo OpenGL

Si bien muchas placas soportan las últimas versiones de OpenGL muchas tienen como recomendadas la versión 3.0 o 3.2 (No quiere decir que otras no sirvan simplemente significa que no se hicieron homologaciones sobre estas placas o que no lo intentan porque son integradas) Sin embargo podemos comprobar en internet que el rendimiento mejora abismalmente desde la 3.3 o posteriores por lo cual, si lo soporta, podemos usarlo y ahora viene un trucaso para poder elegir la versión de OpenGL que queramos tener…

**RECUERDA: Para esto debes tener instalado mesa**

    MESA_GL_VERSION_OVERRIDE=4.6 glxinfo | grep OpenGL

En la parte donde dice 4.6 debemos poner la versión que queremos que ejecute, para saber cual es la máxima soportada solo nos basta con ejecutar:

    glxinfo| grep OpenGL

Y veremos una salida como esta donde debemos revisar la linea resaltada a continuación:

    OpenGL vendor string: Intel
    OpenGL renderer string: Mesa Intel(R) UHD Graphics 620 (WHL GT2)
    **OpenGL core profile version string: 4.6 (Core Profile) Mesa 20.0.8**
    OpenGL core profile shading language version string: 4.60
    OpenGL core profile context flags: (none)
    OpenGL core profile profile mask: core profile
    OpenGL core profile extensions:
    OpenGL version string: 4.6 (Compatibility Profile) Mesa 20.0.8
    OpenGL shading language version string: 4.60
    OpenGL context flags: (none)
    OpenGL profile mask: compatibility profile
    OpenGL extensions:
    OpenGL ES profile version string: OpenGL ES 3.2 Mesa 20.0.8
    OpenGL ES profile shading language version string: OpenGL ES GLSL ES 3.20
    OpenGL ES profile extensions:

Y esa es línea muestra la versión más nueva disponible en nuestra placa de Video, podemos elegir cualquiera en el rango.

## Usar Vulkan

Bueno ahora debemos definir cuándo usar OpenGL y cuándo usar Vulcan… Lamentablemente no desarrollé todavía un algoritmo perfecto de como hacerlo, pero pude descifrar cuándo es conveniente probar…

{{< youtube id="P_I8an8jXuM" >}}

Más allá de todo lo que pasa por detrás **en general** vulkan va a bajar 2 o 3 fps pero esto no es lo importante, lo importante o la elección de usar vulkan es la estabilidad, si nosotros notamos que durante situaciones específicas (Una TeamFight o la aglomeración de personajes/npc) nos reduce los FPS drásticamente lo mejor es migrar a Vulkan que tiende a controlar más esto evitando las bajas de FPS y mejorando la performance bajo alta presión.

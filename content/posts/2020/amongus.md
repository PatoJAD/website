---
title: '¿Como jugar Among Us en Linux?'
date: '2020-09-02 08:40:00'
description: 'Un juego de fiesta en línea y local de trabajo en equipo y traición para 4-10 jugadores ... ¡en el espacio!'
type: 'juegos'
tags:
    [
        'among us',
        'among',
        'linux',
        'juegos',
        'steam',
        'us',
        'proton',
        'windows',
        'guia',
        'tutorial',
    ]
category: ['Juegos', 'Linux', 'Windows']
img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg'
authors: ['PatoJAD']
---

En esta oportunidad vamos a comentar un poco sobre este hermoso que se está volviendo tan popular y vamos a comentar cómo podemos jugarlo en GNU/Linux con Proton. De más está decir que para este “tutorial” es requisito tenerlo comprado al juego que está aproximadamente $1 dólar.

## Sobre el juego

Es de mala educación no contar un poco sobre este juego antes, pero tampoco quiero ponerme a parafrasear de antemano así que vamos a dejar toda la data a manos de nuestro amigo Steam

{{< img src="https://cdn.cloudflare.steamstatic.com/steam/apps/945360/extras/steam_AboutBanner.png" >}}

Juega con 4-10 jugadores en línea o vía WiFi local mientras intentas preparar tu nave espacial para la partida, pero ten cuidado, ya que uno o más jugadores aleatorios entre la Tripulación son impostores empeñados en matar a todos.

{{< img src="https://cdn.cloudflare.steamstatic.com/steam/apps/945360/extras/steam_AboutCrew.png" >}}

-   Gana completando tareas para preparar el barco o expulsando a todos los impostores.
-   Reacciona rápidamente para deshacer los sabotajes del impostor.
-   Consulta el mapa de administración y las cámaras de seguridad para controlar a otros compañeros de tripulación.
-   Informe cualquier cadáver de inmediato para comenzar a discutir quién es el supuesto impostor.
-   Llame a reuniones de emergencia para hablar sobre comportamientos sospechosos.
-   Vote para expulsar a los supuestos impostores.

{{< img src="https://cdn.cloudflare.steamstatic.com/steam/apps/945360/extras/steam_AboutImpostor.png" >}}

-   Mata a tus compañeros de tripulación y enmarca a los transeúntes.
-   Finge ejecutar tareas para mezclarte con los compañeros de tripulación.
-   Escóndete por las rejillas de ventilación para moverte rápidamente por el barco.
-   Usa sabotajes para causar caos y dividir a la tripulación.
-   Cierre las puertas para atrapar a las víctimas y matarlas en privado.

{{< img src="https://cdn.cloudflare.steamstatic.com/steam/apps/945360/extras/steam_AboutMultiPlay.png" >}}

## Características

-   Personalización: elige tu color y sombrero.
-   Muchas opciones de juego: agrega más impostores, más tareas y mucho más.
-   Encuentre rápidamente un juego en línea en la lista de anfitriones.
-   Chat de texto en el juego.
-   Integración rica en discordia.

## Requisitos del sistema

-   Procesador: SSE2 instruction set support
-   Memoria: 1 GB de RAM
-   Almacenamiento: 250 MB de espacio disponible

{{< steamgame code="945360" >}}

## Instalación

Para poder jugarlo primero debemos tener habilitado la utilización de Proton con juegos no soportados oficialmente, para lo cual voy a dejar un paso a paso bastante simple para esto.

Lo primero que tenemos que hacer es ir a `Steam -> Parametros` (Suponiendo que esta en español steam). Una vez ahí veremos una ventana de configuración donde iremos a la sección `Steam Play` y veremos algo así:

{{< img src="https://i.postimg.cc/jdySrDtB/Captura-de-pantalla-2020-09-01-22-44-31.png" >}}

Ahí seleccionaremos _Activar Steam Play para todos los demás títulos_ con la versión de Protón más reciente (En el desplegable) Nos pedirá reiniciar una vez que hagamos esto.

Una vez que se haya reiniciado debemos buscar el juego en nuestra biblioteca y procedemos a instalarlo en unos pocos segundos (dado que el juego no pesa más de 250 mb)

Una vez que lo descargamos, y **ANTES** de iniciarlo debemos agregar algunos parámetros para que funcione correctamente, para eso vamos a darle click derecho al juego y seleccionamos **Propiedades..**

{{< img src="https://i.postimg.cc/cH3V889S/Captura-de-pantalla-2020-09-01-22-51-14.png" >}}

En esta sección debemos ir a **Parámetros de lanzamiento** y agregar tal cual el siguiente comando:

```zsh
PROTON_NO_ESYNC=1 PROTON_USE_WINED3D=1 %command%
```

Dando como resultado una pantalla así:

{{< img src="https://i.postimg.cc/j2rB6dmJ/Captura-de-pantalla-2020-09-01-22-51-25.png" >}}

Por último volvemos a reiniciar steam y ya podemos jugar tranquilamente, recomiendo traducir al español el juego si no tienes un gran dominio del inglés! Y si estas interesado en jugarlo no te olvides de meterte en nuestros grupos para que juguemos juntos!

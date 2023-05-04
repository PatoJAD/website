---
title: 'MacOS ¿Se parece mas a GNU/Linux o a Windows?'
date: '2022-06-07 10:41:00'
description: '¿En MacOS también se usa la terminal o las cosas se instalan como windows? Con esta “esencia” iniciaba la pregunta que nos llevó a hablar sobre varios temas.'
type: 'noticias'
tags:
    [
        'macos',
        'mac',
        'windows',
        'linux',
        'flatpack',
        'snap',
        'appimage',
        'terminal',
        'consola',
        'shell',
        'canonical',
        'instalacion',
        'duda',
        'video',
        'youtube',
        'odysee',
        'patojad',
    ]
categories: ['Noticias']
img: 'https://i.postimg.cc/7LZrf5KL/video.png'
authors: ['PatoJAD']
---

Ya hace tiempo, me es más difícil crear contenido, a medida que aumentan las responsabilidades es mucho más difícil hacerse un tiempo para poder escribir o grabar. Sin embargo sigo con este método de tomar preguntas de diferentes lugares y responder o tomarla como disparador para hablar de algún tema. En este caso la pregunta es la siguiente:

{{< img src="https://i.postimg.cc/pL5xYCPM/Screenshot-20220504-202955-Facebook-1.jpg" >}}

## Vídeo

Sin embargo la respuesta puede llegar a ser un poco… “simple” por lo cual no solo muestro un poco como funciona el sistema de instalación y los paquetes en MacOS pero también aprovechamos para hablar de algunos temas interesantes para el mundo de linux.

{{< youtube id="K5UM_BoszTE" >}}

{{< info text="Gracias por estar acá, si no es molestia te pido un ultimo favor mas, podrias unirte a la comunidad de telegram o apoyarme suscribiendote a youtube o a Odysee, es completamente gratis y vale muchisimo." >}}

## AppImage vs Flatpack vs Snap

Si bien esto se merece su propia publicación y probablemente lo tenga, de momento voy a dejar una lista con la comparación sobre estas 3 “tecnologías”

|              Característica              |      AppImage       |                  Snap                  |                   Flatpak                    |
| :--------------------------------------: | :-----------------: | :------------------------------------: | :------------------------------------------: |
|        Aplicaciones de escritorio        |         Si          |                   Si                   |                      Si                      |
|         Herramientas de terminal         |         Si          |                   Si                   |                      Si                      |
|                Servicios                 |         Si          |                   Si                   |                      No                      |
|       Aplicación correcta de temas       |         Si          |                   No                   |                      No                      |
|         Librerías y dependencias         | En la propia imagen | En la propia imagen o con complementos | Uso de runtimes de las librerías principales |
|                 Soporte                  |       Ninguno       |               Canonical                |               Red Hat y otros                |
|            Sin confinamiento             |         Si          |                   Si                   |                      No                      |
| Puede utilizar diferentes confinamientos |         Si          |           No (solo AppArmor)           |             No (solo Bubblewrap)             |
|                Ejecutable                |         Si          |       No . Necesita instalación        |          No . Necesita instalación           |
|                 Sin root                 |         Si          |    No. Necesita root para instalar.    |       No. Necesita root para instalar.       |
|       Ejecutable desde comprimido        |         Si          |                   Si                   |                      No                      |
|           Repositorio central            |     AppImageHub     |               SnapCraft                |                   FlatHub                    |
|           Necesita repositorio           |         No          |                   No                   |                      No                      |
|        Repositorios individuales         |         No          |                   Si                   |                      Si                      |
|     Multiples versiones en paralelo      |         Si          |                   Si                   |                      Si                      |
|        Mecanismo de actualización        |   AppImageUpdate    |              Repositorio               |                 Repositorio                  |
|      Actualizaciones incrementales       |         Si          |                   Si                   |                      Si                      |
|           Autoactualizaciones            |         Si          |                   No                   |                      No                      |
|      Aplicación en disco comprimida      |         Si          |                   Si                   |                      No                      |
|            LibreOffice 6.0.0             |       200 MB        |                 200 MB                 |                    659 MB                    |

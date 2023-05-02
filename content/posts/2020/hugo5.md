---
title: 'Hugo CMS - CI/CD Deploy en GitLab'
date: '2020-05-07 08:45:00'
description: 'Ya teniendo el sitio medianamente armado es hora de publicarlo para ir viendolo online...'
type: 'programacion'
tags: ['hugo', 'cms', 'ci', 'cd', 'gitlab', 'pages', 'curso']
category: ['Programacion']
img: 'https://i.postimg.cc/6qN3ZGR4/gohugoio-card.png'
authors: ['PatoJAD']
---

A estas alturas, es importante ya poner nuestro sitio online para poder ir viendo el resultado final (seguramente tengamos que ir solucionando algunos problemas que ya verá cada uno).

## Video

{{< youtube id="Sy4KmAQsNZk" >}}

## Info Util

Como vemos en el video necesitamos crear un archivo llamado `.gitlab-ci.yml` y dentro de este vamos a poner el siguiente codigo

```yml
image: cibuilds/hugo

variables:
    GIT_SUBMODULE_STRATEGY: recursive

pages:
    script:
        - hugo
    artifacts:
        paths:
            - public
    only:
        - master
```

Recuerda que puede demorar entre 30 minutos y 2 hs en aparecer desde tu primer deploy, cualquier duda o consulta estamos en el grupo de Telegram disponible para todos ustedes!!! No te olvides de suscribirte al canal y desactivar el adblock de PatoJAD, es una pequeña forma completamente gratuita de apoyar el contenido que generamos.

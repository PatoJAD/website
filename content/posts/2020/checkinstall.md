---
title: 'Crea tus .deb con Checkinstall'
date: '2020-07-14 09:05:00'
description: 'En esta oportunidad vamos a ver como generar un deb utilizando checkinstall en el proceso de compilación.'
type: 'video'
videoId: 'kcQvq4oDUgM'
tags:
    [
        'deb',
        'compilar',
        'make',
        'build',
        'checkinstall',
        'buildear',
        'compilacion',
        'compilar',
        'makefile',
    ]
categories: ['Programacion', 'linux']
img: 'https://www.elarraydejota.com/wp-content/uploads/2016/07/checkinstall_description.png'
authors: ['PatoJAD']
---

En esta oportunidad vamos a ver como generar un deb utilizando **checkinstall** en el proceso de compilación. Esto es extremadamente útil para los usuarios que acostumbramos compilar algunas piezas de software que no se encuentran en deb, nos permite generar nuestros propios debs para simplificar el proceso a futuro

## Recomendaciones

Si bien no soy nadie para decir que hacer siempre recomiendo seguir un hilo para facilitar el aprendizaje… Por esto mismo recomiendo ver la publicación anterior y entender como funciona eso antes de seguir dado que esta oportunidad entiendo que esos conocimientos ya estan y avanzo un poco más rápido para evitar alargar el video (saben que me gusta conciso y útil)

## Preparando tu equipo

Claramente este proceso es un poco más complejo que lo vimos anteriormente usando dpkg, dado que ahora no solo vamos a empaquetar sino que también vamos a compilar. Recomiendo arrancar con programas realmente pequeños e ir aumentando la complejidad de a poco. En líneas generales vamos a tener 2 dependencias **siempre** que las vamos a instalar así:

```zsh
sudo apt install checkinstall make
```

Uno es para compilar y el otro para generar el deb. Sin embargo siempre debemos leer la documentación del proyecto que queramos compilar para poder entender qué dependencias tiene adicionales a esta e instalarlas antes de iniciar el proceso y así evitar errores.

## Generando el deb

En este caso no voy a explicar cómo compilar sino que voy a explicar como generar el deb por lo cual la compilación corre por cuenta de uno (leer la documentacion de git básicamente)

## Comandos

El único comando que nos importa o mejor dicho que le da relevancia al tutorial que vemos aquí que es simplemente el siguiente

```zsh
sudo checkinstall --install=no
```

El install=no puede omitirse si queremos que aparte de generar el deb se instale el programa en nuestra distro, sin embargo recomiendo evitarlo e instalarlo desde el deb que generamos para probar que funcione correctamente.

No te olvides de comentarnos qué te parece y preguntarnos tus dudas en nuestro canal de Telegram.

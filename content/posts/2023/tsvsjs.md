---
title: '¿Que es TypeScript? ¿En que se parece a JavaScript?'
date: '2023-03-17 09:40:00'
description: 'Hoy hablamos TypeScript el lenguaje azúcar sintactico de JavaScript para saber cuando usarlo, sus diferencias y sus viertudes.'
type: 'programacion'
tags:
    [
        'typescript',
        'nodejs',
        'node',
        'npm',
        'javascript',
        'nestjs',
        'guia',
        'tutorial',
        'nest',
        'angular',
        'angularjs',
        'vue',
        'vuejs',
        'explicacion',
        'bottom',
        'profe pato',
        'typescript vs javascript',
        'javascript vs typescript',
    ]
category: ['Programacion']
img: 'https://i.postimg.cc/4dwcTKQ5/tsvsjs.png'
authors: ['PatoJAD']
---

**TypeScript** es un _subconjunto azúcar sintáctico_ de **JavaScript**. Básicamente es un código que transpila a **JavaScript** y tiene como fin formalizar un poco los lineamientos a la hora de desarrollar con este lenguaje.

{{< youtube id="2mXT2VKqhgQ" >}}

## Principales diferencias

Podemos situar grandes diferencias entre estos lenguajes pero para eso debemos entender que al momento de ejecución ambos terminan siendo **JavaScript**.

-   **Objetos:** Si bien en **JavaScript** podemos usar objetos y clases no son su mayor fuerte, sin embargo en **TypeScript** vamos a estar programando Orientado a Objetos y este puede ser un punto fuerte para elegir, si lo que vamos a estar haciendo va a ser en POO **TypeScript** es una gran opción.
-   **Compilación:** Mientras que **JavaScript** es interpretado **TypeScript** requiere un proceso de _“compilación”_ (o mejor dicho transpilación) donde el código de **TypeScript** se convierte en código **JavaScript** que luego será interpretado ya sea por el servidor o el cliente.
-   **Tipado:** Una de las flexibilidades más grandes de **JavaScript** es su tipado dinámico, sin embargo en **TypeScript** vamos a tener un tipado estático y fuerte (que para ser sinceros podemos flexibilizar sin problemas) pero esto nos permite disminuir la cantidad de errores en tiempo de ejecución por el tipado.
-   **Curva de Aprendizaje:** Si bien **TypeScript** es un subconjunto azúcar sintáctico de **JavaScript** este es un poco más complejo de aprender, según la comunidad, que **JavaScript**.

## ¿Cual Elegir?

Es difícil poder definir cuál es la mejor opción sin tener un contexto. Siempre la mejor opción va a depender de nuestro expertis en cada uno, las necesidades del proyecto y los framework que vamos a estar utilizando. De todas formas a las diferencias que marcamos arriba voy a sumar, una serie de reglas que utilizo yo para definir, estas son solo en base a mi experiencia:

-   _Tamaño del proyecto_, si el proyecto es pequeño y rápido, bastará con usar **JavaScript**, sin embargo en proyectos medianos y grandes **TypeScript** puede ser más cómodo a largo plazo y ahorrar algunos dolores de cabeza.
-   _Cantidad de miembros_, si vamos a estar desarrollando nosotros solos **JavaScript** puede resultar más práctico, pero si tenemos como objetivo que colaboren más personas **TypeScript** puede ser muy bueno para manejar lineamientos similares y tener código más fácil de entender.
-   _Compatibilidad_, puede que **TypeScript** no sea compatible con nuestro proyecto o la forma de encararlo, es una prueba interesante para tener en cuenta a la hora de elegirlo.

{{< link text="Comentar en el FORO" url="https://community.vasak.net.ar/topic/14/que-es-typescript-en-que-se-parece-a-javascript" >}}

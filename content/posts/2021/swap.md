---
title: '¿Que es la SWAP?'
date: '2021-04-12 10:31:00.00'
description: 'Vamos a hablar sobre la memoria SWAP aprovechando un articulo compartido en FB'
type: 'post'
tags:
    [
        'swap',
        'hibernacion',
        'memoria',
        'particion',
        'linux',
        'ram',
        'free',
        'memoria virtual',
        'memoria swap',
        'memoria ram',
        'memoria virtual',
    ]
categories: ['Linux']
img: 'https://i.postimg.cc/3rVMMR6S/image.png'
authors: ['PatoJAD']
---

![](https://i.postimg.cc/fRZDFyS4/image.png)

Durante las instalaciones siempre nos aparece la opción de generar una partición de SWAP. Eventualmente en linux los usuarios más nuevos suelen dejar todo tal cual viene. Por eso mismo la idea de hoy es comentar un poco como funciona este tipo de memoria, para que se utiliza y que cada uno determine si es necesario o no en su caso particular.

## ¿Como ver la memoria?

![](https://i.postimg.cc/BbktH0mS/image.png)

Existen comandos que nos permiten ver la memoria disponible y/o ocupada. Así mismo recomiendo el uso de free. Gracias a la opción -h que trae disponible es mucho más simple entender los números que veremos en la terminal. El comando lo podemos usar de esta forma:

```shell
free -h
```

## ¿Cuanto debo usar?

![](https://i.postimg.cc/Y0Yj6PZQ/image.png)

La verdad este punto es muy debatido y a estas alturas ya sabemos que nadie tiene la verdad absoluta. Sin embargo cada uno puede contribuir desde su experiencia. Yo en lo personal discrepo levemente con lo que compartieron en la imagen. Si bien en panel general esta bien yo lo pondria de la siguiente forma:

|   Memoria    |  SWAP   |
| :----------: | :-----: |
|   Mem =< 3   | Mem x 2 |
| 3 < Mem <= 8 |   Mem   |
|   8 < Mem    | Mem / 2 |

Como podemos ver los valores son, en panel general, muy similares pero con leve modificación en los rangos. Sin embargo existen personas que no utilizan swap. Por ejemplo muchos avalan que con un SSD no es necesario tener SWAP

> No te olvides de dejar tu propia regla de SWAP en los comentarios.

## La Hibernación

![](https://i.postimg.cc/wBwfXqmY/image.png)

La Hibernación, cuando se vuelve un caso de uso para el usuario de linux. Desacredita automáticamente cualquier tabla diseñada. Dado que si nosotros queremos hacer uso de esta función es necesario tener un tamaño de swap que soporte de forma correcta la Hibernación. Cuando hibernamos el equipo toda la RAM pasa a la SWAP y es ahí donde debemos tener como mínimo la misma cantidad. Sin embargo es recomendable tener siempre un poco más.

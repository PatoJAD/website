---
title: 'Paru VS YAY ¿Cual elegir?'
date: '2022-01-03 09:22:00'
description: 'Vamos a hablar de dos de los mas populares AUR helpers que existen. El mítico YAY y el disruptor Paru que llega para ser el unico.'
type: 'post'
tags:
    [
        'paru',
        'yay',
        'aur',
        'helper',
        'artix',
        'arch',
        'manjaro',
        'endeavour',
        'pacman',
        'pacaur',
    ]
categories: ['Aplicaciones', 'Linux']
img: 'https://i.postimg.cc/wjMShSZM/Sin-nombre.png'
authors: ['PatoJAD']
---

Es común que al utilizar cualquier distribución basada en Arch (Artix, endeavour, manjaro, etc) queramos usar los AUR dado que ahí disponemos de una cantidad de paquetes increíbles. Y a la hora de usarlo podemos elegir entre múltiples AUR Helpers. En esta oportunidad vamos a hablar de 2 de estos. El conocido YAY que lleva mucho tiempo con nosotros. Y el no tan nuevo PARU que llega con una propuesta interesante para los amantes de los AUR.

### Comparación

YAY está escrito en GO un lenguaje de programación que tiene una fácil lectura y es extensible. Una gran ventaja es que su compilación es realmente rápida y muy simple. Toma como inspiración yaourt, apacman y pacmaur. Paru, en cambio, está escrito en Rust y toma como inspiración a YAY por lo cual es muy simple de migrar de uno a otro.

![](https://i.postimg.cc/xTvdwb1M/image.png)

Si bien YAY es mucho más popular y tiene una comunidad mucho más grande, actualmente paru es, por no mucho, más activo. Lo cual supone ser una ventaja, sin embargo, para los usuarios finales esto no afecta en gran cantidad. Sin embargo una de las diferencias que note es que paru es, efectivamente, más rápido que YAY. Lo cual es útil si tenemos equipos de pocos recursos. Sin embargo, en lo personal creo que yay tiene una sintaxis más feliz que paru. Es más simple y rápido escribir yay, incluso para autocompletar. Sin embargo, paru puede volverse un poco tosco y molesto.

|      | Codigo Fuente | Revision de Archivos | Diff | GIT |     Shells      |
| :--: | :-----------: | :------------------: | :--: | :-: | :-------------: |
| Paru |      GO       |          Si          |  Si  | Si  | bash, fish, zsh |
| YAY  |     Rust      |          Si          |  Si  | Si  | bash, fish, zsh |

### Mi Opinión

Personalmente le veo mucho potencial a paru, pero no ofrece nada muy diferente a otros. Y siento la sintaxis un tanto incómoda, sin embargo, es recomendable para equipos que son bastantes lentos porque en esa circunstancia es muy provechoso el tiempo que optimiza y nos permite aprovechar mejor los recursos.

Yo me voy a quedar con yay, al menos de momento pero me gustaría saber tu opinion y analisis sobre estas dos apps

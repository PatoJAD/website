---
title: 'Como ingresar al BIOS si mi Linux enciende muy rápido'
date: '2021-11-26 08:25:00.00'
description: 'Es comun que el arranque de algunos equipos sean muy rapido que no nos permita entrar a la bios'
type: 'post'
tags:
    [
        'bios',
        'ubuntu',
        'windows',
        'arch',
        'entrar al bios',
        'rapido',
        'enciende',
        'gnu',
        'ingresar',
        'entrar',
    ]
categories: ['Linux', 'Windows']
img: 'https://blog.educacionit.com/wp-content/uploads/2019/01/1-01-5-750x410.jpg'
authors: ['PatoJAD']
---

Muchas veces ocurre que el sistema operativo, más que nada hablando de linux, inicia demasiado rápido y nos resulta completamente dificil ingresar a la BIOS, en esta oportunidad vamos a ver las posibles soluciones para poder ingresar a la BIOS cuando el inicio es tan rápido que resulta casi imposible con la tecla de inicio (suele ser supr f2 o f12) El problema de este método es que según la placa base que tengas la tecla puede ser una u otra. Aquí te resumo algunas de las más usuales:
General: la tecla Supr suele ser una de las habituales en muchos ordenadores para arrancar el BIOS Setup. Si no funciona esa y tienes un clónico, puedes optar también por probar estas otras: F1, F2, F10, y Esc. Seguramente sea alguna de ellas. Si no funciona ninguna de ellas, entonces observa la marca de placa base o de PC que tienes y prueba con las siguientes…

-   **ASRock:** F2 o Supr
-   **ASUS:** F2, en algunos casos podría ser también Supr
-   **Acer:** F2 o Supr, si tienes un equipo muy antiguo intenta F1 o la combinación Ctrl+Alt+Esc.
-   **Dell:** F2 o F12
-   **ECS:** Supr
-   **Gigabyte / Aorus:** F2 o Supr
-   **HP:** F10
-   **Lenovo:**
-   **Portátiles:** F2 o Fn + F2
-   **Sobremesa:** F1
-   **Modelos ThinkPads:** INTRO y F1.
-   **MSI:** Supr, en algunos casos podría ser F2.
-   **Microsoft Surface Tablets:** presiona y mantén pulsado el botón de volumen +
-   **Origin PC:** F2
-   **Samsung:** F2
-   **Toshiba:** F2, en raras ocasiones podría ser F1, F12 o Esc.
-   **Zotac:** Supr
-   **Sony:** en un VAIO debería ser F2 O F3, en otras ocasiones incluso F1.

## Desde la terminal

Si tienes UEFI existe un comando que nos permite de una forma sencilla reiniciar la máquina y pedirle que arranque la BIOS directamente, recuerda que esto solo funciona con UEFI por lo cual si está instalado de modo Legacy no obtendremos buen resultado.

```shell
systemctl reboot --firmware-setup
```

{{< info text="Este metodo solo funciona con **SystemD**" >}}

## Pause BIOS

En la parte superior derecha del teclado tenemos un botón que dice pause, cuando iniciamos podemos tocarlo y va a pausar la BIOS en ese momento podemos tocar la tecla que nos permita entrar a la configuración y volver a tocar pause para que siga.

## El Hardcore

Supongamos que nada de esto te sirvió, la última manera es infalible pero un poco más incómoda. En este caso siempre podemos remover los discos y la bios quedará esperando. De esta forma es más simple configurarla.

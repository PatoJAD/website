---
title: 'Shells disponibles'
date: '2020-06-25 09:13:00'
description: 'Hablemos del shell, una util herramienta a la que debemos perderle el miedo'
type: 'post'
tags:
    [
        'shell',
        'linux',
        'bash',
        'tcsh',
        'shells',
        'korn',
        'cual',
        'tengo',
        'instalado',
    ]
categories: ['Linux']
img: 'https://es.linux-console.net/common-images/randomly-display-ascii-art-on-linux-terminal/ASCII-Art.png'
authors: ['PatoJAD']
---

El otro día comenzamos a hablar de "{{< textlink text="el Shell de GNU/Linux" url="/post/2020/06/el-shell-de-linux/" >}}" (No quiero entrar en debates pero tampoco quiero que se enojen por poner solo Linux) y comprendimos que no es tan malo como muchos creen, y ahora estoy acá para contarte un poco que existen **varios shells** y queremos que sepas cual es el que tienes instalado…

# Shell Usuario, Usuario Shell...

Los shells utilizados en GNU/Linux no pertenecen exclusivamente a este sistema operativo. Estos están disponibles _libremente_ y pueden ser _compilados_ en cualquier sistema **Unix**. Cuando instalamos GNU/Linux, tendremos acceso a los shells y herramientas de **GNU**, no a los shells y herramientas estándares de **Unix**. A pesar de que Linux _puede ejecutar una gran cantidad de shells_, los más populares en el sistema del pingüino son el **BASH** (Bourne Again shell) y el **TCSH** (TC shell).

El **Z shell** es otro shell de Linux que incorpora diferentes características del **BASH**, **TCSH** y del **Korn Shell** (un shell nativo de Unix desarrollado por David Korn de AT&T).

## ¿Cual Tengo instalado?

Si tienes curiosidad por ver que Shells tienes instalados en tu distribución GNU/Linux basta que desde la línea de comandos ingreses el siguiente comando:

    cat /etc/shells

ó

    cat /etc/shell

(esto depende de tu distribución), deberás obtener algo similar a:

    /bin/csh
    /bin/sh
    /usr/bin/es
    /usr/bin/ksh
    /bin/ksh
    /usr/bin/rc
    /usr/bin/tcsh
    /bin/tcsh
    /usr/bin/esh
    /bin/bash
    /bin/rbash
    /bin/dash
    /usr/bin/screen

Por ejemplo esto tengo instlado yo:

{{< img src="https://i.ibb.co/cyxfR7q/Screenshot-20200625-090630.png" >}}

Con esto ya podemos interiorizarnos más si nos interesa, y en caso contrario ya podemos entender que existen diferentes shells dentro del mundo de GNU/Linux. Ya conociendo esto nos vamos dando cuenta que en realidad no es algo tan complejo y podemos ser amigos de estos “shells”

---

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

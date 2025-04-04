---
title: 'SpeedTest desde la terminal'
date: '2020-09-24 09:12:00'
description: 'Muchas veces realizamos pruebas de velocidad, hoy vamos a ver como hacerlo desde la terminal.'
type: 'aplicaciones'
tags: ['internet', 'velocidad', 'speed', 'test', 'cli', 'terminal', 'consola']
categories: ['Aplicaciones']
img: https://i.postimg.cc/JhrhpNyY/speedtest.webp
authors: ['PatoJAD']
---

Todos conocemos la famosísima página de SpeedTest, que usamos siempre para realizar las mediciones del servicio de internet. Es un sitio muy práctico que nos ayuda a entender si nuestra velocidad de internet es la correcta o si el proveedor de internet no está haciendo muy bien su laburo.

## Lo bueno puede mejorar

En este mundo de _hackers_ donde todos queremos usar la terminal para algo existe gente que lleva todo a la terminal de linux, como por ejemplo el Speed Test. Este hermoso invento nos permite realizar el famoso test sin siquiera abrir un navegador de internet o sin tener una interface grafica. Por lo cual esto es mucho más rápido y sencillo para todos los que estamos acostumbrados a usar la terminal.

Esto nació en base a una consulta que realizaron ayer en nuestro hermoso grupo de telegram por lo cual quiero agradecer a **Mode One** y a **Pipe** por la idea de la publicación de hoy.

## SpeedTest-Cli

![](https://i.postimg.cc/pd3Ym0k9/Captura-de-pantalla-2020-09-23-19-39-40.png)

Este hermoso cli de SpeedTest trae muchas funciones que podríamos describir pero que hoy no vienen al caso… Lo que si viene al caso es la hermosa funcionalidad que ya explique antes…

    Retrieving speedtest.net configuration...
    Testing from Cablevision Argentina (181.31.84.158)...
    Retrieving speedtest.net server list...
    Selecting best server based on ping...
    Hosted by VISIO RED SRL (Avellaneda) [11.09 km]: 18.941 ms
    Testing download speed................................................................................
    Download: 128.97 Mbit/s
    Testing upload speed......................................................................................................
    Upload: 16.39 Mbit/s

Como ven realice un SpeedTest con la terminal que demoró 23 segundos, está realizado por wifi a más de 4 metros del modem con 2 paredes de por medio. Y podemos observar que nos da todos los datos de interés, la latencia y los MEGAS de subida y bajada…

## Instalalo

Esta hermosa funcionalidad está desarrollada en python y existen 2 forma de instalar, una que voy a omitir porque pueden encontrar el paso a paso por los desarrolladores con toda la documentación necesaria es la compilación a mano, esto lo dejo para el que quiera hacerlo al final de la publicación y la otra es mediante pip.

Pip es un _gestor de contenidos_ que administra librerías y paquetes python, por lo cual deben tener instalado alguna versión de python. En el caso de que no sepan si tiene alguna versión pueden instalar python-pip que es para python 2. Luego podemos avanzar con la instalación de SpeedTest de la siguiente manera:

    sudo pip3 install speedtest-cli

Para Python 3

    sudo pip install speedtest-cli

Para Python 2

Después de eso ya podemos usar el comando cuando queramos para poder obtener una rápida medición de velocidad.

    speedtest-cli

Se agradece a **geekytheory** por toda la información brindada para poder realizar esta publicación. Un blog realmente interesante que no pueden perderse.

## Instrucciones de uso

![](https://i.postimg.cc/63RVnd1M/Captura-de-pantalla-2020-09-23-19-53-20.png)

Como hablamos el otro dia existen muchas herramientas para saber cómo usar un comando de terminal, les dejo la información en este caso especifico de como saberlo y cual es la información que nos da usando:

    speedtest-cli -h

Obtenemos una salida como la que vamos a ver a continuación con toda la información de la aplicación.

    Command line interface for testing internet bandwidth using speedtest.net.
    -------------------------------------------------------------------------- https://github.com/sivel/speedtest-cli

    optional arguments:
      -h, --help            show this help message and exit
      --no-download         Do not perform download test
      --no-upload           Do not perform upload test
      --single              Only use a single connection instead of multiple. This simulates a typical file transfer.
      --bytes               Display values in bytes instead of bits. Does not affect the image generated by --share, nor output from
                            --json or --csv
      --share               Generate and provide a URL to the speedtest.net share results image, not displayed with --csv
      --simple              Suppress verbose output, only show basic information
      --csv                 Suppress verbose output, only show basic information in CSV format. Speeds listed in bit/s and not affected
                            by --bytes
      --csv-delimiter CSV_DELIMITER
                            Single character delimiter to use in CSV output. Default ","
      --csv-header          Print CSV headers
      --json                Suppress verbose output, only show basic information in JSON format. Speeds listed in bit/s and not affected
                            by --bytes
      --list                Display a list of speedtest.net servers sorted by distance
      --server SERVER       Specify a server ID to test against. Can be supplied multiple times
      --exclude EXCLUDE     Exclude a server from selection. Can be supplied multiple times
      --mini MINI           URL of the Speedtest Mini server
      --source SOURCE       Source IP address to bind to
      --timeout TIMEOUT     HTTP timeout in seconds. Default 10
      --secure              Use HTTPS instead of HTTP when communicating with speedtest.net operated servers
      --no-pre-allocate     Do not pre allocate upload data. Pre allocation is enabled by default to improve upload performance. To
                            support systems with insufficient memory, use this option to avoid a MemoryError
      --version             Show the version number and exit

Como comente voy a dejarles el git para quienes quieran compilarlo o modificar el código...

[Git del proyecto](https://github.com/sivel/speedtest-cli)

---

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

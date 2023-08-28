---
title: 'Redirección algunos usos'
date: '2020-10-29 09:04:00'
description: 'Redireccion en la terminal de GNU/Linux tiene muchos usos y hoy seguimos tocando este tema'
type: 'post'
tags:
    [
        'redirección',
        'terminal',
        'consola',
        'linux',
        'cat',
        'salidas',
        'dev',
        'null',
        'unix',
        'pipelines',
    ]
categories: ['Linux']
img: 'https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/ubuntu-bash.png'
authors: ['PatoJAD']
---

Seguimos con el tema de la terminal y las salidas de las mismas. Te recomiendo personalmente leer la publicación anterior para poder aprovechar al máximo esta información.

## Eliminando salidas innecesarias

Algunas veces “el silencio es oro”, y no queremos la salida de un comando, sólo queremos ignorarla. Esto se aplica particularmente a los mensajes de estado y de error. El sistema proporciona una forma de hacerlo redireccionando la salida a un archivo especial llamado “dev/null” (del cual hablamos anteriormente). Este archivo es un dispositivo del sistema llamado un cubo de bits (bit bucket) que acepta entradas y no hace nada con ellas. Para suprimir los mensajes de error de un comando, hacemos esto:

    ls -l /bin/usr 2> /dev/null

## /dev/null en la cultura Unix

El cubo de bits es un antiguo concepto de Unix y, debido a su universalidad, ha aparecido en muchas partes de la cultura Unix. Cuando alguien dice que está enviando tus comentarios a /dev/null, ahora ya sabes lo que significa.

## Redireccionando la entrada estándar

Hasta ahora, no hemos encontrado ningún comando que haga uso de la entrada estándar en la saga de publicaciones sobre la terminal (en realidad sí lo hemos hecho, pero revelaremos la sorpresa un poco más adelante), así que necesitamos presentar uno.

## cat – Concatenando archivos

El comando cat lee uno o más archivos y los copia a la salida estándar de la siguiente forma:

    cat [archivo...]

En la mayoría de los casos, puedes usarlo para mostrar archivos sin paginar, por ejemplo:

    cat ls-output.txt

Mostrará el contenido del archivo ls-output.txt. cat a menudo se usa para mostrar archivos de texto cortos. Como cat puede aceptar más de un archivo como argumento, también se puede usar para unir archivos. Imagina que hemos descargado un gran archivo que ha sido dividido en múltiples partes (los archivos multimedia a menudo están divididos de esta forma en Usenet), y queremos unirlos de nuevo. Si los archivos se llamarán:

    movie.mpeg.001 movie.mpeg.002 ... movie.mpeg.099

podríamos unirlos de nuevo con este comando:

    cat movie.mpeg.0* > movie.mpeg

Como los comodines siempre expanden sus resultados en orden, los argumentos se distribuirán en el orden correcto.

Todo esto está muy bien, pero ¿qué tiene esto que ver con la entrada estándar? Nada todavía, pero probamos algo más. Qué pasa si usamos “cat” sin argumentos:

    cat

No ocurre nada, sólo se queda quieto como si se hubiera quedado colgado. Podría parecer eso, pero realmente está haciendo lo que se supone que debe hacer.

Si no le damos argumentos a cat, lee de la entrada estándar y como la entrada estándar está, por defecto, asignada al teclado, ¡está esperando a que tecleemos algo! Prueba a añadir el siguiente texto y pulsa Enter:

    cat
    PatoJAD mi blog favorito https://patojad.com.ar/

Ahora, pulsa Ctrl-d (es decir, mantén pulsada la tecla Ctrl y luego pulsa “d”) para decirle a cat que ha alcanzado el final del archivo (EOF – end of file) en la entrada estándar:

    cat
    PatoJAD mi blog favorito https://patojad.com.ar/

Obteniendo una salida similar a:

    PatoJAD mi blog favorito https://patojad.com.ar/

En ausencia de nombres de archivo como argumentos, cat copia la entrada estándar a la salida estándar, así que vemos nuestra línea de texto repetida. Podemos usar este comportamiento para crear archivos de texto cortos. Digamos que queremos crear un archivo llamado “lazy_dog.txt” conteniendo el texto de nuestro ejemplo. Podríamos hacer esto:

    cat > lazy_dog.txt
    PatoJAD mi blog favorito https://patojad.com.ar/

Escribe el comando seguido del texto que queremos colocar en el archivo. Recuerda pulsar Ctrl-d al final. Usando la línea de comandos, ¡hemos implementado el procesador de texto más tonto del mundo! Para ver nuestros resultados, podemos usar cat para copiar de nuevo el archivo a stdout:

    cat lazy_dog.txt
    PatoJAD mi blog favorito https://patojad.com.ar/

Ahora que sabemos cómo cat acepta la entrada estándar, además de nombres de archivo como argumentos, probemos redirigiendo la entrada estándar:

    cat < lazy_dog.txt
    PatoJAD mi blog favorito https://patojad.com.ar/

Usando el operador de redirección “<”, hemos cambiado el origen de la entrada estándar del teclado al archivo lazy_dog.txt. Vemos que el resultado es el mismo que pasarle un nombre de archivo como argumento. Esto no es particularmente útil en comparación con pasar un nombre de archivo como argumento, pero sirve para demostrar el uso de un archivo como fuente de la entrada estándar. Otros comandos hacen un mejor uso de la entrada estándar, como veremos pronto.

## Tuberías (Pipelines)

La capacidad de los comandos de leer datos de la entrada estándar y mandarlos a la salida estándar la utiliza una característica del shell llamada tubería (pipeline). Usando el operador tubería “|” (la barra vertical), la salida estándar de un comando puede ser entubada o canalizada hacia la entrada estándar de otro:

    comando1 | comando2

Para demostrarlo plenamente, vamos a necesitar algunos comandos. ¿Recuerdas que dijimos que había uno que ya conocíamos que acepta entrada estándar? Es less. Podemos usar less para mostrar, página a página, la salida de cualquier comando que mande sus resultados a la salida estándar:

    ls -l /usr/bin | less

¡Esto es extremadamente útil! Usando esta técnica, podemos examinar convenientemente la salida de cualquier comando que produzca salida estándar.

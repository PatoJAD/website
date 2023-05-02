---
title: 'Vaciar la papelera de root'
date: '2020-06-17 09:36:00'
description: 'Vamos a eliminar esos archivos molestos que nos quedan y no podemos borrar desde el filemanager'
type: 'linux'
tags: ['trash', 'root', 'sudo', 'papelera', 'vaciar', 'linux', 'rm']
category: ['Linux']
img: 'https://www.laguiadelvaron.com/wp-content/uploads/2020/04/australianos-se-disfrazan-para-sacar-basura-www.laguiadelvaron-12.jpg'
authors: ['PatoJAD']
---

No se si realmente esto le pasa a todos pero alguna vez nos queda en la papelera ese archivo que el filemanager no puede borrar y se asienta ahí como un archivo intocable ocupando una parte de nuestro disco (aunque sea mínimo) pero estando siempre ahí para molestarnos con su presencia...

## Solución

Lamentablemente para todos aquellos que no son fanáticos de la terminal yo sí lo soy, no porque crea que todos debieran usarla, sino porque en mi tiempo en linux entendí que es la forma mas rapida y sencilla de solucionar algunos problemas. Por lo cual lo que traigo hoy es esa línea de la terminal que nos permite vaciar la papelera como root para que no quede nada vivo, y esto podemos hacerlo de la siguiente forma:

    sudo rm -rf ~/.local/share/Trash/*

**¡ATENCIÓN!** Esto no tiene vuelta atrás por lo cual es posible que si borras algo que querías recuperar no puedas hacerlo de forma sencilla, te recomiendo saber bien que tenes en la papelera para evitar problemas…

## Entender para hacer

Como siempre digo es importante entender lo que estamos haciendo porque lo más importante es aprenderlo (_OJO no digo aprender de memoria pero siempre que leemos para qué funciona algo después nuestro cerebro nos da la info cuando lo vemos y es más fácil entender qué está pasando en muchos casos…_). Por lo cual dejamos una **mínima** explicacion de que es cada parte de este comando que dejamos ahí…

-   **sudo** muy popular es ya el comando que nos permite obtener todos los **privilegios** de administrador
-   **rm**: nos sirve para eliminar archivos o carpetas _por lo tanto debe ejecutarse con mucho cuidado, especialmente si estás como superusuario porque es amigo fiel de las cagadas_
-   **-f**: esa _«f»_ es de **«force»**, porque no nos gusta las terminales que hacen demasiadas preguntas, a la hora de borrar archivos. Es más bien como un “si a todo” con posibilidad de venderle el alma al demonio!
-   **-r**: tiene una función recursiva, elimina las carpetas contenidas contenidas en la papelera (Trash) y todo su contenido. Digamos que limpiamos hasta lo mas recóndito del directorio...
-   **~/.local/share/Trash/\*:** Es la dirección donde está la papelera, el símbolo inicial (creo que se llama _«virgulilla»_) nos sirve para identificar el directorio principal del usuario root y el asterisco final es una especie de comodín para eliminar todas las carpetas incluidas en Trash.

## Bonus

Ya entendiendo el comando por ahí queramos jugar un poco más con la terminal, por lo cual vamos (antes de borrar) a revisar que tiene nuestra papelera desde la terminal, comando de terminal muy importante que nos va a servir muchisimo…

Primero nos logueamos como **superusuario** _(el guión nos va a servir para cambiarnos al directorio de root)_

    su -

nos vamos a la papelera con el conocido _cd_:

    cd ~/.local/share/Trash/*

y echamos un vistazo a lo que contiene _ls_ (incluyendo los archivos ocultos _-a_):

    ls -a

en especial a la carpeta _carpeta_ siendo carpeta el nombre de cualquier carpeta que tengamos nosotros dentro de la papelera:

    ls -a carpeta

Fuente: La Mirada del Replicante

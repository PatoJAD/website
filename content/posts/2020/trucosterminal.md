---
title: "Trucos para la terminal"
date: "2020-12-10 10:50:00"
description: "Trucos para la terminal que facilitan el dia a dia"
type: "linux"
tags: ["terminal", "bash", "shell", "trucos", "consola", "cursor", "teclas", "rapidas"]
category: ["Linux"]
img: "https://www.islabit.com/wp-content/uploads/2019/06/Linux-16.png"
authors: ["PatoJAD"]
---



Bash usa una biblioteca (una colección compartida de rutinas que pueden utilizar diferentes programas) llamada Readline para implementar la edición de la línea de comandos. Ya hemos visto algo de esto. Sabemos, por ejemplo, que las teclas de las flechas mueven el cursor, pero hay muchas más características. Piensa en ello como herramientas adicionales que podemos emplear en nuestro trabajo. No es importante aprenderlo todo sobre ellas, pero muchas son muy útiles. Cógelas y elígelas como quieras.




## Movimiento del cursor



La siguiente lista muestra las teclas usadas para mover el cursor:



* **Ctrl-a**: Mueve el cursor al principio de la línea.
* **Ctrl-e**: Mueve el cursor al final de la línea.
* **Ctrl-f**: Mueve el cursor un carácter hacia delante; igual que la flecha derecha.
* **Ctrl-b**: Mueve el cursor un carácter hacia atrás; igual que la flecha izquierda.
* **Alt-f**: Mueve el cursor hacia delante una palabra.
* **Alt-b**: Mueve el cursor hacia atrás una palabra.
* **Ctrl-l**: Borra la pantalla y mueve el cursor a la esquina superior izquierda. El comando clear hace lo mismo.




## Modificando el texto



La lista a continuacion muestra los comandos de teclado que se usan para editar caracteres en la línea de comandos.



* **Ctrl -d**: Borra un carácter en la localización del cursor
* **Ctrl -t**: Traspasa (intercambia) el carácter en la localización del cursor con el que le precede
* **Alt -t**: Traspasa la palabra en la localización del cursor con la que le precede
* **Alt -l**: Convierte los caracteres desde la localización del cursor hasta el final de la palabra a minúsculas
* **Alt -u**: Convierte los caracteres desde la localización del cursor hasta el final de la palabra a mayúsculas




## La Meta tecla



Si te aventuras en la documentación Readline, que puedes encontrar en la sección READLINE de la man page de bash, encontrarás el término “meta key”. En los teclados modernos se asigna a la tecla Alt pero no siempre fue así.

Volviendo a los tiempos oscuros (antes de los Pcs pero después de Unix) no todo el mundo tenía su propio ordenador. Lo que podían tener era un dispositivo llamado terminal. Un terminal era un dispositivo de comunicación que contaba con una pantalla para mostrar texto y un teclado, y dentro  la suficiente electrónica para mostrar caracteres de texto y mover el cursor. Estaba conectado (normalmente con un cable serie) a una computadora mayor o a la red de comunicación de una computadora mayor. Había muchas marcas diferentes de terminales y todas tenían configuraciones de pantalla y teclado diferentes. Como todas tendían al menos a entender ASCII, los desarrolladores de software querían escribir aplicaciones portables reducidas al mínimo común denominador. Los sistemas Unix tienen una forma muy elaborada de tratar con los terminales y sus pantallas. Como los desarrolladores de Readline no podían estar seguros de la presencia de una tecla de control extra, se inventaron una y la llamaron “meta”. Igual que la tecla Alt sirve como tecla meta en los teclados modernos, puedes también pulsar y soltar la tecla Esc para tener el mismo efecto que pulsando la tecla Alt si todavía estás usando un terminal (¡Lo que aún puedes hacer en Linux!).




## Completado



Otra forma en que el shell puede ayudarte es mediante un mecanismo llamado completado. El completado ocurre cuando presionas la tecla tabulador mientras escribes un comando. Veamos como funciona. Dado un directorio home que aparece así:



    [VasakOS@PatoJAD ~]$ ls
    Desktop   ls-output.txt Pictures Templates Videos
    Documents Music         Public



Prueba escribiendo lo siguiente pero no pulses la tecla Enter:



    [VasakOS@PatoJAD ~]$ ls l



Ahora pulsa la tecla tabulador:



    [VasakOS@PatoJAD ~]$ ls ls-output.txt



¿Ves cómo el shell completa la línea por tí? Probemos otra vez. De nuevo, no pulses Enter:



    [VasakOS@PatoJAD ~]$ ls D



Pulsa tab:



    [VasakOS@PatoJAD ~]$ ls D



No completa, sólo da un pitido. Esto ocurre porque “D” coincide con más de una entrada en el directorio. Para que el completado funcione, el “indicio” que le des no debe ser ambiguo. Si seguimos:



    [VasakOS@PatoJAD ~]$ ls Do



Y pulsamos tab:



    [VasakOS@PatoJAD ~]$ ls Documents



El completado funciona.

Aunque este ejemplo muestra el completado de nombres de archivo, que es su uso más común, el completado también funciona con variables (si el principio de la palabra es un “$”), nombres de usuario (si la palabra empieza con “~”), comandos (si la palabra es la primera en la línea.) y nombres de equipo (si la palabra empieza con “@”). El completado de nombres de equipo sólo funciona para los nombres de equipo listados en /etc/hosts.




## script



Además de la función del historial de comandos en bash, la mayoría de las distribuciones Linux incluyen un programa llamado script que se puede utilizar para grabar una sesión de shell completa y almacenarla en un archivo. La sintaxis básica del comando es:



    script [archivo]



donde archivo es el nombre del archivo utilizado para almacenar la grabación. Si no se especifica ningún archivo, se usa el archivo typescript. Mira la man page de script para ver una lista completa de las opciones y funciones del programa.




---




Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

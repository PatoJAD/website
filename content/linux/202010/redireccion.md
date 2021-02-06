---
title: "Redirección: El secreto de la terminal"
date: "2020-10-22 09:13:00"
description: "En esta lección vamos a desvelar la que podría ser la mejor característica de la línea de comandos"
type: "linux"
tags: ["comando", "terminal", "redireccion", "salida", "error", "estandar", "consola"]
category: ["Linux"]
img: "https://i1.wp.com/www.somosbinarios.es/wp-content/uploads/2013/12/Linux-redireccion.png?w=800&ssl=1"
authors: ["PatoJAD"]
---



En esta lección vamos a desvelar la que podría ser la mejor característica de la línea de comandos. Se llama redirección I/O. I/O significa input/output y con esta característica puedes redirigir la salida y entrada de los comandos hacia o desde archivos, así como conectar múltiples comandos juntos con poderosos “conductos” o pipelines (Tuberías) de comandos.




## Entrada, salida y error estándar



Muchos de los programas que hemos usado hasta ahora producen algún tipo de salida. Esta salida, a menudo es de dos tipos. Primero, tenemos los resultados del programa; es decir, los datos que el programa está diseñado para producir, y segundo, tenemos mensajes de estado y de error que nos dicen cómo va el programa. Si observamos un comando como ls, podemos ver que muestra sus resultados y sus mensajes de error en la pantalla.

Siguiendo con el tema Unix de “todo es un archivo”, programas como ls en realidad mandan sus resultados a un archivo especial llamado standard output o salida estándar (a menudo expresado como stdout) y sus mensajes de estado a otro archivo llamado standard error o error estándar (stderr). Por defecto, tanto la salida estándar como el error estándar están vinculados a la pantalla y no se guardan en un archivo en el disco.

Además muchos programas toman la entrada de una característica llamada standard input o entrada estándar (stdin) que está, por defecto, asociada al teclado.

La redirección I/O nos permite cambiar dónde va la salida y de dónde viene la entrada. Normalmente, la salida va a la pantalla y la entrada viene del teclado, pero con la redirección I/O, podemos cambiarlo.




## Redirigiendo la salida estándar



La redirección I/O nos permite redefinir dónde va la salida estándar. Para redirigir la salida estándar a otro archivo en lugar de a la pantalla, usamos el operador de redirección “>” seguido del nombre del archivo. ¿Para qué querríamos hacer esto? A menudo es útil almacenar la salida de un comando en un archivo. Por ejemplo, podríamos decirle al shell que mande la salida del comando ls al archivo ls-output.txt en lugar de a la pantalla:



    ls -l /usr/bin > ls-output.txt



Aquí, hemos creado un largo listado del directorio /usr/bin y hemos mandado los resultados al archivo ls-output.txt. Examinemos la salida redirigida del comando:



    ls -l ls-output.txt



    -rw-rw-r-- 1 me me 167878 2008-02-01 15:07 ls-output.txt



Bien, un bonito y largo archivo de texto. Si vemos el archivo con less, veremos que el archivo ls-output.txt en efecto contiene el resultado del nuestro comando ls:



    less ls-output.txt



Ahora, repitamos nuestra prueba de redirección, pero esta vez con un giro. Cambiaremos el nombre del directorio a uno que no exista:



    ls -l /bin/usr > ls-output.txt



    ls: cannot access /bin/usr: No such file or directory



Recibimos un mensaje de error. Esto tiene sentido ya que hemos especificado el directorio /bin/usr que no existe, pero ¿por qué ha mostrado el mensaje de error en la pantalla en lugar que ser redirigido al archivo ls-output.txt? La respuesta es que el programa ls no manda sus mensajes de error a la salida estándar. En lugar de eso, como la mayoría de los programas bien escritos de Unix, manda sus mensajes de error al error estándar. Como sólo hemos redirigido la salida estándar y no el error estándar, el mensaje de error todavía es enviado a la pantalla. Veremos  como redirigir el error estándar en un minuto, pero primero, veamos que ha ocurrido a nuestro archivo de salida:



      ls -l ls-output.txt



      -rw-rw-r-- 1 me me 0 2008-02-01 15:08 ls-output.txt



¡El archivo ahora tiene tamaño cero! Esto se debe a que, cuando redirigimos la salida con el operador de redirección “>”, el archivo de destino siempre se sobreescribe desde el principio. Como nuestro comando ls no generó resultados  y sólo un mensaje de error, la operación de redirección comenzó a reescribir el archivo y paró a causa del error, lo que provocó que se truncase. De hecho, si alguna vez necesitamos realmente un archivo truncado (o crear un archivo nuevo vacío) podemos usar un truco como este:



    > ls-output.txt



Simplemente usando el operador de redirección con ningún comando precediéndolo truncará un archivo existente o creará un archivo nuevo vacío.

Pero, ¿cómo podemos añadir la salida redirigida a un archivo en lugar de sobrescribir el archivo desde el principio? Para eso, usamos el operador de redirección “>>”, así:



    ls -l /usr/bin >> ls-output.txt



Usando el operador “>>” tendremos como resultado que la salida se añadirá al archivo. Si el archivo no existe, se creará igual que como con el operador “>” que hemos estado usando. Probémoslo:



    ls -l /usr/bin >> ls-output.txt
    ls -l /usr/bin >> ls-output.txt
    ls -l /usr/bin >> ls-output.txt
    ls -l ls-output.txt



    -rw-rw-r-- 1 me me 503634 2008-02-01 15:45 ls-output.txt



Hemos repetido el comando tres veces resultando un archivo de salida tres veces más grande.




## Redirigiendo el error estándar



Redirigir el error estándar carece de la facilidad de un operador de redirección dedicado. Para redirigir el error estándar debemos referirnos a su descriptor de archivo (file descriptor). Un programa puede producir salidas en una secuencia de varios archivos numerados. Aunque nos hemos referido a los tres primeros de esta secuencia de archivos como entrada estándar, salida estándar y error estándar, el shell se refiere a ellos internamente con los descriptores de archivo 0, 1 y 2 respectivamente. El shell proporciona una notación para redirigir archivos utilizando el número de descriptor de archivo. Como el error estándar es el mismo que el descriptor de archivo número 2, podemos redirigir el error estándar con esta notación:



    ls -l /bin/usr 2> ls-error.txt



El descriptor de archivo “2” se coloca inmediatamente antes del operador de redirección para realizar la redirección del error estándar al archivo ls-error.txt.




## Redirigiendo la salida estándar y el error estándar a un archivo



Hay casos en que queremos capturar toda la salida de un comando a un archivo. Para hacerlo, debemos redirigir tanto la salida estándar como el error estándar al mismo tiempo. Hay dos formas de hacerlo. Primero, la forma tradicional, que funciona con versiones antiguas del shell:



    ls -l /bin/usr > ls-output.txt 2>&1



Utilizando este método, conseguiremos dos redirecciones. Primero redirigimos la salida estándar al archivo ls-output.txt y después redirigimos el descriptor de archivo 2 (error estándar) al descriptor de archivo 1 (salida estándar) usando la notación 2>&1.

Fíjate que el orden de las redirecciones es fundamental. La redirección del error estándar siempre debe ocurrir después de redirigir la salida estándar o no funcionará. En el ejemplo anterior,



    >ls-output.txt 2>&1



se redirige el error estándar al archivo ls-output.txt, pero si cambiamos el orden a



    2>&1 >ls-output.txt



El error estándar es redirigido a la pantalla.

Versiones recientes de bash proporcionan un segundo, y más eficiente método para realizar esta redirección combinada:



    ls -l /bin/usr &> ls-output.txt



En este ejemplo, usamos la notación simple &> para redirigir tanto la salida estándar como el error estándar al archivo ls-output.txt. Podrías también añadir la salida estándar y el error estándar a un archivo existente así:



    ls -l /bin/usr &>> ls-output.txt




---




Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

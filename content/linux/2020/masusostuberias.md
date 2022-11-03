---
title: "Tuberias un poco mas a fondo"
date: "2020-11-04 09:24:00"
description: "Seguimos mezclando y aprendiendo sobre shell y la terminal de linux "
type: "linux"
tags: ["tuberias", "linux", "terminal", "shell", "consola", "filtros", "uniq", "wc", "grep", "tee", "tail", "head"]
category: ["Linux"]
img: "https://www.howtogeek.com/wp-content/uploads/2020/01/3-1.png"
authors: ["PatoJAD"]
---



Ya vimos en la publicación anterior sobre tuberías y ahora vamos a darle un poco más de uso y vamos a ir viendo algunos ejemplos. Recuerde que todo lo que aprendamos puede irse combinando en cuanto a lo lógico sea.




## La diferencia entre > y |



A primera vista, podría ser difícil de comprender la redirección realizada por el operador tubería (pipeline)  | frente a la del operador de redirección >. Simplificando, el operador de redirección conecta un comando con un archivo mientras que el operador tubería conecta la salida de un comando con la entrada de un segundo comando.



    comando1 > archivo1
    comando1 | comando2



Mucha gente intentará lo siguiente cuando estén aprendiendo las tuberías, “sólo para ver lo que sucede.”



    comando1 > comando2



Respuesta: A veces algo realmente malo.

Aquí tenemos un ejemplo real enviado por un lector que estaba administrando un servidor basado en Linux. Como superusuario, hizo esto:



    cd /usr/bin
    ls > less



El primer comando le colocó en el directorio donde están almacenados la mayoría de los programas y el segundo comando le dijo al shell que sobrescriba el archivo less con la salida del comando ls. Como el directorio /usr/bin ya contenía un archivo llamado “less” (el programa less), el segundo comando sobrescribió el archivo del programa less con el texto de ls y en consecuencia destruyó el programa less en su sistema.

La lección aquí es que el operador de redirección crea o sobrescribe archivos silenciosamente, así que necesitas tratarlo con mucho respeto.




## Filtros



Las tuberías a menudo se usan para realizar complejas operaciones con datos. Es posible poner varios comandos juntos en una tubería. Con frecuencia, a los comandos usados de esta forma se les llama filtros. Los filtros toman entradas, las cambian de alguna manera y las mandan a la salida. El primero que probaremos es sort. Imagina que queremos hacer una lista combinada de todos los programas ejecutables en /bin y en /usr/bin, que los ponga en orden y los veamos:



    ls /bin /usr/bin | sort | less



Como hemos especificado dos directorios  (/bin y /usr/bin), la salida de ls debería haber consistido en dos listas ordenadas, una para cada directorio. Pero incluyendo sort, en nuestra tubería, hemos cambiado los datos para producir una única lista ordenada.




## uniq – Muestra u omite líneas repetidas



El comando uniq a menudo se usa junto con sort. uniq acepta una lista ordenada de datos de la entrada estándar o de un argumento que sea un nombre de archivo (mira la man page de uniq para saber más detalles) y, por defecto, elimina los duplicados de la lista. Así, que para estar seguro de que nuestra lista no tiene duplicados (ya sabes, algunos programas con el mismo nombre pueden aparecer tanto en el directorio /bin como en /usr/bin) añadiremos uniq a nuestra tubería:



    ls /bin /usr/bin | sort | uniq | less



En este ejemplo, usamos uniq para eliminar duplicados de la salida del comando sort. Si, en lugar de eso, queremos ver la lista de duplicados, añadiremos la opción “-d” a uniq así:



    ls /bin /usr/bin | sort | uniq -d | less




## wc – Muestra el número de líneas, palabras y bytes



El comando wc (word count – contador de palabras) se usa para mostrar el número de líneas, palabras y bytes contenidos en un archivo. Por ejemplo:



    wc ls-output.txt



Viendo una salida como esta:



    7902 64566 503634 ls-output.txt



En este caso muestra tres números: líneas, palabras y bytes contenidos en ls-output.txt. Como nuestros anteriores comandos, si lo ejecutamos sin argumentos, wc acepta la entrada estándar. La opción “-l” limita su salida para mostrar sólo el número de líneas. Añadirlo a una tubería es una forma útil de contar cosas. Para ver el número de elementos que tenemos en nuestra lista ordenada, podemos hacer esto:



    ls /bin /usr/bin | sort | uniq | wc -l



Viendo una salida como esta:



    2728




## grep – Imprime líneas que coinciden con un patrón



grep es un programa poderoso utilizado para encontrar patrones de texto en los archivos. Se usa así:



    grep patrón [archivo...]



Cuando grep encuentra un “patrón” en el archivo, muestra las líneas que lo contienen. El patrón que grep puede encontrar puede ser muy complejo, pero por ahora nos concentraremos en simples coincidencias de texto. Trataremos patrones avanzados, llamados expresiones regulares en un capítulo posterior.

Digamos que queremos encontrar todos los archivos, en nuestra lista de programas, que tengan la palabra “zip” incluida en el nombre. Una búsqueda así debería darnos una idea de algunos de los programas en nuestro sistema que tienen algo que ver con la compresión de archivos. Haríamos esto:



    ls /bin /usr/bin | sort | uniq | grep zip



Mostrando una salida como la siguiente:



    bunzip2
    bzip2
    gunzip
    gzip
    unzip
    zip
    zipcloak
    zipgrep
    zipinfo
    zipnote
    zipsplit



Hay un par de opciones útiles para grep: “-i” que hace que grep no diferencie entre mayúsculas y minúsculas cuando haga la búsqueda (normalmente las búsquedas distinguen entre mayúsculas y minúsculas) y “-v” que le dice a grep que sólo muestre las líneas que no coincidan con el patrón.




## head / tail – Muestra la primera/última parte de los archivos



Algunas veces no quieres toda la salida de un comando. Podrías querer sólo las primeras o las últimas líneas. El comando head muestra las primeras diez líneas de un archivo y el comando tail muestras las diez últimas. Por defecto, ambos comandos muestran diez líneas de texto, pero esto puede ajustarse con la opción “-n”:



    head -n 5 ls-output.txt



Mostrando una salida:



    total 343496
    -rwxr-xr-x 1 root root  31316 2007-12-05 08:58 [
    -rwxr-xr-x 1 root root   8240 2007-12-09 13:39 411toppm
    -rwxr-xr-x 1 root root 111276 2007-11-26 14:27 a2p
    -rwxr-xr-x 1 root root  25368 2006-10-06 20:16 a52dec



    tail -n 5 ls-output.txt



Mostrando la siguiente salida:



    -rwxr-xr-x 1 root root   5234 2007-06-27 10:56 znew
    -rwxr-xr-x 1 root root    691 2005-09-10 04:21 zonetab2pot.py
    -rw-r--r-- 1 root root    930 2007-11-01 12:23 zonetab2pot.pyc
    -rw-r--r-- 1 root root    930 2007-11-01 12:23 zonetab2pot.pyo
    lrwxrwxrwx 1 root root      6 2008-01-31 05:22 zsoelim -> soelim



También se pueden usar en tuberías:



    ls /usr/bin | tail -n 5



Mostrando la siguiente salida:



    znew
    zonetab2pot.py
    zonetab2pot.pyc
    zonetab2pot.pyo
    zsoelim



tail tiene una opción que nos permite ver los archivos en tiempo real. Esto es útil para ver el progreso de los archivos de logs tal como se van escribiendo. En el siguiente ejemplo, veremos el archivo messages en /var/log (o el archivo /var/log/syslog si messages no existe). Se requieren privilegios de superusuario para hacerlo en algunas distribuciones Linux, ya que el archivo /var/log/messages podría contener información de seguridad:



    tail -f /var/log/messages



Mostrando la siguiente salida:



    Feb 8 13:40:05 twin4 dhclient: DHCPACK from 192.168.1.1
    Feb 8 13:40:05 twin4 dhclient: bound to 192.168.1.4 -- renewal in 1652 seconds.
    Feb 8 13:55:32 twin4 mountd[3953]: /var/NFSv4/musicbox exported to both 192.168.1.0/24 and twin7.localdomain in 192.168.1.0/24,twin7.localdomain
    Feb 8 14:07:37 twin4 dhclient: DHCPREQUEST on eth0 to 192.168.1.1 port 67
    Feb 8 14:07:37 twin4 dhclient: DHCPACK from 192.168.1.1
    Feb 8 14:07:37 twin4 dhclient: bound to 192.168.1.4 -- renewal in 1771 seconds.
    Feb 8 14:09:56 twin4 smartd[3468]: Device: /dev/hda, SMART Prefailure Attribute: 8 Seek_Time_Performance changed from 237 to 236
    Feb 8 14:10:37 twin4 mountd[3953]: /var/NFSv4/musicbox exported to both 192.168.1.0/24 and twin7.localdomain in 192.168.1.0/24,twin7.localdomain
    Feb 8 14:25:07 twin4 sshd(pam_unix)[29234]: session opened for user me by (uid=0)
    Feb 8 14:25:36 twin4 su(pam_unix)[29279]: session opened for user root by me(uid=500)



Usando la opción “-f”, tail continuará monitorizando el archivo y cuando se le añaden nuevas líneas, inmediatamente aparecen en la pantalla. Esto continúa hasta que pulses Ctrl-c.




## Tee – Lee de stdin y lo pasa a stdout y a archivos



Siguiendo con nuestra metáfora de fontanería, Linux proporciona un comando llamado tee que crea una unión con forma de “T” en nuestra tubería. El programa tee lee la entrada estándar y la copia a la salida estándar (permitiendo que los datos continúen bajando por la tubería) y a uno o más archivos. Esto es útil para capturar el contenido de una tubería en una fase intermedia del procesamiento. Repetiremos uno de nuestros anteriores ejemplos, esta vez incluyendo tee para capturar el listado completo del directorio al archivo ls.txt antes de que grep filtre el contenido de la tubería:



    ls /usr/bin | tee ls.txt | grep zip



Mostrando la siguiente salida:



    bunzip2
    bzip2
    gunzip
    gzip
    unzip
    zip
    zipcloak
    zipgrep
    zipinfo
    zipnote
    zipsplit




---




Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

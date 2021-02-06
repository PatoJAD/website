---
title: "Una visita guiada"
date: "2020-08-28 09:15:00"
description: "Linux en dispositivos moviles no es cosa de hoy, esto tiene mucho tiempo y queremos ver su estatus en 2007"
type: "linux"
tags: ["console","consola","terminal","cd","ls","less","file","system"]
category: ["Linux"]
img: "https://ayudalinux.com/wp-content/uploads/2018/07/cat-texto-2.png"
authors: ["PatoJAD"]
---



La disposición del sistema de archivos en tu sistema Linux es casi como el que encontramos en otros sistemas tipo Unix. El diseño está especificado en un estándar publicado llamado **Linux Filesystem Hierarchy Standard** (Jerarquía Estándar del sistema de archivos de Linux). No todas las distribuciones Linux cumplen exactamente el estándar, pero la mayoría se acercan bastante.

A continuación, vamos a dar un paseo por el sistema de archivos para darnos cuenta qué hace que nuestro sistema Linux funcione. Esto nos dará la oportunidad de practicar nuestras habilidades de navegación. Una de las cosas que descubriremos es que muchos de los archivos interesantes están en texto plano legible. A medida que vayamos avanzando en nuestra visita guiada, prueba lo siguiente:



* cd en un directorio dado
* Lista los contenidos del directorio con ls -l
* Si ves un archivo interesante, determina su contenido con file
* Si parece que pudiera ser texto, trata de verlo con less



A medida que avancemos, no tengas miedo de echar un vistazo. Los usuarios normales tienen terminantemente prohibido **desordenar** cosas. *¡Es trabajo para los administradores de sistema!* Si un comando protesta sobre algo, pasa a otra cosa. Pasa algo de tiempo echando un vistazo. El sistema es nuestro para explorarlo. Recuerda, en Linux, ¡no hay secretos!



* **/** : El directorio raíz. Donde comienza todo.
* **/bin** : Contiene binarios (programas) que tienen que estar presentes para que el sistema arranque y funcione.
* **/boot** : Contiene el kernel de Linux, la imagen del disco de RAM inicial (para controladores necesarios en el momento del arranque), y el cargador de arranque. Archivos interesantes:
    * **/boot/grub/grub.conf** o **menu.lst**, que se utilizan para configurar el cargador de arranque.
    * **/boot/vmlinuz**, el kernel de Linux.
* **/dev** : Este es un directorio especial que contiene los nodos de dispositivo. **“Todo es un archivo”** también se aplica a los dispositivos. Aquí es donde el kernel mantiene una lista de todos los dispositivos que reconoce.
* **/etc** : El directorio /etc contiene todos los archivos de configuración del sistema. También contiene una colección de scripts de shell que inician cada uno de los servicios del sistema durante el arranque. Todo en este directorio debería ser texto legible.
Archivos interesantes: Como todo en /etc es interesante, os dejo algunos de mis favoritos de siempre:
    * **/etc/crontab**, un archivo que define cuándo se ejecutarán los trabajos automáticos.
    * **/etc/fstab**, una tabla de los dispositivos de almacenamiento y sus puntos de montaje asociados.
    * **/etc/passwd**, una lista de las cuentas de usuario.
* **/home** : En configuraciones normales, a cada usuario se le asigna un directorio en /home. Los usuarios normales sólo pueden escribir archivos en sus directorios home. Esta limitación protege el sistema de actividades erróneas de los usuarios.
* **/lib** : Contiene archivos de bibliotecas compartidas utilizadas por los programas del núcleo del sistema. Son similares a las DLL de Windows.
* **/lost+found** : Cada partición formateada o dispositivo que usa un sistema de archivos de Linux como ext3, tendrá este directorio. Se usa en caso de una recuperación parcial causada por un evento de corrupción del sistema de archivos. A menos que algo realmente malo ocurra a tu sistema, este directorio debería permanecer vacío.
* **/media** : En sistemas Linux modernos el directorio /media contendrá los puntos de montaje de los dispositivos extraíbles como unidades USB, CD-ROMs, etc. que se montan automáticamente al introducirlos.
* **/mnt** : El sistemas Linux antiguos, el directorio /mnt contiene los puntos de montaje de los dispositivos extraíbles que han sido montados manualmente.
* **/opt** : El directorio /opt se usa para instalar software “opcional”. Principalmente se usa para contener productos de software comercial que podrían ser instalados en tu sistema.
* **/proc** : El directorio /proc es especial. No es un sistema de ficheros real en el sentido de archivos almacenados en tu disco duro. En su lugar, es un sistema de archivos virtual mantenido por el kernel de Linux. Los “archivos” que contienen son como mirillas dentro del propio núcleo. Los archivos son legibles y te darán una descripción de cómo el kernel ve el ordenador.
* **/root** : Es el directorio home para la cuenta root.
* **/sbin** : Este directorio contiene binarios del "sistema". Son programas que realizan tareas vitales del sistema que generalmente están reservadas al superusuario.
* **/tmp** : El directorio /tmp está destinado a almacenamiento de archivos temporales creados por varios programas. Algunas configuraciones hacen que este directorio sea vaciado cada vez que el sistema se reinicia.
* **/usr** : El árbol del directorio /usr es casi el más grande en un sistema Linux. Contiene todos los programas y archivos de soporte utilizados por los usuarios normales.
* **/usr/bin** : Contiene los programas ejecutables instalados en tu distribución Linux. No es raro que este directorio contenga miles de programas.
* **/usr/lib** : Las bibliotecas compartidas para los programas en /usr/bin.
* **/usr/local** : El árbol /usr/local es donde están instalados los programas que no están incluidos en tu distribución pero están destinados a un uso general. Los programas compilados a partir del código fuente normalmente se instalan en /usr/local/bin. En un sistema Linux recién instalado, este árbol existe, pero estará vacío hasta que el administrador del sistema coloque algo en él.
* **/usr/sbin** : Contiene más programas de administración del sistema.
* **/usr/share** : Contiene todos los datos compartidos utilizados por los programas en /usr/bin. Esto incluye cosas como archivos de configuración por defecto, iconos, fondos de pantalla, archivos de sonido, etc.
* **/usr/share/doc** : La mayoría de los paquetes instalados en el sistema incluirán algún tipo de documentación. En /usr/share/doc, encontraremos archivos de documentación ordenados por paquetes.
* **/var** : Con la excepción de /tmp y /home, los directorios que hemos visto hasta ahora permanecen relativamente estáticos, o sea, su contenido no cambia. El árbol del directorio /var es donde los datos, que es probable que cambien, son almacenados. Diferentes bases de datos, colas de impresión, correos de usuarios, etc. se encuentran aquí.
* **/var/log** : Contiene archivos de registro (log files) de varias actividades del sistema. Son muy importantes y deberían ser monitorizados de vez en cuando. El más útil es /var/log/messages. Ten en cuenta que, por razones de seguridad, en algunos sistemas, tienes que ser superusuario para ver los archivos de registro.




## Enlaces Simbólicos



A medida que inspeccionamos, es probable que veamos un listado de directorios con una entrada como esta:



    lrwxrwxrwx 1 root root 11 2007-08-11 07:34
    libc.so.6 -> libc-2.6.so



¿Ves como la primera letra del listado es “l” y la entrada parece tener dos nombres de archivo? Esto es un tipo especial de archivo llamado enlace simbólico (también conocido como enlace blando o sym-link.) En la mayoría de los sistemas tipo Unix es posible tener un archivo referenciado por múltiples nombres. Aunque el sentido de esto no parezca obvio, es realmente una característica muy útil.

Imagina este escenario: Un programa requiere el uso de  algún tipo de  recurso compartido contenido en un archivo llamado “foo”, pero “foo” tiene frecuentes cambios de versión. Sería bueno incluir el número de versión en el nombre del archivo para que el administrador u otras partes interesadas pudieran ver qué versión de “foo” está instalada. Esto presenta un problema. Si cambiamos el nombre del recurso compartido, tenemos que localizar cada programa que pudiera usarlo y cambiarlo para que busque el nuevo nombre del recurso cada vez que se instale una nueva versión del mismo. Esto no suena nada divertido.

Aquí es donde los enlaces simbólicos nos salvan el día.  Digamos que instalamos la versión 2.6 de “foo”, que tiene el nombre de archivo “foo-2.6” y entonces creamos un enlace simbólico llamado simplemente “foo” que apunta a “foo-2.6”. Esto significa que cuando un programa abre el archivo "foo", en realidad  está abriendo el archivo "foo-2.6". Ahora todo el mundo está contento. Los programas que utilizan “foo” pueden encontrarlo y nosotros aún podemos ver qué versión está instalada en realidad.  Cuando llegue la hora de actualizar a “foo-2.7”, sólo añadiremos el archivo a nuestro sistema, borraremos el enlace simbólico “foo” y crearemos uno nuevo que apunte a la nueva versión. No sólo soluciona el problema del cambio de versión,  también nos permite guardar ambas versiones en nuestra máquina. Imagina que “foo-2.7” tiene un bug (¡Condenados programadores!) y necesitamos recuperar la versión antigua. De nuevo, sólo borramos el enlace simbólico que apunta a la nueva versión y creamos un nuevo enlace simbólico apuntando a la versión antigua.




## Enlaces duros



Como estamos en el tema de los enlaces, tenemos que mencionar que hay un segundo tipo de enlace llamado enlace duro. Los enlaces duros también permiten a los archivos tener múltiples nombres, pero lo hacen de una forma distinta. Hablaremos más sobre las diferencias entre enlaces simbólicos y duros más adelante.




## Resumiendo



Terminada nuestra visita guiada, hemos aprendido un montón acerca de nuestro sistema. Hemos visto varios archivos y directorios y sus contenidos. Una cosa que deberías haber sacado de esto es lo abierto que es el sistema. En Linux hay muchos archivos importantes que están en texto plano y legible. Al contrario que muchos sistemas propietarios, Linux hace que todo pueda ser examinado y estudiado.




---



Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

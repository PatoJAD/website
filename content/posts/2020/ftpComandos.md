---
title: 'Comandos FTP'
date: '2020-02-06 09:22:00'
description: 'Seguimos viendo un poco mas sobre redes, hoy nos toca seguir nadando en FTP para conocer su consola'
type: 'post'
tags: ['ftp', 'red', 'internet']
categories: ['Redes', 'Aplicaciones', 'Programacion']
img: 'https://blog.desdelinux.net/wp-content/uploads/2014/10/ftp-ls-600x191.png'
authors: ['PatoJAD']
---

ya hablamos anteriormente de {{< textlink text="como instalar nuestro servidor FTP" url="/post/2020/02/servidor-ftp-qué-es-instalando-nuestro-propio-servidor/" >}}. Hoy veremos cómo trabajar con un servidor tan solo con comandos FTP. Puede que te preguntes de qué vale conocer los comandos de un servidor FTP si hoy día cualquier herramienta de gestión gráfica nos puede hacer todo el trabajo de forma fácil y sencilla. Sin embargo siempre es util conocerlo para poder trabajar lo mas bajo nivel que podamos.

## ¿Por qué utilizar comandos FTP?

Las herramientas gráficas nos pueden funcionar muy bien para el día a día, de hecho no usarlas para las funciones diarías sería una pérdida de tiempo ya que nos automatizan gran parte del trabajo. Sin embargo, cuando estas herramientas fallan llega la hora de trabajar a un nivel mas bajo, poder entender cómo trabaja un servidor FTP y así poder diagnosticar y solucionar el problema.

## Encontrar servidores FTP públicos (anónimos).

En la red existen servidores de acceso público, con contenido que google no indexa, si sabes manejarte. Aquí podrás encontrar tanto programas antiguos, que no hayarás en indexado por ninguna web. También podrás econtrar material específico de diversa índole. Algunos de los buscadores de servidores FTP públicos son:

-   https://www.searchftps.net/
-   http://www.ftp-sites.org/

En estos servidores podrás logearte como "anonymous" y dejando la clave en blanco. Por cortesía cuando uno accede a un servidor FTP anónimo suele escribir en el campo contraseña su dirección de correo electrónico, pero no es ni mucho menos obligatorio. Indagando en estos buscadores estamos seguros de que econtrarás bastante información interesante que no encontrarías haciendo una símple búsqueda en google, ni tan siquiera haciendo búsquedas avanzadas

## Comandos avanzados en servidores FTP

Antes de empezar a trabajar los comandos que sirven para conectarse, descargar y subir archivos a un servidor FTP entre otras muchas acciones. Vamos a tener claros algunos conceptos. En primer lugar debes saber que los servidores FTP trabajan por defecto en el puerto 21. Esto es, cuando aprendamos hacer escáners en la red, si detectamos que una máquina tiene el puerto 21 abierto con mucha probabilidad se tratará de un servidor FTP. Y digo con mucha probabilidad puesto que el puerto 21 es el puerto por defecto, el puerto estándar, pero esto se puede cambiar y es una medida de seguridad que emplean muchos administradores de sistemas para esconder sus servidores FTP. No obstante también puede ser que estemos conectando a servidores falsos, (honeypots) que son servidores destinados a engañar a las personas que intentan ingresar sin permisos creyendose "hackers" o salidos de alguna serie y hacerles perder el tiempo intentando conectar a un servidor que en realidad está vacio y solo emula un servidor FTP.

Antes que nada recomiendo utilizar siempre man para poder ver la especificacion para lo cual les dejo el {{< textlink text="link de la publicacion" url="/post/2019/01/man-tu-manual-para-linux/" >}}

    man ftp

Conexión al servidor:

    ftp 192.168.0.77

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-1.jpg" >}}

Consultar los comandos ftp disponibles

    ftp> ?

Consultar que hace un comando en concreto

    ftp> ? Nombre del comandos

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-2.jpg" >}}

Ver listar los ficheros y directorios

    ftp> dir
    ftp> ls

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-3.jpg" >}}

Entrar a un subdirectorio

    ftp> cd directorio

Volver al directorio padre

    ftp> cd ..

Descargar ficheros del servidores

    ftp> get fichero

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-4.jpg" >}}

Los ficheros se guardan en la ubicación local en la que nos encontremos.
Descargar varios ficheros a la vez del servidores (aquí entran en juego los comodines del shell de Linux)

    ftp>mget ficheros

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-5.jpg" >}}

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-7.jpg" >}}

Ver donde estamos en nuestra maquina local

    ftp> lcd

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-8.jpg" >}}

Movernos por los directorios locales

ftp> lcd directorio

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-9.jpg" >}}

Cerrar sesión FTP

    ftp> bye
    ftp> quit
    ftp> exit

Para los siguientes comandos necesitamos permisos de propietario por lo que nos identificamos como tal (también podemos usar el comando user).

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-10.jpg" >}}

Borrar fichero

    ftp> delete fichero

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-11.jpg" >}}

Crear directorios

    ftp> mkdir nombreDirectorio

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-12.jpg" >}}

Borrar directorio

    ftp> rmdir nombreDirectorio

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-13.jpg" >}}

Subir fichero

    ftp> put fichero

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-15.jpg" >}}

Subir multiples ficheros

    ftp> mput ficheros

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-16.jpg" >}}

Borrar múltiples archivos

    ftp> mdelete ficheros

{{< img src="https://victorroblesweb.es/wp-content/uploads/2013/11/Comandos-ftp-17.jpg" >}}

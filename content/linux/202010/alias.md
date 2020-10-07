---
title: "Creando tus propios comandos"
date: "2020-10-07 09:46:00"
description: "Hoy vamos a ver como crear nuestros proprios comandos en linux con alias"
type: "linux"
tags: ["comando", "terminal", "crear", "shell", "bash", "alias", "consola"]
category: ["Linux"]
img: "https://i.postimg.cc/NfkTZNGN/image.png"
authors: ["PatoJAD"]
---

{{< br >}}

En esta oportunidad crearemos un comando propio usando el comando *alias* que suele venir instalado en nuestra distribución de GBU/linux. Pero antes de empezar, necesitamos desvelar un pequeño truco de la línea de comandos. Es posible poner más de un comando en una línea separando cada comando con un punto y coma. Funciona así:

{{< br >}}

    comando1; comando2; comando3...

{{< br >}}

Aquí tenemos el ejemplo que usaremos:

{{< br >}}

    cd /usr; ls; cd -

{{< br >}}
{{< img src="https://i.postimg.cc/d0mhp3jz/image.png" >}}
{{< br >}}

Y nos da una salida como esta:

{{< br >}}

    bin  games   kerberos lib64   local share tmp
    etc  include lib      libexec sbin  src
    /home/me

{{< br >}}

Como podemos ver, hemos combinado tres comandos en una línea. Primero hemos cambiado el directorio a /usr luego hemos listado el directorio y finalmente hemos vuelto al directorio original (usando 'cd -') con lo que hemos terminado donde empezamos. Ahora convirtamos esta secuencia en un nuevo comando usando alias.

{{< br >}}
{{< br >}}

## Usando Alias

{{< br >}}

La primera cosa que tenemos que hacer es inventarnos un nombre para nuestro nuevo comando. Probemos “foo”. Antes de hacerlo, sería una buena idea averiguar si el nombre “foo” ya está siendo usado. Para averiguarlo, podemos usar el comando type de nuevo:

{{< br >}}

    type foo

{{< br >}}
{{< img src="https://i.postimg.cc/RFt4yDmq/image.png" >}}
{{< br >}}

Que nos retorna

{{< br >}}

    bash: type: foo: not found

{{< br >}}

¡Genial! “foo” no está cogido. Así que creemos nuestro alias:

{{< br >}}

    alias foo='cd /usr; ls; cd -'

{{< br >}}
{{< img src="https://i.postimg.cc/mZNG9Mgx/image.png" >}}
{{< br >}}

Fíjate en la estructura de este comando:

{{< br >}}

    alias name='string'

{{< br >}}

Tras el comando “alias” le damos a alias un nombre seguido inmediatamente (sin espacios en blanco) por un signo igual, seguido inmediatamente por una cadena entre comillas simples conteniendo los comandos que se asignarán al nombre. Después de definir nuestro alias, puede ser usado donde quiera que el shell acepte comandos. Probemos:

{{< br >}}

    foo

{{< br >}}
{{< img src="https://i.postimg.cc/j2jvCGjS/image.png" >}}
{{< br >}}

Ahora nos dara una salida similar a:

{{< br >}}

    bin  games   kerberos lib64   local share tmp
    etc  include lib      libexec sbin  src
    /home/me

{{< br >}}

También podemos usar el comando type de nuevo para ver nuestro alias:

{{< br >}}

    type foo

{{< br >}}
{{< img src="https://i.postimg.cc/mr8Hhh17/image.png" >}}
{{< br >}}

Ahora nos dira:

{{< br >}}

    foo is aliased to `cd /usr; ls ; cd -'

{{< br >}}

Para eliminar un alias, se usa el comando unalias, así:

{{< br >}}

    unalias foo
    type foo

{{< br >}}
{{< img src="https://i.postimg.cc/FsH35yfN/image.png" >}}
{{< br >}}

Y el type nos sirve para verificar que se elimino dando la siguiente salida:

{{< br >}}

    bash: type: foo: not found

{{< br >}}

Aunque evitamos a propósito nombrar nuestro alias con un nombre de comando existente, no es raro que se haga. Generalmente se hace para aplicar una opción que se utilice a menudo en cada invocación de un comando común. Por ejemplo, vimos antes que el comando ls a menudo es un alias con soporte para colores:

{{< br >}}

    type ls

{{< br >}}

Mostrando:

{{< br >}}

    ls is aliased to `ls –color=tty'

{{< br >}}

Para ver todos los alias definidos en nuestro entorno, utiliza el comando alias sin argumentos. Aquí tienes algunos de los alias definidos por defecto en un sistema Fedora. Pruébalo e imagina para qué sirve cada uno:

{{< br >}}

    alias

{{< br >}}
{{< img src="https://i.postimg.cc/NfkTZNGN/image.png" >}}
{{< br >}}

Mostrando las alias de la siguiente forma

{{< br >}}

    alias l.='ls -d .* --color=tty'
    alias ll='ls -l --color=tty'
    alias ls='ls –color=tty'

{{< br >}}

Hay un pequeño problema con la definición de alias en la línea de comandos. Se esfuman cuando la sesión de shell se cierra. Más adelante, veremos cómo añadir nuestros alias a archivos que establecen el entorno cada vez que iniciamos sesión, pero por ahora, disfruta del hecho de que hemos dado nuestro primer paso, aunque sea pequeño, ¡en el mundo de la programación en shell!

{{< br >}}
{{< br >}}

---


{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

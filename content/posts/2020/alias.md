---
title: 'Creando tus propios comandos'
date: '2020-10-07 09:46:00'
description: 'Vamos a ver como crear nuestros proprios comandos en linux con alias'
type: 'post'
tags:
    [
        'comando',
        'terminal',
        'crear',
        'shell',
        'bash',
        'alias',
        'consola',
        'comandos',
        'linux',
        'terminal',
        'bash',
        'shell',
        'consola',
        'comando',
        'alias',
        'crear',
        'propio',
        'propios',
        'comandos',
    ]
categories: ['Linux', 'Aplicaciones']
img: 'https://i.postimg.cc/NfkTZNGN/image.png'
authors: ['PatoJAD']
---

En esta oportunidad crearemos un comando propio usando el comando _alias_ que suele venir instalado en nuestra distribución de GBU/linux. Pero antes de empezar, necesitamos desvelar un pequeño truco de la línea de comandos. Es posible poner más de un comando en una línea separando cada comando con un punto y coma. Funciona así:

```zsh
comando1; comando2; comando3...
```

Aquí tenemos el ejemplo que usaremos:

```zsh
cd /usr; ls; cd -
```

![](https://i.postimg.cc/d0mhp3jz/image.png)

Y nos da una salida como esta:

```bash
bin  games   kerberos lib64   local share tmp
etc  include lib      libexec sbin  src
/home/me
```

Como podemos ver, hemos combinado tres comandos en una línea. Primero hemos cambiado el directorio a /usr luego hemos listado el directorio y finalmente hemos vuelto al directorio original (usando 'cd -') con lo que hemos terminado donde empezamos. Ahora convirtamos esta secuencia en un nuevo comando usando alias.

## Usando Alias

La primera cosa que tenemos que hacer es inventarnos un nombre para nuestro nuevo comando. Probemos “foo”. Antes de hacerlo, sería una buena idea averiguar si el nombre “foo” ya está siendo usado. Para averiguarlo, podemos usar el comando type de nuevo:

```zsh
type foo
```

![](https://i.postimg.cc/RFt4yDmq/image.png)

Que nos retorna

```bash
bash: type: foo: not found
```

¡Genial! “foo” no está cogido. Así que creemos nuestro alias:

```zsh
alias foo='cd /usr; ls; cd -'
```

![](https://i.postimg.cc/mZNG9Mgx/image.png)

Fíjate en la estructura de este comando:

```zsh
alias name='string'
```

Tras el comando “alias” le damos a alias un nombre seguido inmediatamente (sin espacios en blanco) por un signo igual, seguido inmediatamente por una cadena entre comillas simples conteniendo los comandos que se asignarán al nombre. Después de definir nuestro alias, puede ser usado donde quiera que el shell acepte comandos. Probemos:

```zsh
foo
```

![](https://i.postimg.cc/j2jvCGjS/image.png)

Ahora nos dara una salida similar a:

```bash
    bin  games   kerberos lib64   local share tmp
    etc  include lib      libexec sbin  src
    /home/me
```

También podemos usar el comando type de nuevo para ver nuestro alias:

```zsh
type foo
```

![](https://i.postimg.cc/mr8Hhh17/image.png)

Ahora nos dira:

```zsh
foo is aliased to `cd /usr; ls ; cd -'
```

Para eliminar un alias, se usa el comando unalias, así:

```zsh
unalias foo
type foo
```

![](https://i.postimg.cc/FsH35yfN/image.png)

Y el type nos sirve para verificar que se elimino dando la siguiente salida:

```bash
bash: type: foo: not found
```

Aunque evitamos a propósito nombrar nuestro alias con un nombre de comando existente, no es raro que se haga. Generalmente se hace para aplicar una opción que se utilice a menudo en cada invocación de un comando común. Por ejemplo, vimos antes que el comando ls a menudo es un alias con soporte para colores:

```zsh
type ls
```

Mostrando:

```zsh
ls is aliased to `ls –color=tty'
```

Para ver todos los alias definidos en nuestro entorno, utiliza el comando alias sin argumentos. Aquí tienes algunos de los alias definidos por defecto en un sistema Fedora. Pruébalo e imagina para qué sirve cada uno:

```zsh
alias
```

![](https://i.postimg.cc/NfkTZNGN/image.png)

Mostrando las alias de la siguiente forma

```zsh
alias l.='ls -d .* --color=tty'
alias ll='ls -l --color=tty'
alias ls='ls –color=tty'
```

Hay un pequeño problema con la definición de alias en la línea de comandos. Se esfuman cuando la sesión de shell se cierra. Más adelante, veremos cómo añadir nuestros alias a archivos que establecen el entorno cada vez que iniciamos sesión, pero por ahora, disfruta del hecho de que hemos dado nuestro primer paso, aunque sea pequeño, ¡en el mundo de la programación en shell!

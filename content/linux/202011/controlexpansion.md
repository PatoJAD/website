---
title: "Control de Expansión"
date: "2020-11-16 08:37:00"
description: "La terminal de linux tiene mucho para enseñarnos y vamos a hablar de como controlar la expansión."
type: "linux"
tags: ["expansion", "linux", "terminal", "shell", "consola", "filtros", "echo", "comodines", "control"]
category: ["Linux"]
img: "https://i.postimg.cc/mgZVDkP0/Captura-de-pantalla-de-2020-11-16-08-44-59.png"
authors: ["PatoJAD"]
---

{{< br >}}

Ya logramos ver como funcionan las expansiones, sin embargo muchas veces las mismas expansiones nos jugaran en contra y por lo cual lo mejor es aprender a controlarlas.

{{< br >}}
{{< br >}}

## Sustitución de comandos

{{< br >}}

La sustitución de comandos nos permite usar la salida de un comando como una expansión:

{{< br >}}

```bash
echo $(ls)
```

{{< br >}}

Generando una salida tal como:

{{< br >}}

```bash
Desktop Documents ls-output.txt Music Pictures Public Templates Videos
```

{{< br >}}
{{< img stc="https://i.postimg.cc/m2s8v8BZ/Captura-de-pantalla-de-2020-11-16-08-42-15.png" >}}
{{< br >}}

También es posible hacer algo como esto:

{{< br >}}

```bash
ls -l $(which cp)
```

{{< br >}}

```bash
-rwxr-xr-x 1 root root 71516 2007-12-05 08:58 /bin/cp
```

{{< br >}}
{{< img src="https://i.postimg.cc/2872rhSQ/Captura-de-pantalla-de-2020-11-16-08-42-48.png" >}}
{{< br >}}

Aquí hemos pasado el resultado de which cp como un argumento para el comando ls, de esta forma obtenemos el listado del programa cp sin tener que saber su ruta completa. No estamos limitados sólo a comandos simples. Se pueden usar tuberías enteras (sólo se muestra una salida parcial)

{{< br >}}
{{< br >}}

## Entrecomillado

{{< br >}}

Ahora que hemos visto de cuántas formas el shell puede realizar expansiones, es hora de aprender cómo podemos controlarlas. Tomemos un ejemplo:

{{< br >}}

```bash
echo this is a      test
echo The total is $100.00
```

{{< br >}}

Generando como salida correspondientemente:

{{< br >}}

```bash
this is a test
The total is 00.00
```

{{< br >}}
{{< img src="https://i.postimg.cc/7ZB9T47b/Captura-de-pantalla-de-2020-11-16-08-44-40.png" >}}
{{< br >}}

En el primer ejemplo, la separación de palabras del shell ha eliminado el espacio en blanco adicional de la lista de argumentos del comando echo. En el segundo ejemplo, la expansión con parámetros sustituyó con una cadena vacía el valor de “$1” porque era una variable indefinida. El shell proporciona un mecanismo llamado quoting (entrecomillado) para suprimir selectivamente expansiones no deseadas.

{{< br >}}
{{< br >}}

## Comillas dobles

{{< br >}}

El primer tipo de entrecomillado que vamos a ver son las comillas dobles. Si colocas un texto dentro de comillas dobles, todos los caracteres especiales utilizados por el shell perderán su significado especial y serán tratados como caracteres ordinarios. Las excepciones son “$”, “\\” (barra invertida), y “\`” (tilde invertida). Esto significa que la  separación de palabras, expansión de nombres de archivo, expansión de la tilde de la ñ y la expansión con llaves están suprimidas, pero la expansión con parámetros, la expansión aritmética y la sustitución de comandos sí que funcionarán. Usando comillas dobles, podemos manejar nombres de archivo que contengan espacios en blanco. Digamos que somos la desafortunada víctima de un archivo llamado two words.txt. Si tratáramos de usarlo en la línea de comandos, la separación de palabras haría que fuera tratado como dos argumentos separados en lugar del único argumento que queremos:

{{< br >}}

```bash
ls -l two words.txt
```

{{< br >}}

```bash
ls: cannot access two: No such file or directory
ls: cannot access words.txt: No such file or directory
```

{{< br >}}

Recuerda, la expansión con parámetros, la expansión aritmética y la sustitución de comandos siguen funcionando dentro de las comillas dobles:

{{< br >}}

```bash
echo "$USER $((2+2)) $(cal)"
```

{{< br >}}
{{< img src="https://i.postimg.cc/mgZVDkP0/Captura-de-pantalla-de-2020-11-16-08-44-59.png" >}}
{{< br >}}

```bash
me 4 February 2008
Su Mo Tu We Th Fr Sa
                1  2
 3  4  5  6  7  8  9
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29
```

{{< br >}}
{{< br >}}

## Comillas simples

{{< br >}}

Si necesitamos suprimir todas las expansiones, usamos comillas simples. A continuación vemos una comparación entre sin comillas, comillas dobles y comillas simples:

{{< br >}}

```bash
echo text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER
echo "text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER"
echo 'text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER'
```

{{< br >}}

Generando como salida correspondientemente

{{< br >}}

```bash
text /home/me/ls-output.txt a b foo 4 me
text ~/*.txt {a,b} foo 4 me
text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER
```

{{< br >}}
{{< img src="https://i.postimg.cc/Dz8grNd6/Captura-de-pantalla-de-2020-11-16-08-46-57.png" >}}
{{< br >}}

Como podemos ver, con cada nivel sucesivo de entrecomillado, se van suprimiendo más expansiones.

{{< br >}}
{{< br >}}

## Caracteres de escape

{{< br >}}

Algunas veces sólo queremos entrecomillar un único carácter. Para hacerlo, podemos preceder un carácter con una barra invertida, que en este contexto se llama carácter de escape. A menudo se hace dentro de las comillas dobles para prevenir selectivamente una expansión:

{{< br >}}

```bash
echo "The balance for user $USER is: $5.00"
```

{{< br >}}

```bash
The balance for user me is: $5.00
```

{{< br >}}

También es común usar caracteres de escape para eliminar el significado especial de un carácter en un nombre de archivo. Por ejemplo, es posible usar caracteres en nombres de archivo que normalmente tienen un significado especial para el shell. Esto incluye “$”, “!”, “&”, “ “, y otros. Para incluir un carácter especial en un nombre de archivo  puedes hacer esto:

{{< br >}}

```bash
mv bad\&filename good_filename
```

{{< br >}}

Para permitir que la barra invertida aparezca, la “escapamos” escribiendo “\\\\”. Fíjate que dentro de las comillas simples, la barra invertida pierde su significado especial y se trata como un carácter ordinario.

{{< br >}}
{{< br >}}

---


{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

---
title: "Expansión con llaves"
date: "2020-11-11 08:54:00"
description: "La terminal de linux tiene mucho para enseñarnos y vamos a hablar de la expansión llaves."
type: "linux"
tags: ["expansion", "linux", "terminal", "shell", "consola", "filtros", "echo", "comodines", "llaves"]
category: ["Linux"]
img: "https://i.postimg.cc/gJfMYbC7/Captura-de-pantalla-de-2020-11-11-08-49-23.png"
authors: ["PatoJAD"]
---

{{< br >}}

Quizás la expansión más extraña es la llamada **expansión con llaves**. Con ella, puedes crear múltiples cadenas de texto a partir de un patrón que contenga llaves. Aquí tienes un ejemplo:

{{< br >}}

```bash
echo Front-{A,B,C}-Back
```

{{< br >}}

Nos daría una salida tal como:

{{< br >}}

```bash
Front-A-Back Front-B-Back Front-C-Back
```

{{< br >}}
{{< img src="https://i.postimg.cc/kgchWZSV/Captura-de-pantalla-de-2020-11-11-08-46-15.png" >}}
{{< br >}}

Los patrones a expandir con llaves pueden contener un prefijo llamado preamble (preámbulo) y un sufijo llamado postcript (postdata). La expresión entre llaves puede contener una lista de cadenas separadas por comas o un rango de números enteros o caracteres individuales. El patrón no debe contener espacios en blanco. Aquí hay un ejemplo usando un rango de números enteros:

{{< br >}}

```bash
echo Number_{1..5}
```

{{< br >}}

Que imprime la siguiente salida

{{< br >}}

```bash
Number_1 Number_2 Number_3 Number_4 Number_5
```

{{< br >}}
{{< img src="https://i.postimg.cc/Ls8QDTkx/Captura-de-pantalla-de-2020-11-11-08-46-38.png" >}}
{{< br >}}

Los números enteros también pueden tener ceros a la izquierda así:

{{< br >}}

```bash
echo {01..15}
echo {001..15}
```

{{< br >}}

Imprimiendo como salidas respectivamente:

{{< br >}}

```bash
01 02 03 04 05 06 07 08 09 10 11 12 13 14 15
001 002 003 004 005 006 007 008 009 010 011 012 013 014 015
```

{{< br >}}
{{< img src="https://i.postimg.cc/2yh0yXmS/Captura-de-pantalla-de-2020-11-11-08-47-42.png" >}}
{{< br >}}

Un rango de letras en orden inverso:

{{< br >}}

```bash
echo {Z..A}
```

{{< br >}}

Mostrando:

{{< br >}}

```bash
Z Y X W V U T S R Q P O N M L K J I H G F E D C B A
```

{{< br >}}
{{< img src="https://i.postimg.cc/qRtbVv5n/Captura-de-pantalla-de-2020-11-11-08-47-59.png" >}}
{{< br >}}

Las expansiones con llaves pueden ser anidadas:

{{< br >}}

```bash
echo a{A{1,2},B{3,4}}b
```

{{< br >}}

Lo que daría una salida tal como:

{{< br >}}

```bash
aA1b aA2b aB3b aB4b
```

{{< br >}}
{{< img src="https://i.postimg.cc/Bv7YVKM4/Captura-de-pantalla-de-2020-11-11-08-48-14.png" >}}
{{< br >}}

¿Y para qué sirve esto? La aplicación más común es hacer listas de archivos o directorios a crear. Por ejemplo, si fuésemos fotógrafos con una gran colección de imágenes que queremos organizar en años y meses, la primera cosa que deberíamos hacer es crear una serie de directorios nombrados en formato numérico “Año-Mes”. De esta forma, los directorios se ordenarán cronológicamente. Podríamos escribir la lista completa de directorios, pero sería un montón de trabajo y sería muy fácil equivocarnos. En lugar de eso, podríamos hacer esto:

{{< br >}}

```bash
mkdir Fotos
cd Fotos
mkdir {2007..2009}-{01..12}
ls
```

{{< br >}}

Nos mostraría lo siguiente:

{{< br >}}

```
2007-01 2007-07 2008-01 2008-07 2009-01 2009-07
2007-02 2007-08 2008-02 2008-08 2009-02 2009-08
2007-03 2007-09 2008-03 2008-09 2009-03 2009-09
2007-04 2007-10 2008-04 2008-10 2009-04 2009-10
2007-05 2007-11 2008-05 2008-11 2009-05 2009-11
2007-06 2007-12 2008-06 2008-12 2009-06 2009-12
```

{{< br >}}
{{< img src="https://i.postimg.cc/gJfMYbC7/Captura-de-pantalla-de-2020-11-11-08-49-23.png" >}}
{{< br >}}
{{< br >}}

---


{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
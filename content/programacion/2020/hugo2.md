---
title: "Hugo CMS - Partials y BaseOf"
date: "2020-04-02 10:01:00"
description: "Ya teniendo nuestro sitio instalado podemos comenzar a modelar un theme para poder acomodarlo a nuestras necesidades"
type: "programacion"
tags: ["hugo", "cms", "partials", "baseof", "gougo", "tutorial", "curso"]
category: ["Programacion"]
img: "https://i9.ytimg.com/vi/mdjb-e6u8pk/mqdefault.jpg?time=1585832703647&sqp=CPzFl_QF&rs=AOn4CLA0SOo9x7g-KzbCyXGAoLLvL6_qhg"
authors: ["PatoJAD"]
---

Ya vimos la {{< textlink text="instalacion" url="/programacion/2020/03/hugo-cms-instalación-y-creación-del-proyecto/" >}} de este CMS y ya podemos tener nuestro proyecto creado. Sin embargo, esto es solo el primer paso; a partir de ahora debemos iniciar a modelar nuestro proyecto y para tal vamos a empezar a conocer un poco su estructura.

## Partials y BaseOf

{{< youtube code="mdjb-e6u8pk" >}}

En este video podemos ver un poco el funcionamiento de partials y una explicacion de como se crean. Para poder optimizar el tiempo voy a dejar aqui una breve explicacion con codigo de como se llama a un partial.

Los partials a diferencia de algo estatico puede ser dinamico, puede recibir parametros y demas.. Y esto es algo util para el dinamismo que necesita el sitio.

### Donde se crean los Partials

La creacion de un partial no es mas que la creacion de un fragmento html en la carpeta /themes/NuestroTheme/layouts/partials y el mismo puede estar dentro de otra carpeta (por ejemplo si queremos organizarlos en subcarpetas) o sueltos en partials. Lo importante es que el archivo sea un HTML.

### Como se hace el llamado de un partial

Lo bueno de estos Partials es que podemos llamarlos desde cualquier lado y la forma de hacerlo es muy simple. Basta con poner:

    {{ partial "miArchivo.html" }}

Si esta suelto en partials, sino basta con poner:

    {{ partial "miCarpeta/miArchivo.html" }}

Suponiendo que el archivo se encuentre en /themes/NuestroTheme/layouts/partials/miCarpeta/miArchivo.html

Cualqueir duda o consulta nos encontramso en Telegram!!!

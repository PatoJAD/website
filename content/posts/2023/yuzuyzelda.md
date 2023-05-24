---
title: 'Instalar The Legend of Zelda en Yuzu'
date: '2023-05-24 10:20:00'
description: 'Veamos la forma correcta de instalar The Legend of Zelda: Tears of the Kingdom en Yuzu'
type: 'post'
tags:
    [
        'windows',
        'linux',
        'macos',
        'yuzu',
        'emulador',
        'nintendo',
        'switch',
        'zelda',
        'tears of the kingdom',
        'instalar',
        'install',
        'juego',
        'game',
        'the legend of zelda',
        'legend of zelda',
        'zelda tears of the kingdom',
        'zelda tears',
        'zelda totk',
        'totk',
    ]
categories: ['Juegos', 'Windows', 'MacOS', 'Linux']
img: 'https://media.vandal.net/i/640x360/5-2023/202351018164127_1.jpg'
authors: ['PatoJAD']
---

Antes que nada quiero aclarar que no podran encontrar los links de descarga en este articulo. Si bien la persona que me facilito la guia, genero un comprimido con todo lo que necesitamos no es parte de este sitio web formentar la pirateria. Por lo que si quieren jugarlo deberan buscarlo por su cuenta.

Ya sabiendo esto lo siguiente es instalar **Yuzu** en nuestro sistema operativo. Para esto bastaria la documentacion de su sitio oficial:

{{< link url="https://yuzu-emu.org/help/quickstart/" text="Instalación de Yuzu" >}}

Sin embargo, en caso de ser necesario armare la guia para instalarlo en Windows, Linux y MacOS. Pero por ahora vamos a suponer que ya lo tenemos instalado.

## Configuracion de **Yuzu**

Una vez descargado el emulador y los datos del juego, lo que debemos hacer es descomprimir el comprimido que nos facilitaron. Abrimos el emulador y vamos a ver un mensaje de error que nos pide que lo activemos. Para esto iremos al menu, en la parte de archivo y seleccionamos la opcion de `Abrir carpeta de instalación de Yuzu`.

{{< img src="https://i.postimg.cc/MT028k2X/image.png" >}}

Dentro de la carpeta que se nos abrio, vamos a buscar la carpeta de `keys` y dentro de esta vamos a pegar los archivos que se encuentra dentro del comprimido que nos facilitaron (las claves).

{{< img src="https://i.postimg.cc/fTqr0WMY/image.png" >}}

Y una vez agregadas las claves, nos toca extraer y copiar la carpeta firmware que esta dentro del comprimido que nos facilitaron. Esta carpeta la vamos a pegar dentro de la carpeta `nand -> system -> Contents -> registered` que se encuentra dentro de la carpeta de instalacion de **Yuzu**.

{{< img src="https://i.postimg.cc/W1wcKFrg/image.png" >}}

## Instalando el juego

Una vez que ya agregamos la clave y la carpeta de firmware, lo que nos queda es instalar el juego. Para esto vamos a abrir el emulador y vamos a añadir nuevo directorio de juegos, navegamos hasta la carpeta donde se encuentra el juego y la seleccionamos.

{{< img src="https://i.postimg.cc/rmRJZpwx/image.png" >}}

Una vez que seleccionamos la carpeta, ya podremos ver el juego en la lista de juegos disponibles. Lo seleccionamos y le damos click derecho para abrir las opciones.

{{< img src="https://i.postimg.cc/R07n6Tjy/image.png" >}}

Dentro de las opciones vamos a seleccionar la opcion de `Abrir ubicacion de los Mods`. Esto nos va a abrir una carpeta donde vamos a pegar los mods que nos provee el comprimido que nos facilitaron.

{{< img src="https://i.postimg.cc/hjxcMSL5/image.png" >}}

{{< warning text="ATENCION: Los mods proporcionados son para la version 1.1.1, por lo cual es necesario realizar la actualiazcion del juego antes de lanzarlo" >}}

No es requerido agregar los mods, pero si es recomendado ya que mejoran la experiencia de juego.

## Actualizando el juego

Dentro del comprimido que nos facilitaron, vamos a encontrar dos archivos de extensión `.nsp`. Estos archivos son los que vamos a utilizar para actualizar el juego. Para esto vamos a abrir el emulador y vamos al menu de `Archivo -> Instalar archivo NAND`. Y vamos a seleccionar las actualizaciones del juego.

{{< img src="https://i.postimg.cc/FHXvsfLC/image.png" >}}

Es **sumamente importante** que las actualizaciones se instalen en orden, es decir, primero la actualizacion 1.1 y luego la 1.1.1. Una vez que se instalaron las actualizaciones, ya podremos lanzar el juego.

{{< img src="https://i.postimg.cc/yNSrJnCF/image.png" >}}

{{< info text="El v131072Update corresponde a la version 1.1, mientras que el [v196608] a la version 1.1.1" >}}

## Lanzando el juego

Ya teniendo el juego instalado, con los mods que deseamos y las actualizaciones aplicadas basta con lanzarlo y disfutarlo haciendole un click a la imagen...

---

Fuente: Borrego Villegas

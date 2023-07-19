---
title: 'Instalacion de Postman en Linux'
date: '2021-08-25 13:17:00'
description: 'Vamos a ver como realizar la instalación de postman indiferentemente de la distribución que tengamos'
type: 'aplicaciones'
tags:
    [
        'postman',
        'arch',
        'debian',
        'ubuntu',
        'fedora',
        'api',
        'test',
        'artix',
        'descargar',
        'download',
        'rest',
        'restful',
    ]
categories: ['Aplicaciones']
img: 'https://i.postimg.cc/L5gh73HD/image.webp'
authors: ['PatoJAD']
---

En este momento vamos a ver como se instala postman en nuestro GNU/Linux, en esta instalación vamos a ver la forma más genérica, si bien para cada distribución existe su propia alternativa, ya usar usando AUR en Arch o SNAP en cualquier distro existe una forma un tanto… más simple que es útil para usos portables de esta herramienta.

![](https://i.postimg.cc/L5gh73HD/image.webp)

## Descarga

Lo primero que debemos hacer es descargar postman, en este caso vamos a descargar la última versión directamente de su sitio web. Pueden buscar cualquier versión, sin embargo recomendamos usar la versión oficial de su web.

{{< link url="https://www.postman.com/downloads/" text="Descargar" >}}

## Instalación

Realmente no es necesario una instalación propiamente dicha, es más bien la extracción de los binarios. Estos los podemos hacer desde la terminal, dirigiéndonos a la carpeta donde lo descargamos por ejemplo “Downloads”

```bash
cd Downloads/
tar -xvzf Postman-linux-x86_64-8.11.1.tar.gz
```

siendo `Postman-linux-x86_64-8.11.1.tar.gz` el nombre del archivo descargado (En caso de tener otra version poner el nombre correspondiente). Esto nos generará una carpeta llamada Postman. Esta misma si queremos podemos ponerla donde nosotros deseemos.

## Uso

Para su uso basta con ejecutar el binario llamado Postman. Si seguimos con el ejemplo anterior, y no movimos la carpeta, bastara con hacer lo siguiente:

```bash
cd Postman
./Postman
```

Y ya iniciara el Postman, en caso de que no inicie podrás ver en la consola el error que retorna. Si no retorna ningún error y abre sin problemas, podemos ejecutarlo desde el binario con doble click de ahora en adelante.

---
title: 'Como instalar MongoDB en Windows'
date: '2023-06-05 10:45:00.00'
description: 'Vamos a ver como instalar mongo (o MongoDB) en Windows.'
type: 'video'
videoId: 'jRX23FDGCW4'
tags:
    [
        'mongo',
        'mongodb',
        'db',
        'windows',
        'windows 10',
        'windows 11',
        'winget',
        'paquetes',
    ]
categories: ['Windows', 'Programacion', 'Aplicaciones']
img: 'https://i.postimg.cc/R0fV00fV/win.png'
authors: ['PatoJAD']
---

Vamos a ver como realizar la instalacion de **MongoDB** en Windows (ya sea 10 o 11) con winget desde nuestra terminal.

## Comandos Utilizados

Este es el comendo que utilizamos para realizar la instalacion de MongoDB en Windows 10 o 11 utilizando winget:

```bash
winget install -e --id MongoDB.Server
```

## Ejecute MongoDB Community Edition desde la terminal

Para ejecutar MongoDB (o mongo) desde la terminal de Windows, debemos ejecutar el siguiente comando para crear la carpeta donde se guardaran los datos de la base de datos:

```bash
cd C:\
md "\data\db"
```

Luego ejecutamos el siguiente comando para ejecutar mongo:

```bash
"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --dbpath="c:\data\db"
```

{{< info  text="En este caso usamos c:\data\db pero pueden elegir el directorio que quieran" >}}

## Agregar binarios de MongoDB a la PATH del sistema

Si agrega `C:\Archivos de programa\MongoDB\Server\6.0\bin` a su PATH del sistema, puede omitir la ruta completa a los archivos binarios del servidor MongoDB. También debe agregar la ruta a `mongosh` si aún no lo ha hecho.

---

Fuente: [https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

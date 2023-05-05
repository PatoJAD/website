---
title: 'Como instalar MongoDB en MacOS'
date: '2023-05-05 13:45:00.00'
description: 'Vamos a ver como instalar mongo (o MongoDB) en MacOS. Para poder realizar nuestras pruebas locales.'
type: 'post'
tags:
    [
        'mongo',
        'mongodb',
        'db',
        'apple',
        'macos',
        'mac',
        'osx',
        'instalar',
        'instalacion',
        'base de datos',
        'base',
        'datos',
        'brew',
        'homebrew',
        'brew install',
        'brew install mongodb',
    ]
categories: ['MacOS', 'Programacion', 'Aplicaciones']
img: 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png'
authors: ['PatoJAD']
---

Vamos a ver como realizar la instalacion de **MongoDB** en MacOS. Recuerda que para esto debes tener instalado primero [Homebrew](/post/2023/02/como-instalar-brew-en-macos/).

## Video

En el video sigo los pasos para la instalación de MongoDB en MacOS utilizando Homebrew. Sin embargo abajo te dejo los pasos a seguir para que puedas copiar y pegar en tu terminal.

{{< youtube id="wa6I0jlqrQM" >}}

## Comandos

Los siguientes comandos podes usarlos en tu terminal (Recorda tener instalado [Homebrew](/post/2023/02/como-instalar-brew-en-macos/)):

```zsh
brew tap mongodb/brew
```

Una ves agregado el TAP de MongoDB podemos instalarlo de manera oficial, pero antes debemos actualizar:

```zsh
brew update
```

Luego si, ya podemos proceder a realizar la instalación de la siguiente manera:

```zsh
brew install mongodb-community
```

## Instalado

Una ves instalado tendremos acceso a los siguientes binarios:

-   El servidor `mongod`
-   Enrutador de consultas `mongos`
-   El cliente de MongoDB para Shell `mongosh`

---

Fuente: [https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

---
title: 'Hugo CMS - Instalación y Creación del Proyecto'
date: '2020-03-30 13:04:00'
description: 'Hugo es un CMS estatico muy practico y poderoso. Si bien cuenta con alguna limitacion es altametne recomendable'
type: 'programacion'
tags: ['hugo', 'cms', 'instlacion', 'pryecto']
category: ['Programacion']
img: 'https://university.tenten.co/uploads/default/original/1X/9522addc8fc8819adee955f85d0dbf9f83d66443.png'
authors: ['PatoJAD']
---

Hugo es un generador de sitios web estáticos escrito en Go, y es software libre. Los generadores de sitios web estáticos, aunque tienen limitaciones, son muy interesantes por generar sitios muy rápidos y seguros.

## Instalacion

{{< youtube id="ezeWY2RLUXY" >}}

Como se explica en el video es posible utilizar la verion de hugo que se encuentra en los repositorios de la distribucion que tenemos instalada. Sin embargo, no suele estar la version mas actual en el repositorio, y esto puede darnos problemas a la hora de pronerlo en produccion. Asi que tambien podemos instalarlo con Brew.

Lo primero es instalar todas las dependencias necesarias

```shell
    sudo apt-get install build-essential curl file git
```

Despues simplemente basta con ejecutar estas lineas de codigos. Las cuales descargan la version mas actual y la instalan.

```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
    test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
    test -r ~/.bash_profile && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile
    echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile
```

Despues de tener Brew instalado basta con ejecutar el siguiente comando para instalar Hugo en nuestra maquina.

```shell
    brew install hugo
```

## Crear Proyecto

Como vemos en el video, crear un proyecto es simple y rapido. Basta con ejecutar el siguiente comando.

```shell
    hugo new site MiSitio
```

Esto va crear toda la estructura del sitio en una carpeta llamada MiSitio sobre la cual trabajaremos.

## Agregar Tema

En este caso vamos a mostrar como se instala un theme, en el video vamos a crear un theme nosotros mismos. Si queres instalar themes podes buscar mas en https://themes.gohugo.io/

Nosotros en esta demostracion vamos a usar el theme Anake

```bash
    cd MiSitio
    git init
    git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke
```

Y lo agregamos a nuestra configuracion

```bash
    echo 'theme = "ananke"' >> config.toml
```

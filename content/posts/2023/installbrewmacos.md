---
title: 'Como instalar brew en MacOS'
date: '2023-02-13 14:04:00.00'
description: 'Vamos a ver como instalar brew (o homebrew) el gestor de paquetes para devs en MacOS.'
type: 'video'
videoId: '5lMSYgKbZUc'
tags:
    [
        'brew',
        'brewhome',
        'homebrew',
        'gestor',
        'paquetes',
        'install',
        'macos',
        'mac',
        'apple',
        'package',
        'manager',
        'universal',
    ]
categories: ['MacOS', 'Aplicaciones', 'Programacion']
img: 'https://cdn.osxdaily.com/wp-content/uploads/2022/12/homebrew-ventura-macos.jpg'
authors: ['PatoJAD']
---

**Homebrew** instala todo aquello que necesitas que Apple no instala de serie. **Homebrew** instala cada paquete en su propio directorio, creando enlaces simbólicos a tus archivos dentro de `/usr/local`. **Homebrew** nunca instala archivos fuera de su prefijo, y puedes colocar la instalación de **Homebrew** donde quieras.

**Homebrew** está basado únicamente en Git y Ruby: ya puedes desarrollar tranquilo, con la seguridad de que podrás deshacer tus cambios e integrar actualizaciones con total facilidad.

## Comandos

Puede que previamente tengas que instalar las Tools de xcode (`git`, `gcc`, `clang`, etc...) lo podemos hacer desde nuestra terminal de la siguiente manera:

```zsh
xcode-select --install
```

El comando utilizado en el video es el siguiente

```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

[Documentacion](https://docs.brew.sh/)


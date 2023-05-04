---
title: 'Linux Browser OBS'
date: '2021-05-26 14:44:00'
description: 'Vamos a ver como podemos instalar linuxbrowser en OBS'
type: 'aplicaciones'
tags:
    [
        'obs',
        'arch',
        'debian',
        'ubuntu',
        'stream',
        'browser',
        'twitch',
        'youtube',
        'linuxbrowser',
        'linux',
    ]
categories: ['Aplicaciones']
img: 'https://github.com/bazukas/obs-linuxbrowser/raw/master/img/obs-linuxbrowser.png'
authors: ['PatoJAD']
---

Lo primero obviamente es descargar la última versión disponible el cual lo podemos hacer desde el siguiente link

{{< link url="https://github.com/bazukas/obs-linuxbrowser/releases" text="Descargar linuxbrowser" >}}

Luego nos tenemos que asegurar de crear la carpeta de plugins de OBS para dejar el plugin ahí lo cual podemos hacerlo con el siguiente comando:

```bash
mkdir -p $HOME/.config/obs-studio/plugins
```

Después de tener la carpeta creada, procedemos a descomprimir ahi dentro lo que descargamos recientemente, podes hacerlo a manopla y si vos queres amigarte con la terminal te dejo aca el comando que tenes que usar

```bash
tar -zxvf linuxbrowser0.6.1-obs23.0.2-64bit.tgz -C $HOME/.config/obs-studio/plugins/
```

{{< img src="https://github.com/bazukas/obs-linuxbrowser/raw/master/img/obs-linuxbrowser.png" >}}

Este comando está asumiendo que vos estás en la carpeta donde lo descargaste. Por ultimo tenes que asegurarte de tener estas dependencias instaladas:

-   OBS-Studio (Mas que obvio)
-   libgconf

Y ya podes abrir el OBS estudio y cuando agregues una nueva Fuente va a figurar Linux Browser donde podemos agregar sitios webs.

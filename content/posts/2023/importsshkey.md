---
title: 'Cómo Importar tus Claves SSH: Una Guía para DevOps'
date: '2023-10-25 12:11:00'
description: 'Aprende cómo importar y respaldar tus claves SSH de manera segura y eficiente. Evita la creación manual y altas repetitivas en esta guía para desarrolladores y DevOps.'
type: 'post'
tags:
    [
        'ssh',
        'clave ssh',
        'secure shell',
        'auth',
        'autenticacion',
        'autenticacion ssh',
        'auth ssh',
        'cifrado de datos',
        'datos',
        'cifrado',
        'seguridad en linea',
        'seguridad',
        'online',
        'conexion',
        'conexion remota',
        'conexiones remotas',
        'guia',
        'importar',
        'importar clave ssh',
        'importar claves ssh',
        'importar clave',
        'importar claves',
        'devops',
        'importar ssh',
    ]
categories: ["Seguridad", "Redes"]
img: 'https://i.postimg.cc/FKZW704j/importssh.webp'
authors: ['PatoJAD']
---

Es común que los desarrolladores y DevOps tengan múltiples aspectos vinculados a sus claves [SSH](/post/2023/10/claves-ssh-una-guía-completa-para-la-seguridad-en-conexiones-remotas/), desde el acceso a servidores hasta repositorios. Por lo tanto, es de vital importancia tener una copia de seguridad de tus claves [SSH](/post/2023/10/claves-ssh-una-guía-completa-para-la-seguridad-en-conexiones-remotas/). En este artículo, te mostraré cómo importar tu copia de seguridad, evitando la tediosa tarea de crear una nueva clave y darla de alta en todos tus sistemas y servidores.

## ¿Dónde se Almacenan las Claves SSH?

El lugar donde se almacenan las claves [SSH](/post/2023/10/claves-ssh-una-guía-completa-para-la-seguridad-en-conexiones-remotas/) varía según el sistema operativo que utilices. En mi caso, uso Linux, y las claves se guardan en la carpeta `~/.ssh/`. Esta carpeta contiene tanto las claves públicas como las privadas, así como archivos de configuración para [SSH](/post/2023/10/claves-ssh-una-guía-completa-para-la-seguridad-en-conexiones-remotas/). Si estás en Windows, las claves se guardan en `C:\Users\USERNAME\.ssh\`. En el caso de macOS, las claves se encuentran en la carpeta `~/.ssh/`, similar a Linux.

## ¿Cómo Importar una Clave SSH?

{{< youtube id="l0XM6FHrrKk" >}}

Para importar una clave [SSH](/post/2023/10/claves-ssh-una-guía-completa-para-la-seguridad-en-conexiones-remotas/), el primer paso es copiar tanto la clave pública como la privada a la carpeta correspondiente en tu sistema operativo: `~/.ssh/` para Linux y `C:\Users\USERNAME\.ssh\` para Windows. Una vez que las claves estén en la carpeta, debes otorgar los permisos adecuados a la clave privada. Esto se logra ejecutando el siguiente comando:

```zsh
chmod 700 ~/.ssh/
chmod 600 ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa.pub
```

Con los permisos establecidos, el siguiente paso es agregar la clave al agente SSH. Esto se logra ejecutando el siguiente comando:

```zsh
ssh-add ~/.ssh/id_rsa
```

{{< warning text="En el video, el Agente SSH se actualiza automáticamente, por lo que este paso se omite en la guía." >}}

Siguiendo estos pasos, habrás importado tu clave SSH de manera segura y eficiente, evitando la creación y alta manual en cada servidor y sistema al que necesitas acceder.

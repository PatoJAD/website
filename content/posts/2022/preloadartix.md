---
title: 'Instalar Preload en Arch'
date: '2022-02-03 09:22:00'
description: 'Preload es una aplicación que nos permite precargar aplicaciones en la memoria RAM para aumentar la fluidez del sistema operativo aumentando a su vez el consumo de RAM durante el inicio.'
type: 'aplicaciones'
tags:
    [
        'pacman',
        'yay',
        'aur',
        'manjaro',
        'artix',
        'arch',
        'preload',
        'endeavour',
        'systemd',
        'openrc',
    ]
categories: ['Aplicaciones', 'Linux']
img: 'https://i.postimg.cc/ZK9QxCk7/preload.png'
authors: ['PatoJAD']
---

Preload es una aplicación que toma estadísticas de nuestro uso de aplicaciones y precarga en memoria todas aquellas que más usamos al prender el equipo. Gracias a esto podemos ver una fluidez más amplia al abrir estas aplicaciones. Y a costa de esta fluidez nuestro sistema inicia con más memoria RAM ocupada. Muchos se debaten si esta técnica es útil o no y por eso te dejo primero un video con mi postura sobre esto.

{{< youtube id="HVCqSfdTdUs" >}}

Dejando aclarada mi postura de más está decir que cualquier postura con fundamentos es válida y si preferís no ocupar RAM te recomiendo que no instales **Preload** aunque vas a perderte la fluidez adicional que esto nos da.

## Video

En el siguiente video vemos como se realiza la instalación de preload (con yay en mi caso pero podes usar tu gestor favorito) y cómo habilitarlo en cualquier base **Arch** con **SystemD** y también en **Artix** con **OpenRC** (En esta oportunidad no use **Runit** pero con una búsqueda simple podes adaptarlo)

{{< youtube id="6NoYA9Rtp2s" >}}

## Código

A continuación dejo los comandos utilizados para que sea más simple copiar y pegar…

```bash
yay -S preload
```

### SystemD

En el caso de usar distros con SystemD se habilita de la siguiente manera. Recuerda que esto nos pedirá la contraseña

```bash
systemctl enable preload
```

### OpenRC

En el caso de estar en **Artix** (con **OpenRC**) debemos crear el archivo del demonio de la siguiente manera:

```bash
sudo nano /etc/init.d/preload
```

Y dentro del archivo debemos poner lo siguiente:

```cfg
#!/sbin/openrc-run

command="/usr/bin/preload"
command_args="$PRELOAD_OPTS"
command_args_foreground="--foreground"
```

Esto lo guardamos y a continuación le damos permisos al archivo para poder iniciar el proceso.

```bash
sudo chmod 777 /etc/init.d/preload
```

{{< warning text="OJO no es recomendable usar 777 para los permisos de este archivo, es una mala practica que hago personalmente para hacer pruebas, lo ideal es ponerle el mismo permiso que tienen el resto de los archivos en el folder /etc/init.d" >}}

Y por último podemos inicializar el proceso de la siguiente manera:

```bash
sudo rc-service preload start
```

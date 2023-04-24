---
title: 'Subproceso dpkg devolvió el código de salida de error'
date: '2020-04-30 09:26:00'
description: 'Solucion para el subproceso dpkg-deb --control devolvió el código de salida de error, y otros errores comunes'
type: 'linux'
tags: ['error', 'subproceso', 'error', 'codigo', 'dpkg', 'deb', 'control']
category: ['Linux']
img: 'https://imgur.com/Qwlf1.png'
authors: ['PatoJAD']
---

Es comun que durante las actualizaciones de version a version, o la instalacion de un paquete que no este en nuestros repositorios tengamos algun error en dpkg. Vamos a estar viendo una serie de soluciones a los errores mas comunes...

## Error 1

Los paquetes tienen archivos que se **sobrescriben**. Los paquetes tienen **dependencias sin resolver**. Hay conflictos entre los paquetes. Un paquete no puede ser eliminado o modificado por dpkg. Solucion:

    sudo echo "force-all" >/etc/dpkg/dpkg.cfg
    sudo apt-get -f install

## Error 2

Instalación de un **paquete dañado**, vuelvo a intentar instalar y aptitude dice que **ya está instalado**! Solución:

    sudo apt-get remove paquete_dañado
    sudo apt-get update
    sudo apt-get clean
    sudo apt-get --reinstall install paquete

## Error 3

Error de verificación de las **llaves públicas GPG**(NO_PUBKEY)… Error muy comun de firmas de paquetes o repositorios. Solución:

    sudo apt-get update

Buscamos y copiamos el número de error que aparece en negrita.

    The following signatures couldn't be verified because the public key is not available: NO_PUBKEY **010908312D230C5F**
    There is no public key available for the following key IDs:**010908312D230C5F**

Y luego ejecutamos el siguiente comando remplazando el id por el respectivo al de su errores

    gpg --keyserver keyserver.ubuntu.com --recv **010908312D230C5F**
    gpg --export --armor **010908312D230C5F** | sudo apt-key add -
    sudo apt-get update

Puede que el _keyserver no tengla la clave_, hay que buscar el respectivo a su distro de ser asi...

## Error 4

El **subproceso post-installation script devolvió el código de salida de error** (cualquier error). Se encontraron errores al procesar: (nombre_paquete). Solución:

Determinamos el nombre del paquete que causó el error, por ejemplo, en el registro de a continuación, se muestra en negrita el nombre del paquete que causó el problema (xosview)

    newaliases: warning: valid_hostname: numeric hostname: 69522
    newaliases: fatal: bad parameter value: 69522
    dpkg: error processing xosview (–configure):
    subprocess post-installation script returned error exit status 75
    Errors were encountered while processing: **xosview**

Después de haber determinado el nombre del paquete, ejecutamos los siguientes comandos cambiando la palabra **xosview** por el nombre del paquete que causó el problema en nuestro caso:

    sudo rm -f /var/lib/dpkg/info/xosview.post*
    sudo rm -f /var/lib/dpkg/info/xosview.pre*
    sudo apt-get -f install

## Error 5

Error mientras se **elimina un paquete**. Solución:

    sudo rm -f /var/lib/dpkg/info/paquete_defectuoso.post*
    sudo rm -f /var/lib/dpkg/info/paquete_defectuoso.pre*
    sudo apt-get remove paquete_defectuoso

## Error 6

Error en **/var/lib/dpkg/status**. Solución:

Normalmente se soluciona así:

    sudo cp /var/lib/dpkg/status-old /var/lib/dpkg/status

Si esto no soluciona el problema, ver **Error 7**.

## Error 7

Persiste el problema anterior o problema con apt-get que contiene muchos repositorios o **Error out of room**. Solución:

El problema puede parecerse a esto:

    E: Dynamic MMap ran out of room

Editamos el archivo apt.conf (recuerden cambiar gedit por el editor que tengan ustedes)

    sudo gedit /etc/apt/apt.conf

Modificamos el **tamaño de la caché**.

    Apt::Cache-Limit “8388604″;

## Error 8

Durante la descarga algunos archivos **no se encuentran disponibles**. Solución:

    sudo apt-get update

Si el problema persiste después de volver a intentar instalar los paquetes, revisa el archivo /etc/apt/sources.list.

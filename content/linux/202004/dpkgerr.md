---
title: "Subproceso dpkg devolvió el código de salida de error"
date: "2020-04-30 09:26:00"
description: "Solucion para el subproceso dpkg-deb --control devolvió el código de salida de error, y otros errores comunes"
type: "linux"
tags: ["error","subproceso","error","codigo","dpkg","deb","control"]
category: ["Linux"]
img: "https://imgur.com/Qwlf1.png"
authors: ["PatoJAD"]
---

Es comun que durante las actualizaciones de version a version, o la instalacion de un paquete que no este en nuestros repositorios tengamos algun error en dpkg. Hoy vamos a estar viendo una serie de soluciones a los errores mas comunes...

{{< br >}}
{{< br >}}

## Error 1

{{< br >}}

 Los paquetes tienen archivos que se **sobrescriben**. Los paquetes tienen **dependencias sin resolver**. Hay conflictos entre los paquetes. Un paquete no puede ser eliminado o modificado por dpkg. Solucion:

{{< br >}}

    sudo echo "force-all" >/etc/dpkg/dpkg.cfg
    sudo apt-get -f install

{{< br >}}
{{< br >}}

## Error 2

{{< br >}}

Instalación de un **paquete dañado**, vuelvo a intentar instalar y aptitude dice que **ya está instalado**! Solución:

{{< br >}}

    sudo apt-get remove paquete_dañado
    sudo apt-get update
    sudo apt-get clean
    sudo apt-get --reinstall install paquete

{{< br >}}
{{< br >}}

## Error 3

{{< br >}}

Error de verificación de las **llaves públicas GPG**(NO_PUBKEY)… Error muy comun de firmas de paquetes o repositorios. Solución:

{{< br >}}

    sudo apt-get update

{{< br >}}

Buscamos y copiamos el número de error que aparece en negrita.

{{< br >}}

    The following signatures couldn't be verified because the public key is not available: NO_PUBKEY **010908312D230C5F**
    There is no public key available for the following key IDs:**010908312D230C5F**

{{< br >}}

Y luego ejecutamos el siguiente comando remplazando el id por el respectivo al de su errores

{{< br >}}

    gpg --keyserver keyserver.ubuntu.com --recv **010908312D230C5F**
    gpg --export --armor **010908312D230C5F** | sudo apt-key add -
    sudo apt-get update

{{< br >}}

Puede que el *keyserver no tengla la clave*, hay que buscar el respectivo a su distro de ser asi...

{{< br >}}
{{< br >}}

## Error 4

{{< br >}}

El **subproceso post-installation script devolvió el código de salida de error** (cualquier error). Se encontraron errores al procesar: (nombre_paquete). Solución:

Determinamos el nombre del paquete que causó el error, por ejemplo, en el registro de a continuación, se muestra en negrita el nombre del paquete que causó el problema (xosview)

{{< br >}}

    newaliases: warning: valid_hostname: numeric hostname: 69522
    newaliases: fatal: bad parameter value: 69522
    dpkg: error processing xosview (–configure):
    subprocess post-installation script returned error exit status 75
    Errors were encountered while processing: **xosview**

{{< br >}}

Después de haber determinado el nombre del paquete, ejecutamos los siguientes comandos cambiando la palabra **xosview** por el nombre del paquete que causó el problema en nuestro caso:

{{< br >}}

    sudo rm -f /var/lib/dpkg/info/xosview.post*
    sudo rm -f /var/lib/dpkg/info/xosview.pre*
    sudo apt-get -f install

{{< br >}}
{{< br >}}

## Error 5

{{< br >}}

Error mientras se **elimina un paquete**. Solución:

{{< br >}}

    sudo rm -f /var/lib/dpkg/info/paquete_defectuoso.post*
    sudo rm -f /var/lib/dpkg/info/paquete_defectuoso.pre*
    sudo apt-get remove paquete_defectuoso

{{< br >}}
{{< br >}}

## Error 6

{{< br >}}

Error en **/var/lib/dpkg/status**. Solución:

Normalmente se soluciona así:

{{< br >}}

    sudo cp /var/lib/dpkg/status-old /var/lib/dpkg/status

{{< br >}}

Si esto no soluciona el problema, ver **Error 7**.

{{< br >}}
{{< br >}}

## Error 7

{{< br >}}

Persiste el problema anterior o problema con apt-get que contiene muchos repositorios o **Error out of room**. Solución:

El problema puede parecerse a esto:

{{< br >}}

    E: Dynamic MMap ran out of room

{{< br >}}

Editamos el archivo apt.conf (recuerden cambiar gedit por el editor que tengan ustedes)

{{< br >}}

    sudo gedit /etc/apt/apt.conf

{{< br >}}

Modificamos el **tamaño de la caché**.

{{< br >}}

    Apt::Cache-Limit “8388604″;

{{< br >}}
{{< br >}}

## Error 8

{{< br >}}

Durante la descarga algunos archivos **no se encuentran disponibles**. Solución:

{{< br >}}

    sudo apt-get update

{{< br >}}

Si el problema persiste después de volver a intentar instalar los paquetes, revisa el archivo /etc/apt/sources.list.

---
title: "Agregar Cache a GIT para evitar loguear constantemente"
date: "2019-04-26"
description: "Es común que durante la programación requerimos usar GIT varias veces... Para eso vamos a ver como dejar en cache nuestro usuario por un tiempo"
type: "programacion"
tags: ["GIT", "Login", "Cache", "Desarrollo"]
category: ["Programacion"]
img: "https://vabadus.es/images/cache/imagen_nodo/images/articulos/5c9deecdad597506371704.png"
authors: ["PatoJAD"]
---

Un repositorio git puede ser accedido utilizando distintos protocolos, de entre los cuales los más comunes son SSH y HTTPS.

{{< img src="https://i.stack.imgur.com/5OBMZ.png" >}}

HTTPS tiene algunas ventajas sobre SSH: Es más fácil de utilizar, porque no necesita la generación de un par de claves pública/privada, y normalmente no tiene problemas en atravesar firewalls y proxies. El inconveniente es que es necesario introducir el usuario y contraseña cada vez que se accede al repositorio remoto con una operación pull o push.

Pero también es posible configurar git para que almacene estas credenciales y las utilice cuando sea necesario, sin solicitarlas cada vez.

En este artículo se explica cómo realizar esta configuración en un sistema GNU/linux.

La manera más sencilla de evitar que git solicite usuario y contraseña cada vez, es establecer un asistente de credenciales en la configuración de git (Algunos usuarios prefieren que se guarde por siempre pero no es muy seguro):

    git config --global credential.helper store

Con esto, en el siguiente acceso que se realice al repositorio remoto, el usuario y contraseña introducidos quedan almacenados en un fichero ~/.git-credentials.

{{< img src="http://noticias.universia.es/net/images/ciencia-tecnologia/-/-a/-ap/-aplicaciones-gratuitas-gestionar-contrasenas.jpg" >}}

Si nos preocupa que la contraseña quede guardada en el disco duro, podemos utilizar un asistente de credenciales “cache”. En este caso, la contraseña queda guardada en memoria, durante un tiempo limitado que se puede configurar (por defecto, 15 minutos). Por ejemplo, para utilizar este asistente, con una duración de una hora:

    git config --global credential.helper 'cache --timeout=3600'

Una vez transcurrida una hora(en este caso con los 3600s), el siguiente acceso que se realice al repositorio volverá a solicitar usuario y contraseña. Recuerda que puedes cambialo por la cantidad de tiempo (en segundos) que desees que permanezca

Fuente: OpenAlfa

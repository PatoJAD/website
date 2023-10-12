---
title: 'Como instalar NO-IP en Linux'
date: '2020-04-24 09:48:00'
description: 'Michas veces nos interesa tener una IP fija pero no es posible, ya sea porque no nos la proveen o porque no podemos costearla'
type: 'post'
tags: ['ip', 'dns', 'ddns', 'no-ip']
categories: ['Redes', 'Linux']
img: 'https://www.redeszone.net/app/uploads/2018/10/Logo-No-IP.jpg'
authors: ['PatoJAD']
---

No-IP ofrece servicios de DNS, correo electrónico, monitoreo de red y certificados SSL. El producto principal de No-IP son los **servicios dinámicos de DNS** ("DDNS"). Los servicios DNS dinámicos básicos que usan un dominio propiedad de No-IP son de uso **gratuito siempre que la cuenta permanezca activa**.

Las direcciones **[IP](/post/2020/01/direcciones-ips-nuestra-huella-en-la-red/) dinámicas** son comunes en las cuentas de banda ancha de **cable residencial** o DSL. El servicio gratuito permite a los usuarios configurar entre **uno y tres nombres de host** en un nombre de dominio proporcionado por No-IP. El nombre del host se resolverá en la dirección IP actual de la computadora de ese usuario.

## API DNS dinámica

Un nombre de host **DNS dinámico** está vinculado a la dirección [IP dinámica](/post/2020/02/qué-hay-detrás-de-una-ip/) del usuario. Cada vez que **cambie la IP**, un cliente DNS dinámico enviará una actualización a No-IP con la dirección IP actual y luego No-IP propagará el cambio de DNS a Internet en cuestión de segundos.

Para facilitar las actualizaciones de direcciones IP, No-IP tiene un protocolo abierto que permite a los desarrolladores de software y fabricantes de hardware comunicarse a través de HTTP para notificarles sobre un cambio de dirección IP.

Muchos fabricantes de enrutadores brindan soporte integrado para el protocolo DNS dinámico de No-IP, por ejemplo, Asus, D-Link, Dovado, Edimax, SonicWall, SMC, y TP-Link .

## Como instalarlo

Una vez que haya abierto la ventana de su Terminal, inicie sesión como usuario "root". Es necesario para poder realizar la Instalacion

    sudo -s

antes de instalarlo debemos asegurarnos de instalar algunas **dependecias** (la instalacion se realiza mediante make install de un precompilado) por lo cual de momento no puedo generar el deb.

    sudo apt install gcc make

Luego podemos realizar la descarga e instalacion correspondiente de la siguiente forma

    cd /usr/local/src/
    wget http://www.noip.com/client/post/noip-duc-linux.tar.gz
    tar xf noip-duc-linux.tar.gz
    cd noip-2.1.9-1/
    make install

Ahora iniciara la instalacion para lo cual nos pedirá que inicie sesión con su nombre de usuario y contraseña de cuenta No-IP.

## Configurar el cliente

Como root nuevamente (o con sudo) emita el siguiente comando:

    /usr/local/bin/noip2 -C

(guión C mayúscula, esto creará el archivo de configuración predeterminado)

Luego nos va a pedir nuestro nombre de usuario y contraseña NO-IP, así como los nombres de host que deseamos actualizar. Hay que tener cuidado, una de las preguntas es "¿Desea actualizar TODOS los hosts". Si respondemos incorrectamente, esto podría afectar a los nombres de host en nuestra cuenta que apuntan a otras ubicaciones.

Ahora que el cliente está instalado y configurado, solo necesitamos iniciarlo. Simplemente con este comando final para iniciar el cliente en segundo plano:

    /usr/local/bin/noip2

Ya con esto tenemos nuestro cliente de NO-IP actualizando la IP constantemente. Sin embargo, si tenes algun problema te esperamos en nuestro grupo para debatir.

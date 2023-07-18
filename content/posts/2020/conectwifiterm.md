---
title: 'Conectarse al WiFi desde la Terminal'
date: '2020-07-13 09:41:00'
description: 'Vamos a estar viendo un poco como conectarse al Wi-Fi desde la Terminal de nuestro Linux'
type: 'post'
tags:
    [
        'iwconfig',
        'ifconfig',
        'iwlist',
        'nmcli',
        'wifi',
        'terminal',
        'linux',
        'conectar',
    ]
categories: ['Linux']
img: 'https://www.profesionalreview.com/wp-content/uploads/2017/08/C%C3%B3mo-conectarte-a-una-red-Wifi-usando-la-terminal.jpg'
authors: ['PatoJAD']
---

Seguimos trabajando para que no le tengas miedo a la hermosa terminal que tenemos, por eso en esta oportunidad vamos a ver como se puede conectar al wifi utilizando la terminal. Esto es importante porque muchas veces queremos instalar una distro core o net y no tenemos un cable de red a mano, ahora no va a ser problema, porque la terminal nos va a permitir conectarnos al wifi sin más…

El procedimiento para conectarte a una red Wifi usando la terminal, que vamos a ver a continuación, puede ser aplicado tanto para redes con seguridad **WEP** como **WPA**, es independiente de la distro en la que estemos en ese momento y funciona con cualquier tarjeta de red (siempre y cuando el sistema la reconozca, es decir que si es privativa debemos instalar los drivers).

## Breve presentación.

Es importante destacar que las herramientas para este procedimiento se encuentran instaladas por defecto en la mayoría de las distros actuales (pero nunca está de mas chequear que se encuentren correctamente instaladas), y suelen utilizarse de la siguiente manera:

-   **iwconfig**: Nos permite ver y configurar los parámetros de una interfaz de red inalámbrica.
-   **ifconfig**: Nos permite encender el dispositivo inalámbrico.
-   **iwlist**: Se obtiene información detallada de las redes inalámbricas disponibles.
-   **nmcli**: Nos permite controlar NetworkManager y reportar el estado de la red, brindándonos la posibilidad de crear, mostrar, editar, eliminar, activar y desactivar las conexiones de red.

Para conocer a detalle la sintaxis y el uso de cada uno de estos comandos podemos ejecutar el comando acompañado del argumento de ayuda, o bien [utilizar man como ya vimos antes en el blog](/post/2019/01/man-tu-manual-para-linux/).

## Conectandonos

Lo primero que debemos hacer para conectarnos a cualquier red Wifi usando el terminal es identificar el nombre de la tarjeta de red de nuestro equipo, el cual seguramente no conozcamos, con el siguiente comando:

```zsh
iwconfig
```

Una vez tengamos el nombre de la tarjeta de red, debemos proceder a encenderla (puede que ya se encuentre encendida pero nunca esta de mas asegurarse) para ellos ejecutemos el siguiente comando:

```zsh
ifconfig <InterfazWifi> up
```

Seguidamente debemos analizar las redes inalámbricas disponible y conocer el SSID de la misma, lo que se puede hacer de manera sencilla con iwlist para ello debemos ejecutar:

```zsh
sudo iwlist <InterfazWifi> scanning
```

Teniendo los datos de la tarjeta y de la red inalámbrica a la que deseamos conectarnos, simplemente debemos ejecutar a nmcli con los parámetros correspondientes (que obtuvimos anteriormente):

```zsh
nmcli d wifi connect <WifiSSID> password <ContraseñaWifi> iface <InterfazWifi>
```

Con esto pasos ya nos hemos conectado a una red wifi utilizando la terminal, debemos tener en cuenta que en los comandos anteriormente mencionados debemos cambiar los siguientes datos por los que correspondan:

_InterfazWifi_: El nombre de la tarjeta de red

_WifiSSID_: El SSID de la red inalámbrica a la que deseamos conectarnos

_ContraseñaWifi_: La contraseña de acceso a la red inalámbrica en cuestión.

En caso de que nos deseemos conectar a una red wifi que ya se encuentra en nuestro historial basta con que ejecutemos desde la terminal el siguiente comando:

```zsh
nmcli c up <NombreDadaALaRedAlmacenada>
```

Realizado todos los pasos anteriores deberíamos poder acceder de manera adecuada a la red inalámbrica que hayamos elegido.

_Fuente: profesionalreview_

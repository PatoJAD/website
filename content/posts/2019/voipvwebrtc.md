---
title: 'VOIP vs WebRTC'
date: '2019-11-14'
description: 'Un pequeño resumen de estos protocolos que nos permitira tomar una decicion'
type: 'post'
tags:
    [
        'voip',
        'webrtc',
        'chat',
        'salas',
        'video',
        'audio',
        'llamadas',
        'llamadas voip',
    ]
categories: ['Programacion', 'Redes']
img: 'https://www.fonvirtual.com/blog/wp-content/uploads/2018.07.23_FON_EN_fonvirtual_WebRTC-vs-SIP-what-is-the-difference1_KS.jpg'
authors: ['PatoJAD']
---

## WebRTC

WebRTC es un proyecto de código abierto que reúne a muchos grandes de la web como por ejemplo Google y Mozzila. Esta tecnología permite comunicaciones de Audio/Video en un navegador sin necesidad de descargar nada al equipo. Esto se utiliza para ofrecer servicios como llamada, videollamada, chat, e incluso envío de archivos. Si bien parece tener un futuro prometedor debido a su gran potencial y bajo consumo de recursos, todavía no es lo suficientemente estable (o eso se comenta) Dado que su desarrollo sigue a pasos agigantados. Sin embargos las nuevas versiones no implican grandes cambios a nivel desarrollo, más bien la implementación de novedades o simplemente la actualización de los paquetes para los desarrolladores. La comunicacion WebRTC permite ser P2P lo cual mejora la performance y desliga al servidor.

## VOIP

Por su parte lo que llamamos VOIP no es más que la implementación del protocolo SIP utilizado con anterioridad en las llamadas telefónicas. SIP es un protocolo de señalización que básicamente se utiliza para comunicar el usuario con el servidor (al igual que WebRTC) pero con la particularidad de que requiere que usuario utilice si o si un cliente SIP. Sin embargo cabe resaltar que SIP se encuentra altamente testeado y en la actualidad se entiende que SIP acepta interacciones, no necesariamente una llamada o un mensaje, lo cual lo vuelve potencialmente expansible. También se considera uno de los más estables por su amplia trayectoria

## VOIP y WebRTC Juntos

![](https://bloggeek.me/wp-content/uploads/2017/09/201709-web-voip-webrtc.jpg)

Si bien nativamente no es posible juntarlos muchas librerías nos permiten utilizarlos juntos con el fin de formar un servicio más óptimo. Esto nos permite, por ejemplo, crear una web que se comunique con un servidor SIP y viceversa. Jitsi por ejemplo inició siendo un proyecto VOIP basado en SIP y luego reescribieron su código con una mezcla de SIP y WebRTC Para mejorar la performance y poder funcionar con anchos de banda muchos más modestos.

|                          |  WebRTC   |            VOIP             |
| ------------------------ | :-------: | :-------------------------: |
| **Calidad**              |  Alta ++  |            Alta             |
| **Consumo**              |   Medio   |            Bajo             |
| **Estabilidad Software** |   Beta    |            Buena            |
| **Estabilidad Llamada**  |   Buena   |            Buena            |
| **Simplicidad**          |  Simple   |          Complejo           |
| **Equipo adicional**     |    NO     | Puede conectar teléfonos IP |
| **Codecs**               | Opus, VP8 |        H246, AMR-WB         |
| **Protocolo de Señal**   | --------- |       SIP, XMPP, H323       |
| **Cifrado Nativo**       | SRTP, TLS |             TLS             |
| **Requiere Cliente**     |    NO     |             SI              |

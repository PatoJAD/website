---
title: 'QRCam subi una app a la play store'
date: '2021-09-20 13:03:00'
description: 'QRCam es una herramienta que permite escanear códigos QR desde tu dispositivo Android 5 en adelante. Creado por Lynx'
type: 'aplicaciones'
tags: ["qr", "cam", "android", "lynx", "app", "lector", "gratis"]
category: ["Aplicaciones"]
img: 'https://i.postimg.cc/C17fCSzW/image.png'
authors: ["PatoJAD"]
---

Hace una semana me vi en la peculiar necesidad (aunque parezca injustificable) de subir una aplicación a la play store. En ese momento me vi con que… Nunca generé una APK productiva en mi vida, y mucho más… No tenía una app como para llevar a producción.

## El contexto

Para entender un poco más esto debería explicar el contexto en que surgió esta necesidad. Si sos una persona muy atenta ya te va a sonar lo que voy a contar, pero a decir verdad este blog no tiene tantos seguidores como para darse cuenta de estos detalles. Hace ya un tiempo vengo participando, o mejor dicho, formando un proyecto llamado **Lynx** para los amigos (El nombre largo no importa mucho) donde la idea es generar software libre u open source (Eventualmente usamos algunas librerías no libres) para ofrecer servicios y poder funcionar como una empresa autosustentable que permita crecer no solo a la empresa sino al software libre en muchos aspectos.
Entonces para esto en su momento se dio de alta la cuenta de desarrollador de PlayStore para estar preparado y al no usarse estaba en peligro de baja…

## Sacando una App al rescate

Sacar una App en el playstore no es algo que se haga a la ligera, o al menos eso es lo que te dicen. Es real que para poder ser publicada debe pasar muchas pruebas y a eso la demora pero realmente no es que playstore sea muy estricta con levantar una aplicación.

{{< img src="https://play-lh.googleusercontent.com/yhxT65qXPpOY1Ury_nWDVdmkIOUqTXi-vNBRBnGhRJteD6MRH9BiT1LOvqAGkzbeLA8=w1366-h665-rw" >}}

Desde que me enteré que podía vencer me puse a pensar que app podría subir, tenía que desarrollar algo y tenía que ser en poco tiempo. Realmente es algo muy difícil tratar de sacar un producto estable en poco tiempo pero no es completamente imposible.

## Cómo nace QRCam

Este proyecto es el primo hermano de {{< textlink url="/aplicaciones/2021/09/crea-tus-qr-personalizados-y-gratis/" text="QRGenerator la app de la que hablé en la semana pasada" >}} y no es nada más ni nada menos que una app que permite escanear QR. Actualmente está disponible para Android aunque también se puede compilar para iOS. Esta app es más amiga de la filosofía UNIX “hacer una cosa y hacerla bien”. Por lo cual no vamos a poder hacer ninguna otra cosa que escanear QR. Y nace como complemento de QRGenerator para poder comprobar los QR Generados sin tener que navegar en algunas apps de cámaras que son lentas y toscas por la cantidad de funciones que tiene (No es que esto esté mal, simplemente es ineficiente y eventualmente queremos escanear un QR y queremos hacerlo rápido.)

{{< link url="https://qrgenerator.lynx.net.ar/" text="Ir a QRGenerator" >}}

## Una app con poca cocción

Esta app se desarrolló en menos de 1 hs y se subió, ya pasó las pruebas y está disponible. Si bien no representa un gran trabajo de Lynx ni a dónde va su futuro es un pequeño paso para comenzar a figurar. Te invito a probarla y a reportar errores y comentarnos como te parece que va. Si quieres colaborar con el proyecto puedes valorarla y compartirla…

{{< link url="https://play.google.com/store/apps/details?id=com.lynxqrcam" text="Ir a PlayStore" >}}


## Mi experiencia

Realmente el área de desarrollo fue poco, pero la burocracia para subir apps a la playstore es más de lo que yo creía. No es algo complejo ni imposible, pero muchas cosas hay que irlas resolviendo y obviamente ya quedan preparadas para la siguiente app pero realmente no existen muchas cosa específicas o la documentación es medio… *“confusa”* Sin embargo subir una app a una tienda oficial representa un paso importante para los desarrolladores y obviamente para un proyecto así que está naciendo.

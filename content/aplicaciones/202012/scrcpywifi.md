---
title: 'Controlar tu Celular por Wi-Fi'
date: '2020-12-21 12:44:00'
description: 'Hoy usaremos nuestro movil desde nuestra PC via Wi-Fi'
type: 'aplicaciones'
tags: ["scrcpy", "android", "arch", "debian", "ubuntu", "snap", "windows" , "integracion", "wifi"]
category: ["Aplicaciones"]
img: 'https://i.postimg.cc/BZzC6LnL/Captura-de-pantalla-de-2020-11-13-08-49-00.png'
authors: ["PatoJAD"]
---



Anteriormente hablamos de {{< textlink url="/aplicaciones/2020/11/scrcpy/" text="como utilizar nuestro celular con android desde nuestra PC" >}}, aunque en este tutorial solo hablamos de como usarlo cuando nuestro celular esta conectado via USB. Sin embargo este método puede no ser el más cómodo en todos los casos y por eso un miembro de la comunidad nos facilitó el método para poder usarlo de la misma forma pero vía Wi-Fi. Es importante recalcar que **tanto la PC como el dispositivo móvil tienen que estar en la misma red Wi-Fi.**




## Usarlo por Wi-Fi



Como dije de entrada este artículo le corresponde 100% a un usuario de la comunidad que me tiró un super mensaje para aclararme esto. Vale aclarar que esto está muy demorado ya que quise dejar pasar un tiempo para no ser tan repetitivo con los temas.


{{< img src="https://i.postimg.cc/BZzC6LnL/Captura-de-pantalla-de-2020-11-13-08-49-00.png" >}}


Para poder hacer eso es importante habilitar ADB para poder utilizarlo por Wi-Fi por eso vamos a dejar a continuación toda la información necesaria que fue facilitado por Javier.




## Habilitando ADB sobre Wifi en Android



* **Paso 1:** Habilite la depuración de USB (Configuración de Android> Opciones de desarrollador> Marque Habilitar depuración de USB). Si ya venías usando este paso no es necesario dado que ya está habilitado
* **Paso 2:** Conecte su dispositivo a la PC a través de USB. Si bien vamos a usarlo vía Wi-Fi es necesario configurarlo por cable.
* **Paso 3:** Abrimos la terminal teniendo ADB instalado y vamos a poner los siguientes comandos:



```bash
adb tcpip 5555
```



Esto te dará un resultado:



```bash
restarting in TCP mode port: 5555
```



* **Paso 4:** Ahora encuentra la dirección IP de tu Android en Configuración> Wifi> Avanzado. Anote su dirección IP. En algunas versiones de Android se encuentra dentro de Preferencias de Wi-Fi.
* **Paso 5:** En terminal escribimos:



```bash
adb connect <dirección IP>
```



Reemplazando <dirección IP> con la que apuntamos anteriormente. Esto te daría un resultado:



```bash
connected to <dirección IP>
```



* **Paso 6:** Ahora, para verificar si está conectado a ADB a través de WiFi, desconecte su dispositivo de USB y escriba:



```bash
adb devices
```



Esto debería darte un resultado:



```bash
192.168.1.192:5555 device
```



Has habilitado exitosamente la conexión a ADB a través de la red WiFi de tu Android.




## Usando Scrcpy


{{< img src="https://i.postimg.cc/7YTnTH5B/Captura-de-pantalla-de-2020-11-13-09-15-56.png" >}}


Una vez que tenemos el dispositivo conectado correctamente (Sugiero mantener la ip estática para evitar tener que reconectar cuando nuestro dispositivo se reconecte a la red) También recuerden que es estrictamente necesario verificar la {{< textlink url="/aplicaciones/2020/11/scrcpy/" text="instalación que vimos en la publicación anterior">}}. Si todo lo anterior está OK vamos a poder usar el comando:



```bash
scrcpy
```




---



Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

---
title: "React Native - crear Proyecto"
date: "2020-05-28 8:10:00"
description: "Veamos un poco como crear un proyecto y correrlo en nuestros dispositivos android"
type: "programacion"
tags: ["react","native","android","ios","crear","proyecto","init","react-native"]
category: ["Programacion"]
img: "https://rosolutions.com.mx/blog/wp-content/uploads/2018/10/image-4-740x414.png"
authors: ["PatoJAD"]
---

Uno de los pre requisitos es tener instalado node y actualizado. entendemos que si vamos a estar usando react native no sería tu primer framework en js por lo cual damos por entendido esto y ya instalado. Primero tenemos que instalar adb para la gestión de devices y android sdk para compilar y probar con celulares android.

{{< br >}}

    sudo apt install adb android-sdk

{{< br >}}

Una vez instalado podemos seguir con la instalación de react-native, en este caso vamos a hacerlo globalmente para poder gestionar varios proyectos de la siguiente forma

{{< br >}}

    sudo npm install -g react-native-cli

{{< br >}}

Una vez instalado debemos definir las variables de entorno de Android, en este caso al instalar el SDK vamos a hacerlo de la siguiente forma teniendo en cuenta como se instaló.

{{< br >}}

    export ANDROID_SDK_ROOT="/usr/lib/android-sdk/"
    export PATH="/usr/lib/android-sdk/tools:$PATH"
    export PATH="/usr/lib/android-sdk/platform-tools:$PATH"
    source ~/.bashrc

{{< br >}}

Si la SDK la instalas por andorid estudio o ya al tenias se definen así:

{{< br >}}

    export ANDROID_HOME="/home/pato/Android/Sdk"
    export PATH="$ANDROID_HOME/tools:$PATH"
    export PATH="$ANDROID_HOME/platform-tools:$PATH"

{{< br >}}

donde dice pato va el nombre de usuario

{{< br >}}
{{< br >}}

## Teniendo el entorno a la Faena!

{{< br >}}

ya armamos el entorno, y entendemos que esta perfecto asi que vamos a la segunda parte, crear el proyecto. Esto es simple y lo hacemos con el siguiente comando

{{< br >}}

    npx create-react-app my-app
    cd my-app
    npm start

(NPX es una variante de npm que gestiona mejor los paquetes que se instala junto a node)

{{< br >}}
{{< br >}}

## Probar la App en nuestro dispositivo

{{< br >}}

Muchos prefieren virtualizar y me parece que está perfecto, pero lo mejor es probarlo directamente en nuestros dispositivos, por dos motivos. Es mejor verlo lo más cerca de produccion posible, para detectar errores y no ocupamos recursos de la máquina (Si gente, soy pobre y mi maquina es una poronga...)

Vamos a esto... Lo que tenemos que hacer es verificar que el usb reconozca nuestro dispositivo (Recordemos que el dispositivo debe es disponible para debugear y demás cosas que no van en este post) y eso lo podemos ver así:

{{< br >}}

    lsusb

{{< br >}}

Este comando nos mostrara algo asi:

{{< br >}}

    Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
    Bus 001 Device 003: ID 8087:0a2b Intel Corp.
    Bus 001 Device 008: ID 04e8:6860 Samsung Electronics Co., Ltd Galaxy series, misc. (MTP mode)
    Bus 001 Device 005: ID 0bda:5686 Realtek Semiconductor Corp. Integrated_Webcam_HD
    Bus 001 Device 004: ID 0a5c:5832 Broadcom Corp. 5880
    Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub

{{< br >}}

En mi caso es el Samsung que podemos ver en la siguiente línea Samsung Electronics Co., Ltd Galaxy series, misc. (MTP mode). Y vamos a ver como lo usaria en mi caso, van que van a tener que modificar dependiendo el ID de su grupo.

{{< br >}}

    echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="04e8", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules

{{< br >}}

Y una vez que ya tenemos esto podemos ver los devices de la siguiente forma. Recordemos que adb ya lo instalamos antes. Si te da problemas de versiones puede ser por la instalación de Android Studio.

{{< br >}}

    adb devices

{{< br >}}

y en mi caso lo va a mostrar así:

{{< br >}}

    52003275eab6a453	device

{{< br >}}

Luego la mejor forma de ejecutarlo es con el siguiente comando en la carpeta del proyecto.

{{< br >}}

    react-native run-android

{{< br >}}

Los que utilizan yarn o npm puede que no ejecuten correctamente intente seguirlo a pie de la letra.


Atencion un error comun es que no estén aceptadas las licencias de tener el Android Studio basta con ingresar y actualizar las SDK y aceptar las licencias de instalación!

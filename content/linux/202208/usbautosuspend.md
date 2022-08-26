---
title: "USB no me funciona... SOLUCION"
date: "2022-08-26 11:48:00.00"
description: "Hoy hablamos sobre la gente de sistemas y las distros que tiene que conocer"
type: "linux"
tags: ["usb", "core", "autosuspend", "usbcore", "solucion", "no", "reconoce", "funciona", "pendrive", "mouse", "tecladp"]
category: ["Linux"]
img: "https://i.postimg.cc/nzVKqByt/reconoceusb.png"
authors: ["PatoJAD"]
---

Cuántas veces nos pasa que “de la nada” la pc no nos reconoce los USB (Ya sea pendrive, mouse, teclado, o lo que sea) Si bien la entrega de energía se cumple (Podemos ver la luz de periférico o incluso conectar un ventilador) No podes usar lo que esté conectado ni acceder a los datos.

Este problema se suele solucionar cuando reiniciamos la máquina, sin embargo eso puede ser tedioso, por lo cual a continuación te dejo un pequeño video en cual explico como poder solucionar esto para evitar el reinicio.

{{< youtube code="Pmjg4jWXuRI" >}}

## Código

Claramente es más cómodo poder copiar y pegar desde acá por lo cual dejo en orden los comandos que utilizamos en el video con una breve explicación:


Acá vamos a ver si se encuentra el autosuspend encendido, de ser asi el problema se estaría dando por el autosuspend (encendido seria que nos retonre >=1)

```bash
cat /sys/module/usbcore/parameters/autosuspend
```

Abrimos el archivo de configuración del grub con sudo para actualizar la información.

``` bash
sudo nano /etc/default/grub 
```

Buscamos la línea que se llame GRUB_CMDLINE_LINUX_DEFAULT si bien en mi caso se ve como a continuación, puede que se vea completamente diferente los parámetros que te figuran a vos pero eso no es problema solo basta agregar un parámetro más al final.

```cfg
GRUB_CMDLINE_LINUX_DEFAULT="loglevel=3 nowatchdog nvme_load=YES"
```

Agregamos al final de la línea el siguiente parámetro usbcore.autosuspend=-1 que apagaría el autosuspend de los USB. Dejo a continuación como queda en mi caso

```cfg
GRUB_CMDLINE_LINUX_DEFAULT="loglevel=3 nowatchdog nvme_load=YES usbcore.autosuspend=-1"
```

Luego guardamos y cerramos (en el caso de usar nano ctrl+o y luego enter para guardar y ctrl+x para cerrar) Y procedemos a actualizar el grub

```bash
sudo update-grub
```

Puede que en tu distribución la actualización del grub se haga de otra forma, en mi caso aplica para arch y en el video podemos ver como instalo el paquete porque no lo tenía.

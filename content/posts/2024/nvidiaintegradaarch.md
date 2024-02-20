---
title: "Instalar grafica NVIDIA integrada en Arch Linux"
date: "2024-02-20 14:34:00.00"
description: Les comparto el método que encontré para hacer funcionar mi gráfica nvidia integrada con 10 años de antigüedad usando drivers privativo y Optimus Manager
type: post
tags:
  [
    arch,
    archlinux,
    nvidia,
    grafica,
    integrada,
    optimus,
    drivers,
    instalacion,
    guia,
    tutorial,
    linux,
    gpu,
    xorg,
    wayland,
  ]
categories: [Linux, Hardware]
img: https://images.anandtech.com/doci/9681/Quadro_M5000M_678x452.jpg
authors: ["Carla Di Mar"]
---

Hola! Les comparto el método que encontré para hacer funcionar mi gráfica nvidia integrada con 10 años de antigüedad usando drivers privativo y Optimus Manager!

> Ej.: mi gráfica es NVIDIA GeForge GTX770M y la versión compatible es la nvidia-470xx)

## Detectando tipo de controladores de video:

```zsh
lspci | grep VGA
```

en mi caso responde: `00:02.0 VGA compatible controller: Intel Corporation 4th Gen Core Processor Integrated Graphics Controller (rev 06)`

```zsh
lspci -k | grep VGA -A 2
```

en mi caso responde:

```log
00:02.0 VGA compatible controller: Intel Corporation 4th Gen Core Processor Integrated Graphics Controller (rev 06)
Subsystem: Toshiba Corporation 4th Gen Core Processor Integrated Graphics Controller
Kernel driver in use: i915
```

### Instalando controlador de Codigo abieto de Intel:

```zsh
sudo pacman -S xf86-video-intel intel-ucode
```

### Detectar Nvidia:

- Ver DRIVERS de VIDEO instalados:
  ```zsh
  xrandr --listproviders
  ```
- Ver paquetes NVIDIA instalados:
  ```zsh
  sudo pacman -Ss nvidia
  ```
- Ver paquete NVIDIA SETTINGS instalado:
  ```zsh
  sudo pacman -Ss nvidia-settings
  ```

### Desinstalando versiones anteriores:

```zsh
sudo pacman -Rns nombredelpaquete
```

ej.:

```zsh
sudo pacman -Rns nvidia-340xx
```

## Detectar Driver compatible con la gráfica NVIDIA:

Hay que considerar dos factores de compatibilidad: **Versión nvidia** y el **Kernel**

### Ver lista de compatibilidad:

- Entrar a la [siguiente página](https://www.nvidia.com/en-us/drivers/unix/legacy-gpu/) y buscar tu modelo de nvidia dentro de la lista para saber con
  que versión es compatible.

#### Nvidia según el kernel:

- kernel linux → nvidia
- linux-lts → nvidia-lts
- todos los kernel (construye dinámicamente los módulos del kernel) → nvidia-dkms

> ej: en mi caso como el modelo de la nvidia es viejo debo usar por compatibilidad el kernetl lts pero con nvidia-dkms

## Pasos previos a la instalación:

- Habilitar Multilib para ejecutar aplicaciones 32 bits en sist. de 64 bits:
  ```zsh
  sudo nano /etc/pacman.conf
  ```
  (para habilitar hay que descomentar las dos lineas siguientes, borrar # y guardar)
  ```cfg
  [multilib]
  Include = /etc/pacman.d/mirrorlist
  ```
  Para guardar cambios: Ctrol + o (letra), Para confirmar: enter, Para salir: Ctrol + x
- Entrar al archivo sddm para editarlo (en el caso de que se use kde) con el siguiente comando:
  ```zsh
  sudo nano /etc/sddm.conf
  ```
  Agregar # a las dos líneas que estan debajo de [X11]:
  ```cfg
  [X11]
  # DisplayCommand
  # DisplayStopCommand
  ```
  Ctrl + o
  Enter
  Ctrol + X

### Borrar archivos que esten dentro de la carpeta X11 para que no interfieran:

- Ir a la carpeta: `/etc/X11/`
- Ver si hay archivos xorg fuera de las carpetas.
- Si hay archivos xorg: los vamos a borrar de la siguiente manera:
  - Hacer Click derecho y seleccionar abrir terminal aqui
  - Para Borrar los archivos y dejar las carpetas
    ```zsh
    sudo rm xorg.conf
    sudo mv xorg.conf xorg.conf0
    sudo rm xorg.conf.nvidia-xconfig-original
    ```

## Instalar controlador privativo de Nvidia:

### Nvidia para kernel linux (última versión)

```zsh
sudo pacman -S nvidia nvidia-utils
```

### Nvidia para kernel linux-lts: (para nvidia viejas es mejor no usar lts)

```zsh
sudo pacman -S nvidia-lts
```

### Nvidia para kernel linux-zen: (sirve para todos los kernel) dkms

```zsh
sudo pacman -S nvidia-dkms
```

ej: en mi caso compatible con GeForge GTX770M

```zsh
yay -S nvidia-470xx-dkms
yay -S nvidia-470xx-utils
yay -S lib32-nvidia-470xx-utils
yay -S lib32-opencl-nvidia-470xx
yay -S opencl-nvidia-470xx
```

En una linea todos los paquetes dkms para la versión 470xx:

```zsh
yay -S nvidia-470xx-dkms nvidia-470xx-utils lib32-nvidia-470xx-utils lib32-opencl-nvidia-470xx opencl-nvidia-470xx
```

## Instalar MhWd:

```zsh
$ yay -S mhwd-nvidia-versión
```

ej: en mi caso compatible 470xx

```zsh
yay -S mhwd-nvidia-470xx
```

## Instalar Nvidia Settings:

```zsh
sudo pacman -S nvidia-settings
```

ej.: Compatible 470xx:

```zsh
yay -S nvidia-470xx-settings
```

## Instalar bbswithc

### Para kernel linux:

```zsh
sudo pacman -S bbswitch
```

### Para kernel linux-Zen o si usamos las nvidia-dkms:

```zsh
sudo pacman -S bbswitch-dkms
```

## Instalar Optimus Manager:

```zsh
yay -S optimus-manager optimus-manager-qt
```

Actualizar:

```zsh
sudo pacman -Syyu
```

Verificar el estado de Optimus Manager:

```zsh
systemctl status optimus-manager.service
```

Para parar el proceso apretar: q

Reiniciar:

```zsh
reboot
```

### Configurar Optimus Manager:

- Ir al Menú de aplicaciones y ejecutar Optimus manager
- Va aparecer un icono en la barra.
- Hacer Click derecho sobre el ícono de Optimus manager de la barra y entrar a Configuración.
  ![Optimus Manager](https://i.postimg.cc/ZYdrnpxr/image.png)
  ![Optimus Manager](https://i.postimg.cc/Gmh8FyGg/image.png)
  ![Optimus Manager](https://i.postimg.cc/VkGSDkFf/image.png)
  ![Optimus Manager](https://i.postimg.cc/FKYYqXPj/image.png)
  ![Optimus Manager](https://i.postimg.cc/ZqXWzsgX/image.png)
  {{< warning text="OJO: INICIAR SESIÓN CON X11 (Xorg de KDE) porque optimus manager no es compatible con wayland" >}}
- Reiniciar el sistema:
  ```zsh
  reboot
  ```

### Comprobar si funciona Nvidia:

- Abrir la consola y poner el siguiente comando:
  ```zsh
  optimus-manager --print-mode
  ```
  ej: en mi caso responde:
  ```log
  Current GPU mode : nvidia
  ```
- Poner el siguiente comando:
  ```zsh
  glxgears -info
  ```
  Se abre la siguiente ventana:
  ![glxgears](https://i.postimg.cc/c1BLFJsp/image.png)
- Cerrar la ventana chicha y se frena el proceso.
- Subir por la consola hasta donde se puso el comando para ver el resultado.
  Ej: en mi caso dio:
  ```log
  Running synchronized to the vertical refresh. The framerate should be
  approximately the same as the monitor refresh rate.
  GL_RENDERER = NVIDIA GeForce GTX 770M/PCIe/SSE2
  GL_VERSION = 4.6.0 NVIDIA 470.223.02
  GL_VENDOR = NVIDIA Corporation
  ```

### CONFIGURAR NVIDIA SETTINGS

- Entrar al Menu de apliciones y abrir Nvidia X Server Settings
- Entrar a “OpenGL Settings”
- En la solapa Image Settings:
- Poner la configuración deseada:
  High Performance (mejor rendimiento, elijo esta)
  High Quality (mejor calidad)

### INSTALAR EL CONTROLADOR GWE: controla las GPU NVIDIA

```zsh
yay -S gwe
```

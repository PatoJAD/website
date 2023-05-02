---
title: 'Guia para instalar Arch'
date: '2020-10-13 10:46:00'
description: 'La guia definitiva para realizar la instalacion de Arch linux paso a paso'
type: 'linux'
tags:
    [
        'arch',
        'linux',
        'gnu',
        'bios',
        'uefi',
        'definitiva',
        'instalar',
        'instalacion',
        'como',
        'particionar',
        'xfce',
        'deepin',
        'kde',
        'lxqt',
        'lxde',
        'mate',
        'gnome',
        'nvidia',
        'intel',
        'grub',
        'amd',
        'sugar',
        'plasma',
    ]
category: ['Linux']
img: 'https://i.blogs.es/12f357/wallpaper_arch_linux_by_bruoneightwo-da232j1/450_1000.png'
authors: ['PatoJAD']
---

Siempre hablamos de esta distribución tan maravillosa y en esta oportunidad vamos a aprovechar que un usuario nos dejó una guía tan específica y tan perfecta que vamos a proceder con la instalación de Arch linux. Con esta guía solo basta seguir paso a paso.

#### Atención esta guia solo sirve para instalarlo sobre Disco Duro y no sobre SSD

## Preparando el equipo

Una vez que hayamos booteado nuestro prendive con Arch linux vamos a poner nuestro teclado en español de la siguiente forma:

    loadkeys la-latin1

Teniendo el teclado en español ya podemos digitar sin mayores problemas por lo cual podemos proceder a conectarnos a internet siguiendo estos pasos si usaras WiFi en vez de cable.

    iwctl
    device list
    station wlan0 scan
    station wlan0 get-networks
    station wlan0 connect ["Nombre_de_la_Red"] PassDelWiFi
    exit

En este caso la wlan0 era la que me correspondía, si te sale otro número que no sea 0 solo cambialo por el que te sale por ejemplo wlan1. Para comprobar si ya tienes conexión activada

    ping patojad.com.ar

Presiona las teclas Ctrl+C para parar el ping si todo funciona ok, en caso contrario debemos revisar el paso anterior. Antes de preparar el disco debemos identificar si realmente tenemos UEFI o BIOS (si es que no lo sabemos de antemano) esto podemos verlo de la siguiente manera:

    ls /sys/firmware/efi/efivars

Si te aparece una lista con varios identificadores es porque estás utilizando un ordenador UEFI y debes saltar hasta la parte de Preparando el Disco UEFI

## Preparando el Disco BIOS

Para particionar el disco basta con ingresar a la herramienta de terminal que nos permite particionarlo y eso podemos hacerlo de la siguiente forma

    cfdisk

Seleccionar **DOS** para crear una tabla de particiones para **BIOS**. A continuación te dejo en detalle una de las formas recomendadas. Desde el expertise de cada uno sabe que puede omitir el home o el swap. Si no entendes mucho de las particiones te recomiendo la siguiente configuración

    sda1 /boot 512M
    sda2 /swap 4-6G | Vas a la opción Type y la marcas "Linux Swap"
    sda3 /root 30-60G
    sda4 /home |Lo que sobre

Write para escribir cambios en el disco y quit para salir. Luego te recomiendo listar los discos duros y sus particiones, es para asegurarte que todo haya salido bien en el particionado

    fdisk -l

Si todo lo anterior salió correctamente es hora de formatear las particiones para poder usarlas y eso lo vamos a hacer de la siguiente manera (Este paso puede variar si no particionaste como recomendamos en el paso anterior)

    mkfs.ext2 /dev/sda1 ; mkfs.ext4 /dev/sda3 ; mkfs.ext4 /dev/sda4 ; mkswap /dev/sda2

Puedes hacerlo 1 por 1 también si te sientes más cómodo. Una vez formateados nos toca montar las particiones y swap:

    mount /dev/sda3 /mnt ; mkdir /mnt/boot ; mount /dev/sda1 /mnt/boot ; mkdir /mnt/home ; mount /dev/sda4 /mnt/home ; mkswap /dev/sda2

Luego de esto escribes "swapon" para encender la swap. Puedes hacerlo 1 por 1 también si es que es más cómodo.

    swapon

## Preparando el Disco **UEFI**

Primero utilizamos el siguiente comando:

    fdisk /dev/sda

A eso lo continuas escribiendo g luego w y q para salir. Seleccionar **GPT** para crear una tabla de particiones para **UEFI**. A continuación te dejo en detalle una de las formas recomendadas. Desde el expertise de cada uno sabe que puede omitir el home o el swap. Si no entendes mucho de las particiones te recomiendo la siguiente configuración

    sda1 /boot/efi 512M | La marcamos bootable | Luego vamos a Type y la marcamos "EFI System"
    sda2 /swap 4-6G | Vas a la opción Type y la marcas "Linux Swap"
    sda3 /root 30-60G
    sda4 /home |Lo que sobre

Write para escribir cambios en el disco y quit para salir. Luego te recomiendo listar los discos duros y sus particiones, es para asegurarte que todo haya salido bien en el particionado

    fdisk -l

Si todo lo anterior salió correctamente es hora de formatear las particiones para poder usarlas y eso lo vamos a hacer de la siguiente manera (Este paso puede variar si no particionaste como recomendamos en el paso anterior)

    mkfs.vfat -F32 /dev/sda1 ; mkfs.ext4 /dev/sda3 ; mkfs.ext4 /dev/sda4 ; mkswap /dev/sda2

Puedes hacerlo 1 por 1 también si te sientes más cómodo. Una vez formateados nos toca montar las particiones y swap:

    mount /dev/sda3 /mnt ; mkdir /mnt/boot/efi ; mount /dev/sda1 /mnt/boot/efi ; mkdir /mnt/home ; mount /dev/sda4 /mnt/home ; swapon /dev/sda2

## Instalación del Sistema BIOS

Una vez que ya tengamos nuestras particiones funcionando de 10 debemos instalar el sistema y para eso vamos a hacerlo con el siguiente comando en el caso de que nuestro equipo sea **BIOS**

    pacstrap /mnt base linux-lts linux-firmware linux-lts-headers grub  networkmanager network-manager-applet netctl wireless_tools iw wpa_supplicant nano xdg-user-dirs dhcpcd base-devel xterm sudo

## Instalación del Sistema UEFI

Una vez que ya tengamos nuestras particiones funcionando de 10 debemos instalar el sistema y para eso vamos a hacerlo con el siguiente comando en el caso de que nuestro equipo sea **UEFI**

    pacstrap /mnt base linux-lts linux-firmware linux-lts-headers grub  networkmanager network-manager-applet netctl wireless_tools iw wpa_supplicant nano xdg-user-dirs dhcpcd base-devel sudo xterm efibootmgr

## Configuraciones Varias

Ahora llega una parte que vamos a realizar algunas configuraciones varias, esto aplica tanto a UEFI como a BIOS y se realizan de la misma manera. Lo primero que vamos a realizar es descomentar multilib e Include para esto vamos a usar nano de la siguiente manera:

    nano /mnt/etc/pacman.conf

Presionar crtl+w | escribir multilib y descomentar ambas líneas. Para poder hacer uso del multilib

    [multilib]
    Include = /etc/pacman.de/mirrorlist

A continuación vamos a generar fstab de la siguiente manera

    genfstab -U /mnt >> /mnt/etc/fstab

No tenemos que olvidarnos de cambiar root al nuevo sistema con este simple comando

    arch-chroot /mnt

Y por último procedemos con unas configuraciones varias en lo que respecta a locacion, hostname etc...

    ln -sf usr/share/zoneinfo/TuContinente/TuPais_o_Capital /etc/localtime
    hwclock -w
    nano /etc/locale.gen | crt+w escribir do | desmarcar #es_DO.UTF-8
    locale-gen
    echo CualquierNombre > /etc/hostname
    echo KEYMAP=es > /etc/vconsole.conf
    echo LANG=es_DO.UTF-8 > /etc/locale.conf

## Instalación del GRUB en BIOS

Es importante instalar nuestro cargador de arranque para poder iniciar el sistema y esto lo podemos hacer con 2 simples comandos para **BIOS**

    grub-install /dev/sda
    grub-mkconfig -o /boot/grub/grub.cfg

## Instalación del GRUB en UEFI

En el caso de estar en **UEFI** la instalación del cargador de arranque se realiza con los siguientes comandos:

    grub-install --efi-directory=/boot/efi --bootloader-id='Arch Linux' --target=x86_64-efi
    grub-mkconfig -o /boot/grub/grub.cfg

## Configurando el usuario y el sistema

Una vez instalado el GRUB podemos proceder a configurar los usuarios y el resto del sistema, para esto iniciamos configurando la contraseña root de la siguiente manera:

    passwd

Una vez configurada la contraseña podemos configurar ya el usuario y contraseña que vamos a utilizar:

    useradd -mUG wheel [tu usuario]
    passwd [tu usuario]

Ahora sí ya podemos apagar todo y reiniciar para poder seguir con el sistema ya instalado!

    exit
    reboot

Una vez que haya reiniciado con éxito y estemos de nuevo en nuestro sistema vamos a configurar usuario sudoers de la siguiente forma (para esto debemos logearnos como root con su y la contraseña)

    EDITOR=nano visudo

Ctrl+w | escribir: %wheel para buscar y luego procedemos a descomentar # %wheel. Ya habiendo configurado eso podemos proceder a activar internet de la siguiente manera:

    systemctl enable NetworkManager
    systemctl start NetworkManager.service

Si usaste wifi en vez de cable escribe para obtener la lista de dispositivos y poder realizar la coneccion:

    ip link

Una vez que identifiquemos la placa wifi la usamos de la siguiente forma

    ip link set wlo1 up

Con ese comando ya estaria prendida la placa WiFi y podemos conectarnos de la siguiente forma:

    nmcli dev wifi connect PatoJADWiFi password p4t0j4d

## Instalación del servidor gráfico y driver de tu gráfica

Vamos a instalar nuestra servidor gráfico y placa, para esto vamos a dividirlo dependiendo de nuestra placa de video

#### Intel

{{< img src="https://hardzone.es/app/uploads-hardzone.es/2019/09/Intel-Cascade-Lake-X-intro.jpg" >}}

    sudo pacman -Syyu xf86-video-intel mesa-demos intel-ucode xorg pavucontrol pulseaudio

#### Nvdia

{{< img src="https://hardzone.es/app/uploads-hardzone.es/2020/04/NVIDIA-Hotfix.jpg" >}}

    sudo pacman -Syyu xf86-video-nouveau mesa-demos mesa-libgl xorg pavucontrol pulseaudio

#### AMD

{{< img src="https://hardzone.es/app/uploads-hardzone.es/2020/03/AMD-Ryzen-9.jpg" >}}

    sudo pacman -Syyu xf86-video-amdgpu mesa-vdpau mesa-demos xorg pavucontrol pulseaudio

## Instalación del escritorio y sus utilidades

A continuación vamos a ver la instalación de los escritorios disponibles y sus utilidades te recomendamos escoger el que más te guste:

#### Instalar XFCE4

{{< img src="https://docs.xfce.org/_media/xfce/4.12/slider-desktop.jpg" >}}

290MiB/RAM aproximadamente, un escritorio muy ligero y bastante personalizable

    pacman -S xfce4 xfce4-goodies network-manager-applet
    pacman -S lightdm lightdm-gtk-greeter lightdm-gtk-greeter-settings
    pacman -S light-locker accountsservice

#### Instalar Deepin

{{< img src="https://www.deepin.org/wp-content/uploads/2020/04/01-1.jpg" >}}

590MiB/RAM aproximadamente, es un escritorio muy estético aunque el nivel de personalización es bastante bajo

    pacman -S deepin deepin-extra
    pacman -S lightdm deepin-session-ui
    pacman -S light-locker accountsservice

#### Instalar Budgie

{{< img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Ubuntu-budgie-18.04-cat.png/1280px-Ubuntu-budgie-18.04-cat.png" >}}

460MiB/RAM aproximadamente, un escritorio maleable y muy buscado

    pacman -S budgie-desktop gnome gnome-shell gnome-extra gdm

#### Instalar Cinnamon

{{< img src="https://erikdubois.be/wp-content/uploads/2017/01/arch-cinnamon-aureola-acros.jpg" >}}

450MiB/RAM aproximadamente, es un escritorio muy estético y fluido, con cada actualización este escritorio se renueva y nos soprende mas

    pacman -S cinnamon gdm

#### Instalar Enlightenment

{{< img src="https://i.stack.imgur.com/FvoTq.jpg" >}}

149MiB/RAM aproximadamente, es un escritorio muy liviano y muy optimizado, altamente recomendado para equipos viejos

    pacman -S enlightenment terminology gnu-free-fonts
    pacman -S lightdm lightdm-gtk-greeter lightdm-gtk-greeter-settings
    pacman -S light-locker accountsservice

#### Instalar GNOME

{{< img src="https://i.redd.it/qeu6pls7v7w11.png" >}}

740MiB/RAM aproximadamente, es un escritorio muy maleable y bastante fluido (es uno de los escritorios con más precarga pero lo vale en la usabilidad) es el preferido de **Pipe** y **Julio**

    pacman -S gnome gnome-extra gdm

#### Instalar GNOME/Flashback

{{< img src="https://external-preview.redd.it/38qPd6ZJGLQXB2HtQ6iL2ZEvOw-Dsg0VM05FOTc8O7I.png?auto=webp&s=bab6f84634f388e1abc83e14c954f94fe34b150d" >}}

435MiB/RAM aproximadamente, el diseño del escritorio y la tecnología subyacente es similar a GNOME 2. No utiliza la aceleración 3D en absoluto, por lo que generalmente es más rápido y requiere menos CPU

    pacman -S gnome-flashback gnome gnome-applets sensors-applet gdm

#### Instalar LXDE — GTK3

{{< img src="https://cdn.pling.com/img//hive/content-pre1/159897-1.png" >}}

175MiB/RAM aproximadamente, es un escritorio muy fluido y pueden lograrse estéticas únicas

    pacman -S lxde-gtk3 lxdm-gtk3 lxde-common

#### Instalar LXQt

{{< img src="https://blog.desdelinux.net/wp-content/uploads/2014/05/lxqt-1.png" >}}

227MiB/RAM aproximadamente, es un escritorio fluido con un nivel de precarga bajo pero suficiente

    pacman -S lxqt sddm breeze-icons xdg-utils xscreensaver xautolock gnu-free-fonts

#### Instalar LXDE — GTK2

{{< img src="https://blog.desdelinux.net/wp-content/uploads/2012/07/2012-07-17-194657_1440x900_scrot.png" >}}

170MiB/RAM aproximadamente, es la versión con GTK2 de lxde, en lo personal prefiero la versión con GTK3 pero eso va por cada uno.

    pacman -S lxde lxdm lxde-common

#### Instalar MATE

{{< img src="https://fc06.deviantart.net/fs71/f/2012/150/f/9/archlinux_mate_29_05_12_by_chetaahmc-d51p82z.png" >}}

332MiB/RAM aproximadamente, es uno de los escritorios con mejor relación consumo oferta y realmente es uno de los que personalmente más me gusta.

    pacman -S mate mate-extra mate-media
    pacman -S mate-applet-dock mate-applet-streamer mate-power-manager
    pacman -S network-manager-applet system-config-printer

mate-extra > Paquete de programas para MATE (opcional)
system-config-printer > Configuración de Impresoras (opcional)
mate-power-manager > El backend UPower (opcional)

#### Instalar Sugar

{{< img src="https://sugarlabs.org/assets/home-screenshot.png" >}}

260MiB/RAM aproximadamente, el escritorio pensado para niños (Si, no hay nada mejor que nuestro niño de 6 años use Arch, imaginense lo que va a ser a los 20) es ligero y pensado para ser muy simple de usar

    pacman -S sugar sugar-fructose sugar-runner network-manager-applet
    pacman -S lightdm lightdm-gtk-greeter lightdm-gtk-greeter-settings
    pacman -S light-locker accountsservice

#### Instalar KDE Plasma

{{< img src="https://arcolinuxd.com/wp-content/uploads/2018/06/archlinux-plasma-menu.jpg" >}}

700MiB/RAM aproximadamente, es un escritorio muy estético y personalizable, la precarga es baja pero en algunos casos puede ir aumentando en el uso.

    pacman -S plasma gnu-free-fonts ttf-hack kde-applications sddm

kde-applications > Paquete de programas para KDE (opcional)

## Iniciando el sistema

Para entrar al sistema solo escribes

    systemctl enable lightdm|sddm|gdm

Depende de el escritorio que instales por ejemplo instalaste kde plasma entonces deberías poner

    systemctl enable sddm

Y luego para poder iniciarlo también depende del escritorio que instales por ejemplo con kde

    systemctl start sddm.service

Deberías cambiar en ambos casos a sddm por el gestor de sesiones que hayas instalado para poder iniciarlo

## Créditos

El contenido de esta publicación no es mio, simplemente acomode y junte las 2 guías para llegar a esta publicación. Quiero agradecer a **Im Rere =)** por permitirme usar sus guías.

---

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

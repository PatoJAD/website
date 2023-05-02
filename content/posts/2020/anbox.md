---
title: 'Anbox ¿La solución definitiva?'
date: '2020-06-10 09:52:00'
description: 'Hoy le toca a Anbox venir a defender su puesto como la aplicación definitiva para compatibilizar android en nuestro linux...'
type: 'aplicaciones'
tags:
    [
        'android',
        'apps',
        'linux',
        'anbox',
        'emulador',
        'virtualizacion',
        'virtualbox',
        'qemu',
        'wine',
        'shashlik',
    ]
category: ['Aplicaciones', 'Linux', 'Android']
img: 'https://blog.desdelinux.net/wp-content/uploads/2019/04/anbox.jpg'
authors: ['PatoJAD']
---

Parece que últimamente estoy haciendo saga de los mismos temas, pero esto suele pasar cuando uno investiga y busca nuevas alternativas, y hoy vamos a estar un poco cargaditos de críticas hacia ubuntu distro que yo no recomiendo pero admito que es muy buena para el target de usuarios al que apunta…

Ya ayer hablamos de Shashlik una app que nos permite ejecutar aplicaciones android en nuestro sistema operativo sin emularlo completamente, sin embargo esta aplicación se encuentra abandonada desde 2016, y si bien aún puede levantar aplicaciones sin problemas muchas veces lo ideal es mantenernos actualizados por seguridad y funcionalidad, por lo cual decidí traer su **equivalente actualizado**.

Sin embargo de esta app hay cosas que no me gustan aunque entiendo su decisión y es ahí donde vamos a **bardear un poco** a Ubuntu así que… Vamos a eso!

## Sobre la app

Como dijimos anteriormente esta aplicación no utiliza QEMU ni ningún otro emulado para levantar una aplicación por lo cual mejora el rendimiento haciéndolo más **PERFORMANTE** (Abrazo a todos los que me _bardearon_ de forma cariñosa por usar performante y les tengo que dar la derecha es una palabra que no existe pero que todo Linuxnauta entiende) Por lo cual lo vuelve una de las **mejores opciones** porque sería una capa de compatibilidad (Como wine) que hace que nuestro sistema no baje el rendimiento bruscamente

{{< img src="https://c1.staticflickr.com/1/913/41527912900_68ce4a25d5_o.jpg" >}}

Anbox es una solución **convergente**. Funciona de igual forma en una computadora portátil y un teléfono móvil, siempre que ejecuten alguna variante de Linux, claramente. Sin ir muy lejos, los orígenes de esta iniciativa radica en **Ubuntu Touch** por lo cual podemos ver hasta donde planean alcanzar la compatibilidad…

## Su lado Negativo (Aprende Ubuntu)

La instalación es directamente snap, esto es algo que no me agrada a simple vista dado que snap podría llegar reiterar librerias y demas sin ningun tipo de sentido al igual que sus hermanos como flatpack y demás…

{{< img src="https://cdn.lignux.com/wp-content/uploads/2018/07/anbox-1.png">}}

Sin embargo después de revisar cómo está implementado este increíble proyecto comprendí que es **realmente importante** que esto sea así dado que necesita versiones muy específicas y una actualización podría llegar a rompernos todo y al ser una app tan delicada con una función tan importante (Piensen en un smart donde se use wpp laboralmente instalado en Anbox no debería romper nunca) por lo cual podemos decir que Anbox es **un buen ejemplo** de cómo se debe usar snap

Ubuntu tomó la decisión de poner snap como defecto (Cosa que no quiero comentar mucho) Pero esto no está bueno porque desaprovechamos muchas cualidades de las bibliotecas compartidas. Está bien usar snap, pero en casos como los de Anbox.

## Instalación

Ahora el repo de la comunidad no pudo hacer nada por nosotros pero si podemos explicarte paso a paso cómo hacer para tener una instalación simple y funcional… Por lo cual vamos a proceder a eso:

Debemos agregar un repositorio que es una **ppa**, pero con el fin de hacer mas lindo el tuto vamos a agregarlo _a mano_ de la siguiente forma

```zsh
echo deb http://ppa.launchpad.net/morphis/anbox-support/ubuntu bionic main |  sudo tee /etc/apt/sources.list.d/anbox.list
```

Una vez que este agregado debemos agregar la **clave pública** para poder acceder al repositorio y esto lo hacemos de la siguiente forma

```zsh
sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com 21C6044A875B67B7
```

Y teniendo esto ya estamos preparados para seguir con el siguiente paso! que es nada más ni nada menos que instalar **los módulos del kernel**. Esto nos agrega 2 módulos que se actualizan automáticamente cuando se actualiza el kernel.

```zsh
sudo apt install anbox-modules-dkms
```

Después de instalar el paquete anbox-modules-dkms, debe cargar manualmente los módulos del kernel. _La próxima vez que se inicie su sistema, se cargarán automáticamente_.

```zsh
sudo modprobe ashmem_linux
sudo modprobe binder_linux
```

{{< img src="https://vidatecno.net/wp-content/uploads/2019/05/como-ejecutar-aplicaciones-android-en-ubuntu-linux-con-anbox-1.jpg" >}}

Ahora debería tener dos nuevos nodos en su directorio de sistemas /dev el cual podemos probar con el siguiente comando:

```zsh
ls -1 /dev/{ashmem,binder}
```

Donde vamos a estar esperando una salida como la que vemos a continuación.

```zsh
/dev/ashmem
/dev/binder
```

El segundo paso _instalará el complemento Anbox_ de la tienda y le dará todo lo que necesita para ejecutar la experiencia completa de Anbox. Instalar el complemento de Anbox es muy simple:

```zsh
sudo snap install --devmode --beta anbox
```

Por el momento, requerimos el uso de --devmode ya que el complemento de Anbox aún no está completamente limitado. Se ha comenzado a trabajar con el proyecto snapd upstream para obtener soporte para el confinamiento completo. Como efecto secundario del uso de --devmode, el ajuste **no se actualizará automáticamente**. Para actualizar a una versión más nueva, puede ejecutar:

```zsh
sudo snap refresh --beta --devmode anbox
```

## Instalar aplicaciones

{{< img src="https://instatecno.com/wp-content/uploads/2020/02/Anbox-700x400.jpg">}}

Ya teniendo instalado Anbox tenemos que instalar aplicaciones, o mejor dicho queremos por lo cual debemos proseguir de la siguiente forma. Requerimos tener el adb instalado si no lo tenes podes hacerlo asi:

```zsh
sudo apt install android-tools-adb
```

Anbox **no proporciona ninguna funcionalidad para obtener aplicaciones de Android**. Necesitamos obtenerlos de una fuente en Internet. Una vez que tenga el paquete _APK_ para la aplicación, puede instalarlo en el contenedor de Android con el siguiente comando:

```zsh
adb install aplicacion.apk
```

Si el contenedor de Anbox aún _no se está ejecutando_, podemos comenzar cargando la aplicación del administrador de aplicaciones:

```zsh
anbox.appmgr
```

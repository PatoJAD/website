---
title: 'StreamLabs en Linux'
date: '2020-11-10 09:44:00'
description: '¿Quien dijo que no se puede ser Stremer en Linux? Vamos a ver como'
type: 'aplicaciones'
tags:
    [
        'obs',
        'archalien',
        'arch',
        'debian',
        'ubuntu',
        'stream',
        'streamlabs',
        'streamlabels',
        'twitch',
        'youtube',
        'linuxbrowser',
    ]
category: ['Aplicaciones']
img: 'https://i.postimg.cc/W4mRQDLy/image.png'
authors: ['PatoJAD']
---

El mundo del Stream la gente lo ve estrechamente relacionado con Windows, y no es para menos, aplicaciones orientadas al stream de contenido como StreamLabs son solo nativas de windows. En esta oportunidad vamos a mostrar cómo sacarle todo el potencial a tus streams desde Linux.

## Lo que no vamos a ver

Antes de ponerme a escribir como loco quiero aclarar que hay cosas que no vamos a ver, en esta oportunidad no vamos a ver ni transiciones de escenas, ni la configuración de OBS. En caso de que vean necesario o que quieran saber un poco más sobre eso háganmelo saber y vamos a ir creando más contenido de este estilo.

## Lo que deberías tener/saber

Esto se puede alargar muchísimo por lo cual las cosas simples o que no son tan específicas voy a dejarlas para otra publicación o voy a asumir que ya sabes de esto y que solo quieres mejorar la calidad de tus Streams.

-   Instalación de OBS
-   Configuración de OBS
-   Captura de juego, pantalla y/o webcam
-   DroidCam como webcam (Lo menciono porque es útil para los que somos pobres)

## Marcos

En la sección de marcos no queda mucho por aclarar, los marcos para transmisiones son en formato PNG o Video si es que estos tienen movimientos, y para ambos casos nuestro OBS es capaz de agregarlos sin problemas de la siguiente forma.

### Imágenes

Lo primero que debemos hacer es tener nuestra escena creada. Una vez creado en la parte de Fuentes tocamos en el + que está abajo y agregamos una imagen.

{{< img src="https://i.postimg.cc/N0fB4fmw/image.png" >}}

Ahí seleccionamos imagen y nos aparecerá el siguiente cartel el cual debemos completar con el nombre del recurso (Por ejemplo _marco de cámara_ para identificarlo)

{{< img src="https://i.postimg.cc/HWt3GY7N/image.png" >}}

Luego la sección donde debemos poner la imagen que, de preferencia, debemos tener en nuestro ordenador.

{{< img src="https://i.postimg.cc/vmR5gkV9/image.png" >}}

Ya con esto tenemos la imagen agregada y podemos moverla o redimensionarla para la sección que queramos.

### Videos o Gifs

También existe la posibilidad de poner videos o gifs para darle movimiento a las escenas. Esto es útil como para una barra de loading o simplemente para darle un poco más de “emoción” para hacerlo es muy simple.

{{< img src="https://i.postimg.cc/N0fB4fmw/image.png" >}}

Nuevamente agregamos una fuente como el paso anterior, pero en esta oportunidad tiene que ser una fuente multimedia. Agregamos el nombre que nos pide (Ejemplo _cargando_ para poder identificarlo) Y nos aparecerá una ventana como esta.

{{< img src="https://i.postimg.cc/jddpmkCz/image.png" >}}

Aparte de seleccionar el recurso, que como dije antes debería estar en nuestro equipo, es importante seleccionar que la reproducción sea en bucle ya sea un gif o un video. De esta forma será constante mientras la escena está en la transmisión o grabando. Nuevamente esto podemos redimensionarlo y moverlo por todo nuestro lienzo.

## La interacción, algo muy importante para transmitir

La realidad es que para stremear es realmente importante la interacción con la audiencia, los streams superan a la TV por el hecho de que uno obtiene un feedback inmediato y juega con su audiencia. Streamlabs es una plataforma que ayuda a que esta interacción se vea más reflejada en el mismo streaming y si bien su app no es nativa de Linux, se pueden usar sus servicios que son nada más ni nada menos que una web. No voy a explicar el paso a paso de la web porque simplemente no configure tanto pero es realmente simple configurarlo yo solo voy a explicar cómo integrarlo en nuestro OBS de linux.

### Linux Browser

Para poder integrar StreamLabs con nuestro OBS vamos a necesitar este hermoso plugin de OBS. Realmente es muy simple de instalar y vamos a ir viendo el paso a paso de esto. Lo primero obviamente es descargar la última versión disponible el cual lo podemos hacer desde el siguiente link

{{< link url="https://github.com/bazukas/obs-linuxbrowser/releases" text="Descargar linuxbrowser" >}}

Luego nos tenemos que asegurar de crear la carpeta de plugins de OBS para dejar el plugin ahí lo cual podemos hacerlo con el siguiente comando:

```bash
mkdir -p $HOME/.config/obs-studio/plugins
```

Después de tener la carpeta creada, procedemos a descomprimir ahi dentro lo que descargamos recientemente, podes hacerlo a manopla y si vos queres amigarte con la terminal te dejo aca el comando que tenes que usar

```bash
tar -zxvf linuxbrowser0.6.1-obs23.0.2-64bit.tgz -C $HOME/.config/obs-studio/plugins/
```

Este comando está asumiendo que vos estás en la carpeta donde lo descargaste. Por ultimo tenes que asegurarte de tener estas dependencias instaladas:

-   OBS-Studio (Mas que obvio)
-   libgconf

Y ya podes abrir el OBS estudio y cuando agregues una nueva Fuente va a figurar Linux Browser donde podemos agregar sitios webs.

## Ahora si, StreamLabs

Esta publicación parece eterna y algunos ya quieren llegar a las hermosas notificaciones asi que ahi vamos. Una vez que estés registrado en StreamLabs y le des acceso a tu twitch, facebook, youtube, _cuenta del banco, y el micrófono que el gobierno te instaló mientras ibas al dentista avisarte nada (Bueno creo que esto no es real a no ser que vivas en EEUU)_ te puedes dirigir a la parte de **All Widgets** y ahí vas a ver una pantalla con muchos widgets que puedes configurar

{{< img src="https://i.postimg.cc/W4mRQDLy/image.png" >}}

Una vez que elijas uno y lo configures vas a seleccionar la url del widget que está en esta sección:

{{< img src="https://i.postimg.cc/W3tBt5qB/image.png" >}}

Ya teniendo la url copiada nos dirigimos al OBS, nuevamente agregamos una Fuente que va a ser, en este caso, un _Linux Browser_ le damos el nombre del Widget para identificarlo por si queremos utilizarlo en otra escena y completamos los datos:

{{< img src="https://i.postimg.cc/NjM73Zhv/image.png" >}}

La url del widget va donde dice **URL** (Aunque si queres poner el blog no me quejo) Elegis las dimensiones que desees (Es recomendable probar bien esto porque después la redimensión es solo un _zum_ de la ventana)

### StreamLabels

Esta herramienta es realmente útil, permite gestionar las interacciones y genera archivos de textos que uno puede usar en los streams por ejemplo para mostrar el último suscriptor, el último donador, y muchas cosas más. Esto si viene en formato deb para GNU/Linux y basta con descargarlo desde la página e instalarlo, En caso de que estés en arch sabemos que los debs no funcionan y lamentablemente archalien no funciona para convertirlo, pero aca te paso este truco que descubrí para instalarlo en Arch. Primero tenemos que descargarnos el deb

{{< img src="https://i.postimg.cc/rwrCyxpf/image.png" >}}

Después nos descargamos el Archalien desde si git, si es necesario descargar el código fuente para este **trucaso**. Te dejo el link para que sea más simple:

{{< link url="https://github.com/Asher256/archalien/archive/master.zip" text="Descargar Archalien" >}}

Una vez descargado lo descomprimimos y vamos a la carpeta, abrimos el archivo archalien.py y nos vamos a la linea nro 186 que dice:

```Python
sys.exit(1)
```

Una vez ahi eliminamos esta línea, guardamos el archivo y lo ejecutamos de la siguiente forma:

```bash
./archalien.py directorio/del/deb/StreamLabs.deb
```

Esto nos genera el archivo tar.gz el cual podemos instalar simplemente con pacman de la siguiente manera.

```bash
pacman -U StreamLabs.tar.gz
```

Recuerda que el nombre debes poner el que corresponda el mio es simbólico. Cualquier problema o duda estamos en la comunidad para apoyarte!

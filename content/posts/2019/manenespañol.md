---
title: 'Poner las paginas de man en español'
date: '2019-01-15'
description: 'Hoy veamos como traducir tu manual para linux'
type: 'linux'
tags: ['manual', 'man', 'español', 'terminal', 'consola', 'shell', 'traducir']
category: ['Linux']
img: 'https://i.postimg.cc/KzCKCYTb/aplicar-la-configuracion-regional-patojad.png'
authors: ['PatoJAD']
---

Ya hablamos de man y podes verlo {{< textlink url="/linux/2019/01/man-tu-manual-para-linux/" text="aquí" >}}. Sin embargo muchas personas no tienen dominio del Inglés o simplemente no quieren estar traduciendo todo constantemente. Para esas personas les traigo una forma de poner las páginas de man en Español, antes de iniciar con esto debo aclarar que solo estará en Español lo que tiene una traducción. Puede que algunas cosas no dispongan este idioma y lo veamos en Inglés. En dicho caso se puede colaborar con la traducción.

## Video

En esta oportunidad un video acompaña un poco esta guia/tutorial para poder simplificarla un poco.

{{< youtube id="nLNnuyBsxAg" >}}

## Iniciemos

Lo primero que debemos hacer es instalar las páginas de man en Español. Esto se encuentra en dos paquetes, una las páginas básicas y el otro contiene todas las extras que eventualmente necesitaremos. Lo podemos hacer de la siguiente forma:

    sudo apt update
    sudo apt install manpages-es manpages-es-extra

Los paquetes son los mismos para cualquier distribución por lo cual solo debemos modificar el comando de instalación por el de nuestra distribución.

Una vez finalizada la instalación puede ser que man no se encuentra aún en Español, en ese caso debemos configurar el sistema correctamente para que tome el idioma Español para man. Para esto debemos ejecutar el siguiente comando que nos permite realizar la configuración regional del sistema.

    sudo dpkg-reconfigure locales

Al ejecutarlo vamos a pasar por unos simples pasos guiados en nuestra terminal. Iniciando por un aviso en el cual se nos informa dónde vamos a ingresar.

{{< img src="https://i.postimg.cc/g0Tr60Nh/consejos-para-configurar-los-locales-patojad.png" >}}

Seguido a esto vamos a tener que elegir la configuración regional que deseamos generar. Las imagenes fueron tomadas de un blog Español por lo cual van a elegir las correspondientes a España, sin embargo nosotros elegimos la que corresponda dependiendo de donde vivamos.

{{< img src="https://i.postimg.cc/0jgQcBg2/seleccionar-configuracion-regional-2-patojad.png" >}}

Ya seleccionado correctamente, solo nos queda aplicar los cambios, para esto en la próxima ventana debemos seleccionar efectivamente cual queremos aplicar a nuestro sistema.

{{< img src="https://i.postimg.cc/KzCKCYTb/aplicar-la-configuracion-regional-patojad.png" >}}

Y ahora efectivamente podemos comprobar que man se encuentra traducido al español. Puede que algunas paginas se encuentren en ingles dado que no tienen traducción. Aun así podemos asegurarnos de que la mayoría se encuentran en español.

{{< img src="https://i.postimg.cc/0y5NWS4m/consejo-patojad.png" >}}

---

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

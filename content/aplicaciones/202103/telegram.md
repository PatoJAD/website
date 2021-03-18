---
title: '¿Como crear una instancia de Telegram para mi comunidad?'
date: '2021-03-18 10:23:00'
description: 'Hablemos la nueva versión de Telegram Web de la Comunidad y como instalarlo en tu sitio'
type: 'aplicaciones'
tags: ["telegram", "web", "online", "sitio", "mi", "tu", "instalar" , "gratis"]
category: ["Aplicaciones"]
img: 'https://i.postimg.cc/TYsyTXLM/image.png'
authors: ["PatoJAD"]
---

Ya hablamos con anterioridad sobre nuestra instancia de Telegram para todos los usuarios. Y como mencionamos en aquella oportunidad es muy simple para todos aquellos que quieran levantar una instancia. Por eso mismo, hoy, vamos a ver el paso a paso de cómo debemos realizar nuestra propia instancia a partir de la instancia.

{{< link text="Articulo de Telegram Web" url="https://patojad.com.ar/aplicaciones/2020/12/telegram-web-en-tu-sitio-web/" >}}

## Video

Lo más cómodo para esto es armar un video donde puedan ver paso a paso como realizarlo por eso mismo les dejo el video de como poder hacerlo. Y abajo los comandos que probablemente necesiten.

{{< youtube code="UFaWdrHbT54" >}}

## Clonar Proyecto

Lo primero es clonar el proyecto, para lo cual vamos a tener que tener instalado git en nuestra distro. Teniendo esto abrimos la terminal y utilizamos el siguiente comando.

    git clone https://gitlab.com/patojad/telegram.git

Una vez terminado el proceso vamos a ver una carpeta llamada telegram donde debemos editar los datos que mencionamos en el video

## Crear ID y Hash de Telegram

{{< img src="https://i.postimg.cc/WbsNYLC9/image.png" >}}

Para poder crear la ID de telegram y el hash necesarios, debemos ingresar en el sitio que dejaré a continuación para poder crearlos. Recuerden que es importante crearlo correctamente y para esto es necesario que tengan una cuenta de Telegram (Pero si estan aca seguramente la tengan)

{{< link url="https://my.telegram.org/" text="My Telegram" >}}

## Modificar ID y Hash de Telegram

Los datos obtenidos debemos reemplazarlos en el archivo llamado .env que se encuentra en la carpeta clonada recientemente.

En caso de no reemplazar la instancia funcionará como una bifurcación de la instancia de esta comunidad.

## Subirlo

Para subirlo debemos utilizar el siguiente comando, la primera vez, para poder subirlo. Recuerden reemplazar la URL por la de su repositorio. En caso de tener dudas revise nuevamente el video que muestra dónde obtener estos datos.

    git remote rename origin old-origin
    git remote add origin https://gitlab.com/JoaquinDecima/ejemplo.git
    git push -u origin --all

## Novedades de la instancia

{{< img src="https://wwwhatsnew.com/wp-content/uploads/2020/12/captura11-1-730x420.jpg" >}}

Llegamos a la inclusion de las salas de voz y los chat de voz privados

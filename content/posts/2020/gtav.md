---
title: 'Instalar GTA V en Linux'
date: '2020-05-18 08:27:00'
description: 'Seguramente ya tenes el GTA V en tu cuenta de Epic. Ahora toca instalarlo en Linux y ponerse a disfrutar.'
type: 'juegos'
tags: ['steam', 'proton', 'gta', 'v']
category: ['Juegos', 'Linux']
img: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg'
authors: ['PatoJAD']
---

Como muchos saben estos dias se estuvo entregando el GTA V gratis en la Epic Store. Es un juego bastante bueno aunque debo admitir que cuando salió se esperaba mas de él, sin embargo logró conformar a la gente e incluso el anuncio de que este juego se estaba regalando fue suficiente como para tirar los sitios de Epic Games.

Como podemos ven {{< textlink text="en la página de protondb" url="https://www.protondb.com/app/271590" >}} este juego funciona bien con Proton aunque con wine no tenemos la misma suerte, lamentablemente no suele funcionar a la primera e incluso si funciona no obtiene un buen rendimiento (Si lo hiciste funcionar en wine y con buen rendimiento enséñanos porque no lo logramos)

Por lo cual queremos compartir con ustedes lo que un usuario de reddit nos trae para que podamos instalar este hermoso juego y jugarlo casi sin problemas.

> Pasé bastante tiempo para que funcione con Wine / Proton, así que pensé en compartir mi experiencia aquí. Esperemos que sea útil para otros.

**Requisitos:** Steam con proton instalado, winetricks, protontricks y wine

## Crea una cuenta y reclama el GTA V gratis

Si aun no tenes el juego, **todavía estás a tiempo**, quedan algunos días para reclamarlo tienes aun hasta el 21 de mayo, así que si no tienes cuenta puedes registrarte, activar la autenticación en 2 pasos y reclamar el juego en {{< textlink text="Epic Games" url="https://www.epicgames.com/" >}}.

## Descargue e instale Epic Games Launcher

Descargue el iniciador e instálelo. Puede usar un prefijo de vino por separado si lo desea. Puede obtener un error, esto se resuelve utilizando el argumento `-SkipBuildPatchPrereq` en el iniciador.

El lanzador **no** funciona con dxvk, hay muchos parpadeos que lo hacen inutilizable. Para solucionarlo, puede usar el argumento `-opengl` para forzar el iniciador al modo opengl. Esto requiere que dotnet48 esté instalado en el wineprefix con winetricks.

## Agregue Epic Games Launcher como un juego que no sea steam a Steam

Esto es necesario porque Rockstar Games Launcher no funciona en wine o en wine staging en este momento (al menos no lo hace para mí). Por alguna razón, los cursores van debajo de la ventana, lo que hace que sea imposible completar la instalación del iniciador de Rockstar Games.

Sin embargo, funciona bien en `>=proton-5.0`. Por lo tanto, agregamos Epic Games Launcher que acabamos de instalar en steam: 'Juegos'->'Agregar juegos que no sean de steam a mi biblioteca'.

Actualmente hay un error en Steam donde una ruta que contiene espacios no se analiza correctamente al agregar un juego que no sea Steam. Por lo tanto, después de agregar el juego, haga clic derecho en la biblioteca y seleccione 'Propiedades'. Asegúrese de que "Destino:" esté configurado en la ruta correcta, y que "Establecer opciones de inicio" esté configurado en `-opengl` (Si la ruta contenía espacios, la parte de la ruta después de que el espacio termine en las opciones de inicio, si esto es el caso, límpielo y agregue `-opengl`).

Además, seleccione "Forzar el uso de una herramienta de compatibilidad específica de Steam Play" y elija `Proton 5.0-7`. Por alguna razón, no guardó correctamente la configuración para mí, por lo que es posible que deba volver a abrir el menú de propiedades y confirmar que todo esté configurado correctamente.

## Add dotnet48 to the proton prefix

Inicie el iniciador a través de Steam una vez, obtendrá una pantalla negra después de iniciar sesión. Esto se debe a que el argumento `-opengl` no funciona sin dotnet48. Así que cierre el iniciador ('Salir' en la bandeja del sistema). Y luego use `protontricks -s <nombre del 'juego que no sea steam' en la biblioteca de steam>`, esto debería devolver algo como esto:

    % protontricks -s GTA
    Found the following games:
    Non-Steam shortcut: GTA V (2677306004)

    To run protontricks for the chosen game, run:
    $ protontricks APPID COMMAND

    NOTE: A game must be launched at least once before protontricks can find the game.

Tome nota de la ID del juego, la usamos para instalar dotnet48 en el prefijo de protones correcto, por ejemplo:

    protontricks 2677306004 dotnet48

Una vez hecho esto (hay algunos clics manuales y aceptación de los términos involucrados), inicie Epic Games Launcher desde steam nuevamente. Esta vez debería funcionar.

## Descarga el juego desde el Lanzador de Epic Games

El proceso de descarga de Epic es simple, basta con dirigirnos a nuestra biblioteca y seleccionar el juego que queremos instalar. Una vez seleccionado podemos simplemente instalarlo. En este caso tiene que descargar casi 100GB por lo cual puede demorar un poco dependiendo de la velocidad de internet.

## Ejecuta el juego una vez

Una vez que se realiza la descarga, presiona iniciar en el Lanzador de Epic Games para iniciar el juego. Esto debería iniciar el proceso de instalación del Lanzador de Rockstar Games (Aquí es donde me quedé atascado usando wine (-staging) en lugar de protón, el cursor va debajo de la ventana de instalación y no puedo hacer clic en el botón "Inglés"). Una vez que esto se haya completado, Rockstar Games Launcher intentará lanzar el juego, fallará (al menos lo hizo para mí). Sin embargo, si vuelve al Lanzador de Epic Games e intenta nuevamente, debería funcionar.

## Disfrutar

El juego ahora debería comenzar y ser jugable (se te pedirá que inicies sesión con una cuenta de Rockstar Social Club). Para mí, la configuración de gráficos se estableció en las opciones más bajas, incluida la resolución. Entonces quizás tengas que modificar eso un poco

---

Desde ya y dia a dia agradecemos a todos los usuarios que colaboran para que todos podamos disfrutar de todos los juegos sin problemas.

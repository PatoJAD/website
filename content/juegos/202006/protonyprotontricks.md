---
title: "Como configurar Proton con Protontricks"
date: "2020-06-18 08:04:00"
description: "Protontricks, las proteinas que llevan a Proton al siguiente nivel y mejoran su compatibilidad"
type: "juegos"
tags: ["proton", "tricks", "protontricks", "steam", "valve", "juegos"]
category: ["Juegos"]
img: "https://1.bp.blogspot.com/-gSSHj_KzOIw/XXzw9CggoZI/AAAAAAAAdbM/I72Rp8sGBTINNYUqFtWt2CPh3ptLePJagCLcBGAsYHQ/s1600/Steam_banner.png"
authors: ["PatoJAD"]
---



**Proton** es la propuesta de Steam para ejecutar juegos de Windows desde Linux, pero no deja de ser un Wine optimizado por Valve y con una lista de con una lista de compatibilidad que va creciendo poco a poco.

Muchos conocen Winetricks, una herramienta *imprescindible* para tunear Wine que nos ha facilitado las cosas entre otras alternativas como PlayOnLinux.


{{< img src="https://1.bp.blogspot.com/-aKkpJFMZfKk/XXzj8U5jyzI/AAAAAAAAdbA/Na65dUYJHigRbZ7_OKJoubCC7qaLAWxmwCLcBGAsYHQ/s320/Steam.png" >}}


Pero ¿y si pudiéramos tener una herramienta parecida a Winetricks pero con perfiles al estilo de PlayonLinux dentro de Steam?

Claramente ya alguien se hizo esta pregunta, la compartió y diseño una respuesta: **Protontricks** es la respuesta para hacer funcionar esos juegos que aún no están soportados de forma oficial por Steam.




## Instalando Protontricks



Para usar **Protontricks** es necesario instalar algunas herramientas primero, así como **Winetrick**, entre otras cosas. También es altamente recomendable que Instales y/o **actualices los controladores de la GPU y Vulkan para mejor rendimiento**.

Para arrancar vamos a instalar *PIP*, *Git* y *Winetricks* en primer lugar, esto lo vamos a hacer de la siguiente forma:



    sudo apt install python3-pip python3-setuptools python3-venv git winetricks



A continuación vamos a Instalar Pipx. No es estrictamente necesario pero si es muy recomendado y en esta ocasión vamos a usarlo.



    python3 -m pip install --user pipx
    ~/.local/bin/pipx ensurepath



Para continuar vamos a *cerrar la terminal y la volvemos a abrir* es necesario para que se apliquen los paths. A continuación de esto vamos a instalar **Protontricks**



    pipx install protontricks
    pipx upgrade protontricks



Para instalar la última versión de desarrollo.



    pipx install --spec git+https://github.com/Matoking/protontricks.git protontricks




## Hora de Usarlo!



Primero instala el juego con **SteamPlay** (Proton). A continuación buscaremos el APPID de la siguiente forma.



    protontricks -s JUEGO



Esto nos mostrará la APPID de la siguiente forma:



    Found the following games:
    JUEGO (NUMERO_APPID)



Ahora instalamos los componentes necesarios para hacer funcionar ese juego como por ejemplo DirectX9.



    protontricks APPID d3dx9 d3dcompiler_43 win10



Listo, con eso sería todo en principio, aunque hay que tener en cuenta que como sucedía en Wine, cada juego puede llegar a necesitar algunas modificaciones o instalar ciertos elementos para que funcione correctamente.

Para saber que componentes debes instalar busca el juego en {{< textlink text="ProtonDB" url="https://www.protondb.com/" >}} para ver las configuraciones de otros usuarios.



Fuente: Mis Juegos en Linux



---



Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

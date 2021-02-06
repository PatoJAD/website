---
title: "Blurredfox un tema moderno para Firefox"
date: "2020-09-04 09:33:00"
description: "Hoy hablamos de los Windows Manager y en esta oportunidad mostramos un poco Awesome aunque la idea es entender en general su uso"
type: "estilo"
tags: ["firefox", "blur", "blurredfox", "navegador", "theme", "css"]
category: ["Estilo"]
img: "https://i.postimg.cc/WzGcnTHK/image.png"
authors: ["PatoJAD"]
---



En esta oportunidad quiero compartir un theme para nuestro firefox que nos permitirá darle un mejor estilo para lucirlo en nuestros viernes de escritorios.


{{< img src="https://i.postimg.cc/NF7ZXbyv/image.png" >}}



## Requisitos



* El último Firefox
* Compositor con soporte para desenfoque *(opcional)*



*En caso de que el compositor no soporte blur, nosotros veremos el theme totalmente transparente, en este caso podemos elegir colores...*




## Notas



En este caso el desarrollador nos deja unas notas recomendando el uso de awesome y “the glorius dotfiles” para unificar todo esto...



* 100% trabajando en linux.
* No probado en macOS.
* La transparencia está rota en Windows 10 (tiene fallas gráficas como parpadeo). El esquema de color sólido puede funcionar.
* No, la barra de título vertical no está incluida.
* Cambie a Linux, luego use AwesomeWM para lograr esta gloria.




## Notas antes de ejecutar el script:



* Si tiene varias compilaciones de Firefox, el script aún se ejecutará sin problemas. Solo asegúrate de pasar tu compilación de Firefox de destino.
* Si usted o su compilación de Firefox tienen un perfil múltiple, el script devolverá un error. ¡Asegúrate de tener solo uno!
* Es recomendable comprobar primero el script antes de ejecutarlo.
* Necesitas bash para ejecutarlo.
* Si tiene una carpeta de Chrome existente, el script hará una copia de seguridad en el directorio de su perfil.
* El script moverá un archivo llamado user.js que contiene todas las preferencias necesarias para que funcione blurfox. Se hará una copia de seguridad del existente.
* Si el script de instalación no funciona, no dude en enviar un issue o Pull request al git del proyecto.




## Instalacion



En esta oportunidad voy a hablar solo de la instalación en GNU/Linux sin embargo puedes encontrar la instalación en otros sistemas operativos en su propio git.

Ejecute el siguiente script. Si está utilizando una compilación diferente como nightly, beta, etc., asegúrese de reemplazar el 'estable' con la compilación de Firefox que está usando. Si se deja vacío, se establecerá de forma predeterminada en estable.



    # Available parameters:
    # stable - Firefox Stable Build
    # dev - Firefox Developer Edition
    # beta - Firefox Beta
    # nightly - Firefox Nightly
    # esr - Firefox Extended Support Release

    # Examples:

    # Stable build's profile
    curl -fsSL https://raw.githubusercontent.com/manilarome/blurredfox/script/install.sh | bash -s -- stable

    # Nightly build's profile
    curl -fsSL https://raw.githubusercontent.com/manilarome/blurredfox/script/install.sh | bash -s -- nightly



Después del mensaje de confirmación de que el tema se instaló correctamente, abra Firefox. Cambie el esquema de colores en:



**Open Menu > Customize > Change colorscheme**



En caso de que esto no funcione no te des por vencido puedes intentarlo manualmente col guia realizada por el propio desarrollador y esto lo puedes ver en su git.


{{< link text="Repositorio y Guia" url="https://github.com/manilarome/blurredfox" >}}



---



Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

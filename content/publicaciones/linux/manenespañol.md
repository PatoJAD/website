---
title: "Poner las paginas de man en español"
date: "2019-01-15"
description: "Manual de Linux"
type: "linux"
img:  "https://1.bp.blogspot.com/-4_wiFDX5KH4/XDdXcf0CVNI/AAAAAAAAem4/OmohUYH21-4n07RIxsNZn0b60go5CsDggCLcBGAs/s640/man_patojad.png"
atname: "PatoJAD"
atdesc: "Desarrollador"
atimg: "https://patojad.gitlab.io/blog/img/perfil.jpg"
---

Ya hablamos de man y podes verlo {{< textlink url="https://patojad.gitlab.io/blog/publicaciones/linux/man/" text="aquí" >}}. Sin embargo muchas personas no tienen dominio del ingles o simplemente no quieren estar traduciendo todo constantemente. Para esas personas les traigo una forma de poner las paginas de man en español, antes de iniciar con esto debo aclarar que solo estará en español lo que tiene una traducción. Puede que algunas cosas no dispongan este idioma y lo veamos en inglés. En dicho caso se puede colaborar con la traducción.

### Iniciemos

Lo primero que debemos hacer es instalar las páginas de man en español. Esto se encuentra en dos paquetes, una las páginas básicas y el otro contiene todas las extras que eventualmente necesitaremos. Lo podemos hacer de la siguiente forma:

    sudo apt update
    sudo apt install manpages-es manpages-es-extra



Los paquetes son los mismos para cualquier distribución por lo cual solo debemos modificar el comando de instalación por el de nuestra distribución

Una vez finalizada la instalación puede ser que man no se encuentra aún en español, en ese caso debemos configurar el sistema correctamente para que tome el idioma español para man. Para esto debemos ejecutar el siguiente comando que nos permite realizar la configuración regional del sistema.

    sudo dpkg-reconfigure locales

Al ejecutarlo vamos a pasar por unos simples pasos guiados en nuestra terminal. Iniciando por un aviso en el cual se nos informa dónde vamos a ingresar.

{{< img src="https://1.bp.blogspot.com/-v55PU163PBg/XDtNPcdCcuI/AAAAAAAAero/VOAEy6SVn4g8cd3pwMptG647r4voHdF7ACLcBGAs/s640/consejos-para-configurar-los-locales_patojad.png" >}}

Seguido a esto vamos a tener que elegir la configuración regional que deseamos generar. Las imagenes fueron tomadas de un blog español por lo cual van a elegir las correspondientes a España, sin embargo nosotros elegimos la que corresponda dependiendo de donde vivamos.

{{< img src="https://4.bp.blogspot.com/-zYMVOM-5Y0U/XDtNne_Tj4I/AAAAAAAAerw/BBBdpBFAoMw0fSWuBaXMSaYeuItraYsCwCLcBGAs/s640/seleccionar-configuracion-regional-2_patojad.png" >}}

Ya seleccionado correctamente solo nos queda aplicar los cambios, para esto en la proxima ventana debemos seleccionar efectivamente cual queremos aplicar a nuestro sistema.

{{< img src="https://3.bp.blogspot.com/-4Z74uIayvog/XDtN7Fxs_lI/AAAAAAAAer4/-33UsE9oQD4aOcTgq_fqtIKChM5TxIB6gCLcBGAs/s640/aplicar-la-configuracion-regional_patojad.png" >}}

Y ahora efectivamente podemos comprobar que man se encuentra traducido al español. Puede que algunas paginas se encuentren en ingles dado que no tienen traducción. Aun así podemos asegurarnos de que la mayoría se encuentran en español.

{{< img src="https://1.bp.blogspot.com/-bpN2SYbXSSQ/XDzpUFyaEpI/AAAAAAAAeug/psbnzJC5JMkakbTg3kM7K5FO0I4C4IB2wCLcBGAs/s640/consejo_patojad.PNG" >}}

---
title: "Repara tu GRUB con Boot-Repair"
date: "2018-12-20"
description: "Una app que repara tu GRUB"
type: "linux"
tags: ["GRUB","Repair"]
category: ["Linux"]
img:  "https://i.postimg.cc/nzF9q5J8/Ubuntu-Grub-Console.png"
atname: "PatoJAD"
atdesc: "Desarrollador"
atimg: "https://patojad.gitlab.io/blog/img/perfil.jpg"
atbio: "Sobre mi no hay mucho para decir, me dedico a desarrollar en una empresa de telecomunicaciones, utilizo linux desde el 2012 y hace años que es mi sistema operativo main. Soy una persona que busca crecer profesionalmente sin dejar de divertirse y hacer lo que me gusta. Siempre digo que cuando un proyecto sale es importante agradecer, por lo cual les recomiendo a todos leer la seccion Agreadecimientos en la cual me tome un tiempito para poder agradecer a todos y cada uno de los que hicieron posible todo esto."
---


Hoy vamos a ver como repararlo con Boot-Repair, para eso debemos instalarlo de la siguiente forma desde cualquier live que tengamos

{{< img src="https://i.postimg.cc/L57qK8ZR/boot-repair-tutorial-grub-linux-windows.png" >}}

Boot-Repair es una sencilla herramienta que se utiliza para reparar los problemas de arranque del GRUB. Funciona en distribuciones Debian y derivadas, como Ubuntu, Linux Mint o Elementary OS. Sin embargo, esto no es ningún problema, ya que se suele utilizar desde un Live-CD. Con un Live de Ubuntu es posible recuperar el grub de cualquier distribución. Es muy fácil de utilizar, ya que con unos cuantos clicks es posible reparar la configuración de arranque de nuestro equipo. Por supuesto, también existen muchas configuraciones avanzadas, pero no suelen ser necesarias.

Para instalar Boot-Repair añadimos el repositorio mediante PPA y luego actualizamos el sistema.


    sudo add-apt-repository ppa:yannubuntu/boot-repair
    sudo apt-get update
    sudo apt-get install boot-repair


El funcionamiento básico de Boot-Repair es muy sencillo. Al abrirlo, veremos una ventana con dos opciones y simplemente haremos click en reparación recomendada. El programa se pondrá a funcionar y, en la mayoria de los casos, solucionará los problemas de nuestro GRUB.

Por lo general, esto suele funcionar sin mayor inconveniente, pero si por alguna circunstancia no lo hace, es posible realizar una configuración avanzada:

{{< img src="https://i.postimg.cc/RV661Kj0/boot-repair-tutorial-grub-linux-windows-2.png" >}}

Aqui podemos cambiar el tiempo de espera de arranque o reparar el sistema de archivos, además de reinstalar el grub. En la siguiente pestaña es posible seleccionar el Sistema Operativo que queremos que arranque por defecto:

{{< img src="https://i.postimg.cc/8CHjkHrZ/boot-repair-tutorial-grub-linux-windows-3.png" >}}

A menos que se le especifique lo contrario en la última pestaña, al acabar de reparar el arranque se generará un log con el resultado, que suele ser satisfactorio.

{{< img src="https://geekytheory.com/wp-content/uploads/2015/09/boot-repair-tutorial-grub-linux-windows-1.png" >}}

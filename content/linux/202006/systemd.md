---
title: "SystemD ¿Solucion o Problema?"
date: "2020-06-26 10:46:00"
description: "Si SystemD es una solución yo prefiero el problema, realmente SystemD no es de mi agrado y te cuento ¿por que?, Ahora es tu turno de contarme que pensas... "
type: "linux"
tags: ["systemd", "non", "solucion", "problemas", "distro", "sin", "linux"]
category: ["Linux"]
img: "https://linuxforallsite.files.wordpress.com/2017/09/tux_system.jpg"
authors: ["PatoJAD"]
---

{{< br >}}
{{< img src="https://nosystemd.org/img/nosystemd.png" >}}
{{< br >}}

Cuando escribo mis artículos trato de no ser fanático, incluso intento explicar mis puntos de vistas y comprender las personas que piensan diferente, en este caso la idea es explicar un poco el motivo por el cual yo **no apoyo SystemD** y para hacerlo me voy a apoyar en otro sitio que obviamente se tomó el tiempo de hacer todo el trabajo que no hice yo…

Mi idea no es generar odiadores de systemd ni mucho menos, ni tampoco voy a ser extremista de pedir que nadie lo use (a muchos no les importa) Pero creo que sí es importante entender que SystemD no es algo que este muy bueno para nuestros equipos y **facilitando esta información cada uno es dueño de sus decisiones…**

{{< br >}}
{{< br >}}

## ¿Que es systemd?

{{< br >}}

*SystemD* afirma ser un reemplazo bueno y moderno para **SysVinit**, un llamado *demonio* init (o init para los amigos). Por lo general, el demonio init es el primer proceso generado por el núcleo y, por lo tanto, tiene el **PID** #1 y es responsable de generar otros demonios que son necesarios para que el sistema operativo funcione, por ejemplo, redes, cron, syslog, etc.

{{< br >}}
{{< img src="https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2018/05/systemd.png" >}}
{{< br >}}

Ahora en criollo el init es el primer proceso y **se encarga de que los demás inicien**... Esto es muy importante la función del init es que lo demás inicie, un policía atrapa delincuentes, un bombero apaga incendios, un init inicia otros procesos…

{{< br >}}
{{< br >}}

## ¿Solución o Problema?

{{< br >}}

SystemD *intenta* solucionar dificultades para los desarrolladores de linux, pero en su intento de hacer eso termino volviendo al sistema en algo totalmente dependiente y peligroso… Explico con un ejemplo…

**Supongamos** que nuestro sistema operativo es una ciudad… Y la policía se llama SystemD *(Porque se pone la gorra)* y luego existen otros procesos u otras *“cosas”*. Cada vez que los bomberos quieren salvar una vida dependen de que la policía (SystemD) les diga que si… Imaginemos el caos de que la policía no está disponible un tiempo… Sería el caos y media ciudad se prendería fuego…

Ahora existen otras ciudades donde los policías se implementan de otra forma (alternativas a systemd) y aquí nadie tiene que preguntarle a la policía nada, incluso una vez que la policía reconoció al cuartel de bomberos lo dejan cumplor sus funciones sin mas… Imaginence lo eficiente que es esto…

{{< br >}}
{{< br >}}

## Alternativas a SystemD

{{< br >}}

* SysVinit
* OpenRC
* Upstart
* InitNG
* cinit
* runit
* minit

{{< br >}}
{{< br >}}

## Como eliminar SystemD

{{< br >}}

De momento no realize ningun tutorial, sin embargo existen sitios donde explican de una forma impecable como liberarse de este *demonio* (al que entendió entendió) y por lo cual voy a recomendar un sitio que explica como hacerlo

{{< br >}}

{{< link text="Como Cambiar SystemD" url="https://wiki.ubuntu.com/SystemdForUpstartUsers#Permanent_switch_back_to_upstart" >}}

{{< br >}}
{{< br >}}

## ¿Más Fácil?

{{< br >}}

Muchos no queremos ponernos a instalar y sabemos que esto puede generar errores así que existen otras alternativas que son más simples y voy a nombrar las que yo use y recomiendo…

{{< br >}}
{{< br >}}

#### Devuan

{{< br >}}
{{< img src="https://i.blogs.es/bed4ed/devuan-jessie-screenshot/1366_2000.png" >}}
{{< br >}}

Se ve a simple vista, devuan es el debian sin SystemD y en mi experiencia es uno de los más limpios y rápidos. La instalación no es difícil, pero tampoco es linda, su instalador es simple pero feo estéticamente… Esto puede generar algún rechazo al inicio pero es una opción impecable…

{{< br >}}
{{< br >}}

#### Antix

{{< br >}}
{{< img src="https://i.ytimg.com/vi/B0NmniRxCpg/maxresdefault.jpg" >}}
{{< br >}}

Antix es el revividor de ordenadores, está basado en Debian pero sin systemd (especie de devuan) Tiene escritorios como fluxbox que es extremadamente liviano y esta distro apenas llega a los 300 mb iniciados (con los conkys y todo eso..)

{{< br >}}
{{< br >}}

#### MX Linux

{{< br >}}
{{< img src="https://www.muylinux.com/wp-content/uploads/2019/05/mxlinux183.jpg" >}}
{{< br >}}

Esta es una distro intentando ser el Mint del mundo SystemD, también usa Debs y trae muchas apps preinstaladas y configuradas para simplificar al usuario final. Si bien no tiene relación alguna con Mint es una linda comparación para entender a quien va Orientado. Sin embargo desde mi punto de vista es una distro muy cargada con muchas apps.

{{< br >}}
{{< br >}}

#### Artix

{{< br >}}
{{< img src="https://i0.wp.com/entornosgnulinux.com/wp-content/uploads/2019/03/Calamarares.jpg" >}}
{{< br >}}

Si sos mas del palo de ARCH Artix es para vos, desde mi punto de vista es la mejor distro, rápida y una vez instalado KDE (en mi caso me gusta ponerle KDE) queda impecable, la instalacion es mas al estilo de manjaro porque es muy simple.

{{< br >}}
{{< br >}}

#### Mención Especial

{{< br >}}
{{< img src="https://proyectotictac.files.wordpress.com/2020/04/pantallazo-menu-milagros-2.0.png" >}}
{{< br >}}

Este último no es una distro en si, o al menos eso aclara en su sitio, pero para mi vale mucho la pena dedicarle un tiempo porque es magnífica y está hecho por una de las personas mas importantes en este mundo de Linux hispanohablante. Hablo nada más ni nada menos de **MilagrOS** la cual podemos ver en su web.

{{< br >}}
{{< br >}}

## Mi punto de vista

{{< br >}}

Existen alternativas y mucho se nota en el rendimiento… Pero cada cual debe buscar su propia opinión y formar su opinión. Ahora te toca contarnos tu punto de vista y que distro recomendarias vos...

{{< br >}}
{{< link url="https://nosystemd.org/" text="Mas info" >}}
{{< br >}}

---

{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

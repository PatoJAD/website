---
title: 'Lo que la Gente opina sobre los inits'
date: '2019-01-30'
description: 'Algunos de los diversos gestores de inicio que existen en GNU/Linux'
type: 'linux'
tags: ["linux","init"]
category: ["Linux"]
img : 'https://4.bp.blogspot.com/-GcuUAFmNOb8/XFGtrP7j_uI/AAAAAAAAe-A/TBFfAsBqfekgREOgLZI8Gu5Cig8hsklDACLcBGAs/s640/init-script-tux_patojad.png'
atname: "PatoJAD"
atdesc: "Desarrollador"
atimg: "https://patojad.gitlab.io/blog/img/perfil.jpg"
atbio: "Sobre mi no hay mucho para decir, me dedico a desarrollar en una empresa de telecomunicaciones, utilizo linux desde el 2012 y hace años que es mi sistema operativo main. Soy una persona que busca crecer profesionalmente sin dejar de divertirse y hacer lo que me gusta. Siempre digo que cuando un proyecto sale es importante agradecer, por lo cual les recomiendo a todos leer la seccion Agreadecimientos en la cual me tome un tiempito para poder agradecer a todos y cada uno de los que hicieron posible todo esto."
---

El día de ayer nuestro grupo de telegram inicio con una buena premisa dada por un usuario. La cual se merece no ser debatida sino que tambien tener una digna introducción!

>Voy a lanzar un tema, si os parece bien.... ¿Hasta qué punto veis factible un paso atrás en los init?
systemD no termina de convencer y me he planteado esto tras ver el auge bestial que está teniendo MX Linux que como sabéis viene con systemD instalado pero desactivado por defecto y arrancando sistema con sysVinit....

A lo cual mi respuesta fue...

>Desde mi punto de vista no es un paso atrás, es darse cuenta que un camino que se eligió no era el mejor y corregirlo, aunque signifique tirar todo el código a la basura...

Para iniciar a esto debemos saber que es un init y cuales existen (o al menos algunos de los que existen y se usan) para saber de que estamos hablando!

Según wikipedia el init se define como "En sistemas tipo Unix, init (abreviatura de initialization) es el primer proceso en ejecución tras la carga del kernel y el que a su vez genera todos los demás procesos. Se ejecuta como demonio y por lo general tiene PID 1."

### INI
El demonio init tradicional es estrictamente síncrono, bloqueando futuras tareas hasta que la actual se haya completado. Sus tareas deben ser definidas por adelantado, y solo pueden ser ejecutadas cuando el demonio init cambia de estado (cuando la máquina se arranca o se apaga). Esto hace que no sea capaz de manejar de forma elegante varias tareas en computadoras de escritorio modernas, incluyendo:

* La conexión o desconexión de una memoria USB y otros medios de almacenamiento portables / dispositivos de red mientras la máquina está arrancada.
* El descubrimiento y exploración de nuevos dispositivos de almacenamiento, sin bloquear el sistema, especialmente cuando un disco puede no encenderse hasta que este es explorado.
* La carga de firmware para un dispositivo, lo cual podría tener que realizarse después de sea detectado pero antes de que sea utilizable.


### SYSTEMD

{{< img src ="https://4.bp.blogspot.com/-VombDNPLwK0/XFGtrP9kdlI/AAAAAAAAe98/BM6k6FYR3S43R9CQ5E8o8jDGE9pOb38IACEwYBhgL/s640/logo-systemd_patojad.png" >}}

Systemd es un sustituto para el Init de Linux. Está hecho para proveer un mejor framework para expresar las dependencias del servicio, permite hacer más trabajo paralelamente al inicio del sistema y reducir la sobrecarga del shell.

Comparado con System V init, que es utilizado por la mayoría de las distribuciones anteriores, systemd puede tomar ventaja de nuevas técnicas:


* Los servicios de activación de sockets y la activación de buses, que conduce a una mejor paralelización de servicios independientes.
* cgroups se utilizan para realizar un seguimiento de los procesos de servicio, en lugar de PIDs. Esto significa que los demonios no pueden “escapar” de systemd aunque estén doblemente-bifurcados.

systemd es sólo para Linux por diseño, ya que depende de características como cgroups y fanotify. Según mi punto de vida es un mal concepto de programacion el asignarles mas responsabilidades que las de iniciar el sistema, el tener el control sobre todo lo que pasa no es una buena practica a nivel general. Es mejor que cada uno cumpla su responsabilidad sin depender ni necesitar a terceros que no aporten funcionalidades. Si bien es la mas usada por las distribuciones, desde mi punto de vista es la peor.

### UPSTRAT

{{< img src ="https://3.bp.blogspot.com/-CIxfP-QfcjA/XFGtrMJIjYI/AAAAAAAAe-E/asPKNhS7O5gF2qnn06tWyaMjOm44zvtKgCEwYBhgL/s640/Logo_for_Upstart_daemon_patojad.png" >}}

Este remplazo a ini esta basado en eventos. Trabaja de forma asíncrona supervisando las tareas mientras el sistema esta arrancado. También gestiona las tareas y servicios de inicio cuando el sistema arranca y los detiene cuando el sistema se apaga.

La fácil transición y la perfecta retrocompatibilidad con sysvinit fueron objetivos explícitos en el diseño. Por lo tanto, Upstart es capaz de ejecutar scripts de sysvinit sin modificaciones. De esta manera se diferencia de la mayoría de reemplazos de init, que normalmente requieren una transición completa para funcionar correctamente y no son compatibles con un entorno mixto formado por métodos de arranque tradicionales y nuevos.

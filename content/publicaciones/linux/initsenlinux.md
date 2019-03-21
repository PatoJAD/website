---
title: 'Lo que la Gente opina sobre los inits'
date: '2019-01-30'
description: 'Algunos de los diversos gestores de inicio que existen en GNU/Linux'
type: 'linux'
tags: ["linux","init"]
category: ["Linux"]
img : 'https://i.postimg.cc/cCnN5xRV/init-script-tux-patojad.png'
authors: ["PatoJAD"]
---

El día de ayer nuestro grupo de Telegram inicio con una buena premisa dada por un usuario. La cual se merece no ser debatida sino que tambien tener una digna introducción!.

>Voy a lanzar un tema, si os parece bien.... ¿Hasta qué punto veis factible un paso atrás en los init?.
SystemD no termina de convencer y me he planteado esto tras ver el auge bestial que está teniendo MX Linux que como sabéis viene con SystemD instalado pero desactivado por defecto y arrancando sistema con sysVinit....

A lo cual mi respuesta fue...

>Desde mi punto de vista no es un paso atrás, es darse cuenta que un camino que se eligió no era el mejor y corregirlo, aunque signifique tirar todo el código a la basura...

Para iniciar a esto debemos saber que es un init y cuales existen (o al menos algunos de los que existen y se usan) para saber de que estamos hablando!

Según Wikipedia el init se define como "En sistemas tipo Unix, init (abreviatura de initialization) es el primer proceso en ejecución tras la carga del kernel y el que a su vez genera todos los demás procesos. Se ejecuta como demonio y por lo general tiene PID 1."

### init
El demonio init tradicional es estrictamente síncrono, bloqueando futuras tareas hasta que la actual se haya completado. Sus tareas deben ser definidas por adelantado, y solo pueden ser ejecutadas cuando el demonio init cambia de estado (cuando la máquina se arranca o se apaga). Esto hace que no sea capaz de manejar de forma elegante varias tareas en computadoras de escritorio modernas, incluyendo:

* La conexión o desconexión de una memoria USB y otros medios de almacenamiento portables / dispositivos de red mientras la máquina está arrancada.
* El descubrimiento y exploración de nuevos dispositivos de almacenamiento, sin bloquear el sistema, especialmente cuando un disco puede no encenderse hasta que este es explorado.
* La carga de firmware para un dispositivo, lo cual podría tener que realizarse después de sea detectado pero antes de que sea utilizable.


### SystemD

{{< img src ="https://i.postimg.cc/gk3xxdCS/logo-systemd-patojad.png" >}}

Systemd es un sustituto para el _init_ de GNU/Linux. Está hecho para proveer un mejor framework para expresar las dependencias del servicio, permite hacer más trabajo paralelamente al inicio del sistema y reducir la sobrecarga del shell.

Comparado con _System V_ init, que es utilizado por la mayoría de las distribuciones anteriores, SystemD puede tomar ventaja de nuevas técnicas:


* Los servicios de activación de sockets y la activación de buses, que conduce a una mejor paralelización de servicios independientes.
* _cgroups_ se utilizan para realizar un seguimiento de los procesos de servicio, en lugar de PIDs. Esto significa que los demonios no pueden “escapar” de SystemD aunque estén doblemente-bifurcados.

SystemD es sólo para GNU/Linux por diseño, ya que depende de características como _cgroups_ y _fanotify_. Según mi punto de vista es un mal concepto de programacion el asignarles mas responsabilidades que las de iniciar el sistema, el tener el control sobre todo lo que pasa no es una buena practica a nivel general. Es mejor que cada uno cumpla su responsabilidad sin depender ni necesitar a terceros que no aporten funcionalidades. Si bien es la mas usada por las distribuciones, desde mi punto de vista es la peor.

### upstart

{{< img src ="https://i.postimg.cc/YCkhgZkp/Logo-for-Upstart-daemon-patojad.png" >}}

Este remplazo a ini esta basado en eventos. Trabaja de forma asíncrona supervisando las tareas mientras el sistema esta arrancado. También gestiona las tareas y servicios de inicio cuando el sistema arranca y los detiene cuando el sistema se apaga.

La fácil transición y la perfecta retrocompatibilidad con sysvinit fueron objetivos explícitos en el diseño. Por lo tanto, Upstart es capaz de ejecutar scripts de sysvinit sin modificaciones. De esta manera se diferencia de la mayoría de reemplazos de init, que normalmente requieren una transición completa para funcionar correctamente y no son compatibles con un entorno mixto formado por métodos de arranque tradicionales y nuevos.

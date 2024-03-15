---
title: "Explorando SystemD en el Mundo Linux: Críticas, Realidades y Controversias"
date: "2024-03-15 18:34:00.00"
description: Explora SystemD en el mundo Linux, sus críticas y realidades. Descubre por qué algunos usuarios eligen alternativas y las controversias en torno a este sistema de inicio.
type: post
tags:
  [
    systemd,
    linux,
    sistema de inicio,
    críticas a systemd,
    alternativas a systemd,
    red hat,
    unix,
    openrc,
    seguridad del sistema,
    sysV,
    runit,
    init,
    systemctl,
    criticas,
    controversias,
    controvertido,
    realidad,
    defensa,
    explicacion,
    redhat,
    filosofia unix,
    filosofia,
    fedora,
    artix,
    arch,
    archlinux,
    ubuntu,
    debian,
    mx linux,
  ]
categories: [Linux, Aplicaciones, Seguridad]
img: https://i.postimg.cc/nrkJcP7Y/systemd.webp
authors: [PatoJAD]
---

En el vasto y diverso ecosistema de Linux, cada componente del sistema es objeto de discusión y opinión, y el sistema de inicio no es la excepción. **SystemD** ha sido un tema de controversia dentro de la comunidad, generando críticas y debates en línea. En este artículo, profundizaremos en qué es **SystemD**, su evolución, y las razones detrás de las críticas que ha enfrentado.

Ya escribi algunos articulos planteando los problemas de **SystemD** y las alternativas que existen, pero en esta ocasión quiero profundizar en el tema y explicar las razones de la resistencia que ha enfrentado **SystemD**. Y la explicacion de las cosas buenas que tiene, porque no todo es malo.

* [SystemD ¿Solucion o Problema?](/post/2020/06/systemd-solucion-o-problema/)
* [¿SystemD no es el problema? Respuesta a Zatiel](/post/2020/07/systemd-no-es-el-problema-respuesta-a-zatiel/)

## Desentrañando SystemD y su Rol como Sistema de Inicio

En el corazón de todos los sistemas basados en Linux se encuentra un sistema de inicio, el primer proceso que entra en acción después de arrancar el sistema operativo. Este proceso trabaja en segundo plano, gestionando servicios y procesos esenciales. En este contexto, **SystemD** se presenta como un sistema de inicio predominante en muchas distribuciones de Linux.

Iniciado en 2010 bajo el liderazgo de **Red Hat** y **Leonard Puttering**, **SystemD** nació con la intención de reemplazar soluciones existentes como **SysV** y **Upstart**. Su enfoque principal era mejorar el rendimiento del sistema, acelerar los tiempos de arranque y reducir el consumo de recursos. Rápidamente, se convirtió en el sistema de inicio predeterminado para distros populares como _Fedora_, _Arch Linux_, _Debian_ y _Ubuntu_, entre otras.

A pesar de su adopción generalizada, algunas distribuciones, como _Alpine Linux_, _MX Linux_, _[Void Linux](/post/2019/09/voidlinux-por-josé/)_, _[Artix](/post/2020/08/artix-linux/)_, _[MilagOS](/post/2020/06/instalcion-milagros/)_ y otras, han optado por no adoptar **SystemD**.

## Explorando las Razones de la Resistencia

{{< youtube id="crIeSArnZfo" >}}

### El Argumento del "Bloat"

Un argumento recurrente contra **SystemD** es su expansión progresiva hacia funciones que tradicionalmente eran gestionadas por servicios individuales. Esta acumulación de características ha llevado a críticas sobre su conformidad con la filosofía **UNIX**, que aboga por la simplicidad y la especialización de funciones.

Aunque **SystemD** mantiene su modularidad (recordemos qeu son varios mini-binarios especificos), su crecimiento ha llevado a la percepción de ser una solución monolítica. Además, su actualización periódica y la adición de nuevas funciones pueden traducirse en un mayor uso de espacio y recursos, lo que preocupa a aquellos que buscan eficiencia (hablando en kb de recursos).

### Dependencia Omnipresente y Restricciones de Opciones

**SystemD** se ha vuelto tan integral en muchos aspectos del sistema que su ausencia puede limitar la funcionalidad de otros componentes. Servicios como el inicio de sesión gráfico o la gestión de conexiones de red a menudo dependen de componentes de **SystemD**. Aunque es posible prescindir de él, las distribuciones que optan por no implementarlo deben buscar, proporcionar y mantener alternativas.

No podemos culpar a los desarrolladres de las aplicaciones por usar el set de herramientas que les provee **SystemD**. Sin embargo, esto puede ser un problema para aquellos que buscan una mayor diversidad de opciones. Aun asi, hay que entender que estos set de herramienta facilitan y simplifican el trabajo de los desarrolladores, permitiendoles enfocarse en la funcionalidad de sus aplicaciones.

### Red Hat como "Dueño" de SystemD

Otra crítica común se dirige al hecho de que **SystemD** es un proyecto de **Red Hat**. Aunque comenzó como un proyecto de esta compañía, actualmente propiedad de IBM, algunas voces expresan preocupación sobre el control que una entidad única puede tener sobre la dirección del sistema de inicio en Linux. Las recientes transformaciones en la gestión de la comunidad por parte de **Red Hat** han aumentado estas preocupaciones.

Aun asi, **SystemD** es un proyecto de código abierto, y su desarrollo está abierto a la participación de la comunidad. Además, la adopción de **SystemD** por parte de otras distribuciones, como Debian y Ubuntu, ha ayudado a mitigar estas preocupaciones dado que en la actualidad es un proyecto que va mas alla de **Red Hat**.

### Restricción de Opciones y Seguridad del Sistema

**SystemD** ha sido señalado como un factor que contribuye a la uniformidad en los sistemas Linux, restringiendo la diversidad de opciones. También se argumenta que su presencia crea un riesgo de seguridad, al ser un objetivo único para posibles ataques.

Sin embargo, defensores de **SystemD** contrarrestan estas preocupaciones destacando su integración con el kernel de Linux y su eficiencia. Aseguran que, aunque puede haber un riesgo potencial debido a su ubicuidad, la confianza en un proyecto bien mantenido y ampliamente utilizado puede superar estos desafíos. Y es una realidad que **SystemD** es un proyecto bien mantenido y ampliamente utilizado con un desarrollo activo.

## Conclusión

En resumen, las críticas hacia **SystemD** abordan aspectos que van desde la filosofía **UNIX** hasta preocupaciones sobre dependencias y seguridad. Aunque se presentan alternativas viables, la elección de utilizar **SystemD** o no a menudo se reduce a la conveniencia, eficiencia y preferencias de cada usuario.

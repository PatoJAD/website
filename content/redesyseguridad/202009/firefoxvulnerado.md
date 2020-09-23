---
title: 'Descubren una vulnerabilidad en Firefox'
date: '2020-09-23 09:24:00'
description: 'El fallo podría provocar que un atacante remoto en red local forzara la visita de una url.'
tags: ["seguridad", "firefox", "andorid", "vulnerabilidad"]
type: 'redesyseguridad'
category: ["redesyseguridad"]
img: 'https://i2.wp.com/unaaldia.hispasec.com/wp-content/uploads/2020/09/Captura-de-pantalla-2020-09-22-a-las-12.50.20.png?w=490&ssl=1'
authors: ["PatoJAD"]
---

{{< br >}}

El investigador de seguridad Chris Moberly, descubrió recientemente una vulnerabilidad en el navegador Firefox para **Android**, que permitiría a un **atacante remoto en red local forzar la visita de una url** en el navegador Mozilla Firefox.

{{< br >}}
{{< img src="https://i2.wp.com/unaaldia.hispasec.com/wp-content/uploads/2020/09/Captura-de-pantalla-2020-09-22-a-las-12.50.20.png?w=490&ssl=1">}}
{{< br >}}

El fallo está localizado en el protocolo **SSDP** en versiones Android 68.11.0 y anteriores. Este protocolo de red se utiliza para el descubrimiento de servicios de red e información relacionada con la presencia.

{{< br >}}
{{< br >}}

## ¿Que ocurre?

{{< br >}}

La versión vulnerable de Firefox envía periódicamente mensajes *broadcast* de descubrimiento SSDP, buscando dispositivos para que sean usados como pantalla secundaria.

{{< br >}}
{{< br >}}

## ¿Como se vulnera?

{{< br >}}

La explotación se lleva a cabo engañando al motor SSDP mediante un *intent*, estos *intent* permiten a los desarrolladores especificar acciones que pueden iniciar una actividad en otra aplicación. En este caso el engaño lanzará lo que se denominan identificadores uniformes de recursos (URI).

{{< br >}}
{{< link text="Mas información" url="https://gitlab.com/gitlab-com/gl-security/security-operations/gl-redteam/red-team-tech-notes/-/tree/master/firefox-android-2020" >}}
{{< br >}}

---

{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

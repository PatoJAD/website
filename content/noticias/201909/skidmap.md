---
title: 'Skidmap el nuevo virus de Linux'
date: '2019-09-20'
description: 'La principal característica de este malware consiste en que es capaz de ocultar el alto consumo de CPU realizado para minar criptomonedas.'
type: 'noticias'
tags: ["Virus","Maleware","Linux"]
category: ["Noticias"]
img: 'https://betanews.com/wp-content/uploads/2019/09/monero-mining.jpg'
authors: ["PatoJAD"]
---

Los criptominers actuales cada vez son más sofisticados. En este caso los investigadores de Trend Micro publicaron un reporte sobre este nuevo maleware, bastante avanzado, que recibe el nombre de skidmap. Básicamente funciona como un rootkit que es capaz de ocultar el uso de CPU y red, entre otras cosas, para que no nos demos cuenta de que se encuentra minando criptomonedas.

Claramente con este método nos quita una de las formas más importantes de detectar el minado de criptomonedas no consentido. Por más que nos esté consumiendo todo el CPU como suelen hacer no nos vamos a enterar por los monitores de sistema.

{{< br >}}
{{< publicidad >}}
{{< br >}}

Skidmap es un ejemplo de la alta complejidad de los criptominers actuales, el malware no solo carga modulos del kernel para mantener sus operaciones ocultas y enmascara lo que hace mostrando estadísticas de red y CPU falsas, sino que puede ser usado por los atacantes para ganar acceso total al sistema afectado.

{{< br >}}

## Una amenaza que persiste

{{< br >}}
{{< img src="https://www.ecestaticos.com/imagestatic/clipping/0bd/41e/0bd41ee8fbf02741fc7991a036e365c6/no-te-quemes-trucos-para-evitar-que-tu-ordenador-se-caliente-demasiado.jpg?mtime=1490973881" >}}
{{< br >}}

En el caso de Skidmap, este malware está incluso programado para reinfectar sistemas que ya hay sido desinfectados o restaurados. Trend Micro explica que es mucho más difícil de curar que otros malware porque Skidmap usa rootkits de módulos del kernel de Linux, de forma que pueden sobrescribir o modificar partes del kernel del sistema.

Las amenazas de minería de criptomonedas no solo afectan el rendimiento de un servidor o estación de trabajo, sino que también podrían traducirse en mayores gastos e incluso perturbar las empresas, especialmente si se utilizan para ejecutar operaciones críticas

{{< br >}}

## Que recaudos tener

{{< br >}}
{{< img src="https://i.pinimg.com/originals/32/d4/94/32d49491628b3f28c7a18a899f2affc6.png" >}}
{{< br >}}


Como ya habíamos hablado anteriormente en GNU/Linux si existen virus, hoy nuevamente lo estamos comprobando. Por lo cual caemos en la pregunta {{< textlink text="¿Usamos antivirus?" url="https://patojad.com.ar/aplicaciones/2019/01/antivirus-en-gnu/linux./" >}}. Más allá de la decisión de cada uno leyendo el post citado les recomiendo recordar lo que siempre decimos: La mayor vulnerabilidad es el ser humano (conocido como error de capa 8) y es siempre el eslabón más débil como {{< textlink text="el problema de la base de datos de la que hablamos ayer" url="https://patojad.com.ar/redesyseguridad/2019/09/se-filtran-datos-de-una-db/" >}}. Y es por eso que les recordamos:

* No utilizar sudo si no es requerido
* Descargar desde sitios de confianza
* No ejecutar todo como root
* De ser posible no usar pass root
* Y por supuesto siempre desconfiar de las fuentes no oficiales.

---
title: 'Como cambiar DNS de Windows 10'
date: '2023-06-27 10:06:00'
description: 'Vamos a ver una forma simple de modificar los DNS en Windows 10 y vamos a setear los de Cloudflare'
type: 'post'
tags:
    [
        'windows',
        'dns',
        'windows 10',
        'cloudflare',
        'configurar',
        'modificar',
        'cambiar',
        'setear',
        'config',
        'network',
        'red',
    ]
categories: ['Windows', 'Redes']
img: 'https://i.postimg.cc/JnLJc8K9/dnscloudwin.png'
authors: ['PatoJAD']
---

Cambiar los DNS de nuestro equipo es algo que deberiamos hacer siempre, ya que los DNS que nos provee nuestro ISP no son los mas rapidos y seguros. Por eso hoy vamos a ver como cambiar los DNS en Windows 10 y vamos a setear los de Cloudflare.

## ¿Qué es DNS?

El Sistema de nombres de dominio (DNS) es la guía telefónica de Internet. Mientras que las personas acceden a la información en línea a través de nombres de dominio como example.com, los ordenadores lo hacen utilizando direcciones del Protocolo de Internet (IP), cadenas únicas de caracteres alfanuméricos que se asignan a cada propiedad de Internet. El DNS traduce los nombres de dominio a direcciones IP para que los usuarios puedan acceder fácilmente a un sitio web sin tener que conocer su dirección IP.

{{< img src="https://www.cloudflare.com/img/learning/dns/what-is-1.1.1.1/dns-lookup.png" >}}

### ¿Qué es un solucionador de DNS?

Un solucionador de DNS es un tipo de servidor que gestiona la traducción "nombre a dirección", en la que una dirección IP se corresponde con un nombre de dominio y se envía de vuelta al ordenador que la solicitó. Los solucionadores de DNS también se conocen como solucionadores recursivos.

Los equipos están configurados para hablar con solucionadores de DNS específicos, que se identifican por dirección IP. Generalmente, la configuración la gestiona el Proveedor de acceso a Internet (ISP) del usuario en conexiones desde el hogar o inalámbricas, y un administrador de red en las conexiones desde la oficina. Los usuarios también pueden cambiar manualmente el solucionador de DNS con el que pueden comunicarse sus ordenadores.

## Video

{{< youtube id="hscNg112ll8" >}}

## DNS de cloudflare

Cloudflare tiene dos DNS publicos que son los mas rapidos y seguros del mundo hasta el momento

### ¿Qué hace que 1.1.1.1 sea más seguro que otros servicios de DNS públicos?

Algunos servicios de DNS son compatibles con DNSSEC. Aunque se trata de una buena práctica de seguridad, no protege las consultas de los usuarios de las propias empresas de DNS. Muchas de estas empresas recopilan datos de sus clientes de DNS para utilizarlos con fines comerciales, como la venta a anunciantes.

En cambio, `1.1.1.1` no hace minería de datos de los usuarios. Los registros se guardan durante 24 horas con el fin de eliminar errores y a continuación se purgan.

`1.1.1.1` también ofrece funciones de seguridad que no están disponibles en muchos otros servicios públicos de DNS, como la minimización del nombre de consulta. La minimización del nombre de consulta mejora la privacidad al incluir en cada consulta solo el mínimo de información necesaria para ese paso del proceso de resolución.

### ¿Qué convierte a 1.1.1.1 en el servicio de DNS recursivo más rápido?

La potencia de la red de Cloudflare da a `1.1.1.1` una ventaja natural en lo referente a entregar consultas de DNS rápidas. Ya que está integrado en la red de Cloudflare, que abarca 300 ciudades del mundo, los usuarios de cualquier parte del mundo obtienen una respuesta rápida de `1.1.1.1`.

Además, los centros de datos de la red tienen acceso a los millones de propiedades de Internet de la plataforma de Cloudflare, lo que hace que las consultas de esos dominios sean extremadamente rápidas. En general, el supervisor independiente de DNS DNSPerf clasifica `1.1.1.1` como el servicio de DNS más rápido del mundo:

{{< img src="https://www.cloudflare.com/img/learning/dns/what-is-1.1.1.1/query-speed.png" >}}

## Pasos a seguir

-   Abrimos el menu de inicio y vamos a `Configuracion`
-   Luego vamos a `Red e Internet` y seleccionamos `Cambiar opciones del adaptador`
-   Seleccionamos la red que estamos usando y hacemos click derecho y seleccionamos `Propiedades`
-   Seleccionamos `Protocolo de Internet version 4 (TCP/IPv4)` y hacemos click en `Propiedades`
-   Seleccionamos `Usar las siguientes direcciones de servidor DNS` y en `Servidor DNS preferido` ponemos:
    -   Para usar el generico de Cloudflare:
        ```batch
        1.1.1.1
        1.0.0.1
        ```
    -   Para usar el Bloqueo de Maleware de Cloudflare (Para Familias):
        ```batch
        1.1.1.2
        1.0.0.2
        ```
    -   Para usar el Bloqueo de Maleware y contenidos de Adultos de Cloudflare (Para Familias):
        ```batch
        1.1.1.3
        1.0.0.3
        ```
-   Hacemos click en `Aceptar` y listo

### Sumando IPv6

-   Seleccionamos `Protocolo de Internet version 6 (TCP/IPv6)` y hacemos click en `Propiedades`
-   Seleccionamos `Usar las siguientes direcciones de servidor DNS` y en `Servidor DNS preferido` ponemos:
    -   Para usar el generico de Cloudflare:
        ```batch
        2606:4700:4700::1111
        2606:4700:4700::1001
        ```
    -   Para usar el Bloqueo de Maleware de Cloudflare (Para Familias):
        ```batch
        2606:4700:4700::1112
        2606:4700:4700::1002
        ```
    -   Para usar el Bloqueo de Maleware y contenidos de Adultos de Cloudflare (Para Familias):
        ```batch
        2606:4700:4700::1113
        2606:4700:4700::1003
        ```
-   Hacemos click en `Aceptar` y listo

---

Fuente: https://developers.cloudflare.com/1.1.1.1/setup/windows/

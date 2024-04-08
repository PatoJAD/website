---
title: De VMware a una Infraestructura alternativa
date: "2024-04-06 10:34:00.00"
description: Descubre por qué muchas empresas están migrando de VMware a soluciones alternativas y cómo enfrentar este cambio en la infraestructura de TI.
type: post
tags:
  [
    vmware,
    vm,
    infraestructura alternativa,
    migración de vmware,
    migracion,
    virtualización,
    código abierto,
    ubuntu,
    openstack,
    kubevirt,
    kubernetes,
    nube,
    publica,
    nube publica,
    nube pública,
    VPS,
    vps,
    VPS en la nube,
    alta disponibilidad,
    vpsuniverse,
    vps universe,
    vps,
    universe,
  ]
categories: [Redes, Seguridad]
img: https://i.postimg.cc/yNBhyFpN/vmwarecompra.webp
authors: [PatoJAD]
---

Para proporcionar algo de contexto antes de profundizar en nuestro artículo, vale la pena recapitular brevemente la situación actual con **VMware** y las razones por las que muchas empresas están migrando a soluciones alternativas (incluso de código abierto, como aquellas basadas en infraestructura Ubuntu).

## ¿Por qué las empresas se están alejando de VMware?

**VMware** es un proveedor líder en el campo de la [virtualización](/post/2020/02/que-es-la-virtualizacion/), con aproximadamente el 45% de participación en el mercado. Muchas empresas han estado utilizando productos **VMware** desde hace décadas, y si bien sus herramientas son familiares y ampliamente difusas, también son costosas ya que se basan en tecnología propietaria.

Con la adquisición de **VMware** por parte de **Broadcom**, las preocupaciones existentes relacionadas con los costos y la dependencia de un único proveedor ocupan un lugar destacado en la agenda de muchos usuarios empresariales. Siguiendo las anteriores adquisiciones como por ejemplo las de **CA Technologies** y **Symantec**, los clientes experimentaron un aumento de precios, reducción de la inversión en innovación o desarrollo y la reducción o limitación del soporte.

## ¿Cómo seguir?

Con un escenario parecido, los clientes de **VMware** temen que suceda lo mismo con la reciente adquisición. En una encuesta realizada a más de 300 usuarios empresariales de **VMware** tras el anuncio de la adquisición, 451 Research encontró que el 40% de los encuestados se sienten inseguros después del trato. A la luz de estas preocupaciones, los actuales clientes de VMware ahora tienen varias opciones (afortunadamente).

### Seguir usando VMware

La primera opción es seguir usando **VMware**. Evitando la necesidad de migrar y volver a capacitar o entrenar a los usuarios y personal técnico en general, esta opción ofrece estabilidad, pero sacrifica flexibilidad, además eventualmente puede traer como consecuencia un alto costo total de propiedad a la vez que presenta algunos riesgos comerciales debido a cambios o evoluciones de la oferta de servicios tras la compra.

### La Nube Pública

Otra opción es pasar a una nube pública o **Public Cloud**. Estas plataformas dan a las empresas acceso a poderosas herramientas y a una arquitectura más moderna, pero a veces cuando se ejecuta con importantes cargas de trabajo y a largo plazo las nubes públicas pueden resultar muy costosas.

### Kubevirt y Kubernetes

La siguiente alternativa es utilizar **Kubevirt** para ejecutar temporalmente máquinas virtuales en **Kubernetes**. Si bien esta puede ser una buena solución intermedia o temporal antes de transformar y rediseñar por completo las cargas de trabajo, no es viable a largo plazo. **Kubernetes** está destinado a cargas de _trabajo sin estado_ (stateless), efímeras y escalables, pero aquellas cargas de trabajo que se ejecutan en las máquinas virtuales tradicionales tienen estado, son duraderas y difíciles de escalar, lo que convierte esta opción en algo poco práctico con el pasar del tiempo.

### Migrar a una solución de código abierto

La opción final y, en muchos casos, la más convincente es migrar o mover los servicios hacia otras soluciones de [virtualización](/post/2020/02/que-es-la-virtualizacion/) de infraestructura de código abierto con una empresa comercial que ofrezca una alternativa comercial (pero compatible con todos los estándares).

## Próximos pasos

En nuestro próximo artículo profundizaremos como **OpenStack** puede convertirse en una válida opción para dejar atrás VMware.

Si tu carga de trabajo puede ser redimensionada puedes optar por un VPS en la Nube de alto rendimiento, muchos proveedores privados pueden ofrecerte una amplia variedad de servicios como por ejemplo la gente de [VPSuniverse](https://plataforma.vpsuniverse.net/aff.php?aff=25).

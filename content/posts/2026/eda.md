---
title: "Arquitectura Orientada a Eventos (EDA) en 2026: Ventajas, Desventajas y Cuándo Usarla de Verdad"
description: "Descubre qué es realmente la Arquitectura Orientada a Eventos, sus ventajas reales, sus trampas y los casos donde SÍ y donde NO debes aplicarla. Experiencia de arquitecto en proyectos reales."
date: "2026-03-30 14:31:00.00"
type: video
videoId: BYARsHl0gSs
authors: ["PatoJAD"]
tags:
  [
    "arquitectura de software", "eda", "event driven architecture", "arquitectura orientada a eventos", "microservicios", "2026", rabbitmq, arquitectura, desarrollo backend, solution architect, nestjs, typescript, bun, ventajas eda, desventajas eda, casos reales eda
  ]
categories: ["Programacion", "Redes"]
img: "https://i.postimg.cc/9FQYbgpP/EDA.webp"
---

Como arquitecto de soluciones, una de las preguntas que más me hacen es: “¿cuándo paso de microservicios a EDA?”. Hoy te respondo de forma clara y sin hype.

## ¿Qué es realmente la Arquitectura Orientada a Eventos?

En EDA los servicios no se llaman directamente. En su lugar, **publican eventos** (“esto pasó”) y otros servicios los consumen si les interesa. Todo fluye a través de un **event bus** o broker.

Es como un tablero de anuncios: alguien pega un cartel y los interesados lo leen. Nadie llama por teléfono al que pegó el cartel.

## Ventajas (por qué me enamoré)

- Escalabilidad independiente  
- Resiliencia ante fallos  
- Desacoplamiento extremo  
- Facilidad para agregar nuevas funcionalidades  
- Asincronismo nativo

## Desventajas (la realidad que nadie te cuenta en las charlas)

- Mayor complejidad operativa  
- Debugging más difícil  
- Consistencia eventual (no inmediata)  
- Costo de infraestructura  
- Riesgo de sobreingeniería

## ¿Cuándo SÍ aplicarla?

Úsala cuando:
- Los procesos son naturalmente asíncronos
- Necesitás escalar partes del sistema por separado
- Los servicios deben evolucionar sin romperse mutuamente

## ¿Cuándo NO aplicarla? (regla de oro)

No la uses si:
- Tu sistema es pequeño y simple
- Necesitás respuestas inmediatas y consistencia fuerte
- El equipo todavía no domina sistemas distribuidos

**Comparación rápida con microservicios** [(ver el articulo anterior)](/post/2026/02/arquitectura-de-microservicios-2026-qué-es-ventajas-desventajas-y-casos-reales/):  
En microservicios los servicios se llaman entre sí. En EDA gritan al vacío y los demás escuchan. Ambas arquitecturas pueden convivir perfectamente.

## Dos casos reales donde la apliqué

### PickIt  
Teníamos escalabilidad rota y servicios tan acoplados que nadie entendía quién producía cada mensaje. Reorganicé todo creando conexiones únicas entre publishers y readers. El cambio fue brutal: escalamos sin drama.

### Banco del Sol  
Las transacciones se caían por timeout aunque el pago ya se había procesado. La gente pagaba dos veces. Implementamos asincronismo completo. El frontend solo hacía polling para conocer el estado real. Problema resuelto.

## Conclusión

La Arquitectura Orientada a Eventos no es mejor ni peor que otras. Es una herramienta más en tu caja. Usala con criterio y te va a salvar proyectos. Abusala y te va a complicar la vida.

¿En qué proyecto tuyo creés que EDA resolvería dolores de cabeza? Dejame tu caso en los comentarios.

¡Nos leemos en el próximo artículo!
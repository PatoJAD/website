---
title: 'El monopolio de Google vs el Software Libre'
date: '2019-12-30'
description: 'Google tiene un monopolio innegable en la búsqueda de internet y un casi monopolio en el software de navegación web a través de Chrome y sus forks. O incluso ofrecen su buscador como opción para búsquedas integradas.'
type: 'noticias'
tags:
    [
        'google',
        'software libre',
        'monopolio',
        'navegadores',
        'chrome',
        'firefox',
        'chromium',
        'chromium',
        'letsencrypt',
        'lets encrypt',
    ]
category: ['Noticias']
img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.enriquedans.com%2Fwp-content%2Fuploads%2F2015%2F04%2FGoogle-Monopoly.jpg'
authors: ['PatoJAD']
---

Dando vueltas por Reddit encontramos un usuario que escribió sobre este tema que es de mucho interés para todos nosotros, normalmente siempre hablamos de Microsoft pero Google es muy agresivo con su invasión a privacidad y su monopolio.

## Lo que nos cuenta Yogthos

Google tiene un monopolio innegable en la búsqueda de internet y un casi monopolio en el software de navegación web a través de Chrome y sus forks (navegadores derivados). E incluso los navegadores alternativos no derivados de Chromium, como Firefox de Mozilla, hacen referencia al servicio de Navegación segura de Google para decidir la confiabilidad de las descargas. O incluso ofrecen su buscador como opción para búsquedas integradas.

Detener la propagación del malware es un objetivo digno de un gran agradecimiento, pero una consecuencia de esto es que perjudica directamente a los desarrolladores de software libre y de código abierto de poder lanzar su software sin pagar costosas tarifas de búsqueda de malware por parte de la autoridad de certificación.

Si un desarrollador de software intenta lanzar una nueva versión de su software en línea, es probable que reciba esta advertencia en su Google Search Console:

{{< img src="https://miro.medium.com/max/716/1*E6wn_ALLvQ0e8ecBvNHRMA.png" >}}

Por definición y sin excepciones, todo el software es desconocido cuando se lanza por primera vez. No importa que haya tenido su dominio durante catorce años sin haber alojado nada malicioso:

{{< img src="https://miro.medium.com/max/292/1*rnS-W4PreMl592nkDUkhuw.png" >}}

No importa si ninguno de los setenta y dos analizadores de virus marcan contenido malicioso en su ejecutable:

{{< img src="https://miro.medium.com/max/645/1*P0hj5bYQXD_DR3xQj51Rtw.png" >}}

No importa si solicita una revisión de Google que vuelve clara:

{{< img src="https://miro.medium.com/max/375/1*-4WN5wrHYt2VvKM32h6KLg.png">}}

Las advertencias simplemente regresan, a menudo en el mismo archivo que ya ha revisado. Esto no es solo una advertencia aterradora que se ignora fácilmente: los navegadores web advertirán a los usuarios que su software puede ser malicioso. Y se desprende de la advertencia de Google que considera que su sitio está comprometido, lo que puede conducir a penalizaciones en los resultados de búsqueda, incluida la exclusión de la lista.

Esto a pesar del hecho de que no ha hecho nada malo aparte de lanzar software en la web.

Este proceso es totalmente opaco: ¿cuántas descargas se necesitan antes de que el software ya no se considere desconocido? ¿Cuánto tiempo puede su sitio alojar una descarga desconocida antes de que se aplique una penalización en la búsqueda? ¿La obtención de un certificado de firma de código de Windows aliviará estas advertencias o no? ¿Tiene que ser un certificado EV?

Supongamos que desea obtener un certificado de firma de código para ver si eso ayuda:

{{< img src="https://miro.medium.com/max/933/1*fYd1TFryBmlhjn3lqRNVKA.png" >}}

Qué trato para un pequeño desarrollador de software libre. Además, debe tener un negocio registrado que sea verificado por Better Business Bureau para recibir su certificado EV. Si desea un certificado regular, puede hacerlo adjuntando su nombre legal público a su software y enviando una copia de su licencia de conducir. Y eso no quiere decir nada de los riesgos que toma estos días en línea al publicar su nombre legal.

E incluso si hace todo esto y comienza a firmar sus ejecutables, todavía no puedo encontrar ninguna garantía de si Google comenzará a tratar estos ejecutables como seguros o no. En mi propio caso, esto efectivamente me ha impedido lanzar binarios compilados de mi propio software en el futuro. Si la firma de código es un requisito para distribuir software gratuito, entonces necesitamos una alternativa de estilo Let's Encrypt para la firma de código: ayer. De lo contrario, Google necesita un cambio de política sobre cómo maneja las nuevas versiones de software de desarrolladores de software gratuitos y de código abierto.

## Lo que opino

Existe una realidad, todos los que hacemos software libre o colaboramos con el mismo debemos sofocarnos con estas clases de cosas. El dinero que utilizamos para poder llevar este software ante ustedes sale lamentablemente de nuestros bolsillos. Y claramente cuando un proyecto ya es grande de las donaciones de la comunidad. Sin embargo, necesitamos que esto cambie, así fue cuando salió Let's Encrypt y tiene que seguir así.

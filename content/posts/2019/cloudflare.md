---
title: 'CloudFlare ¿Que es? Ventajas y Desventajas'
date: '2019-10-04'
description: 'Muchas personas preguntan como hice el blog, hoy veremos que es CloudFlare y sus ventajas y Desventajas.'
type: 'post'
tags:
    [
        'gitlab',
        'cloudflare',
        'pages',
        'dominio',
        'dns',
        'ventajas',
        'desventajas',
    ]
categories: ['Programacion', 'Redes']
img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6yu86pJhP7gwueOzZdZdnMr4hWXmpi29w4KLeHjcYKurXniwn'
authors: ['PatoJAD']
---

CloudFlare es un sistema gratuito que actúa como un proxy (intermediario) entre los visitantes del sitio web y el servidor. Al actuar como un proxy, CloudFlare guarda temporalmente contenido estático del sitio, el cual disminuye el número de peticiones al servidor pero sigue permitiendo a los visitantes el acceso al sitio.

{{< img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/53qCYhQbir5WtIU0VDWESo/1c28d510cb5bb9a44e56916e37a889b6/Cloudflare_default_OG_.png" >}}

## Ventajas

-   **Desempeño del Sitio Mejorado:** CloudFlare tiene servidores proxy localizados alrededor del mundo. Los servidores proxy están localizados cerca de los visitantes, con lo cual estos podrán cargar el sitio más rápido directo de los servidores proxy. "Mientras más rápido cargue un sitio, el visitante permanecerá en este por más tiempo."
-   **Protección contra Amenazas y Bots:** CloudFlare usa datos del "Project Honey Pot" y otras fuentes de terceros, así como datos de su comunidad para identificar amenazas maliciosas y parar ataques antes de que estos lleguen a los sitios. Se podrán ver la amenazas que están siendo paradas a través de CloudFlare desde: https://www.cloudflare.com/your-websites.html
-   **Protección para "Comentarios Spam":** CloudFlare usa datos de fuentes de terceros para reducir el número de "comentarios Spam" en el sitio.
-   **Alerta a Visitantes de Computadoras Infectadas:** CloudFlare alerta a los visitantes cuando estos acceden desde una computadora infectada para que tomen acciones inmediatas. El visitante podrá ingresar un "Captcha" para ingresar al sitio.
-   **Modo de Navegación Offline:** En el caso eventual que nuestros servidores no se encuentren disponibles, los visitantes podrán seguir accediendo al sitio ya que CloudFlare servirá el sitio desde su CDN.
-   **Disminución del Uso de CPU:** Ya que habría menos solicitudes a nuestros servidores, esto disminuirá el consumo de CPU de cada cuenta.
-   **Nuevas Estadísticas del Sitio:** Con CloudFlare se podrá tener herramientas para evaluar el tráfico que existe de visitantes hacia el sitio y además contará con estadísticas para "crawlers de herramientas de búsqueda" y de amenazas.

## Desventajas

-   Actualmente, las peticiones deben ser redirigidas a www.$dominio en lugar de $dominio (lo cual puede significar que se deben realizar algunos cambios de configuración).
-   CloudFlare puede afectar algunos programas de estadística interna que leen directamente los logs de Apache. CloudFlare no afectará programas de análisis basados en web que usen Javascript o Google Analytics. Mientras que los logs van a reflejar menos peticiones al servidor y menos carga, la experiencia hacia los visitantes de los sitios permanecerá igual.
-   CloudFlare guarda contenido estático del sitio. Esto reduce la carga en el servidor y significa que si se hace un cambio de un archivo estático existente como una imagen, puede existir un retraso pequeño mientras aparece el cambio. **Mientras se hace una actualización se puede configurar CloudFlare en Modo de Desarrollo para que el cambio aparezca inmediatamente.**

## PatoJAD y CloudFlare

Cuando decidí utilizar CloudFlare (recomendado por Tehuel) me pareció que era demasiado para solo un dominio (primera vez con .tk) sin embargo con el tiempo vi que las funcionalidades me permitían ir mucho más allá. Incluso me sirvió para realizar pruebas de desarrollo particulares. Actualmente lo sigo utilizando y si bien el blog es pequeño aun, algún día pagare para poder llevar todo esto a otro nivel dado que el potencial que tiene desde el control de DNS hasta la cache geo localizada para cargar más rápido los sitios son ampliamente útiles.

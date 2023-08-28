---
title: 'Genpress: El Worpress en Node'
date: '2019-12-18'
description: '¿Te imaginas un wordpress que no sea PHP? GreenPrees Trabaja en generar un WP del siglo 21. ¿Te animas a probarlo?'
type: 'post'
tags:
    [
        'wordpress',
        'greenpress',
        'php',
        'node',
        'js',
        'javascript',
        'nodejs',
        'node.js',
        'blog',
        'blogging',
        'bloggers',
        'blogging',
        'genpress',
    ]
categories: ['Noticias', 'Aplicaciones']
img: 'https://i.postimg.cc/BZKvC5ZV/greenpress.jpg'
authors: ['PatoJAD']
---

> Actualmente estoy trabajando en una plataforma de código abierto para blogs/sitios de contenido, que es más compatible con el siglo XXI, servicios en la nube, escalado, etc.
>
> {{< citaname name="davidmeirlevy" >}}

El proyecto se divide en microservicios, y tanto el panel de administración como la interfaz del blog están usando Vue.js (administrador escrito con Vue y blog-front con Nuxt, para SSR).

No está 100% listo, pero está disponible y puede ser útil en este momento para uso básico, tiene un entorno de desarrollo y scripts de producción, usando pm2. La próxima semana con docker y compose, y pronto también helm chart.

{{< link text="Demo" url=" https://greenpress.herokuapp.com/" >}}

> Estaría más que feliz de obtener cualquier tipo de ayuda, contribuciones de código, errores, sugerencias, o incluso que lo usarán para ustedes mismos. Realmente funciona y es gratis.
>
> {{< citaname name="davidmeirlevy" >}}

## ¿Es el futuro?

Claramente los que somos desarrolladores y alguna vez utilizamos PHP sabemos que es un lenguaje que fue (y aun es) útil, peor no es para nada bueno. Con esto no quiero decir que JS sea bueno, pero podemos decir objetivamente que es levemente “menos peor”.
PHP tiene popularidad solo porque corre en cualquier lado, y se encuentra funcionando en gran parte de la internet. Pero esto no quiere decir que sea bueno, simplemente es más utilizado.

Este proyecto procura poder ofrecer una solución a WP un tanto más renovada tecnológicamente. Dando así mejores posibilidades de desarrollo y crecimiento a nuestro emprendimiento (por ejemplo, un blog) Y puede, con ayuda de la comunidad, ser uno de los grandes proyectos que inicie el cambio en Internet.

## Caracteristicas

-   Gestión de configuración.
-   La configuración debe tener opciones como:
    -   Nombre del blog (predeterminado: "Mi sitio web Greenpress")
    -   Idioma (predeterminado: "en")
    -   Dirección del sitio (predeterminado: "ltr")
    -   Descripción: para metadatos y SEO.
    -   Tema: debe implementar una API para obtener una lista de temas desde el frente del blog y reiniciar el frente del blog (con npm run build) para aplicar el tema en el cambio de campo.
    -   Font url: define el uso de fuentes de cdn como google-fonts.
-   Búsqueda básica de publicaciones: necesaria tanto para frontend como administracion.
-   Características del administrador:
    -   $notify para mensaje de éxito/error.
    -   El panel de administración es más fácil de usar.
    -   Administrar menús (crear / eliminar / actualizar)
    -   Selector de categoría de usuario para elementos de menús.
    -   Mejora UX, también compatible para uso móvil.

{{< link text="Proyecto" url="https://github.com/greenpress" >}}

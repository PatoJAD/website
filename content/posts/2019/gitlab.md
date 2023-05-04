---
title: 'GitLab Pages'
date: '2019-10-09'
description: 'Muchas personas preguntan como hice el blog, hoy vemos que es GitLab Pages.'
type: 'post'
tags:
    [
        'gitlab',
        'pages',
        'dominio',
        'desarrollo',
        'programacion',
        'linux',
        'gnu/linux',
        'web',
        'estatica',
    ]
categories: ['Programacion']
img: 'https://i.ytimg.com/vi/TWqh9MtT4Bg/maxresdefault.jpg'
authors: ['PatoJAD']
---

> GitLab Pages es una característica que le permite publicar sitios web estáticos directamente desde un repositorio en GitLab.
>
> Puede usarlo para sitios web personales o comerciales, como carteras, documentación, manifiestos y presentaciones comerciales. También puede atribuir cualquier licencia a su contenido.

## Características

-   Use cualquier generador de sitio web estático o HTML sin formato
-   Cree sitios web para sus proyectos, grupos o cuenta de usuario
-   Aloje en GitLab.com de forma gratuita, o en su propia instancia de GitLab
-   Conecte sus dominios personalizados y certificados TLS

Pages está disponible de forma gratuita para todos los usuarios de GitLab.com, así como para instancias autogestionadas (GitLab Core, Starter, Premium y Ultimate). Es decir que esta en sus productos a nivel que si ustedes tienen instala una instancia de GitLab pueden utilizar su propio GitLab Pages.

## Sitios Estaticos

Para publicar un sitio web con páginas, puede usar cualquier generador de sitio estático, como Jekyll, Hugo (el caso de este Blog), Middleman, Harp, Hexo y Brunch, solo por nombrar algunos. También puede publicar cualquier sitio web escrito directamente en HTML, CSS y JavaScript. Pages no admite el procesamiento dinámico del lado del servidor, por ejemplo, como .php y .asp

## Como funciona

Para usar las páginas de GitLab, primero debe crear un proyecto en GitLab para cargar los archivos de su sitio web. Estos proyectos pueden ser públicos, internos o privados, a su elección. GitLab siempre implementará su sitio web desde una carpeta muy específica llamada publicen su repositorio. Tenga en cuenta que cuando crea un nuevo proyecto en GitLab, un repositorio está disponible automáticamente.
Para implementar su sitio, GitLab utilizará su herramienta integrada llamada GitLab CI / CD , para construir su sitio y publicarlo en el servidor de páginas de GitLab. La secuencia de scripts que ejecuta GitLab CI / CD para realizar esta tarea se crea a partir de un archivo llamado .gitlab-ci.yml, que puede crear y modificar a voluntad.
También se puede usar de GitLab dominio predeterminado para los sitios web GitLab Pages , name.gitlab.ioo en su propio dominio (patojad.com.ar). En ese caso, necesitará acceso de administrador al registrador de su dominio (o panel de control) para configurarlo con Pages.

## ¿Porque Elegi GitLab?

Cuando comencé con el proyecto quería algo seguro y fiable, Todo el mundo me lo recomendó por su facilidad de uso y su disponibilidad constante. Me convencí al ver que en cuestión de minutos ya tenía mi sitio online, su velocidad es muy buena y me permite compartirlo libremente. Yo personalmente siempre recomendare GitLab Pages y es lo que planeo usar para todo lo que pueda mantener en este método.

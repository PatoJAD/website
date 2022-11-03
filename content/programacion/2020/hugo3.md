---
title: "Hugo CMS - Cards y Range"
date: "2020-04-06 12:35:00"
description: "Es hora de comenzar a darle un poco mas dinamismo a nuestro sitio para que comience a darle color"
type: "programacion"
tags: ["hugo","cms","cards","range","gougo","tutorial","curso"]
category: ["Programacion"]
img: "https://i9.ytimg.com/vi/ZJ-0n1OGam0/mqdefault.jpg?time=1586186018409&sqp=CMiMrfQF&rs=AOn4CLCbx8pEdUGLjjKjsWlXGtVvnY816w"
authors: ["PatoJAD"]
---


Ya venimos viendo como crear nuestro sitio con Hugo este hermoso CMS estatico, y si bien el sitio que genera es estatico el dinamismo se da la hora de compilar... Vamos a comenzar a ver un poco esta magia de Hugo




## Agregando dinamismo


{{< youtube code="ZJ-0n1OGam0" >}}


Cualquier duda o consulta sobre esta publicacion nos encontramos en Telegram!!


{{< link url="https://t.me/PatoJADCommunity" text="Ir a Telegram" >}}



## Algunos codigos



Puede uqe algunos codigos les sean utiles tenerlos a mano para copiarlos, por esto mismo les dejo algunas de las cosas que usamos en el video a mano:

Usar un parametro de los contrnidos



    {{ Params.img }}



img es el nombre de mi parametro, en su caso deberan elegir el nombre del parametro que ustedes deseen poner.




URL de la publicacion



    {{ .RelPermalink }}




Titulo

    {{ .Title }}




Crear Paginacion y realizar la itineracion del contenido

    {{ $paginator := .Paginate .Site.RegularPages.ByDate.Reverse }}
    {{ range $paginator.Pages }}
      {{ Render "card" }}
    {{ end }}




Agregar Resumen de contendio

    {{ Summary }}

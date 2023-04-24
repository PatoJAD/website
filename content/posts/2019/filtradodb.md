---
title: 'Se filtran Datos de una DB'
date: '2019-09-19'
description: 'Una base de datos mal configurada expuso información personal de millones de ciudadanos de Ecuador, como nombres completos, números de teléfono e información financiera.'
type: 'redesyseguridad'
tags: ["Bases de datos","Seguridad","Error"]
category: ["redesyseguridad"]
img: 'https://www.redeszone.net/app/uploads/2018/11/bases-datos-vulnerabilidades.jpg'
authors: ["PatoJAD"]
---

Una vez vez más, como ya se hace costumbre, la causa de la filtración de los datos ha sido una mala configuración del servidor que almacenaba la base de datos. O como decimos en la jerga un "error de capa 8"

Según las informaciones, un servidor Elasticsearch mal configurado ha provocado que quedaran expuestos cerca de 18GB de datos con información personal de ciudadanos ecuatorianos.

## ¿Que se expuso?

Entre los datos que se han podido obtener se encuentran nombre completo, número de cédula, género, fecha y lugar de nacimiento, correo electrónico, número de teléfono del domicilio y del móvil, estado civil, fecha de matrimonio, nivel de educación y parentescos. Así mismo también se han podido obtener datos con información bancaria como puede ser el estado de la cuenta, balance actual en la cuenta etc., así como datos relacionados con el ámbito laboral de los ciudadanos.

 

## Cómo se descubrió la exposición y qué deben hacer los usuarios

{{< img src="https://mozilla.github.io/web-lit-core/images/olloweb-solution-520914-unsplash.jpg" >}}

Como parte de un proyecto de mapeo web que llevan adelante, los investigadores detrás de este hallazgo explicaron que realizan escaneo de puertos con el objetivo de encontrar bloques de IP conocidos para luego buscar la presencia de vulnerabilidades en los sistemas que puedan provocar la exposición de datos.

>Este caso es un recordatorio de la importante que es para las empresas evaluar sus sistemas de información y cómo están configurados. La implementación de una tecnología que aporte las herramientas para desarrollar las actividades operativas, como en este caso lo era ElasticSearch, no debe perder de vista la necesidad de revisar que cuente con las configuraciones adecuadas para no dejar expuesta la información que con ellas se maneja. Todos estos incidentes nos recuerdan la importancia de pensar en seguridad desde el inicio de cualquier proyecto
>
> {{< citaname name="Jefe del laboratorio de ESET Latinoamérica, Camilo Gutiérrez." >}}

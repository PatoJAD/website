---
title: 'Email Profesional GRATIS'
date: '2022-09-12 08:25:00'
description: 'Vamos a aprender a configurar nuestro email profesional 100% free en CloudFlare con un dominio propio.'
tags: ["email", "dominio", "propio", "free", "gratis", "profesional", "cloudflare", "configurar", "dns", "mx", "registro"]
type: 'redesyseguridad'
category: ["redesyseguridad"]
img: 'https://www.cloudflare.com/static/d78b38d36bc84f3ca7aa24265e14f381/cloudflare_email_routing.png'
authors: ["PatoJAD"]
---

Ya hable con anterioridad sobre Cloudflare allá por el 2019. Y creo que quedó fuertemente asentado que lo recomiendo fuertemente más allá de sus contras. Dejo la información hablada con anterioridad sobre esto:

* {{<textlink text="CloudFlare ¿Que es? Ventajas y Desventajas" url="/programacion/2019/10/cloudflare-que-es-ventajas-y-desventajas/" >}}  
* {{<textlink text="Configurar GitLab Pages con CloudFlare" url="/programacion/2019/11/configurar-gitlab-pages-con-cloudflare/" >}}

Como siempre cloudflare avanza a pasos agigantados y gracias a esto nos ofrece nuevas funcionalidades y una de las más interesantes es la posibilidad de tener un email profesional *(@tudominio)* completamente **GRATIS**. Y si bien de entrada esta opción parece que solo es para forwardear correos a uno ya existente (por ejemplo tu gmail) es muy interesante conocer la mejor forma de configurarlo para poder enviar correos con tu dominio “profesional” desde, en este caso, nuestro gmail.

## Primeros pasos

Como primeros pasos debemos tener nuestro dominio en **CloudFlare** ya configurado *(Lo cual podemos verlo en guías anteriores)* y debemos solicitar la BETA del **Enrutamiento de correos electrónicos** la cual es completamente gratuita con sus respectivos límites.

Una vez que hayamos sido aceptados, basta con configurar los DNS. Si los estamos administrado con CloudFlare (Lo cual sería lo correcto) Basta con un solo botón que configura todo *automágicamente* en la sección **correo electrónico** -> **Configuración** -> **Iniciar la activación**

{{< img src="https://i.postimg.cc/d1VVkLmw/image.png" >}}

Luego debemos agregar la dirección de destino en la cual queremos recibir los correos electrónicos (Es decir un email ya existente y funcionando, en mi caso utilizo mi gmail personal para recibir los correos) esto lo hacemos desde **correo electrónico** -> **Rutas** -> **Agregar la dirección de destino**. Esto nos enviará un email de confirmación para saber que se encuentra funcionando. Una vez activado lo veremos con el estado *verificado* 

{{< img src="https://i.postimg.cc/fLzJcHZ4/mailverificado.png" >}}

Ya teniendo correctamente configurado el correo de destino debemos agregar (o crear) la dirección de correo custom que queremos, lo cual lo podemos hacer desde: **correo electrónico** -> **Rutas** -> **Crear dirección**. En esta parte es completamente intuitivo y solo nos aparecerá como destino en **Acciones** aquellos correos que ya estén verificados.

{{< img src="https://i.postimg.cc/zvR5KWLZ/mailadd.png" >}}


Una vez que hayamos realizado estos pasos ya podemos recibir correos a nuestro nuevo email profesional desde nuestra casilla personal.

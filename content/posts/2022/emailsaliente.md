---
title: 'Email Profesional GRATIS - Saliente'
date: '2022-10-20 11:05:00'
description: 'Vamos a aprender a configurar nuestro correo saliente profesional 100% free en CloudFlare con un dominio propio.'
tags: ["email", "dominio", "propio", "free", "gratis", "profesional", "cloudflare", "configurar", "dns", "mx", "registro", "saliente", "enviar"]
type: 'redesyseguridad'
category: ["redesyseguridad"]
img: 'https://www.cloudflare.com/static/d78b38d36bc84f3ca7aa24265e14f381/cloudflare_email_routing.png'
authors: ["PatoJAD"]
---

## Usar email para salida de correos

Si bien {{< textlink url="/redesyseguridad/2022/09/email-profesional-gratis/" text="esto ya es muy profesional" >}}, también resultaría interesante poder responder utilizando el correo que creamos. En este caso voy a mostrar cómo agregarlo a **GMAIL** para poder utilizarlo como correo saliente.

Para esto debemos ingresar en nuestra cuenta de Gmail e ir a las configuraciones de la misma para poder agregar una nueva cuenta de correo saliente. Esto lo hacemos desde **Ajustes** -> **Ver todos los Ajustes** -> **Cuentas e Importación** -> **Enviar como:** -> **Añadir otra dirección de correo electrónico**

{{< img src="https://i.postimg.cc/ZKSKp7Lw/gmailconf.png" >}}

Añadimos el correo, con el nombre que utilizaremos para identificarlo de la siguiente manera (recuerda que los datos son a modo ejemplo, tu debes completarlo con tus datos particulares)

{{< img src="https://i.postimg.cc/ncGVk4Rp/image.png" >}}

Luego vamos a completar los campos con los datos de nuestra cuenta de Gmail (en este caso la cuenta que los recibe y la que envía van a ser la misma) de la siguiente manera:

{{< img src="https://i.postimg.cc/q7zk49kv/image.png" >}}

Donde: 

* **Servidor SMTP:** smtp.gmail.com
* **Nombre de Usuario:** El nombre de usuario de Gmail ( si tu correo es user@gmail.com, user es tu nombre de usuario).
* **Contraseña:** Contraseña de GMAIL.
* **Puerto:** 465.

{{< warning text="ATENCIÓN: En el caso de que tengas el doble factor activado, la contraseña deberá ser una nueva creada para este fin, lo cual veremos cómo hacerlo a continuación." >}}

{{< link url="/aplicaciones/2022/07/crear-contraseña-para-apps-en-google/" text="Crear contraseña para apps en Google" >}}

---

Ya con esto podemos enviar desde nuestro Gmail utilizando nuestro correo profesional.
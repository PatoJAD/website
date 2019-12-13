---
title: 'PayPal suplantado por nueva campaña de phishing'
date: '2019-12-13'
description: 'Detectada una nueva campaña de "phishing" que pretende robarnos las credenciales de acceso a nuestra cuenta de Paypal, además nos solicita datos de la tarjeta y cuenta bancaria, y también las claves de acceso a nuestro correo electrónico.'
type: 'redesyseguridad'
tags: ["PayPal","Pushing","Seguridad"]
category: ["redesyseguridad"]
img: 'https://www.verdict.co.uk/wp-content/uploads/2017/02/shutterstock_270739580-1440x960.jpg'
authors: ["PatoJAD"]
---

Desde el laboratorio de ESET Latinoamérica detectaron un sitio creado recientemente que busca engañar a los usuarios haciéndoles creer que se trata del sitio oficial de PayPal. Con la excusa de haber detectado movimientos inusuales en la cuenta del usuario, el mensaje que despliega el falso sitio “informa” a la potencial víctima que es necesario que “asegure su cuenta” para prevenir accesos no autorizados y que para hacer esto debe hacer clic en el botón “asegurar cuenta” e ingresar sus datos personales.

Si pulsamos el enlace, nos abrirá una ventana donde nos irán pidiendo nuestros datos de acceso a Paypal, información bancaria, e incluso nuestra clave de acceso al correo electrónico. Todo ello desde una dirección web que han elaborado a conciencia para engañarnos, ya que además se muestra como página segura (candado verde) porque cuenta con un certificado SSL que aporta seguridad en la transmisión de los datos (ya que los datos introducidos viajarán cifrados hasta su destino). El problema es que el destino al que llegará nuestra información, será un lugar preparado por personas malintencionadas, que se aprovecharán de nosotros.

{{< br >}}
{{< img src="https://www.welivesecurity.com/wp-content/uploads/2019/12/phishing-PayPal-1.jpg" >}}
{{< br >}}
{{< br >}}

## ingeniería Social

{{< br >}}

Haciendo uso de los principios de la ingeniería social, la campaña apela al miedo que provoca recibir un mensaje informando acerca de una actividad inusual en una cuenta de nuestra propiedad para que la víctima acceda a llevar adelante el proceso de asegurar su cuenta.

{{< br >}}
{{< img src="https://www.welivesecurity.com/wp-content/uploads/2019/12/phishing-PayPal-2.jpg" >}}
{{< br >}}

Una vez pasada la verificación del CAPTCHA, en la siguiente etapa la campaña solicita al usuario ingresar su dirección de correo electrónico (en este punto ya se debería notar algo sospechoso, ya que también aparece la opción de inscribirse al servicio, cuando en teoría es un mensaje dirigido a usuarios activos).

Luego, como de costumbre, solicita que el usuario ingrese la contraseña para ingresar a su cuenta.

{{< br >}}
{{< img src="https://www.welivesecurity.com/wp-content/uploads/2019/12/phishing-PayPal-3.jpg" >}}
{{< br >}}

Además de que se observa nuevamente la posibilidad de crear una cuenta nueva, si la víctima efectivamente ingresa la contraseña se encontrará en la instancia siguiente con un mensaje que le indica que su es necesario verificar los datos de la cuenta y que por esta razón se limitó el acceso a determinadas funciones hasta que no restaure su cuenta.

Esto continua y lo pueden ver en el sitio de welivesecurity donde esta toda la informacio completa.

{{< br >}}
{{< br >}}

## El Certificado y el dominio

{{< br >}}

Tal como se puede observar en la foto, el certificado fue obtenido en los últimos días, con lo que todo indica que se trata de una campaña muy reciente. Y seguramente se encuentre activa.

{{< br >}}
{{< img src="https://www.welivesecurity.com/wp-content/uploads/2019/12/phishing-PayPal-10.jpg" >}}
{{< br >}}

El dominio por su parte tambien es nuevo, lo cual implica que la idea en si no tiene mucho tiempo.

{{< br >}}
{{< img src="https://www.welivesecurity.com/wp-content/uploads/2019/12/phishing-PayPal-11.jpg" >}}
{{< br >}}

El registro del dominio se realizó un día después de la solicitud del certificado, y si bien los datos del propietario no están públicos, aparentemente el registro se realizó desde Panamá (Si alguno de los que lee es de Panamá que se sienta tocado, estamos desconfiando de vos(? ).

Vale la pena mencionar que durante el análisis no detectamos que se hayan instalado servicios o aplicaciones adicionales, lo que demuestra que la campaña tiene como único objetivo el robo de información financiera y credenciales de acceso, además de datos personales.

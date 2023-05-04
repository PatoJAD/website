---
title: 'Cómo instalar paquetes DEB usando dpkg'
date: '2020-05-20 06:40:00'
description: 'Ya te explicamos cómo crear tu propio deb con dpkg, pero nos falto explicar como instalarlo, ya no tenes mas dudas asi se instala un deb con dpkg.'
type: 'post'
tags: ['deb', 'linux', 'dpkg', 'debian', 'ubuntu']
categories: ['Linux']
img: 'https://i.postimg.cc/50Zt795X/image.png'
authors: ['PatoJAD']
---

Anteriormente hablamos de {{< textlink text="cómo crear paquetes .deb" url="/post/2020/04/como-crear-un-deb-con-dpkg/" >}} en Debian, Ubuntu o derivadas utilizando el gestor de paquetes dpkg, sin embargo hoy llego el dia de dar un pequeño paso hacia atrás y ver como se instala utilizando el mismo gestor.

Antes de iniciar quiero agradecer a Julio por brindar la información y obviamente a la autora de todo esto que es nada más ni nada menos que Gabriela González.

Explicamos cómo utilizar las opciones del gestor de paquetes de Debian, para instalar y desinstalar archivos .deb en Ubuntu, Debian o derivados

Los usuarios estas distribuciones la tienen muy fácil hace rato, instalar cualquier programa es un paseo por el parque gracias al centro de software. Poco a poco muchas otras distros van implementando este tipo de tiendas de aplicaciones para que el usuario pueda descargar lo que quiera de la manera más sencilla posible. Esto también ha permitido que muchos desarrolladores pongan en venta sus aplicaciones de pago y de esta manera obtener algo a cambio de su trabajo, y sin preocuparse por conseguir un medio de distribución que llegue a todos los usuarios.

Muchos programas no se encuentran en el centro de software, así que a veces es bueno recurrir a la terminal para instalarlos

**Existen muchos paquetes y aplicaciones que no están disponibles en el centro de software**, muchos de los cuales requieren el uso de la terminal para añadir un repositorio y poder descargarlos. Otros en cambio, como por ejemplo Google Chrome, hay que bajarlos como un paquete DEB para poder usarlo en Debian/Ubuntu y derivados. Este paquete DEB se puede instalar con el centro de software, haciendo doble clic sobre el. Si ya lo has hecho, probablemente más de una vez, seguro has notado que el proceso es un poquito lento, que el centro de software más deuna vez se «queda pegado», y además puedes hasta sentir lag en el sistema, y un retraso en la respuesta de las aplicaciones que estás ejecutando en ese momento, es caótico.

## INSTALAR PAQUETES DEB USANDO DPKG

dpkg es el programa base para manejar paquetes .deb.Con dpkg puedes instalar, remover y obtener información sobre cualquier paquete .deb. Pero, se debe ver a dpkg como una herramienta de sistema que trabaja en conjunto con apt-get. Si una dependencia **no se satisface**, dpkg fallará, por el contrario, herramientas como apt-get crearán una lista de dependencias para instalar todo tan automáticamente como sea posible. Es decir, con dpkg instalamos paquetes .deb que ya descargamos, porque dpkg **no descarga nada**.

Para **instalar** paquetes con dpkg usamos la opción -i o -install, ejemplo:

    dpkg -i paquete.deb

Para **verificar** que un paquete se ha instalado podemos escribir en la terminal:

    dpkg -l | grep 'chrome'

Entre las comillas colocamos una palabra clave para buscar elpaquete, en este caso quiero verificar si se instaló Chrome. Si la terminal arroja una lista y antes del paquete muestra «ii» quiere decir que está instalado

{{< img src="https://i.postimg.cc/mDS9KHDP/image.png" >}}

Para **desinstalar** un paquete utilizando dpkg utilizamos la opción -r o -remove, ejemplo:

    dpkg -r paquete.deb

Si queremos **purgar** la isntalaición, es decir borrar todos los rastros del programa, utilizamos -P:

    dpkg -P paquete.deb

Si quieren conocer más a fondo esta herramienta, pueden leer el manual de Debian sobre la {{< textlink text="manipulación de paquetes con dpkg" url="https://debian-handbook.info/browse/es-ES/stable/sect.manipulating-packages-with-dpkg.html" >}}.

---

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

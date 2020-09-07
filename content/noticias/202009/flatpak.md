---
title: 'Flatpak ¿Bueno o Malo?'
date: '2020-09-07 11:14:00'
description: 'Vamos a tratar de descrubrir si flatpak es bueno o es malo y como deberiamos usarlo'
type: 'noticias'
tags: ["flatpak", "linux", "ubuntu", "bueno", "malo"]
category: ["Noticias"]
img: 'https://tecnonucleous.com/content/images/2018/04/flatpaklogo.jpg'
authors: ["PatoJAD"]
---

{{< br >}}

Hoy vamos a hablar de Flatpak, un tipo de paquetería que puede ser amado y odiado a la vez… Antes de iniciar a escribir quiero comentar que esto es mi punto de vista y sus justificaciones, si bien trato de no ser partidario se nota fuertemente mi inclinación.

{{< br >}}
{{< br >}}

## ¿Qué es Flatpak?

{{< br >}}

Para arrancar tendríamos que entender que es flatpak y si bien podríamos usar muchas definiciones técnicas, no es la idea, hoy vamos a discutir sobre la mesa siendo racionales, los tecnicismos los dejamos para una segunda etapa (que probablemente nunca haga porque voy a olvidarlo).

{{< br >}}
{{< img src="https://tecnonucleous.com/content/images/2018/04/flatpaklogo.jpg" >}}
{{< br >}}

Flatpak es un tipo de paquetería que presenta como principal ventaja que es indiferente a la versión del sistema y/o librerías instaladas. Por lo cual si lo vemos así entendemos que es la solución a todos los problemas de compatibilidad que tenemos y esto es así, pero no tan así…

{{< br >}}
{{< br >}}

## ¿Cómo lo hace?

{{< br >}}

Claramente tiene un secreto, y esto es lo que lo hace tan bueno como malo, flatpack nos permite independizarnos de nuestro sistema porque virtualiza las aplicaciones, dandole asi todo lo que necesitan para ejecutar independientemente de la distro de linux que estemos ejecutando.

{{< br >}}
{{< img src="https://blog.desdelinux.net/wp-content/uploads/2019/01/virtualbox-virtualizacion-importancia-blog-desdelinux-830x531.jpg" >}}
{{< br >}}

Esto es lo que nos permite evitar errores de compatibilidad y para eso es realmente bueno. Sin embargo, todos los extremos son malos y es un poco lo que quiero recalcar.

{{< br >}}
{{< br >}}

## Lo bueno ¿Cuando lo usamos?

{{< br >}}

Tal como dije Flatpak tiene cosas buenas pero también cosas malas y para aprovechar las cosas buenas basta con saber como usarlo bien y cuales son las costumbres que debemos tener en cuenta. Para eso listaremos primero las ventajas de flatpack:

{{< br >}}

* Instalaciones Rapidas
* Actualizaciones Rapidas
* Independencia del SO
* Aislamiento de programas
* Mejora compatibilidad

{{< br >}}
{{< img src="https://corporativocln.com/wp-content/uploads/sites/3/2017/02/lo-bueno-lo-malo-y-lo-feo-del-servicio-al-cliente-1236x865.jpg" >}}
{{< br >}}

Si nosotros mantenemos buenas prácticas vamos a poder sacarle el mejor de los provechos a flatpak, para eso basta con cumplir ciertos requisitos…

{{< br >}}

* **Flatpak es la ultima opcion:** La primer ley de flatpak es que es la última opción cuando queremos instalar algo (Duele lo que voy a decir pero seguro prefiero una ppa) {{< br >}}{{< br >}}
* **Evitar el permiso de Administrador:** Es realmente importante entender que estas apps está corriendo sobre una virtualización y lo ideal es que siempre que pueda evitarse no darles permiso de administrador, aun así algunas apps lo requieren y está bien dárselo (Ahora que lo pienso esto aplica para todo linux, nunca ejecutes sudo o su si no es estrictamente necesario y sabes lo que va a pasar) {{< br >}}{{< br >}}
* **Da poco y espera poco:** Flatpak tiene relación amor odio con la filosofía unix (aunque todos sabemos que linux no es unix) por lo cual puede que el precio a pagar por esta “super compatibilidad” es que las apps no funcionen como lo esperas y esto muchas veces es así (faltan funciones, no abren las apps, si tildan… Pequeños precios a pagar)

{{< br >}}
{{< img src="http://www.desmotivar.com/img/desmotivaciones/146365_hay-que-saber-cuando-parar.jpg" >}}
{{< br >}}

Si seguimos y entendemos esto que recién hablamos probablemente puedas entender un poco más sobre flatpak y de esa forma usarlo para sacarle provecho sin achanchar tu equipo.

{{< br >}}
{{< br >}}

## Lo malo ¿Qué pasa si lo uso indiscriminadamente?

{{< br >}}

Claramente todo lo bueno tiene su punto malo y como tal deberíamos remarcar también este. Paso a listar las cosas que desde mi punto de vista son “malas”

{{< br >}}

* **Virtualizar:** Nunca en la vida virtualices algo a no ser que sea estrictamente necesario (cosa que JAVA nunca entendió y por eso es una mierda toda lenta). Si bien para flatpack es necesario virtualizar para el usuario no, por eso es siempre el último recurso cuando no existe otra forma de instalar la app que debemos recurrir a esta forma dado que la virtualización es menos performante y consume más recursos…{{< br >}} {{< br >}}
* **¿Integración?¿Qué es eso?:** Una de las cosas que no entiende flatpack es de integración, de momento no es capaz de tomar el theme que tengas seleccionado ni demás generando un disturbio visual patético. Esto no es realmente importante pero sin embargo a muchas personas les molesta que le mouse se ponga “feo” al entrar en una app. {{< br >}} {{< br >}}
* **Muchos recursos:** Entiendo que muchos en pleno 2020 disponen de equipos potentes y pueden derrochar recursos a como dé lugar (se que te lo estás imaginando asi que ahi voy) como Julio que se instala Gnome para llenar su ram… Sin embargo siempre fui partidario de usar lo que es necesario para lo que es necesario… Incluso más allá del chiste de Gnome y Julio (Que ya que te nombre 2 veces te mando un abrazo) Gnome consume el ram que necesita y por más que nos parezca bien o mal es así. Sin embargo los flatpak no solo consumen lo que necesitan, consumen lo que requiere virtualizar, y es ahí donde un equipo lleno de apps en flatpak puede ser patético. Lo ideal es hacer ese “sacrificio” cuando sea realmente necesario y así mantendremos un equilibrio en funcionalidad y consumo.

{{< br >}}
{{< br >}}

## ¿Qué opina Pato?

{{< br >}}

Ya estoy escribiendo en tercera persona, asi que imaginate cuanto me llevo armar esto para que no se note mi lado  de la brecha… (Ya que hablo en tercera persona le mando un abrazo a Pedro Crespo, que sigue enojado conmigo pero aun asi le deseo lo mejor)

En lo personal suelo evitar el uso de flatpak, es más suelo desinstalarlo, sin embargo creo que es una herramienta muy útil para aquellos que tienen problemas con alguna aplicación que requiere. En lo personal recomendaría su uso responsable y obviamente que lo eviten de ser posible…

{{< br >}}

**¿Y vos...? ¿Qué pensas? No te olvides de dejarnos en los comentarios tu opinión sobre flatpack, los pros y contra de esta paquetería…**
{{< br >}}

---

{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

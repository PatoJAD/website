---
title: 'El papel de Javascript en la seguridad'
date: '2020-04-07 09:08:00'
description: 'Todos escuchamos alguna vez sobre este lenguaje, es hora de entender un poco mas su papel en la seguridad'
type: 'redesyseguridad'
tags: ["js","javascript","internet","seguridad","inyeccion"]
category: ["redesyseguridad"]
img: 'https://i.ytimg.com/vi/PY_4QPg2niM/maxresdefault.jpg'
authors: ["PatoJAD"]
---

Muchos de vosotros quizá escucharon hablar de la técnica "inyección de código javascript". Lo que hoy vamos a ver son las bases necesarias para comprender los ataques de inyección de código Javascript, cómo funcionan, que objetivos pueden llegar a alcanzarse con esta técnica y cómo evitar ser víctimas de este tipo de ataques si somos nosotros los que jugamos como defensa de un portal web.




## ¿Qué es Javascript?



**Javascript es un lenguaje de programación interpretado**, no es compilado, o sea que es **leído e interpretado directamente por el navegador** como código fuente cuando éste lee la página. Esto quiere decir que no bajamos un archivo ejecutable ya compilado para que al ejecutarlo de un resultado sino que tenemos el código a ejecutar metido en el código fuente de nuestro sitio. Tal como en HTML, el explorador lee el código y hace lo que debe hacer.

**Es un lenguaje de scripts, por lo que un programa en JavaScript estaría conformado por pequeños scripts**, cada uno de estos scripts serían miniprogramas y se interpretarán línea por línea mientras que la aplicación sigue su ejecución normal.

**Es un lenguaje orientado a eventos**, Javascript está **capacitado para detectar muchísimos eventos y reaccionar a ellos con una acción programada** por nosotros o el programador que desarrolla el script. Un evento es un suceso que ocurra durante la interacción del usuario y el navegador. Al ser guiado por eventos, no tenemos una función principal que se ejecute antes que de las demás, sino que tendremos varias funciones que se irán ejecutando según proceda (es decir que algunas funciones pueden llamar a otras).

**Es un lenguaje orientado a objetos** (Si bien su nivel de pureza de objetos es pesima, implementa este paradigma de alguna forma), aunque sería mejor decir que su estructura está basada en objetos. Al margen de cuestiones técnicas el caso es que tiene una biblioteca de objetos predefinidos que podremos utilizar para facilitar la tarea de programar nuestros scripts.




## ¿Para qué se utiliza Javascript?



**La función principal de Javascript es dar órdenes al navegador del usuario para que haga justo lo que queremos que haga**. Esto desde el punto de vista del "hacking" y la seguridad informática es sin duda alguna una característica más que atractiva ya que nos permite interactuar con el navegador del usuario de forma directa. Con javascript nosotros podemos validar un formulario html para evitar que el usuario nos envíe datos erróneos, por ejemplo, podemos detectar campos vacíos que son obligatorios y si el usuario pulsa sobre enviar decirle que primero ha de rellenar estos campos, ya que si no lo hace no podrá completar el registro. Con Javascript podemos crear todos estos efectos de transiciones de imágenes que acostumbramos a ver en múltitud de páginas web. Desde hace ya unos años existe una librería de funciones escirtas en Javascript llamada Jquery (Libreria util pero no recomendada). Esta librería es código libre, gratuita y la podrás descargar sin problemas. En definitiva, Javascript fue desarrollado con la clara intención de mejorar la experiencia de un usuario en un sitio web.




## ¿Qué papel juega Javascript en el "hacking"?



Javascript es una pieza clave y fundamental en multitud de técnicas de "hacking", tiene cabida en técnicas de **Phising** (suplantación de identidad) técnicas avanzadas en ataques de tipo Cross site Scripting **XSS** (Robo de sesiones) y multitud de técnicas que describiremos cuando tengamos las bases para comprender cómo funcionan y cómo se utilizan.

Como te habrás dado cuenta, **cualquier programa que interactua de forma directa con el usuario es una amenaza para el mismo** (Entendamos que la vulnerabilidad mas grande es el usuario). Cuando tu eres capaz de dar órdenes al PC de alguien sin que este lo "autorice" entonces estás ganando control sobre su máquina. Javascript hace exactamente esto, dar órdenes al navegador del usuario; normalmente para mejorar su experiencia al navegar en una web, pero como todas las tecnologías, también se ha utilizado para provocar daños en el equipo de la víctima, acceder a información confidencial o tomar el control total del equipo. Con el paso de los años los navegadores han ido evolucionando, ganando en seguridad y evitando aquellos scripts hechos en Javascript que intentan vulnerar la seguridad del equipo, no obstante, y de forma paralela también se han desarrollado plugins para los navegadores que evitan que se ejecute ningún código Javascript en el equipo. Un plugin muy popular que hace esto es NoScript. El problema de este tipo de plugins es que al evitar que se ejecute Javascript también evitarán que se ejecute el código bueno, no hacen distinción alguna entre código malicioso y código bueno. Así que lo que ganas en seguridad lo pierdes en usabilidad, y en este caso en concreto pierdes mucho más de lo que ganas. De ahí la importancia de navegar siempre en internet con un **navegador actualizado que sea capaz de bloquear por si solo aquellas funciones de Javascript maliciosas** y permita las inocuas.

Hasta pudiera parecer que la parte "negativa" de Javascript solo está al alcance de aquellos webmasters que elaboren sitios con el objetivo de hacerse con el control de los internátuas que acaben ahí. Esto no es así. Evidentemente hay sitios creados específicamente para que cuando alguien los visite con un navegador desactualizado (normalmente internet explorer en nuestros amigos windowsnautas) se infecten los equipos. Pero dentro del "hacking" y javascript este tipo de técnicas es de las menos comunes ya que Google suele detectar este tipo de script rápidamente y avisa a los internáutas con carteles de este estilo:


{{< img src="http://cursohacker.es/sites/default/files/styles/large/public/images/20142202182941.png" >}}


Y aunque el usuario es libre de ignorar esta advertencia esta medida hace que la gran mayoría de los internáutas no vayan al sitio web. Además Google penaliza las páginas que tienen código Javascript malicioso haciendo que no aparezcan en el buscador, y de aparecer que aparezcan en posiciones bastante bajas.

La gran potencia de Javascript en el mundo del "hacking" reside en que utilizando técnicas y metodologías es posible que un usuario normal sin ser el dueño de un sitio web sea capaz de meter código javascript en el sitio. Esta última frase puede parecer un tanto díficil de comprender, sobre todo para aquellos de nosotros que estamos empezando y llevamos relativamente poco tiempo en el mundo de la seguridad informática y el "hácking" ético.




## ¿Cómo puede alguien meter código Javascript en mi sitio web?



Hay multitud de técnicas para lograr este fin, lo primero que debemos de hacer es conocer el lenguaje para poder comprender cómo trabaja y valorar su alcance. La lección de hoy pretende dar una visión general del papel que juega este lenguaje en la web desde el punto de vista de la seguridad informática.

En las Webs 2.0 que son aquellas en las que el internátua no solo es un receptor de información sino que puede interactuar con la web (foros, redes sociales, portales....) estamos dejando al usuario introducir información en nuestra web. Nosotros no podemos confiar en que va a meter justo lo que le pedimos, ya que el usuario puede meter cualquier cosa y es nuestra responsabilidad validar en el servidor los datos que el internátua nos está facilitando. Vamos a poner un ejemplo práctico de esta escenografía.

Supongamos que llegamoss a un foro en el que el registro es libre, nos registrámos y ya estamos preparados para abrir hilos o responder en aquellos que ya estén abiertos. Abrimos un nuevo hilo en el que sabemos que gran parte del foro va a visitarlo porque creamos un título para el hilo bastante llamativo. Ahora en vez de escribir un texto normal nosotros metemos un código javascript que hace que todo aquel usuario que vea vuestro hilo nos envíe un mensaje con su "cookie" del foro (las cookies son pequeños archivos que tiene el navegador para controlar entre otras cosas la sesión del usuario, y a los cuales Javascript es capaz de leer, modificar, crear y eliminar). Esta cookie podemos integrarla en nuestro navegador, y una vez hecho esto aparecemos logeados como el usuario al cual le hemos robado la cookie, si además este usuario es administrador del foro ya tenemos acceso completo.

Este tipo de ataques son de lo más básicos y antiguos que se puede realizar con Javascript, la gran mayoría de foros no nos permitirán meter código javascript, y de permitirlo no se publicará o se publicará "capado" para que no se ejecute. En el peor de los casos (para el atacante) llegará incluso una alerta al administrador del foro con el intento de hacking. Así que cuando en las próximas lecciones empecemos a ver pequeños scripts en Javascript no recomendamos que salgan ahí a intentar ser unos "hackers" en foros. Cuando alguien intenta inyectar código Javascript en un sitio de estas características debe buscar la forma de hacerlo de la forma mas silenciosa posible, un buen webmaster lo pondrá realmente difícil y tendrá medios para detectar este tipo de ataques, uno más mediocre lo pondrá más fácil.




## ¿En qué radica la dificultad o facilidad a la hora de inyectar código Javascript?



El ejemplo visto en las líneas anteriores ilustra una inyección de código Javascript básica, un foro en el que no hay restricción alguna, metemos código javascript y se publica sin más. Normalente esto no te va a funcionar en ningún foro, hace unos años si funcionaba, pero hoy ya no, al menos no de forma tan trivial. Por ello cuando un atacante quiere estudiar la forma de inyectar código javascript ha de tener máximo de información posible de lo que quiere hacer. Imaginad que detectáis que alguien utiliza un foro basado en la tecnología PHPBB entonces podriamos descargarlo, y configurarlo lo más parecido posible al foro real, y dentro de vuestro entorno virtual controlado probáis distintas inyecciones para ver el resultado hasta llegar a vuestro objetivo.

Vamos a ver un ejemplo sencillo de cómo se puede engañar a un filtro de código javascript. Lo primero que voy a mostraros es la estructura de un script Javascript:



    <script>CODIGO...CODIGO....CODIGO....CODIGO....</script>



Si nos fijamos lo importante es que el código esté encerrado entre los tags `<script>` y `</script>` Un filtro que estuvo muy de moda algunos años atrás era uno que lo que hacía era detectar la palabra `<script>` y `</script>` de forma que si alguien escribía en el foro:



    Hola encantado de formar parte de esta comunidad <script> codigoqueenvialacookie </script> Saludos



Se publicaba lo siguiente:



> Hola encantado de formar parte de esta comunidad  codigoqueenvialacookie  Saludos



Y el código javascript encargado de robar la cookie se quedaba "inocuo", no se ejecutaba porque el filtro había borrado los tags `<script>` y `</script>` ¿Cual fue el método que se ideó para engañar a este filtro?. Una solución bastante sencilla que consistía en publicar lo siguiente:



    Hola encantado de formar parte de esta comunidad <scr<script>ipt> codigoqueenvialacookie </scr</script>ipt> Saludos



Si nos fijamos lo que he hecho es meter dentro del tag `<script>` el mismo tag en medio. ¿Por qué? Porque yo sabía que el filtro me iba a borrar el tag `<script>` y me iba a publicar lo demás así que; como resultado final el fitro borraba el tag `<script>` que había incrustado y sin darse cuenta me dejaba pasar el tag que tenía roto:



    Hola encantado de formar parte de esta comunidad <scr<script>ipt> codigoqueenvialacookie </scr</script> ipt> Saludos
    Hola encantado de formar parte de esta comunidad <script> codigoqueenvialacookie </script> Saludos



Para llegar a esta solución fue necesario hacer bastante pruebas, las cuales las cuales se realizan en entornos virtuales sin hacer ruido, Cuando se ve que funciona en el entorno virtual se pude verificar que realmente funcionaba en el real, así que es prudente notificar a los administradores de la vulnerabilidad y que la misma sea corregida.

Con esta lección espero que hayamos podido comprobar la importancia de Javascript en el mundo de la seguridad informática y cual es su papel en el mundo del "hacking".

Fuente: CusrsoHacker

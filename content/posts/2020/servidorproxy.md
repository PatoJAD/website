---
title: 'Servidor proxy. Oculta tu identidad'
date: '2020-04-21 08:48:00'
description: 'Hoy hablemos un poco sobre las ventajas y desventajas de utilizar un servidor proxy. Te espramos para saber tu opinion'
type: 'post'
tags: ['proxy', 'servidod', 'identidad', 'privacidad', 'anonimato']
categories: ['Redes']
img: 'https://www.vozidea.com/wp-content/uploads/2020/01/servidor-proxy-tipos.png'
authors: ['PatoJAD']
---

Vamos a centrarnos en los los **servidores de tipo proxy**. Por lo general son servidores cuya función es interponerse entre la página web que queremos visitar, o servidor donde nos queremos conectar y nosotros de tal forma que no el servidor objetivo jamas pueda saber que realmente somos nosotros quienes estamos accediendo a la información.

## Ventajas de utilizar un servidor proxy

Los servidores proxys son servidores que cumplen una función que a nosotros nos puede venir bien en diversas situaciones. Como siempre el que nosotros podamos sacar un partido mayor o menor va a depender siempre de nuestra capacidad de imaginación.

Para los **administradores de redes** (sobre todo en empresas) este tipo de servidores pueden ser utilizados para que los ordenadores de los empleados no sean los que salgan directamente a internet. Con esto ganan 2 cosas, por un lado pueden filtrar ciertas páginas webs y por otro lado protegen a los usuarios. Para entender cómo se realizan estas dos funciones vamos a ver el esquema básico de conexion con un servidor proxy intermediando

![](http://cursohacker.es/sites/default/files/styles/large/public/images/20141409122534.gif?itok=M709Qd_2" >}}

Como se puede observar en **el esquema el servidor proxy está en la fontera entre internet y la red local**. Vale aclarar que los servidores proxies no son sustitutos de los firewall, y aunque ambos están en la frontera, el proxy suele colocarse justo detrás del firewall para que también **esté protegido**.

Cuando un PC de la red interna quiere visitar una página lo que hace en realidad es pedírsela al servidor proxy. Una vez hecha la petición el servidor proxy hará **dos comprobaciones**. La primera será **mirar si la web solicitada está en su lista de webs permitidas** (si se tiene configurado un proxy restrictivo) o **mirará que no esté en su lista de webs denegadas** (si ste tiene configurado en modo permisivo). En el caso de que la web no esté restringida el servidor proxy pasará a servirla al PC que la solicitó.

Para poder servirla será el proxy quien se comunique con la web (ubicada en la red externa, internet), la analice y se la sirva al cliente. **Si la página contenía algun tipo de [código malicioso en javascript](/post/2020/04/el-papel-de-javascript-en-la-seguridad/) y el servidor proxy lo detecta lo eliminará** y protegerá al PC sirviéndole la página limpia de código malicioso.

---

Los servidores proxies ayudan a **descongestionar la red**. Esto es otra ventaja para los administradores de redes ya que con el mismo ancho de banda pueden responder a una demanda superior de peticiones.

Cuando un servidor proxy visita una web a la vez que la sirve al cliente que se la ha solicitado también puede **guardarla en su memoria caché** por un tiempo determinado si se ha habilitado esta opción en la configuración. En caso afirmativo, el servidor proxy irá almacenando cada web que se le solicite en su memoria hasta llegar al tope máximo. Entonces cada vez que se le hace una nueva petición, justo después de comprobar que la web solicitada no está restringida comprobará si la tiene almacenada en su memoria caché, de ser así, no tendrá que acceder a internet para descargarla de nuevo, se la servidrá directamente de su memoria caché.

De este modo si 10 clientes piden visitar una web el servidor proxy solo tendrá que hacer una petición para satisfacer la demanda de 10 reduciendo así 9 peticiones. Esto es especialemente útil en contenido multimedia que suele ser bastante pesado.

---

Como consecuencia directa del punto anterior **mejoran notablemente la velocidad de carga de las páginas webs**. Al no tener que solicitar la página web al servidor en internet es como si el servidor estuviera en la red local, con lo que el usuario final percibe una mejora en los tiempos de carga en las páginas que más se visitan.

---

Un servidor proxy **elimina las restricciones por ubicación**. En muchos países (sobre todo orientales) el gobierno impone fuertes restricciones de acceso a la información. Bloqueando todos aquellos sitios webs que ellos consideran que no deberían ser visitados por sus ciudadanos.

Con independencia de si esto está bien o está mal, un ciudadano que viva en un lugar que tenga restricciones de este tipo puede utilizar un servidor proxy **ubicado en otro país** y así saltar esta restricción. Para lograrlo lo único que debe tener en cuenta es que desde su PC **pueda conectar con la IP del servidor proxy** extranjero.

---

Un servidor proxy te evita **bloqueos por [IP](/post/2020/01/direcciones-ips-nuestra-huella-en-la-red/)**. Cuando nos vemos obligados a compartir una red (en hoteles, cibercafés, redes públicas...) estamos compartiendo nuestra IP pública con todos los usuarios de la red local en la que estamos conectados.

Recordemos, en una red local cada dispositivo tiene una IP privada que lo identifica dentro de la red, pero todos **comparten la misma IP pública**. Si un usuario realiza una acción que conlleve un baneo en un portal de la IP pública que compartes con dicho usuario si dispones de un servidor proxy ubicado fuera de la red podrás seguir accediendo ya que será tu servidor proxy **quien acceda al portal web por ti** con su IP pública.

---

Un servidor proxy **OCULTA TU IDENTIDAD**. En internet tu [identidad es tu IP](/post/2020/01/direcciones-ips-nuestra-huella-en-la-red/), en el momento que pones un servidor proxy por medio es su IP la que sale al mundo para darte las páginas que solicitas.

Normalmente "no hay necesidad" de ocultar tu IP a las webs que visitas, pero en algunas ocasiones puede que no quieras dejar constancia de que has estado ahí. En este caso un servidor proxy es justo lo que necesitas. Quizá puedas preguntarte que aunque el servidor final desconozca tu IP el proxy **podría guardar una relacción entre tu IP y lo que has vistado**. Esto es cierto, el servidor proxy tiene la capacidad de almacenar que página web ha pedido cada IP.

Para resolver este problema existen **dos vías**. La primera es utilizar proxies que sean "anónimos". Los más cautelosos incluso utilizan **varios proxies encadenados**, y cuando digo varios me refiero a 10 o 12 y además ubicados en distintos países. Con que solo 1 de la cadena no tenga el log el rastreo será imposible. La otra vía, la que utilizan algunos "crackers" ("hackers" con malas ideas) consiste en acceder al PC de un usuario, ya sea buscando un fallo de seguridad o aplicando técnicas de ingeniería social e **instalar un servidor proxy en su ordenador** sin que el usuario tenga constancia. De este modo el "cracker" utilizar a su víctima como servidor proxy y todo lo que haga lo hará desde la IP pública de su víctima.

## Desventajas de utilizar un servidor proxy

Como toda herramienta, ya sea informática o no, **siempre hay una parte positiva y una negativa**. Los serviores proxies no son una excepción y al igual que nos dan una serie de ventajas como las que hemos visto también conllevan algunos riesgos la utilización de los mismos. En las siguientes líneas vamos a ver los principales problemas y casuísticas que se han dado por utilizar servidor proxies:

**Interceptación del tráfico**. Si nosotros tenemos una red con 100 dispositivos y alguien se propone interceptar el tráfico de los 100 dispositivos tiene varias opciones. La primera y mas tediosa ir buscando fallos de seguridad dispositivo a dispositivo hasta tener controlados los 100. Esto evidentemente es una tarea bastante larga y con un alto riesgo de que salte una alarma en algún dispositivo y se descubra.

Ahora, si todo el tráfico pasa por el servidor proxy, el atacante solo debe centrarse en acceder al servidor proxy, si lo consigue habrá intercpetado _de un plumazo_ el tráfico de todos los dispositivos.

---

**Modificación de la información**. Si alguien con malas intenciones consigue acceso al servidor proxy, podrá ver las páginas que hay cacheadas en memoria, o modificar las reglas por las que se rige el servidor proxy, y **manipular las páginas que se entregan a los usuarios** finales.

Tengas el sistema de contraseñas que tengas con este método pueden acceder a casi cualquiera. Pongamos el caso, el atacante crea una máquina virtual y en ella instala un **servidor LAMP** (servidor para montar páginas webs). Sobre ese servidor LAMP monta una réplica de una página en la que tu tienes usuario y contraseña. Ahora en el servidor proxy hace que cuando le pidas dicha página en vez de la original te de la réplica. En cuanto trates de logearte en la web falsa lo que estarás haciendo es darle tu usuario y clave al atacante.

---

**Problemas de incoherencia**. Si tienes activada la opción de cacheo de páginas puede darse el caso de que un usuario esté viendo contenido que haya sido modificado, o incluso borrado, pero que el proxy aún **no lo ha vuelto a recachear**. Por este motivo es más recomendable activar solo el cacheo de contenido multimedia, imágenes, vídeos, archivos de sonido... que no son tan propensos a cambiar en el tiempo.

---

**Denegación de servicio DOS**. Si alguien de forma intencionada o no satura el servidor proxy éste dejaría de atender las peticiones de los demás usuarios, imposibilitando así su acceso a internet.

¿Vos usas un proxy para navegar?¿Que recomendacion le darias a alguien que quiere iniciar con esta practica? Contanos todo en nuestro grupo de Telegram!

{{< link url="https://t.me/PatoJADCommunity" text="Unite" >}}

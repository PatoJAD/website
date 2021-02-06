---
title: 'HTTP/3 ¿Una internet mas rapida?'
date: '2020-03-25 08:47:00'
description: 'Un nuevo protocolo se acerca a nostros para definir una internet mas rapida...'
type: 'redesyseguridad'
tags: ["http","red","internet","protocolo","educacionit"]
category: ["redesyseguridad"]
img: 'https://blog.educacionit.com/wp-content/uploads/2020/02/1366_2000-1-2.jpg'
authors: ["PatoJAD"]
---

## HTTP/3: qué es, de dónde viene, y qué es lo que cambia para buscar un Internet más rápido



Vamos a intentar explicar qué es, o de que se trata exactamente el HTTP/3, la nueva versión de uno de los protocolos más importantes para el funcionamiento de internet. Se trata de un protocolo que lleva ya unos años desarrollándose, y que promete llegar a partir de este año para ofrecer unas cargas más rápidas en todo internet para lo cual aplica algunos cambios muy importantes en la manera en la que se intercambian los datos en la red.



Como para entender la importancia de este cambio hay que saber un poco cómo funciona internet en general, nosotros vamos a intentar dar un pantallazo de todo como para poder entender el tema. Primero, deberiamos basarnos en **qué es y cómo ha evolucionado el protocolo HTTP** con sus diferentes versiones. Y luego, intentaremos explicar de la forma más sencilla posible qué es el HTTP/3 y los cambios que propone, y terminaremos dándo una idea de los sitios en los que ya se ha implementado.



Para entender todo esto, vamos a adentrarnos en **varios conceptos que pueden llegar a ser densos y difícil de entender para los usuarios que no se dedican explícitamente a la informatica**. Por eso, vamos a intentar no centrarnos tanto en los tecnicismos para intentar explicar solo las cosas que mas visibles para el usuario.




## Qué es el HTTP


{{< img src="https://i.blogs.es/392246/los-protocolos-que-se-usan-en-internet/1366_2000.jpg" >}}


Las comunicaciones de internet funcionan a través de protocolos. Por una parte tienes el Protocolo de Internet, Internet Protocol o IP en inglés del cual hablamos anteriormente, si queres saber mas podes ingresar a "{{< textlink text="¿Que hay detas de una IP?" url="/redesyseguridad/2020/02/qué-hay-detrás-de-una-ip/" >}}" o "{{< textlink text="Direcciones IP nuestra huella en la red" url="/redesyseguridad/2020/01/direcciones-ips-nuestra-huella-en-la-red/" >}}". Nadie puede navegar por la red sin una dirección IP, y cuando escribes patojad.com.ar, lo que hace tu navegador es traducir ese texto a una dirección IP para conectar con el servidor de la web (en nuestro caso GitLab Pages).



Y otro igualmente importante es el **Protocolo de Transferencia de Hipertexto, Hypertext Transfer Protocol o HTTP en inglés. Es el protocolo que utilizan los navegadores para comunicarse con los servidores web,** y el que deben seguir el resto de software perteneciente a la arquitectura de la web, como los servidores, proxies y los mencionados navegadores.



También es el que define la sintaxis y la semántica que utilizan los elementos de software de la arquitectura web para comunicarse. Además, se usa también para la **transferencia de imágenes y el resto de elementos que componen una web,** desde el servidor al navegador, y en las apps para comunicarse con las APIs.


{{< img src="https://i.blogs.es/c14f79/get-video/1366_2000.jpg" >}}


Este protocolo sigue el modelo de cliente-servidor. Esto quiere decir que cuando tú estableces una conexión, **realizas peticiones a un servidor** para que este te muestre el contenido de la página. Este contenido se mostrará en tu navegador usando el código HTML, que es el estandarizado para colocar los elementos que hay en cada web, pero para cargar estos elementos, te llegarán a través de la conexión establecida.


{{< img src="https://i.blogs.es/3e82f1/peticion/1366_2000.jpg" >}}


En esta imagen puedes ver los diferentes campos que tiene una petición de HTTP. El primero **es el método que define el tipo de operación que se quiere realizar,** y que suele ser un verbo como GET (obtener) o POST, o un nombre como OPTIONS o HEAD.

A la derecha viene la dirección del recurso que se ha pedido, o la URL de este recurso. A esta dirección se le quitan los elementos obvios del contexto, como el http:// inicial, el puerto o el nombre del dominio. Le acompañan la versión del protocolo HTTP, y debajo ya tienes las cabeceras opcionales que aportan información adicional a los servidores. Si se usan métodos como POST, también puede haber un cuerpo de mensaje para enviar información al servidor.




## Cómo ha evolucionado el HTTP



El HTTP fue desarrollado durante años por el World Wide Web Consortium y la Internet Engineering Task Force (IETF). **La primera versión fue la 0.9 lanzada en 1991,** que fue mejorada con el el HTTP/1.0 lanzado en 1996, y culminada en 1999 con el lanzamiento de la versión 1.1.



Llegados a este punto, puedes entender que el Internet y las webs de 1999 no tienen nada que ver con lo que puedes encontrarte hoy en día en la red. Es por eso, que a lo largo de los años **el protocolo también ha tenido que actualizarse.** Al hacerlo no ha habido grandes cambios, pero sí se ha perfeccionado la manera en la que se transfieren los datos en la red.


{{< img src="https://i.blogs.es/9e0060/http2/1366_2000.png" >}}


En 2012 se publicaron los primeros borradores de la nueva versión mejorada de HTTP, que acabó lanzándose oficialmente en mayo del 2015 con el nombre HTTP/2. Este protocolo permitió enviar más de un recurso en una sola conexión de TCP, lo que hizo que se redujese el número de peticiones para cargar una web. En pocas palabras, **se aceleró la carga de las webs** al permitir que la transferencia de elementos fuera más rápida.



Para la próxima versión no tendremos que esperar tanto, ya que tras años de trabajo, en 2018 se le da nombre al que será el próximo paso en la cadena evolutiva. **Es el HTTP/3 que debería llegar en 2020** según su documentación oficial para conseguir un internet todavía más rápido que el que tenemos hasta ahora.




## Qué es el HTTP/3 y qué es lo que cambia



HTTP/3, es el nombre oficial de la próxima versión de protocolo de comunicaciones que permite las transferencias en la web. Esta nueva versión tiene un cambio muy importante, pues **será la que deje de utilizar por primera vez el protocolo TCP** que hasta ahora se ha venido utilizando en el HTTP, y lo sustituirá un nuevo protocolo llamado QUIC, e inicialmente desarrollado por Jim Roskind en Google, aunque al ser un proyecto de código abierto el desarrollo ha sido conjunto por la comunidad.



El TCP es un protocolo desarrollado en los años 70 del pasado siglo, y desde entonces forma parte del protocolo IP. Es el encargado para crear conexiones entre los ordenadores, a través de las cuales se envía después el flujo de datos. Este protocolo **es utilizado por otros protocolos como el HTTP, SMTP, SSH y FTP,** y es el encargado de garantizar que los datos se entregan sin errores en el destino previsto, y en el mismo orden en el que fueron transmitidos.



Para realizar conexiones, este protocolo realiza una conexión de múltiples pasos entre cliente y servidor, asegurando el orden de los paquetes, con confirmaciones paquete a paquete recibido, y retransmitiendo si es necesario los paquetes perdidos. También se realizan comprobaciones de la computación por si hubiera errores. Esto quiere decir que cuando se envía un paquete de datos, el receptor y el emisor **intercambian información de forma constante para asegurarse de que todo se está haciendo correctamente.**




## Qué supone cambiar TCP por QUIC


{{< img src="https://i.blogs.es/6a510d/quic/1366_2000.jpeg" >}}


En esta tabla de arriba tienes una comparativa en la que ves cómo son las conexiones con el TCP normal, el TCP con el cifrado TLS para proteger la privacidad de los datos, y QUIC. La conexión se deshace de las conexiones continuas con las que emisor y receptor se aseguran de que los datos se envían y reciben correctamente, y también se elimina el intercambio de datos con el que establecer el cifrado TLS. **QUIC simplemente envía los datos.**



**Este cambio mejorará la latencia de la conexión** con menos intercambio de datos entre emisor y receptor. También tiene soporte para varias conexiones multiplexadas, lo que significa que se combinan dos o más señales para transmitirlas por un único medio de transmisión, algo que ahorra tiempo reduciendo el número de medios de transmisión, y se ahorrará tiempo enviando los datos cifrados por defecto.



Lo cual podeos resumirlo como que tendramos que esperar menos para que carguen nuestros sitios favoritos como PatoJAD...




## Dónde se ha implementado ya el HTTP/3



¿Dónde está ya implementado el HTTP/3? Pues tras llevar haciendo pruebas desde mediados de 2019, tanto Firefox como Chrome han implementado ya el nuevo protocolo en las versiones estables del navegador. Chrome lo tiene desde la build 79 lanzada en diciembre, y Firefox desde su build 72 de enero de este 2020.



También Cloudflare, del que ya hablemos hablado anteriormente en {{< textlink text="nuestra publicacion" url="/programacion/2019/10/cloudflare-que-es-ventajas-y-desventajas/" >}}, ha implementado la compatibilidad de este protocolo. Y esta empresa es muy importante, porque actúa como intermediaria entre el cliente y el servidor, y son muchas las empresas que han apostado por sus servicios a nivel mundial, tanto ques **si Cloudflare tose, a internet le sube la fiebre.** Una caída de este servicio hace que miles de webs dejen de funcionar, como este sitio por ejemplo, y por eso es importante que ya esté preparada.





En cualquier caso, lo que debes tener claro es que **el salto al HTTP/3 no va a ser algo que vayas a notar demasiado a nivel de usuario.** Las empresas de internet se están preparando para él, por lo que cuando sea lanzado oficialmente durante este año no habrá ningún tipo de apagón, simplemente poco a poco veremos cómo algunos servicios adaptados empezarán a cargar un poco más rápido.





Fuente: {{< textlink text="EducacionIT" url="https://educacionit.com/" >}}

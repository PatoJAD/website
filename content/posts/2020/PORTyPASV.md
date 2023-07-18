---
title: 'FTP problemas de conexion, PORT y PASV'
date: '2020-02-14 11:42:00'
description: 'Seguimos viendo un poco mas sobre redes, hoy nos toca seguir nadando en FTP para conocer sus problemas de conexion, PORT y PASV'
type: 'post'
tags: ['ftp', 'red', 'internet', 'port', 'pasv']
categories: ['Redes']
img: 'https://blog.dataprius.com/wp-content/uploads/2018/10/ilustracion-ftp.jpg'
authors: ['PatoJAD']
---

Uno de los problemas de los servidores FTP es el modo de trabajo en que se pensaron. Cuando estos servidores empezaron a proliferar en la red, hace ya algunos años, la gente se conectaba a internet de forma directa, sin routers, eran aquellos tiempos en los que los módems de 56k hacían que un pc se conectara directamente a internet sin [IP privada, directamente con la IP pública](/post/2020/01/direcciones-ips-nuestra-huella-en-la-red/).

En estos escenarios no había ningún problema en trabajar con servidores FTP, ya que se trabaja de forma directa entre tu IP pública y la IP pública del servidor FTP. Hoy, con el auge de las redes LAN y las IPs privadas el modelo de conexión con los servidores FTP han tenido ciertos problemas que han sido solucionados, pero que aún así debemos tener claro cómo se ha implantado la solución para aquellos casos en los que no somos capaces de trabajar correctamente con un servidor FTP. Una consecuencia directa de esta solución es la posibilidad de utilizar un servidor FTP como herramienta de intromision a sistemas. Por lo cual es importante conocer a fondo esta herramienta ya sea que seamos administradores de sistemas o informaticos del area de seguridad.

## Protocolo de conexión en servidores FTP

Haciendo memoria de las últimas publicaciones sobre servidores y clientes FTP ya deberías saber que este tipo de servidores trabajan de forma estándar sobre el puerto 21. Esto significa que cuando nos conectamos a un servidor FTP se establece una conexión entre un puerto aleatorio de nuestro PC y el puerto 21 del servidor FTP. De este modo creamos un canal de conexión que podría representarse así:

{{< img src="http://cursohacker.es/sites/default/files/styles/large/public/images/20131912152702.png" >}}

Una vez establecido este canal ya estamos en disposición de trabajar con el servidor FTP al que nos hemos conectado. Nosotros emitimos comandos por este canal y el servidor nos devuelve la respuesta. Pero claro, ¿Qué ocurre cuando pedimos descargar un archivo? Muy sencillo, que el canal se ocuparía descargando el archivo y no podríamos seguir emitiendo más peticiones hasta completar la descarga. Esto es un problema que nos impediría trabajar en paralelo, poder descargar varios archivos a la vez o navegar por el servidor mientras descargamos archivos. Para soluciona esto, los servidores FTP cuando pedimos descargar un archivo "crean" un canal secundario. De esta forma el canal primario siempre queda disponible para lanzar órdenes y las descargas se hacen en canales secundarios, permitiendo así poder seguir trabajando con el servidor FTP aun estando descargando archivos u haciendo cualquier otra tarea.

Aquí es donde se crea el problema, a la hora de crear el canal secundario. Cuando se trabaja con IPs públicas directamente, el servidor FTP conocía tu IP pública, y era capaz de conectar contigo de forma directa, hoy esto no es posible, ya que si estás en una red local y tienes una IP privada, el servidor FTP no conocerá tu IP privada y cuando intenta crear el canal secundario falla. Pero vamos a verlo con un ejemplo gráfico:

{{< img src="http://cursohacker.es/sites/default/files/styles/large/public/images/20131912155613.jpg?itok=QWzqwLGV" >}}

Nosotros estamos trabajando en nuestro PC que es el que tiene la IP 192.168.1.2. Recordemos que esto es una IP privada, que solo "tiene validez" dentro de nuestra red local. El router se encargará de convertir nuestra IP privada en una IP pública, en nuestro ejemplo se convertirá nuestra IP privada 192.168.1.2 en la IP pública 80.5.63.7 y llegamos al servidor FTP que tiene la IP 87.25.67.5. Si en este punto mirásemos el log del servidor FTP veríamos que se ha conectado un usuario desde la IP 80.5.63.7 y no desde 192.168.1.2, esto es porque en internet nosotros aparecemos con nuestra IP pública. Así que a ojos del servidor FTP nosotros somos 80.5.63.7.

Bien ya tenemos creado nuestro canal primario. Enviamos al servidor el [comando para descargar un archivo](/post/2020/02/comandos-ftp/) y este se dispone a crear el canal secundario para entregarnos este archivo por el canal secundario y que nosotros podamos seguir dándole ordenes por el canal primario. Entonces como para el servidor nosotros somos el cliente con IP 80.5.63.7 el servidor FTP intentará craear un canal secundario con la IP 80.5.63.7. Pero esta es la IP de nuestro router, y cuando detecta que un servidor intenta establecer una conexión no sabe qué hacer y no nos redirige la petición a nuestro PC 192.168.1.2, con lo cual el canal secundario nunca se establece y falla. Este es el motivo por el que parece que el servidor se queda colgado. Realmente no es que se haya quedado colgado es que por nuestra configuración de red el servidor FTP no ha sabido establecer con nosotros el canal secundario necesario para hacer la descarga del archivo.

## Modo activo y modo pasivo, comando PORT y PASV

Para solucionar el problema descrito anteriormente tenemos comandos para indicar al servidor la arquitectura de nuestra red y así poder trabajar de forma correcta con el servidor, sin que el nuestra arquitectura sea un impedimento. El modo activo y el modo pasivo indican quien abre el canal secundario y quien espera la conexión. En modo pasivo las conexiones son siempre abiertas por el cliente, mientras que en modo activo se abren por el que envía los datos, el servidor. En el ejemplo anterior el servidor (que por defecto tiene establecido el modo activo) es quien crea el canal secundario con nosotros encontrándose la dificultad del router, si nosotros habilitamos el modo pasivo seremos nosotros quienes crearemos el canal secundario y así evitamos que la conexión quede colgada en el router. Al igual que nosotros hemos sido capaces de establecer el canal primario también debemos ser capaces de craear el secundario si ningún firewall nos lo impide.

## Solución comando PORT ftp server

Con este comando nosotros indicamos al servidor FTP dónde estamos esperando la conexión. ¿Cómo y en qué situaciones este comando nos puede ayudar? Supongamos que el administrador del firewall o cortafuegos que protege al servidor FTP ha denegado todas las nuevas conexiones que se le hagan por puertos distintos al 21, con esta configuración nosotros no podriamos establecer el canal secundario ya que su cortafuegos nos lo impediría. En este caso podemos hacer uso del comando PORT para indicar al servidor FTP cómo ha de conectarse a nosotros.

En primer lugar. en nuestro router debemos de mapear un puerto. Así mapeando un puerto hacemos que cuando el servidor FTP se conecte con nuestro router para establecer el canal secundario en el puerto que le especifiquemos ésta conexión sea redirigida a nuestro PC y así no se queda "parada" en nuestro router. Supongamos que mapeamos el puerto 6970. A efectos práticos, toda conexión que llege a la IP pública de nuestro router (80.5.63.7) al puerto 6970 será redirigida a nuestra IP privada (192.168.1.2) al puerto 6970. Así que debemos indicar al servidor FTP que queremos que establezca el canal secundario con nuestra IP pública en el puerto 6970 (80.5.63.7:6970). Esto lo hacemos así:

    PORT 80,5,63,7,27,58

Veamos con detalle de donde han salido estos números, los 4 primeros 80 5 63 y 7 hacen referencia a nuestra IP, los 2 siguientes 27 y 58 al puerto. ¿Cómo se han calculado? Así; queríamos indicar al servidor el puerto 6970 entonces hemos hecho lo siguiente: 27x256=6912; 6912+58 = 6970 Si tu quieres calcular estas 2 componentes para cualquier puerto, primero divide el puerto entre 256 quédate con la parte entera, luego multiplica la parte entera por 256, el segundo número es al diferencia entre el resultado obtenido el y el puerto en cuestión.

## Solución comando PASV ftp server

Si nos encontramos en una red local en la que nos es imposible configurar nuestro router para mapearnos un puerto entonces nuestra única solución será indicarle al servidor FTP que seremos nosotros quienes crearemos el canal secundario. Para esto primero pasamos el comando PASV sin parámetros para indicar al servidor esta condición. Seguidamente le pasamos un comando PORT para indicarle al puerto del servidor FTP al que deseamos conectarnos. Esta sería la secuencia

    PASV
    PORT 87,25,67,5,27,58

Primero hemos establecido el modo pasivo y luego le hemos dicho que nos vamos a conectar a su IP al puerto 6970, ahora cuando hagamos el comando GET para descargar el archivo se creará el canal secundario con la configuración indicada.

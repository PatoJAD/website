---
title: '¿Qué hay detrás de una IP?'
date: '2020-02-03 09:37:00'
description: 'Vamos a ver un poco mas a fondo lo que es una IP y la informacion que esta directamente relacionada con ella.'
type: 'post'
tags: ['ip', 'red', 'internet']
categories: ['Redes']
img: 'https://www.comparahosting.io/wp-content/uploads/2017/10/ip-privada-publica.png'
authors: ['PatoJAD']
---

Una dirección IP no es algo que se asigne de forma aleatoria sin respetar ningún principio. Conociendo la dirección IP de alguien tendremos a nuestra disposición una cantidad de datos que debemos conocer a la hora de saber ante qué situación nos encontramos. Por la misma razón es necesario comprender como se estructuran para poder crear nosotros entornos de prueba que represeten la realidad lo mas fiel posible.

Ya avanzamos en la publicación anterior una {{< textlink text="introducción a lo que es una ip" url="/post/2020/01/direcciones-ips-nuestra-huella-en-la-red/" >}}. Hoy veremos mas a fondo las partes en las que se dividen. Cojamos por ejempo la siguiente dirección IP: 192.168.5.1, es una IP privada, (luego veremos porqué) internamente la IP, todas las direcciones IPs tiene una parte de red y otra parte de host, se represeta así:

{{< img src="http://cursohacker.es/sites/default/files/styles/large/public/images/20130912140151.jpg?itok=1qFl8cpq" >}}

En donde 192 es el primer octeto, 168 el segundo, 5 es el tercero y 1 es el cuarto. Saber esto es necesario para comprender que las direcciones IPs son finitas, y van desde:

    00000000.00000000.00000000.00000000 -> 0.0.0.0 hasta:
    11111111.11111111.11111111.11111111 -> 255.255.255.255

No hay mas IPs, la tipología de red en IPv4 que es la que utilizamos en la actualidad no permite mas direcciones IPs. Esto nos da una suma de 4.228.250.625 direcciones IPs en el mundo. Así que si sabemos que cada dispositivo (pc, tablet, movil con conexión...) tienen una dirección IP nos damos cuenta de que se nos quedan cortas para cubrir a toda la población mundial. Así que para ello se han estructurado las direcciones IPs de forma que algunas serán públicas y otras privadas, con la característica que las privadas son comunes para cada red local (la red interna de tu casa es una red local).

Las direcciones IP se dividen en clases para definir las redes de tamaño pequeño, mediano y grande. Las direcciones Clase A se asignan a las redes de mayor tamaño. Las
direcciones Clase B se utilizan para las redes de tamaño medio y las de Clase C para redes pequeñas. Para conseguir esta división se utiliza el concepto Máscara de red.

## La máscara de red y su aplicación en redes

Una máscara de red es un filtro que se utiliza para ver si el equipo al que queremos conectarnos está en nuestra misma red o en otra. A nivel técnico saber si un equipo está en nuestra red o no tiene múltiples características, los ataques a un equipo que está en tu misma red son mucho mas efectivos que aquellos que están fuera de tu red, la primera razón es que si estamos en la misma red ya nos hemos saltado primer elemento que hace de frontera entre la red del equipo al que queremos atacar y la nuestra. Las máscaras de red principales son:

-   Para redes de clase C: 255.255.255.0
-   Para redes de clase B: 255.255.0.0
-   Para redes de clase A: 255.0.0.0

Lo que hace una máscara de red es diferencial que parte de la dirección IP indica la red y que parte de la dirección IP hace referencia a la máquina en particular. Vamos a analizar esto con un ejemplo práctico para que se vea mas claro. Supongamos que tenemos la siguiente dirección IP 192.168.100.250 con la máscara de red 255.255.255.0 Ya vemos que es una clase C por la máscara de red y mas cosas que veremos mas adelante. Ponemos juntas tanto la IP como su máscara:

    192.168.100.250 En binario-> 11000000.10101000.01100100.11111010
    255.255.255.000 En binario-> 11111111.11111111.11111111.00000000

Se interpreta lo siguiente: la parte de la red la forma aquella parte de la dirección IP que en su máscara de red está formada por unos (1). En nuestro caso: 192.168.100 y la parte que identifica el ordenador en particular dentro de la red identifica la parte formada por ceros en la máscara de red. En nuestro caso 250. Aplicando lo anterior deducirmos que en nuestra red estarán las IPs que van desdes 192.168.100.0......hasta .....192.168.100.255. Es decir en nuestra red solo podrán existir 254 ordenadores, si queremos tener más tendríamos que plantear utilizar una red de clase B o utilizar varias de clase C. He dicho 254 ordenadores puesto que en cada red la primera ip (en nuestro ejemplo 192.168.100.0) se utiliza como dirección de red y no puede ser asignada a nigún equipo, del mismo modo la última dirección, (en nuestro ejemplo 192.168.100.255) se utiliza como dirección de **broadcast o dirección de difusión**. Que quiere decir que todo lo que enviemos a esa IP el router o switch que gestiona la red lo reenviará a todos los ordenadores que pertenezcan a la red. Así que si tenemos 256 Ips y 2 están reservadas nos quedan 254 disponibles.

## ¿Cómo identificar de forma rápida la clase a la que pertenece una IP?

Nosotros podemos saber a que clase de red pertenece una IP mirando su primer octeto y teniendo en mente la siguiente tabla:

| Clase de dirección | Intervalo de primer octeto | Cantidad de hosts permitidos |
| :----------------- | :------------------------: | :--------------------------: |
| A                  |          0-127\*           |          16.777.216          |
| B                  |          128-191           |            65.535            |
| C                  |          192-223           |             254              |

Toda dirección comprendida entre 0.0.0.0 y 127.255.255.255. es una dirección IP de una red de clase A (a excepción de 127.0.0.1 que es una IP de pruebas tambien conocido como localhost, que todo ordenador se asigna a si mismo).
Toda direccion comprendida entre 128.0.0.0 y 191.255.255.255 es una dirección IP de clase B
Toda dirección comprendida entre 192.0.0.0 y 192.255.255.255 es una dirección IP de clase C

Por lo que si vosotros pedís la IP a alguien y os da una del tipo 192.168.3.25 ya sabeis que os está dando una IP de su red clase C privada y que si no estáis en su misma red no os valdrá para nada, en cambio si os da una IP del tipo: 80.25.68.8 veís que es una IP de clase A, llamada también IP pública con lo si os está dando acceso a su red desde fuera. En el futuro aprenderemos a ver cómo saltamos de una red a otra cuando nos queremos conectar con un equipo de alguien.

## Información privada que podemos obtener de una dirección IP

En este punto me encuentro en dudas de si efectivamente mostrar o no que podemos obtener y para que, creo que la gente que realiza esta clase de busquedas en internet no suele tener buenas intenciones y desde aqui es poco lo que puedo controlar. Sin embargo lo ideal es que conozcan lo minimo que se puede obtener sin dejar ningun link en referencia.

Con una ip y algun sitio web podremos obtener facilmente la geolocalizacion (no especifica) de la IP, por ejemplo nos permite determinar si la persona es efectivamente quien dice ser, y el provedor de internet. Lo cual puede ser muy util con fines educativos...

De mas esta decir que no procedere a dejar mas informacion pero todo lo podemos hablar y aprender juntos en el grupo de telegram...

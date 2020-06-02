---
title: '¿Que es DuckDNS?¿Como lo instalo?'
date: '2020-06-02 12:17:00'
description: 'Existen muchas ddns y hoy vamos a ver un poco mas sobre DuckDNS un DDNS gratuito muy util en estos dias'
type: 'redesyseguridad'
tags: ["ip","dns","ddns","duck","dinamic"]
category: ["redesyseguridad"]
img: 'https://www.redeszone.net/app/uploads-redeszone.net/2017/12/DDNS-Duck-DNS.png'
authors: ["PatoJAD"]
---

{{< br >}}

Ya hablamos anteriormente sobre {{< textlink url="" text="dyndns" >}} y {{< textlink url="" text="noip" >}} y como se sabe no puede faltar ningun Pato en esta familia. Por lo cual te traemos DuckDNS otro DNS Gratuito pero mas cariñoso!!!

{{< br >}}
{{< br >}}

## ¿Cómo es esto gratis?

{{< br >}}

Hemos creado un servicio que hemos querido para nosotros y creemos que es **gratuito o lo más barato posible** para cubrir los costos de funcionamiento, nuestro intento es alojar y ejecutar el servicio con un desembolso casi nulo, excluyendo nuestro tiempo.

{{< br >}}
{{< br >}}

## ¿Qué datos guardas?

{{< br >}}

La respuesta simple es: **lo menos posible**. Además de los registros de datos que se utilizan para facilitar y monitorear nuestros servicios, solo almacenamos su dirección de correo electrónico, ip, token, dominios y, por supuesto, sus ips de destino.

{{< br >}}
{{< br >}}

## Instalar GUI para linux

{{< br >}}

Muchos queremos actualizar la ip para mantener siempre al dia los datos y para eso **DuckDNS nos ofrece una GUI simple** de instalar que nos mantiene actualizados. Para esto debemos instalar primero una serie de dependecias (En este caso vamos a usar apt pero tu puedes instalarlo con tu gestor de paquetes)

{{< br >}}

    sudo apt-get install zenity cron curl

{{< br >}}

Para el siguiento paso n ecesitamos descargar el Script de la GUI el cual podemos hacerlo desde el siguiente link

{{< br >}}
{{< link url="https://www.duckdns.org/scripts/duck-setup-gui.sh" text="Descargar Script" >}}
{{< br >}}

Una ves descargado ya solo queda darle los permisos necesarios para ejecutar y obviamente ejecutarlo (Los siguientes comandos se ejecutan dentro de la carpeta donde se descargo el archivo)

{{< br >}}

    chmod +x duck-setup-gui.sh
    ./duck-setup-gui.sh

{{< br >}}

Agregamos nuestro dominio

{{< br >}}
{{< img src="https://www.duckdns.org/img/linux-gui-01.png" >}}
{{< br >}}

El token que obtuvimos en la WEB

{{< br >}}
{{< img src="https://www.duckdns.org/img/linux-gui-02.png" >}}
{{< br >}}

Ahora habrá un archivo de registro y un script de shell (que puede probar manualmente) instalado en algo como

{{< br >}}

    ~/duckdns/duck.log
    ~/duckdns/duck.sh

{{< br >}}

El script de shell se habrá agregado a un cron que se llama cada 5 minutos como su usuario, puede ver esto con

{{< br >}}

    crontab -l

{{< br >}}
{{< br >}}

## ¿Puedo escribir mi propia actualización?

{{< br >}}

Sí, puedes hacer esto en http o https. puede separar los dominios por comas si desea actualizar más de uno, el parámetro ip es opcional, si lo deja en blanco detectaremos su ip de puerta de enlace

{{< br >}}

    https://www.duckdns.org/update?domains={YOURVALUE}&token={YOURVALUE}[&ip={YOURVALUE}font>[&ipv6={YOURVALUE}font>[&verbose=truefont>[&clear=true]

{{< br >}}

La URL de actualización se puede solicitar en HTTPS o HTTP. Se recomienda que siempre use HTTPS. Ofrecen servicios HTTP para usuarios desafortunados que tienen HTTPS bloqueado.

{{< br >}}

* El dominio puede ser un dominio único o una lista de dominios separados por comas.
* El dominio no necesita incluir la parte .duckdns.org de su dominio, solo el subnombre.
* Si no especifica la dirección IP, se detectará; esto solo funciona para las direcciones IPv4
* Puede poner una dirección IPv4 o una dirección IPv6 en el parámetro ip.
* Si desea actualizar AMBOS registros IPv4 e IPv6 a la vez, entonces puede usar el parámetro opcional ipv6
* Para borrar ambos registros, use el parámetro opcional clear=true

{{< br >}}

Una buena respuesta normal es

{{< br >}}

    Okay

{{< br >}}

Una mala respuesta normal es

{{< br >}}

    KO

{{< br >}}

si agrega el parámetro & verbose = true a su solicitud, entonces las respuestas OK tienen más información

{{< br >}}

    Okay
    127.0.0.2 [La dirección IP actual para su actualización - puede estar en blanco]
    2002: DB7 :: 21f: 5bff: febf: ce22: 8a2e [La dirección IPV6 actual para su actualización - puede estar en blanco]
    ACTUALIZADO [ACTUALIZADO o SIN CAMBIO]

{{< br >}}
{{< br >}}

## EXPERIMENTAL – Mac OS X, Linux, Solaris (No oficial)

{{< br >}}

Tambien existe una alternativa en JAVA que procura ser mas simple pero no la utilice nunca, tampoco la probe dado que **no es oficial** pero vale marcarlo y dejarlo.

{{< br >}}
{{< link url="http://etx.ca/downloads/duckdns.jar" text="Descargar JAR" >}}
{{< br >}}

Esto podemos ejecutarlo desde la siguiente manera en nuestra terminal:

{{< br >}}

    java -jar duckdnsupdater.jar

{{< br >}}

Recordemos que **debemos tener Java Instalado** en nuestra PC

{{< br >}}
{{< br >}}

---

{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

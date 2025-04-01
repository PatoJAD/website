---
title: '¿Que es DuckDNS? ¿Como lo instalo?'
date: '2020-06-02 12:17:00'
description: 'Existen muchas ddns y hoy vamos a ver un poco mas sobre DuckDNS un DDNS gratuito muy util en estos dias'
type: 'post'
tags: ['ip', 'dns', 'ddns', 'duck', 'dinamic']
categories: ['Redes', 'Linux', 'Aplicaciones']
img: 'https://www.redeszone.net/app/uploads-redeszone.net/2017/12/DDNS-Duck-DNS.png'
authors: ['PatoJAD']
---

Ya hablamos anteriormente sobre dyndns y noip y como se sabe no puede faltar ningun Pato en esta familia. Por lo cual te traemos DuckDNS otro DNS Gratuito pero mas cariñoso!!!

## ¿Cómo es esto gratis?

Hemos creado un servicio que hemos querido para nosotros y creemos que es **gratuito o lo más barato posible** para cubrir los costos de funcionamiento, nuestro intento es alojar y ejecutar el servicio con un desembolso casi nulo, excluyendo nuestro tiempo.

## ¿Qué datos guardas?

La respuesta simple es: **lo menos posible**. Además de los registros de datos que se utilizan para facilitar y monitorear nuestros servicios, solo almacenamos su dirección de correo electrónico, ip, token, dominios y, por supuesto, sus ips de destino.

## Instalar GUI para linux

Muchos queremos actualizar la ip para mantener siempre al dia los datos y para eso **DuckDNS nos ofrece una GUI simple** de instalar que nos mantiene actualizados. Para esto debemos instalar primero una serie de dependecias (En este caso vamos a usar apt pero tu puedes instalarlo con tu gestor de paquetes)

    sudo apt-get install zenity cron curl

Para el siguiento paso n ecesitamos descargar el Script de la GUI el cual podemos hacerlo desde el siguiente link

[Descargar Script](https://www.duckdns.org/scripts/duck-setup-gui.sh)

Una ves descargado ya solo queda darle los permisos necesarios para ejecutar y obviamente ejecutarlo (Los siguientes comandos se ejecutan dentro de la carpeta donde se descargo el archivo)

    chmod +x duck-setup-gui.sh
    ./duck-setup-gui.sh

Agregamos nuestro dominio

![](https://www.duckdns.org/img/linux-gui-01.png)

El token que obtuvimos en la WEB

![](https://www.duckdns.org/img/linux-gui-02.png)

Ahora habrá un archivo de registro y un script de shell (que puede probar manualmente) instalado en algo como

    ~/duckdns/duck.log
    ~/duckdns/duck.sh

El script de shell se habrá agregado a un cron que se llama cada 5 minutos como su usuario, puede ver esto con

    crontab -l

## ¿Puedo escribir mi propia actualización?

Sí, puedes hacer esto en http o https. puede separar los dominios por comas si desea actualizar más de uno, el parámetro ip es opcional, si lo deja en blanco detectaremos su ip de puerta de enlace

    https://www.duckdns.org/update?domains={YOURVALUE}&token={YOURVALUE}[&ip={YOURVALUE}font>[&ipv6={YOURVALUE}font>[&verbose=truefont>[&clear=true]

La URL de actualización se puede solicitar en HTTPS o HTTP. Se recomienda que siempre use HTTPS. Ofrecen servicios HTTP para usuarios desafortunados que tienen HTTPS bloqueado.

-   El dominio puede ser un dominio único o una lista de dominios separados por comas.
-   El dominio no necesita incluir la parte .duckdns.org de su dominio, solo el subnombre.
-   Si no especifica la dirección IP, se detectará; esto solo funciona para las direcciones IPv4
-   Puede poner una dirección IPv4 o una dirección IPv6 en el parámetro ip.
-   Si desea actualizar AMBOS registros IPv4 e IPv6 a la vez, entonces puede usar el parámetro opcional ipv6
-   Para borrar ambos registros, use el parámetro opcional clear=true

Una buena respuesta normal es

    Okay

Una mala respuesta normal es

    KO

si agrega el parámetro & verbose = true a su solicitud, entonces las respuestas OK tienen más información

    Okay
    127.0.0.2 [La dirección IP actual para su actualización - puede estar en blanco]
    2002: DB7 :: 21f: 5bff: febf: ce22: 8a2e [La dirección IPV6 actual para su actualización - puede estar en blanco]
    ACTUALIZADO [ACTUALIZADO o SIN CAMBIO]

## EXPERIMENTAL – Mac OS X, Linux, Solaris (No oficial)

Tambien existe una alternativa en JAVA que procura ser mas simple pero no la utilice nunca, tampoco la probe dado que **no es oficial** pero vale marcarlo y dejarlo.

[Descargar JAR](http://etx.ca/downloads/duckdns.jar)

Esto podemos ejecutarlo desde la siguiente manera en nuestra terminal:

    java -jar duckdnsupdater.jar

Recordemos que **debemos tener Java Instalado** en nuestra PC

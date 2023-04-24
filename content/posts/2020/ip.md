---
title: 'Direcciones IPs, Nuestra huella en la red'
date: '2020-01-29 08:38:00'
description: 'Introduccion al concepto de conectividad TCP/IP para poder empezar a trabajar con servidores. En esta ocacion la IP.'
type: 'redesyseguridad'
tags: ["ip","red","internet"]
category: ["redesyseguridad"]
img: 'https://www.hostgator.mx/blog/wp-content/uploads/2019/08/que-es-una-direccion-ip-blog-hostgator.png'
authors: ["PatoJAD"]
---

## ¿Qué es una dirección IP?



La dirección IP es como la direccion de la casa de una persona (o como el numero de telefono). Para poder comunicarse entre dos equipos es necesario que entre ellos se conozcan la IP. Por lo cual podemos deducir que si estan leyendo esto su maquina conoce de alguna forma (que ondaremos en otra oportunidad) la ip de donde se encuentra alojado este **"hermoso"** blog. Bien, veamos entonces, que aspecto tiene una dirección IP:



* Ejemplo IP de red local (LAN, Clase C) o IP privada: 192.168.0.1
* Ejemplo IP de red internet (Clase A) o IP pública: 80.58.0.33
* IP local (localhost), esta IP es común para todos los equipos: 127.0.0.1



Para poder ver la ip de nuestra PC podemos hacerlo de la siguiente forma. Abrimos la terminal y ejecutamos el siguiente comando:



    ifconfig



dando como repuesta algo similar a lo siguiente:



    enp0s31f6: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
            ether d4:81:d7:5d:11:ad  txqueuelen 1000  (Ethernet)
            RX packets 0  bytes 0 (0.0 B)
            RX errors 0  dropped 0  overruns 0  frame 0
            TX packets 0  bytes 0 (0.0 B)
            TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
            device interrupt 16  memory 0xef200000-ef220000  

    eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
            inet 172.20.10.4  netmask 255.255.255.240  broadcast 172.20.10.15
            inet6 fe80::e106:f57f:60b7:7236  prefixlen 64  scopeid 0x20<link>
            ether 0a:74:02:05:d6:66  txqueuelen 1000  (Ethernet)
            RX packets 73535  bytes 82742885 (78.9 MiB)
            RX errors 0  dropped 1  overruns 0  frame 0
            TX packets 49526  bytes 6909629 (6.5 MiB)
            TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

    lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
            inet 127.0.0.1  netmask 255.0.0.0
            inet6 ::1  prefixlen 128  scopeid 0x10<host>
            loop  txqueuelen 1000  (Local Loopback)
            RX packets 2644  bytes 208896 (204.0 KiB)
            RX errors 0  dropped 0  overruns 0  frame 0
            TX packets 2644  bytes 208896 (204.0 KiB)
            TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

    wlp1s0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
            ether 34:f3:9a:d2:90:15  txqueuelen 1000  (Ethernet)
            RX packets 0  bytes 0 (0.0 B)
            RX errors 0  dropped 0  overruns 0  frame 0
            TX packets 0  bytes 0 (0.0 B)
            TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0


{{< img src="https://i.postimg.cc/wxWT9yFW/Deepin-Screenshot-20200129092416.png" >}}


Muchas distribuciones no traen instalado ifconfig por defecto (Gracias a Riky por remarcarlo) en ese caso tenemos dos opciones, instalarlo o usar ip la cua les su remplazo. Para instalarlo basta con instalar el paquete net-tools:




### Ubuntu, Debian y Derivados



    sudo apt install net-tools




### Arch y Derivados



    sudo pacman -S net-tools




## Gentoo y Derivados



    sudo emerge -s net-tools



y es el mismo paquete para todas las distribuciones, en caso de no tenerlo podemos ir a la segunda opcion (la mas recomendable) que es usar ip de la siguiente forma:



    ip address



dando como repuesta algo similar a lo siguiente:



    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
        inet6 ::1/128 scope host
           valid_lft forever preferred_lft forever
    2: enp0s31f6: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
        link/ether d4:81:d7:5d:11:ad brd ff:ff:ff:ff:ff:ff
    3: wlp1s0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
        link/ether 34:f3:9a:d2:90:15 brd ff:ff:ff:ff:ff:ff
    5: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
        link/ether 0a:74:02:05:d6:66 brd ff:ff:ff:ff:ff:ff
        inet 172.20.10.4/28 brd 172.20.10.15 scope global noprefixroute dynamic eth0
           valid_lft 80320sec preferred_lft 80320sec
        inet6 fe80::e106:f57f:60b7:7236/64 scope link noprefixroute
           valid_lft forever preferred_lft forever


{{< img src="https://i.postimg.cc/bJrYnqw0/Deepin-Screenshot-20200129100142.png" >}}


En mi caso me encuentro conectado por Ethernet tengo la direccion IPv4 172.20.10.4 y la IPv6 fe80::e106:f57f:60b7:7236. En este caso la IP es privada por lo cual puedo tener otros dispositivos con la IP 172.20.10.X que se encuentren dentro de mi red. Sin embargo, nuestra ip publica es otra es decir que para internet esta IP no es validad dado que solo me identifica dentro de mi red local.




## ¿Cómo se convierte mi ip privada en una ip pública?


{{< img src="https://i.postimg.cc/B6pZLX3n/20130712015313.jpg" >}}


Supongamos que nuestro ordenador es el que tiene la IP 192.168.1.4 y quiere ver la web que tiene el ordenador 66.25.5.66 Entonces se producen los siguientes pasos:



1. Nuestro PC (192.168.1.4) Contacta con su router, que es el elemento central que tiene 2 direcciones ips (192.168.1.1 y 80.52.14.5)
2. Se crea un canal de conexión 192.168.1.4 <----> 192.168.1.1 (PC <----> Router)
3. El router ahora conecta con el servidor web (66.25.5.66)
4. Se crea un canal de conexión 80.52.14.5 -----> 66.25.5.66 (Router <-----> Servidor)



Estos pasos para el usuario son transparentes, pero ocurren.




## ¡PREGUNTA!



>Ahora bien, para cerrar la publicación dejo abierto un tema. Fijaros que siempre que salimos a internet lo que hacemos es pedirle al router que salga por nosotros y que nos mantenga "seguros" detrás de el, esto significa una cosa, El servidor web, que en nuestro ejemplo tiene la dirección 66.25.5.66 no tiene forma de saber si el que ha pedido la web ha sido 192.168.1.5 o 192.168.1.x,  es decir en internet nosotros somos 80.52.14.5 lo que hay "por debajo" de eso solo lo sabemos nosotros. Nuestra "direccion" o "numero telefonico" es 80.52.14.5. Esta IP es la que está asociada a la persona que ha contratado la linea, y de producirse algún delito esta persona sería la responsable. Así pues, **¿Tienes tu wifi abierto? Estás asumiento TODA la responsabililidad de lo que haga cualquiera que se conecte a tu red.**



Contanos que opinas!!

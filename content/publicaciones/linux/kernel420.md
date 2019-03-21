---
title: 'Esta Navidad nos llegó el Kernel 4.20'
date: '2018-12-24'
description: 'Llego la Navidad y gnunoel nos trajo el nuevo kernel 4.20'
type: 'linux'
tags: ["Navidad","Kernel","GNU/Linux"]
category: ["linux"]
img: 'https://i.postimg.cc/c4b70sNv/KERNEL2560x1600.jpg'
authors: ["PatoJAD"]
atname: "PatoJAD"
atdesc: "Desarrollador"
atimg: "https://patojad.gitlab.io/img/perfil.jpg"
atbio: "Sobre mi no hay mucho para decir, me dedico a desarrollar en una empresa de telecomunicaciones, utilizo linux desde el 2012 y hace años que es mi sistema operativo main. Soy una persona que busca crecer profesionalmente sin dejar de divertirse y hacer lo que me gusta. Siempre digo que cuando un proyecto sale es importante agradecer, por lo cual les recomiendo a todos leer la seccion Agreadecimientos en la cual me tome un tiempito para poder agradecer a todos y cada uno de los que hicieron posible todo esto."

---

Hace pocas horas y después de dos meses de desarrollo, **Linus Torvalds anunció la nueva versión del Kernel de Linux 4.20**.

Que entre los cambios más notables en esta nueva versión del Kernel 4.20 se encuentran diversas correcciones en cuanto a errores y sobre todo soporte a diversos dispositivos.


En esta nueva versión del Kernel de Linux se hicieron 14.997 parches de 1857 Desarrolladores a la nueva versión, el tamaño del parche fue de 49 MB (los cambios afectaron a 11,402 archivos, se agregaron 686,104 líneas de código, 318945 líneas se eliminaron).

Aproximadamente el 47% de todos los cambios presentados en 4.20 están relacionados con los controladores de dispositivos, aproximadamente el 17% de los cambios están relacionados con la actualización de códigos específicos para arquitecturas de hardware, el 14% están relacionados con la pila de red, el 3% son sistemas de archivos y el 4% son subsistemas internos del Kernel.

{{< img src="https://i.postimg.cc/zB7WMNjX/Linux-kernel-4-20-released.jpg" >}}

### ¿Qué hay de nuevo en el Kernel de Linux 4.20?


Lo primero que merece la pena mencionar es el soporte para los aceleradores gráficos incluidos en las APU Picasso y Raven 2, además de haber avanzado en el soporte de las futuras GPU Vega 20. Es bueno saber que aparentemente no se tendrá que esperar demasiados meses para ver las futuras gráficas bien soportadas en Linux. Además, también tenemos mejoras en el rendimiento de GPUVM en AMDGPU (el driver libre para GPU “recientes” de AMD) y aceleración de JPEG en VCN en las APU Raven Ridge si se combina con Mesa 18.3, ya que la versión del driver del kernel utilizada puede condicionar hasta qué punto podemos exprimir la pila encarga de las API gráficas. En CPU nos encontramos con un soporte muy inicial de Zen 2.

### Speck se ha ido

El controvertido Speck recientemente agregado con Linux 4.17 en el algoritmo de encriptación del Kernel fue eliminado en Linux 4.20.

Dado que Google privó de la confianza del código de Android realmente destinado. Esto no se debió a la tecnología, ya que el algoritmo fue desarrollado por la NSA.

Y la estandarización de este se le negó, ya que la NSA no estaba dispuesta a responder preguntas detalladas sobre el algoritmo.

Además, la virtualización se ha mejorado con KVM, que ahora permite máquinas virtuales a través de la virtualización anidada en una máquina virtual.

El soporte también está disponible para el Raspberry Pi Model 3. En el futuro, la pila TCP entregará paquetes con un nuevo algoritmo, que no solo debería ser más rápido sino también más seguro.


### Nuevos protocolos

En este Kernel se implementó un nuevo programador de tráfico _“taprio”_, que permite administrar el envío de paquetes de acuerdo con las series de tiempo generadas anteriormente.

El método de programación se define en la especificación IEEE 802.1Qbv, tiene en cuenta los requisitos para la transmisión de tráfico sensible al tiempo de entrega de paquetes (por ejemplo, flujos de video y audio) y utiliza diferentes intervalos de tiempo para diferentes clases de tráfico.

Para el protocolo rtnetlink, se implementa un modo de comprobación estricta (“comprobación rígida”), que permite garantizar que la información relevante se transmita al espacio del usuario correspondiente a la solicitud entrante;

Se agregó la capacidad de filtrar volcados con información de enrutamiento por los protocolos utilizados (por ejemplo, para separar rutas de diferentes demonios de enrutamiento), tipos de rutas (por ejemplo, para asignar unicast)

### El ID de la tabla de enrutamiento y la puerta de enlace más cercana (nexthop).

Dichos filtros han sido soportados durante mucho tiempo en iproute2, pero se implementaron en el espacio del usuario. Mover los filtros al espacio del kernel le permite aumentar la eficiencia de los grandes sistemas de enrutamiento basados ​​en Linux.

En la implementación de puentes de red (subsistema de puentes), se ha agregado la capacidad de ver estadísticas de VLAN en el contexto de puertos individuales.

El soporte para 5 y 6 canales para la banda de 60 GHz se ha agregado a la pila inalámbrica ieee80211, así como la capacidad de habilitar la funcionalidad FTM Responder desde el espacio del usuario.

{{< img src="https://i.postimg.cc/WbCZxXMr/Linux-Kernel-5-featured.jpg" >}}

### ¿Y el Kernel 5.0 para cuando?

Finalmente, muchos esperaban que el nuevo Kernel sería análogo al cambio a 4.0 puesto que después del 4.19 ahora se esperaba la versión 5.0.

Sin embargo, dado que Torvalds no quiere ser arreglado en un esquema, se dijo que Linux 5.0 vendrá en 2019. Aunque en una fecha estimada no se sabe, ya que de momento los planes para la próxima versión continúan para la versión 4.21.

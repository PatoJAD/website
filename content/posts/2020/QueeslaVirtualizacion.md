---
title: 'Que es la Virtualizacion'
date: '2020-02-18 08:21:00'
description: 'Hoy nos toca un tema importante para muchos rubros y muy util para el dia a dia de los que somos inquietos y nos gustan probar cosas nuevas a menudo.'
type: 'post'
tags: ['virtualizacion', 'red', 'internet']
categories: ['Redes']
img: 'https://okhosting.com/resources/uploads/2013/07/virtualizacion-1024x768@2x.png'
authors: ['PatoJAD']
---

La virtualización de servidores, sistemas operativos y redes juega un papel fundamental tanto para los administradores de sistemas como para los expertos en seguridad informática. Para los primeros, los administradores de sistemas, les brinda una herramienta perfecta para separar unos servicios de otros y ganar en seguridad, ya que si un "hacker" compromete un servicio no tendrá acceso a todo el sistema.

Desde el punto del vista del "hacking ético" esta herramienta nos dará la posibilidad de crear entornos virtuales para poder hacer nuestras pruebas. Otra de las ventajas de la virtualización es que si quieres probar un sistema operativo antes de decidir si instalarlo en tu disco duro modificando el sistema de arranque podrás instalarlo sin necesidad de hacer ningún cambio en tu PC, tal y como si fuera un programa más.

## ¿Qué es la virtualización?

![](https://blog.desdelinux.net/wp-content/uploads/2019/01/virtualbox-virtualizacion-importancia-blog-desdelinux-830x531.jpg)

La virtualización consiste en términos generales en emular mediante algún programa o sistema un hardware sobre el que montar un servicio, servidor o red. De esta forma se crea lo que conocemos como una máquina virtual. Así, con un solo ordenador tu puedes crear varias máquinas virtuales e instalar en cada una de ellas el software (ya sea un windows, una distribución de Linux, o MacOS) que necesites para trabajar. Esto es realmente interesante no solo para el usuario que se dedica de forma profesional a la informática sino para todos los usuarios.

## ¿Por qué necesitamos la virtualización como pentesters?

En primer lugar vamos a necesitar vitualizar servidores para poder trabajarlos sin hacer cambios en nuestro equipo. Si nosotros pretendemos instalar cada servicio o porgrama en nuestro PC conseguiríamos que finalmente fuera lento e insostenible para trabajar. En cambio si nosotros instalamos el software que queremos en una máquina virtual nuestro pc no se resentirá, podremos trabajarlo como si lo estuvieramos instalando en un ordenador de pruebas sin comprometer la seguridad de nuestro equipo. Algo que a nosotros como pentesters debería ser una prioridad.

![](https://lh3.googleusercontent.com/proxy/LxCYzwleqBmVFo4TXyqQ9Qa89B30L07--55TmGLLKlkBtGrGHAkxoWKDioNhh_jYpXT7LL7L7F3dTErXZvKa0XzP4-wnZCpBh7A9I6LCCW8dWn2MjO9JA7niVwV2CTMzaKWSIPV_4c0o8BK7Wo8VeA" >}}

Otra razón de peso para trabajar con máquinas virtuales en el entorno de intrusiones es que podremos instalarnos distribuciones de pentesting "profesional" como lo es Kali Linux (a fines practivos de esta saga es muy util) sin necesidad de instalarlo directamente en nuestro PC obligándonos a modificar el sistema de arranque. Aunque como pentester lo normal es que lo tengas instalado sin virtualizar, para empezar, y ver cómo trabajan estas distribuciones para pentester lo ideal es virtualizarlas, familiarizarse con su uso y finalmente acabar instalándola como sistema operativo arrancable.

> ATENCION: Recuerden que a ducha distribucion no es recomendada, si nosotros buscamos aprender mas sobre todas las herramientas de intrusiones y demas es importante que aprendamos a compilar el codigo y no aceptemos binarios agenos, un buen "hacker" (notaran que esta palabra la pongo entre comillas porque me da gracia el mal uso que le estamos dando) siempre tiene sus propias herramientas bien seguras

También te pasará en multitud de ocasiones que quedrás auditar un programa en una versión concreta, en un entorno concreto. Gracias a la virtualización podrás crear ese entorno en tu PC y realizar todas las pruebas de pentesting que consideres necesarias realizar para finalmente aplicarlas en el entorno real si fuera necesario.

## Ventajas de la virtualización para administradores

Como administrador de sistemas o redes trabajar virtualizando servidores, aplicaciones o servicios es una estrategía que cada día se está poniendo en práctica con más énfasis. Los beneficios de la virtualización para los administradores se pueden dividir en estos grupos:

![](https://www.letscloud.io/blog/wp-content/uploads/2019/07/tools-of-sys-admin.jpg)

1. **SEGURIDAD**. Supongamos que necesitas instalar un servidor LAMP (Linux, Apache, MySQL, PHP, esto es un servidor para montar páginas web) y un servidor de archivos puede optar por dos opciones. Instalar en un único servidor ambos servicios, LAMP y servicio para compartir archivos. Todo te funcionaría bien, ¿pero que ocurriría si un hacker encontrara una vulnerabilidad en tu web y pudiera tomar el control del servidor? Que no solo tendría acceso a los archivos de tu web, sino que también a todos los archivos que tienes compartidos, con lo cual desde un fallo en la web se ha comprometido todos los archivos de tue empresa.
   En cambio si se hubiera escogido una solución virutalizada se habría podido crear en el serivodor 2 máquinas virtuales. En la primera se instalaría el servidor LAMP, y en la segunda se instalaría el servidor de archivos. En este escenario el hacker que consiga encontrar una vulnerabilidad en la web solo tendría acceso a la máquina virtual que aloja el servidor LAMP. Y aunque habría conseguido comprometer tu web los archivos de tu empresa aún segurían aislados y seguros. Es por este motivo por el que para muchos admnistradores la solución ideal es crear una máquina virtual por cada servicio que tenga un riesgo medio/alto de ser vulnerado.
2. **BACKUPS**. La mayoría de los servicios que utilizamos hoy en día disponen de mecanismos para hacer copias de seguridad y poder restaurarlas en caso de fallos. Pero también es cierto que las copias de seguridad a veces no son completas, contienen datos pero no guardan configuraciones o perfiles específicos. Si utilizamos máqunias virtuales, nosotros podemos programar en el servidor de forma automática que cada día haga una copia de la máquina virtual, de modo que si queremos restaurar una copia de seguridad bastará con arrancar la máquina que tenemos copiada y funcionará sin tener que tomar ninguna medida más.
3. **PROTECCIÓN CONTRA ERRORES HARDWARE**. Uno de los problemas que más daño pueden crear a un administrador de sistemas es que falle un componente crítico del servidor, la placa base por ejemplo. Si esto ocurre y hay que sustituir este elemento habrá que reinstalar todo el sistema operativo, configurarlo, instalar los programas, configurarlos y cargar las copias de seguridad para poder seguir trabajando. Todo esto tiene un coste en tiempo y esfuerzo bastante alto. Sin embargo si estamos trabajando con máquinas virtuales si falla el servidor podremos sustituirlo, copiarle las máquinas virtuales y arrancarlas. Esta solución no te llevará ni una décima parte de tiempo que si tuvieras que reconfigurarlo todo.
4. **MIGRACIÓN DE SERVIDORES SIN RECONFIGURACIONES**. Aplicando lo dicho en el punto anterior te puedes dar cuenta de que si tu servidor se queda pequeño y necesitas uno mas grande tan solo necesitas conectarlo pasarle las máquinas virtuales y empezar a trabajar, sin necesidad de reconfigurar todo lo que tenías hecho en el servidor antiguo.
5. **REALIZAR PRUEBAS SIN RIESGO**. Una de las características más interesantes de la virtualización es que podemos hacer "puntos de retorno" o "Snapshots". Esto significa que si nosotros estamos dudando sobre si instalar un programa o no, podemos crear un punto de retorno "snapshot", instalar lo que necesitemos y si detectamos alguna incompatibilidad y creemos que lo mejor habría sido no instalarlo podemos volver al punto de retorno y la máquina virtual volverá al estado en el que hicimos el snapshot, sin quedar ningún rastro de todo lo que hayamos hecho tras el punto de retorno.

## En el dia a dia

Otro punto extra que nos ofrecen las máquinas virtuales es que como nos permiten virtualizar cualquier sistema operativo podemos tener un sistema operativo en el que no aparezcan datos sobre nosotros, no aparezca nuestro nombre real, y no hayamos introducido ningún dato personal nuestro. Con este sistema operativo "neutro" nosotros podemos navegar por internet sin dejar rastro de nuestro nombre.

En lo personal tambien lo utilizo para probar software que desarrollo o modifico sin afectar mi sistema base.

Por útimo y no menos importante a nosotros como usuarios de la red y programas a veces nos encontramos que no estamos seguros si algún programa trae malware incrustado, sospechamos quizá por la procedencia que el programa no está limpio, lo necesitamos y no sabemos que hacer. Si lo instalamos en nuestro ordenador tal cual corremos el riesgo de que quede infectado por el malware que traiga, si no lo instalamos no podemos hacer uso del programa. En este punto las máquinas virtuales también nos pueden resultar de gran ayuda ya que podemos instalar el programa dentro de la máquina virtual, analizar si traía malware y decidir si instalaro en nuestro sistema operativo de trabajo o dejarlo virtualizado.

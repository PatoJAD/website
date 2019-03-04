---
title: 'Lo que la Gente opina sobre los inits'
date: '2019-01-31'
description: 'Opiniones sobre los diversos gestores de inicio'
type: 'linux'
tags: ["linux","init","opiniones"]
category: ["Linux"]
img : 'https://i.postimg.cc/ZKvq1ZYY/opiniones-patojad.jpg'
atname: "PatoJAD"
atdesc: "Desarrollador"
atimg: "https://patojad.gitlab.io/img/perfil.jpg"
atbio: "Sobre mi no hay mucho para decir, me dedico a desarrollar en una empresa de telecomunicaciones, utilizo linux desde el 2012 y hace años que es mi sistema operativo main. Soy una persona que busca crecer profesionalmente sin dejar de divertirse y hacer lo que me gusta. Siempre digo que cuando un proyecto sale es importante agradecer, por lo cual les recomiendo a todos leer la seccion Agreadecimientos en la cual me tome un tiempito para poder agradecer a todos y cada uno de los que hicieron posible todo esto."
---

Como todos saben, o al menos ahora van a saber, {{< textlink url="https://patojad.gitlab.io/publicaciones/linux/initsenlinux/" text="ayer realizamos un post que invitaba a todos a debatir sobre los init que se utilizan en linux!" >}} En este post muchas cosa se hicieron agrede, tales como omitir los principales init para que inicien el debate de porque debían estar en post..

Este formato nuevo de generar un post para invitar a un debate me parecía algo arriesgado y la verdad no esperaba que funcionara en lo mas mínimo sin embargo muchas voces se alzaron para dar una opinión y en este post solo voy a citar los comentarios de la comunidad y obviamente agregar esos 2 init que me pidieron!

### Comentarios

{{< img src ="https://i.postimg.cc/QdpddbWR/opiniones2-patojad.jpg" >}}

Mucha gente se acerco al {{< textlink url="https://t.me/comunidadsoftwarelibre" text="grupo de telegram" >}} y tambien a otros grupos a comentar, y debatir, una de las cosas que mas note es que muy pocas personas defienden systemd, solo lo usan porque viene, como hacemos la mayoría...


> Vine aquí pensando en discutir sobre los inits de linux y decir que se les olvido mencionar openrc y runit
SystemD en especial me esta molestando como quiere tomar control sobre los procesos del kernel y el hecho de que hace cosas raras. Como que cuando matas una tarea o aplicación tarda tanto o igual que windows. Sin contar que siempre están sacando y que herramientas para reemplazar las que son bastante funcionales. Yo bromeaba, pero si siguen así, veremos que las distros se llamarán GNU/systemD
De hecho, he estado pensando seriamente cambiar de manjaro a antix, que usa openrc o runit
Me gusta openrc porque hace equilibrio perfecto entre paralelizacion y control de servicios de manera sencilla sin abandonar las bondades de systemV (ya que lo sigue usando, solo que extiende la funcionalidad
Runit es otra solución interesante, simple y funcional.
<div style="text-align: right"> Santiago De Los Rios</div>

<br>

> distros sin Systemd: Slackware_derivadas como SalixOs etc. Devuan_derivadas como Heads etc. MXlinux. Gentoo. Parabola_openRC. Hiperbola_openRC. y alguna mas. y por supuesto el mundo BSD
<div style="text-align: right"> UnBit</div>

<br>

> Para mi es fundamental. No me merece ninguna confianza systemd, es un pésimo software mal diseñado y peor programado....
En las máquinas que tengo en casa, únicamente instalo distribuciones que no usen systemd.
Porque shitstemd hace cosas que un "init" NO debe hacer. Los verdaderos inits cumplen con su cometido y nada mas. Fin de la historia, no hay necesidad de reinventar la rueda.
<div style="text-align: right"> Jose </div>

<br>

> Si lo se y me gustan casi todos menos SystemD. prefiero OpenRC o en su defecto SySVInit, aunque tambien están muy bien otros como runit
Rinden mucho mejor, son más estables cuando actualizas el sistema y eso
Una de las cosas que suele romper systemd al actualizar el sistema, es que cuando el se actualiza puede cambiarle el nombre a la interfaz de red, por ejemplo si la tenia nombrada como enp3s0 o algo así puede cambiarle el nombre a s3pen5 y si ya tenias cosas configuradas manualmente para usar el nombre anterior obviamente no van a funcionar.
<div style="text-align: right"> Inukaze Maquiavelo </div>

# Faltantes
Como les comente me faltaron algunos init, en principal me nombraron dos y son por los que voy a ir...

### OpenRC
{{< img src="https://i.postimg.cc/Bv4QLKTt/openrc-patojad.png" >}}

Básicamente es un sistema de inicio que es compatible con BSD, SystemV mantenido por los mismos desarrolladores de Gentoo, que trabaja con el programa init proveído, normalmente SysVinit y está basado en dependencias.  Que cuenta con ventajas también es como systemd permite el inicio de los procesos simultáneo. No es un reemplazo para SysVinit.
También es posible utilizar Openrc junto a otros kernels además del GNU/Linux, claro está que también como lo mencioné anteriormente con procesos como son cgroups.
Los que prefieren éste init (que a mi entender entre las alternativas es el más completo) es que posee lo siguiente:

* El código de OpenRC está escrito en lenguaje POSIX.
* OpenRC no depende de D-Bus.
* La flexibilidad a la hora de configurar.
* El modo de depuración detallado.
* Entre otras características que deberán documentarse al respecto.

### Runit

{{< img src="https://i.postimg.cc/fbCWxRCC/runit-patojad.png" >}}

Este init es un conjunto de herramientas que también incluyen un init PID 1, así como un sistema de chequeo de procesos compatibles con demonios y utilidades que nos agilizan la ejecución de procesos, así también la creación de los mismos y el mantenimiento. Además creo que algo que destaco obviamente de su simpleza es el “concepto” de un directorio de servicios que se encarga de manejar los servicios individualmente y obviamente de tener todo registrado perfectamente.

<div style="text-align: center"> Los datos sobre los init se los agradecemos a linuxforallsite </div>

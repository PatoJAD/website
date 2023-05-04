---
title: 'Post Install Void Linux'
date: '2021-12-14 09:45:00.00'
description: 'Void es una distro que está naciendo y llena de buenas críticas, y un gran usuario nos dejó su post install para todos nosotros.'
type: 'post'
tags:
    [
        'void',
        'linux',
        'post',
        'install',
        'script',
        'git',
        'gitlab',
        'gnu',
        'ingresar',
        'entrar',
    ]
categories: ['Linux']
img: 'https://cdn.statically.io/img/websetnet.net/f=auto%2Cq=60/wp-content/uploads/2019/06/Void-Linux-Neofetch-2.png'
authors: ['PatoJAD']
---

Es muy importante contribuir con la comunidad, siempre digo que cada cosa que arme uno debe ser dada a conocer, nadie sabe realmente cómo puede ayudar a otros usuarios y más en caso como vamos a verlo hoy.

## Historia

Ayer mientras volvía a mi casa me llegó un mensaje en telegram. No es normal que reciba privados de gente que no conozco, a no ser que alguien quiera presentar una oportunidad de negocio piramidal increible. Claramente me llamó la atención porque no hablaba de eso. Y al leer un poco una sonrisa se dibujó en mi rostro.

> Hola pato como andas?, disculpa el atrevimiento, estuve jugando un poco con void, y levante un post-instalación muy sencillo, te lo paso por si te interesa chusmearlo...
> La idea es que se conozca esta gran distribución, a mi me sirve mucho y por ahí hay gente que todavía no la conoce y le puede ser muy útil, sobre todo por lo ágil que parece para equipos viejos.
> Eso es lo que me llevó a hacer este "asistente", desde ya que para correrlo se requiere mínimamente instalar git después del primer logueo pero no creo que sea demasiado complejo para que lo puedan hacer.
>
> Te paso mi gitlab por si te interesa mirarlo y cualquier sugerencia será más que bienvenida, desde ya muchas gracias te mando un saludo!!

Imaginense para cualquier persona amante de la tecnología recibir un mensaje así, donde un usuario detecta un potencial problema y lo soluciona para simplificar a todos los usuarios la post-instalación de una distro.

## Void

Void es una distro de linux indie, bastante interesante, cuenta con su propio administrador de paquetes y una filosofía interesante. En lo personal no genere contenido para void porque aun siento que esta medio verde, y puede llegar a dar algún volantazo desde mi apreciación. Si bien la distro es completamente estable siento que todavía están terminando de tomar algunas decisiones.

{{< img src="https://voidlinux.org/assets/screenshots/mate-desktop-xtraeme.png" >}}

Dicho esto, creo que es realmente una distro para equipo de pocos recursos. Si hay algo que aprendemos en linux es que “mientras más decisiones tengamos que tomar, mejor es la calidad final” por lo cual sabemos que a diferencia de Antix esta distro es mucho más fluida, incluso que Artix que le da muchas vueltas a Antix.

## El script

Claramente no realice muchas pruebas al script, simplemente verifique que lo pueda usar y eso es más que mucho para el poco tiempo que lo tuve conmigo. Pero creo que es una propuesta interesante a la que muchos podemos contribuir para que crezca y se adapte mejor.

Sin embargo quería saber porque a este usuario (Adolfo David Mauro) se le ocurrió crear este interesante script y su respuesta fue esta.

> Desde que descubrí que podía hacer andar mi pc sin depender de windows fue un gusto enorme, desde que probé mandrake linux hace como 20 años más o menos... Mi idea siempre fue tratar de acercar la informática a la mayor cantidad de gente posible... Más que nada acercarles posibilidades... La idea era encender la curiosidad de pensar fuera del marco de Windows... De que no salgan corriendo a comprar equipo nuevo xq no podían correr el ultimo windows... creo que un poco todos vimos con buenos ojos eso.
>
> Luego empecé a ver que no solo servía para rescatar equipos "viejos" sino que realmente era mejor por lo menos para lo que yo lo precisaba...
>
> Siempre con idas y vueltas entre la familia el trabajo la música y linux, cuando empezamos con la pandemia y ante la necesidad de conectividad y la insuficiencia de recursos de algunos sectores a acceder a equipos para hacer las tareas escolares, empecé en mi ciudad a ver cómo rescatar equipos en desuso y poder hacer algo con esos para devolverlos a quien lo necesite con un S.O. Funcional básico para poder estudiar.... Primero pensé en debian salieron algunos... y me quede con la idea de seguir optimizando hasta q llegue a void, para mi más ágil que arch, asi que empece por eso

Imaginense ver esto, La necesidad del script es completamente auténtica, era solo una pequeña parte de un proyecto mucho mayor, donde llevar GNU/Linux no era el fin, era el medio para que muchos jóvenes pudieran estudiar. Y esta es la forma más auténtica de predicar el uso de GNU/Linux, llevándolo como solución a los problemas actuales.

> La verdad que le meto muchísima ficha al open source, es casi una cuestión de militancia jajaja, hay quienes comparten y quienes no... Yo creo que mezquinando info o desarrollos por miedo a que "nos lo roben" no vamos a ningún lado... uno hace esto por que le gusta, nadie dice que no lo puedas vender es un laburo, pero mezquinar conocimiento me parece un poco bajo, por eso aplaudo el laburo de los youtubers que difunden la cultura del open source y trato de colaborar de alguna forma....
>
> Tanto tu canal como el de Nico, drivemeca... han aportado tanto que uno quiere devolver de alguna forma esa info....

Claramente Adolfo entendió todo, sabe que la idea de la libertad y el open source es compartir conocimiento, no que los desarrolladores no comamos y eso le suma a todo su proyecto la verdadera autenticidad del Software Libre.

## Uso del script

-   Luego de instalar VOID. Iniciar con el usuario estándar (NO ROOT)

-   Instalar Git

```bash
sudo xbps-install -Sy git
```

-   Clonar del repositorio el script

```bash
git clone https://gitlab.com/davidmauroweb/mad-void_mate.git
```

-   Entrar al subdirectorio

```bash
cd MAD-void_mate
```

-   Dar permisos de Ejecución a MadVM.sh

```bash
chmod +x MadVM.sh
```

-   Ejecutar el Script

```bash
./MadVM.sh
```

{{< info text="Las opciones para seleccionar los paquetes a instalar se ingresan con números (solo una selección por pregunta). El script pide clave de usuario que pueda ejecutar comandos a través de SUDO esta clave puede pedirse de vuelta si entre cada ejecución de SUDO transcurre demasiado tiempo." >}}

{{< link url="https://gitlab.com/davidmauroweb/mad-void_mate" text="Ver en GitLab" >}}

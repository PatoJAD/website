---
title: 'Mi experiencia con los Tiling Window Managers'
date: '2019-02-19'
description: 'Comparativa Manejadores de Ventanas'
type: 'post'
tags:
    [
        'i3-wm',
        'bspwm',
        'awesome',
        'qtile',
        'tiling',
        'xmonad',
        'dwm',
        'linux',
        'manejadores de ventanas',
        'tiling window manager',
        'window manager',
    ]
categories: ['Linux', 'Aplicaciones']
img: 'https://i.postimg.cc/Z5N7xMhn/wm-00.jpg'
authors: ['Castro Quintana']
---

Este post quizá sea un poco largo, pero quiero contarles mi experiencia y opiniones con algunos Tiling Window Manager, espero que le sirva a alguien que desee probarlos para decidirse, o si nunca han probado un _Tiling Window Manager_, para que se animen a instalarlos. Al ser Window Managers son mucho menos intrusivos que los Entornos de Escritorios y se pueden instalar y desinstalar sin problemas.

Un _Tiling Window Manager_ se diferencía de un Gestor de Ventanas normal en que las ventanas, al abrirlas, ocupan todo el espacio disponible. Si tenemos dos ventanas abiertas, entonces su tamaño cambia para que ocupen todo el espacio. Esto permite mayor eficacia al ocupar todo el espacio disponible en pantalla y no tener que preocuparnos por acomodar las ventanas para que no se empalmen.

Hasta ahorita, he instalado en mi sistema y probado cuatro de estos WM:

-   **i3wm.**
-   **bspwm.**
-   **awesome.**
-   y **Qtile.**

## i3

Quizá [i3wm](https://i3wm.org/) sea el _Tiling Window Manager_ más famoso y el más amigable para los principiantes. Fue el primero que usé ya que instalé _Manjaro i3_. **i3** se configura mediante un archivo de texto, su documentación es muy buena y amplia (aunque en Inglés) y permite crear "layouts" tan complejas como se desee, algunas configuraciones rayando en lo ridículo.

![](https://i.postimg.cc/rmfQp65n/i3.png)

Su manera de acomodar las ventanas es dinámica, es decir, tú tienes que indicarle a **i3** la orientación en que se dividirá el nodo, si vertical u horizontal (por defecto, se abren horizontal), algo que a mi casi no me gustó, ya que nunca le indicaba donde abrir la siguiente ventana y tenía 4 o 5 ventanas abiertas en horizontal, lo que las volvía imposibles de leer e inútiles. Viene con un panel llamado _i3bar_, que rápidamente cambié por **polybar** y opciones interesantes, como configurar "modos" con atajos de teclado especiales (similar a _VIM_).

Es un buen WM, muy bien documentado, aunque carece de "layouts" automáticas y para tener algunas configuraciones de apariencia es necesario usar un _fork de **i3**_ llamado [i3-gaps](https://github.com/Airblader/i3), que añade separaciones entre ventanas (gaps) y otras opciones que esperarías tener en el proyecto original.

## Bspwm

[Bspwm](https://github.com/baskerville/bspwm) es el Window Manager en el que más tiempo he pasado y el que uso actualmente. **Bspwm** solo se encarga de mostrar ventanas, quien se encarga de controlarlas es un módulo llamado `bspc`, es decir que podemos enviar órdenes a `bspwm` (mover ventanas, cerrar ventanas, cambiar tamaño de los bordes, etc.) con comandos en terminal.

**Bspwm** se configura en 2 partes: un script de bash (`bspwmrc`) donde indicamos algunas reglas y configuraciones de ventanas, y la aplicación que deseemos usar para configurar atajos de teclado, aunque, como viene recomendado en la página de **Bspwm**, la mayoría usa [sxhkd](https://github.com/baskerville/sxhkd), pero podemos usar la que queramos, como _obkey_ o la herramienta de algún Entorno de Escritorio. Las ventanas se abren como "hojas de un arbol binario", es decir, al abrir una ventana, la última ventana abierta se divide en 2, ya sea vertical u horizontal, para ir formando una espiral, también se pueden preseleccionar donde queremos que se abra la nueva ventana, similar a _i3_, aunque en mi opinión, tiene un acomodo de ventanas manual más poderoso, al poder elegir la proporción en la que queremos se divida la ventana.

![](https://i.postimg.cc/ZqCrL9Nc/bspwm.png)

**Bspwm** no trae panel integrado, pero podemos usar _polybar_. Quizá el mayor problema con **Bspwm** sea su documentación, la cual es mala a morir, la única manera de figurarte que puedes hacer es leer el manual y comenzar a experimentar, o estudiar ya sea los ejemplos proporcionados en su página de GitHub o la configuración de alguien más, por otro lado tiene muchas opciones como "gaps", personalizar bordes, y es mucho más modular que _i3_, además está en constante desarrollo.

## Awesome

![](https://i.postimg.cc/1z2D79cZ/awesome.png)

[Awesome](https://awesomewm.org/) es un WM desarrollado en _Lua_. Tiene mucha mejor integración con el ratón que los demás y es posible usarlo como un WM flotante, como _openbox_, incluso viene con bordes y botones de cerrar y minimizar, bandeja de notificaciones, temas, menú de ventanas abiertas y lanzador de aplicaciones.

Viene con un conjunto de "layouts" preseleccionadas y podemos elegir cuales usar, entre ellas las de otros WM como _Bspwm_ y _Xmonad_, sin embargo, no tiene modo manual para colocar ventanas como si lo tienen _Bspwm_ o _i3_. Posee un panel integrado llamado _wiibar_, totalmente personalizable desde su archivo de configuración, y existen muchos módulos (widgets) que podemos agregar o podemos desarrollar los propios.

Su configuración es en _Lua_, y este el mayor problema de **Awesome**. En mi opinión, _Lua_ es un lenguaje sucio (usa muchas llaves, paréntesis y es complicado de leer, sobre todo comparado con _bash_ o _python_) y como no se nada de _Lua_ me pierdo fácilmente. No obstante, es posible crear escritorios muy personalizados y poderosos, y los expertos en _Lua_ deberían sentirse en casa con este Window Manager.

**Awesome** es mucho más completo que los anteriores y posee herramientas como _cambiar el fondo de pantalla_ o _mostrar notificaciones_ sin necesidad de utilizar aplicaciones externas, mientras que los demás ocupan de aplicaciones como _nitrogen_ y _dunst_ para esto.

## Qtile

![](https://i.postimg.cc/hvbxGVFS/qtile.png)

La verdad que usé este Gestor de Ventanas solo porque [DistroTube](https://www.youtube.com/channel/UCVls1GmFKf6WlTraIb_IaJg) habla maravillas de él. [Qtile](http://www.qtile.org/) está escrito y configurado en _python_, un lenguaje que tampoco manejo, pero que es súper fácil de interpretar y puedes empezar a modificar y a entender como funcionan las cosas simplemente estudiando el código (a diferencia de _Lua_ que es mucho más caótico).

Al igual que _Awesome_ viene con un panel totalmente configurable y posee un conjunto de "layouts" predefinidas, con la posibilidad de crear las propias en _python_, además cada configuración de ventanas es personalizable, y se pueden tener diferentes bordes para cada una. Un problema que noté en **Qtile** es que si hay un error en la configuración muy grave (ejemplo, no hay escritorios configurados), se niega a iniciar, obligandote a ir a otro WM para arreglar el problema o a la consola, mientras que otros como _i3_ o _Awesome_ inician con una notificación de error y cargan la configuración predeterminada.

Si bien su documentación es amplia, su comunidad es algo pequeña y es un Window Manager algo más oscuro que el resto. Salvo la página oficial, es difícil encontrar mucha más información por ahí, aunque si se domina _python_ no debería haber ningún problema. Personalmente, entre _Awesome_ y **Qtile**, me quedo con **Qtile** por su sencilla configuración.

Hay otros que nunca he usado pero se un poco por lo que he visto. Espero probarlos pronto.

-   [Xmonad](https://xmonad.org/): Está configurado en _Haskell_ (otro lenguaje poco usado), su manera de mostrar las ventanas por defecto me gusta bastante, al mostrar una principal y las demás en cascada al lado (esta configuración se conoce como _MonadTall_ o _Master-Slave_) y es posible crear las propias en _Haskell_. Al igual que _bspwm_, no posee panel pero la mayoría suele usar _xmobar_ y es el utilizado en la documentación oficial para ejemplos.

-   [Dwm](https://dwm.suckless.org/): Un producto del proyecto _suckless_, y como tal, carece de archivo de configuración, para cualquier modificación hay que editar el archivo _config.h_ encontrado en su código fuente y recopilar esto cada vez que se desee hacer una modificación. Carece de varias opciones (algunas que esperarías tener) debido a que quieren mantenerlo libre de sobrecargas innecesarias (bloated). Como _Awesome_, viene con varias "layouts" predefinidas, un panel configurable y hay muchos parches que añaden funcionalidades extra.

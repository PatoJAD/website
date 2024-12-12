---
title: "Formatos de Empaquetado en Linux: Nativos, Flatpak, Snap y AppImage"
date: "2024-03-25 12:34:00.00"
description: Explora los diferentes formatos de empaquetado en Linux, como DEB, RPM, Flatpak, Snap y AppImage, y sus características, ventajas y limitaciones. Compara el rendimiento y las funciones de cada formato.
type: video
videId: 1zGKcj92PcQ
tags:
  [
    linux,
    debian,
    ubuntu,
    redhat,
    fedora,
    flatpak,
    snap,
    appimage,
    paquetes,
    empaquetado,
    rendimiento,
    sandbox,
    seguridad,
    bibliotecas,
    distribuciones,
    flathub,
    repositorios,
    aplicaciones,
    formato,
    sistema,
    entorno,
    deb,
    rpm,
    ventajas,
    limitaciones,
    formato de empaquetado,
  ]
categories: [Linux, Aplicaciones, Seguridad]
img: https://i.postimg.cc/k9G1Vf6K/packages.webp
authors: [PatoJAD]
---

En el tradicional formato de empaquetado de Linux, tenemos **DEB** (para debian, ubuntu y derivadas), **RPM** (para redhat, fedora y derivadas) y otras variantes. Más recientemente, se han añadido **Flatpak**, **Snap** e **AppImage**, lo que ha generado una gran variedad de formatos con diferentes características, ventajas y limitaciones. En este análisis, exploraremos el rendimiento de cada formato y las funciones que faltan en cada uno.

## Nativas

Generalmente no son compatibles entre distintas distribuciones, no implementan ningún modelo de seguridad o espacio aislado específico y se distribuyen a través de repositorios, ya sean oficiales o de terceros. Estos paquetes pueden contener bibliotecas o aplicaciones y todas las bibliotecas se comparten entre aplicaciones, lo que ahorra espacio y evita bibliotecas duplicadas. Sin embargo, esto también significa que una aplicación que necesita una biblioteca más nueva podría no funcionar en una distribución más antigua.

## Flatpak

Generalmente agregan además de sus paquetes regulares, son agnósticos de la distribución en sí, por lo que si su distro admite el **Flatpak**, puede ejecutar exactamente el mismo paquete que cualquier otra distribución. El desarrollador empaqueta su aplicación una vez y se ejecuta en todo, no es necesario duplicar el trabajo de empaquetado. Los **Flatpak** tienen un empaquetado "sandbox", lo que significa que ofrecen menos agujeros de seguridad para posibles atacantes y, al mismo tiempo, comparten una gran cantidad de bibliotecas a través de tiempos de ejecución. Algunos **Flatpak** contienen muchas bibliotecas en las que confían muchas aplicaciones. También pueden enviar sus propias bibliotecas en el paquete, lo que significa que pueden usar más espacio con el tiempo. Los **Flatpak** se distribuyen principalmente a través de Flathub y repositorios en línea, pero usted también puede crear su propio repositorio ya que todo es de código abierto.

## Snap

Los **Snaps** son básicamente el mismo concepto que los **Flatpak**, pero para Ubuntu. Hay algunas diferencias técnicas con los **Flatpak**, especialmente con respecto a cómo se abren y montan las aplicaciones en el sistema, pero funcionan de la misma manera. De esta manera, tiene tiempos de ejecución que incluyen bibliotecas necesarias para múltiples aplicaciones y luego las aplicaciones que pueden usar estos tiempos de ejecución se pueden aislar, pero no es obligatorio, por lo que algunas no lo son y se distribuyen exclusivamente a través de la tienda de Snap administrada por Canonical y ese específico. El back-end no es de código abierto. Los **Snaps** se empaquetan una vez y cualquier distribución puede usar el mismo Snap siempre que admita el formato. Otra gran diferencia es que los **Snaps** son adecuados no solo para aplicaciones gráficas sino también para programas de línea de comandos, aplicaciones del lado del servidor o incluso el kernel, el entorno de escritorio, el cargador de arranque o los controladores.

## AppImage

Son un formato más portátil similar a lo que hace **MacOS**: toda la aplicación se envía dentro de un solo archivo con la mayoría, si no todas, sus bibliotecas. Esto significa que puede copiar y pegar aplicaciones desde un sistema a otro y se ejecutan en cualquier distribución que tenga acceso a fuse, que es lo que usan las imágenes de la aplicación para ejecutar las imágenes de la aplicación. A diferencia de las anteriores, no se ejecutan en un sandbox, aunque puedes hacerlo manualmente con algo como Fire Jail y, a veces, dependen de las bibliotecas del sistema que distribución se envía como paquetes regulares. Esto significa que ciertas imágenes de aplicaciones pueden no funcionar en ciertos sistemas que no tienen la biblioteca requerida; generalmente se distribuyen desde el sitio web de los desarrolladores o desde la aplicación App Image Hub. Las imágenes no crean automáticamente entradas en su sistema. menú a menos que use un demonio específico que se ejecuta en segundo plano.

## Puntos de referencia de rendimiento

![PC de pruebas](https://i.postimg.cc/Z5xcr9pK/image.png)

Las pruebas de rendimiento se llevaron a cabo en una máquina virtual Ubuntu 23.04 con 16 GB de RAM y un procesador Intel Core i7 de 13.a generación. Se instalaron aplicaciones en todos los formatos de empaquetado, y se midió el tiempo de apertura inicial y las ejecuciones posteriores. Los resultados mostraron diferencias en el tiempo de inicio y el rendimiento en pruebas como Velocímetro y Jetstream Benchmark.

* 16 GB de RAM
* Procesador Intel Core i7 de 13.a generación
* Renderizado por hardware
* Ubuntu 23.04
* Maquina virtual

Recordemos que esto no pretende ser una maquina real sino un punto para una comparación de rendimiento entre los distintos formatos de empaquetado.

### Resultados

![Resultados 1](https://i.postimg.cc/Dzfc52PQ/image.png)
![Resultados 2](https://i.postimg.cc/RCJLgpKY/image.png)

## Sandbox

Los formatos de empaquetado como **Flatpaks** y **Snaps** utilizan entornos de sandbox para proporcionar aislamiento y seguridad a las aplicaciones. Sin embargo, esto puede afectar el rendimiento y la compatibilidad con ciertas características, como la mensajería nativa. El Sandbox no es 100% a prueba de balas. Nada lo es, pero es interesante limitar a qué puede acceder la aplicación, todo esto se administra a través de permisos de aplicaciones, de manera muy similar a lo que encontraría en las aplicaciones de Android o iOS, puede otorgar permisos a las aplicaciones para acceder a archivos y carpetas específicos o servicios y componentes específicos del sistema, todo esto generalmente se maneja a través de portales de escritorio que significa que la aplicación realmente no accede al archivo o a la carpeta, abre un portal que es lo que accede al recurso requerido y lo pasa a la aplicación.

Esto es similar a cómo los navegadores web ejecutan cada pestaña en un proceso separado al que no se puede acceder. el hilo principal del navegador o las otras pestañas, los paquetes regulares no están protegidos de forma predeterminada, se instalan en el sistema de archivos y requieren privilegios de root para instalarse, lo que significa que si el paquete tiene algunos scripts maliciosos posteriores a la instalación que ejecuta, le ha dado rienda suelta sobre su sistema y cualquier aplicación que haya instalado a través de paquetes pueden acceder a cualquier cosa que su usuario pueda acceder a su directorio completo de home, por ejemplo, u otros archivos de configuración de aplicaciones.

## Funciones faltantes

Cada formato de empaquetado tiene limitaciones y funciones faltantes. Por ejemplo, los paquetes **Flatpak** y Snap carecen de compatibilidad con la mensajería nativa, lo que puede afectar su utilidad en ciertos casos de uso. Además, el soporte para el tema del sistema puede ser imperfecto en algunos formatos, lo que puede afectar la integración visual con el entorno del usuario.

## Conclusión

A pesar de las diferencias y limitaciones, todos los formatos de empaquetado ofrecen una experiencia similar en la ejecución de aplicaciones en Linux. La elección del formato adecuado puede depender de factores como la seguridad, la portabilidad y las características específicas requeridas por el usuario. Si bien la unificación hacia un formato de empaquetado único podría simplificar la experiencia para los usuarios principiantes, actualmente cada formato tiene su lugar en el ecosistema de Linux.
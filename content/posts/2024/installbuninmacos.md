---
title: "Cómo instalar Bun.js en MacOS con Homebrew"
date: "2024-11-01 10:24:00.00"
description: Aprende a instalar Bun.js en MacOS de manera sencilla usando Homebrew. En este tutorial paso a paso, te explicamos cómo configurar Bun.js y exploramos otros métodos de instalación, junto con soluciones a problemas comunes.
type: post
tags:
  [
    bun,
    bunjs,
    instalar,
    install,
    macos,
    homebrew,
    javascript,
    runtime,
    gestor de paquetes,
    desarrollo,
    programacion,
    tutorial,
    guia,
    consejos,
    solucion de problemas,
    instalar bunjs,
    instalar bun en mac,
    javascript runtime,
    instalar bunjs en macos,
    bunjs en mac,
    bunjs en macos,
    bunjs con homebrew,
    bunjs con brew,
    bunjs tutorial,
    bunjs guia,
    bunjs consejos,
    bunjs solucion de problemas,
    bunjs instalacion,
    bunjs instalacion macos,
    bunjs instalacion homebrew,
    bunjs instalacion brew,
    guia,
    guia bunjs,
  ]
categories: [MacOS, Programacion]
img: https://i.postimg.cc/brTgKZg1/buninmac.webp
authors: [PatoJAD]
---

Instalar **Bun.js** en MacOS puede hacerse de varias maneras, y en este artículo exploraremos cómo hacerlo con Homebrew, un gestor de paquetes que simplifica la instalación de herramientas en Mac. Aunque hay otros métodos, en mi caso he optado por usar Brew por preferencia personal, y en este tutorial te guiaré paso a paso en el proceso. Además, agregaré información básica sobre **Bun.js** y su utilidad, así como algunos consejos útiles para la instalación.

{{< youtube id="FIs82kc3XBU" >}}

## ¿Qué es **Bun.js** y por qué usarlo?

**Bun.js** es un runtime y gestor de paquetes todo en uno para JavaScript, desarrollado con el objetivo de ofrecer una alternativa ultrarrápida a Node.js y npm. Su principal ventaja es la velocidad, ya que está diseñado desde cero para mejorar el rendimiento en aplicaciones web y herramientas de desarrollo. Gracias a su enfoque optimizado en operaciones comunes, **Bun.js** resulta ideal para desarrolladores que buscan una alternativa a otros runtimes y desean mayor rapidez en sus aplicaciones.

Para profundizar en **Bun.js** y su ecosistema, pronto estaré publicando un artículo que detallará todas sus características y ventajas.

## Requisitos previos: Instalar Homebrew

Antes de comenzar con la instalación de **Bun.js**, necesitarás tener Homebrew instalado en tu Mac. Si aún no lo tienes, puedes hacerlo siguiendo los pasos del tutorial que te dejo en este [enlace](/post/2023/02/como-instalar-brew-en-macos/). Homebrew es un gestor de paquetes para MacOS que facilita la instalación de software y herramientas en tu sistema. Una vez que lo tengas instalado, podrás instalar **Bun.js** y otros paquetes con un simple comando en la terminal.

## Instalación

A continuación, te muestro cómo instalar **Bun.js** en MacOS, para esto voy a dejarte los comandos que usamos en el video y otra opcion que tambien comentamos para que vos utilices la que creas mas conveniente.

### Usando Homebrew

Sigue estos pasos para instalar **Bun.js** utilizando Homebrew:

- Abre la Terminal y ejecuta el siguiente comando para instalar **Bun.js**:

```zsh
brew install bun
```

- Para verificar que **Bun.js** se haya instalado correctamente, utiliza el siguiente comando:

```zsh
bun --version
```

Si ves la versión de **Bun.js** en pantalla, significa que la instalación fue exitosa.

### Otros métodos para instalar **Bun.js** en MacOS

Aunque Brew es una opción rápida y práctica, existen otros métodos para instalar **Bun.js** en MacOS:

- Instalación directa desde el script de Bun: Ejecuta el siguiente comando en la Terminal para una instalación rápida:
  `zsh
  curl -fsSL https://bun.sh/install | bash
  # En caso de querer instalar una version específica
  curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.0"
  `
  Este script se encargará de descargar e instalar **Bun.js** directamente desde su sitio oficial.

## Solución de problemas comunes

Es posible que te encuentres con algunos problemas durante la instalación. A continuación, presento algunos problemas comunes y cómo solucionarlos:

- Error al ejecutar comandos de Brew: Si Brew no está reconocido en tu Terminal, asegúrate de que está en tu PATH. Puedes añadirlo con:
  ```zsh
  echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
  eval "$(/opt/homebrew/bin/brew shellenv)"
  ```
- Error de permisos: Si encuentras problemas de permisos, intenta ejecutar el comando con sudo, aunque esto no suele ser necesario en instalaciones estándar de Brew.
  - Comando ‘bun’ no encontrado después de la instalación: Si la Terminal no reconoce el comando bun después de instalarlo, intenta cerrar y reabrir la Terminal, o añade el PATH de **Bun.js** manualmente:
  ```zsh
  export PATH="/opt/homebrew/bin:$PATH"
  ```

## Conclusión

Instalar **Bun.js** en MacOS con Homebrew es una manera sencilla y práctica para iniciarse con este potente runtime de JavaScript. No obstante, existen otros métodos de instalación, como el script directo o la descarga manual desde GitHub, que también puedes considerar según tus preferencias.

No olvides visitar el video en YouTube para ver el proceso en acción, y asegúrate de tener Brew correctamente configurado para evitar problemas. Espero que esta guía te haya resultado útil, ¡y te animo a explorar todo el potencial de **Bun.js** en tus próximos proyectos de desarrollo!

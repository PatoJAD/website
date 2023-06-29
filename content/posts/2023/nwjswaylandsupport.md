---
title: 'Ejecutar apps NW.js en Wayland'
date: '2023-06-29 16:34:00.00'
description: 'Hoy vamos a ver como modificar el package.json de una app NW.js para que se ejecute en Wayland de forma nativa'
type: 'post'
tags:
    [
        'nwjs',
        'wayland',
        'linux',
        'nw',
        'nwjs wayland',
        'nwjs wayland support',
        'kera',
        'kera wayland',
        'kera wayland support',
        'kera desktop',
        'kera desktop wayland',
        'nw wayland',
        '0.50.0',
        'nwjs 0.50.0',
        'nwjs 0.50.0 wayland',
    ]
categories: ['Programacion', 'Aplicaciones']
img: 'https://i.postimg.cc/5tP2KRbf/nwjsw-ayland.webp'
authors: ['PatoJAD']
---

NW.js es un framework que nos permite crear aplicaciones de escritorio con tecnologías web, es decir, podemos crear aplicaciones con HTML, CSS y JavaScript, y ejecutarlas en el escritorio de cualquier sistema operativo. Y si bien es un framework muy interesante, tiene un problema, no funciona en Wayland. O al menos no antes de la version 0.50.0. Sin embargo hay una forma de hacerlo funcionar en Wayland, y es modificando el package.json de la app siempre y cuando use la version 0.50.0 o superior.

## Modificando el package.json como dev

Dentro de nuestro package.json debemos agregar la siguiente linea:

```json
"chromium-flags": "--enable-features=UseOzonePlatform --ozone-platform=wayland"
```

De esta forma, cuando ejecutemos nuestra app, lo haremos con Wayland.

## Modificando el package.json como usuario

Supongamos que no somos los desarrolladores de la aplicacion y no podemos modificar el package.json, pero queremos ejecutar la app en Wayland. Para esto podemos modificar el `package.json` de la siguiente forma agregando la linea mencionada anteriormente, y en el caso de existir agregarle ambos valores a la linea `chromium-flags`

### Caso practico Kera Desktop

Hace no mucho se dio a conocer este escritorio que si bien no es funcional aun porque no permite ejecutar aplicaciones, es un proyecto muy interesante. Y si bien no es funcional, ya podemos comenzar a probarlo en conjunto con nuestro escritorio, claro siempre y cuando estemos en x11 (o en wayland con el soporte para apps x11)

Sin embargo si estamos en wayland y queremos tener una mejor experiencia con Kera Desktop, podemos modificar el package.json de la siguiente forma:

-   Abrimos la carpeta de la app, en mi caso `~/Kera-Desktop-Linux-X64`
-   Abrimos la carpeta `package.nw` y dentro de ella el archivo `package.json`
-   Veremos un archivo como este:

    ```json
    {
    	"name": "kera-desktop",
    	"main": "main.js",
    	"chromium-args": "--enable-experimental-web-platform-features --enable-features=OverlayScrollbar",
    	"cldr-data-urls-filter": "(cldr-core|cldr-numbers-modern|cldr-dates-modern|cldr-localenames-modern|cldr-misc-modern|cldr-units-modern)",
    	"window": {
    		"title": "Kera Desktop",
    		"id": "KeraDesktop",
    		"icon": "logobig.png"
    	},
    	"webview": {
    		"partitions": [
    			{
    				"name": "trusted",
    				"accessible_resources": ["*"]
    			},
    			{
    				"name": "normal",
    				"accessible_resources": ["api/*"]
    			},
    			{
    				"name": "incognito",
    				"accessible_resources": ["api/*"]
    			}
    		]
    	},
    	"devDependencies": {
    		"eslint": "^8.41.0",
    		"eslint-config-google": "^0.14.0"
    	}
    }
    ```

-   Agregamos los valores mencionados anteriormente a la linea `chromium-flags` y quedara de la siguiente forma:

    ```json
    {
    	"name": "kera-desktop",
    	"main": "main.js",
    	"chromium-args": "--enable-experimental-web-platform-features --enable-features=OverlayScrollbar --enable-features=UseOzonePlatform --ozone-platform=wayland",
    	"cldr-data-urls-filter": "(cldr-core|cldr-numbers-modern|cldr-dates-modern|cldr-localenames-modern|cldr-misc-modern|cldr-units-modern)",
    	"window": {
    		"title": "Kera Desktop",
    		"id": "KeraDesktop",
    		"icon": "logobig.png"
    	},
    	"webview": {
    		"partitions": [
    			{
    				"name": "trusted",
    				"accessible_resources": ["*"]
    			},
    			{
    				"name": "normal",
    				"accessible_resources": ["api/*"]
    			},
    			{
    				"name": "incognito",
    				"accessible_resources": ["api/*"]
    			}
    		]
    	},
    	"devDependencies": {
    		"eslint": "^8.41.0",
    		"eslint-config-google": "^0.14.0"
    	}
    }
    ```

De esta forma a la hora de volver a abrir la app en nuestro entorno de wayland podemos hacerlo con una ventana nativa y sin ningun problema.

---

Fuente: https://nwjs.readthedocs.io/en/latest/

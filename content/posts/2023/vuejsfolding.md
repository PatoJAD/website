---
title: 'Cómo estructurar mi proyecto Vue.js'
date: '2023-11-02 10:06:00'
description: 'Aprende cómo estructurar tu proyecto en Vue.js de manera óptima. Descubre las mejores prácticas para organizar tus archivos y carpetas, y mejora tu aplicación Vue.js.'
type: 'post'
tags:
    [
        'vue',
        'vuejs',
        'vue.js',
        'proyecto',
        'estructura',
        'carpeta',
        'carpetas',
        'estructura de caprtes',
        'desarrollo web',
        'desarrollo',
        'organizacion',
        'organizar',
        'organizar proyecto',
        'organizar proyecto vue',
        'estructura de carpetas vuejs',
    ]
categories: ['Programacion']
img: 'https://i.postimg.cc/rF3WX1wh/vuefolding.webp'
authors: ['PatoJAD']
---

Cuando intento aprender algo nuevo, a menudo me enfrento a la pregunta de cómo estructurar mi proyecto. ¿Cuál es la mejor práctica para hacerlo? ¿Dónde debo colocar mis archivos para evitar el caos en el proyecto? Este artículo está dedicado principalmente a los desarrolladores que acaban de comenzar a aprender **Vue.js**, pero también puede ser interesante para los veteranos de **Vue.js** que deseen obtener una nueva perspectiva sobre este tema.

Comencemos desde cero con la instalación de un nuevo proyecto utilizando Vue CLI.

```zsh
vue create mi-asombrosa-app
```

Después de la instalación, podrás ver la siguiente estructura de carpetas (esto también depende de las opciones que hayas seleccionado en Vue CLI; para este proyecto, he seleccionado todas las opciones posibles):

```zsh
--public
----img
------icons
----favicon.ico
----index.html
----robots.txt
--src
----assets
------logo.png
----components
------HelloWorld.vue
----router
------index.ts
----store
------index.ts
----views
------About.vue
------Home.vue
----App.vue
----main.ts
----registerServiceWorkers.ts
----shims-vue.d.ts
--tests
----e2e
----unit
--.browserslistrc
--.eslintrc.js
--.gitignore
--babel.config.js
--cypress.json
--jest.config.js
--package.json
--package-lock.json
--README.md
--tsconfig.json
```

Esta es una estructura bastante estándar, pero no es adecuada para aplicaciones de tamaño medio o grande. Nos centraremos en la carpeta "src", pero antes de continuar, echemos un vistazo rápido a otras carpetas.

La carpeta `public` se utiliza si necesitas:

* Archivos con nombres especiales en la salida de compilación.
* Referencias dinámicas para imágenes. (Aunque es mejor usar `@/assets/` para esto).
* Si la biblioteca es incompatible con Webpack.
* Puedes encontrar más información sobre cómo utilizar la carpeta `public` aquí.
* `tests/e2e` es para pruebas de extremo a extremo.
* `tests/unit` es para pruebas unitarias.

## Estructura de la carpeta `src`

Ahora, empecemos a estructurar nuestra carpeta "src" en el nuevo proyecto. Aquí está la estructura que me gustaría presentar:

```zsh
src
--assets
--common
--layouts
--middlewares
--modules
--plugins
--router
--services
--static
--store
--views
```

Recorreremos todas las carpetas una por una y entenderemos por qué las necesitamos.

* `assets`: En este directorio, almacenaremos todos los archivos de activos. Aquí queremos guardar fuentes, iconos, imágenes, estilos, etc.
* `common`: Esta carpeta se utiliza para guardar archivos comunes. Por lo general, se puede dividir en múltiples carpetas internas: componentes, mezclas, directivas, etc., o archivos individuales, como `funciones.ts`, `helpers.ts`, `constants.ts`, `config.ts` y otros. La principal razón para poner un archivo en esta carpeta es utilizarlo en muchos lugares. Por ejemplo, dentro de `src/common/components` puedes almacenar `Button.vue`, un componente compartido utilizado en toda la aplicación. En `helpers.ts`, puedes escribir una función común para usar en varios lugares.
* `layouts`: Ya he abordado el problema de los diseños en uno de mis artículos anteriores. Puedes guardar los diseños de tu aplicación en este directorio. Por ejemplo: `AppLayout.vue`.
* `middlewares`: Este directorio trabaja estrechamente con Vue Router. Puedes almacenar tus guards de navegación en esta carpeta. Aquí tienes un breve ejemplo de un middleware:
  ```javascript
  export default function checkAuth(next, isAuthenticated) {
    if (isAuthenticated) {
      next('/');
    } else {
      next('/login');
    }
  }
  ```
  y úsalo dentro de Vue Router:

  ```javascript
  import Router from 'vue-router'
  import checkAuth from '../middlewares/checkAuth.js'
  const isAuthenticated = true
  const router = new Router({
    routes: [],
    mode: 'history'
  })
  router.beforeEach((to, from, next) => {
    checkAuth(next, isAuthenticated)
  });
  ```
* `modules`: Este es el núcleo de nuestra aplicación. Aquí almacenamos todos nuestros módulos, partes lógicamente separadas de nuestra aplicación. Te animo a que, dentro de cada módulo, crees:
  * Una carpeta de componentes internos donde puedes guardar tus componentes Vue.
  * Una carpeta de pruebas (prefiero mantener todas las pruebas relacionadas en el módulo).
  * Un archivo `store.ts` o un directorio `store`, donde mantengas el módulo de Vuex (o Pinia). Por ejemplo, este es un ejemplo de un módulo de pedidos, donde almacenas todos los componentes relacionados con los pedidos en tu aplicación: lista de pedidos, detalles del pedido, etc. Módulo de Vuex de pedidos. Archivos relacionados adicionales. Puede verse así:
    ```zsh
    src
    --modules
    ----orders
    ------__tests__
    ------components
    --------OrdersList.vue
    --------OrderDetails.vue
    ------store
    --------actions.ts
    --------getters.ts
    --------mutations.ts
    --------state.ts
    ------helpers.ts
    ------types.ts
    ```
* `plugins`: En esta carpeta puedes crear y conectar todos tus plugins. Aquí tienes un ejemplo de conexión de un plugin en Vue 2:
  ```javascript
  import MyPlugin from './myPlugin.ts'
  Vue.use(MyPlugin, { someOption: true })
  ```
  En Vue 3, conectarás tu plugin en `main.ts`. Pero aún puedes crear tus plugins dentro de la carpeta `plugins`.
* `services`: Esta carpeta es necesaria para almacenar tus servicios. Por ejemplo, puedes crear y guardar un servicio de conexiones API, un servicio de gestión de almacenamiento local, etc.
* `static`: Por lo general, no necesitas esta carpeta. Puede usarse para guardar algunos datos ficticios.
* `router`: Dentro de este directorio puedes almacenar todos los archivos relacionados con Vue Router. Puede ser solo `index.ts` con el enrutador y las rutas en un solo lugar (en este caso, probablemente sea una buena idea almacenar este archivo en la raíz de `src`). Yo prefiero separar el enrutador y las rutas en dos archivos diferentes para evitar confusiones.
* `store`: Este es el directorio de Vuex donde puedes almacenar todos los archivos relacionados con Vuex. Dado que deseas separar tus módulos de Vuex, en esta carpeta debes almacenar el estado raíz, las acciones, las mutaciones y los getters, y conectar automáticamente todos los módulos de Vuex desde el directorio de módulos.
* `views`: Esta es la segunda carpeta más importante de nuestra aplicación. Aquí almacenamos todos los puntos de entrada para las rutas de la aplicación. Por ejemplo, en tu aplicación puedes tener rutas como `/home`, `/about`, `/orders`. Respectivamente, en la carpeta `views` deberías tener `Home.vue`, `About.vue`, `Orders.vue`.

Podrías preguntarte por qué debemos separar vistas y módulos si podemos almacenarlos en el mismo lugar. Veo algunas ventajas en separarlos:

* Estructura de archivos más clara.
* Te permite comprender rápidamente qué rutas tienes en la aplicación.
* Facilita la comprensión de cuál archivo es la raíz de la página y dónde comienza a funcionar.

## Conclusiones

En este artículo, compartí mi enfoque para crear aplicaciones Vue basado en mi experiencia de trabajo en muchas aplicaciones Vue diferentes. Por supuesto, estas son solo sugerencias, y eres libre de usar todas, algunas o ninguna de ellas. Espero que este artículo ayude a algunos desarrolladores a estructurar sus proyectos de una manera nueva y les brinde más ideas.
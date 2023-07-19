---
title: 'Password Cracking'
date: '2020-12-05 09:28:00'
description: '¿Que es el cibercrimen?¿Como funciona? Todo lo que tenes que saber'
tags:
    [
        'seguridad',
        'pasword',
        'cracking',
        'wifi',
        'contraseña',
        'hackeo',
        'informatica',
        'kali',
        'black',
        'arch',
        'reados',
    ]
type: 'post'
categories: ['Seguridad', 'Redes']
img: 'https://alpinesecurity.com/wp-content/uploads/2017/12/offline-password-cracking.jpg'
authors: ['PatoJAD']
---

{{< youtube id="vqmMbVblovE" >}}

**Password Cracking** es el proceso de recuperación de contraseñas a partir de datos que han sido transmitidos por un sistema informático o almacenados en el. El propósito es ayudar al usuario a **recuperar una contraseña olvidada o perdida**, aunque también puede ser utilizada como medida **preventiva por los administradores de sistemas** para corroborar la seguridad de los usuarios y así poder evitar el ingreso de no autorizado.

Estos tipos de ataques tienen formas técnicas que son las que eventualmente utilizan los administradores de sistemas o pentesters para probar la seguridad de sus usuarios. Sin embargo existen muchas otras formas de intentar “dar” con la contraseña correcta, que pueden ser menos técnicas, en esta oportunidad vamos a intentar pasar por todas estas con una breve repasada.

| Ataques no Técnicos | Ataques Técnicos       |
| ------------------- | ---------------------- |
| Shoulder Surfing    | Ataque de fuerza bruta |
| Ingeniería Social   | Ataque de diccionario  |
| Dumpster Diving     | Ataque híbrido         |
|                     | Rainbow Tables         |
|                     | Troyano                |
|                     | Man-In-The-Middle      |

## Ataques no Técnicos

![](https://alpinesecurity.com/wp-content/uploads/2017/03/online-password-cracking.jpg)

Estos “ataques” son realizados sin necesidad de tener una preparación técnica y suelen estar guiados por el “azar” o el conocimiento sobre el usuario afectado. Eventualmente puede estar involucrada la ingeniería social o el poco cuidado de los usuarios para con su información.

### Shoulder Surfing

![](https://miro.medium.com/max/1003/1*oK1M8qrk-ETnmJNNAnaNng.png)

Como su nombre lo indica, consiste literalmente en mirar por encima del hombro sin que el objetivo se de cuenta, para tratar de conseguir información. Pero a pesar de que parezca una idea producto de Hollywood, existen numerosos casos en los que este método ha sido efectivo. Las empresas más pequeñas son quizás las que corren mayor riesgo de sufrir esto, dado que no pueden controlar sus sitios con la misma eficacia que una organización más grande. Los expertos en seguridad advirtieron recientemente sobre una vulnerabilidad en el proceso de autenticación utilizado por WhatsApp. Los usuarios que intentan usar WhatsApp en un dispositivo nuevo primero deben ingresar un código único que se envía a través de un mensaje de texto, que se puede usar para restaurar la cuenta de un usuario y el historial de chat desde una copia de seguridad. Se descubrió que si un pirata informático pudo obtener el número de teléfono de un usuario, puede descargar la aplicación en un dispositivo limpio y emitir un mensaje para un nuevo código, que, si está a distancia de espionaje, podría copiarlo. llega al propio dispositivo del usuario.

### Ingeniería Social

![](https://i.postimg.cc/RFThqTTS/image.png)

La Ingeniería Social es una de las mejores técnicas que ofrece la rama de los ataques no técnicos. La Ingeniería Social consiste en recopilar cada vez más información sobre una persona mediante técnicas psicológicas y el engaño. Muchas veces aplica convertirse en parte de un círculo medianamente cercano de la persona objetivo, conociendo así sus gustos, patrones, información, historia y datos; esto acompañado de información que se puede sacar de internet, como por ejemplo sus redes sociales, historial de navegación, y más; puede permitirnos descubrir las contraseñas que utiliza.

### Dumpster Diving

![](https://i.postimg.cc/Hsn0DJpc/image.png)

En la técnica de buceo en el contenedor, tratamos de recopilar todo tipo de información revisando contenedores de basura, estos pueden encontrarse en espacios públicos o áreas de acceso restringido que requieran de una entrada no autorizada. El buceo en basureros depende de una debilidad humana: la falta de conocimientos sobre seguridad. Es por esto que se pueden encontrar muchas cosas buceando en contenedores de basura (por ejemplo, CDs, DVDs, discos duros, documentos de empresas, etc.), tales elementos pueden ser de gran utilidad al momento de descifrar contraseñas.

## Ataques Técnicos

![](https://assets.skyfilabs.com/images/blog/password-cracker-using-python.webp)

La diferentes técnicas que existen en el mercado son muchas, por la cual se han tomado algunas para ser analizadas, dependiendo de sus diferentes procesos a realizar.

### Ataque de Fuerza Bruta

El ataque por **fuerza bruta** es el método para averiguar una contraseña probando todas las posibles cadenas, que cuentan con determinada longitud y están compuestas por un conjunto de caracteres específico, hasta dar con la correcta. Dicho ataque, La teoría garantiza una **tasa de éxito del 100%**. Sin embargo, al intentar un ataque de fuerza bruta a una contraseña de más de 8 caracteres, el tiempo necesario para realizarlo se vuelve inviable debido al crecimiento exponencial de posibles cadenas con la adición de cada carácter extra. Hydra, Medusa y Ncrack, pueden ser una de las variadas herramientas que performan ataques a servicios activos cliente/servidor (como ftp, http, mysql, ssh, etc) utilizando esta técnica.

![](https://1.bp.blogspot.com/-s8qbBu1e8FA/XufVG8vcGyI/AAAAAAAAHBs/BOES6gu9WsoJTcKj2A721P2-MMEUM2WuQCNcBGAsYHQ/s1600/2_hydra-fuerza-bruta-wordlist-ftp.png)

Por último, los ataques de fuerza bruta son una de las **técnicas más habituales** de robo de contraseñas en Internet dado que **no es necesario tener grandes conocimientos**. En contrapartida, este tipo de ataque es extremadamente ineficiente porque intenta muchas cadenas que es poco probable que produzcan una coincidencia.

### Ataque Con Diccionario

El ataque por diccionario es el siguiente mejor ataque para vulnerar una contraseña. Este, utiliza un diccionario de palabras para llevar a cabo su cometido. Los diccionarios son básicamente archivos de texto cuyo contenido es una palabra o frase por línea, cada línea es una posible versión de la contraseña. La diferencia entre un diccionario y un ataque de fuerza bruta es que un diccionario contiene una lista de coincidencias probables en lugar de todas las posibles combinaciones, logrando así una mejor optimización. Además, un diccionario debe estar bien elaborado, de lo contrario si se incluye cualquier combinación se corre el riesgo de convertirse en un ataque de fuerza bruta y pierde su eficacia.

![](https://cdn.arstechnica.net/wp-content/uploads/2013/03/IMG_1667.jpg)

Las listas de palabras con la mejor tasa de éxito son las que se componen de contraseñas reales tomadas de diferentes fuentes públicas o bases de datos divulgadas previamente. **Una lista de palabras bien optimizada** puede marcar la diferencia respecto a todos los ataques descritos. Hay muchos lugares donde se pueden descargar diccionarios genéricos o temáticos y una breve búsqueda en internet revelará estas fuentes. Sin embargo, cuando se precisa de un diccionario más específico, las cosas se vuelven un poco más difíciles y es necesario un proceso de investigación, para elaborarlo. Un diccionario se puede generar a partir de cualquier cosa, se puede generar a partir de artículos, noticias, búsqueda de Google, resultados, contenido del sitio web, registros y cualquier cosa que esté formada por "palabras". Entonces, si quisiéramos agregar ahora un conjunto de palabras específicas a nuestro Diccionario, buscaríamos en Google a nuestra víctima, tomaríamos los resultados y los agregamos. También nos interesa todo el texto de cada enlace devuelto. También se puede tratar de encontrar documentos o registros en el servidor de las víctimas y agregarlas. Cuanta más información tengamos, más grande será el Diccionario.

### Ataque Híbrido

Un ataque híbrido es una combinación de un ataque de fuerza bruta y un ataque de diccionario. este tipo de ataques, toma un Diccionario como entrada y agrega cadenas mediante fuerza bruta, a cada entrada del diccionario. Por lo tanto, para cada cadena en el Diccionario, este ataque produce varias otras cadenas. Por ejemplo si nuestra cadena original en el diccionario es "apple", se termina produciendo "111apple", "112apple" hasta "999apple", si es que estamos utilizando una fuerza bruta que antepone tres números a cada entrada.

Un ataque de diccionario híbrido también resulta en un aumento exponencial de los cálculos y el tiempo en función de la cantidad de caracteres que se concatenan con cada entrada de diccionario.

También cabe destacar, que su principal diferencia con el ataque de diccionario basado en reglas es que este otro, en lugar de agregar, mediante fuerza bruta, una cadena con todas sus combinaciones posibles, usa reglas para transformar cada entrada del Diccionario o concatenarla con prefijos y sufijos, lo que termina traduciéndose como menos tiempo de ejecución.

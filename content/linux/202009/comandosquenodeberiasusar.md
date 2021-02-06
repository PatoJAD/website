---
title: "Comandos que no tenes que probar"
date: "2020-09-28 09:02:00"
description: "Te dejamos 3 comandos que no deberias probar y nunca deberias caer en esto."
type: "linux"
tags: ["terminal", "linux", "rm", "comandos", "terminal", "consola", "bomba", "fork", "dev", "null"]
category: ["Linux"]
img: "https://i.postimg.cc/xd5B1bRx/image.png"
authors: ["PatoJAD"]
---



Navegando por la web, me encontre unas imagenes que creo que todo el user de linux querría ver, habla un poco de esos comandos que no deberíamos utilizar para jugar aunque suene tentador porque simplemente **Quieren ver el mundo arder**




## Eliminar todo de forma recursiva


{{< img src="https://i.postimg.cc/d0SP9yy7/image.png" >}}


Este es probablemente el comando más popular en el ámbito de los *trolls* de linux y si bien es popular nunca esta de mas entender bien cómo funciona y obviamente evitar el uso y la distribución de lo mismo. Este comando es el tan conocido:



    sudo rm -rf /



Si bien todos entendemos las consecuencias de este comando que es la pérdida total de los archivos de nuestro sistemas (desde la carpeta raíz) la explicación *funcional* dada por el usuario que creó estas imágenes es:



> Con `rm -rf` borramos todos los directorios y ficheros de manera recursiva. Añadiendo el parámetro `/` le decimos que lo haga desde la raíz, por lo que eliminará todo lo que se encuentre por el camino.




## Bomba Fork


{{< img src="https://i.postimg.cc/tJQcrtCg/image.png" >}}


La sintaxis de este comando es algo realmente raro, y al fin de cuenta no es tan dañino este comando, si bien tilda la PC basta con un reinicio para poder seguir, sin embargo existen muchas formas de volverlo muy dañino, pero si estás tentado en probar alguno de la lista te diria que pruebes este aunque sea bajo tu propio riesgo. El comando *raro* es:



    :(){ :|: & };:



Y según el colega que realizó las imágenes podemos describir su función de la siguiente forma:



> Un comando un poco raro, ¿no? Este comando causa una muy posible caída del sistema al consumir todos los recursos disponibles de tu ordenador, ya que este proceso es generar otro proceso que se ejecute simultáneamente. Muchos procesos procesos que causan una denegación de servicio, lo más probable es que haga que tengas que reiniciar el sistema.




## Mover todo a la nada


{{< img src="https://i.postimg.cc/7ZYWQLDS/image.png" >}}


Este comando es el punto intermedio entre los dos anteriores. Es más dañino que la **Bomba Fork** por lo cual no recomiendo probarlo. Este comando es muy similar a uno que suele estar en los scripts para evitar borrar las cosas las mueven a este directorio. El comando en sí que debemos evitar es:



    mv ~ /dev/null



Y nuestro colega define el funcionamiento de este comando de la siguiente forma:



> Con este comando, movemos todo el contenido de nuestra carpeta home (~) a la carpeta `/dev/null`. Claramente no existe ninguna carpeta llamada así, por lo que perderemos todos nuestros documentos, imágenes, etc. Un lío que no nos conviene.



Desde ya quiero agradecer a **@nilo_tech** por realizar esto que realizo y no se olviden de pasarse por sus redes sociales para agradecerles personalmente.



---



Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento

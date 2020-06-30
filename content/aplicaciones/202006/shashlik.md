---
title: 'Shashlik más que un emulador'
date: '2020-06-09 09:33:00'
description: 'Una impecable app mucho más performante que un emulador que nos servirá mucho para tener nuestras apps de android “casi nativas” en nuestro linux.'
type: 'aplicaciones'
tags: ["android","apps","linux","shashlik","emulador"]
category: ["Aplicaciones"]
img: 'https://www.howtoforge.com/images/how-to-install-and-run-android-apk-on-linux-with-shashlik/pic_4.jpg'
authors: ["PatoJAD"]
---

{{< br >}}

Shashlik es, básicamente, un conjunto de componentes de software que permite a los usuarios de Linux instalar y ejecutar APK de Android **directamente** en su distribución GNU / Linux. Shashlik logra eso mediante el uso de una versión simplificada de Android **en lugar de emular una**, que se anida dentro de la sesión del usuario al iniciar una aplicación de Android instalada.

Si bien el desarrollo de este prometedor proyecto **murio en 2016** aun la version instalable funciona perfectamente con algunas apps (Por ejemplo la utilizo con una app de clima, lo que podriamos hacer es enumerar las apps que si funcionan entre toda la comunidad)

{{< br >}}
{{< br >}}

## Instalando Shashlik

{{< br >}}

la instalación es completamente sencilla gracias, nuevamente, al repo de la comunidad, basta con tenerlo instalado y ejecutar el simple comando:

{{< br >}}

    sudo apt install shashlik

{{< br >}}

Y en unos minutos tendremos instalado esta increíble app...

{{< br >}}
{{< br >}}

## Instalar y ejecutar APK de Android

{{< br >}}
{{< img src="https://www.howtoforge.com/images/how-to-install-and-run-android-apk-on-linux-with-shashlik/pic_4.jpg" >}}
{{< br >}}

Después de instalar Shashlik, descarguamos la aplicación que deseamos ejecutar con Shashlik. Luego abrimos una terminal en la ubicación de los APK descargados y escribimos el siguiente comando para instalarlo en nuestro sistema:

{{< br >}}

    /opt/shashlik/bin/shashlik-install name-app.apk

{{< br >}}
{{< img src="https://www.howtoforge.com/images/how-to-install-and-run-android-apk-on-linux-with-shashlik/big/pic_2.png" >}}
{{< br >}}

(Las imágenes no son mías, a mi al terminar la instalación de una app, creo que la del clima, me devolvió un error sobre notificaciones y no se que mas, pero la app me abre genial y funciona, estimo que las notificaciones no funcionan pero no es relevante porque es de clima y lo veo cuando quiero...)

{{< br >}}

---

{{< br >}}

El siguiente paso es **ejecutar el APK** escribiendo el siguiente comando en la misma sesión de terminal:

{{< br >}}

    /opt/shashlik/bin/shashlik-run splash.png name-app.apk

{{< br >}}

Una cosa importante a tener en cuenta en este punto es que durante la instalación, Shashlik ha creado y almacenado algunos archivos necesarios en `/.local/share/shashlik`. Esos archivos incluyen el archivo de imagen PNG splash y el userdata.img. Al iniciar un APK, Shashlik busca el archivo que ha indicado en el comando. Entonces, si hay un splash.png correspondiente a una aplicación llamada test.apk, el comando se convierte en:

{{< br >}}

    /opt/shashlik/bin/shashlik-run splash test.apk

{{< br >}}
{{< img src="https://www.howtoforge.com/images/how-to-install-and-run-android-apk-on-linux-with-shashlik/pic_3.png" >}}
{{< br >}}
{{< br >}}

## El Menu

{{< br >}}

Para simplificar las cosas, debo señalar que los **APK están instalados en nuestro sistema** con el comando que se mostró anteriormente, por lo que si los buscamos en el menú de aplicaciones, debemos encontrarlos y **ejecutarlos con un simple clic**. Sin embargo, esto *puede no funcionar bien* para todas las aplicaciones, pero si lo hace, es bastante útil. Cualquiera sea el caso, debe saber cómo ejecutarlo desde la terminal para obtener la información necesaria para resolver cualquier problema.

{{< br >}}
{{< img src="https://www.howtoforge.com/images/how-to-install-and-run-android-apk-on-linux-with-shashlik/pic_5.jpg" >}}
{{< br >}}

Como actualmente **no hay una función de desinstalación implementada**, podemos eliminar manualmente los archivos binarios instalados por Shashlik navegando a `/.local/share/applications` y eliminando los archivos correspondientes. Esto debería eliminarlos del menú de aplicaciones.

{{< br >}}
{{< br >}}

## Pantalla Lateral

{{< br >}}

Como el software ni siquiera ha alcanzado su **primera versión estable**, no se puede jugar con ninguna opción que pueda ser crítica para la experiencia del usuario con ciertas aplicaciones. El caso de configurar el emulador en el modo de pantalla horizontal es habitual, así que aquí está cómo hacerlo. Abrimos nuestro administrador de archivos como administrador y navegamos a `/opt/shashlik/bin` ahi abrimos `shashlik.run` con nuestro editor de texto favorito. Luego ubicamos el argumento `-noskin` y lo remplazamos con `-skin 480x320` o cualquier otra resolución en las proporciones estándar.

{{< br >}}
{{< img src="https://www.howtoforge.com/images/how-to-install-and-run-android-apk-on-linux-with-shashlik/pic_6.png" >}}
{{< br >}}
{{< br >}}

## Conclusión

{{< br >}}

Precisamente Shashlik no es el más estable y es triste que se haya dejado su desarrollo, sin embargo aun al dia de hoy **corre perfectamente muchas apps** y es mucho más **performante** que los emuladores en sí, el hecho de correr solo lo mínimo y no emular todo el sistema nos facilita muchas cosas.

Si dependemos o utilizamos algunas apps no muy complejas es altamente recomendable utilizarlo, ya que de esta manera podemos hacerlo aprovechando los recursos de nuestra máquina. Sin embargo no está de más tener otro emulador a mano…

Dejo un video de un juego que corre sin problemas para que vean que realmente está pulido aunque no tenga updates hace más de 3 años

{{< br >}}
{{< youtube code="9SC6c_ih_Ac">}}
{{< br >}}

---

{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
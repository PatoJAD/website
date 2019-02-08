---
title: "Principios SOLID"
date: "2018-12-18"
description: "Principios SOLID Programacion"
type: "programacion"
img:  "https://1.bp.blogspot.com/-ql7GjZQAV9Q/XDTXjRNuDNI/AAAAAAAAekQ/xofzQib7VD0c36hOXCY-RjCmGAkHDB0VACLcBGAs/s640/solid-resumen-de-los-principios.png"
atname: "PatoJAD"
atdesc: "Desarrollador"
atimg: "https://patojad.gitlab.io/blog/img/perfil.jpg"
---

{{< img src="https://1.bp.blogspot.com/-ql7GjZQAV9Q/XDTXjRNuDNI/AAAAAAAAekQ/xofzQib7VD0c36hOXCY-RjCmGAkHDB0VACLcBGAs/s640/solid-resumen-de-los-principios.png">}}

Los principios SOLID son 5 principios básicos de la programacion orientada a objetos (POO) y diseño. Tiene como objetivo generar un buen diseño de programacion que nos permita generar código extensible y de fácil mantenimiento. Recordemos que todo sistema tiene un trabajo posterior que es mantenimiento y los principios SOLID nos facilitan esta parte.

### S - Responsabilidad Simple (Single Responsibility)
Este principio es muy sencillo y solo consiste en destinar a cada clase una funcionalidad sencilla y concreta. En muchas ocasiones caemos en poner métodos donde no van solo por "simplificar" el trabajo y suele ir acompañado de la frase "no voy a crear una clase para esto" en la mayoría de esos casos la respuesta suele ser SI hay que crear una clase para eso. Esto nos va a permitir mas adelante poder extender el programa dado que vamos a tener las responsabilidades bien distribuidas.

### O - Abrierto/Cerrado (Open/Close)
Este principio nos habla de crear clases que el día de mañana podamos extender sin necesidad de tocar el código fuente, es decir que tiene que estar abierto para poder extenderse, Pero debe estar cerrado a modificaciones en su código (es decir que no necesite de estas). Esto en un principio parece imposible. Sin embargo esto en si es simple si nosotros conocemos el alcance de nuestra aplicación. Si sabemos como va a funcionar y cual es su finalidad podemos estimar en que casos va a tener que ser extensible y en que casos no.

### L - Sustitucion Liskov (Liskov Sustitution)
Este principio habla de lo imparte que es crear bases derivadas que puedan ser tratada como la propia clase madre. Cuando creamos una clase derivada debemos asegurarnos de no re-implementar métodos que hagan que los métodos de la clase base no funcionasen si se tratase como la clase base.

### I - Segregacion de la Interface (Interface segregation)
Este principio trata de algo similar al primer principio. Cuando definimos una interfaz esta debe tener una finalidad concreta. Siguiendo esto es conveniente tener varias interfaces que con pocos métodos abstractos que pocas interfaces con muchos métodos. (Siempre y cuando la division sea coherente con el problema). El principal objetivo de este método es poder reutilizar interfaces.

### D - Inversión de Dependencias (Dependecy inversion)
Este principio trae como objetivo poder desacoplar las clases. En todo diseño siempre tenemos acoplamiento de clases pero siempre debemos evitarlo lo mayor posible. Entendamos que un sistema 100% desacoplado no nos aumenta el rendimiento potencialmente, ni nada por el estilo. Pero un sistema altamente acoplado se vuelve casi imposible de mantener.

Para poder aplicar correctamente este principio debemos tener un uso de la Abstracción de nivel medio-avanzado. La idea es poder conseguir que las clases interactuen con otras clases sin necesidad de conocerla directamente. Es decir que clases de un nivel mayor no debe conocer a una clase de nivel inferior para poder utilizarla.

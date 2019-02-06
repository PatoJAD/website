---
title: "Instalcion KDE Neon"
date: "2019-01-28"
description: "Distribucion basada en Ubuntu con entorno KDE"
type: "instalacion"
img:  ""
---

# KDE Neon

La instalación guiada se encuentra por el momento solo en formato vídeo, mas adelante intentare ofrecer otro medio guiado.

{{< youtube code="gAP7y2pEC1M">}}

# Preguntas más frecuentes
### ¿Qué es KDE neon?
KDE neon es un repositorio de software rápidamente actualizado. La mayoría de los usuarios querrán usar los paquetes creados a partir del software lanzado que conforma nuestra Edición de Usuario. Los colaboradores y evaluadores de KDE pueden usar los paquetes creados a partir de KDE Git en las Ediciones para desarrolladores. Utiliza la base de la última Ubuntu LTS (18.04).

### ¿Es esta "la distro KDE"?
No KDE cree que es importante trabajar con muchas distribuciones, ya que cada una aporta valor y experiencia únicos para sus respectivos usuarios. Este es uno de los cientos de proyectos de KDE.

### ¿Habrá una versión que use versiones no LTS de Ubuntu?
No, solo planeamos basarnos en la última versión LTS de Ubuntu, esto viene con Linux y actualizaciones de la pila de gráficos para mantener los controladores relevantes. Haremos backport a otro software según sea necesario.

### ¿Es una distro?
No exactamente, es un paquete de archivos con el último software de KDE sobre una base estable. Si bien tenemos imágenes instalables, a diferencia de las distribuciones completas de Linux, solo estamos interesados en el software KDE.

### ¿Es una distro Rolling Release?
No exactamente, es un paquete de archivos con el último software de KDE sobre una base estable. A diferencia de las distribuciones rolling, solo el software KDE se actualizará continuamente.

### ¿Cuál es la diferencia entre KDE neon y el uso de Ubuntu simple?
KDE neon proporcionará a los usuarios paquetes más actualizados de Qt y software KDE de vanguardia.

### ¿Por qué Ubuntu?
Usamos Ubuntu como base para KDE neon porque el equipo de KDE neon cree que ofrece la mejor tecnología como una versión estable y el mejor soporte de terceros. El equipo de neon de KDE está familiarizado con que Ubuntu ha trabajado con él durante más de una década. También creemos que los usuarios de Ubuntu se perderán si no tienen el software KDE actualizado. De lo contrario, no está relacionado con el proyecto de Ubuntu o Canonical.

### ¿Puedo convertir Kubuntu en KDE neon con un PPA?
Recomendamos que instale un neon de KDE nuevo a partir de las imágenes ISO proporcionadas. Pero sí puede agregar un repositorio APT para cambiar de Kubuntu a KDE neon. Esto es absolutamente no probado o apoyado Si las cosas empeoran, se espera que esté lo suficientemente informado para reparar su sistema por su cuenta. Una búsqueda en la web debería darle rápidamente información relevante sobre cómo hacer esto.

### ¿KDE neon es un complemento de Kubuntu?
KDE neon se encuentra sobre los cimientos del núcleo de Ubuntu, lo que significa que la mayoría del software creado para el núcleo de Ubuntu funcionará bien, incluso cuando el equipo de neon de KDE no lo admite explícitamente. Sin embargo, KDE neon no es compatible con Kubuntu, ya que existe una gran superposición en las ofertas básicas tanto de Kubuntu como de KDE neon. No puede utilizar ambos sistemas al mismo tiempo. Instalar KDE neon simplemente reemplazará a Kubuntu.

### ¿Puedo usar un escritorio que no sea Plasma?
Esto probablemente no funcionará (probablemente ni siquiera se instalará). Ciertamente no es compatible incluso si el escritorio se instala. KDE neon se enfoca en el software de KDE, la mayoría del otro software no es compatible y no debería sorprenderse si no puede instalarlo o deja de funcionar en cualquier momento debido a una actualización.

### ¿Es KDE neon de 64 bits solamente?
Sí. Como las computadoras sin 64 bits se han vuelto cada vez más raras, hemos optado por enfocar nuestros recursos en compilaciones de 64 bits de mayor calidad.

### ¿Por qué los espejos de descarga no son https?
Los espejos son generosamente donados para uso de KDE por varias organizaciones, pero varios no admiten https, por lo que nuestras descargas son solo http. Sin embargo, las imágenes están firmadas por GPG para que pueda estar seguro de que coinciden con lo que crearon nuestros constructores.

### ¿Qué es KDE?
KDE® Community es un equipo de tecnología internacional dedicado a crear una experiencia informática gratuita y fácil de usar, que ofrece un escritorio gráfico avanzado, una amplia variedad de aplicaciones para la comunicación, el trabajo, la educación y el entretenimiento, y una plataforma para crear fácilmente nuevas aplicaciones.

### ¿Cómo actualizo al último software?
KDE neon realiza una implementación continua del último software de KDE, lo que significa que casi siempre hay nuevas versiones de nuestro software para actualizar. Recomendamos utilizar el actualizador de Plasma Discover que aparece en su panel:

Si prefiere usar la línea de comandos, puede usar el comando pkcon:

    pkcon refresh
    pkcon update
Esto instalará todos los paquetes nuevos y usará el mismo código PackageKit que Plasma Discover. Algunos usos de apt no instalan nuevos paquetes, lo que lo hace menos adecuado para KDE neon.

Página principal

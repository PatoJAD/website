---
title: "Mi terminal ZSH + PowerLevel10K"
date: "2020-07-22 08:22:00"
description: "Ya muchos preguntaron por mi terminal en videos o publicaciones asi que despues de tanta demora decidi compartirla"
type: "estilo"
tags: ["zsh", "ohmyssh", "powerlevel", "10k", "terminal", "shell"]
category: ["Estilo"]
img: "https://i.postimg.cc/15KHksnn/Screenshot-20200722-081612.png"
authors: ["PatoJAD"]
---

Muchos me preguntaron sobre mi terminal en videos anteriores, en esta oportunidad quiero explicar como llegar a tener una terminal como la que uso yo, y específicamente, porque tener una terminal así.

{{< br >}}
{{< img src="https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/performance.gif" >}}
{{< br >}}

Dentro de mi profesión como developer es importante la velocidad y simplicidad de tareas cotidianas y una de esas es el uso de la terminal, la terminal la uso todo el dia y para prácticamente todo, por lo cual requiero una terminal que pueda personalizar para que se acomode y obviamente me simplifique todo lo que pueda…

{{< br >}}
{{< br >}}

## ZSH un shell diferente

{{< br >}}

ZSH (Z shell) es una terminal (o mejor dicho shell) para uso interactivo que nos permitirá ser más eficientes cuando estemos delante de la consola. Esta Shell nos permite interpretar, además de comandos, scripts lo cual puede volverse extremadamente útil. Y entre sus ventajas podemos enumerar:

{{< br >}}

* Eficiencia
* Completado de tabulador mejorado (para los que usamos tab con frecuencia esto es lo que mas me enamoro)
* Expansión de nombres de fichero mejorada
* Manejo de arrays mejorado
* Totalmente personalizable (a los fanáticos de la belleza esto les va a encantar)

{{< br >}}

La instalación es muy simple porque viene en los repositorios de la mayoría de las distros de linux. Lo cual nos permite hacerlo de una manera muy simple:

{{< br >}}

    sudo apt install zsh

{{< br >}}

Si queremos definir este shell como shell por defecto (de esta forma al abrir la terminal iniciará este shell y no bash que suele ser el shell por defecto de la mayoría de las distros) ejecutamos el siguiente comando:

{{< br >}}

    chsh -s `which zsh`

{{< br >}}

Sin embargo por sí solo puede ser un poco engorroso de configurar y puede llevarnos demasiado tiempo, pero como vivimos en el mundo del Software Libre y de la gente que no se queda quieta, podemos encontrar unas **vitaminas**.

{{< br >}}
{{< br >}}

## Oh My ZSH al rescate

{{< br >}}
{{< img src="https://www.ivaylopavlov.com/wp-content/uploads/2017/04/Screenshot-2017-04-30-00.43.48.png" >}}
{{< br >}}

Es un framework desarrollado por la comunidad para gestionar la configuración de ZSH. El cual viene a simplificar la tarea personalizar y añadir plugins y configurarlo a gusto, esto puede llegar a ser realmente muy útil y por supuesto simple de instalar, para iniciar debemos instalar sus dependencias:

{{< br >}}

    sudo apt install git-core curl

{{< br >}}

y a continuación instalamos directamente desde su git.

{{< br >}}

    sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

{{< br >}}

De esta forma se instalará este “aditivo” que permitirá configurarlo a nuestro gusto!

{{< br >}}
{{< br >}}

## PowerLevel 10k

{{< br >}}
{{< img src="https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/prompt-styles-high-contrast.png" >}}
{{< br >}}

Esto ya es 100% decicion mia, es un theme que me gusto y que suma un valor agregado con datos que muchas veces pueden ser interesantes que pueden leer en su documentación dentro de los cuales puedo resaltar:

{{< br >}}

* Tiempo de ejecución de script
* Status de git
* hora de comando

{{< br >}}

Para instalarlos voy a indicar el paso a paso, no es obligatorio seguirlo así dado que algunos pasos son opcionales pero la verdad recomiendo hacerlo así para obtener una buena integración y performance… Iniciamos instalando las siguientes fonts y poniendo en nuestra terminal la font por defecto *Meslo Nerd Font*

{{< br >}}

{{< link text="MesloLGS NF Regular" url="https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf" >}}
{{< br >}}
{{< link text="MesloLGS NF Bold" url="https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf" >}}
{{< br >}}
{{< link text="MesloLGS NF Italic" url="https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf" >}}
{{< br >}}
{{< link text="MesloLGS NF Bold Italic" url="https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf" >}}

{{< br >}}

Luego desde la terminal descargamos el theme de PowerLevel10k desde su repositorio oficial:

{{< br >}}

    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

{{< br >}}

Por último queda modificar el archivo de configuracion para que inicie este theme, para hacerlo en este caso lo explicare con nano pero pueden usar el editor que quieran:

{{< br >}}

    nano ~/.zshrc

{{< br >}}

ahi buscamos la linea que tenga lo siguiente

{{< br >}}

    ZSH_THEME="..."

{{< br >}}

Donde los puntos suspensivos *(...)* son cualquier texto. y lo remplazamos por la siguiente linea

{{< br >}}

    ZSH_THEME="powerlevel10k/powerlevel10k"

{{< br >}}

Ahora reiniciamos la terminal y nos abrira una configuracion paso a paso donde vamos a ir eligiendo entre ejemplos como se vera la terminal, las primeras preguntas son si vemos los iconos y luego nos mostrará opciones (casi siempre del 1 al 4) donde iremos estableciendo la visualización…

{{< br >}}
{{< img src="https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif" >}}
{{< br >}}

En el caso de que no nos guste como quedo o queramos cambiarlo siempre se puede ejecutar el comando:

{{< br >}}

    p10k configure

{{< br >}}

Que permitirá reconfigurar el theme nuevamente para dejarlo a nuestro gusto... No te olvides de comentarnos que te parece y dejarnos la foto de tu terminal recien configurada! Te esperamos en Telegram

{{< br >}}

---

{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
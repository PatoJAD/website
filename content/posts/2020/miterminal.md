---
title: 'Mi terminal ZSH + PowerLevel10K'
date: '2023-10-12 12:22:00'
description: 'Ya muchos preguntaron por mi terminal en videos o publicaciones asi que despues de tanta demora decidi compartirla'
type: 'post'
tags:
    [
        'zsh',
        'ohmyszh',
        'powerlevel',
        '10k',
        'terminal',
        'shell',
        'bash',
        'pl10k',
        'linux',
        'ubuntu',
        'debian',
        'arch',
        'archlinux',
        'consola',
        'prompt',
        'patojad',
        'console',
    ]
categories: ['Estilo', 'Linux', 'MacOS']
img: 'https://i.postimg.cc/15KHksnn/Screenshot-20200722-081612.png'
authors: ['PatoJAD']
---

Muchos me preguntaron sobre mi terminal en videos anteriores, en esta oportunidad quiero explicar como llegar a tener una terminal como la que uso yo, y específicamente, porque tener una terminal así.

![](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/performance.gif)

Dentro de mi profesión como developer es importante la velocidad y simplicidad de tareas cotidianas y una de esas es el uso de la terminal, la terminal la uso todo el dia y para prácticamente todo, por lo cual requiero una terminal que pueda personalizar para que se acomode y obviamente me simplifique todo lo que pueda…

{{< youtube id="DvcA_iFov54" >}}

## ZSH un shell diferente

ZSH (Z shell) es una terminal (o mejor dicho shell) para uso interactivo que nos permitirá ser más eficientes cuando estemos delante de la consola. Esta Shell nos permite interpretar, además de comandos, scripts lo cual puede volverse extremadamente útil. Y entre sus ventajas podemos enumerar:

-   Eficiencia
-   Completado de tabulador mejorado (para los que usamos tab con frecuencia esto es lo que mas me enamoro)
-   Expansión de nombres de fichero mejorada
-   Manejo de arrays mejorado
-   Totalmente personalizable (a los fanáticos de la belleza esto les va a encantar)

La instalación es muy simple porque viene en los repositorios de la mayoría de las distros de linux. Lo cual nos permite hacerlo de una manera muy simple:

```bash
# debian/ubuntu
sudo apt install zsh
```

```bash
# archlinux
sudo pacman -S zsh
```

Si queremos definir este shell como shell por defecto (de esta forma al abrir la terminal iniciará este shell y no bash que suele ser el shell por defecto de la mayoría de las distros) ejecutamos el siguiente comando:

```bash
chsh -s `which zsh`
```

Sin embargo por sí solo puede ser un poco engorroso de configurar y puede llevarnos demasiado tiempo, pero como vivimos en el mundo del Software Libre y de la gente que no se queda quieta, podemos encontrar unas **vitaminas**.

## Oh My ZSH al rescate

![](https://www.ivaylopavlov.com/wp-content/uploads/2017/04/Screenshot-2017-04-30-00.43.48.png)

Es un framework desarrollado por la comunidad para gestionar la configuración de ZSH. El cual viene a simplificar la tarea personalizar y añadir plugins y configurarlo a gusto, esto puede llegar a ser realmente muy útil y por supuesto simple de instalar, para iniciar debemos instalar sus dependencias:

```bash
# debian/ubuntu
sudo apt install git-core curl
```

```bash
# archlinux
sudo pacman -S git curl
```

y a continuación instalamos directamente desde su git.

```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

De esta forma se instalará este “aditivo” que permitirá configurarlo a nuestro gusto!

## PowerLevel 10k

![](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/prompt-styles-high-contrast.png)

Esto ya es 100% decicion mia, es un theme que me gusto y que suma un valor agregado con datos que muchas veces pueden ser interesantes que pueden leer en su documentación dentro de los cuales puedo resaltar:

-   Tiempo de ejecución de script
-   Status de git
-   hora de comando

Para instalarlos voy a indicar el paso a paso, no es obligatorio seguirlo así dado que algunos pasos son opcionales pero la verdad recomiendo hacerlo así para obtener una buena integración y performance… Iniciamos instalando las siguientes fonts y poniendo en nuestra terminal la font por defecto _Meslo Nerd Font_

[MesloLGS NF Regular](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)

[MesloLGS NF Bold](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)

[MesloLGS NF Italic](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)

[MesloLGS NF Bold Italic](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)

Luego desde la terminal descargamos el theme de PowerLevel10k desde su repositorio oficial:

```zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Por último queda modificar el archivo de configuracion para que inicie este theme, para hacerlo en este caso lo explicare con nano pero pueden usar el editor que quieran:

```zsh
nano ~/.zshrc
```

ahi buscamos la linea que tenga lo siguiente

```cfg
ZSH_THEME="..."
```

Donde los puntos suspensivos _(...)_ son cualquier texto. y lo remplazamos por la siguiente linea

```cfg
ZSH_THEME="powerlevel10k/powerlevel10k"
```

Ahora reiniciamos la terminal y nos abrira una configuracion paso a paso donde vamos a ir eligiendo entre ejemplos como se vera la terminal, las primeras preguntas son si vemos los iconos y luego nos mostrará opciones (casi siempre del 1 al 4) donde iremos estableciendo la visualización…

![](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif)

En el caso de que no nos guste como quedo o queramos cambiarlo siempre se puede ejecutar el comando:

```zsh
p10k configure
```

Que permitirá reconfigurar el theme nuevamente para dejarlo a nuestro gusto... No te olvides de comentarnos que te parece y dejarnos la foto de tu terminal recien configurada! Te esperamos en Telegram

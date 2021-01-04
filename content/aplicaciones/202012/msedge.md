---
title: 'Edge en Linux'
date: '2020-12-18 09:06:00'
description: 'Hace ya un tiempo arribó a las distros de linux el nuevo MS Edge que no es más que un chromiun modificado…'
type: 'aplicaciones'
tags: ["navegador", "microsoft", "edge", "arch", "ubuntu", "fedora" , "opensuse", "video", "chrome", "provacidad", "chromiun", "instalar", "install"]
category: ["Aplicaciones"]
img: 'https://i.blogs.es/7af0a9/microsoft-edge-segundo-navegador-mas-usado-mundo/1366_2000.jpeg'
authors: ["PatoJAD"]
---

{{< br >}}

Hace ya un tiempo arribó a las distros de linux el nuevo MS Edge que no es más que un chromiun modificado… Esto implicó entre los usuarios fuertes disputas y opiniones muy abruptas… Para no perder la costumbre hablamos de este tema hoy, cuando todos se olvidaron…

{{< br >}}
{{< img src="https://i.blogs.es/7af0a9/microsoft-edge-segundo-navegador-mas-usado-mundo/1366_2000.jpeg">}}
{{< br >}}
{{< br >}}

## Video

{{< br >}}

Como no podía ser menos, todo tema que demora mucho va a parar a youtube, ¿Por qué? nunca lo sabremos pero te dejamos este hermoso video para que vos también des tu opinión.

{{< br >}}
{{< youtube code="peCck-Rg3To" >}}
{{< br >}}
{{< br >}}

## Instalar

{{< br >}}
{{< img src="https://blog.desdelinux.net/wp-content/uploads/2020/09/edge-on-linux.jpg" >}}
{{< br >}}

Seguramente sos una persona sensata que sabe que para opinar tenes que instalarlo, o simplemente quieres tenerlo en tu PC. Por esto mismo te dejo los pasos de instalación para que sea mucho más simple!

{{< br >}}
{{< br >}}

### Debian/Ubuntu y derivados

{{< br >}}

Basta con agregar los repositorios y la llave para asegurarnos de que sean los correctos, luego lo instalamos con nuestro amigo APT como siempre.

{{< br >}}

```bash
curl https://packages.microsoft.com/keys/microsoft.asc | gpg –dearmor > microsoft.gpg
sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c ‘echo «deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main» > /etc/apt/sources.list.d/microsoft-edge-dev.list’
sudo rm microsoft.gpg
sudo apt update
sudo apt install microsoft-edge-dev
```

{{< br >}}
{{< br >}}

### Instalación en Fedora y derivados

{{< br >}}

Al igual que ubuntu y amigas es necesario agregar los repos, las llaves e instalarlo de la siguiente forma.

{{< br >}}

```bash
sudo rpm –import https://packages.microsoft.com/keys/microsoft.asc
sudo dnf config-manager –add-repo https://packages.microsoft.com/yumrepos/edge
sudo mv /etc/yum.repos.d/packages.microsoft.com_yumrepos_edge.repo /etc/yum.repos.d/microsoft-edge-dev.repo
sudo dnf install microsoft-edge-dev
```

{{< br >}}
{{< br >}}

### Instalación en openSUSE y derivadas

{{< br >}}

El proceso es similar a los anteriores pero con los comandos correspondientes a esta distribución

{{< br >}}

```bash
sudo rpm –import https://packages.microsoft.com/keys/microsoft.asc
sudo zypper ar https://packages.microsoft.com/yumrepos/edge microsoft-edge-dev
sudo zypper update
sudo zypper install microsoft-edge-dev
```

{{< br >}}
{{< br >}}

### Arch Linux

{{< br >}}

Aca como siempre juega un papel enorme la comunidad ya que MS ni se molestó en armar un paquete pero por suerte existe yay y podemos hacer simplemente:

{{< br >}}

```bash
yay -S microsoft-edge-dev-bin  
```
{{< br >}}
{{< br >}}

---

{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
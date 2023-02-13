---
title: "Como instalar brew en MacOS"
date: "2023-02-13 14:04:00.00"
description: "Hoy vamos a ver como instalar brew (o homebrew) el gestor de paquetes para devs en MacOS."
type: "macos"
tags: ["brew", "brewhome", "homebrew", "gestor", "paquetes", "install", "macos", "mac", "apple", "package", "manager", "universal"]
category: ["MacOS"]
img: "https://cdn.osxdaily.com/wp-content/uploads/2022/12/homebrew-ventura-macos.jpg"
authors: ["PatoJAD"]
---

**Homebrew** instala todo aquello que necesitas que Apple no instala de serie. **Homebrew** instala cada paquete en su propio directorio, creando enlaces simbólicos a tus archivos dentro de `/usr/local`. **Homebrew** nunca instala archivos fuera de su prefijo, y puedes colocar la instalación de **Homebrew** donde quieras. 

**Homebrew** está basado únicamente en Git y Ruby: ya puedes desarrollar tranquilo, con la seguridad de que podrás deshacer tus cambios e integrar actualizaciones con total facilidad.

## Video

{{< youtube code="5lMSYgKbZUc" >}}

## Comandos

Puede que previamente tengas que instalar las Tools de xcode (`git`, `gcc`, `clang`, etc...) lo podemos hacer desde nuestra terminal de la siguiente manera:

```shell
xcode-select --install
```

El comando utilizado en el video es el siguiente

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

{{< link text="Documentacion" url="https://docs.brew.sh/" >}}

---

{{< link text="Discutir en el Foro" url="https://community.vasak.net.ar/topic/12/como-instalar-brew-en-macos" >}}

---
title: "Auditoría de seguridad en Linux sin romper nada: probamos Linaudit"
description: "Aprende a realizar una auditoría de seguridad en Linux con Linaudit, una herramienta de análisis que opera en modo solo lectura.."
date: "2026-11-17 11:31:00.00"
type: video
videoId: pfJS0mzfJIw
authors: ["PatoJAD"]
tags:
  [
    linaudit, auditoria, seguridad, linux, la chica de sistemas, alexia, rust, debian, fedora, manjaro, arch, archlinux, endeavour, goldendog, goldendog linux, vulnerabilidades, auditoria de sistemas, sistemas, auditoria de seguridad, gua, linux tutorial, tutorial, tips, tech, arch linux
  ]
categories: ["Linux", "Seguridad", "Redes"]
img: "https://i.postimg.cc/zfRNrj6N/c2padefault.webp"
---

Siempre se repite la misma frase en el mundo tech: *"Linux es súper seguro"*. Pero la realidad es que esa seguridad depende en gran medida de cómo configuremos nuestro entorno, qué permisos otorguemos y qué malas prácticas arrastremos en el día a día (especialmente quienes desarrollamos y dejamos secretos o claves a la vista).

Para sacarnos las dudas de qué tan expuesto está nuestro sistema, hoy probamos **Linaudit**, una herramienta de auditoría de seguridad de solo lectura creada en **Rust** por **Alexia** *(La Chica de Sistemas)*.

## ¿Qué es Linaudit y por qué es segura de ejecutar?

A diferencia de otros scripts o utilidades de hardening que intentan modificar archivos de configuración o aplicar parches automáticos que pueden romper dependencias, Linaudit funciona en modo de solo lectura.

Mira el sistema como lo haría un auditor de seguridad o un atacante, analiza diferentes vectores críticos y te devuelve un reporte claro con un puntaje del 1 al 10, clasificando los hallazgos según su nivel de criticidad (Bajo, Medio, Alto o Crítico).

Entre sus principales ventajas destacan:

* Cero riesgo de rotura: Solo analiza y reporta, no altera nada.
* Interfaz moderna en terminal (TUI): Clara, rápida e intuitiva.
* Totalmente en español (y en inglés): Un valor enorme para nuestra comunidad.
* Orientación práctica: Al presionar Enter sobre un hallazgo, no solo explica el problema sino también cómo solucionarlo paso a paso.

## ¿Qué aspectos analiza del sistema?

El análisis toma menos de un minuto y cubre áreas esenciales como:

* Cuentas y privilegios de usuario.
* Configuración del servicio SSH.
* Permisos del File System (archivos sensibles, binarios con capabilities dudosas).
* Secretos y credenciales expuestas (variables de entorno, URLs con contraseñas en texto plano).
* Red y cortafuegos.
* Módulos de seguridad (SELinux, AppArmor).

## Cómo instalar Linaudit

La herramienta cuenta con distintas formas de instalación según la distribución que uses:

### En Debian, Ubuntu y derivadas

Linaudit ya forma parte de los repositorios oficiales de Debian, por lo que la instalación es directa:

```bash
sudo apt update
sudo apt install linaudit
```

### En Arch Linux y derivadas (AUR)

Para los usuarios de Arch Linux, empaqueté la versión Git en AUR para facilitar la instalación con tu helper favorito (como `yay` o `paru`):

```bash
yay -S linaudit-git
```

### Compilación desde el código fuente (Rust)

Si utilizas otra distribución o prefieres compilarla directamente, necesitas contar con Rust (versión 1.85 o superior):

```bash
git clone https://github.com/alexia/linaudit.git
cd linaudit
cargo build --release
sudo cp target/release/linaudit /usr/local/bin/
```

## Ejecución: Modo usuario vs. Modo Root (sudo)

Puedes correr la herramienta directamente con:

```bash
linaudit
```

Sin embargo, al ejecutarla como usuario estándar sin privilegios, la auditoría tiene un límite máximo de 6/10, ya que hay archivos y configuraciones del sistema a los que no puede acceder sin permisos administrativos. Para una auditoría completa de extremo a extremo, lo recomendable es ejecutarla con sudo:

```bash
sudo linaudit
```

Al iniciar, Linaudit te consultará el perfil de tu máquina (Escritorio/Notebook, Servidor o Contenedor/VM efímera), adaptando los chequeos a cada caso.

## Los resultados de mi prueba en vivo

Al correr la prueba en mi entorno de trabajo principal, el resultado final fue de 6/10, desglosado en:

* **1 problema crítico:** Configuración heredada en la gestión de sesiones/PAM de SSH.
* **6 problemas altos:** Ausencia de perfiles como AppArmor y credenciales embebidas detectadas en algunos archivos.
* **11 problemas medios.**
* **7 problemas bajos.**

Lo mejor de la herramienta es que al navegar por la lista y presionar Enter, se abre el detalle exacto: qué archivo genera el conflicto, por qué representa un riesgo y cuál es el comando o ajuste necesario para corregirlo.

## ¿Y a ti, qué puntaje te dio?

Te invito a clonar o instalar la herramienta, ejecutarla en tu distribución favorita y dejar en los comentarios de este post (o en el video) qué nota obtuvo tu instalación. ¿Qué tan protegido estaba tu Linux antes de revisarlo?
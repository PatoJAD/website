---
title: AdBlock Spotify
date: '2020-07-07 09:23:00'
description: La comunidad genero un complemento que nos permite utilizar Spotify sin nececidad de escuchar la molesta publicidad
type: aplicaciones
tags: [spotify, ads, block, adsblock, app, deb, publicidad, free, gratis]
categories: [Aplicaciones]
img: https://planetawindows.com/wp-content/uploads/2016/09/V%C3%ADdeo-43-1200x675.jpg
authors: [PatoJAD]
---

Muchos de nosotros usamos diferentes reproductores de música, y algunos de nosotros incluso usamos servicios de música online, en este caso vamos a hablar de una en específico: **Spotify**, un servicio de música online que cuenta con una versión Free la cual nos permite escuchar música _100% gratis_ con unas publicidades que suelen ser tolerables al inicio pero cada vez son más invasivas...

## Una comunidad que no quiere Publicidad

La comunidad **no quiere publicidad** cuando escucha música. Y como siempre la comunidad encuentra la forma de obtener lo que quiere. Y en esta solución que ofrecemos hoy es nada más ni nada menos que un filtro que bloquea la publicidad en el momento de su obtención.

## Instalación

La instalación de este _"complemento"_ como nos marcan en su README se realiza mediante la compilación del mismo, lo cual suena realmente más difícil de lo que es, bastará con correr algunos comandos. Sin embargo, **nosotros armamos un deb** para simplificar un poco la instalación. El mismo lo pueden descargar a continuación.

[Descargar en formato DEB](https://www.mediafire.com/file/ag5vyxovkv53f15/spotify-adblock_1-PatoJAD_amd64.deb/file)

## Cómo utilizarlo

Se puede utilizar simplemente con la línea de comandos, o terminal, o shell. Recuerden que esto se utiliza teniendo instalado Spotify y desde la terminal lo podemos hacer con el siguiente comando:

```zsh
LD_PRELOAD=/usr/local/lib/spotify-adblock.so spotify
```

Sin embargo, es molesto cada vez que queramos usarlo tener que ejecutar este comando por lo cual podemos, por única vez, armar este archivo que nos permite generar un lanzador en nuestro menú, que nos permite ejecutar todo esto desde un simple botón.

```zsh
nano ~/.local/share/applications/spotify-adblock.desktop
```

Y dentro de ese archivo que creamos debemos poner lo siguiente.

```cfg
[Desktop Entry]
Type=Application
Name=Spotify (PatoJAD)
GenericName=Music Player
Icon=spotify-client
TryExec=spotify
Exec=env LD_PRELOAD=/usr/local/lib/spotify-adblock.so spotify %U
Terminal=false
MimeType=x-scheme-handler/spotify;
Categories=Audio;Music;Player;AudioVideo;
StartupWMClass=spotify
```

Es posible que ni bien después de crearlo no aparezca en el menú esto puede llegar a demorar unos minutos (Hasta que se refresque o se reinicie) sin embargo obtendremos dentro del menú un nuevo "Spotify" que inicia con el bloqueador de una

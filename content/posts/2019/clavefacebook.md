---
title: 'La Clave de Facebook fue Filtrada'
date: '2019-09-05'
description: 'Se filtra una clave criptográfica usada por Facebook para firmar sus aplicaciones'
type: 'post'
tags:
    [
        'facebook',
        'clave',
        'filtrada',
        'criptografica',
        'seguridad',
        'aplicaciones',
        'firmar',
    ]
categories: ['Seguridad', 'Noticias']
img: https://i.postimg.cc/ncPQM6Js/fbclavefiltrada.webp
authors: ['PatoJAD']
---

# La clave Criptográfica de Facebook Filtrada

Una clave criptográfica (en este caso la que se utiliza para firmar aplicaciones) es como una credencial que nos permite confiar en una app. Esta clave es única por empresa y con eso podemos saber que si la clave coincide claramente esa aplicación corresponde a esa empresa. Sin embargo, en este caso corremos con algo en contra…

<div class="text-center"><blockquote class="twitter-tweet" data-lang="es" data-theme="dark" data-link-color="#ff8c00"><p lang="es" dir="ltr">Se filtra una clave criptográfica usada por <a href="https://twitter.com/hashtag/Facebook?src=hash&amp;ref_src=twsrc%5Etfw">#Facebook</a> para firmar sus aplicaciones. Ya se han detectado las primeras aplicaciones maliciosas firmadas con esta clave.<br><br>Más información: <a href="https://t.co/iijrowseUq">https://t.co/iijrowseUq</a> <a href="https://t.co/Ubi7yq0XV4">pic.twitter.com/Ubi7yq0XV4</a></p>&mdash; CSIRT-CV (@CSIRTCV) <a href="https://twitter.com/CSIRTCV/status/1168831562194018305?ref_src=twsrc%5Etfw">3 de septiembre de 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>

> Ya se han detectado las primeras aplicaciones maliciosas firmadas con esta clave
>
> Las claves de firmado para aplicaciones son utilizadas para firmar digitalmente las aplicaciones y que se pueda comprobar que son originales, que no se han falsificado y que no se han modificado con fines fraudulentos. Estas claves son secretas y por ello deben custodiarse con cautela para evitar filtraciones como la de la presente noticia.
>
> Según se ha sabido, la clave utilizada por la empresa Facebook para firmar su aplicación Free Basics (antes “Internet.org”), ha sido filtrada por un error en su custodia, por lo que resulta posible crear copias modificadas de la aplicación, firmarlas, y que el usuario crea que se trata de la aplicación original.
>
> Como medida de corrección, la aplicación se ha retirado de la Play Store y se ha sustituido por una nueva que utiliza una clave de firmado diferente.

![](https://wwwhatsnew.com/wp-content/uploads/2019/03/Facebook-1905890_1280-.jpg)

Como podemos ver ya se encuentra solucionado el problema en sí, sin embargo, nos deja la duda de si es posible que se filtren otras claves y obtengamos aplicaciones falsas con su firma. Si te ingresa saber más sobre esto te dejamos el articulo detallado con la información técnica en detalle de lo ocurrido en el siguiente [Link](https://www.androidpolice.com/2019/08/29/cryptographic-key-used-to-sign-one-of-facebooks-android-apps-compromised/)

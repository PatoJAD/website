---
title: 'Hugo CMS - Date en español'
date: '2020-04-15 09:15:00'
description: 'Vamos a ver como traducir nuestro Date para darle mas personalidad a nuestro sitio'
type: 'programacion'
tags: ['hugo', 'cms', 'cards', 'range', 'gougo', 'tutorial', 'curso']
category: ['Programacion']
img: 'https://i.postimg.cc/BndqqSQt/hugo4.png'
authors: ['PatoJAD']
---

Es lógico querer poner la fecha de nuestro sitio en nuestro idioma, incluso querer hacerlo multi idioma. Para esto nuestro amigo {{< textlink text="Tehuel" url="https://tehuel.blog/" >}} nos facilita una "hack" para poder hacerlo!

{{< youtube code="NfGVnzbcZ-g" >}}

## Codigo

A continuación, como prometo en el video, dejo los fragmentos de código que utilizo, recuerden que estos pueden modificarlos a su gusto. En particular el crédito de todo esto como dije antes es de Tehuel

data/dias.yml

```yml
0: 'Domingo'
1: 'Lunes'
2: 'Martes'
3: 'Miércoles'
4: 'Jueves'
5: 'Viernes'
6: 'Sábado'
```

data/meses.yml

```yml
1: 'Enero'
2: 'Febrero'
3: 'Marzo'
4: 'Abril'
5: 'Mayo'
6: 'Junio'
7: 'Julio'
8: 'Agosto'
9: 'Septiembre'
10: 'Octubre'
11: 'Noviembre'
12: 'Diciembre'
```

data/mesesc.yml

```yml
1: 'Ene'
2: 'Feb'
3: 'Mar'
4: 'Abr'
5: 'May'
6: 'Jun'
7: 'Jul'
8: 'Ago'
9: 'Sep'
10: 'Oct'
11: 'Nov'
12: 'Dic'
```

themes/nuestrotheme/layouts/partials/date.html

```html
{{ $formattedDate := .Format "Friday, March 3, 2006" }} {{ $monthNumber :=
.Month }} {{ $dayNumber := .Weekday }} {{ if eq site.Language.Lang "es" }} {{
$monthNumber = index site.Data.meses (printf "%d" .Month) }} {{ $dayNumber =
index site.Data.dias (printf "%d" .Weekday) }} {{ $formattedDate = delimit
(slice $dayNumber (printf "%d" .Day) "de" $monthNumber "de" (printf "%d" .Year))
" "}} {{ end }} {{ return $formattedDate }}
```

Código del card que hardcodea el mes abreviado en español

```html
<h3>{{ .Date.Day }}</h3>
{{ $monthNumber := .Date.Month }} {{ $monthNumber = index site.Data.mesesc
(printf "%d" .Date.Month) }}
<p>{{ $monthNumber }}</p>
```

Cualquier duda o consulta los estamos esperando en nuestro grupo de Telegram para charlar y escuchar sus opiniones!

{{< link url="https://t.me/PatoJADCommunity" text="Unete" >}}

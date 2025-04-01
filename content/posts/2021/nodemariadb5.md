---
title: 'Webservice NodeJS y MariaDB 5 - Accediendo a Nuestra DB mediante la API'
date: '2021-08-12 10:00:00'
description: 'Accediendo a Nuestra DB mediante la API'
type: 'post'
tags:
    [
        'nodejs',
        'instalacion',
        'mariadb',
        'npm',
        'webservice',
        'curso',
        'express',
        'api',
        'query',
        'querywithparams',
    ]
categories: ['Programacion']
img: 'https://i.postimg.cc/RZDRXkTm/curso-5.png'
authors: ['PatoJAD']
---

Ya teniendo nuestra API levantada vamos a empezar a interactuar con nuestra base de datos y responderlo mediante la API. En este punto podemos ver que ya esto es extremadamente extensible como para proyectar mucho más grande.

{{< youtube id="AAjfynGFUuE" >}}

Dejo a continuación el código utilizado en el Video. Recuerden que se puede copiar con facilidad y ante cualquier duda podes encontrarnos en el grupo de telegram:

```javascript
router.route('/users').get(async (req, res) => {
	result = await DBConnector.query('SELECT * FROM usuarios');
	res.json(result);
});

router.route('/user/:id').get(async (req, res) => {
	result = await DBConnector.queryWithParams(
		'SELECT * FROM usuarios WHERE id=?',
		[req.params.id]
	);
	res.json(result);
});
```

[Unite a nuestra comunidad](https://t.me/PatoJADCommunity)

Si te sirvio no te olvides de apoyar. Compartir, una suscripción o un like no cuestan nada pero valen mucho...

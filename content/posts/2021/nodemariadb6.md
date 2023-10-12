---
title: 'Webservice NodeJS y MariaDB 6 - ABM en nuestra DB vía API'
date: '2021-08-16 10:00:00'
description: 'ABM en nuestra DB vía API'
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
		'abm',
		'insert',
		'delete',
		'update',
		'query',
		'querywithparams',
    ]
categories: ['Programacion']
img: 'https://i.postimg.cc/05YVPH9G/curso-6.png'
authors: ['PatoJAD']
---

Como última instancia vamos a terminar el ABM de nuestro webservice para poder controlar completamente la base de datos desde la API. Recordemos que esto es completamente extensible y que incluso puedo agregar querys con joins y demás.

{{< youtube id="KMeGAYhoYi4" >}}

Así mismo, como siempre, dejo a continuación el código utilizado en el video, no con el fin de ser copiado (aunque esto es posible) Sino más bien como referencia para que construyan su propio código

```javascript
router.route('/user/add').post(async (req, res) => {
	result = await DBConnector.queryWithParams(
		'INSERT INTO usuarios(dni, nombre, apellido, email) VALUES(?,?,?,?)',
		[req.body.dni, req.body.nombre, req.body.apellido, req.body.email]
	);
	res.json(result);
});

router.route('/user/delete/:id').get(async (req, res) => {
	result = await DBConnector.queryWithParams(
		'DELETE FROM usuarios WHERE id=?',
		[req.params.id]
	);
	res.json(result);
});

router.route('/user/update').post(async (req, res) => {
	result = await DBConnector.queryWithParams(
		'UPDATE usuarios SET nombre=?, apellido=?, email=? WHERE ID=?',
		[req.body.nombre, req.body.apellido, req.body.email, req.body.id]
	);
	res.json(result);
});
```

Si te necesitas que te demos una mano o tienes alguna duda, podes encontrarnos en la comunidad de Telegram donde con mucha alegría te vamos a estar ayudando.

{{< link text="Grupo de Telegram" url="https://t.me/PatoJADCommunity" >}}

Si te sirvio no te olvides de apoyar. Compartir, una suscripción o un like no cuestan nada pero valen mucho...

---

Si sentís que el curso te sirvió y, queres apoyar aún más que con tu subscribirse al canal de youtube y en las redes sociales o simplemente quieres certificar puedes encontrarlo en Udemy. Lamentablemente no me permite ponerle menos precio, pero si te interesa el certificado no te olvides de seguirnos que vamos a estar ofreciendo gratis para que todos los que lo deseen puedan certificar.

{{< link text="Curso en Udemy" url="https://www.udemy.com/course/patojad-webservice-nodejs-y-mariadb/?referralCode=817BCD02D2C08DEC01DE" >}}

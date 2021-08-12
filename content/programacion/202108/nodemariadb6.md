---
title: "Webservice NodeJS y MariaDB 6 - ABM en nuestra DB vía API"
date: "2021-08-16 10:00:00"
description: "ABM en nuestra DB vía API"
type: "programacion"
tags: ["nodejs","instalacion","mariadb","npm","webservice", "curso", "express", "api"]
category: ["Programacion"]
img: "https://i.postimg.cc/05YVPH9G/curso-6.png"
authors: ["PatoJAD"]
---

```javascript
router.route('/user/add').post(async(req,res)=>{
  result = await DBConnector.queryWithParams(
    "INSERT INTO usuarios(dni, nombre, apellido, email) VALUES(?,?,?,?)",
    [req.body.dni, req.body.nombre, req.body.apellido, req.body.email]
  )
  res.json(result);
});

router.route('/user/delete/:id').get(async(req,res)=>{
  result = await DBConnector.queryWithParams("DELETE FROM usuarios WHERE id=?", [req.params.id])
  res.json(result);
});

router.route('/user/update').post(async(req,res)=>{
  result = await DBConnector.queryWithParams(
    "UPDATE usuarios SET nombre=?, apellido=?, email=? WHERE ID=?",
    [req.body.nombre, req.body.apellido, req.body.email, req.body.id]
  )
  res.json(result);
});
```

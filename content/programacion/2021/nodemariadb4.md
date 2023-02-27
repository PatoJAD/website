---
title: "Webservice NodeJS y MariaDB 4 - Levantando API con Express"
date: "2021-08-09 10:00:00"
description: "Levantando API con Express en NodeJS"
type: "programacion"
tags:
  [
    "nodejs",
    "instalacion",
    "mariadb",
    "npm",
    "webservice",
    "curso",
    "express",
    "api",
  ]
category: ["Programacion"]
img: "https://i.postimg.cc/DwZ6QvL5/curso-4.png"
authors: ["PatoJAD"]
---

Ya estamos preparando lo último, aunque pueden ver que ya está todo bastante encaminado. En esta oportunidad vamos a dejar la API levantada para poder generar nuestras llamadas. Este paso es importante chequear que funciona correctamente para evitar cualquier problema posterior.

{{< youtube code="kV42bjGdsLQ" >}}

Dejo a continuación el código utilizado en el video, recuerden que la explicación del video sirve para comprender cada parte y luego poder configurarlo a gusto dependiendo de las necesidades. Si bien el curso es básico, dispone del contenido necesario para levantar una api Completa.

```javascript
// Importro requerimientos
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Inicializo las apps
const app = express();
const router = express.Router();

// Seteo Puerto
const port = process.env.PORT || 8484;

// Preparo el APP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Seteo Ruta principal
app.use("/", router);

// Configuro Rutas
router.route("/").get((req, res) => {
  res.json("Nuesta API esta Funcionando");
});

// Inicio la APP
app.listen(port);

// Muestro Puero en consola
console.log("Inicio en el puero " + port);
```

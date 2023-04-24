---
title: "Webservice NodeJS y MariaDB 3 - Conector MariaDB en NodeJS"
date: "2021-08-05 10:00:00"
description: "Conector MariaDB en NodeJS"
type: "programacion"
tags: ["nodejs", "instalacion", "mariadb", "npm", "webservice", "curso"]
category: ["Programacion"]
img: "https://i.postimg.cc/XJMg09hD/curso-3.png"
authors: ["PatoJAD"]
---

Ya teniendo todo preparado vamos a crear nuestro conector entre NodeJS y Mariadb para poder realizar las consultas o Querys para obtener, modificar o actualizar datos...

{{< youtube code="2P3jkH-HaKY" >}}

Dejo a continuación el código correcto del objeto que creamos para poder manipular las consultas.

```javascript
const mariadb = require("mariadb");

const config = {
  host: "localhost",
  user: "testwebserveruser",
  password: "testwebserverpass",
  database: "webserverdb",
  connectionLimit: 5,
  acquireTimeout: 300,
};

class DBConnector {
  dbconnector = mariadb.createPool(config);

  async query(sQuery) {
    var conn = await this.dbconnector.getConnection();
    var ret = null;
    await conn
      .query(sQuery)
      .then((data) => {
        ret = data;
        conn.end();
      })
      .catch((err) => {
        console.log(err);
        conn.end();
      });
    return ret;
  }
}

module.exports = new DBConnector();
```

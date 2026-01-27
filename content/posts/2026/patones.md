---
title: "Patrones de Diseño en Node.js: Arquitectura Profesional con Bun y TypeScript"
date: "2026-01-27 09:31:00.00"
type: video
videoId: t85zItaSFfU
authors: ["PatoJAD"]
description: "Deja de escribir código espagueti. Te enseño los 4 patrones de diseño que realmente se usan en producción: Singleton, Factory, Repository y Decorator. Ejemplos abstractos, limpios y aplicables a cualquier proyecto en 2026."
tags:
  [
    aprender a programar,
    patrones de diseño,
    singleton pattern,
    factory method,
    repository pattern,
    decorator pattern,
    diseño de software,
    arquitectura de software,
    nodejs,
    javascript,
    patrones de diseño,
    bun,
    typescript,
    desarrollo de software,
    buenas prácticas de programación,
    código limpio,
    programación para principiantes,
  ]
categories: ["Programacion"]
img: "https://i.postimg.cc/c1KNydGR/patrones.webp"
---


En el desarrollo de software, los patrones de diseño no son reglas rígidas, sino soluciones probadas a problemas comunes. En 2026, con entornos de alta velocidad como Bun, el cuello de botella ya no es el runtime, sino la deuda técnica.

A continuación, detallamos los 4 patrones que transforman un script en una aplicación de grado producción.

## Singleton (Creacional)

* **El Problema:** Instanciar múltiples veces clases que gestionan recursos pesados (conexiones a DB, configuraciones, clientes de caché) agota la memoria y crea estados inconsistentes.
* **La Solución:** Garantizar que una clase tenga una única instancia y proveer un punto de acceso global a ella.

Implementación en TS:

```ts
class ConfigManager {
  private static instance: ConfigManager;
  private settings: Record<string, string> = {};

  private constructor() { 
    // Carga inicial de variables de entorno
    this.settings = { apiKey: "12345" };
  }

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  public get(key: string): string {
    return this.settings[key];
  }
}

// Uso: const config = ConfigManager.getInstance();
```

> Caso de uso real: Mantener una única conexión activa a una base de datos o un gestor de logs.

## Factory Method (Creacional)

* **El Problema:** El código se llena de condicionales (if/else) cada vez que necesitamos crear diferentes tipos de objetos que comparten una interfaz.
* **La Solución:** Delegar la lógica de instanciación a una clase "Fábrica" que decide qué objeto crear basándose en un parámetro.

Implementación en TS:

```ts
interface Notifier {
  send(message: string): void;
}

class EmailNotifier implements Notifier {
  send(msg: string) { console.log(`Enviando Email: ${msg}`); }
}

class SMSNotifier implements Notifier {
  send(msg: string) { console.log(`Enviando SMS: ${msg}`); }
}

class NotifierFactory {
  static create(type: 'email' | 'sms'): Notifier {
    if (type === 'email') return new EmailNotifier();
    return new SMSNotifier();
  }
}
```

> Caso de uso real: Integrar múltiples pasarelas de pago (Stripe, PayPal) o proveedores de storage (S3, Local, Azure).

## Repository (Estructural/Comportamiento)

* **El Problema:** La lógica de negocio está "casada" con la base de datos. Si cambias de motor de base de datos o de librería (ORM), tienes que reescribir toda la aplicación.
* **La Solución:** Crear una capa intermedia que abstraiga el acceso a los datos. La lógica de negocio solo habla con el "Repositorio", no con la base de datos.

Implementación en TS:

```ts
interface User { id: number; name: string; }

interface IUserRepository {
  findById(id: number): Promise<User | null>;
}

class UserRepository implements IUserRepository {
  async findById(id: number): Promise<User | null> {
    // Aquí iría la consulta real (SQL, NoSQL, etc.)
    return { id, name: "Pato" };
  }
}
```

> Caso de uso real: Proyectos que necesitan ser testeables (haciendo un Mock del repositorio) o que prevén migrar su infraestructura de datos.

## Decorator (Estructural)

* **El Problema:** Necesitas añadir funcionalidades (logs, validaciones, caché) a métodos existentes sin modificar su código original para no violar el principio de Responsabilidad Única.
* **La Solución:** "Envolver" el método o clase original para añadirle comportamiento extra antes o después de su ejecución.

Implementación en TS:

```ts
function Logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Ejecutando ${propertyKey} con:`, args);
    return originalMethod.apply(this, args);
  };
}

class UserService {
  @Logger
  saveUser(name: string) {
    console.log(`Usuario ${name} guardado.`);
  }
}
```

> Caso de uso real: Medir el tiempo de ejecución de funciones, validar permisos de usuario o transformar datos de salida automáticamente.
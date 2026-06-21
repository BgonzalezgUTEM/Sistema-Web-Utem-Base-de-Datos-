# Sistema-Web-Utem-Base-de-Datos-
# Work Order System

Sistema Web desarrollado con Node.js, Express y MySQL para la gestión de clientes, servicios, equipos y ofertas comerciales.

## Descripción

Este proyecto permite administrar información relacionada con clientes y sus servicios contratados mediante una API REST.

Entre sus funcionalidades se encuentran:

- Consulta de clientes.
- Consulta de servicios disponibles.
- Consulta de equipos disponibles.
- Creación de ofertas comerciales.
- Asociación de servicios, equipos y provisiones a una oferta.

## Tecnologías Utilizadas

- Node.js
- Express.js
- MySQL
- REST API
- JavaScript

## Estructura del Proyecto

```
Proyecto/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── customer.controller.js
│   ├── equipment.controller.js
│   ├── offer.controller.js
│   └── service.controller.js
│
├── models/
│   ├── customer.model.js
│   ├── equipment.model.js
│   ├── offer.model.js
│   └── service.model.js
│
├── routes/
│   ├── customer.routes.js
│   ├── equipment.routes.js
│   ├── offer.routes.js
│   └── service.routes.js
│
├── sql/
│   └── script_bd.sql
│
├── .env
├── .gitignore
├── app.js
└── package.json
```

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
```

### 2. Entrar al proyecto

```bash
cd TU_REPOSITORIO
```

### 3. Instalar dependencias

```bash
npm install
```

## Configuración de Base de Datos

1. Crear una base de datos MySQL.
2. Ejecutar el archivo:

```text
sql/script_bd.sql
```

3. Configurar las variables de entorno en el archivo `.env`.

Ejemplo:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=1234
DB_NAME=WORK_ORDER_SYSTEM
PORT=3000
```

## Ejecución del Proyecto

Iniciar el servidor:

```bash
npm start
```

o

```bash
node app.js
```

Servidor disponible en:

```text
http://localhost:3000
```

## Endpoints Disponibles

### Obtener Cliente

```http
GET /work-order-system/customer?id-customer=1
```

### Obtener Servicios

```http
GET /work-order-system/get-services
```

### Obtener Equipos

```http
GET /work-order-system/get-equipment
```

### Crear Oferta

```http
POST /work-order-system/create-offer
```

Ejemplo de Body:

```json
{
  "offerName": "Oferta Premium",
  "offerPrice": 89990,
  "provisions": [1, 2],
  "services": [1, 3, 5],
  "equipments": [2, 4]
}
```

## Base de Datos

El proyecto incluye:

- Tablas de clientes.
- Direcciones.
- Servicios.
- Equipos.
- Ofertas.
- Relaciones entre clientes, servicios y equipos.

Además, incorpora datos de prueba para servicios y equipos.

## Autor

Proyecto académico desarrollado para la asignatura de Sistema Web.

## Licencia

Uso académico y educativo.

https://github.com/ISC-UPA/2026-2-nestmongo-c  
# Construir una API en NestJS con MongoDB

API versionada con prefijo /api/v1  
Persistencia con MongoDB y Mongoose

## Prerrequisitos

- Node.js LTS instalado
- npm disponible
- MongoDB en ejecución local (o cadena MONGODB_URI válida)
- Instalacion de CLI  
    npm install -g @nestjs/cli  


## Comprobacion de Requisitos
C:\dev>node --version  
v24.13.1

C:\dev>npm --version  
11.13.0

nest CLI
C:\dev>nest --version  
11.0.21  

Paquetes globales instalados:  
C:\dev>npm list -g --depth=0  
- C:\Users\carlos.herrera\AppData\Roaming\npm  
- +-- @nestjs/cli@11.0.21  
- `-- npm@11.13.0  

Revisar la ubicación del binario  
C:\dev\NestJs>where nest  
- C:\Users\carlos.herrera\AppData\Roaming\npm\nest  

## ⚙️ Conexión MongoDB

Por defecto: `mongodb://localhost:27017/prueba`  
En el archivo .env: `MONGODB_URI=mongodb://usuario:password@localhost:27017/DB?authSource=admin`  
Servidor: http://localhost:3000  
Base URL API: http://localhost:3000/api/v1/health  

## Arquitectura

```mermaid
flowchart LR
  A[Request HTTP] --> B[Controller]
  B --> C[Service]
  C --> D[Mongoose Model]
  D --> E[(MongoDB)]
```

- Controller: recibe y valida entrada (DTO).
- Service: aplica reglas de negocio.
- Model: ejecuta consultas a MongoDB.

## 📁 Estructura

```
src/
├── controllers/           # Controladores
│   ├── departamentos.controller.ts
│   └── health.controller.ts
├── dto/                   # Contratos de entrada validados
│   ├── create-departamentos.dto.ts
│   └── update-departamentos.dto.ts
├── modules/               # Feature modules por dominio
│   ├── departamentos.module.ts
├── schemas/               # Definiciones de modelos
│   ├── departamento.schema.ts
├── services/              # Servicios de dominio
│   ├── departamentos.service.ts
├── app.module.ts            # Módulo raíz
└── main.ts                # Punto de entrada
.env
.gitignore
README.md
package.json
```

## 📍 Endpoints Disponibles

Base URL de la API: `http://localhost:3000/api/v1`

### Salud

```bash
GET    /api/v1/health                       # API arriba y respondiendo
```

### Departamentos

```bash
GET    /api/v1/departamentos           # Listar todos
POST   /api/v1/departamentos           # Crear
GET    /api/v1/departamentos/:id       # Obtener por ID
PUT    /api/v1/departamentos/:id       # Actualizar
DELETE /api/v1/departamentos/:id       # Eliminar
GET    /api/v1/departamentos/count/total  # Contar
```

## 🧪 Insertar Departamento: curl, bruno o postman

```bash
curl -X POST http://localhost:3000/api/v1/departamentos \
  -H "Content-Type: application/json" \
  -d '{
    "id_dep": 10,
    "descripcion": "Ventas"
  }'
```

## 📋 Listar Departamentos

```bash
curl http://localhost:3000/api/v1/departamentos
```

# ⚡ Pasos para la construcción de la API:

## 1) Crear proyecto

    nest new my-proyecto-api
    cd my-proyecto-api
Selecciona **npm** cuando el asistente lo pregunte.  

Instalar dependencias de aplicación:  
- npm install @nestjs/mongoose mongoose @nestjs/config class-validator  class-transformer reflect-metadata rxjs  

Instalar dependencias de desarrollo:  

- npm install -D nodemon     

## 2) Ajustar scripts de package.json

Deja un bloque de scripts similar a este:  

    "scripts": {
      "start": "node dist/main",
      "dev": "nodemon --exec ts-node src/main.ts",
      "build": "nest build",
      "watch": "nest start --watch"
    }


## 3) Cascarón del proyecto

Generar módulos:  
    nest generate module modules/departamentos

Generar controladores:  
    nest generate controller controllers/health --no-spec  
    nest generate controller controllers/departamentos --no-spec  

Generar servicios:  
    nest generate service services/departamentos --no-spec  

Crear carpetas técnicas:  
    src/dto  
    src/schemas  

PowerShell (Windows):  
Crear archivos vacíos:  
    New-Item -ItemType File -Force src\dto\create-departamento.dto.ts,src\dto\update-departamento.dto.ts  
    New-Item -ItemType File -Force src\schemas\departamento.schema.ts  


## 4) Secuencia didáctica recomendada

    1. Schemas
       - departamento.schema.ts
               validación de tipos y reglas de negocio
               decoradores de mongoose

    2. DTOs
        - create-departamento.dto.ts
        - update-departamento.dto.ts
               validación de tipos y reglas

    3. Services
        - departamentos.service.ts
               CRUD
               Validación de tipos y reglas de negocio
               Manejo de errores
               Inyección de dependencias
               Inyección de modelo mongoose

    4. Controllers
        - health.controller.ts
        - departamentos.controller.ts
               Validación de entrada (DTO)
               Decoradores de rutas y parametros

    5. Modules
        - departamentos.module.ts
               Inyección de dependencias
               Inyección de modelo mongoose

    6. app.module.ts
        - ConfigModule
        - MongooseModule con MONGODB_URI
        - importación de módulos
        - Configuración de variables de entorno
        - Registrar HealthController

    7. main.ts
        - Configuración de puerto
        - Configuración de validación global (ValidationPipe)
        - Configuración de CORS
        - Configuración de prefijo global de rutas api/v1
        - Configuración de variables de entorno

## 5) 🚀 Comandos para ejecutar la API

    Definida en package.json  
para instalar dependencias

```bash
npm install
```

para desarrollo

```bash
npm run dev
# REST API en http://localhost:3000
```

para producción

```bash
npm run build
npm start
```

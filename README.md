# 🚀 Proyecto Final - API NestJS con MongoDB

Proyecto colaborativo desarrollado para la materia de **Bases de Datos Avanzadas** (Universidad Politécnica de Aguascalientes).

API RESTful construida con **NestJS** y **MongoDB (Mongoose)**, versionada bajo el prefijo `/api/v1`.

---

## 🗄️ 1. Base de Datos (MongoDB)

### 📊 Diagrama del Modelo
El modelo de datos contempla las entidades **`pcs`**, **`empleados`** y **`departamentos`**.

* **Diagrama visual:** Se encuentra en la raíz del proyecto como `Modelo_Relacional.png`.

```text
  [ pcs ] 0..1  <----->  1 [ empleados ] N  <----->  1 [ departamentos ]
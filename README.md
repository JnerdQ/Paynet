# 💳 Paynet - Sistema de Liquidación de Pines

Sistema web para la gestión y liquidación de pines de vehículos.

## 📋 Prerrequisitos

- **Node.js** (versión 18.0 o superior)
- **npm** (versión 8.0 o superior)

## 🚀 Comandos para ejecutar

```bash
# 1. Clonar el repositorio
git clone https://github.com/JnerdQ/Paynet.git
cd paynet

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev
```

El proyecto estará disponible en: `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```text
paynet/
├── public/              # Archivos estáticos
│   ├── logo.png
│   ├── payment.png
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── payment.svg
│   ├── components/      # Componentes React
│   │   ├── Form.jsx
│   │   ├── GeneralForm.tsx
│   │   ├── LiquidacionForm.jsx
│   │   ├── MetodoPago.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

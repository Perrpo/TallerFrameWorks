# Gif Expert App

Este proyecto de React permite a los usuarios buscar y mostrar gifs utilizando la API de Giphy. Los usuarios pueden ingresar categorías para obtener una lista de gifs relacionadas con cada búsqueda. A continuación, se describen los pasos para configurar el proyecto, obtener una API Key de Giphy, y cómo ejecutar la aplicación localmente.

## Requisitos

- Node.js (v14 o superior)
- npm o yarn

## Paso 1: Crear una API Key en Giphy

Para poder usar la API de Giphy en este proyecto, es necesario obtener una API Key. Sigue los pasos a continuación:

1. Visita el sitio web oficial de Giphy Developers en [https://developers.giphy.com](https://developers.giphy.com).
2. Inicia sesión con tu cuenta o regístrate si no tienes una.
3. Una vez que hayas iniciado sesión, navega a la sección **Create an App**.
4. Crea una nueva aplicación y selecciona "API" como tipo de aplicación.
5. Completa los detalles requeridos para la aplicación.
6. Una vez creada la aplicación, se te proporcionará una **API Key**. Esta clave es necesaria para autenticar las solicitudes a la API de Giphy.

## Paso 2: Configurar las variables de entorno

Este proyecto utiliza variables de entorno para almacenar la API Key de Giphy. Debes crear un archivo `.env.local` en el directorio raíz del proyecto para poder acceder a la clave desde el código.

### Instrucciones:

1. En el directorio raíz del proyecto, encontrarás un archivo llamado `.env.example`. Este archivo contiene un ejemplo de cómo deberían definirse las variables de entorno.
   
2. Copia el archivo `.env.example` y renómbralo como `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

3. Abre el archivo `.env.local` y agrega tu API Key de Giphy en el campo correspondiente:
   ```env
   VITE_GIPHY_KEY=tu_clave_de_api_aqui
   ```

4. Guarda el archivo.

> **Nota:** Nunca compartas tu archivo `.env.local` en repositorios públicos o lo subas a servicios como GitHub. Este archivo contiene información sensible como tu API Key.

## Paso 3: Instalar dependencias

Una vez que hayas configurado la API Key, necesitas instalar las dependencias del proyecto. Ejecuta uno de los siguientes comandos, dependiendo de si usas npm o yarn:

Con npm:
```bash
npm install
```

Con yarn:
```bash
yarn install
```

## Paso 4: Ejecutar el proyecto

Después de haber instalado las dependencias y configurado las variables de entorno, puedes ejecutar el proyecto localmente con:

Con npm:
```bash
npm run dev
```

Con yarn:
```bash
yarn dev
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en tu navegador en [http://localhost:5173](http://localhost:5173).

## Estructura del proyecto

- **src/components**: Contiene los componentes principales de la aplicación, como `AddCategory` y `GridGif`.
- **src/App.jsx**: Componente principal que gestiona la lógica y el renderizado de la aplicación.
- **public**: Contiene el archivo `index.html` y otros recursos estáticos.

## Notas

- Esta aplicación utiliza [Vite](https://vitejs.dev/), una herramienta moderna de desarrollo que permite tiempos de compilación rápidos.
- La API Key debe estar configurada correctamente para que la aplicación pueda realizar las búsquedas de gifs. Asegúrate de haber completado correctamente los pasos anteriores.

## Licencia

Este proyecto está bajo la licencia MIT. Siente libre de clonar, modificar y utilizar este código en tus propios proyectos.

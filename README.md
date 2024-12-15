# Instalación de Dependencias

Una vez que tenga el repositorio en su máquina local, sitúese en el directorio raíz del proyecto y ejecute:

```
npm install
```
Esto instalará todas las dependencias listadas en el package.json. Si prefiere yarn, puede utilizar:

```
yarn install
```

## Variables de Entorno
Si su proyecto requiere variables de entorno (por ejemplo, URLs de APIs), defina un archivo .env en la raíz del proyecto. Por ejemplo:

## Levantar el Proyecto en Local

Una vez instaladas las dependencias, puede iniciar el servidor de desarrollo con:

```
npm run dev
```

Este comando levantará un servidor de desarrollo, normalmente accesible en http://localhost:5173 (o el puerto especificado en la consola).

Al realizar cambios en los componentes o en el código, Vite recargará automáticamente la página en el navegador, reflejando los ajustes en tiempo real.

Construir el Proyecto para Producción
Si desea generar el build optimizado para producción, ejecute:


```
npm run build
```

Este comando creará una carpeta dist/ con todos los archivos optimizados, listos para desplegar en un servidor estático.

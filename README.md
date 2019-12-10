This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Public URL

Open [https://sharp-swanson-794fd5.netlify.com/](https://sharp-swanson-794fd5.netlify.com/) to view it in the browser.

### Guide in local

Download repository into a folder, run the next command.

## `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Solución de prueba técnica.

## a. ¿Cómo construyó la solución de la prueba?

R:/ Se desarrolla una aplicación con React JS.

• Primero, se guarda dentro de un state global un objeto con propiedades predefinidos.

this.state = {
comic: {},
loading: false,
error: null,
rating: 0,
maxRating: 5
};

Comic: guarda la respuesta de la petición al api.
Loading: una bandera para decirle a la aplicación si debe o no mostrar una pantalla de cargando en la app.
Error: la respuesta del api en caso de recibir un error.
Rating: como la votación del comic.
MaxRating: como la votación máxima o número de estrella máximas.

• Segundo, se hace el llamado al api y se envía como parámetro a la URL un número random entre 1 y 100.
https://xkcd.com/${random}/info.0.json

• Tercero, se guarda la respuesta y siguiente se muestra un título, una imagen y estrellas para calificar el comic.

• Cuarto, cuando se da clic a una estrella para calificar el comic. Cuando se da clic se muestra un modal con SweetAlert2 para mostrar el número de estrellas votadas.

## b. ¿Cuáles fueron los principales problemas con los que se encontró?

R:/ Solo tuve el problema del llamado a la API por parte del navegador que bloqueaba por CORS mi petición HTTP y me regresaba un 405 de no permitido.

## c. ¿Cómo solucionó los problemas encontrados?

R:/ Use Mocks, descargando la respuesta del api y guarandola en un archivo.json en mi proyecto. Otra solución fue usar mozilla Firefox y agregar un complemento al navegador “CORS Everywhere”, activándolo me permite hacer peticiones alterando los la respueta HTTP para evadir la restricción de CORS que presentaba.

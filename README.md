# XMA Vending Machine🚰

Máquina de Vending de bebidas en JS + React

## ¡La máquina está on-line !

[https://xmorato.github.io/xmavending](https://xmorato.github.io/xmavending)

## Estructura del código ⚙️

He usado **Redux** como patrón de arquitectura de datos para manipular el estado de forma predecible. Por ello he organizado el proyecto con la siguiente estructura de carpetas:

En la carpeta **/public** está el favicon.

Bajo  **/src** está **App.js**, que es el componente principal, formado por el **Provider** que "wrappea" los demás componentes que forman el proyecto para que tengan acceso al estado.

En **/src/config.js** la configuración de la máquina (más detallado al final del documento.)

En **/src/components**: encontramos los componentes que forman el proyecto, en subcarpetas en función de su cometido:

 - **/coins** - **CoinPanel** es el componente que gestiona las monedas, utilizado tanto para el cliente como para el proveedor

 - **/display** - **DisplayPanel** es el componente que se utiliza en todo momento para comunicarse con el cliente / proveedor como resultado de cualquier acción: La pantalla de la máquina

 - **/products** - son los componentes que forman todo el cuerpo de los productos de la máquina: cabecera, tabla y botones que en función del usuario cliente/proveedor se mostrarán de una u otra manera y tendrán una función específica. Son **ProductHeader**,**ProductList**,**ProductRow**, **ProductActionButton**. También encontraemos puntualmente algún fichero de estilos relativo al componente, aunque al utililizar material-ui en todo el proyecto siempre se ha pasado como atributos del componente lo necesario para mínimamente estilarlo.

- **RoleSwitch** - componenete que nos permite pasar del modo cliente al modo Proveedor y viceversa. En modo cliente el usuario puede insertar monedas, pedir devolución (si es el caso), comprar (si hay estoc). En modo Proveedor, y con la misma UI el proveedor puede: incrementar/decrementar estoc, incrementar monedas para que la máquina pueda devolver cambio (utilizando el mismo componenete que usa el cliente para introducir monedas para compra)

En la carpeta **/Redux**

- **/actions:** acciones organizadas por carpetas para mantener el estado
- **/reducers:** funciones que reciben el estado y la acción a realizar sobre el estado devolviendo el nuevo actualizado

Bajo estas carpetas /actions /reducers están organizdos en subcarpetas en función de su cometido: **/coins** **/display** **/products** **/role**

En la carpeta **/utils** funciones de apoyo en Javascript básicamente para el cáculo de los cambios que ha de retornar la máquina

En la carpeta **/tests** tests unitarios.


## ¿Qué he utilizado?  🛠️
Javascript y React y me he apoyado en:

- **create-react-app** como boilerplate ya que incluye todo lo mínimo para empezar (webpack, css, testing ...)

- **Redux** como patrón de arquitectura de datos, para manipular el estado único de la aplicación mediante el flujo de acciones/reducers. Redux-logger como middleware para ver los cambios de estado en la Store.
- **Material UI** directamente para componentes que además tienen estilos como props, además algún componente tiene su propio estilo como fichero en su carpeta.

- **Jest y Enzyme** para el apartado de testing


## ¡ Arrancar el proyecto ! 🚀

Requerimientos mínimos:
    **Versión de Node >=  10.15.2**

```
git clone https://github.com/xmorato/xmavending.git
npm install
npm start
```
Se levanta un servidor en localhost:3000 que directamente abre la aplicación


## ¿ Cómo ejecutar los test ? 🔩

```
npm run test
```

## Consideraciones y explicaciones 📋

- La máquina **es configurable**:  el **tipo de monedas** con las que trabajará, así como el **símbolo de moneda** y el **tipo/precio/cantidad** de bebidas que servirá. Todo ello sse configura mediante el fichero **/src/config.js**. Está configurda para que trabaje en €, con monedas de 0.05, 0.10, 0.50. 1 y 2 €. También está configurada una lista de bebidas, con su precio y estoc. 

- Presupongo que al instalar la máquina **no tiene cambio**, así que habrá que insertar monedas mediante el modo provider y utilizar el componente "CoinPanel" creado para ello: así no hay posible error de conteo y la máquina queda perfectamente informada de todo el depósito entrado

- La máquina **devuelve cambio** cuando la combinación de monedas que tiene guardadas lo permite, siempre teniendo presente que lo hará de mayor moneda disponible a menor. Si **no hay combinación de monedas** para devolver el cambio, se informa al cliente antes de dar la compra por efectuada, es por eso que no existe error ya que el usuario puede recuperar su dinero.


- He intentado que los **mismos componentes** se puedan aprovechar, por ejemplo, el componente **CoinPanel** sirve para ingresar monedas ya estés en rol de usuario como provider.

- He **intentado minimizar los mensajes que se envían al display que podía mostrar directamente con los componentes** como por ejemplo cambiar el literal "BUY" por "OUT OF STOCK" cuando la máquina se queda sin producto y desahabilitando dicho botón, imposibilitando que el usuario entre en una situación de error. Otro ejemplo sería, en Modo Provider ON, donde el proveedor pueda añadir y quitar producto, pero nunca dejar la máquina en negativo de algún producto (el botón "-" se deshabilita cuando el stock es 0).

- Aconsejo abrir la consola de desarrollo del navegador para ver los mensajes que el middleware "logger" de Redux muestra con cada cambio de estado.


### Autor

_Xavi Morató Albertí - Octubre 2020_

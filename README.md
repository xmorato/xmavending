# XMA Vending Machine🚰

Máquina de Vending de bebidas en JS + React

## Pruébalo ONLINE !

[https://xmorato.github.io/xmavending](https://xmorato.github.io/xmavending)

## Estructura del código ⚙️

He usado **Redux** como patrón de arquitectura de datos para manipular el estado de forma predecible. Por ello he organizado el proyecto con la siguiente estructura de carpetas:

En la carpeta **/public** está el favicon.

Bajo  **/src** está **App.js**, que es el componente principal, formado por el **Provider** que "wrappea" los demás componentes que forman el proyecto para que tengan acceso al estado.

En **/src/config.js** la configuración de la máquina (ver apartado [consideraciones](#consideraciones-y-explicaciones))

En **/src/components**: encontramos los componentes que forman el proyecto, en subcarpetas en función de su cometido:

 **/coins** - **CoinPanel** es el componente que gestiona las monedas, utilizado tanto para el cliente como para el proveedor

 **/display** - **DisplayPanel** es el componente que se utiliza en todo momento para comunicarse con el cliente / proveedor como resultado de cualquier acción: La pantalla de la máquina

 **/products** - son los componentes que forman todo el cuerpo de los productos de la máquina: cabecera, tabla y botones que en función del usuario cliente/proveedor se mostrarán de una u otra manera y tendrán una función específica. Son **ProductHeader**,**ProductList**,**ProductRow**, **ProductActionButton**. También encontraemos puntualmente algún fichero de estilos relativo al componente, aunque al utililizar material-ui en todo el proyecto siempre se ha pasado como atributos del componente lo necesario para mínimamente estilarlo.

**/utils** funciones de apoyo en Javascript básicamente para el cáculo de los cambios que ha de retornar la máquina

**RoleSwitch** - componenete que nos permite pasar del modo cliente al modo Proveedor y viceversa. En modo cliente el usuario puede insertar monedas, pedir devolución (si es el caso), comprar (si hay estoc). En modo Proveedor, y con la misma UI el proveedor puede: incrementar/decrementar estoc, incrementar monedas para que la máquina pueda devolver cambio (utilizando el mismo componenete que usa el cliente para introducir monedas para compra)

En la carpeta **/Redux**

- **/actions:** acciones organizadas por carpetas para mantener el estado
- **/reducers:** funciones que reciben el estado y la acción a realizar sobre el estado devolviendo el nuevo actualizado

Bajo estas carpetas /actions /reducers están organizdos en subcarpetas en función de su cometido: **/coins** **/display** **/products** **/role**


## ¿Qué he utilizado?  🛠️
Javascript y React y me he apoyado en:

- **create-react-app** como boilerplate ya que incluye todo lo mínimo para empezar (webpack, css, testing ...)

- **Redux** como patrón de arquitectura de datos, para manipular el estado único de la aplicación mediante el flujo de acciones/reducers. Redux-logger como middleware para ver los cambios de estado en la Store.
- **Material UI** directamente para componentes que además tienen estilos como props, además algún componente tiene su propio estilo como fichero en su carpeta.

- **Jest y Enzyme** para el apartado de testing


## ¡ Arrancar el proyecto ! 🚀

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

- La máquina **es configurable**:  el **tipo de monedas** con las que trabajará, así como el **símbolo de monenda** y el **tipo/precio/cantidad** de bebidas que servirá. Todo ello se puede configurar mediante el fichero **/src/config.js** De entrada se propone que trabaje en € y con monedas de 0.05, 0.10, 0.50. 1 y 2 €. También una lista de bebidas, con su precio y estoc.

- Presupongo que la máquina cuando hay que **ponerla en marcha no tiene cambio**, así que habrá que insertar monedas mediante el modo provider y utilizar el componente creado para ello: así no hay posible error de conteo y la máquina queda perfectamente informada de todo el depósito entrado

- Aconsejo abrir la consola de desarrollo del navegador para ver los mensajes que el middleware "logger" muestra con cada cambio de estado.

- He intentado que los mismos componentes se puedan aprovechar, por ejemplo, el componente CoinPanel sirve para ingresar monedas ya seas usuario o provider.

- He **intentado minimizar los mensajes que se envían al display que podía mostrar directamente con los componentes** como por ejemplo cambiar el literal "BUY" por "OUT OF STOCK" cuando la máquina se queda sin producto, y desahabilitando el botón, imposibilitando que el usuario entre en una situación de error. Otro ejemplo sería, en Modo Provider ON, que el proveedor pueda añadir producto, pero nunca dejar la máquina en negativo de producto.

- La máquina **devuelve cambio** cuando la combinación de monedas que tiene guardadas de lo permite, siempre teniendo presente que lo hará de mayor moneda disponible a menor.



### Autor

_Xavi Morató Albertí (XMA)- Octubre 2020_

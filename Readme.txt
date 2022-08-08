Transpiladores:
Traducen una sintaxis a otra.

babeljs.io
babeljs.io/repl

inicializar: crear un archivo llamado package.json
npm init --yes

init: inicializa
--yes : para que me ponga los valores por defecto

npm run test : corre el test que haya en package.json

principal proposito de package.json:
registrar dependencias de nuestro proyecto, asi cuando otro usuario se baje el código, corre npm install y se baja todas las dependencias que necesita

instalacion de dos dependencias de babel:
npm i --save-dev @babel/core @babel/cli

el ^ en las dependencias, lo que hace es no fijar la version a instalar
ej: ^7.13.16 --> npm install busca la ultima version del 7

Curso React

Clase 1:

con npm init --yes se inicializa un proyecto (crea el package.json)

el --yes te pone los valores por defecto 

babel no hace nada por si mismo, si no le decimos que hacer. 

-> se instala un preset (conjunto de pasos)
npm i @babel/preset-env --save-dev

.babelrc = archivo de configuración de babel (un json)

El index.js que esta dentro de lib es el archivo generado para que se aloje en el servidor

npm i @babel/preset-react --save-dev

Bundler

se encarga de empaquetar el codigo en pocos archivos

el mas conocido es webpack

Se especifica un archivo de entrada. Webpack lee todos los required o import que tiene y arma todo cual si fuere un arbol con todas las dependencias 
Desp arma un solo archivo con todo eso. 

Puede generar un .js, .css, .jpg, o .png

podemos enseñarle a que entienda otros formatos de archivo (por ej, css)

se les puede asignar plugins al webpack

Instalar webpack

npm i webpack --save-dev

npm i webpack-cli --save-dev

npm i webpack-dev-server -D

-D == --save-dev

webpack.config.js:

entry: punto de entrada donde webpack va a empezar a leer todos 
los archivos js que tiene nuestro proyecto.

output: objeto que recibe el path (a donde va a ser la carpeta donde dejara el archivo generado)

Hay 2 maneras de crear un proyecto en React

1.
Creo la carpeta (react-vanilla)
inicializo el proyecto
instalo las dependencias
npm i --save-dev webpack webpack-cli 
npm i webpack-dev-server --save-dev 
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev 
npm i html-webpack-plugin --save-dev  (a partir de un html, usarlo para generarlo y ponerlo en el dist)
npm i style-loader css-loader --save-dev 
npm i --save-dev react react-dom

creamos webpack.config.js

2. 
npx create-react-app <nombre de la app>

###################################################################################################

Clase 2:

En el index.css van los estilos generales, no los particulares de cada componente. Cada componente tiene que
tener su propio css

Oranizacion:
 - una carpeta con todos los componentes
 - usar layout --> marco general de nuestra pagina. Nos va a permitir que escale un poco mas la app


rafc --> extension de VSCode que te genera el esqueleto del componente

como regla general, todo componente debe estar englobado por una etiqueta (ej div), excepto que se devuelva una lista de componentes.

Fragment se usa cuando queremos mostrar un componente pero no queremos englobarlo con otro y no queremos generar
HTML de mas

        <Fragment>
            Container
        </Fragment>

pero las versiones nuevas de React, sacaron el Fragment, dejando una etiqueta vacia, por lo que nos da la posibilidad
de no importar Fragment

        <>
            Container
        </>

Se debe pensar la carpeta de Components como los componentes que son mas reutilizables en nuestra aplicacion.

Que no van a ser utilizados una sola vez, sino que van a ser utilizados mas de una vez.

Props y State

son dos caracteristicas principales que tienen los componentes en react

Tiene semejanza con HTML vanilla

Props: son los atributos y propiedades de un componente.

PROPS

son los atributos o propiedad de un componente

equivalente a las etiquetas en HTML (ej, img)

Son de solo lectura --> dentro del propio componente. El componente no puede modificar las Props
La unica forma en que se vea reflejado un cambio a traves de una props en la vista del componente 
es si el componente padre modifico esa prop. --> son de solo lectura dentro del propio componente. El componente no puede en si mismo, modificar las props.
Solo puede modificarlas el componente padre. O sea quien lo utiliza.
 
Permite la reutilizaciòn del componente --> ya sea dentro del propio 
proyecto o hacia afuera. 

Por convenciòn se escriben en camelCase. --> primer caracter en min y 
las siguientes palabras concatenadas : unEjemploEsEsto

Agrupar todo en carpetas 

Atajo del esqueleto en react: rafc

Puedo estructurar el props 

en lugar de usar props uso directamente el objeto:
                props => {objeto}

Hacer esto:
BookCard = ({book})

es lo mismo que hacer esto:
const book = props.book

o 

const {book, title} = props --> entre {} van todas las propiedades del objeto

map: permite iterar todos los elementos de una lista y transformarlo
    a otro elemento de otro tipo

Error comun:

Warning: Each child in a list should have a unique "key" prop. 
--> pide una key. Cuando se renderiza un componente, Reacct sabe identificarlo univocamente
pero cuando se crean dinamicamente a traves de una lista, pide
una props que se llama key (ya esta definida. 
Ayuda al momento de identificar problemas 

Repasando...

Si dentro de la vista que devolvemos necesitamos meter una
expresión de JS, tenemos que usar las llaves.

que el key no sea un autogenerado porque podria afectar la performance
tiene que estar vinculado a la entidad que se esta renderizando 

State:

Contiene toda la información relacionada al estado del componente

--> Puede mutar / cambiar --> setState( newDtate )
--> Accesible solo desde el componente 
    --> un componente padre no puede acceder a un componente hijo desde afuera. 
    --> el unico que puede cambiar el estado, es el mismo componente
--> Su actualización es reflejada donde se utilice

Modos de setState

IMPORTANTE: setState es asincrónico 

Si llamo al setState, no puedo asumir que al toque se actualiza.

React acumula llamadas del setState. Intervalos cortos de tiempo pero que ayudan a la performance.

--> setState( newState )
    --> te paso un objeto con las propiedades que quiero cambiar 
    --> no hace falta pasarle todas las propiedades. 
¿qué es el State en un componente? --> un objeto de JS donde se definen las propiedades que va a tener (y cambia con el tiempo)

--> setState( newState, callback )
    --> recibe un parametro extra opcional: callback. 
    --> cuando el setState se ejecute, finaliza y luego llama al callback

Si tenemos una lógica en la cual necesitamos que el 
estado ya este actualizado con este setState, podemos poner esa lógica en el callback

--> setState( (state, props) => newState )
    --> en lugar de pasarle un objeto, se le pasa una función.
    --> React ejecuta dicha funcion y nos pasa el state y las props que hay en ese momento y tenemos que devolver cual sera el nuevo estado (basado en estas dos). 
    --> las props son opcionales 
    --> muy util cuando nuestro nuevo estado esta muy vinculado a que el estado esté actualizado y a las props que hay en ese momento.  

--> setState( (state, props) => newState, callback ) 
    --> Combinación de las dos anteriores. 
    --> Le paso una función para que react sepa como crear el nuevo estado y despues como segundo parametro le paso el callback

State component  

--> su creación es a partir de clases (cercano al OOP)

import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
    render(){
        const {greeting, firstName} = this.props;
        return (
            <div>
                {greeting} {firstName}
            </div>
        )
    }
}

export default Hello;

Stateless component 

--> solo se basan en las props 
--> es para mostrar información

import React from 'react';
import PropTypes from 'prop-types';

class Hello ({greeting, firstName}) {
    return (
        <div>
            {greeting} {firstName}
        </div>
    )
}

export default Hello;


Booklist sera quien tenga estado dentro del proyecto
    --> sera quien renderize todos los objetos de libros y es quien tiene mas control con respecto a los libros

Render: metodo obligatorio que renderiza la vista

Hay dos maneras de inicializar un estado:
1. definir la propiedad de la clase state
    state = { definicion del objeto }
    state = {filterValue: ''}

2. a traves del constructor (propio de las clases en JS)
    constructor (props) {
        super (props) --> llama al constructor padre (component) y pasarle las props    
        this.state = {filterValue: ''}
    } 

Two way data binding: se define un campo de nuestro componente en donde el frameor se encarga de la conexion entre el usuario y el componente
En React no existe. Solo existe el One way data binding (bindeo de un solo sentido)
Componente - Usuario: OK
Usuario - Componente: debemos especificar nosotros los eventos de cambio

Uplifting:

Consiste en compartir / subir el estado de un componente hijo a su padre

--> Cuando queremos compartir información con el componente padre 
--> No es mas que en las props recibir una función

cuando queremos notificar alguna paticularidad de nuestro comportamiento al componente
padre, ejecutamos esa funcion

ej: lo que estamos haciendo con el input

Lifecycle:

las llamadas ajax no se pueden realizar en cualquier lado

3 fases:
1) Mounting (montado)
    tenemos el constructor como primer metodo que se llama en la creacion de un objeto (parte de las clases de JS)
    getDerivedStateFromProps --> obtener el estado en base a las props. Metodo estático (no tenemos acceso al setState ni propiedades ni instancia del objeto), opcional. 
                                Es cuando el nuevo estado depende mucho de las props y en estado que tiene en ese momento para generar un nuevo estado. Puede recibir null
    render
    componentDidMount: se ejecuta una sola vez cuando se termino de desmontar por primera vez el componente. Aca se pueden hacer llamadas asincronicas tranquilamente
        
2) Updating (actualización)
    se ejecuta cuando hay nuevas props (o alguna de ellas cambiaron), cuando se ejecuta un setState, o cuando ejecutamos el forceUpdate ( como el setState pero es para forzar un render )
    getDerivedStateFromProps tambien se ejecuta
    shouldComponentUpdate: muy importante. Nos da la posibilidad de decirle a react si tal o cual componente se debe actualizar en base a los datos que tengo ahora. 
                            devuelve true o false. Si devuelve true quiere decir que el render tiene que ser ejecutado, si deolvemos false entonces el render no es necesario. 
    render
    si se ejecuto el render, entonces luego se va a ejecutar otro metodo:
    getSnapshotBeforeUpdate: muy raro de utilizar. Opcion: cuando hay un infinite scroll que necesitamos saber cuantos elementos se van a mostrar (resultado del render) y necesito acomodar el DOM de alguna manera para que el usuario pueda seguir scrolleando en el DOM real. 
                            Necesito hacer un calculo antes de que se aplique en el DOM real, entre lo que hay ahora alli y lo que termino como resultado en el render.
                            el resultado (numero u objeto): viene como un tercer parametro del metodo componentDidUpdate. Ahi podemos utilizar ese resultado para actualizar el DOM de alguna manera a nivel visual. 
    aplicar todos los cambios al DOM real 
    componentDidUpdate donde podemos aplicar llamadas asincronicas si queremos 

3) Unmounting (desmontado)
    es cuando el componente ya va a desaparecer. 
    ejecuta un solo metodo --> componentWillUnmount
    se puede hacer llamadas sincronicas para por ej, liberar recursos. 

Component vs Pure component

la diferencia radica puntualmente en el metodo shouldComponentUpdate.

en el component esta definido con que siempre devuelva true con lo cual, ante cualquier cambio, ejecute el render

el pure component hace una comparacion superficial sobre los cambios (tipo shallow). 
                    agarra el objeto de props y el objeto de state con los nuevos y los compara en un primer nivel (no en profundidad).
                    si todas las props son strings o numeros, nos garantiza de que si realmente cambio el contenido, entonces ahi si ejecuto un render. 
                    si son objetos hace comparacion por referencias. Si en el objeto cambio una de sus props, para el pure component va a ser indistinto ya que la referencia no cambio, sino que sigue siendo el mismo. 
                     --> aconsejable no mutar el objeto sino, basarse en copias. Uno clona el objeto (genera una referencia nueva del mismo) y ahi pure component dice "ok, esto cambio. Al menos la referencia"

Styling - CSS Stylesheet

import React from 'react';
import './DottedBox.css';

const DottedBox = () => (
    <div className="DottedBox">
        <p className="DottedBox_content"> Get started with CSS styling </p> 
    </div>
);

export default DottedBox;

archivo css:

.DottedBox {
    margin: 40px;
    border: 5px dotted pink;
}

.DottedBox_content {
    font-size: 15px;
    text-align: center; 
}

Styling - inline style

// inline styles
const styles = {
    title: {
        color: 'red',
        fontSize: '30px'
    }
}

problemas de colisiones: cuando tenemos dos componentes que utilizan la misma clase 
pero ambos tienen una definicion distinta para ella. 

como se evita? 
 - fijarme si la clase que yo quiero usar no esta justo siendo utilizada por otro componente. 
 - usar css module que renombra el nombre de clases. concatena un hash que estan basados en el codigo o los estilos. Si cambian los estilos, cambia ese hash. Cada hash que genera, es muy poco probable que colisione con otro. 
 

usar CSS module --> mas sencillo --> renombra el nombre de clases. Le concatena un hash que estan basados en el codigo
o estilos entonces, si cambian los estilos cambia el hash.

Material UI

npm install @mui/material @emotion/react @emotion/styled

Styling - CSS module

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Grillas: permiten hacer una aplicacion mas responsive, que se adapte bien al ancho.

#########################################################################################################################################################################################################

Clase 3:

React Router

Nos brinda componentes y metodos para crear navegaciones del tipo SPA.

Forma tradicional:

Desde el cliente hacemos un request al servidor.
El servidor devuelve un HTMl de la direccion que nosotros accediamos, se traduce como una direccion IP y esa dir le
apunta a un servidor
El cliente lee ese HTML, se fija que tenga otro tipo de recursos que necesita, y carga la pagina. Envia un formulario.
Cuando se encia un form, el server devuelve la proxima vista a mostrar. Recarga la pagina

SPA Lifecycle: Single Page Application

1. Desde el cliente hacemos un request al servidor.
2. El server devuelve un HTML
3. El cliente hace una llamada AJAX (asincrónica)
4. El server devuelve un JSON

queremos compartir el estado con otros por lo que hay que usar rutas.

¿porque usar rutas? --> porque nos ayuda a indexar nuestra pagina
                    --> porque queremos compartir (ej. tweet)

Componentes:
- BrowserRouter --> usa el api de history de HTML5
- Link
- NavLink
- Route
- Switch
- HashRouter
- Redirect

Instalamos los componentes:  npm i react-router react-router-dom

https://caniuse.com/ --> podemos buscar cuales son las funcionalidades y su compatibilidad respecto a los navegadores

diferencia entre hashrouter y browserouter

el comportamiento por default del browser cuando se ponia el # antes, se conoce como fragment que en realidad es ir a un elemento que tenga ese id. El browser lo que hace es un scroll a ese elemento.
Esto no va a al server, entonces uno lo puede usar par anavegar y se veian la url asi: google.com/#/miRuta entonces asi hacia el manejo de rutas porque no iba al server a buscar una vista. Escuchaba los cambios a prtr del #

asi se hacia antes, quedaba feo. Ahora se hace de otra manera

El render evita el desmontado. Renderiza cuando matchea

Children renderiza siempre

El element le precede al render y el children le precede al component y al render.
    -->  si definimos los tres, el component le gana a los otros dos.

Para evitarnos todo un lio, usar una de las props en todas las definiciones de rutas (siempre children, element o render)

Redireccionar --> Navigate to='a donde'

Crear links:

- Link
- Nav

-----------------------------------------------------------------------------------------------------------------------

Redux

Public / subscriber: patron de diseño --> soluciones genericas para problemas ya conocidos.

La idea es basarse en topicos.
Que son topicos? temas. Cosas a los que uno se puede suscribir. (Ej diario: futbol, entretenimiento, politica, etc...)

cuestion mas tecnica: tipo de mensaje.

los publisher son los encargados de notificar ante cambios de ciertos tipicos.
Subscriber es la app misma que se suscribe a esos topicos porque quiere recibir notificaciones de ese topico en particular
intermediario: es el publisher susbscriber o broker. conoce a ambos (los publishers y subscripciones)

el broker puede estar en otro servidor y nosotros subscribirnos a el de forma online.

Permite un bajo acoplamiento. Hace mas escalable la app.

los mensajes pueden ser asincronicos. no estan direccionados a un subscriben en particular.

se manejan los datos como si fuera strings

Observer:

tenemos un subject que tiene todos los observers (los conoce)

subject --> [observers]

los mensajes son sincronicos gralmente y direccionados

Tiene mucho mas acoplamiento


string de datos (reproductor de video):
Tenemos much info que va llegando.
Le asociamos un metodo, entonces cuando info1 llegue se llama al metodo, este hace lo que sea con la info y asi
mientras llegue info.

Redux es el un contenedor predecible del estado para aplicaciones JavaScript

un unico estado para toda la app: toda la aplicacion va a poder acceder y escuchar los cambios

action --> reducer --> store
  ^                      ^
  |                      |
  |--------- UI <--------|

UI es una conexion para cerrar el circuito con los actores que involucran Redux

action: QUE es lo queuqiero que cambie del store. se dispara un action y es porque yo quiero que cambie algo

en react que representa el QUE? un objeto! lo unico que tiene que tener como obligatorio es el type.

el type es el tipo de accion que yo quiero ejecutar.
va todo en mayuscula y se separa con "_" --> HOLA_MUNDO

text: tiene la info relacionada a un objeto
{
    type: ADD_TASK,
    text: "Agrega una task"
}

Action creator: una funcion que crea el action. Esto es porque si no existiera la funcion, tendria que crear el objeto en
cada una de las partes de mi aplicación.

El problema esta en cuanto quiero agregarle una propiedad nueva. Se concentra todo y ahi se agrega la funcionalidad

function addTodo(text){
    return {
        type: "ADD_TODO",
        text: "blabla"
    }
}

Reducers: COMO debe cambiar el store.

https://redux.js.org/basics/reducers

La accion fue lanzada, alguien se tiene que encargar de saber como tiene que cambiar esa accion el store, o el estado que lo contiene

function todoApp (state = initialState, action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        default:
            return state
    }
}

Pure functions

Tiene 2 caracteristicas fundamentales:

- ante una misma entrada, tiene que tener una misma salida. Si llamo a la  misma funcion n veces, con los mismos
 parametros, n veces tiene que devolver lo mismo

- no debe tener efectos colaterales. Si yo llamo a esa funcion no tiene que hacer de fondo una llamada asincronica, o acceso a disco
Si yo llamo a la función, y le paso un objeto por parametro, yo espero que ese objeto sea el mismo digamos en sus
propiedades cuando termina la ejecucion del metodo.

si queremos cambiar o mutar el estado tiene que ser a traves de una copia

Store

UNE los reducers, los actions y el state

- getState()
- dispatch(action)
- subscribe(listener)


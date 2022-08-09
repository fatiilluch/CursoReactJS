// import { GET_BOOKS_URL } from "./constants"

// export const getBookList = () => {
//     return fetch(GET_BOOKS_URL, {
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     .then((response) => {
//         return response.json()
//     })
// }

// primer parametro: URL del fetch, segundo parametro: configuracion de esa llamda, las opciones --> headers: tengo que pasarle el tipo de dato que vamos a manejar. Otro parametro que hay que especificar es el method (get, post, blabla)
// el fetch devuelve una promesa con un objeto response. Forma nativa de realizar le proceso asincronico en js. 
// Tienen dos posibles resultados: Success o Fail. 
// Sucess se maneja con el then() donde se le especifica un callback (una funcion). En este caso, como el fetch responde a una promesa con una respuesta, en 
// ese callback o esa funcion vamos a recibir el response (la respuesta). En esta respuesta se pueden chequear varias cosas, como por ejemplo el response.status (status_code)
// esta response tiene los libros en otro formato distinto de json, por lo cual hay que jsonificarlo (?) --> Esto devuelve otro json (las promesas se pueden encadenar)
// en el segundo then (si lo hubiese) si vamos a tener los libros en formato json.
// como manejamos un Fail? con un catch. then(bla bla).catch() 
// Esto se lo dejamos a quien lo llame, para que lo maneje. 


// una alternativa a fetch es usar axios pero va hacer mas pesado el codigo y hay menos soporte
export const getBookList = () => [
    {
        id: '1',
        isbn: '1234',
        title: 'Everybody loves nina',
        description: 'Loren ipsum',
        author: 'Fatima',
        cover: 'https://static-media.hotmart.com/NczYmCwvNW7oSYmPW3Le2pz4RL0=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_contents/dd226ada-8df7-439e-8d61-d3f688b9ab49/libros2_2118499843.jpg?w=920',
        categories: ['romance', 'drama'],
        stock: 9,
        price: 100
    },
    {
        id: '2',
        isbn: '5678',
        title: 'Everybody loves rose',
        description: 'Loren ipsum dolor',
        author: 'Lluch',
        cover: 'https://img.freepik.com/foto-gratis/abierto-volando-libros-antiguos_1232-2096.jpg?w=2000',
        categories: ['romance', 'horror'],
        stock: 10,
        price: 120
    },
    {
        id: '3',
        isbn: '7852',
        title: 'I hate mondays',
        description: 'ayayayayay',
        author: 'unknown',
        cover: 'http://www.cuentoscortos.com/imagenes/2398.jpg',
        categories: ['horror'],
        stock: 5,
        price: 20
    },
]


import React, {PureComponent} from "react";
import {BookCard} from "../../components/BookCard/BookCard";
import {getBookList} from "../../api/books"
import {Badge, Grid, TextField} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import './bookList.css'

// export const BookList = () => {
export class BookList extends PureComponent {
    state = {
        // books: [],
        filteredBooks: [],
        filterValue: '',
        cartItems: []
    }

    onFilterChange = (event) => {
        console.log(event.target.value)
        const currentValue = event.target.value;
        const {books} = this.props;

        // esto devuelve los libros filtrados
        const filteredBooks = books.filter(book => book.title.toLowerCase().startsWith(currentValue.toLowerCase()));

        // una vez que tenemos el valor, hay que cambiar el estado
        this.setState({
            filterValue: currentValue,
            filteredBooks: filteredBooks
        })
    }

    // constructor(props) {
    //     super(props);
    //     // estoy pisando la funcion changeFilterValue con la misma pero le estoy definiendo el contexto.
    //     this.changeFilterValue = this.changeFilterValue.bind(this);
    //     // this.state = {
    //     //     filterValue: ''
    //     // }
    // }

      componentDidMount() {
        const books = getBookList();
        this.setState({
            books,
            filteredBooks: books
        })
    }

    onCartClick = (book) => {
        console.log("Cart clicked", book)
        const {cartItems} = this.state;
        // el concat agarra el array que tiene de origen y concatena un nuevo elemento pero crea un array nuevo
        this.setState({
            cartItems: cartItems.concat(book)
        })
    }

    render() {
        /*const books = [
            {id: '123', title: 'hola'},
            {id: '456', title: 'hola2'},
            {id: '789', title: 'hola3: infierno'}
        ]*/

        const {filterValue, filteredBooks, cartItems} = this.state;

        // si no hay filtro, mostra todos los libros (viene de las props)
        const booksToList = filterValue ? filteredBooks : this.props.books;

        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField id="standard-basic" label="Filter Books" value={filterValue} onChange={this.onFilterChange}/>
                    {/*<input type='text' value={filterValue} onChange={this.changeFilterValue} />*/}
                    <Badge badgeContent={cartItems.length} color={"secondary"}>
                        <ShoppingCart> </ShoppingCart>
                    </Badge>
                </Grid>
                {
                    booksToList.map((book) => (
                    <Grid key={book.id} item xs={12} md={6} lg={3}>
                        <BookCard key={book.id} book={book} onCartClick={this.onCartClick}> </BookCard>
                    </Grid>))
                }
            </Grid>
        )
    }
}
/*
          <>
                BookList:
                <br />
                <input type='text' value={filterValue} onChange={this.changeFilterValue} />
                {filteredBooks.map(book => <BookCard key={book.id} book={book}/>)}
           </>
* */
/*
    Le paso entre llaves el libro porque espera un objeto

    react-jsx-dev-runtime.development.js:97 Warning: Each child in a list should have a unique "key" prop.
    --> nos pide una props que se llama key. Esto le permite a react identificar el componente de manera univoca y hacer
    un tracking

    Este va a ser el que renderiza los objetos de libros y el que tiene mas control respecto al conjunto de libros en gral
    por lo tanto va a tener comportamiento (por ende va a tener estado) --> ademas de que vamos a querer filtrar

    un componente con estado si o si va a tener un render, porque react necesita mostrar la vista por lo tanto necesita
    ejecutar una logica que obtenga la vista --> render()

    el valor del input va a estar asociado al estado.

    Se puede inicializar la variable state, con un estado inicial. NO SE PUEDE CAMBIAR LUEGO
    otra forma de inicializar es con un constructor
    constructor(props) {
        super(props);
        this.state = {
            filterValue: ''
        }
    }
    pero la mas simple es la primera

    si setState da undefined, quiere decir que no esta bindeado. Le cambiamos el contexto a donde se ejecuta la funcion
    El bind se puede hacer de dos formas:
    1. en el constructor

       constructor(props) {
        super(props);
        // estoy pisando la funcion changeFilterValue con la misma pero le estoy definiendo el contexto.
        this.changeFilterValue = this.changeFilterValue.bind(this);
        // this.state = {
        //     filterValue: ''
        // }
    }

    esta forma trae un inconveniente: me tengo que acordar de escribir la linea del bind en el constructor pr cada fuon que tengo

    2. otra manera mas sensilla es definirlo como un arrow function --> no pierden el contexto

    React no maneja el concepto de :two way data binding lo que hace es meter un objeto escucha de fondo, que escucha cada cierta cantidad de tiempo si
    el objeto que esta escuchando cambio. Y todo esto va a generando caida de performance.
    Entonces por esto es que no se implementa. Dice "implementenlo uds devs, a consciencia".

 */
import {PureComponent} from "react";
import {BookList} from "./BookList";
import {connect} from "react-redux";
import {getBooks, getFailedBooks, getSuccessBooks} from "../../actions/books";
import {getBookList} from "../../api/books";

class _BookListContainer extends PureComponent{

    componentDidMount() {
        this.props.getBooks();

        // getBookList()
        // .then(books => this.props.getSuccessBooks(books))
        // .catch(error => this.props.getFailedBooks(error)) // esto va a hacer un dispatch del action getSuccessBooks

        setTimeout(
            () => this.props.getSuccessBooks(getBookList()),
            5000
        )
    }

    render() {
        return this.props.loading ?
            <div> Loading... </div> :
            <BookList books={this.props.books}/>
    }
}

// cuando el estado del store cambie, esto se pase a las props del componente que nosotros queramos

// connect es una funcion que al ejecutarla devuelve otra función
// el primer parametro es una funcion que se encarga de mapear parte del estado a las props que va a tener el componente
// el segundo parametro es el encargado de la parte de dispatch. Las acciones que puede realizar ese componente.
// devuelve una función que vamos a ejecutar y ahi le vamos a pasar cual es el componente al que le queres aplicar todo
// ese mapeo

// esta funcion la ejecuta react redux y nos va a pasar el estado
// ownProps son las propiedades que vienen cuando se esta utilizando este componente conectado
const mapStateToProps = (state, ownProps) => {
    return {
        books: state.books.list,
        loading: state.books.loading,
        error: state.books.error,
        // test: state.test === 1 ? ownProps.test : state.test --> esta condicionado a que valor tiene el estado
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: () => dispatch(getBooks()),
        getSuccessBooks: (books) => dispatch(getSuccessBooks(books)),
        getFailedBooks: (error) => dispatch(getFailedBooks(error)),
    }
}

export const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(_BookListContainer)
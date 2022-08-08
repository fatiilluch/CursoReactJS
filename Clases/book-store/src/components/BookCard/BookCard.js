import React, {PureComponent} from "react";
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {AddShoppingCart, Favorite} from "@mui/icons-material";
import './bookCard.css'

// export const BookCard = ({book}) => {
// export const BookCard = ({book, onCartClick}) => {
export class BookCard extends PureComponent {
    handleCartClick = (book) => {
        this.props.onCartClick(this.props.book);
    }  // una funcion que devuelve una función

    render() {
        const {book, className} = this.props;
        console.log("BookCard", book.id, book.random)
        return (
            <Card className={`book-card ${className ? className : ''}`}>
                <NavLink to={`/detail/${book.id}`}>
                    <CardHeader
                        avatar = {
                            <Avatar aria-label="recipe" className="book-card-avatar">
                                {book.title[0]}
                            </Avatar>
                        }
                        title = {book.title}
                        subheader={book.author}
                    />
                    <CardMedia className="book-card-image" image={book.cover} title="Paella dish"/>
                </NavLink>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p"> {book.description} </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add-to-favorites">
                        <Favorite/>
                    </IconButton>
                    <IconButton aria-label="share" onClick={this.handleCartClick}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}
/* bookCard no sabe que mostrar en principio, por lo cual necesiatmos que sea configurable.
   que reciba la entidad libro y ahi puedo obtener lo que necesito
   Las props las recibimos a traves de parametros
   por convensión se pone el nombre de la variable "props" pero puede ser cualquier nombre que yo quiera
   Lo que hace React es, cuando cree el componente BookCard, props va a ser la info que le asigno al padre.
   props es un objeto de JS

   Se puede destructurar un objeto (separarlo en las propiedades que necesitamos)
   --> voy a tener acceso a las propiedeades q separe de ese props --> {book, title} = props

   no es un candidato a ser state component, porque es para representar el libro solamente, no tiene logica interna

 */


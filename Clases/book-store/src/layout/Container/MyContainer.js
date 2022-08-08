import React from "react";
import {Container} from "@mui/material"
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {BrowserRouter, Route} from 'react-router-dom'
import {AddBook} from "../../pages/AddBook/AddBook";
import {Routes} from "react-router";
import {NotFound} from "../../pages/NotFound/NotFound";
import {BookDetails} from "../../pages/BookDetails/BookDetails";
import {Provider} from "react-redux";
import {store} from "../../store";

import './container.css'
import {BookListContainer} from "../../pages/BookList/BookContainer";


export const MyContainer = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Container maxWidth={"lg"} className={"content"}>
                    <Routes>
                        <Route exact path="/" element={<BookListContainer/>} />
                        <Route path="/add" element={<AddBook/>}/>
                        <Route path="/detail/:bookId" element={<BookDetails/>}/>
                        <Route path="*" exact element={<NotFound/>}/>
                    </Routes>
                </Container>
                {/*<BookList/>*/}
                <Footer/>
            </BrowserRouter>
        </Provider>
    )
}



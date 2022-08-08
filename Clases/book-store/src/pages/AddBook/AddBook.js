import React, {PureComponent} from "react";
import {Button} from "@mui/material";
import {Navigate} from "react-router-dom";

export class AddBook extends PureComponent{
    state = {
        redirect: false,
    }

    handleAddBook = () => {

        this.setState({
            redirect: true
        })
    }

    render() {
        return this.state.redirect ? <Navigate to="/"/> : (
            <div>
                AddBook
                <Button onClick={this.handleAddBook}> Add Book </Button>
            </div>
        )
    }
}

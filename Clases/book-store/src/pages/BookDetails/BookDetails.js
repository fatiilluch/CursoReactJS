import React from "react";
import {useParams} from "react-router";

export const BookDetails = (props) => {
    const params = useParams()
    console.log('Book Details', params.bookId)
    return (
        <div>
            Book Details
        </div>
    )
}
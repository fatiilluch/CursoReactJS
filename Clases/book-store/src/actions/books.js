const BOOK_ACTION_TYPES = {
    GET_BOOKS: 'GET_BOOKS',
    GET_SUCCESS_BOOKS: 'GET_SUCCESS_BOOKS',
    GET_FAILED_BOOKS: 'GET_FAILED_BOOKS',
}

const getBooks = () => {
    return{
        type: BOOK_ACTION_TYPES.GET_BOOKS
    }
}

const getSuccessBooks = (books) => {
    return{
        type: BOOK_ACTION_TYPES.GET_SUCCESS_BOOKS,
        payload: {
            books
        }
    }
}

const getFailedBooks = (error) => {
    return{
        type: BOOK_ACTION_TYPES.GET_FAILED_BOOKS,
        payload: {
            error
        }
    }
}

// esto lo hago para que este disponible para su uso en la app
export {
    BOOK_ACTION_TYPES,
    getBooks,
    getSuccessBooks,
    getFailedBooks
}


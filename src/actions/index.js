const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payLoad: newBooks
    };
};

export {
    booksLoaded
};
const initialState = {
    books: [
        { id: 1, title: "Хроники Амбера", author: "Роджер Желязны" },
        { id: 2, title: "Числа", author: "Виктор Пелевин" }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;    
    }
};

export default reducer;


// isto é um caixinha
const initialState = {
    name: 'Tiago',
    email: 'Teste@gmail',
};

export default (state = initialState, action) => {
    
    // action vai posibilitar a alteração do state
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload.name };
            break;
        case 'SET_EMAIL':
            return { ...state, email: action.payload.name };
            break;
    }

    return state;
}
// isto é um caixinha
const initialState = {
    tarefasNaoFinalizadas: [],
    tarefasFinalizadas: [],
    tarefasDoCalendario: [],
};

export default (state = initialState, action) => {

    // action vai posibilitar a alteração do state
    switch (action.type) {
        case 'NAO_FINALIZADA':
            return { ...state, tarefasNaoFinalizadas: action.payload.tarefasNaoFinalizadas };
            break;
        case 'ESTA_FINALIZADA':
            return { ...state, tarefasFinalizadas: action.payload.tarefasFinalizadas };
            break;
        case  'TAREFA_CALENDARIO':
            return {...state,tarefasDoCalendario:action.payload.tarefasDoCalendario}
            break;
    }

    return state;
}
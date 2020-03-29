import axios from 'axios';
const url = "https://tarefa-test.herokuapp.com/tarefa/";
//https://tarefa-test.herokuapp.com/tarefa // tiago
// "https://tarefas-test.herokuapp.com/tarefas" robson
const getTarefa = () => {
    return axios.get(url);
}

const cadastrarTarefas = (tarefa) => {
    return axios.post(url, tarefa);
}

const atualizarTarefas = (id,tarefa) => {
    return axios.put(url+id,tarefa);
}

export default {
    getTarefa,
    cadastrarTarefas,
    atualizarTarefas
}

const initialSate = [{
    id:1,
    todo:'Recolectar la piedra alma',
    done:false
}];


const todoRecuder = (state = initialSate, action = {})=>{

    if (action.type === '[TODO] add todo') {
        return [...state,action.payload]
    }
    return state;
};

let todos = todoRecuder();

const newTodo = {
    id:2,
    todo:'Recolectar la piedra del poder',
    done:false
}


const addTodoAction = {
    type:'[TODO] add todo',
    payloa:newTodo
}

todos = todoRecuder(todos,addTodoAction);

console.log({state: todos})
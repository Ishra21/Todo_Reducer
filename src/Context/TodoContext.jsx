import { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer";


const TodoContext = createContext()

export const TodoProvider = ({ children }) => {

    // initial state
    const initialState = {
        todos: [{ id: 1, title: "I Am Reducer 1", description: "Here is some desc..." },
        { id: 2, title: "I Am Reducer 2", description: "Here is some desc..." },
        { id: 3, title: "I Am Reducer 3", description: "Here is some desc..." },
        { id: 4, title: "I Am Reducer 4", description: "Here is some desc..." },
        ],
        edit : {todo :{}, isEdit : false},
    }



    // Reducer
    const [state, dispatch] = useReducer(TodoReducer, initialState)



    return (
        <TodoContext.Provider value={{ todos: state.todos, edit : state.edit, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext

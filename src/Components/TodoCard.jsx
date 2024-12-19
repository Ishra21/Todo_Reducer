import React, { useContext } from 'react'
import TodoContext from '../Context/TodoContext'
// import { FaEdit, FaTrash } from "react-icons/fa";


const TodoCard = ({ todo }) => {

    const { dispatch } = useContext(TodoContext)

    const handleRemove = (id) => {
        dispatch({ type: "REMOVE_TODO", payload: id })
    }

    const editTodo = (todo) =>{
        dispatch({
            type : "EDIT_TODO",
            payload : todo,
        })
    }

    return (
        <div className="w-full relative  p-5 rounded-lg border shadow-sm">
            <h1 className='text-2xl font-bold my-3'>{todo.title}</h1>
            <p className='text-sm max-w-sm'>{todo.description}</p>
            <span className='absolute top-2 right-4 flex space-x-2'>
                {/* <p><FaEdit /></p>
                <p><FaTrash /></p> */}
                <button onClick={()=>editTodo(todo)} className='bg-yellow-400 px-1'>Edit</button>
                <button onClick={() => handleRemove(todo.id)}
                    className="bg-red-600 px-1 text-white"
                > Delete</button>
            </span>
        </div>
    )
}

export default TodoCard
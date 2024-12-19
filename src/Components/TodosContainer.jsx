import React, { useContext } from 'react'
import TodoCard from './TodoCard'
import TodoContext from '../Context/TodoContext'

const TodosContainer = () => {
const {todos} = useContext(TodoContext)

    return (
        <div className="my-5 grid md:grid-cols-3 gap-3">
        {
            todos.map((todo) => <TodoCard key={todo.id} todo = {todo} />)
        }
        </div>
    )
}

export default TodosContainer
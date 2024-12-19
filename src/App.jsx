import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import TodosContainer from './Components/TodosContainer'
import { TodoProvider } from './Context/TodoContext'

const App = () => {
    return (
        <TodoProvider>
            <Navbar />
            <div className="container p-8">
                <Form />
                <TodosContainer />
            </div>
        </ TodoProvider>
    )
}

export default App
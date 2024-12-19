import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../Context/TodoContext'


const Form = () => {
    const { edit, dispatch } = useContext(TodoContext)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        edit.isEdit ? dispatch({
            type: "UPDATE_TODO",
            payload: { id: edit.todo.id, title, description }
        }) : dispatch({
            type: "ADD_TODO",
            payload: { id: crypto.randomUUID(), title, description }
        })

        setTitle("")
        setDescription("")
    }

    useEffect(() => {
        setTitle(edit.todo.title)
        setDescription(edit.todo.description)
    }, [edit])

    return (
        <div className='p-5 rounded-lg border '>
            <form className='my-4 flex flex-col' onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Enter Title' className='my-2 w-full border p-3 rounded-lg placeholder:text-sm' onChange={(e) => setTitle(e.target.value)} value={title} required />
                <textarea placeholder='Enter Description ' className='my-2 w-full border p-3 rounded-lg placeholder:text-sm' onChange={(e) => setDescription(e.target.value)} value={description} required></textarea>
                <button className='bg-green-700 mt-3 w-full p-1 text-white rounded-lg hover:bg-green-900 duration-150'><p className='font-bold'>Save</p></button>
            </form>
        </div>

    )
}

export default Form
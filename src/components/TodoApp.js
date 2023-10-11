import React, { useState } from 'react'
import '../App.css';

export const TodoApp = () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])
    const [saveTasks, setSaveTasks] = useState("hidden")
    const [index, setIndex] = useState()

    const addBtn = () => {
        setTodos([...todos, { input }])
        setInput("")
    }
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    const handleDelete = (x) => {
        let arr = [...todos]    
        arr.splice(x, 1);
        // console.log(todos);
        setTodos(arr);
    }
    const handleDeleteAll = () => {
        setTodos([]);
    }
    const handleEdit = (x) => {
        setSaveTasks('inline-block')
        setInput(todos[x].input);
        setIndex(x)
        console.log(index);
    }
    const handleSaveTasks = (x) => {
        let copyTask = [...todos];
        copyTask[x].input = input;
        setTodos(copyTask);
        setInput('')
        setSaveTasks('hidden')

    }
    return (
        <div className="flex items-center flex-col">
            <div className="mb-5">
                <h1 className="text-3xl font-bold">ToDo Application</h1>
            </div>


            <div className="app">
                <input className="py-2 px-4 m-2 rounded-xl outline-0 border-[3px] border-[#f2c451]" type="text" value={input} placeholder="Enter Your ToDo Tasks!" onChange={handleInputChange} />
                <button className="text-gray-500 bg-white py-2 px-4 m-2 rounded-lg outline-0 border-[3px] border-[#f2c451]" onClick={() => { addBtn() }}>Add</button>
                <button className="text-gray-500 py-2 px-4 m-1 bg-white rounded-lg outline-0 border-[3px] border-[#f2c451]" onClick={handleDeleteAll}>Delete All</button>
                <button className={`text-gray-500 bg-white ${saveTasks} py-1 px-3 m-1 rounded-lg outline-0 border-[3px] border-[#f2c451]`} onClick={() => handleSaveTasks(index)}>Save Tasks</button>
                {todos.map((x, i) => {
                    return (
                        <div key={i} className='text-2xl text-black flex justify-between items-center bg-white p-3 mb-4'>
                            <p>{i + 1}. {x.input}</p>
                            <div>
                                <i className="fa-solid fa-trash px-3 py-1 cursor-pointer" onClick={() => handleDelete(i)}></i>
                                <i className="fa-solid fa-pen-to-square px-3 py-1 cursor-pointer" onClick={() => handleEdit(i)}></i>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


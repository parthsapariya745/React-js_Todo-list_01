import { useState } from "react"

function App() {
  let [input, setInput] = useState("")
  let [todos, setTodo] = useState([])
  let [btn, setBtn] = useState(true)

  let addTodo = () => {
    if (input != "") {
      setTodo([...todos, input])
      setInput("")
    }
    else {
      alert("please enter your task")
    }
  }

  let clearTodo = () => {
    setTodo([])
  }

  let deleteTodo = (i) => {
    setTodo(todos.filter((_, p) => p !== i))
  }

  let editTodo = (i) => {
    setBtn(i)
    setInput(todos[i])
  }

  let saveTodo = (i) => {
    todos[i] = input
    setTodo([...todos])
    setBtn(!btn)
    setInput("")
  }

  return (
    <div className="min-h-screen w-full bg-zinc-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-800 shadow-lg rounded-2xl p-6 border border-zinc-700">
        <h1 className="text-2xl font-semibold text-white mb-4">Todo List</h1>
        <div className="btn flex gap-2 mb-4">
          <input type="text" placeholder="Enter your task..." value={input} onChange={(e)=> setInput(e.target.value)} className="flex-1 px-4 py-2 border border-zinc-600 rounded-xl bg-zinc-700 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
          <button onClick={addTodo} className="px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition">Add</button>
          <button className="px-4 py-2 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition" onClick={clearTodo}>Clear All</button>
        </div>
        <ul className="space-y-2">
          {todos.map((e, i)=> {
            return (
              <li key={i} className="flex items-center justify-between px-4 py-2 border border-zinc-600 rounded-xl bg-zinc-700 hover:bg-zinc-600">
                <span className="text-white">{e}</span>
                <div className="btn flex items-center gap-2">
                  {btn !== i ? <button className="px-3 py-1.5 text-white text-sm rounded-lg transition bg-blue-600 hover:bg-blue-700" onClick={() => editTodo(i)}>Edit</button> : <button className="px-3 py-1.5 text-white text-sm rounded-lg transition bg-green-600 hover:bg-green-700" onClick={() => saveTodo(i)}>Save</button>}
                  <button className="px-3 py-1.5 text-white text-sm rounded-lg transition bg-red-600 hover:bg-red-700" onClick={() => deleteTodo(i)}>Delete</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default App
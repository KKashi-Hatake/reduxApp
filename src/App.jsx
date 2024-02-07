import {useSelector, useDispatch} from "react-redux"
import {add, remove} from './redux/reducer'
import React from "react";

function App() {
  const [val,setVal]=React.useState(1)
  const dispatch=useDispatch();
  const addHandler=(e)=>{
    e.preventDefault()
    const a=parseInt(val)
    dispatch(add(a))
  }
  
  const removeHandler=(e)=>{
    e.preventDefault()
    const a=parseInt(val)
    dispatch(remove(a))
  }
  const count =useSelector(state=>state.count)


  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1704634134420-55d2e632c3a3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center h-screen flex justify-center items-center">
      <input type="number" className="p-2 bg-gray-700 rounded-md text-white" value={val} onChange={(e)=>setVal(e.target.value)} />
      <div className="w-36 flex justify-around">
        <button onClick={addHandler} type="button" className="border-2 border-gray-400 w-9 h-8 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">+</button>
        <p className="text-white">Count:{count}</p>
        <button onClick={removeHandler} type="button" className="border-2 border-gray-400 w-9 h-8 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">-</button>
      </div>
    </div>
  )
}

export default App

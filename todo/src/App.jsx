
import { useState } from 'react'
import './App.css'
import Input from './assets/component/Input'
import Board from './assets/component/Board';

function App() {
     const [ taskList, setTaskList] = useState([]);

    
  return (
    <div className=' px-12'>
    <div className='flex flex-col items-center justify-center py-8 gap-4'>
     <h1 className=' text-xl font-semibold'>To-Do Board</h1>
     <Input taskList={taskList}  setTaskList= {setTaskList} />
     </div>
     <div className=' flex flex-col gap-4 grid grid-cols-3 px-4 sm:px-10 lg:px-12 '>
      {taskList.map((task, index) => 
        <Board key={index} index={index} taskList={taskList} setTaskList= {setTaskList} task={task}/>
      )}
     
    </div>
    </div>
  )
}

export default App

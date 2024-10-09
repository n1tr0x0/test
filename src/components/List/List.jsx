import React, { useContext } from 'react'
import { CustomContext } from '../../context'
import Task from "../Tassk/Task";

const List = () => {
  const { tasks, filter  } = useContext(CustomContext)



    const filterBtn = tasks.filter((item)=> {
        if (filter === 'done') return item.isDone;
        if (filter === 'important') return item.isImportant;
        return true;
    })


  return (
    <div>
      <ul className='title'>
        {filterBtn.map((item) => (
          <Task id={item.id} item={item}/>
        ))}
      </ul>
    </div>
  )
}

export default List

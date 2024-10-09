import {createContext, useEffect, useState} from "react";
import{v4 as uuid} from 'uuid'
import { toast } from "react-toastify";

export const CustomContext = createContext(null)





const Context =  (props) => {

    const [tasks, setTasks] = useState([])
    const [filter,setFilter] = useState()
    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    }

    const doneTasks = (id) => {
         setTasks(prevTasks => prevTasks.map((task) => {
            if(task.id === id){
                return {...task, isDone: !task.isDone}
               
            }
            return task
         }))  
    } 

    useEffect(()=> {
        if (localStorage.getItem('tasks')) {
            setTasks(JSON.parse(localStorage.getItem('tasks')))
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])


    const createTasks = (text) => {
 
        const find = tasks.some((item) => item.text === text.trim())

        if(find ){
            toast.error('Такой уже есть')
        } else if (!text.trim().length) {
            toast.error('нельзя дабавить пустой')
        } else {
            setTasks([...tasks, {
                id: uuid(),
                text: text.trim(),
                isDone: false,
                isImportent: false,
            }])
        }
    }

    const importantTask = (id) => {
        setTasks(prevTasks => prevTasks.map((task) => {
            if(task.id === id){
                return {...task, isImportant: !task.isImportant}
               
            }
            return task
        }))  
    }

    const deleteAllCheked = () => {
        setTasks(prevTasks => prevTasks.filter((item) => !item.isDone))
    }

    const changeTask = (id, text) => {
        setTasks(prevTask => prevTask.map((item)=> {
            if (id === item.id) {
                return {...item, text: text}
            } else {
                return item
            }
        }))
    }

    
     const getDoneCount = () => {
        let count = 0;
        tasks.forEach(task => {
            if (task.isDone) {
                count++;
            }
        });
        return count;
    };

    const getTotalCount = () => {
        return tasks.length;
    };



    let value = {
        tasks,
        createTasks,
        deleteTask,
        doneTasks,
        importantTask,
        deleteAllCheked,
        getDoneCount, 
        getTotalCount ,
        filter,
        setFilter,
        changeTask
    };
        
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}


export default Context
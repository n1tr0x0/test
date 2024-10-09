import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faStar, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {CustomContext} from "../../context";

const Task = ({item}) => {

    const {deleteTask,doneTasks, importantTask, changeTask } = useContext(CustomContext)

    const [change, setChange] = useState(false)

    const [text, setText] = useState(item.text)

    return (
            <li className='title_text' key={item.id}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input checked={item.isDone} onClick={() => doneTasks(item.id)} type="checkbox"  style={{ marginRight: '10px' }} />

                    {
                        change ?  <input value={text} onChange={(e)=> setText(e.target.value)}/>
                        :
                        <span style={{
                        color: item.isDone ? 'gray' : (item.isImportant ? 'green' : '#58a3d9'),
                        textDecoration: item.isDone ? 'line-through' : 'none'
                    }}>
                    {item.text}
                        </span>
                    }



                </div>
                <div style={{ display: 'flex' }}>
                    <button className='icon_btn' onClick={()=> {
                        changeTask(item.id, text)
                        setChange(!change)
                    }}>
                        {
                            change ? 'Edit' :
                                <FontAwesomeIcon icon={faPen}/>

                        }
                    </button>
                    <button className='icon_btn'>
                        <FontAwesomeIcon  onClick={() => deleteTask(item.id)} icon={faTrashAlt} />
                    </button>
                    <button className='icon_btn'>
                        <FontAwesomeIcon onClick={() => importantTask(item.id)} icon={faStar} style={{ color: 'yellow' }} />
                    </button>
                </div>
            </li>
    );
};

export default Task;
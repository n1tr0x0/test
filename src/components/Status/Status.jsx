import React, {useContext} from 'react';
import {CustomContext} from "../../context";

const Status = () => {
    const {setFilter} = useContext(CustomContext)
    return (
        <div>
            <button onClick={()=> setFilter('done')}>done</button>
            <button onClick={()=> setFilter('important')}>important</button>
            <button onClick={()=> setFilter('all')}>all</button>
        </div>
    );
};

export default Status;
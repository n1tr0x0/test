import React, { useContext } from 'react'
import { CustomContext } from '../../context'

const End = () => {

  const {
    deleteAllCheked,
    getDoneCount,
    getTotalCount
  } = useContext(CustomContext)

  return (
    <div>
         <div>{getDoneCount()} of {getTotalCount()} tasks done</div>
        <button onClick={deleteAllCheked}>Remove all checkend</button>
    </div>
  )
}

export default End
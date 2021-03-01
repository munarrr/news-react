import React from 'react'
import Columns from './columns'
import Rows from './rows'
import './content.scss'

const Content = () => {
     return (
          <div className="content"> 
               <Columns />
               <Rows />
          </div>
     )
}

export default Content


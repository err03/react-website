import React from 'react'
import { Card } from "../components/Card";

function Project(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <div className='row'>
          {props.cards.map((item, index) => (
            <div className='col-sm-auto'>
                <Card key={item.title} {...item}/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Project
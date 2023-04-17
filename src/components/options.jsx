import React from 'react'

export default function options({items,selectOption }) {
  return (
  <>
  <h1 className='heading'>ASK SHITT!!!</h1>

    <div className='grid-main'>
    {items.map (item=> {
        return(
            <div className='grid-child' onClick={()=>selectOption(item.option)}> 
                <h4>{item.name}</h4>
                <p>{item.description}</p>

            </div>
        )
    })}

    </div>
  
  </>
  )
}

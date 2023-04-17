import React from 'react'

export default function translation({doStuff, setInput, result}) {
  return (
    <div style={{display:'flex', flexDirection:'column',alignItems:'center'}} > 
      <textarea className="text-area" cols={30} rows={10} onChange={(e)=>setInput(e.target.value)}></textarea>
      <button onClick={doStuff} className='btn'>LOAD STUFF</button>
      <div>
        <h3 className='result'>
          {result}
          </h3>
      </div>
    </div>
  )
}

import React from 'react'
import "./codeMama.css"
import CodeMamaItem from '../codeMamaItem/CodeMamaItem'


const CodeMama = () => {
  return (
    <div className='code-mama'>
        <div className="code-mama-container">
             <div className="code-mama-wrapper">
                  <CodeMamaItem item = 'item1'/>
                  <CodeMamaItem item = 'item2' />
             </div>
        </div>
    </div>
  )
}

export default CodeMama

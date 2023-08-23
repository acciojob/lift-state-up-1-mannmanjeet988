import React,{useState} from "react"

const Child= ({setShowModal,showModal}) =>{

    function handleClick(){
        setShowModal(true)
    }

   return (
    <div>
        <h1>Child component</h1>
        <button onClick={handleClick}>Show Modal</button>
        {
         showModal &&  
           (<div className="modal-container">
            <h3>Modal Content</h3>
            <p>This is the modal content.</p>
           </div>)
        }
    </div>
   )
}

export default Child
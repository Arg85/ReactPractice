import React,{useEffect} from 'react'

function Modal({modalContent,closeModal}) {
    useEffect(()=>{
        setTimeout(()=>{
            closeModal()
        },3000)
    })
    return (
        <div className="modal">
        
            <h2>{modalContent}</h2>
        </div>
    )
}

export default Modal

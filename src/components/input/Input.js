import { useEffect, useRef, useState } from "react";
import "./Input.css"
function Input({title, type, placeholder, errorMessage}) {
    const [error, setError]= useState(false)

    const inputRef = useRef()
    useEffect(() =>{
        inputRef.current.addEventListener('blur',function(){
            // input field validation
            if(inputRef.current.value === ""){ 
                setError(true)
            }
                
            
        })
        inputRef.current.addEventListener('input',function(){
            if(error)
                setError(false)    
        })
    },[error])
    return (
        <div className="input-field-wrapper">
            <div className="input-field">
                <input className={error? "input-error-style": "input-valid-style"} title={title} ref={inputRef} type={type} required></input>
                <label className={error? "label-error-style": "label-valid-style"}>{placeholder}</label>
            </div>
            <div className="input-field-error">
                {error && errorMessage}
            </div>
        </div>
    );
}

export default Input;
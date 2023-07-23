import { useEffect, useRef, useState } from "react";
import "./Input.css"
function Input({title, type, placeholder, errorMessage}) {
    const [error, setError]= useState(false)

    const inputRef = useRef()
    useEffect(() =>{
        const inputField = inputRef.current
        function blurHandler(){
            // input field validation
            if(inputField.value === ""){ 
                setError(true)
            }  
        }
        function inputHandler(){
            if(error)
                setError(false)    
        }

        if(errorMessage){
            inputField.addEventListener('blur',blurHandler)
            inputField.addEventListener('input',inputHandler)
        }
        
        return () => {
            inputField.removeEventListener('blur',blurHandler)
            inputField.removeEventListener('input',inputHandler)
        }
    },[error, errorMessage])
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
import minus from "./Minus.svg"
import { useState } from "react"
import "./Accordian.css"
function Accordian({title, content}){
    const [active, setActive] = useState(false)

    return (
        <div className="accordian-wrapper">
            <div className="accordian-button" onClick={() => setActive(!active)}>
                <span>
                    {title}
                </span>
                <div className="accordian-plus">
                    <img className={active ? "active-plus" : "inactive-plus"} src={minus} alt="minus"/>
                    <img src={minus} alt="minus"/>  
                </div>
                
            </div>
            <div className={"accordian-content" + (active ? " accrodian-content-display" : " accrodian-content-hide")} >
                {content}
            </div>
        </div>
    )
}

export default Accordian;
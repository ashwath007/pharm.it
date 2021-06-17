import React,{useState} from 'react'
import './Middle.css'
import { Link} from 'react-router-dom'
function Middle() {
    const [medicine, setstate] = useState("");
    return (
        <div className="middle">
            
            <div className="middle__left">
                <h1 className="middle__left__q1">Find your Medicine<br/> at your Price...</h1>
                <h2 className="middle__left__q2">Best place to find Medicine from different<br/> websites at low price</h2>
                <div className="middle_form">
                    <input type="text" placeholder="     Search by medicine name.." className="inputbar" value={medicine} onChange = {(e) => setstate(e.target.value)}/>
                    <Link to={{
                        pathname:"/medicine",
                        state:{
                            medicine_in:medicine
                        }
                    }}>
                        <button className="middle_btn"  >Check Medicine</button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Middle

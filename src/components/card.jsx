import card_style from './card_style.css'
import { Link } from 'react-router-dom'



 const Card = (props) => {

    const style = {
        bacground:props.image,

    }
    return     (
        <>
         <Link to ={props.link}> 
        <div className="card">
            <div className="img" style={style}>
                 <img src={props.image} alt={props.name} />  
            </div>
            <div className="text_box">
            
           
              <span>{props.name}</span>
               
            </div>
        </div>
        </Link> 
        </>
    )
} 

export default Card
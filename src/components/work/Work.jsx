import './work.css'
import ongle1 from '../../assets/images/ongle1.jpg'
import ongle2 from '../../assets/images/ongle2.jpg'
import ongle3 from '../../assets/images/ongle3.jpg'
import ongle4 from '../../assets/images/ongle4.jpg'
import ongle5 from '../../assets/images/ongle5.jpg'



const Work = () => {

    return(
        <div className="workContainer">
            <h2>Mon travail</h2>
            <ul className="photoTab">
                <li className='photoCard'><img src={ongle1} alt="toDO"></img></li>
                <li className='photoCard principal'><img src={ongle2} alt="toDO"></img></li>
                <li className='photoCard'><img src={ongle3} alt="toDO"></img></li>
                <li className='photoCard'><img src={ongle4} alt="toDO"></img></li>
                <li className='photoCard'><img src={ongle5} alt="toDO"></img></li>

            </ul>
            
        </div>
        
    )
}

export default Work
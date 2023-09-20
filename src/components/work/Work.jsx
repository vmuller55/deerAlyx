import './work.css'
import ongle1 from '../../assets/images/ongle1.jpg'
import ongle2 from '../../assets/images/ongle2.jpg'
import ongle3 from '../../assets/images/ongle3.jpg'
import ongle4 from '../../assets/images/ongle4.jpg'
import ongle5 from '../../assets/images/ongle5.jpg'
import ongle6 from '../../assets/images/ongle6.jpg'
import ongle7 from '../../assets/images/ongle7.jpg'
import ongle8 from '../../assets/images/ongle8.jpg'



const Work = () => {

    return(
        <>
            <div className='titlePage'>
                <h2>Mon travail</h2>
            </div>
            <div className="workContainer">
                <ul className="photoTab">
                    <li className='photoCard' style={{"--i": 1}}><img src={ongle1} alt="toDO"></img></li>
                    <li className='photoCard principal' style={{"--i": 2}}><img src={ongle2} alt="toDO"></img></li>
                    <li className='photoCard' style={{"--i": 3}}><img src={ongle3} alt="toDO"></img></li>
                    <li className='photoCard' style={{"--i": 4}}><img src={ongle4} alt="toDO"></img></li>
                    <li className='photoCard' style={{"--i": 5}}><img src={ongle5} alt="toDO"></img></li>
                    <li className='photoCard' style={{"--i": 6}}><img src={ongle6} alt="toDO"></img></li>
                    <li className='photoCard' style={{"--i": 7}}><img src={ongle7} alt="toDO"></img></li>
                    <li className='photoCard' style={{"--i": 8}}><img src={ongle8} alt="toDO"></img></li>
                </ul>
            </div>
        </>
        
    )
}

export default Work
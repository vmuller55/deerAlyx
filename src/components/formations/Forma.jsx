import './forma.css'

const Forma = () => {
    return (
        <>
            <div className="titlePage">
                <h2>Mes formations</h2>
            </div>
            <div className="formaContainer">
                <ul className='formaTab'>
                    <li className="forma perf">
                        <h3>Perfectionnement Gel</h3>
                        <h4>14H - 2 jours</h4>
                        <p><i className="fa-solid fa-circle"></i>Révisions des bases<i className="fa-solid fa-circle"></i></p>
                        <p><i className="fa-solid fa-circle"></i>Préparation de la plaque<i className="fa-solid fa-circle"></i></p>
                        <p><i className="fa-solid fa-circle"></i>Manucure express<i className="fa-solid fa-circle"></i></p>
                        <p><i className="fa-solid fa-circle"></i>Extensions multi technique<i className="fa-solid fa-circle"></i></p>
                        <p><i className="fa-solid fa-circle"></i>Travail de différentes formes<i className="fa-solid fa-circle"></i></p>
                        <p><i className="fa-solid fa-circle"></i>Couleur sous cuticule<i className="fa-solid fa-circle"></i></p>
                        <p><i className="fa-solid fa-circle"></i>French paint<i className="fa-solid fa-circle"></i></p>
                        <p><i className="fa-solid fa-circle"></i>Incrustations<i className="fa-solid fa-circle"></i></p>
                        <p><i className="fa-solid fa-circle"></i>French reverse<i className="fa-solid fa-circle"></i></p>
                    </li>
                    <li className="forma baby">
                        <h3>Perfect multi baby</h3>
                        <h4>14H - 2 jours</h4>
                        <p>Révisions des bases</p>
                        <p>Préparation de la plaque</p>
                        <p>Manucure express</p>
                        <p>Extensions multi technique</p>
                        <p>Travail de différentes formes</p>
                        <p>BabyBoomer en construction</p>
                        <p>BabyGlitter</p>
                        <p>BabyColor</p>
                        <p>BabyEffect</p>
                        <p>Ombré mily</p>
                    </li>
                    <li className="forma coach">
                        <h3>Coaching privé</h3>
                        <h4>14H - 2 jours</h4>
                        <p>Le coaching privé est entièrement personnalisée</p>
                        <p>Le programme est fait sur mesure afin de s'adapter au mieux aux besoins de l'élève</p>
                    </li>
                </ul>
            </div>
              
        </>
    )
}

export default Forma
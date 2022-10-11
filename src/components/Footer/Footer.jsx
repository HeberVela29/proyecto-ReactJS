import React from 'react'
import github from "../../github.png"
import linkedin from "../../linkedin.png"
import instagram from "../../instagram.png"
import "./styles.css";


const Footer = () => {
    return (
        <footer className='footer'>
            <h5 className='copyrigth'>2022 by Vela Heber ©</h5>
            <div className='redes'>
                <div className='github'>
                <a href="https://github.com/HeberVela29" target="blank"><img className='imagen-redes' src={github} alt="github"/></a>
                </div>
                <div className='linkedin'>
                <a href="https://www.linkedin.com/in/velaheber/" target="blank1"><img className='imagen-redes' src={linkedin} alt="linkedin"/></a>
                </div>
                <div className='instagram'>
                <a href="https://www.instagram.com/vela.heber/" target="blank2"><img className='imagen-redes' src={instagram} alt="instagram" /></a>

                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'
import { IconContext } from 'react-icons'
import { FaHeart } from 'react-icons/fa'
import './Footer.css'


export default props =>
    <footer className="footer">
        Desenvolvido com &nbsp;
        < IconContext.Provider value={{ color: "red" }} >
            < FaHeart />
        </IconContext.Provider> &nbsp;
        Por &nbsp;<i className="text-danger">W</i>illian
    </footer>
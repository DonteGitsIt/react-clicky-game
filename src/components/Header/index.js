import React from 'react'
import './style.css'

const Header = props => {
    return (
    <div className="header">
        <div className="title ">
            <h2>{props.children}</h2>
        </div>
        <div className="scores">
        <strong>Score:</strong> {props.score} <strong>HighScore:</strong> {props.highscore}
        
        </div>
    </div>
    )
}

export default Header;
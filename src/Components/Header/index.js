import React from 'react'
import PropTypes from 'prop-types'

export const Header = ({title}) => {
    return (
        <header className = 'header'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title:'Carousel template',
}

Header.propTypes = {
    title:PropTypes.string.isRequired,
}


export default Header
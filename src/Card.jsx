import react from './assets/react.svg'
import PropTypes from 'prop-types'

function Card(props) {
    return(
        <div className='card'>
            <img src={react} className='img' alt="profile image" />
            <hr className='line'/>
            <h2 className='title'>{props.name}</h2>
            <p className='description'>{props.description}</p>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
}

Card.defaultProps = {
    name: 'Card name',
    description: 'Card description'
}

export default Card;
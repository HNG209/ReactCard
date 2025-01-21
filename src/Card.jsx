import react from './assets/react.svg'

function Card() {
    return(
        <div className='card'>
            <img src={react} className='img' alt="profile image" />
            <hr className='line'/>
            <h2 className='title'>Tran Phuc Hung</h2>
            <p className='description'>A java developer who's new to ReactJS</p>
        </div>
    )
}

export default Card;
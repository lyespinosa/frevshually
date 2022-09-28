import './styles.css'
import '../../globalStyles.css'

function Photo(props) {

    return (
        <div className='photo-container'>
            <img className='photo' src={props.url} alt="" />
            <div className="front-cover">
                <p className="footer-text">{props.author}</p>
                <i className="bi bi-heart"></i>
                <i className="bi bi-download"></i>
            </div>
        </div>
    )

}



export default Photo
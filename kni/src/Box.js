import { useNavigate } from 'react-router-dom';
import './Box.css'
export default function Box() {
    const history = useNavigate();

    const handleClick = () => {
        history.push('/boxes/box-page');
    };

    return (
        <div>
            <div className='Box' />
            <h1 className='Box' >Box</h1>
            <button onClick={handleClick}>Go to Box Page</button>
        </div>
    );
}
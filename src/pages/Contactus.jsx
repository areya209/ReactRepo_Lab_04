import { useHistory } from 'react-router-dom';

export const Contactus = () => {
    const history = useHistory();
    const handleClick = () => history.push('/users');

    return (
        <>
            <h1>Contact US-Page</h1>
            <form action="">
                <input type="email" placeholder="Enter Your Email" /> <br /> <br />
                <textarea cols="50" rows="8" placeholder="Please Enter Your Message"></textarea> <br />
                <button type="button" onClick={handleClick}>Submit Data</button>
            </form>
        </>
    );
};



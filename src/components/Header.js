import React, { useState } from 'react'
import img_store_front from '../images/img_store_front.png';

function Header() {
    const [visitors, setVisitors] = useState(0);

    const incrementVisitors = () => {
        let newVisitors = visitors + 1;
        setVisitors(newVisitors);
    }

    return (
        <div>
            <h1>Cookies and beyond</h1>
            <p>Where cookies brother gather</p>
            <div style={{ marginBottom: 10 }}>
                <span>{visitors}</span> Visitors&nbsp;&nbsp;
                <button onClick={() => { incrementVisitors() }}>Visited</button>
            </div>
            <img alt='image-store-front' src={img_store_front} />
        </div>
    )
}

export default Header
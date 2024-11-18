import React, { useState } from 'react'
import StoreHome from './StoreHome';
import PetsHome from './PetsHome';

function Home() {
    const [showHome, setShowHome] = useState(false);
    const [showPetsHome, setShowPetsHome] = useState(false);

    const toggleHome = () => {
        setShowHome(!showHome);
    }

    const togglePetsHome = () => {
        setShowPetsHome(!showPetsHome);
    }

    return (
        <div>
            <div style={{ margin: '20px' }}>
                <button style={{ marginRight: '20px' }} onClick={() => { toggleHome(); }}>
                    Show Store Home
                </button>
                <button onClick={() => { togglePetsHome(); }}>
                    Show Pets Home
                </button>
            </div>

            {showHome && <StoreHome />}
            {showPetsHome && <PetsHome />}
        </div>
    )
}

export default Home
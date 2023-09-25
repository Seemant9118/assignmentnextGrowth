import React, { useState } from 'react'
import FormModal from '../modal/FormModal';

const Home = () => {
    const [isOpen,setisOpen] = useState(false);

    return (
        <div>
            <button onClick={()=> setisOpen(true)}>Open Modal</button>
            {isOpen && <FormModal setisOpen={setisOpen}/>}
        </div>
    )
}

export default Home
import React from 'react'
import Oggetti from '../Components/OggettiComponents/Oggetti'
import AllCategories from '../Components/Filter/AllCategories'
import Cart from '../Components/Cart/Cart'

const Shopping = () => {
    return (
        <React.Fragment>
            <div className='aside'>
                <AllCategories />
                <Cart />
            </div>

            <section>
                <div className='oggetti_container'>
                    <Oggetti />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Shopping
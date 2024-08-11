import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Card from './Card'
function Cards() {
    const cards = [
        {
            image: Single,
            alt: "single user image",
            userType: "single",
            price: 142,
            features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"]
        },
        {
            image: Double,
            alt: "double user image",
            userType: "double",
            price: 199,
            features: ["1T Storage", "2 Granted User", "Send up to 4 GB"]
        },
        {
            image: Triple,
            alt: "triple user image",
            userType: "triple",
            price: 249,
            features: ["2T GB Storage", "3 Granted User", "Send up to 8 GB"]
        }
        
    ]
    const CardsElement = cards.map((card, index) => 
        <Card 
            key={index}
            image={card.image}
            alt={card.alt}
            userType={card.userType}
            price={card.price}
            features ={card.features}
            cardPos={index}
        />
    )
    return (
        <section className='cards bg-white py-[10rem] px-6'>
            <div className="container mx-auto flex flex-col  md:flex-row gap-16 md:gap-8">
                {CardsElement}
            </div>
        </section>
    )
}

export default Cards
import { React } from 'react';
import { Heart } from 'lucide-react';
import testImg from '../assets/test.jpg';

const texts = [
    'CO2 Neutral Plastic Free Shipping',
    'Free Delivery on Domestic Orders Over $99',
    '100% Premium Locally Sourced Organic Soup',
    'Support Small Local Business & Brands'
]

function HeroDetails() {
    
    return (
        <section className="pb-16 lg:pb-24 bg-beige">
            <div className="max-w-full mx-auto items-center px-6 md:flex md:space-x-12">

                {/* Left (Text) */}
                <ul className="space-y-3 md:w-1/3">
                    {texts.map((text, i) => (
                        <li key={i} className="flex items-start space-x-3">
                            <Heart className="w-6 h-6 text-gray-500 mt-1" />
                            <span className="text-gray-700">{text}</span>
                        </li>
                    ))}
                </ul>

                {/* Right (Two Images with Button) */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-0 md:w-2/3 gap-6">
                    
                    <div className="relative">
                        <img
                            src={testImg}
                            alt="Cats and dogs are cute."
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                        <button className="absolute bottom-4 left-4 px-4 py-2 rounded-full text-sm bg-black text-white hover:bg-dark-beige hover:text-black">
                            Shop now
                        </button>
                    </div>

                    <img
                        src={testImg}
                        alt="Cats and dogs are cute"
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </div>

            </div>
        </section>
    )
}

export default HeroDetails;
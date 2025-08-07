import { React } from 'react'

function HeroText() {

    return (
        <section className="mt-16 py-16 lg:py-24 bg-beige">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-full mx-auto px-6 gap-8 items-start md:items-center">

                {/* Left (Catchphrase) */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
                    Sustainable, Organic, Eco, Zero-Waste,<br/>
                    Plastic-free Refill Station
                </h2>

                {/* Right (Text) */}
                <p className="text-gray-700 md:text-lg text-right">
                    Fresh wholefoods, eco lifestyle products, free from wasteful packaging. Shop in store and online.<br/>
                    Buy a little or a lot, it's up to you.
                </p>

            </div>
        </section>
    )

}

export default HeroText;
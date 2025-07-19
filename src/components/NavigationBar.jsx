import { React } from 'react'
import { User, Heart, ShoppingCart } from 'lucide-react'

function NavigationBar() {
    
    return (
        <nav className="fixed top-0 left-0 w-full bg-ivory border-b border-black">
            <div className = "flex items-center justify-between max-w-7xl mx-auto h-16 px-4 font-mono font-semibold sm:px-6 lg:px-8">

                {/* Left (Pages) */}
                <div className="flex space-x-6 text-black">
                    <a href="/">HOME</a>
                    <a href="/about">ABOUT</a>
                    <a href="/shop">SHOP</a>
                </div>

                {/* Center (Title) */}
                <a href="/" className="text-3xl text-black">1UP</a>

                {/* Right (Icons) */}
                <div className="flex items-center rounded-full space-x-4 text-black">
                    <button>
                        <User className="w-4 h-4" />
                    </button>
                    <button>
                        <Heart className="w-4 h-4" />
                    </button>
                    <button className="flex items-center">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        <span className="text-xs">0</span>
                    </button>
                </div>

            </div>
        </nav>
    );

}

export default NavigationBar;
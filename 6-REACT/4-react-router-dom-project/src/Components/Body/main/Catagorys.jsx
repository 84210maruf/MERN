import React from 'react'
import '../../../App.css'

function Catagorys() {
    return (
        <div>

            <div className="py-4">
                <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
                    <legend className="px-6 text-2xl text-center">TOP CATEGORIES</legend>
                </fieldset>
            </div>

            <div className="w-full h-fit grid grid-cols-3 md:grid-cols-4 gap-1 mx-2 sm:mx-4">
                <a href="products">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" />
                </a>
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" />
                </a>
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" />
                </a>
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" />
                </a>
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" />
                </a>
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" />
                </a>
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" />
                </a>
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" />
                </a>
            </div>

            <div className=" flex flex-col items-center border-y-[1px] my-4 py-2">
                <div className="w-2/3 text-center">
                    <h1 className="text-xl font-semibold pb-2">Do you know how JACKET-POINT got its name?</h1>
                    <p className="text-lg">
                        The brand took its name from Van Gogh’s iconic painting, 'Sunflower', symbolizing warmth, happiness,
                        loyalty, and long-lasting connections 🌻</p>
                </div>
            </div>

        </div>
    )
}

export default Catagorys

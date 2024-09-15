import React from 'react'

function Question_accordion() {
    return (
        <div>

            <div className="md:flex md:p-4 gap-x-4 space-y-1 bg-sky-50 text-gray-500">
                <div className="md:size-[50%] space-y-1">
                    <div className="collapse collapse-plus rounded-[3px] bg-base-200 shadow-md">
                        <input type="radio" name="my-accordion-3" className='peer' checked="checked" />
                        <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50">Do you know how JACKET-POINT got its name?</div>
                        <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                            <hr className="py-1" />
                            <p>The brand took its name from Van Gogh’s iconic painting, 'Sunflower', symbolizing warmth,
                                happiness, loyalty, and long-lasting connections  </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus rounded-[3px] bg-base-200 shadow-md">
                        <input type="radio" name="my-accordion-3" className='peer' checked="checked" />
                        <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50">Do you know how JACKET-POINT got its name?</div>
                        <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                            <hr className="py-1" />
                            <p>The brand took its name from Van Gogh’s iconic painting, 'Sunflower', symbolizing warmth,
                                happiness, loyalty, and long-lasting connections  </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus rounded-[3px] bg-base-200 shadow-md">
                        <input type="radio" name="my-accordion-3" className='peer' checked="checked" />
                        <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50">Do you know how JACKET-POINT got its name?</div>
                        <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                            <hr className="py-1" />
                            <p>The brand took its name from Van Gogh’s iconic painting, 'Sunflower', symbolizing warmth,
                                happiness, loyalty, and long-lasting connections  </p>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex bg-base-100 image-full size-[50%]  shadow-xl pt-0 mt-0">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/fwhgjk6zBfY?si=vx6qMUVQsVyaFoXU?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

        </div>
    )
}

export default Question_accordion

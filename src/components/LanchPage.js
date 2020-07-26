import React from 'react';
import avatar from '../images/avatar.png';

const LanchPage = () => {
    return (

        <div className="container">

            <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3 bg-gray-700">
                <p className="lead">Hi there, my name is Felipe Cantu I am looking forward into working with you.
                        I am a Full Stack Developer that helps create your vision become a reality.
                        More about me is I love building things, programming is a passion, designing and helping are
                        all things I really enjoy doing. I grew up in a family that never even owned a computer but
                        technology
                        has always been my calling and I would love to work for a company that shares the same interest
                        as
                        me.
                        I have a computer technicain background I can build and fix computers and I love overclocking
                        and
                        seeing what
                        I can do on linux. I also love to play guitar, draw and skateboard when I am not at my desk.
                    </p>
                </div>
                <div class="row-span-1 col-span-2 bg-gray-400">
                    <h1>Felipe Cantu JR</h1>
                </div>
                <div class="row-span-2 col-span-2 bg-gray-400">
                <img class="h-48 w-full object-cover" src={avatar} alt="Profile Avatar" />
                </div>
            </div>
        </div>

    )
}

export default LanchPage;

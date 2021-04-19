import React from 'react';

export default function Intro({message, badgeSrc}) {
    //const logo = getGatsbyImageData(logo);
    return (
        <section id="intro" className="py-10 px-4 phablet:px-0 tablet:py-20">
            <div className="container mx-auto flex">
                <div className="flex-1">
                    <h1 className="text-magic font-extrabold text-blue-primary mb-3 phablet:text-3xl tablet:mb-14 laptop:text-4xl ">
                    Primary Intro Title Will Shine Here
                    </h1>
                    <p>
                    <ul className="laptop:mr-16">
                        <li className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate incidunt eius dicta minus unde, excepturi assumenda debitis quae fuga expedita architecto, dignissimos deserunt perspiciatis.</li>
                        <li className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cumque quidem ad incidunt quisquam esse quam numquam dolorem modi blanditiis?</li>
                        <li className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus omnis aliquam veritatis eveniet culpa accusamus nesciunt.</li>
                        <li className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur temporibus in ratione dicta id delectus minima dolore nostrum modi.</li>
                    </ul>
                    <button className="mt-5 rounded-xl font-extrabold text-xl bg-yellow-secondary px-8 py-3 uppercase">Request Heating Repair</button>
                    </p>
                </div>
                <div className="flex-none">
                    <img className="hidden laptop:inline-block" src="img/pengion-tools.png" alt="" />
                </div>
            </div>
        </section>
    );
}

import Globe from "react-globe.gl";
import Button from "./Button";
import { useState } from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('amitabh2002m@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

  return (
    <section className="sm:px-10 px-5 my-20" id='about'>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                Hi, I'm Amitabh
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                With 1 year & 2 months of experience, I have honed my skills in
                frontend and backend development, with a focus on animated 3D
                websites.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
                      <div>
            <p className="text-xl font-semibold mb-2 text-white font-generalsans">
              Tech Stacks
            </p>
            <p className="text-[#afb0b6] text-base font-generalsans">
              I specialize in JavaScript/TypeScript with a focus on React and
              Next.js ecosystems.
            </p>
          </div>
          </div>

        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-black-300 bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // labelsData={[{
                //     lat: 40, lng: -100,
                //     text: "I'm here!",
                //     color: 'white',
                //     size: 20,
                // }]}
              />
            </div>
            <div>
                <p className="text-xl font-semibold mb-2 text-white font-generalsans">I work remotely across most timezones</p>
                <p className="text-[#afb0b6] text-base font-generalsans">I'm based in India, with remote work avaiable.</p>
                <Button name="Contact Me" isBeam containerClass='w-full mt-10' />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
            <div className="w-full h-full border border-black-300 bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                <img src='/assets/grid3.png' alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                <div>
                    <p className="text-xl font-semibold mb-2 text-white font-generalsans">My Passion for Coding</p>
                    <p className="text-[#afb0b6] text-base font-generalsans">I love solving problems and building thing through code. Coding isn't just my profession - it is my passion.</p>
                </div>
            </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
            <div className="w-full h-full border border-black-300 bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                <img src='assets/grid4.png' alt='grid3' className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                <div className="space-y-2">
                    <p className="text-[#afb0b6] text-base font-generalsans text-center">Contact me</p>
                    <div className="cursor-pointer flex justify-center items-center gap-2" onClick={handleCopy}>
                        <img src={hasCopied ? `assets/tick.svg` : `assets/copy.svg`} alt='copy' />
                        <p className="lg:text-2xl md:text-xl font-medium bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent ">amitabh2002m@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;

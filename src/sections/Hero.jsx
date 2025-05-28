import Button from "../components/Button";
import HeroExperience from "../components/Hero Models/HeroExperience";
import { words } from "../constants";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/portfolio-3d/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
            <h1>Let's <span className="slide"><span className="wrapper">{words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            <h1>Projects That</h1>
            <h1>Shape Our Future</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none lg:w-1/2">
            Welcome to my Developer Portfolio, I'm excited you're here! Drop me some feedback or let me know if you think we'd be a good fit to work on a future project together 🤙
            </p>

            <Button
            text="See my work"
            className="md:w-80 md:h-16 w-60 h-12"
            id="counter"
            />
          </div>
        </header>

        <figure>
            <div className="hero-3d-layout ">
                    {/* <HeroExperience /> */}
            </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;

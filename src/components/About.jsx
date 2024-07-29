import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
    return (
      <section className="bg-white py-20" id="about">
        <div className="align-elements grid md:grid-cols-2 items-center gap-16">
          <img src={aboutSvg} className="w-full h-64" />
          <article>
            <SectionTitle text="code and coffee" />
            <p className="text-slate-600 mt-8 leading-loose">
              Passionate web developer with a knack for creating clean,
              user-friendly websites and applications. Always eager to learn and
              embrace new challenges in the tech world.
            </p>
          </article>
        </div>
      </section>
    );
};

export default About;

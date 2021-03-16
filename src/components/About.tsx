import { useRouter } from 'next/router';
import React from 'react';
import { Link } from 'react-scroll';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  const router = useRouter();
  const { name, petname } = router.query;

  return (
    <section
      id="about"
      style={{
        backgroundImage: "url('/static/images/plates/light_green_plate.svg')",
      }}
      className=" text-moss -mt-4 flex items-center justify-center flex-col h-full py-8 bg-cover bg-center pt-10 macbook:pt-16 "
    >
      <h2 className="mb-3 pt-6">
        {name && petname
          ? `Välkommen ${name} & ${petname}`
          : 'Välkommen ut i naturen!'}
      </h2>
      <p className="aboutText">
        Folksam finns till för allt du bryr dig om. Nu vill vi på Folksam,
        tillsammans med våra samarbetspartners, visa att vi bryr oss om dig!
        Därför bjuder vi in till en heldag i naturen full med aktiviteter för
        dig och ditt älskade husdjur.
      </p>
      <p className="aboutText">
        Evenemanget kommer äga rum runt Stora Delsjön i Göteborg och vi utgår
        från Delsjöbadet. Läs mer om dagens aktiviteter och anmäl dig direkt här
        på sidan. Hoppas att vi ses!
      </p>

      <Link
        className="cursor-pointer p-2 hover:underline"
        to="interest"
        smooth={true}
        duration={500}
      >
        <button className=" bg-grass py-3 px-5 rounded-3xl shadow-md hover:bg-overgrownGrass md:py-5 md:px-8 md:rounded-full md:text-xl">
          Till anmälan
        </button>
      </Link>
    </section>
  );
};

export default About;

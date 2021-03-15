import Image from 'next/image';
import useMatchMedia from '../hooks/useMatchMedia';

interface ICollab {
  src: string;
  hooverText: string;
  href: string;
}
const CollabImage: React.FC<ICollab> = ({ src, href, hooverText }) => {
  const tablet = useMatchMedia('(min-width: 1024px)');

  return (
    <div
      className={
        'relative rounded-full w-36 h-36 bg-white flex items-center justify-center flex-grow mx-auto lg:h-48 lg:w-48'
      }
    >
      <div
        className="w-full h-full bg-wine absolute top-0 left-0 rounded-full z-10 opacity-0 hover:opacity-100
      flex items-center justify-center transition duration-300 ease-out
      "
      >
        <a
          className="font-bold hover:underline text-white text-sm md:text-base px-1"
          href={href}
        >
          {hooverText}
        </a>
      </div>
      <Image
        src={src}
        height={tablet ? 120 : 95}
        width={tablet ? 120 : 95}
        layout="fixed"
      />
    </div>
  );
};

const Collaboration = () => {
  const collabs: ICollab[] = [
    {
      src: '/static/images/collaborations/SKK.webp',
      hooverText: 'Svenska Kennelklubben',
      href: 'https://skk.se',
    },
    {
      src: '/static/images/collaborations/GDF.webp',
      hooverText: 'Göteborgs Djurskyddsförening',
      href: 'https://djurskydd.nu',
    },
    {
      src: '/static/images/collaborations/SRF.webp',
      hooverText: 'Svenska Ridsports Förbundet',
      href: 'https://www.ridsport.se',
    },
    {
      src: '/static/images/collaborations/FirstVet.webp',
      hooverText: 'FirstVet',
      href: 'https://firstvet.com/sv',
    },
  ];

  return (
    <section
      style={{
        background: "url('/static/images/plates/light_pink_plate.svg')",
      }}
      className="text-wine px-6 bg-cover bg-center -mt-10 py-16 text-center md:py-28"
    >
      <h3 className="mb-2">Samarbetspartners</h3>
      <p className="mb-7 md:w-bigger mx-auto md:mb-10">
        Vi är stolta över att kunna presentera de samarbetspartners som hjälper
        oss att anordna eventet!
      </p>
      <div className="grid grid-cols-2 gap-4 flex-grow max-w-sm md:grid-cols-4 md:max-w-screen-lg mx-auto md:gap-0">
        {collabs.map((collab) => (
          <CollabImage key={collab.hooverText} {...collab} />
        ))}
      </div>
    </section>
  );
};

export default Collaboration;

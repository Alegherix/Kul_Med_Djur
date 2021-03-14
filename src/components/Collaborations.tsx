import Image from 'next/image';
import useMatchMedia from '../hooks/useMatchMedia';

interface ICollab {
  src: string;
  hooverText: string;
  href: string;
}
const CollabImage: React.FC<ICollab> = ({ href, hooverText }) => {
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
        <a className="font-bold hover:underline text-white" href={href}>
          {hooverText}
        </a>
      </div>
      <Image
        src="/collaborations/SKK.webp"
        height={tablet ? 120 : 95}
        width={tablet ? 120 : 95}
        layout="responsive"
      />
    </div>
  );
};

const Collaboration = () => {
  const collabs: ICollab[] = [
    {
      src: '/collaborations/SKK.webp',
      hooverText: 'Svenska Kennelklubben',
      href: 'https://skk.se',
    },
    {
      src: '/collaborations/SKK.webp',
      hooverText: 'Second',
      href: 'https://skk.se',
    },
    {
      src: '/collaborations/SKK.webp',
      hooverText: 'Third',
      href: 'https://skk.se',
    },
    {
      src: '/collaborations/SKK.webp',
      hooverText: 'Fourth',
      href: 'https://skk.se',
    },
  ];

  return (
    <section
      style={{ background: "url('/light_pink_plate.svg')" }}
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

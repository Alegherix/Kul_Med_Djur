import Image from 'next/image';

interface ICollab {
  src: string;
  height: number;
  width: number;
  hooverText: string;
  href: string;
}
const CollabImage: React.FC<ICollab> = ({ href, hooverText }) => {
  return (
    <div className="relative rounded-full w-36 h-36 bg-white flex items-center justify-center flex-grow mx-auto">
      <div
        className="w-full h-full bg-wine absolute top-0 left-0 rounded-full z-10 opacity-0 hover:opacity-100
      flex items-center justify-center transition duration-300 ease-out
      "
      >
        <a className="font-bold hover:underline text-white" href={href}>
          {hooverText}
        </a>
      </div>
      <Image src="/collaborations/SKK.webp" height={95} width={95} />
    </div>
  );
};

export const Collaboration = () => {
  const collabs: ICollab[] = [
    {
      src: '/collaborations/SKK.webp',
      height: 95,
      width: 95,
      hooverText: 'Svenska Kennelklubben',
      href: 'https://skk.se',
    },
    {
      src: '/collaborations/SKK.webp',
      height: 95,
      width: 95,
      hooverText: 'Second',
      href: 'https://skk.se',
    },
    {
      src: '/collaborations/SKK.webp',
      height: 95,
      width: 95,
      hooverText: 'Third',
      href: 'https://skk.se',
    },
    {
      src: '/collaborations/SKK.webp',
      height: 95,
      width: 95,
      hooverText: 'Fourth',
      href: 'https://skk.se',
    },
  ];

  return (
    <section
      style={{ background: "url('/light_pink_plate.svg')" }}
      className="text-wine px-6 bg-cover bg-center -mt-10 py-16 text-center"
    >
      <h3>Samarbetspartners</h3>
      <p className="text-sm mb-7">
        Vi är stolta över att kunna presentera de samarbetspartners som hjälper
        oss att anordna eventet!
      </p>
      <div className="grid grid-cols-2 gap-4 flex-grow md:grid-cols-4 max-w-screen-xl mx-auto">
        {collabs.map((collab) => (
          <CollabImage key={collab.hooverText} {...collab} />
        ))}
      </div>
    </section>
  );
};

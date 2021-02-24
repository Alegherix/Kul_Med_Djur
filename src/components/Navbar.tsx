import React from 'react';
import useMatchMedia from '../hooks/useMatchMedia';
import { Link } from 'react-scroll';
import Image from 'next/image';

const Burger = ({ setOpen, open }) => {
  const handleBurger = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div
      onClick={handleBurger}
      className="flex flex-col items-center justify-center relative cursor-pointer h-8"
    >
      <div
        className={`w-10 h-1 bg-white rounded-md shadow-md transform duration-200 ease-in-out -translate-y-2 ${
          open && 'rotate-45 translate-y-full'
        }`}
      ></div>
      <div
        className={`w-10 h-1 bg-white rounded-md shadow-md transform duration-75 ease-in-out ${
          open && '-translate-x-14 opacity-0 shadow-none'
        }`}
      ></div>
      <div
        className={`w-10 h-1 bg-white rounded-md shadow-md transform duration-200 ease-in-out translate-y-2 ${
          open && '-rotate-45 -translate-y-full'
        }`}
      ></div>
    </div>
  );
};

interface IScrollTo {
  text: string;
  to: string;
}

export const SmoothScroll: React.FC<IScrollTo> = ({ text, to }) => {
  return (
    <li>
      <Link
        className="cursor-pointer p-2 hover:underline"
        to={to}
        smooth={true}
        duration={500}
      >
        {text}
      </Link>
    </li>
  );
};

const NavigationItems = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center flex-col  gap-2 text-xl md:flex-row text-happy">
      <SmoothScroll text="Om Eventet" to="about" />
      <SmoothScroll text="Hundar" to="dogs" />
      <SmoothScroll text="Katter" to="cats" />
      <SmoothScroll text="Hästar" to="horses" />
      <SmoothScroll text="Intresseanmälan" to="interest" />
    </ul>
  );
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const tablet = useMatchMedia('(min-width: 768px)');

  return (
    <nav className="flex flex-col w-full text-white ">
      <div className="flex justify-between items-center p-4">
        <Image
          src="/Folksam_logo.svg"
          width={90}
          height={45}
          layout="fixed"
          priority={true}
        />
        {!tablet && <Burger open={open} setOpen={setOpen} />}
        {tablet && <NavigationItems />}
      </div>
      {open && !tablet && <NavigationItems />}
    </nav>
  );
};

export default Navbar;

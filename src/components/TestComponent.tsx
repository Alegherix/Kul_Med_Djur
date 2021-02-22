import { Link } from 'react-scroll';

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

const TestComponent = () => {
  return (
    <ul>
      <SmoothScroll text="Hundar" to="dogs" />
      <SmoothScroll text="Katter" to="cats" />
    </ul>
  );
};

export default TestComponent;

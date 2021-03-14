import FacebookSVG from './svg/FacebookSVG';
import FlowerMobileSVG from './svg/FlowerMobileSVG';
import InstagramSVG from './svg/InstagramSVG';
import LinkedInSVG from './svg/LinkedInSVG';
import TwitterSVG from './svg/TwitterSVG';
import WhiteFolksamSVG from './svg/WhiteFolksamSVG';
import YoutubeSVG from './svg/YoutubeSVG';

interface IFooterIcon {
  Icon: React.FunctionComponent;
  href: string;
  alt: string;
}

const FooterIcon: React.FC<IFooterIcon> = ({ Icon, href, alt }) => {
  return (
    <a className="w-4 h-4 rounded-md mx-2 md:mx-4" href={href} title={alt}>
      <Icon />
    </a>
  );
};

const Footer = () => {
  const footerIcons: IFooterIcon[] = [
    {
      Icon: FacebookSVG,
      href: 'https://sv-se.facebook.com/folksam',
      alt: 'Image of Facebook Icon',
    },
    {
      Icon: TwitterSVG,
      href: 'https://twitter.com/folksam',
      alt: 'Image of Twitter Icon',
    },
    {
      Icon: InstagramSVG,
      href: 'https://www.instagram.com/folksam/',
      alt: 'Image of Instagram Icon',
    },
    {
      Icon: YoutubeSVG,
      href: 'https://www.youtube.com/user/folksam',
      alt: 'Image of Youtube Icon',
    },
    {
      Icon: LinkedInSVG,
      href: 'https://www.linkedin.com/company/folksam/?originalSubdomain=se',
      alt: 'Image of LinkedIn Icon',
    },
  ];
  return (
    <footer
      style={{
        background: "url('/static/images/plates/dark_brown_plate.svg')",
        height: '25vh',
      }}
      className="relative flex justify-center flex-col items-center pt-2"
    >
      <WhiteFolksamSVG />
      <p className="text-dirt w-48 text-xs text-center mb-5 md:text-base md:w-64">
        Läs mer om våra försäkringar och vad vi kan hjälpa dig med på{' '}
        <a className="text-white" href="https://www.folksam.se">
          folksam.se
        </a>
      </p>
      <div className="flex">
        {footerIcons.map((icon) => (
          <FooterIcon key={icon.href} {...icon} />
        ))}
      </div>
      <FlowerMobileSVG />
    </footer>
  );
};

export default Footer;

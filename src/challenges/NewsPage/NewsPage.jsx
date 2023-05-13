import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as MenuIcon } from './icon-menu.svg';

import imgMobile from './image-web-3-mobile.jpg';
import retroPC from './image-retro-pcs.jpg';

const MobileHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <MenuIcon />
    </div>
  );
};

const NewSectionItem = ({ title, children }) => {
  return (
    <div className="py-6 border-b border-[#484762] last:border-none last:pb-2">
      <h2 className="text-white text-xl font-bold tracking-wider my-2">
        {title}
      </h2>
      <p className="text-[#9797ae] text-md">{children}</p>
    </div>
  );
};

const Button = (props) => (
  <button
    {...props}
    className="my-7 bg-[#f15d51] font-semibold py-3 px-6 text-[#ffe3e1] uppercase text-sm"
    style={{ letterSpacing: '3px' }}
  />
);

const NewsItem = ({ count, title, children, img }) => {
  return (
    <div className="flex gap-6 my-2">
      <img className="w-[30%]" src={img} alt={title} />
      <div className="flex flex-col justify-between">
        <h2 className="text-3xl font-bold text-[#c8c7ce]">{count}</h2>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-[#807f84] tracking-wide">{children}</p>
      </div>
    </div>
  );
};

const NewsPage = () => {
  return (
    <div className="bg-[#fefdfa] p-4">
      <MobileHeader />
      <div className="mt-10 grid grid-cols-1 gap-4">
        <img src={imgMobile} />
        <h1 className="text-[3.5rem] font-bold" style={{ lineHeight: 1 }}>
          The Bright Future of Web 3 ?
        </h1>
        <div>
          <p className="text-[#8b8790]" style={{ lineHeight: 1.5 }}>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <Button>Read more</Button>
        </div>
        <div className="bg-[#00001b] p-4 my-4">
          <h1 className="text-[#eda856] text-4xl font-medium tracking-wider">
            New
          </h1>
          <NewSectionItem title="Hydrogen Vs Electric Cars">
            Will hydrogen-fuelled cars ever catch up EVs ?
          </NewSectionItem>
          <NewSectionItem title="The Downsides of AI Artistry">
            What are the possible adverse effects of on-demand AI Image
            generation ?
          </NewSectionItem>
          <NewSectionItem title="Is VC Funding Drying Up ?">
            Private funding by VC firms is down by 50% YOY. We take a look at
            what that means.
          </NewSectionItem>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 my-8">
        <NewsItem count="01" title="Reviving Retro PCs" img={retroPC}>
          What happens when old PCs are given modern upgrades.
        </NewsItem>
        <NewsItem count="01" title="Reviving Retro PCs" img={retroPC}>
          What happens when old PCs are given modern upgrades.
        </NewsItem>
        <NewsItem count="01" title="Reviving Retro PCs" img={retroPC}>
          What happens when old PCs are given modern upgrades.
        </NewsItem>
      </div>
    </div>
  );
};

export { NewsPage };

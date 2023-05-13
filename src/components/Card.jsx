import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import coming from '../assets/coming-soon.jpg';

const Card = ({
  image = coming,
  name = 'Coming Soon',
  html = true,
  css = true,
  js = false,
  responsive = false,
  link = null,
  description = 'Coming Soon',
}) => {
  const Wrapper = link ? Link : Fragment;
  const props = link ? { to: link, target: '_blank' } : {};

  return (
    <div
      className={`border rounded-t-xl overflow-hidden ${
        link ? 'cursor-pointer' : ''.trim()
      }`}
    >
      <Wrapper {...props}>
        <div className="aspect-[90/66] overflow-hidden">
          <img
            src={image}
            className={`w-full h-full object-cover ${
              link ? 'transition-transform duration-300 hover:scale-105' : ''
            }`}
            alt="Image"
          />
        </div>
        <div className="p-6">
          <h1 className="text-xl font-semibold">{name}</h1>
          <div className="my-2">
            {html && (
              <span className="pr-1 font-bold text-md text-[#6abecd]">
                HTML
              </span>
            )}
            {css && (
              <span className="px-1 font-bold text-md text-[#3e54a3]">CSS</span>
            )}
            {js && (
              <span className="px-1 font-bold text-md text-[#FF3784]">JS</span>
            )}
            {responsive && (
              <span className="px-1 font-bold text-md text-orange-600">
                RESPONSIVE
              </span>
            )}
          </div>
          <p className="text-[#737373]">{description}</p>
        </div>
      </Wrapper>
    </div>
  );
};

export { Card };

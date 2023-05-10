import { Link } from 'react-router-dom';

const Card = ({
  image,
  name = 'Challenge',
  html = true,
  css = true,
  js = true,
  link = '/',
  description = 'Description',
}) => {
  return (
    <div className=" w-[372px] border rounded-t-xl overflow-hidden cursor-pointer">
      <Link to={link} target="_blank">
        <div className="h-1/2 overflow-hidden">
          <img
            src={image}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
          </div>
          <p className="text-[#737373]">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export { Card };

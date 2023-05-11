import { cloneElement, isValidElement } from 'react';
import { BsLightningCharge } from 'react-icons/bs';
import { BiBrain } from 'react-icons/bi';
import { TbMessageCircle, TbEye } from 'react-icons/tb';

// function to convert hex to rgba
const hexToRgba = (hex, opacity) => {
  const hexValue = hex.replace('#', '');
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const Summary = ({ icon, title, score, color }) => (
  <div
    className="flex items-center justify-between p-4 rounded-xl mb-4"
    style={{ backgroundColor: hexToRgba(color, 0.09), color }}
  >
    <div>
      <span className="mr-2">
        {isValidElement(icon)
          ? cloneElement(icon, {
              ...icon.props,
              className: 'inline mb-[2px]',
              size: 20,
            })
          : icon}
      </span>
      <span>{title}</span>
    </div>
    <div className="text-black">
      {score} <span className="opacity-40">/ 100</span>
    </div>
  </div>
);

const ResultSummary = ({ result = 0, percentage = 100 }) => {
  return (
    <div className="shadow-lg w-[700px] flex justify-around">
      <div className="w-[50%] py-10 text-center rounded-s-3xl bg-gradient-to-t from-[#342eea] to-[#6341fb] text-white">
        <h1 className="text-[#cfc3ff] text-xl">Your Result</h1>
        <div className="h-48 w-48 flex flex-col items-center justify-center m-auto my-12 rounded-full bg-gradient-to-b from-[#342eea] to-[#6341fb]">
          <strong className="text-7xl">{result}</strong>
          <span className="text-gray-200">of 100</span>
        </div>
        <h2 className="text-3xl">Great</h2>
        <p className="text-[#b2aeff] mt-2 px-12">
          You scored higher than {percentage}% of the people who have taken
          these tests.
        </p>
      </div>
      <div className="w-[50%] rounded-s-3xl p-10">
        <h1 className="text-2xl font-bold">Summary</h1>
        <div className="mt-8">
          <Summary
            icon={<BsLightningCharge />}
            title="Reaction"
            score="10"
            color="#d56868"
          />
          <Summary
            icon={<BiBrain />}
            title="Memory"
            score="10"
            color="#fdbf47"
          />
          <Summary
            icon={<TbMessageCircle />}
            title="Verbal"
            score="10"
            color="#32b991"
          />
          <Summary icon={<TbEye />} title="Visual" score="10" color="#3a3c87" />
        </div>
        <button
          type="button"
          className="w-full mt-8 block bg-slate-600 py-4 rounded-full text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const Result = () => {
  return (
    <div className="fullpage-centered">
      <ResultSummary percentage={65} result={76} />
    </div>
  );
};

export { Result };

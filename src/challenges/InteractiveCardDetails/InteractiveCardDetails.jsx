import { useId, useMemo, useReducer } from 'react';
import { ReactComponent as Icon } from './card-logo.svg';
// import front from './bg-card-front.png';
// import back from './bg-card-back.png';
// import bg from './bg-main-desktop';

const Input = (props) => {
  const { label, className = '', ...rest } = props;
  const id = useId();

  return (
    <div className={`flex flex-col justify-start mb-6 ${className}`.trim()}>
      {label && (
        <label className="uppercase font-semibold mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input className="px-4 py-2 border rounded-md" id={id} {...rest} />
    </div>
  );
};

const InteractiveCardDetails = () => {
  const [{ name, cardNumber, cvv, date }, setState] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {
      name: '',
      cardNumber: '',
      date: '',
      cvv: '',
    }
  );

  const card = useMemo(() => {
    const arr = cardNumber.split(' ');
    for (let i = 0; i < 4; i++) {
      const item = arr[i];
      if (item) {
        arr[i] = item.padEnd(4, '0');
      } else {
        arr[i] = '0000';
      }
    }
    return arr;
  }, [cardNumber]);

  return (
    <div className="h-[100vh] bg-[url('./src/challenges/InteractiveCardDetails/bg-main-desktop.png')] bg-no-repeat w-full flex justify-around items-center">
      <div className="text-white">
        <div className="mr-20 mb-4 p-8 w-[450px] bg-[url('./src/challenges/InteractiveCardDetails/bg-card-front.png')] bg-no-repeat">
          <div className="mb-16">
            <Icon />
          </div>
          <div className="text-xl mb-6" style={{ letterSpacing: '10px' }}>
            {card.map((item, index) => (
              <span className="mr-4" key={index}>
                {item}
              </span>
            ))}
          </div>
          <div
            className="flex justify-between"
            style={{ letterSpacing: '3px' }}
          >
            <p className="uppercase">{name || 'Jane Appleseed'}</p>
            <p>{date || '00 / 00'}</p>
          </div>
        </div>
        <div className="ml-20 p-8 h-[250px] w-[500px] bg-[url('./src/challenges/InteractiveCardDetails/bg-card-back.png')] bg-no-repeat">
          <span className="relative top-[4.7rem] left-[20.5rem]">{cvv}</span>
        </div>
      </div>
      <form className="w-[500px] m-1 p-8">
        <Input
          placeholder="Jane Appleseed"
          label="Cardholder Name"
          value={name}
          onChange={(e) => setState({ name: e.target.value.toUpperCase() })}
        />
        <Input
          placeholder="1234 5678 9012 3456"
          label="Card Number"
          value={cardNumber}
          onChange={(e) => {
            const value = e.target.value;
            if (/[a-zA-Z]/.test(value)) return;

            if (value.length < cardNumber.length) {
              setState({ cardNumber: value.trim() });
              return;
            }

            const trimmedValue = e.target.value.replaceAll(' ', '');
            if (trimmedValue.length > 16) return;

            setState({
              cardNumber:
                trimmedValue.length % 4 === 0 && trimmedValue.length < 16
                  ? `${value} `
                  : value,
            });
          }}
        />
        <div className="flex justify-between">
          <Input
            placeholder="MM / YY"
            label="Exp. Date (MM/YY)"
            value={date}
            onChange={(e) => {
              const { value } = e.target;

              const cleanValue = value.replace(/\D/g, '');

              let formattedValue = cleanValue;
              if (cleanValue.length > 2) {
                const month = cleanValue.slice(0, 2);
                const year = cleanValue.slice(2, 4);
                formattedValue = `${month} / ${year}`;
              }

              setState({ date: formattedValue });
            }}
          />
          <Input
            placeholder="CVV"
            label="CVV"
            value={cvv}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length > 3) return;

              setState({ cvv: value });
            }}
          />
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="w-full text-white rounded-lg py-2 bg-[#220930]"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export { InteractiveCardDetails };

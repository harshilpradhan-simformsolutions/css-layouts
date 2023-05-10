import { Card } from '../components/Card';

import { challenges } from '../challenges/challenges';

export const Home = () => {
  return (
    <div className="mx-10">
      <h1 className="text-center text-4xl uppercase font-bold my-6">
        Challenges
      </h1>
      {challenges.map((props) => (
        <Card key={props.id} {...props} />
      ))}
    </div>
  );
};

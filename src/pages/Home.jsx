import { Card } from '../components/Card';

import { challenges } from '../challenges/challenges';

export const Home = () => (
  <>
    <h1 className="text-center text-4xl uppercase font-bold my-6">
      Challenges
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10">
      {challenges.map((props) => (
        <Card key={props.id} {...props} />
      ))}
    </div>
  </>
);

import React, {useState} from 'react';

import Counter from '../../components/Counter';
import IncrementButton from '../../components/IncrementButton';
import DecrementButton from '../../components/DecrementButton';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <DecrementButton />
      <Counter value={count} />
      <IncrementButton />
    </div>
  );
}

import React, {useState, useEffect} from 'react';

import Counter from '../../components/Counter';
import IncrementButton from '../../components/IncrementButton';
import DecrementButton from '../../components/DecrementButton';

export default function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  return (
    <div>
      <DecrementButton onClick={() => setCount(count - 1)} />
      <Counter value={count} />
      <IncrementButton onClick={() => setCount(count + 1)} />
    </div>
  );
}

import React, {useState, useEffect} from 'react';

import Counter from '../../components/Counter';
import Button from '../../components/Button';

export default function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  return (
    <div>
      <Button onClick={() => setCount(count - 1)}>
        -
      </Button>
      <Counter value={count} />
      <Button onClick={() => setCount(count + 1)}>
        +
      </Button>
    </div>
  );
}

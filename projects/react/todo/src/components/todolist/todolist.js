import React, { useState } from 'react';

function Todolist() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          setItems([...items, value]);
          setValue('');
        }}
      >
        Add todo
      </button>
      <div>
        {(items.length &&
          items?.map((todo) => {
            return <p>{todo}</p>;
          })) || <p>No todo yet</p>}
      </div>
    </>
  );
}

export default Todolist;

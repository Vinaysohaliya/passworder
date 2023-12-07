import React, { useEffect, useState } from 'react';

const App = () => {
  const [range, setRange] = useState(6);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const [res, setRes] = useState('');

  function generatePassword() {
    let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (num) {
      a += '123456789';
    }
    if (char) {
      a += '!@#$%^&*()_+';
    }
    let pass = '';

    for (let i = 0; i < range; i++) {
      let c = Math.floor(Math.random() * a.length);
      pass += a.charAt(c);
    }
    setRes(pass);
  }

  useEffect(() => {
    generatePassword();
  }, [char, num, range]);

  return (
    <div>
      <label>Password</label>
      <input type='text' readOnly value={res} />

      <label>Range</label>
      <input type='range' min={6} max={100} onChange={(e) => setRange(e.target.value)} value={range}></input>
      <div>Current Range: {range}</div>

      <label>Include Characters</label>
      <input type='checkbox' onChange={() => setChar(!char)} />

      <label>Include Numbers</label>
      <input type='checkbox' onChange={() => setNum(!num)} />
    </div>
  );
};

export default App;

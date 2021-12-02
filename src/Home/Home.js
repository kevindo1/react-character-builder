import React from 'react';
import { useState } from 'react';
import bg from '../bg.jpeg';

import Editor from '../Editor/Editor';

export default function Home() {
  const [head, setHead] = useState('bird-head');
  const [middle, setMiddle] = useState('blue-middle');
  const [bottom, setBottom] = useState('leg-pants');
  const [catchphrase, setCatchphrase] = useState('Catchphrase');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [catchphraseCount, setCatchphraseCount] = useState(0);

  return (
    <>
      <main className="home" style={{ backgroundImage: `url(${bg})` }}>
        {/* pass the state variables as props to the presentational components */}
        <Editor
          {...{
            head,
            setHead,
            middle,
            setMiddle,
            bottom,
            setBottom,
            catchphrase,
            setCatchphrase,
            headCount,
            setHeadCount,
            middleCount,
            setMiddleCount,
            bottomCount,
            setBottomCount,
            catchphraseCount,
            setCatchphraseCount,
          }}
        />
        {!!headCount && <p>You have changed head {headCount} times</p>}
        {!!middleCount && <p>You have changed head {middleCount} times</p>}
        {!!bottomCount && <p>You have changed head {bottomCount} times</p>}
      </main>
    </>
  );
}

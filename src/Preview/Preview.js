import Editor from '../Editor/Editor';
import { useState } from 'react';
import React from 'react';

export default function Preview() {
  const [head, setHead] = useState('bird-head');
  const [middle, setMiddle] = useState('blue-middle');
  const [bottom, setBottom] = useState('leg-pants');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [phrase, setPhrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);

  return (
    <>
      <Editor
        {...{
          head,
          setHead,
          middle,
          setMiddle,
          bottom,
          setBottom,
          headCount,
          setHeadCount,
          middleCount,
          setMiddleCount,
          bottomCount,
          setBottomCount,
          setPhraseList,
          phrase,
          setPhrase,
        }}
      />
      <div className="parts">
        <img src={`${process.env.PUBLIC_URL}/images/${head}.png`} />
        <img src={`${process.env.PUBLIC_URL}/images/${middle}.png`} />
        <img src={`${process.env.PUBLIC_URL}/images/${bottom}.png`} />
      </div>
      {!!headCount && <p>You have changed your head {headCount} times!</p>}
      {!!middleCount && <p>You have changed your middle {middleCount} times!</p>}
      {!!bottomCount && <p>You have changed your legs {bottomCount} times!</p>}
      {!!phraseList.length && (
        <div>
          <span>Catchphrases:</span>
          {phraseList.map((elem) => (
            <p key={elem}>{elem}</p>
          ))}
        </div>
      )}
    </>
  );
}

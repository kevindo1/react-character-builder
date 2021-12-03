import React from 'react';
import './Editor.css';

export default function Editor({
  head,
  setHead,
  middle,
  setMiddle,
  bottom,
  setBottom,
  phrase,
  setHeadCount,
  setMiddleCount,
  setBottomCount,
  setPhraseList,
  setPhrase,
}) {
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };
  const handleMiddle = (e) => {
    setMiddle(e.target.value);
    setMiddleCount((prevState) => prevState + 1);
  };
  const handleBottom = (e) => {
    setBottom(e.target.value);
    setBottomCount((prevState) => prevState + 1);
  };
  const handleClick = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhrase('');
  };

  return (
    <div className="editor">
      <select value={head} onChange={handleHead}>
        <option value="bird-head">{'Bird'}</option>
        <option value="duck-head">Duck</option>
        <option value="dog-head">Dog</option>
        <option value="horse-head">Horse</option>
      </select>
      <select value={middle} onChange={handleMiddle}>
        <option value="blue-middle">{'Blue'}</option>
        <option value="dress-middle">Fancy</option>
        <option value="pink-middle">Pink</option>
        <option value="red-middle">Red</option>
      </select>
      <select value={bottom} onChange={handleBottom}>
        <option value="leg-pants">{'Single Leg'}</option>
        <option value="white-pants">White Pants</option>
        <option value="blue-pants">Blue Jeans</option>
      </select>
      <input type="text" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
      <button className="btn" onClick={handleClick}>
        Add Catchphrase
      </button>
    </div>
  );
}

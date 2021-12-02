import React from 'react';
import './Editor.css';

export default function Editor({
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
}) {
  return (
    <div className="editor">
      <div className="head" value={head} onChange={(e) => setHead(e.target.value)}>
        <label>Head</label>
        <select>
          <option value="bird-head">{'Bird'}</option>
          <option value="duck-head">Duck</option>
          <option value="dog-head">Dog</option>
          <option value="horse-head">Horse</option>
        </select>
      </div>
      <div className="middle" value={middle} onChange={(e) => setMiddle(e.target.value)}>
        <label>Middle</label>
        <select>
          <option value="blue-middle">{'Blue'}</option>
          <option value="dress-middle">Fancy</option>
          <option value="pink-middle">Pink</option>
          <option value="red-middle">Red</option>
        </select>
      </div>
      <div className="bottom" value={bottom} onChange={(e) => setBottom(e.target.value)}>
        <label>Bottom</label>
        <select>
          <option value="leg-pants">{'Single Leg'}</option>
          <option value="white-pants">White Pants</option>
          <option value="blue-pants">Blue Jeans</option>
        </select>
      </div>
      <div
        className="catchphrase"
        value={catchphrase}
        onInput={(e) => setCatchphrase(e.target.value)}
      >
        <label>Add a catchphrase</label>
        <textarea style={{ height: '10px' }} />
        <button className="btn">Add</button>
      </div>
      <div className="parts">
        <img src={`${process.env.PUBLIC_URL}/images/${head}.png`} />
        <img src={`${process.env.PUBLIC_URL}/images/${middle}.png`} />
        <img src={`${process.env.PUBLIC_URL}/images/${bottom}.png`} />
      </div>
    </div>
  );
}

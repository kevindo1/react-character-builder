import React from 'react';
import bg from '../bg.jpeg';
import Preview from '../Preview/Preview';

export default function Home(head, middle, bottom, catchphrase) {
  return (
    <>
      <main className="home" style={{ backgroundImage: `url(${bg})` }}>
        {/* pass the state variables as props to the presentational components */}
        <Preview {...{ head, middle, bottom, catchphrase }} />
      </main>
    </>
  );
}

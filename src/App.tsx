import React, { useState } from 'react';
import { app } from './firebaseApp';
import { useCollection } from 'react-firebase-hooks/firestore';
import Nav from './components/Nav/Nav';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  const [opened, setOpened] = useState(false);
  const [images, landingLoading, landingError] = useCollection(
    app.firestore().collection('landing-page-img'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const landingImages = images?.docs.map(doc => doc.data()?.images)

  function closeNav() {
    setOpened(!opened);
  }

  return (
    <div className='App'>
      <header>
        <div className='nav-close' onClick={closeNav}>
          {opened ? 'X' : '='}
        </div>
        <Nav isOpened={opened} setOpened={setOpened} />

        <LandingPage landingImages={landingImages} landingLoading={landingLoading} ladingError={landingError} />
      </header>
    </div>
  );
}

export default App;

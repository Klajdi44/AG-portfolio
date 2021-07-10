import React, { useState } from 'react'
import { app } from './firebaseApp'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getTranslations } from './translations/getTranslation';
import Nav from './components/Nav/Nav';


function App() {
  const [lang, setLange] = useState('en');
  const [opened, setOpened] = useState(false)
  const [showNavClose, setShowNavClose] = useState(true);
  const testCollection = app.firestore().collection('test');
  const dbQuery = testCollection.where('lang', '==', lang)
  const [data, loading, error] = useCollectionData(dbQuery, {
    idField: 'id',
  });


  function handleChange(selectedLang: string) {
    setLange(selectedLang)
  }
  function closeNav() {
    setOpened(!opened)
  }

  return (
    <div className="App">
      {/* <details>
        <summary> Language</summary>
        <button onClick={() => handleChange('en')}>English</button>
        <button onClick={() => handleChange('pl')}>Polish</button>
      </details>

      <h1> {getTranslations(lang, 'portfolio')}</h1>
      <h1> {getTranslations(lang, 'aboutme')}</h1>

      {loading && <div>Loading </div>}
      {data && <div> {data[0].aboutMe}</div>} */}

      <header>
        <div className='nav-close' onClick={closeNav}>
          {opened ? 'X' : '='}
        </div>
        <Nav isOpened={opened} setOpened={setOpened} />

      </header>
    </div>
  )
}

export default App

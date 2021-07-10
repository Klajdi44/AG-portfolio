import React, { useState } from 'react'
import { app } from './firebaseApp'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getTranslations } from './translations/getTranslation';
function App() {
  const [lang, setLange] = useState('en');

  const testCollection = app.firestore().collection('test');
  const dbQuery = testCollection.where('lang', '==', lang)
  const [data, loading, error] = useCollectionData(dbQuery, {
    idField: 'id',
  });

  //   const dbQuery = messageCollection
  //   .where('chatroom', '==', selectedRoom)
  //   .orderBy('createdAt', 'asc');

  // const [messages, loading, error] = useCollectionData(dbQuery, {
  //   idField: 'id',
  // });


  console.log(import.meta.env.VITE_API_KEY);

  console.log(data);

  const [count, setCount] = useState(0)

  function handleChange(selectedLang: string) {
    setLange(selectedLang)
  }

  return (
    <div className="App">
      <details>
        <summary> Language</summary>
        <button onClick={() => handleChange('en')}>English</button>
        <button onClick={() => handleChange('pl')}>Polish</button>
      </details>

      <h1> {getTranslations(lang, 'portfolio')}</h1>
      <h1> {getTranslations(lang, 'aboutme')}</h1>

      {loading && <div>Loading </div>}
      {data && <div> {data[0].aboutMe}</div>}
    </div>
  )
}

export default App

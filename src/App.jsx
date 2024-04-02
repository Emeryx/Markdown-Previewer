import React, { useState } from 'react';
import './App.sass';
import {marked} from 'marked'
import {template} from './Template.js'

marked.setOptions({
    breaks: true
});

function App() {

  const [value, setValue] = useState(template);
  const [preview, setPreview] = useState(marked.parse(value));

  const handleChange = (e) => {
    setValue(e.target.value);
    setPreview(marked.parse(e.target.value));
  }

  return (
    <div className="App">
      <textarea id='editor' value={value} onChange={handleChange}></textarea>
      <div id='preview' dangerouslySetInnerHTML={{ __html : preview }}></div>
    </div>
  );
}

export default App;

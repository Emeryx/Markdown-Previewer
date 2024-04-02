import React, { useEffect, useState } from 'react';
import './App.sass';
import {marked} from 'marked'

function App() {

  const [value, setValue] = useState<string>('<h1>Hi! Welcome to the project</h1>\n\n<h2>I am a cute sub heading</h2>\n\n>**Wowzers!**');
  const [preview, setPreview] = useState<string>('');

  const handleChange = (e : React.ChangeEvent<HTMLTextAreaElement> ) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    console.log("Value changed");
    const markdown = async () => {
      try{
        const result = await marked(value);
        setPreview(result);
      }
      catch (err){
        console.error(err);
      }
    }
    markdown();
  } , [value])

  return (
    <div className="App">
      <textarea id='editor' value={value} onChange={handleChange}></textarea>
      <div id='preview' dangerouslySetInnerHTML={{ __html : preview }}></div>
    </div>
  );
}

export default App;

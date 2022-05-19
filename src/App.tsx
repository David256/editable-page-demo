import { useState } from 'react';
import './App.sass'

import { EditableDiv } from './components/Editable/EditableDiv/EditableDiv';
import { EditableLabel } from './components/Editable/EditableLabel/EditableLabel';

function App() {
  const [label, setLabel] = useState<string>('Editable Label');
  const [html, setHtml] = useState('');

  return (
    <div className="App">
      <h1>Editable Page Demo</h1>

      <p>
        <strong>USAGE</strong>: click the button to toggle the editable state.
        After modifying the field, click out of the component or press Escape to save.
      </p>

      <br />

      <EditableLabel
        text={label}
        save={(text) => setLabel(text)}
      />

      <br />

      <p>
        <strong>Text:</strong> <span>"{label}"</span>
      </p>

      <br />

      <EditableDiv
        html='<b>hola</b>'
        save={(saved) => setHtml(saved)}
        height={100}
        width={300}
      />

      <textarea value={html}/>
    </div>
  )
}

export default App

import { useState } from 'react';
import './App.sass'

import { EditableLabel } from './components/Editable/EditableLabel/EditableLabel';

function App() {
  const [label, setLabel] = useState<string>('Editable Label');

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
      <br />

      <p>
        <strong>Text:</strong> <span>"{label}"</span>
      </p>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react';
import './App.sass'

import { Button } from './components/Button/Button';
import { EditableLabel } from './components/EditableLabel/EditableLabel';

function App() {
  const [label, setLabel] = useState<string>('Editable Label');
  const [isEditable, setIsEditable] = useState(false);
  const [buttonText, setButtonText] = useState('Edit: off');
  const [buttonClass, setButtonClass] = useState('red-ize');

  const toggleEditable = () => {
    console.log('toggle editable to', isEditable);
    setIsEditable(!isEditable);
  };

  useEffect(() => {
    if (isEditable) {
      setButtonText('Edit: off');
      setButtonClass('red-ize');
    } else {
      setButtonText('Edit: on');
      setButtonClass('green-ize');
    }
  }, [isEditable]);

  return (
    <div className="App">
      <h1>Editable Page Demo</h1>

      <p>
        <strong>USAGE</strong>: click the button to toggle the editable state. After modifying the field, click out of the component or press Escape to save.
      </p>

      <br />

      <Button
        onClick={toggleEditable}
        className={buttonClass}
      >
        {buttonText}
      </Button>

      <br /><br />

      <EditableLabel
        text={label}
        save={(text) => setLabel(text)}
        editable={isEditable}
        setEditable={setIsEditable}
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

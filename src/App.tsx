import { useState } from 'react';
import './App.sass'

import { Button } from './components/Button/Button';
import { EditableLabel } from './components/EditableLabel/EditableLabel';

function App() {
  const [label, setLabel] = useState<string>('Editable Label');
  const [isEditable, setIsEditable] = useState(false);
  const [buttonText, setButtonText] = useState('Edit');
  const [buttonClass, setButtonClass] = useState('');

  const toggleEditable = () => {
    console.log('toggle editable to', isEditable);
    if (isEditable) {
      setButtonText('Edit');
      setButtonClass('');
    } else {
      setButtonText('No edit');
      setButtonClass('red-ize');
    }
    setIsEditable(!isEditable);
  };

  return (
    <div className="App">
      <h1>Editable Page Demo</h1>

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
      />
    </div>
  )
}

export default App

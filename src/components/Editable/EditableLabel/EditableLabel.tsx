import React, { useState, useEffect, useRef } from 'react';

import { Editable } from '../Editable';

import './EditableLabel.sass';

export interface EditableLabelProps {
  text: string,
  save: (text: string) => void,
};

export function EditableLabel(props: EditableLabelProps) {
  const {
    text,
    save,
  } = props;

  const [isEditable, setIsEditable] = useState(false);
  const [currentText, setCurrentText] = useState(text);
  const ref = useRef<HTMLDivElement>();

  // If `currentText` change, we save that value
  useEffect(() => {
    save(currentText);
  }, [currentText]);

  useEffect(() => {
    if (isEditable && currentText === '') {
      (ref.current as HTMLElement).textContent = '';
    } else {
      (ref.current as HTMLElement).focus();
    }
  }, [isEditable]);

  const onSave = () => {
    console.log('saving...', currentText);
    if (ref.current) {
      const current = ref.current as unknown as HTMLDivElement;
      console.log(current);
      setCurrentText(current.textContent || '');
    }
    setIsEditable(false);
  }

  return (
    <Editable
      editable={isEditable}
      onEditable={setIsEditable}
    >
      <div
        ref={ref as unknown as React.LegacyRef<HTMLDivElement>}
        className="EditableLabel"
        contentEditable={isEditable}
        onBlur={onSave}
        onKeyDown={(e) => e.key === 'Escape' && onSave()}
        suppressContentEditableWarning={true}
      >
        {currentText || '<Empty field>'}
      </div>
    </Editable>
  );
}

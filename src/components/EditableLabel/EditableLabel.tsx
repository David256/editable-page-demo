import React, { useState, useEffect, useRef } from 'react';
import './EditableLabel.sass';

export interface EditableLabelProps {
  text: string,
  save: (text: string) => void,
  editable?: boolean,
  setEditable: (editable: boolean) => void,
};

export function EditableLabel(props: EditableLabelProps) {
  const {
    text,
    save,
    editable=false,
    setEditable,
  } = props;

  const [currentText, setCurrentText] = useState(text);
  const [className, setClassName] = useState<string>('EditableLabel');
  const ref = useRef<React.RefObject<HTMLDivElement>>();

  const textContent = `${text}`;

  useEffect(() => {
    let newClassName = 'EditableLabel';
    if (editable) {
      newClassName = newClassName.concat(' Editable');
    }
    setClassName(newClassName);
    console.log('change className to', newClassName);
  }, [editable, setClassName]);

  useEffect(() => {
    save(currentText);
  }, [currentText]);

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // setCurrentText(ref.current.innerHTML);
    if (e.key === 'Escape') {
      // console.log(ref.current.innerHTML);
      onSave();
    }
  }

  const onSave = () => {
    console.log('saving...', currentText);
    setCurrentText(ref.current.innerHTML);
    setEditable(false);
  }

  return (
    <div
      ref={ref}
      className={className}
      contentEditable={editable}
      onBlur={onSave}
      onKeyDown={keyDownHandler}
      suppressContentEditableWarning={true}
    >
      {textContent || '<Empty field>'}
    </div>
  );
}

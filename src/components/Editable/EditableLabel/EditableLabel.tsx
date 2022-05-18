import React, { useState, useEffect, useRef } from 'react';

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
  const [isOver, setIsOver] = useState(false);
  const [currentText, setCurrentText] = useState(text);
  const [className, setClassName] = useState<string>('EditableLabel');
  const ref = useRef<HTMLDivElement>();

  const textContent = `${text}`;

  useEffect(() => {
    let newClassName = 'EditableLabel-field';
    if (isEditable) {
      newClassName = newClassName.concat(' Editable');
    }
    setClassName(newClassName);
    console.log('change className to', newClassName);
  }, [isEditable, setClassName]);

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

  const onEditIconClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsEditable(true);
  }

  const onSave = () => {
    console.log('saving...', currentText);
    if (ref.current) {
      const current = ref.current as unknown as HTMLDivElement;
      console.log(current);
      setCurrentText(current.innerHTML);
      // setCurrentText(current.textContent || '');
    }
    setIsEditable(false);
  }

  return (
    <div
      className="EditableLabel"
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <div
        ref={ref as unknown as React.LegacyRef<HTMLDivElement>}
        className={className}
        contentEditable={isEditable}
        onBlur={onSave}
        onKeyDown={keyDownHandler}
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{__html: text}}
      >
        {/* {textContent || '<Empty field>'} */}
      </div>
      <div className="EditableLabel-logo">
        <img
          style={{
            display: isOver ? 'inline' : 'none'
          }}
          src="./editable.svg"
          className="icon"
          onClick={onEditIconClick}
        />
      </div>
    </div>
  );
}

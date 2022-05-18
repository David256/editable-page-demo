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

  const [isOver, setIsOver] = useState(false);
  const [currentText, setCurrentText] = useState(text);
  const [className, setClassName] = useState<string>('EditableLabel');
  const ref = useRef<HTMLDivElement>();

  const textContent = `${text}`;

  useEffect(() => {
    let newClassName = 'EditableLabel-field';
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
    if (ref.current) {
      const current = ref.current as unknown as HTMLDivElement;
      console.log(current);
      setCurrentText(current.innerHTML);
      // setCurrentText(current.textContent || '');
    }
    setEditable(false);
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
        contentEditable={editable}
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
        />
      </div>
    </div>
  );
}

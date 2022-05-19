import React, { useState, useEffect, useRef } from 'react';

import { Editable } from '../Editable';

import './EditableDiv.sass';

export interface EditableDivProps {
  width?: number,
  height?: number,
  html: string,
  save: (text: string) => void,
};

export function EditableDiv(props: EditableDivProps) {
  const {
    width=10,
    height=10,
    html,
    save,
  } = props;

  const [isEditable, setIsEditable] = useState(false);
  const [currentHTML, setCurrentHTML] = useState(html);
  const ref = useRef<HTMLDivElement>();

  const htmlContent = `${currentHTML}`;

  // If `currentHTML` change, we save that value
  useEffect(() => {
    save(currentHTML);
  }, [currentHTML]);

  const onSave = () => {
    if (ref.current) {
      const current = ref.current as unknown as HTMLDivElement;
      console.log('saving...', current.innerHTML);
      setCurrentHTML(current.innerHTML);
    }
    setIsEditable(false);
  }

  return (
    <Editable
      editable={isEditable}
      onEditable={setIsEditable}
    >
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        ref={ref as unknown as React.LegacyRef<HTMLDivElement>}
        className="EditableDiv"
        contentEditable={isEditable}
        onBlur={onSave}
        onKeyDown={(e) => e.key === 'Escape' && onSave()}
        dangerouslySetInnerHTML={{__html: htmlContent}}
        suppressContentEditableWarning={true}
      ></div>
    </Editable>
  );
}

import { useState } from 'react';
import './Editable.sass';

export interface EditableProps {
  children: React.ReactNode,
  editable?: boolean,
  onEditable?: (editable: boolean) => void,
};

export function Editable(props: EditableProps) {
  const {
    children,
    editable=false,
    onEditable=() => {},
  } = props;

  const [isOver, setIsOver] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <div
        className={editable ? 'Editable Editable-active':'Editable'}
      >{children}</div>
      <div className="Editable-edit-button">
        <img
          style={{
            display: isOver ? 'inline' : 'none'
          }}
          src="./editable.svg"
          className="Editable-edit-icon"
          onClick={() => onEditable(true)}
        />
      </div>
    </div>
  );
}

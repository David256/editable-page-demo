import { useState, useEffect } from 'react';
import './EditableLabel.sass';

export interface EditableLabelProps {
  text: string,
  save: (text: string) => void,
  editable?: boolean,
};

export function EditableLabel(props: EditableLabelProps) {
  const {
    text,
    save,
    editable=false,
  } = props;

  const [className, setClassName] = useState<string>('EditableLabel');

  useEffect(() => {
    let newClassName = 'EditableLabel';
    if (editable) {
      newClassName = newClassName.concat(' Editable');
    }
    setClassName(newClassName);
    console.log('change className to', newClassName);
  }, [editable, setClassName]);

  return (
    <div className={className}>
      {text}
    </div>
  );
}

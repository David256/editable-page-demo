import './Button.sass';

export interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  onClick?: () => void,
};

export function Button(props: ButtonProps) {
  const {
    children,
    className='',
    onClick=() => {},
  } = props;

  const getClassName = () => {
    if (className) return `Button ${className}`;
    return 'Button';
  }

  return (
    <button
      className={getClassName()}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

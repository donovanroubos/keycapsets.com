import React from 'react';

interface ArrowProps {
    size?: Number;
    color?: string;
}

function Arrow(props: ArrowProps): JSX.Element {
    const {
      size,
      color,
    } = props;

    return (
        <svg className="arrow" xmlns='http://www.w3.org/2000/svg' width={size.toString()} height={size.toString()} viewBox='0 0 24 24' fill='none' stroke={color}
            strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M5 12h13M12 5l7 7-7 7' /></svg>
    );
}


Arrow.defaultProps = {
  size: 24,
  color: '#539BFB',
}

export default Arrow;

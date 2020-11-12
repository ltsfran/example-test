import React, { useState } from 'react';
import { Fade } from './../Fade';

export function HiddenMessage({ initialShow = false }) {
  const [ show, setShow ] = useState(initialShow);

  const toggle = () => {
    setShow(!show);
  };

  return(
    <div>
      <button onClick={toggle}>Toggle</button>
      <Fade in={show}>
        <div>Hello World</div>
      </Fade>
    </div>
  );
};

HiddenMessage.displayName = 'HiddenMessage';

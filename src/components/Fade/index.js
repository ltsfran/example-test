import React from 'react';
import { CSSTransition } from 'react-transition-group';

export function Fade({ children, ...props }) {
  return(
    <CSSTransition {...props} timeout={1000} classNames="fade">
      {children}
    </CSSTransition>
  );
};

Fade.displayName = 'Fade';

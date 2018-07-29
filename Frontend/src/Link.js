import React from 'react';

// This specifies only how the link is shown
export const Link = ({
                       active,
                       children,
                       onLinkClick
                     }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <button
      onClick={e => {
        e.preventDefault();
        onLinkClick();
      }}
    >
      {children}
    </button>
  )
};
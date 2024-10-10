import React, { forwardRef } from 'react';

export const Product = forwardRef(({ name }, ref) => {
  return <input ref={ref} defaultValue={name} />;
});

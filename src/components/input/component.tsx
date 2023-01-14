import React, { forwardRef, Ref } from 'react';

interface Props {
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ placeholder }, ref) => {
  return <input ref={ref} placeholder={placeholder} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm py-1" />;
});

export default Input;

Input.displayName = "Input"
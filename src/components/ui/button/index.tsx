import React from 'react';

export default function Button(props: React.ComponentProps<'button'>) {
   return (
      <button className={'rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'} {...props} />
   );
}

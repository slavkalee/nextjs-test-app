import React, { memo } from 'react';

export default memo(function AsideRight({ children }) {
  return <div className='user-info'>{children}</div>;
});

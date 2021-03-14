import React, { forwardRef, ReactChildren, ReactChild, RefObject } from 'react';
import { Helmet } from 'react-helmet';

export interface PageProps {
  children: ReactChild | ReactChildren;
  ref: RefObject<HTMLDivElement>
  title: string;
}

export const HelmetPage = forwardRef(({
  children,
  title = '',
  ...rest
}: PageProps) => {
  return (
    <div
      {...rest}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

'use client';
import { useEffect } from 'react';
import { setCookie } from 'cookies-next';

interface Prop {
  children: React.ReactNode;
}
function Guard({ children }: Prop): JSX.Element {
  useEffect(() => {
    setCookie('session', '');
  }, []);

  return <>{children}</>;
}

export default Guard;

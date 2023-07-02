'use client';
import { useEffect } from 'react';
import { type User } from '@/models';
import { type StructureStore } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

interface Prop {
  children: React.ReactNode;
}
function Guard({ children }: Prop): JSX.Element {
  useEffect(() => {
    const user: User = useSelector((store: StructureStore) => store.user);
    const path = useRouter();
    user.document || path.push('/');
  }, []);

  return <>{children}</>;
}

export default Guard;

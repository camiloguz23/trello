'use client';
import { Provider } from 'react-redux';
import store from '@/store/store';

interface Prop {
  children: React.ReactNode;
}
function Providers({ children }: Prop): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;

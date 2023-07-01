import { Guard } from '@/guard';

interface Prop {
  children: React.ReactNode;
}
function layout({ children }: Prop): JSX.Element {
  return <Guard>{children}</Guard>;
}

export default layout;

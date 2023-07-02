import Providers from '@/providers/Providers';
import './globals.scss';
import { Montserrat } from 'next/font/google';
import { Header } from '@/components';

const inter = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--montserrate'
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <Providers>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}

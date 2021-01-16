import Link from 'next/link';
import Head from 'next/head';
import AsideLeft from './AsideLeft';

export function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>Test App</title>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="this is test app" />
        <meta charSet="utf-8" />
      </Head>
      <AsideLeft />
      <main>
        <h1 style={{ marginBottom: '30px'}}>{title}</h1>
        {children}
      </main>
    </>
  );
}
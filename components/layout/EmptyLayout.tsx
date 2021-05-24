import Head from 'next/head';
import React from 'react';

interface EmptyLayoutProps {
  children: React.ReactNode;
}

const EmptyLayout: React.FC<EmptyLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Авторизация</title>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="this is test app" />
        <meta charSet="utf-8" />
      </Head>
      <div className="empty__layout">{children}</div>
    </>
  );
};

export default EmptyLayout;

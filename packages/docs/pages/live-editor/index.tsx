import * as React from 'react';
import Head from 'next/head';
import HeaderNavigation from '../../components/header-navigation';
import { LiveEditor } from '../../components/liveEditor';

const LiveEditorPage = (): React.ReactElement => (
  <>
    <Head>
      <title key="title">
        {process.env.NODE_ENV !== 'production' ? '[DEV] ' : ''}
        Spaceweb - Live Editor
      </title>
    </Head>
    <HeaderNavigation toggleSidebar={(): boolean => false} />
    <LiveEditor />
  </>
);

export default LiveEditorPage;

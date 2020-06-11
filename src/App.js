import React from 'react';
import './App.css';

import { Page, Layout } from '@shopify/polaris';

import Info from './components/Info';
import Registration from './components/Registration';

function App() {

  return (
    <Page title="Stock Oracle">
      <Layout>
        <Registration />
        <Info />
      </Layout>
    </Page>
  );
}

export default App;

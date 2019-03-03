import * as React from 'react';
import { Route, Switch } from 'react-router';
// import MainPage from './pages/main/MainPage';
// import PostPage from './pages/PostPage';

import loadable from '@loadable/component';
import Core from './containers/base/Core';
import { CoreProvider } from './contexts/CoreContext';
const MainPage = loadable(() => import('./pages/main/MainPage'));
const PostPage = loadable(() => import('./pages/PostPage'));

interface AppProps {}

const App: React.SFC<AppProps> = props => {
  return (
    <CoreProvider>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/:mode(trending|recent|following)" component={MainPage} />
        <Route path="/@:username/:urlSlug" component={PostPage} />
      </Switch>
      <Core />
    </CoreProvider>
  );
};

export default App;

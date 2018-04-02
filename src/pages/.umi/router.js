import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import('/home/dx/app/liuhuachao/github-page/src/global.less');
import Layout from '/home/dx/app/liuhuachao/github-page/src/layouts/index.js';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Layout><Switch>
    <Route exact path="/about" component={require('../about/page.js').default} />
    <Route exact path="/classify" component={require('../classify/page.js').default} />
    <Route exact path="/form" component={() => React.createElement(require('/home/dx/app/liuhuachao/github-page/node_modules/_umi-build-dev@0.12.1@umi-build-dev/lib/Compiling.js').default, { route: '/form' })} />
    <Route exact path="/helper" component={() => React.createElement(require('/home/dx/app/liuhuachao/github-page/node_modules/_umi-build-dev@0.12.1@umi-build-dev/lib/Compiling.js').default, { route: '/helper' })} />
    <Route exact path="/home/" component={() => React.createElement(require('/home/dx/app/liuhuachao/github-page/node_modules/_umi-build-dev@0.12.1@umi-build-dev/lib/Compiling.js').default, { route: '/home/' })} />
    <Route exact path="/" component={require('../index.js').default} />
    <Route exact path="/log" component={require('../log/page.js').default} />
  </Switch></Layout>
</Router>
  );
}

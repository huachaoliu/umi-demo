import { Layout, Divider, Icon } from 'antd';
import { connect } from 'dva';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import css from './index.less'
import Sider from 'components/Sider';
import Header from 'components/Header';
import Footer from 'components/Footer';
import config from '../utils/config';

const { slogan, logo, qrcode } = config;

const App = (props) => {
  const { global, dispatch, location } = props;
  const { collapsed } = global;
  const toggle = () => {
    dispatch({ type: 'global/changeCollapsed' });
  };

  const headerProps = {
  };

  const rightTypes = [{
    id: 'log',
    name: '日志',
    path: '/log',
    total: 0
  }, {
    id: 'type',
    name: '类别',
    path: '/classify',
    total: 2
  }, {
    id: 'tag',
    name: '标签',
    path: '/',
    total: 0
  }];
  if (location.pathname === '/form') {
    return props.children;
  }

  return (
    <Layout style={{ minHeight: '100vh', flexDirection: 'row' }}>
      <Layout className={css.main}>
        <Header {...headerProps} />
        <div className="content">{props.children}</div>
        <Footer />
      </Layout>
      <Sider
        width={320}
        collapsible
        collapsed={collapsed}
        onCollapse={toggle}
        >
        <div className={css.siderBar}>
          <div className={css.top}>
            <img src={logo} alt="头像" />
            <p>{slogan}</p>
          </div>
          <div className={css.github}>
            <a href="https://github.com/huachaoliu" target="_blanck">
              <Icon type="github" /><span>GitHub</span>
            </a>
          </div>
          <div className={css.type}>
            {
              rightTypes.map((rt, i) => {
                return <div key={rt.id} className={css.tag}>
                  <div className={css.tagContent}>
                    <span>{rt.total}</span>
                    <Link to={rt.path}>{rt.name}</Link>
                  </div>
                  {i < rightTypes.length - 1 && <Divider style={{ height: '100%', background: '#555' }} type="vertical" />}
                </div>
              })
            }
          </div>
          <div className={css.qrcode}>
            <img data-type="qrcode" src={qrcode} alt="二维码" />
          </div>
        </div>
      </Sider>
    </Layout>
  );
}

export default withRouter(connect(({ global }) => ({ global }))(App));
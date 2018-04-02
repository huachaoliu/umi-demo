import css from './index.less';
import { Icon } from 'antd';
import { setLocalStorage, getLocalStorage } from '../../utils';

export default (props) => {
  const {
    width,
    collapsible,
    collapsed,
    onCollapse,
    className,
  } = props;

  let defaultCollapsed = false;
  const collapsedCache = getLocalStorage('collapsed');
  if (collapsedCache === null) {
    setLocalStorage('collapsed', collapsed);
    defaultCollapsed = collapsed;
  } else {
    if (collapsedCache === 'true') {
      defaultCollapsed = Boolean(collapsedCache);
    }
  }

  const siderClass = css.sider + `${className ? ' ' + className : ''}`;
  const targetClass = defaultCollapsed ? css.sider + ` ${css.siderCollapsed}` : css.sider;
  const _style = {
    width: defaultCollapsed ? 40 : width,
  };

  const toggle = () => {
    onCollapse();
    setLocalStorage('collapsed', !defaultCollapsed);
  }

  const collapsedComponent = () => {
    const iconClass = defaultCollapsed ? 'menu-fold' : 'menu-unfold';
    return collapsible ? <div className={css.collapsed} onClick={toggle}>
      <Icon type={iconClass} />
    </div> : null;
  }

  return (
    <div className={targetClass} style={_style}>
      <div className={css.sideContent}>{props.children}</div>
      {collapsedComponent()}
    </div>
  )
};
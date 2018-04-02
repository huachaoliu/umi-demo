import { createElement } from 'react';
import css from './index.less';

export default (props) => {
  const { mode, name, className, noAnimate, ...rest } = props;
  const hType = mode || 1;
  const _class = noAnimate ? `${css.title} ${css.noAnimate}` : css.title;
  const tag = createElement(`h${hType}`, {
    className: _class,
    ...rest
  }, name);
  return tag;
};
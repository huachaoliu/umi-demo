import data from '../../data';
import css from './index.less';
import Title from '../../components/Title';
import Link from 'umi/link';
import { Divider, Button, message } from 'antd';

export default () => {
  const showTitle = (name) => {
    console.log(name);
  }

  const showAllText = () => {
    message.error('现在还阅读不了全文怎么办?');
  }

  return <div>
    {
      data.map((item, i) => {
        const { name, date, type, contens, links } = item;
        return <div key={i} className={css.article}>
          <div className={css.title}>
            <span>{i + 1}．</span>
            <Title name={name} onClick={showTitle.bind(null, name)} />
          </div>
          <div className={css.supTitle}>
            <span>发表于 <em>{date}</em></span>
            <Divider type="vertical" />
            <span>分类于 <Link to="/classify">{type}</Link></span>
          </div>
          <div className={css.content}>
            {
              contens.map((c, j) => {
                return <div key={j}>
                  <Title mode={2} name={c.title} noAnimate />
                  <p>{c.text}</p>
                </div>
              })
            }
          </div>
          <Button onClick={showAllText}>{links.name}</Button>
        </div>
      })
    }
  </div>
}
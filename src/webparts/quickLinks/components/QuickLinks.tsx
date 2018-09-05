import * as React from 'react';
import styles from './QuickLinks.module.scss';
import { IQuickLinksProps } from './IQuickLinksProps';

export default class QuickLinks extends React.Component<IQuickLinksProps, {}> {
  public render(): React.ReactElement<IQuickLinksProps> {
    const quicklinksd:any[]=JSON.parse(this.props.quicklinks);
    if(quicklinksd.length>1){quicklinksd.sort((left:any,right:any):number=>{
      if(left.order <right.order)
        return -1;
      if(left.order > right.order)
        return 1;
      return 0;
    });}
    else{
      return <div>Configure the webpart</div>;
    }
    return (
      <div className={ styles.quickLinks }>
      <span className={styles.heading}>{this.props.description}</span>
      <div className={styles.container}>
        <ul>
        {quicklinksd.map(item=>{
            return <li><a target="_self" href={item.url}><img src={item.imageurl} alt={item.name} /></a></li>;
          })}
        </ul>
        </div>
      </div>
    );
  }
}

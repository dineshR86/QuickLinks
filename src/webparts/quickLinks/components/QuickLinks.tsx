import * as React from 'react';
import styles from './QuickLinks.module.scss';
import { IQuickLinksProps } from './IQuickLinksProps';

export default class QuickLinks extends React.Component<IQuickLinksProps, {}> {
  public render(): React.ReactElement<IQuickLinksProps> {
    const quicklinksd:any[]=JSON.parse(this.props.quicklinks);
    
    return (
      <div className={ styles.quickLinks }>
      <div className={styles.container}>
        <ul>
          <li>
            <a target="_self" href="#">
            <img src="https://workplace.uat.bupa.com.au/PinImages/Profile.png" alt="image1" />
            </a>
          </li>
          <li>
            <a target="_self" href="#">
            <img src="https://workplace.uat.bupa.com.au/PinImages/Profile.png" alt="image1" />
            </a>
          </li>
          <li>
            <a target="_self" href="#">
            <img src="https://workplace.uat.bupa.com.au/PinImages/Profile.png" alt="image1" />
            </a>
          </li>
          <li>
            <a target="_self" href="#">
            <img src="https://workplace.uat.bupa.com.au/PinImages/Profile.png" alt="image1" />
            </a>
          </li>
          <li>
            <a target="_self" href="#">
            <img src="https://workplace.uat.bupa.com.au/PinImages/Profile.png" alt="image1" />
            </a>
          </li>
          <li>
            <a target="_self" href="#">
            <img src="https://workplace.uat.bupa.com.au/PinImages/Profile.png" alt="image1" />
            </a>
          </li>
        </ul>
        </div>
      </div>
    );
  }
}

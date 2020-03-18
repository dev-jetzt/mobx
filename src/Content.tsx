import React from 'react';
import ContentViewModel from './Content.viewmodel';
import { observer } from 'mobx-react';

@observer
class Content extends React.Component {

  private viewmodel: ContentViewModel = new ContentViewModel();

  public render() {

    return (
      <div>
        Content: {this.viewmodel.addition}
      </div>
    )
  }
}

export default Content;
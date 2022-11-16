import * as React from 'react';
import { ISpfxReactImagefullscreenProps } from './ISpfxReactImagefullscreenProps';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
 
import { SPFI, spfi,SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
 
// import { TextField } from 'office-ui-fabric-react/lib/TextField'; 
// import { IButtonProps, DefaultButton } from 'office-ui-fabric-react/lib/Button';


export interface ISpfxReactImagefullscreenState {
  photoIndex: number;
  isOpen: boolean;
  Images: string[]
}

export default class SpfxReactImagefullscreen extends React.Component<ISpfxReactImagefullscreenProps, ISpfxReactImagefullscreenState> {
  constructor(props: ISpfxReactImagefullscreenProps, state: ISpfxReactImagefullscreenState) {
    super(props);
    debugger;
   const sp = spfi().using(SPFx(this.props.context));
    this.state = {
      photoIndex: 0,
      isOpen: false,
      Images: []
    };
    this._getFiles(sp);
  }

 
  private async _getFiles(sp:any ) {
    debugger;
    let cardsdata: string[] = [];
    const items: any[] = await sp.web.getFolderByServerRelativeUrl("/sites/tridev/ImagesBanner").files.select().expand("ListItemAllFields").get();
    let siteurl = this.props.context.pageContext.web.absoluteUrl;
    let siterooturl = this.props.context.pageContext.web.absoluteUrl.replace(this.props.context.pageContext.web._serverRelativeUrl, "");
    items.forEach(function (v, i) {
      let url = siterooturl + v.ServerRelativeUrl;
      cardsdata.push(url)
    });
    this.setState({ Images: cardsdata });
  }

  public render(): React.ReactElement<ISpfxReactImagefullscreenProps> {
    const { photoIndex, isOpen, Images } = this.state;
  
    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={Images[photoIndex]}
            nextSrc={Images[(photoIndex + 1) % Images.length]}
            prevSrc={Images[(photoIndex + Images.length - 1) % Images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + Images.length - 1) % Images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % Images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
import * as React from "react";
import SearchInput from "./SearchInput";
import FeaturedItem from "./FeaturedItem";

export default class FeaturedList extends React.Component<any, {}> {
  public render(): React.ReactElement<any> {
    const {} = this.props;

    return (
      <section>
        <SearchInput />
        <h4>Nha thau tieu bieu</h4>
        {/* Mapping array featured item [1,2,3].map((item) => <FeaturedItem  {...item}/>) */}
        
      </section>
    );
  }
}
 
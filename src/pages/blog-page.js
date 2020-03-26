import React from "react";

import Page from "../components/page";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Page
        title="Blog"
        subtitle="Check my blog"
        font={this.props.font}
        className="pb-2 container-flex vertical-flex align-items-center"
      >
        
      </Page>
    );
  }
}

export default BlogPage;

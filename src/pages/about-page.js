import React from "react";

// Pages
import Page from "../components/page";

// Components
import InfoSnipped from "../components/info-snipped";

// Images
import dosomething from "../img/dosomething.jpg";
import departmentofeducation from "../img/departmentofeducation.png";
import mathlab from "../img/mathlab.jpg";
import ttp from "../img/ttp.png";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "About",
      subtitle: "About Me",
      infoSnipped: { size: 17 }
    };
  }

  render() {
    return (
      <Page
        title={this.state.title}
        subtitle={this.state.subtitle}
        font={this.props.font}
        className="pb-2 container-flex vertical-flex align-items-center"
        id={this.props.id}
      >
        <p className="line-height-normal mb-5">
          I am originally from the Dominican Republic and have a B.S. in
          Computer Science from Lehman College. I was the president of Lehman
          College chapter of NSBE (National Society of Black Engineers) and
          organized the 2019 NSBE-SHPE Hackathon from Lehman. My latest work
          experience includes:
        </p>

        <hr width="100%" color="black" />
        <InfoSnipped
          src={dosomething}
          title="DoSomething.org"
          subtitle="Computer Engineer Intern --------------------> June 2019, August 2019."
          content="●	Helped implement component schemas using GraphQL and Contentful
          ●	Created a template focused on displaying company-related information using React and SASS
          ●	Wrote React code to facilitate communication between GraphQL and the main page, Phoenix-next
          "
          size={this.state.infoSnipped.size}
          width="100%"
        />
        <hr width="100%" color="black" />
        <InfoSnipped
          src={departmentofeducation}
          title="NYC Department of Education"
          subtitle="Technology Support Intern => January 2018, June 2018."
          content=" "
          size={this.state.infoSnipped.size}
        />
        <hr width="100%" color="black" />
        <InfoSnipped
          src={mathlab}
          title="Computer Center Math Lab"
          subtitle="College Assistant => November 2018, March 2020."
          content=""
          size={this.state.infoSnipped.size}
        />
        <hr width="100%" color="black" />
        <InfoSnipped
          src={ttp}
          title="Tech Talent Pipeline"
          subtitle="Teacher Assistant => June 2018, July 2018."
          content=""
          size={this.state.infoSnipped.size}
        />
        <hr width="100%" color="black" />
      </Page>
    );
  }
}

export default AboutPage;

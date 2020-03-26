import React from "react";

import Page from "../components/page";
import Section from "../components/section";
import Header from "../components/header";
import InfoSnipped from "../components/info-snipped";
import ModalGallery from "../components/modal-gallery";

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snipped: [
        {
          src:
            "https://res.cloudinary.com/teepublic/image/private/s--D5pPfIDp--/t_Preview/b_rgb:191919,t_Watermark/c_limit,f_jpg,h_630,q_90,w_630/v1562773510/production/designs/5282239_0.jpg",
          title: "Rawr",
          content: "A text-adventure game library created in Java"
        },
        {
          src:
            "https://cdn.mos.cms.futurecdn.net/7d2485cc5f7e38a024fbcb48854d89b1.jpg",
          title: "Marvel API",
          content:
            "A web application that allows you to search for your favorite superheroes"
        },
        {
          src:
            "https://i.pinimg.com/originals/f0/80/8d/f0808db7ef775664e44bf7fc69b98b28.jpg",
          title: "Cain",
          content: "A virtual assistant written in Python"
        }
      ],

      items: [
        "https://miro.medium.com/max/1784/1*8Lnl1N77HGS9Ptwp9zWiQw.png",
        "https://fq8ku9wqwk7gai1z3frl16nd-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/20635371_449693388736894_6861179945775792128_n-912x1024.jpg",
        "https://webneel.com/daily/sites/default/files/images/daily/08-2019/digital-art-martin-grohs.jpg",
        "https://elpais.com/elpais/imagenes/2013/01/21/africa_no_es_un_pais/1358751600_135875_1358751600_002_sumario_normal.jpg",
        "https://islaplad.es/wp-content/uploads/2019/05/La-historia-olvidada-de-los-modelos-negros-en-el-arte.jpg",
        "https://i.pinimg.com/236x/8a/cc/91/8acc91d1807810bd160ef36ad220ce0e.jpg",
        "https://i.redd.it/cynb8q7fol211.png",
        "https://i.pinimg.com/564x/6c/3c/b5/6c3cb5e7ca615f9baf4f8000078fc043.jpg",
        "https://cdnb.artstation.com/p/assets/images/images/003/288/711/large/maarten-verhoeven-elder-009.jpg?1472047323"
      ]
    };
  }

  render() {
    return (
      <Page
        title="Projects"
        subtitle="My projects"
        font={this.props.font}
        className="pb-2 container-flex vertical-flex align-items-center"
      >
        <p className="mb-5">Check out my projects</p>

        {/* CODE Projects */}

        <Header title="[Code]" font={this.props.font} className="mb-5 text-align-left" id="code" size={8}/>
        <Section className="container-flex vertical-flex align-items-center">
          {this.state.snipped.map((obj, idx) => {
            return (
              <InfoSnipped
                key={idx}
                src={obj.src}
                title={obj.title}
                content={obj.content}
              />
            );
          })}
        </Section>

        {/* ART Projects */}

        <Header title="[Art]" font={this.props.font} className="mb-5 mt-5" id="art" />
        <ModalGallery
          items={this.state.items}
          width="70%"
          className="align-self-center"
        />
      </Page>
    );
  }
}

export default ProjectPage;

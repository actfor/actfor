import React, { Component } from "react";

// component
import DonatePage from "./../../common/DonatePage";

// images
import bailProjectLogo from "./../../../images/bailProjectLogo.jpg";
import mutualAidLogo from "./../../../images/mutualAidLogo.jpg";
import Blmp from "./../../../images/Blmp.png";
import marshaPLogo from "./../../../images/marshaPLogo.jpg";
import bvmLogo from "./../../../images/bvmLogo.jpg";

class DACADonate extends Component {
  render() {
    const cards = [
      {
        header: "The Bail Poject",
        img: bailProjectLogo,
        link: "https://secure.givelively.org/donate/the-bail-project",
        description: "The Bail Project, Inc. is a non-profit organization designed to combat mass incarceration by disrupting the money bail system ‒ one person at a time. They use 100% of donations to pay the bail of people across the country. Once a client’s case has ended, the bail money is recycled back into their funds.",
      },
      {
        header: "Mutual Aid Networks",
        img: mutualAidLogo,
        link: "https://mutualaid.carrd.co/",
        description: "Mutual aid networks are direct community efforts that enable community members to help each other in various ways. Although local mutual aid networks differ in their exact purposes and organization, they are a good way to directly contribute to helping people (often Black and other BIPOC individuals) in your locality.",
      },
      {
        header: "Black LGBTQIA+ Migrant Project",
        img: Blmp,
        link: "https://transgenderlawcenter.org/programs/blmp",
        description: "BLMP envisions a world where no one is forced to give up their homeland, where all Black LGBTQIA+ people are free and liberated. They build and center the power of Black LGBTQIA+ migrants to ensure the liberation of all Black people through community-building, political education, creating access to direct services, and organizing across borders.",
      },
      {
        header: "The Marsha P. Johnson Institute",
        img: marshaPLogo,
        link: "https://marshap.org/donate/",
        description: "The Marsha P. Johnson Institute (MPJI) protects and defends the human rights of Black transgender people. They do this by organizing, advocating, creating an intentional community to heal, developing transformative leadership, and promoting our collective power. They were founded both as a response to the murders of BLACK trans women and women of color and how that is connected to our exclusion from social justice issues, namely racial, gender, and reproductive justice, as well as gun violence.",
      },
      {
        header: "Black Voters Matter Fund",
        img: bvmLogo,
        link: "https://blackvotersmatterfund.org/donate/",
        description: "Black Voters Matter's goal is to increase power in marginalized, predominantly Black communities. Effective voting allows a community to determine its own destiny. BVMF accomplishes this goal through voter registration, policy advocacy, and organizational development/training.",
      },
    ];

    return (
      <div>
        <DonatePage
          header="Donate"
          subheader="Donate to one of the organizations below to help in the movement for DACA and abolishing ICE."
          cards={cards}
        />
      </div>
    );
  }
}

export default DACADonate;

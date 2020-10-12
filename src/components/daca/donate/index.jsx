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
        header: "American Friends Service Committee",
        img: bailProjectLogo,
        link: "https://www.afsc.org/abolish-ice#",
        description: "The Bail Project, Inc. is a non-profit organization designed to combat mass incarceration by disrupting the money bail system ‒ one person at a time. They use 100% of donations to pay the bail of people across the country. Once a client’s case has ended, the bail money is recycled back into their funds.",
      },
      {
        header: "Families Belong Together",
        img: mutualAidLogo,
        link: "https://www.familiesbelongtogether.org/",
        description: "Mutual aid networks are direct community efforts that enable community members to help each other in various ways. Although local mutual aid networks differ in their exact purposes and organization, they are a good way to directly contribute to helping people (often Black and other BIPOC individuals) in your locality.",
      },
      {
        header: "Refugee and Immigrant Center for Education and Legal Service",
        img: Blmp,
        link: "https://www.raicestexas.org/ways-to-give/donate/",
        description: "BLMP envisions a world where no one is forced to give up their homeland, where all Black LGBTQIA+ people are free and liberated. They build and center the power of Black LGBTQIA+ migrants to ensure the liberation of all Black people through community-building, political education, creating access to direct services, and organizing across borders.",
      },
      {
        header: "Young Center for Immigrant Childrens’ Rights",
        img: Blmp,
        link: "https://www.theyoungcenter.org/donate",
        description: "BLMP envisions a world where no one is forced to give up their homeland, where all Black LGBTQIA+ people are free and liberated. They build and center the power of Black LGBTQIA+ migrants to ensure the liberation of all Black people through community-building, political education, creating access to direct services, and organizing across borders.",
      },
      {
        header: "Kids in Need of Defense",
        img: marshaPLogo,
        link: "https://supportkind.org/",
        description: "The Marsha P. Johnson Institute (MPJI) protects and defends the human rights of Black transgender people. They do this by organizing, advocating, creating an intentional community to heal, developing transformative leadership, and promoting our collective power. They were founded both as a response to the murders of BLACK trans women and women of color and how that is connected to our exclusion from social justice issues, namely racial, gender, and reproductive justice, as well as gun violence.",
      },
      {
        header: "Never Again Action",
        img: marshaPLogo,
        link: "https://www.neveragainaction.com/",
        description: "The Marsha P. Johnson Institute (MPJI) protects and defends the human rights of Black transgender people. They do this by organizing, advocating, creating an intentional community to heal, developing transformative leadership, and promoting our collective power. They were founded both as a response to the murders of BLACK trans women and women of color and how that is connected to our exclusion from social justice issues, namely racial, gender, and reproductive justice, as well as gun violence.",
      },
      {
        header: "ACLU",
        img: marshaPLogo,
        link: "https://www.aclu.org/know-your-rights/immigrants-rights/",
        description: "The Marsha P. Johnson Institute (MPJI) protects and defends the human rights of Black transgender people. They do this by organizing, advocating, creating an intentional community to heal, developing transformative leadership, and promoting our collective power. They were founded both as a response to the murders of BLACK trans women and women of color and how that is connected to our exclusion from social justice issues, namely racial, gender, and reproductive justice, as well as gun violence.",
      },
      {
        header: "Asylum Seeker Advocacy Program",
        img: bvmLogo,
        link: "https://asylumadvocacy.org/our-mission/",
        description: "Black Voters Matter's goal is to increase power in marginalized, predominantly Black communities. Effective voting allows a community to determine its own destiny. BVMF accomplishes this goal through voter registration, policy advocacy, and organizational development/training.",
      },
      {
        header: "National Immigrant Justice Center",
        img: marshaPLogo,
        link: "https://immigrantjustice.org/",
        description: "The Marsha P. Johnson Institute (MPJI) protects and defends the human rights of Black transgender people. They do this by organizing, advocating, creating an intentional community to heal, developing transformative leadership, and promoting our collective power. They were founded both as a response to the murders of BLACK trans women and women of color and how that is connected to our exclusion from social justice issues, namely racial, gender, and reproductive justice, as well as gun violence.",
      },
      {
        header: "Immigration Justice Campaign",
        img: marshaPLogo,
        link: "https://immigrationjustice.us/",
        description: "The Marsha P. Johnson Institute (MPJI) protects and defends the human rights of Black transgender people. They do this by organizing, advocating, creating an intentional community to heal, developing transformative leadership, and promoting our collective power. They were founded both as a response to the murders of BLACK trans women and women of color and how that is connected to our exclusion from social justice issues, namely racial, gender, and reproductive justice, as well as gun violence.",
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

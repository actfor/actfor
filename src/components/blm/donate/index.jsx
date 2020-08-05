import React, { Component } from "react";

// component
import DonatePage from "./../../common/DonatePage";

// images
import bailProjectLogo from "./../../../images/bailProjectLogo.jpg";
import mutualAidLogo from "./../../../images/mutualAidLogo.jpg";
import Blmp from "./../../../images/Blmp.png";
import marshaPLogo from "./../../../images/marshaPLogo.jpg";
import bvmLogo from "./../../../images/bvmLogo.jpg";

class BlmDonate extends Component {
  render() {
    const cards = [
      {
        header: "The Bail Poject",
        img: bailProjectLogo,
        link: "https://www.justiceforall.org/save-uighur/",
        description:
          "Justice For All (JFA) is a nonprofit organization based in Chicago with Consultative Status at the United Nations. JFA is focused on educating citizens about social justice concerns and providing guidance for action through regular newsletters and media engagement. Specifically, JFA aims to combat the rising trend of Islamophobia around the world impacting Muslim Americans and other Muslims around the world.",
      },
      {
        header: "Mutual Aid Networks",
        img: mutualAidLogo,
        link: "https://uhrp.org/",
        description:
          "The Uyghur Human Rights Project promotes the rights of the Uyghurs and other Turkic Muslim peoples in East Turkistan, referred to by the Chinese government as the Xinjiang Uyghur Autonomous Region, through research-based advocacy. It publishes  reports and analysis in English and Chinese to defend Uyghurs’ civil, political, social, cultural, and economic rights according to international human rights standards.",
      },
      {
        header: "Black LGBTQIA+ Migrant Project",
        img: Blmp,
        link: "https://campaignforuyghurs.org/",
        description:
          "Campaign for Uyghurs works to promote and advocate for the human rights and democratic freedoms for the Uyghurs and other Turkic people in East Turkistan. It mobilizes individuals and the international community and builds bridges to take action on behalf of and to raise public awareness of the Uyghur issue with a special focus on Uyghur women and youth, and to activate persons and entities to work together to stop the systematic human rights abuses against the people of East Turkistan.",
      },
      {
        header: "The Marsha P. Johnson Institute",
        img: marshaPLogo,
        link: "https://campaignforuyghurs.org/",
        description:
          "Campaign for Uyghurs works to promote and advocate for the human rights and democratic freedoms for the Uyghurs and other Turkic people in East Turkistan. It mobilizes individuals and the international community and builds bridges to take action on behalf of and to raise public awareness of the Uyghur issue with a special focus on Uyghur women and youth, and to activate persons and entities to work together to stop the systematic human rights abuses against the people of East Turkistan.",
      },
      {
        header: "Black Voters Matter Fund",
        img: bvmLogo,
        link: "https://uyghuraa.org/",
        description:
          "The Uyghur American Association (UAA) is a non-partisan organization with the chief goals of promoting and preserving Uyghur culture and supporting the right of Uyghur people to use peaceful, democratic means to determine their own political futures.",
      },
    ];

    return (
      <div>
        <DonatePage
          header="Donate"
          subheader="Donate to support the Black Lives Matter movement"
          cards={cards}
        />
      </div>
    );
  }
}

export default BlmDonate;

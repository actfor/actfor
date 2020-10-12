import React, { Component } from "react";

// component
import DonatePage from "./../../common/DonatePage";

// images
import AfscLogo from "./images/AfscLogo.jpg";
import FbtLogo from "./images/FbtLogo.png";
import RaicesLogo from "./images/RaicesLogo.jpg";
import youngCenterLogo from "./images/youngCenterLogo.jpg";
import KindLogo from "./images/KindLogo.jpg";
import NaaLogo from "./images/NaaLogo.jpg";
import AcluLogo from "./images/AcluLogo.jpg";
import AsapLogo from "./images/AsapLogo.png";
import NijcLogo from "./images/NijcLogo.jpg";
import IjcLogo from "./images/IjcLogo.jpg";

class DACADonate extends Component {
  render() {
    const cards = [
      {
        header: "American Friends Service Committee",
        img: AfscLogo,
        link: "https://www.afsc.org/abolish-ice#",
        description: "Founded in 1917 (and winning the Nobel Peace Prize in 1947) the American Friends Service Committee is a Quaker activist organization that is active in several areas (immigration and justice reform, Israel/Palestine). They are part of the Defund Hate Coalition, calling to defund ICE and CBP, and reinvest the funds into communities and education. The AFSC is also working in support of Temporary Protected Status.",
      },
      {
        header: "Families Belong Together",
        img: FbtLogo,
        link: "https://www.familiesbelongtogether.org/",
        description: "Families Belong Together works to permanently end family separation and detention, seek accountability for the harm that’s been done, and immediately reunite all families who remain torn apart. The coalition has raised millions of dollars for immigrant children and families, mobilized hundreds of thousands of people in all 50 states to take action, and helped to reunite thousands of families. The organization also draws attention to the inhumane conditions of family detention, especially the appalling recent deaths of children after coming into US immigration custody.",
      },
      {
        header: "Refugee and Immigrant Center for Education and Legal Service",
        img: RaicesLogo,
        link: "https://www.raicestexas.org/ways-to-give/donate/",
        description: "RAICES is a 501(c)(3) nonprofit agency that promotes justice by providing free and low-cost legal services to underserved immigrant children, families, and refugees. With legal services, social programs, bond assistance, and an advocacy team focused on changing the narrative around immigration in this country, RAICES is operating on the national frontlines of the fight for immigration rights.",
      },
      {
        header: "Young Center for Immigrant Childrens’ Rights",
        img: youngCenterLogo,
        link: "https://www.theyoungcenter.org/donate",
        description: "The Young Center for Immigrant Children’s Rights protects and advances the rights and best interests of immigrant children according to the Convention on the Rights of the Child and state and federal law.",
      },
      {
        header: "Kids in Need of Defense",
        img: KindLogo,
        link: "https://supportkind.org/",
        description: "Kids in Need of Defense (KIND) is the leading national organization advocating for the rights of unaccompanied migrant and refugee children in the U.S. KIND works to ensure that no child appears in immigration court without high quality legal representation. KIND is also advancing laws, policies, and practices that ensure children’s protection and uphold their right to due process and fundamental fairness as well as promoting in countries of origin, transit, and destination durable solutions to child migration that are grounded in the best interests of the child and ensure that no child is forced to involuntarily migrate.",
      },
      {
        header: "Never Again Action",
        img: NaaLogo,
        link: "https://www.neveragainaction.com/",
        description: "Never Again Action is a Jewish Activist group that sees Nazi camps and strategies mirrored in ICE policy, especially with respect to its detention centers. Part of their goal is to “redefine how the public views the immigration system to what it truly is: a cruel, white nationalist, oppressive enforcement apparatus that detains and deports people”.The group has been instrumental in organizing protests throughout the country in opposition to ICE, by offering “toolkits” and by encouraging people to take action. Their mission is best summed up in the statement: “When the Jewish people say ‘never again,’ we mean now”. Donations are used to improve their digital presence and help organize more (safe) protests.",
      },
      {
        header: "ACLU",
        img: AcluLogo,
        link: "https://www.aclu.org/know-your-rights/immigrants-rights/",
        description: "The ACLU is one of the United States most well known and consequential non-profit organizations, working to maintain and expand civil liberties mostly via litigation. Their platform includes support for a wide range of issues, from opposition to facial recognition technology in law-enforcement to reproductive freedom. They have litigated in favor of immigrants rights, and against ICE policies that violate civil rights and conscience. The ACLU has litigated for the reuniting of families, to protect the rights and safety of unaccompanied children and against the Trump administration’s attempts to disregard undocumented immigrants in the 2020 census, among other lawsuits.",
      },
      {
        header: "Asylum Seeker Advocacy Program",
        img: AsapLogo,
        link: "https://asylumadvocacy.org/our-mission/",
        description: "The Asylum Seeker Advocacy Project (ASAP) sees a future where the United States welcomes individuals who come to our borders fleeing violence. They work alongside asylum seekers to make this vision a reality. Their model has three components: online community support, emergency legal aid, and nationwide systemic reform. ASAP represent individuals who have arrived at the Mexico-U.S. border to seek asylum, regardless of where they are currently located. Our clients have traveled thousands of miles and braved dangerous terrain to bring their families to safety. ASAP recognizes their strength, and provide them with the tools they need to keep their families safe.",
      },
      {
        header: "National Immigrant Justice Center",
        img: NijcLogo,
        link: "https://immigrantjustice.org/",
        description: "An initiative of the Heartland Alliance, the National Immigration Justice Center provides a wide range of service to low-income immigrants, such as legal services for unaccompanied minors, detained immigrants, asylum seekers, as well as DACA applicants. They also provide resources for attorneys and release reports on immigration policy issues. NIJC is a member of the Defund Hate campaign, which is calling on the federal government to stop funding ICE’s hateful policies, and redirect the funding towards community development. The organization provides information and support for many more key issues, such as LGBTQ immigrants, and immigration court independence.",
      },
      {
        header: "Immigration Justice Campaign",
        img: IjcLogo,
        link: "https://immigrationjustice.us/",
        description: "The Immigration Justice Campaign is a joint initiative of the American Immigration Council, the American immigration Lawyers Association, and the American Immigrant Representation Project. By establishing a group of lawyers working pro-bono and by training private lawyers in new and improved tactics, the group is working to increase access to legal counsel among immigrants held in detention centers. Access to legal counsel greatly increases an immigrants chance of winning their case.",
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

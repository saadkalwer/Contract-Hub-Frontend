import React from "react";
import Layout from "../../layout/layout";
import HeroSide from "../../components/hero/hero";
import Benfit from "../../components/benefit/benefit";
import Turbo from "../../components/turbo/turbo";
import Cloud from "../../components/cloud/cloud";
import Hoola from "../../components/hoola/hoola";
import Template from "../../components/template/template";
import TestimoinialsSection from "../../components/testimoinials/testi";
// import Sign from "../../components/signup/Sign";

export default function Homepage() {
  const TurboSection = {
    titleWidth: "400px",
    descWidth: "500px",
    title: "Turbo-Charge Your Sales Organization",
    desc: "Provide teams with an eSignature platform, standard templates and workflows, that integrate everyone from company counsel to management. ",
    img: require("../../image/rafiki.jpg"),
  };
  const powerSection = {
    descWidth: "500px",
    title: "Empower Legal Teams",
    desc: "Empower your team to generate agreements without changes to sensitive legal requirements. ",
    desc2:
      "improve efficiency by limiting review to key, predefined contract terms.   ",
    desc3: "Unlimited eSignatures standard. ",
    img: require("../../image/team.jpg"),
    direction: "row-reverse",
  };
  const CustomerSection = {
    descWidth: "500px",
    title: "Impress Customers",
    desc: " Offer customers and clients a simple, error-free process with their own real-time dashboard.",
    img: require("../../image/customer.jpg"),
  };
  return (
    <>
      <Layout>
        <HeroSide />
        <Benfit />
        <Turbo data={TurboSection} />
        <Turbo data={powerSection} />
        <Turbo data={CustomerSection} />
        <Cloud />
        <Template />
        <TestimoinialsSection />
        <Hoola />
      </Layout>{" "}
      {/* <Sign /> */}
    </>
  );
}

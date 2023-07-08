import { FC } from "react";

import Layout from "../../components/Layout/Layout";
import PageArt from "../../components/PageArt/PageArt";
import SignupForm from "../../components/Forms/SignupForm/SignupForm";

import backSignup from "../../assets/images/backSignup.jpg";

const SingupPage: FC = () => {
  return (
    <Layout>
      <PageArt urlImage={backSignup}>
        <SignupForm />
      </PageArt>
    </Layout>
  );
};

export default SingupPage;

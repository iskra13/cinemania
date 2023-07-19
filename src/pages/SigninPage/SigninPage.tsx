import { FC } from "react";

import Layout from "../../components/Layouts/Layout/Layout";
import PageArt from "../../components/PageArt/PageArt";
import SigninForm from "../../components/Forms/SigninForm/SigninForm";

import backSignin from "../../assets/images/backSignin.jpg";

const SigninPage: FC = () => {
  return (
    <Layout>
      <PageArt urlImage={backSignin}>{<SigninForm />}</PageArt>
    </Layout>
  );
};

export { SigninPage };

import { FC } from "react";

import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "./MainContent/MainContent";

const MainPage: FC = () => {
  return (
    <Layout>
      <Sidebar />
      <MainContent />
    </Layout>
  );
};

export default MainPage;

import React from "react";
import Layout from "./components/Layout";
import Pages from "./pages";
import GetDataWrap from "./components/GetDataWrap";

const App: React.FC = () => {
  return (
    <GetDataWrap>
      <Layout>
        <Pages />
      </Layout>
    </GetDataWrap>
  );
};

export default App;

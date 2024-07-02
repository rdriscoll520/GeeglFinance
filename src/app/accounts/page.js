import React from "react";
import Layout from '../layout'
import Card from '../components/Card'
import Test from '../test/page'

function Accounts() {
  return (
      <Layout title = "Accounts">
        <Card>
        <h1 className="title">Accounts</h1>
        </Card>
        <Test />
      </Layout>
  );
}

export default Accounts;

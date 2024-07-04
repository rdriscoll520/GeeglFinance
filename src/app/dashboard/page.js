import React from "react";
import Layout from '../layout'
import Card from '../components/Card'

function Dashboard() {
  return (
      <Layout title = "Dashboard">
        <Card>
          <h1 className="title">Dashboard</h1>
        </Card>
      </Layout>
  );
}

export default Dashboard;

import React from "react";
import Navbar from "../components/NavBar";
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

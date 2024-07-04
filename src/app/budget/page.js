import React from 'react'
import Layout from '../layout'
import Card from '../components/Card'
import Summary from './summary'

function Budget() {
    return (
    <Layout title = "Budget">
        <Card>
        <h1 className="title">Budget</h1>
        </Card>
        <Card>
            <h1>Income</h1>
        </Card>
        <Card>
            <h1>Expenses</h1>
        </Card>
        <Card>
            <h1>Goals</h1>
        </Card>
    </Layout>
    )
}

export default Budget;
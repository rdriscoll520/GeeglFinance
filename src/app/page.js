'use client'
import './globals.css';
import RootLayout from './layout'
import Card from './components/Card'

export default function Home() {

  return (
      <RootLayout title = "Home">
        <Card>
          <h1 className='title'>Home</h1>
        </Card>
      </RootLayout>

  );
}

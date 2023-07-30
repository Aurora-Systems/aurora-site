"use client"
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import 'animate.css';
import NavBar from './components/navBar'
import Footer from './components/footer';

export const metadata = {
  title: 'Aurora',
  description: 'Aurora systems is an SAAS company which focuses on building management systems...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NavBar />
       
        {children}
        <Footer/>
        <script src="https://scripts.sirv.com/sirvjs/v3/sirv.js"></script>
        </body>
    </html>
  )
}

import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import 'animate.css';
import NavBar from './components/navBar'

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
      <body  className='container-fluid'>
        <NavBar />
       
        {children}
        <script src="https://scripts.sirv.com/sirvjs/v3/sirv.js"></script>
        </body>
    </html>
  )
}

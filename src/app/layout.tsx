import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import NavBar from './components/navBar'

export const metadata = {
  title: 'Aurora',
  description: 'Aurora systems is an SaaS company which fouces on building management systems...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <NavBar/>
       
        {children}
        </body>
    </html>
  )
}

"use client"
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import 'animate.css';
import NavBar from './components/navBar'
import Footer from './components/footer';
import Script from 'next/script';

// export const metadata = {
//   title: 'Aurora',
//   description: 'Aurora systems is an SAAS company which focuses on building management systems...',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <Script  src="https://www.googletagmanager.com/gtag/js?id=G-EV70L5Z3LW"></Script>
<Script id="google-analytics">{`

  window.dataLayer = window.dataLayer || [];
  function gtag(){
  dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EV70L5Z3LW');
  `}
</Script>
      <Script async src="https://tally.so/widgets/embed.js"></Script>
      </head>
      <body suppressHydrationWarning={true}>
        <NavBar />
       
        {children}
        <Footer/>
        <Script async src="https://scripts.sirv.com/sirvjs/v3/sirv.js"></Script>
        </body>
    </html>
  )
}

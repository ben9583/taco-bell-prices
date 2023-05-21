import Footer from '../components/Footer';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Taco Bell Price Comparer</title>
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

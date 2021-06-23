import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <link
           rel="preconnect"
           href="https://fonts.gstatic.com"
           crossOrigin="true"
         />
         <link
           rel="preload"
           as="style"
           href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap"
         />
         <link
           rel="stylesheet"
           href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap"
           media="print"
           onLoad="this.media='all'"
         />

<script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-05F11LY4ST"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-05F11LY4ST', { page_path: window.location.pathname });
            `,
          }}
        />

         <noscript>
           <link
             rel="stylesheet"
             href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap"
           />
         </noscript>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
      
    )
  }
}

export default MyDocument
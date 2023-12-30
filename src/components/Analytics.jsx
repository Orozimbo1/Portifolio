const Analytics = () => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=G-TWR84TMKYB`} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', G-TWR84TMKYB, {
            page_path: window.location.pathname,
          });
        `
      }}
    />
  </>
)

export default Analytics
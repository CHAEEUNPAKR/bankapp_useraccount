import { Html, Head, Main, NextScript } from 'next/document'

// 서버사이드에만 렌더링
// html에 대한 설정 작성 ok

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

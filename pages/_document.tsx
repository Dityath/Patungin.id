import { NextPage } from "next";
import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Document: NextPage = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <script
          dangerouslySetInnerHTML={{
            __html: `<!--Ghostemane - Fed Up-->`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `<!--0:35 ━❍──────── 2:31-->`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `<!--   ↻     ⊲  Ⅱ  ⊳     ↺-->`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `<!--VOLUME: ▁▂▃▄▅▆▇ 100%-->`,
          }}
        />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

import Head from "next/head";

export default () => (
  <div>
    <Head>
      <div>title</div>
    </Head>
    <div>About</div>
    <style jsx>
      {`
        img {
          height: 500px;
        }
      `}
    </style>
    <div className="testingDev">aaa</div>
  </div>
);

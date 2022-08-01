import Head from 'next/head'

function HeaderPage() {
  return (
    <>
    <div>
      <Head>
        <title>Lita Husin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
    </div>
    <p class="copyright">Copyright 2022 Lita Husin</p>
      <div className="logo">
        <img src="/image/logo.png"></img>
      </div>
      </>
  )
}

export default HeaderPage
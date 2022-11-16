import { DefaultSeo } from 'next-seo'

const config = {
  title: 'GET Protocol Community',
  description: 'GET Protocol community site, with resources and blogs surrounding the NFT ticketing product.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://get-community.com',
    site_name: 'GET Protocol Community',
    images: [
      {
        url: 'https://www.get-community.com/static/images/og.png',
        alt: 'GET Protocol Community',
      },
    ],
  },
}

const SEO = () => {
  return <DefaultSeo {...config} />
}

export default SEO

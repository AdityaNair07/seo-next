import { getProductById } from "@/app/api/route";
import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import { SocialIcon } from "react-social-icons";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = await getProductById({ id });

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.images[0]],
      type: "article",
      url: `https://seo-next-pink.vercel.app/products/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.images[0]],
      image: [product.images[0]],
    },
  };
}

export default async function ProductPage({ params }) {
  const { id } = params;
  const product = await getProductById({ id });

  if (!product) {
    return (
      <div className="w-full h-full pt-20 text-3xl font-semibold text-center">
        Product not found
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.images[0]} />
        <meta
          property="og:url"
          content={`https://seo-next-pink.vercel.app/products/${id}`}
        />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.images[0]} />
      </Head>

      <Navbar />

      <div className="container w-full h-full px-0 py-10 mx-auto lg:px-10">
        <div className="flex flex-col w-full h-full mt-10 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={product.images[0]}
              alt={product.title}
              className="object-contain object-center w-full h-[400px]"
            />
          </div>
          <div className="flex flex-col w-full gap-2 md:w-1/2">
            <div className="flex justify-start item-center">
              Reviews: {product.reviews?.length}
            </div>
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-lg">{product.description}</p>
            <div className="flex gap-2 items-center">
              <SocialIcon
                className="icon_social"
                target="_blank"
                url={`https://twitter.com/intent/post?url=${encodeURIComponent(
                  `https://seo-next-pink.vercel.app/product/${id}`
                )}&text=${encodeURIComponent(
                  "Check out this product!"
                )}&hashtags=${encodeURIComponent("ProductHunter,Product")}`}
                style={{ height: 35, width: 35 }}
              />
              <SocialIcon
                className="icon_social"
                target="_blank"
                url={`https://api.whatsapp.com/send?text=Get this product ${product.title
                  .replace(/-/g, " ")
                  .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                    return g1.toUpperCase() + g2.toLowerCase();
                  })} on Product Hunter, here is the link https://seo-next-pink.vercel.app/product/${id}`}
                style={{ height: 35, width: 35 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

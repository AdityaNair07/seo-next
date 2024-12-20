import ProductCard from "./components/ProductCard";
import { getProducts } from "./api/route";
import Navbar from "./components/Navbar";

export async function generateMetadata() {
  return {
    title: "Product Hunter",
    description: "Browse through various products",
    openGraph: {
      title: "Product Hunter",
      description: "Browse through various products",
      images: [
        {
          url: "https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png",
          // width: 1200,
          // height: 630,
        },
      ],
      url: "https://seo-next-pink.vercel.app/",
    },
    twitter: {
      card: "summary_large_image",
      title: "Product Hunter",
      description: "Browse through various products",
      images: [
        "https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png",
      ],
    },
  };
}

const HomePage = async () => {
  const products = await getProducts();

  if (!products) {
    return (
      <div className="w-full h-full pt-20 text-3xl font-semibold text-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container w-full h-full px-0 py-10 mx-auto lg:px-10">
        <div className="container w-full h-full px-0 py-10 mx-auto lg:px-10">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 ">
            {products?.map((data) => {
              return <ProductCard data={data} key={data?.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

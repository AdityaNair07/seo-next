import ProductCard from "./components/ProductCard";
import { getProducts } from "./api/route";
import Navbar from "./components/Navbar";
import Meta from "./components/Meta";

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
      {/* <Meta
        title={"Product Hunter"}
        desc={"Browse through various products"}
        imageUrl={
          "https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png"
        }
      /> */}
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

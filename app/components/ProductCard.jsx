import Link from "next/link";

const ProductCard = ({ data }) => {
  return (
    <>
      <Link
        href={`/product/${data?.id}`}
        key={data?.id}
        className="min-w-[150px] w-[200px] min-h-[200px] h-[250px] rounded-md flex flex-col mx-auto relative overflow-hidden dark:bg-zinc-600 bg-slate-400"
      >
        <img
          loading="lazy"
          src={data?.images[0]}
          alt="product image"
          className="object-scale-down object-center w-full h-40"
        />
        <div className="w-full px-2 font-semibold text-center">
          {data?.title?.trim().length > 10
            ? data.title.trim() + "..."
            : data.title.trim()}
        </div>
        <div className="absolute top-0 right-0 px-[4px] py-[1px] font-semibold text-white bg-teal-500 rounded-es-md border-l-4 border-b-4 border-white/80 dark:border-slate-800">
          {data?.category}
        </div>
      </Link>
    </>
  );
};

// ProductCard.propTypes = {
//   data: PropTypes.object.isRequired,
// };

export default ProductCard;

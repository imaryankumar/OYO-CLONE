import { useRouter } from "next/router";

const FilterSideSection = () => {
  const router = useRouter();
  return (
    <section className="px-5 py-6 flex flex-col gap-1">
      <h2 className="text-xl font-medium">Filters</h2>
      <h3 className="text-sm font-medium">
        Popular locations in {router.query.location}, India
      </h3>
      <div className="w-100 h-auto py-4">
        <input
          className="border px-3 py-2 w-[100%] rounded-sm outline-1 "
          placeholder="Search.."
        />
        <div className="flex flex-wrap items-start justify-start gap-2 py-2 text-base text-white">
          <span className="bg-gray-500  px-2 py-1 rounded">Golden Temple</span>
          <span className="bg-gray-500  px-2 py-1 rounded">Shivpur</span>
          <span className="bg-gray-500  px-2 py-1 rounded">Noida City</span>
          <span className="bg-gray-500  px-2 py-1 rounded">Golden Temple</span>
          <span className="bg-gray-500  px-2 py-1 rounded">Golf Course</span>
          <span className="text-red-500 font-medium">+ View More</span>
        </div>
      </div>
    </section>
  );
};

export default FilterSideSection;

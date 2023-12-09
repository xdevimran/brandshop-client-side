import { Link, useLoaderData } from "react-router-dom";
import Hero from "../../components/Header/Hero";
import BrandLogo from "../../components/Brand/BrandLogo";
import ExtraSection from "../../components/ExtraSection/ExtraSection";

const Home = () => {
  const brandCategory = useLoaderData() || [];
  return (
    <section className="bg-white dark:bg-gray-900">
      <Hero />
      <div className=" container px-6 py-8 mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our Brands
        </h2>
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
          {brandCategory.map((brand, index) => (
            <Link
              to={brand.url}
              key={index}
              className=" rounded-md w-full max-w-xs text-center shadow-lg"
            >
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src={brand.image}
                alt="avatar"
              />
              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {brand.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <BrandLogo />
      <ExtraSection />
    </section>
  );
};

export default Home;

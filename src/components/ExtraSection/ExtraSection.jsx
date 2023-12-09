const ExtraSection = () => {
  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              How It Works
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Buying your favorite gadgets has never been easier. Follow these
              simple steps to get started.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">1</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Create an Account
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Sign up for a free account to enjoy seamless shopping and
                  exclusive deals on the latest mobile phones and laptops.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">2</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Browse Our Collection
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Explore our extensive range of mobile phones and laptops from
                  top brands, all at competitive prices and with various
                  specifications to meet your needs.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">3</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Secure Your Purchase
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Place your order with confidence, knowing that our secure
                  payment gateway ensures the safety of your transaction. Expect
                  a smooth and timely delivery process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSection;

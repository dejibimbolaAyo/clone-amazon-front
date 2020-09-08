import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faSearch,
  faCaretDown,
  faShoppingCart,
  faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="bg-black h-14">
          {/* main nav */}
          <div className="flex py-2 place-items-center">
            <a href="/" className="h-20 mr-4 logo" />
            {/* search bar */}
            <div className="w-8/12">
              <div className="flex w-full h-10 py-0 align-middle bg-white border-2 border-orange-500 rounded-sm">
                {/* Select search */}
                <div class="flex relative">
                  <select class="appearance-none outline-none w-auto text-gray-700 bg-gray-300 border-0 border-r border-gray-500 hover:border-0 px-4 py-1 place-self-stretch rounded-sm rounded-r-none focus:outline-none">
                    <option>All</option>
                    <option>Department</option>
                    <option>Store</option>
                    <option>Baby</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

                <input
                  className="w-full p-2 font-medium outline-none"
                  type="text"
                />
                <button className="inline-flex h-10 p-1 bg-orange-400 border-0 rounded-r-sm appearance-none place-self-stretch focus:outline-none">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="inline-block h-6 p-1 m-1 text-gray-800"
                  />
                </button>
              </div>
            </div>
            <div className="flex justify-between w-3/12">
              {/* nav actions */}
              <FontAwesomeIcon
                icon={faFlagUsa}
                className="inline-block h-6 px-4 m-1 text-gray-100"
              />
              <div class="px-2">
                <h1 className="text-xs text-white">Hello, Sign In</h1>
                <h1 className="font-semibold leading-3 text-white">
                  Account &amp; Lists
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="inline-block h-4 px-1 text-white"
                  />
                </h1>
              </div>
              <div class="px-2">
                <h1 className="text-xs text-white">Returns</h1>
                <h1 className="font-semibold leading-3 text-white">
                  &amp; Orders
                </h1>
              </div>
              <div class="flex px-2 py-2">
                <h1 className="font-semibold text-white">Cart</h1>
                <div className="justify-self-start">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="inline-block h-4 m-1 text-red-100"
                  />
                </div>
                <h1 className="font-semibold text-white">0</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 bg-gray-900">
          {/* sub nav */}
          <div className="flex justify-between px-2">
            <a
              href="/"
              className="flex-wrap justify-start w-1/12 mr-4 text-white align-baseline"
            >
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                className="inline-block h-4 m-1 text-red-100"
              />
              <div className="inline-block align-top">
                <h1 className="text-xs">Deliver to</h1>
                <h1 className="font-semibold leading-3">Nigeria</h1>
              </div>
            </a>
            <div className="flex w-4/12 py-2 justify-self-start">
              <a href="/" className="px-2 text-white">
                Today's Deal
              </a>
              <a href="/" className="px-2 text-white">
                Customer Service
              </a>
              <a href="/" className="px-2 text-white">
                Gift Card
              </a>
              <a href="/" className="px-2 text-white">
                Register
              </a>
              <a href="/" className="px-2 text-white">
                Sell
              </a>
            </div>
            <div className="w-5/12"></div>
            <a
              href="/"
              className="w-2/12 py-2 ml-8 font-semibold text-white justify-self-end"
            >
              Amazon's response to COVID-19
            </a>
          </div>
        </div>
      </div>
      <div>{/* hero */}</div>
      <div>
        {/* category section */}
        <div>{/* category cards */}</div>
        <div>{/* category rows */}</div>
      </div>
    </div>
  );
}

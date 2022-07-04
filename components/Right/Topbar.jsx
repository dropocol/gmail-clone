/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  CogIcon,
  ViewGridIcon,
  QuestionMarkCircleIcon,
  FilterIcon,
} from "@heroicons/react/outline";
import {} from "@heroicons/react/solid";
import Activity from "./Activity";
import ProfilePic from "./ProfilePic";

const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
  { name: "Directory", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="mx-auto h-20 px-4 sm:px-6 lg:px-4">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 xl:gap-24">
                {/* topbar left side */}
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-7">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    {/* search bar */}
                    <div className="w-full flex items-center">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="h-12 block w-full bg-slate-50 border border-slate-100 rounded-md py-2 pl-10 pr-3 placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-lg focus:bg-white"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                      <FilterIcon className="h-5 w-5 text-gray-400 -ml-10 z-10" />
                    </div>
                  </div>
                </div>

                {/* topbar right side */}
                {/* <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4"> */}
                <div className="flex items-center justify-end xl:col-span-5 gap-6">
                  {/* Profile dropdown */}
                  <Activity />
                  <QuestionMarkCircleIcon className="w-8 text-slate-400" />
                  <CogIcon className="w-8 text-slate-400" />
                  <ViewGridIcon className="w-8 text-slate-400" />
                  <ProfilePic user={user} />
                </div>
              </div>
            </div>
          </>
        )}
      </Popover>
    </>
  );
}

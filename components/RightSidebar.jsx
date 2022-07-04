import { Topbar } from "./Right";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import {
  RefreshIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/outline";

import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import {
  loremIpsum,
  name,
  surname,
  fullname,
  username,
} from "react-lorem-ipsum";
import { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RightSidebar() {
  const [emails, setEmail] = useState([]);

  useEffect(() => {
    const emails = [
      { name: fullname(), new: true },
      { name: fullname(), new: true },
      { name: fullname(), new: true },
      { name: fullname(), new: true },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
      { name: fullname(), new: false },
    ];

    setEmail(emails);
  }, []);

  return (
    <div className="w-full bg-slate-50 h-full mb-0 mr-0 overflow-y-auto">
      <Topbar />
      <div className="p-4 flex flex-col w-full gap-4">
        {/* Email Top */}
        <div className="p-4 bg-white rounded-sm shadow-sm col-span-4 flex justify-between">
          <div className="flex gap-6">
            <div className="h-5 w-5 rounded-md border-2 border-slate-400"></div>
            <RefreshIcon className="h-6 w-6 text-slate-400" />
            <DotsVerticalIcon className="h-5 w-5 text-slate-400" />
          </div>
          <div className="flex gap-6">
            <ChevronLeftIcon className="h-6 w-6 text-slate-400" />
            <ChevronRightIcon className="h-6 w-6 text-slate-400" />
          </div>
        </div>

        <div className="rounded-md border-2 border-slate-100">
          {/* Email List Item */}
          {emails.map((email, index) => (
            <div
              key={index}
              className={classNames(
                "group p-4 bg-white rounded-sm shadow-sm col-span-4 flex justify-start gap-10",
                email.new ? "bg-white-50" : "bg-gray-50"
              )}
            >
              <div className="flex gap-8">
                <div className="flex items-center gap-4">
                  <div className="h-5 w-5 rounded-md border-2 border-slate-400"></div>
                  <StarIcon className="h-6 w-6 text-slate-400" />
                </div>
                <p
                  className={classNames(
                    "text-base text-slate-500 w-48",
                    email.new ? "font-semibold text-slate-800" : "font-medium"
                  )}
                >
                  {email.name}
                </p>
              </div>
              <div
                className={classNames(
                  "flex flex-1 gap-6 justify-between",
                  email.new
                    ? "text-slate-800 font-semibold"
                    : "text-slate-500 font-medium"
                )}
              >
                <p className="text-base">
                  {loremIpsum({
                    p: 1,
                    avgWordsPerSentence: 16,
                    avgSentencesPerParagraph: 1,
                  })}
                </p>
                <p className="font-medium text-base">Jun 13</p>
              </div>
            </div>
          ))}
          {/* Email List Item */}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="p-4 bg-white rounded-sm shadow-sm col-span-4 flex justify-start gap-20">
<div className="flex gap-8 mr-8 min-w-64">
  <div className="flex items-center gap-4">
    <div className="h-5 w-5 rounded-md border-2 border-slate-400"></div>
    <StarIcon className="h-6 w-6 text-slate-400" />
  </div>
  <p className="font-medium text-base text-slate-500">
    {fullname()}
  </p>
</div>
<div className="flex flex-1 gap-6 justify-between">
  <p className="font-medium text-base text-slate-500">
    {loremIpsum({
      p: 1,
      avgWordsPerSentence: 16,
      avgSentencesPerParagraph: 1,
    })}
  </p>
  <p className="font-medium text-base text-slate-500">Jun 13</p>
</div>
</div> */
}

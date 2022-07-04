/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  StarIcon,
  ChartBarIcon,
  ClockIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  MailIcon,
  PencilIcon,
  InformationCircleIcon,
  PlusIcon,
  TagIcon,
} from "@heroicons/react/outline";

import {} from "@heroicons/react/solid";

const navigation = [
  { name: "Inbox", href: "#", icon: InboxIcon, current: true },
  { name: "Starred", href: "#", icon: StarIcon, current: false },
  { name: "Snooze", href: "#", icon: ClockIcon, current: false },
  { name: "Sent", href: "#", icon: FolderIcon, current: false },
  { name: "Drafts", href: "#", icon: CalendarIcon, current: false },
  { name: "Spam", href: "#", icon: InformationCircleIcon, current: false },
];

const labels = [
  { name: "Clients", color: "text-red-500" },
  { name: "Personal", color: "text-green-500" },
  { name: "Project Files", color: "text-blue-500" },
  { name: "Invoices", color: "text-nidigo-500" },
  { name: "Pending Tasks", color: "text-orange-500" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="w-full h-screen p-4 pt-2 gap-4 flex flex-col">
      <div className="w-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r4.png"
          alt="google logo"
          className="w-auto h-auto"
        />
      </div>

      <div className="">
        <button
          type="button"
          className="w-full inline-flex items-center px-6 py-3 border border-transparent shadow-sm  text-base font-medium text-indigo-500 bg-indigo-50  rounded-full hover:border-indigo-500"
        >
          <PencilIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
          Compose
        </button>

        {/* Main Navigation Start */}
        <nav className="space-y-2 mt-6" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-slate-500"
                    : "text-slate-400 group-hover:text-slate-500",
                  "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </a>
          ))}
        </nav>
        {/* Main Navigation End */}

        {/* Sub Navigation Start */}
        <div className="mt-10">
          <nav className="space-y-2" aria-label="Sidebar">
            <div className="flex justify-between items-center mb-4 mt-4">
              <h3 className="text-md font-medium text-slate-500">Labels</h3>
              <PlusIcon className="w-5 h-5 text-slate-400" />
            </div>
            {labels.map((item) => (
              <a
                key={item.name}
                href={"#"}
                className={classNames(
                  "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                )}
              >
                <TagIcon
                  className={classNames(
                    item.color,
                    "flex-shrink-0 -ml-1 mr-3 h-5 w-5"
                  )}
                  aria-hidden="true"
                />
                <span className="truncate">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

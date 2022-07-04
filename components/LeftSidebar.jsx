/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  MenuIcon,
  ChatIcon,
  MenuAlt1Icon,
  MailIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Mail", href: "#", icon: MailIcon, current: true },
  { name: "Chat", href: "#", icon: ChatIcon, current: false },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  {
    name: "Meet",
    href: "#",
    icon: VideoCameraIcon,
    current: false,
    count: "19",
  },
  {
    name: "Calendar",
    href: "#",
    icon: CalendarIcon,
    current: false,
    count: "20+",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LeftSidebar() {
  return (
    <div className="w-fit flex flex-col items-center space-y-4 border-slate-100 border border-r-2 p-2 pt-4">
      <MenuAlt1Icon className="h-8 w-8 text-slate-400" />
      <nav className="space-y-2" aria-label="Sidebar">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-indigo-50 text-slate-500"
                : "text-slate-600 hover:bg-gray-50 hover:text-indigo-900",
              "group flex flex-col items-center px-3 py-2 text-sm font-normal rounded-md"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <item.icon
              className={classNames(
                item.current
                  ? "text-indigo-500 "
                  : "text-slate-400 group-hover:text-indigo-500",
                "flex-shrink-0 h-6 w-6 mb-2"
              )}
              aria-hidden="true"
            />
            <span
              className={classNames(
                "truncate text-slate-500 group-hover:text-indigo-500",
                item.current ? "text-indigo-500" : ""
              )}
            >
              {item.name}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}

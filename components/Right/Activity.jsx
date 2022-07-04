import { MailIcon, ChevronDoubleDownIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Activity() {
  return (
    <button
      type="button"
      className="w-48 flex justify-between items-center px-6 py-3 border border-transparen text-base font-medium text-green-500   rounded-full hover:border-green-500"
    >
      <span className="flex items-center text-slate-400">
        <div className="w-3 h-3 mr-2 bg-green-500 rounded-full"></div>
        Active
      </span>
      <ChevronDoubleDownIcon className="h-5 w-5" />
    </button>
  );
}

import { LeftSidebar, MiddleBar, RightSidebar } from "../components";

export default function Index() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* <div className="flex w-5/12"> */}
      <div className="flex w-80 overflow-y-auto shrink-0">
        <LeftSidebar />
        <MiddleBar />
      </div>

      <RightSidebar />
    </div>
  );
}

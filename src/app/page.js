import Main from "@/components/main/Main";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex w-full relative">
        <div className="fixed left-0 top-0 w-[30%]">
          <Sidebar />
        </div>
        <div className="w-[70%] absolute right-0">
          <Main />
        </div>
      </div>
    </>
  );
}

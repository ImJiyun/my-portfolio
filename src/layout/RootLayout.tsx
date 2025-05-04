import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="w-full min-h-screen">
      {/* background image */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

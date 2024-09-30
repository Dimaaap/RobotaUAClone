import { Banner, WelcomeSection } from "@/components";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="w-full h-full p-0 m-0">
      <Header />
      <WelcomeSection />
      <Banner />
    </div>
  );
}

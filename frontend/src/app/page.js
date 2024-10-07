import { Banner, CompaniesList, 
  MessangerBanner, WelcomeSection, 
  PopularSection, Footer} from "../components";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="w-full h-full p-0 m-0">
      <Header />
      <WelcomeSection />
      <Banner />
      <CompaniesList />
      <MessangerBanner />
      <PopularSection />
      <Footer />
    </div>
  );
}

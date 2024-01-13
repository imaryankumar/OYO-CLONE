import CityNav from "@/components/CityNav";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import SearchBanner from "@/components/SearchBanner";

const Home = () => {
  return (
    <div className="w-100 h-100 relative">
      <SEO title="OYO:India's Best Online Hotels" />
      <Navbar />
      <div className="min-h-[47.5rem]">
        <CityNav />
        <SearchBanner />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

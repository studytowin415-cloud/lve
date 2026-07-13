import PopularRecipes from "../components/PopularRecipes";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import FeaturedRecipes from "../components/FeaturedRecipes";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Categories />
      <PopularRecipes />
      <FeaturedRecipes />
      <WhyChoose />
      <Footer />
    </>
  );
}
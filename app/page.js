import Image from "next/image";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Team from "@/components/Team";
import Newsletter from "@/components/Newsletter";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div>
      <Banner />
      <Nav />
      <Header />
      <Team />
      <Newsletter />
      <Gallery />
      <Footer />
    </div>
  );
}

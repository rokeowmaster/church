import Image from "next/image";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Team from "@/components/Team";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div>
      <Banner />
      <Header />
      <Team />
      <Newsletter />
    </div>
  );
}

import Hero from "@/components/Hero";
import Navber from "@/components/Navber";

export default function Home() {
  return (
    <main>
      <Navber />
      <Hero/>
      <button className="btn btn-primary">Hello daisyUI!</button>
    </main>
  );
}

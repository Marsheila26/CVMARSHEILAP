import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import "./sheila-style.css";

export default function CVonline() {
  return (   
    <section>
      <Hero/>
      <RiwayatPendidikan/>
      <RiwayatPekerjaan/>
    </section>
  );
}


import Image from "next/image";
import Beneficios from "./Components/Beneficios/page"
import Para from "./Components/Para/page"
import Obtener from "./Components/Obtener/page"
import Desde from "./Components/Desde/page"
import Apk from "./Components/Apk/page"
import Opiniones from "./Components/Opiniones/page"
import Bonus from "./Components/Bonus/page"
import Planes from "./Components/Planes/page"
import Recordatorio from "./Components/Recordatorio/page"

export default function Home() {
  return (
    <main className="w-full">
      <Beneficios />
      <Para />
      <Obtener />
      <Desde />
      <Apk />
      <Opiniones />
      <Bonus />
      <Planes />
      <Recordatorio />
    </main>
  );
}

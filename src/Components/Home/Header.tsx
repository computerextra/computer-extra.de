import TelekomWand from "../../Assets/images/TelekomWand.webp";
import LadenImage from "../../Assets/images/laden.webp";
import GradientHeader from "../GradientHeader";

export default function Header() {
  return (
    <section className="w-full lg:w-[60%] mx-0 lg:mx-auto grid lg:grid-cols-2 gap-10 mb-10 ">
      <div>
        <GradientHeader>
          Wir bieten Ihnen ein ganzes Spektrum an Dienstleistungen im Bereich
          der IT.
        </GradientHeader>

        <p className="text-lg">
          Ob IT-Infrastruktur, Security oder Kommunikation, Computer Extra hat
          die passenden Produkte und Services verfügbar. Privat-, Office- und
          Gaming-PCs werden direkt auf Ihre Bedürfnisse zugeschnitten. Die
          exklusive Partnerschaft mit der Telekom für Business- und Privattarife
          runden das Gesamtpaket ab. Webdesign und -entwicklung sowie das
          passende Hosting von Webseiten und Mails darf dabei nicht fehlen. Wenn
          doch einmal etwas schiefläuft, sind die kompetenten Techniker per
          Fernwartung schnell am Start und können viele Probleme in kürzester
          Zeit aus der Ferne lösen. Falls das Problem größer oder komplexer
          wird, fahren die Kollegen auch gerne vor Ort.
        </p>
      </div>
      <div className="hidden lg:grid xl:relative animate-home-bounce">
        <img
          src={LadenImage}
          alt="Ein Blick in den Laden"
          className="block xl:absolute z-20 rounded-xl top-10 left-0 max-w-[400px] hover:z-30 hover:scale-105 transition-all ease-in-out duration-300 hover:ring "
          height={"auto"}
        />
        <img
          src={TelekomWand}
          alt="Telekom Ecke"
          className="block xl:absolute z-10 rounded-xl bottom-10 right-0 max-w-[400px] hover:z-30 hover:scale-105 transition-all ease-in-out duration-300 hover:ring "
          height={"auto"}
        />
      </div>
    </section>
  );
}

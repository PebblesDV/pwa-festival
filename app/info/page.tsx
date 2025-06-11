import Footer from "@/components/footer";
import Header from "@/components/header";
import FAQ from "@/components/faq";

const faqItems = [
  {
    question: "Ik gebruik medicatie. Wat nu?",
    answer:
      "Het is toegestaan om medicijnen mee te nemen in een dosis die je maximaal nodig hebt op 1 dag. <br /> Een doktersverklaring/medicatiepaspoort is noodzakelijk. <br /> De beveiliging zal jouw documentatie beoordelen en de medicijnen controleren. <br /> Het kan zijn dat de EHBO jouw medicijnen (bijvoorbeeld als deze gevaarlijk zijn i.c.m. alcohol) in bewaring neemt en je deze enkel kan innemen bij de EHBO.",
  },
  {
    question: "Mag ik het festivalterrein tussentijds verlaten?",
    answer:
      "Nee, helaas is dat niet mogelijk. <br /> Om de veiligheid van alle bezoekers te kunnen waarborgen, kunnen we het niet toestaan dat het festivalterrein tussentijds verlaten wordt. Wij hebben namelijk geen zicht op hetgeen wat een bezoeker buiten het festivalterrein doet en ik welke staat deze het terrein weer betreedt. Hier kunnen dan ook geen uitzonderingen voor gemaakt worden. <br /> Wij hebben genoeg loungeplekken, foodstands & barren om het een hele dag uit te kunnen houden.",
  },
  {
    question: "Zijn er lockers?",
    answer:
      "Yes, deze zijn er! Op het terrein kun je medium & grote lockers huren waar je je spullen veilig kunt opbergen. <br /> Hier passen 3 à 4 jassen in. <br /> Goed om te weten: je kunt je kluisje gedurende de hele dag openen en sluiten zo vaak je wilt. <br /> Het is niet mogelijk om online een kluisje te reserveren. ",
  },
];

const transportItems = [
  {
    question: "Fiets",
    answer:
      "Er is een grote gratis fietsenstalling aanwezig waar je jouw fiets de gehele dag kunt stallen.",
  },
  {
    question: "Auto",
    answer:
      "Je kunt een parkingticket aanschaffen. Parkeren kan op P+R Papendorp, volg hiervoor de borden 'P online ticket'. <br /> Heb je geen ticket van te voren gekocht? Dan kun je bij de parkeerwachter op locatie een parkeerticket aanschaffen (PIN ONLY). <br /> Let wel op: VOL=VOL",
  },
  {
    question: "OV",
    answer:
      "Kom je met het openbaar vervoer naar ❤️U Festival? <br /> Plan dan je trip via <a href='https://9292.nl' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>9292.nl</a>.",
  },
  {
    question: "Shuttlebus",
    answer:
      "Vanaf Utrecht Centraal kun je onze gratis shuttlebus richting het festivalterrein pakken. Je vindt deze bus op het centraal station aan de Mineurslaan. Volg de witte bordjes met zwarte pijlen én ' ❤️U Festival'. <br /> De bus rijdt tussen 12:00 uur & 19:00 uur richting het festival en vanaf 21:00 uur kun je weer instappen om richting het station te gaan.",
  },
  {
    question: "Taxi + Kiss & Ride",
    answer:
      "Navigeer naar Strijkviertel, De Meern (Utrecht). Volg de borden 'Kiss & Ride ❤️U Festival', zodra je in de buurt bent van het festivalterrein.",
  },
];

export default function InfoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto py-8 px-4 flex flex-col gap-10">
          <h1 className="text-3xl text-black">Festival Information</h1>

          <div className="flex flex-col gap-2">
            <h2 className="text-black">Transport</h2>
            <FAQ items={transportItems} />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-black">FAQ</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="text-black flex flex-col gap-2">
            <h2>Golden-GLU</h2>

            <div>
              <p>
                Studenten van het GLU hebben tijdens het festival speciale
                privileges en zijn herkenbaar aan een gouden armbandje.
              </p>
              <p>
                Met dit gouden armbandje kunnen ze tijdens het festival gebruik
                maken van de gouden toiletten en met goud gemarkeerde
                bestelpunten aan de bars zonder in een rij te hoeven staan.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

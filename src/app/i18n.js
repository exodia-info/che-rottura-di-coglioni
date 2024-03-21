import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "it",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    it: {
      translation: {
        welcome: "Vieni a visitarci!",
        array: ["Wi-Fi", "TV", "Giochi da tavolo", "Veranda"],
        esternoTitolo:
          "Immersa in ampi spazi di verde a due passi da Porto Ceresio",
        esternoDescrizione:
          "La casa offre un grande giardino curato e folto di piante, nel quale potrete trovare una veranda e una zona grill, sarà il luogo perfetto per rilassarsi e fare grigliate sotto il sole con amici o in famiglia",
        array2: [
          {
            title: "Appena arrivati...",
            src: "casa2.jpg",
          },
          {
            title: "Entrata principale",
            src: "casa1.jpg",
          },
          {
            title: "Zona barbecue",
            src: "casa3.jpg",
          },
          {
            title: "Il vialetto",
            src: "casa4.jpg",
          },
        ],
        internoTitolo:
          "Spaziosi e accoglienti interni in un'atmosfera mite e confortevole",
        internoDescrizione:
          "Una volta entrati verrete accolti da tradizionali interni con arredi in legno che ancora raccontano la storia di una casa, ma integrati con comodità ed elementi moderni. In un ampio spazio interno potrete rilassarvi scaldandovi vicino al camino oppure guardando la televisione.",
        array3: [
          {
            title: "Zona camino",
            src: "dentro1.jpg",
          },
          {
            title: "Living room",
            src: "dentro2.jpg",
          },
          {
            title: "Zona televisione",
            src: "dentro3.jpg",
          },
          {
            title: "Camera matrimoniale",
            src: "dentro4.jpg",
          },
          {
            title: "Seconda matrimoniale",
            src: "dentro5.jpg",
          },
          {
            title: "Letti singoli",
            src: "dentro6.jpg",
          },
        ],
        lagoTitolo: "Visita",
        lagoAgo: "concediti  una  serata  al  lago",
        aspetto: "Ti Aspettiamo",
        contattaci: "Contattaci",
      },
    },
    en: {
      translation: {
        welcome: "Come and visit us!",
        array: ["Wi-Fi", "TV", "Board games", "Veranda"],
        esternoTitolo: "suca",
        esternoDescrizione:
          "Con un grande giardino curato e immerso tra le piante, che offre una veranda e una zona grill, sarà il luogo perfetto per rilassarsi con amici o in famiglia",
        array2: [
          {
            title: "As you arrive...",
            src: "casa2.jpg",
          },
          {
            title: "Main entrance",
            src: "casa1.jpg",
          },
          {
            title: "Barbecue area",
            src: "casa3.jpg",
          },
          {
            title: "The driveway",
            src: "casa4.jpg",
          },
        ],

        internoTitolo:
          "Spaziosi e accoglienti interni in un'atmosfera mite e confortevole",
        internoDescrizione:
          "Tradizionali interni con arredi in legno che ancora raccontano la storia di una casa, ma integrati con comodità ed elementi moderni. In un ampio spazio interno potrete rilassarvi scaldandovi vicino al camino oppure guardando la televisione.",
        array3: [
          {
            title: "Zona camino",
            src: "dentro1.jpg",
          },
          {
            title: "Living room",
            src: "dentro2.jpg",
          },
          {
            title: "Zona televisione",
            src: "dentro3.jpg",
          },
          {
            title: "Camera matrimoniale",
            src: "dentro4.jpg",
          },
        ],
        lagoTitolo: "Visita",
        lagoAgo: "concediti  una  serata  al  lago",
        aspetto: "See you soon",
        contattaci: "Contact us",
      },
    },
  },
});

export default i18n;

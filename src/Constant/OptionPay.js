import DealIcon from "../assets/DealIcon.svg";
import QuotationIcon from "../assets/QuotationIcon.svg";
import DebitCardIcon from "../assets/DebitCardIcon.svg";
import DebitCardReverseIcon from "../assets/DebitCardReverseIcon.svg";

export const optionPay = [
  {
    imgUrl: DebitCardIcon,
    imgAlt: "DebitCardReverseIcon",
    text: "Tarjeta de crédito",
    routeText: "Ver promociones bancarias",
    route: "/targeta",
    key: 1,
  },
  {
    imgUrl: DebitCardReverseIcon,
    imgAlt: "DebitCardIcon",
    text: "Tarjeta de débito",
    routeText: "Ver más",
    route: "/targeta",
    key: 2,
  },
  {
    imgUrl: QuotationIcon,
    imgAlt: "QuotationIcon",
    text: "Cuotas sin tarjeta",
    routeText: "Conocé Mercado Crédito",
    route: "/targeta",
    key: 3,
  },
  {
    imgUrl: DealIcon,
    imgAlt: "DealIcon",
    text: "Efectivo",
    routeText: "Ver más",
    route: "/targeta",
    key: 4,
  },
];

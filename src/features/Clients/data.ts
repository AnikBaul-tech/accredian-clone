import { Client } from "./types";
import relianceImg from "../../../public/images/logos/reliance.png"
import hclImg from "../../../public/images/logos/hcl.png"
import ibmImg from "../../../public/images/logos/ibm.png"
import crifImg from "../../../public/images/logos/crf.png"
import adpImg from "../../../public/images/logos/adp.svg"
import bayerImg from "../../../public/images/logos/bayer.svg"
export const clients: Client[] = [
  {
    id: 1,
    name: "Reliance",
    image: relianceImg,
  },
  {
    id: 2,
    name: "HCL",
    image: hclImg,
  },
  {
    id: 3,
    name: "IBM",
    image: ibmImg,
  },
  {
    id: 4,
    name: "CRIF",
    image: crifImg,
  },
  {
    id: 5,
    name: "ADP",
    image: adpImg,
  },
  {
    id: 6,
    name: "Bayer",
    image: bayerImg,
  },
];
export type ParentStatus = "active" | "pending";

export interface ChildParent {
  id: string;
  name: string;
  relation: string;
  status: ParentStatus;
  initial: string;
  color: string;
}

export interface Child {
  id: string;
  name: string;
  age: string;
  room: string;
  initial: string;
  avatarBg: string;
  avatarText: string;
  allergyLabel?: string;
  allergies?: string;
  birthDate: string;
  joinedAt: string;
  parents: ChildParent[];
}

export const children: Child[] = [
  {
    id: "mateo-fernandez",
    name: "Mateo Fernández",
    age: "3 años",
    room: "Soles",
    initial: "M",
    avatarBg: "#A9D9E8",
    avatarText: "#1F7A93",
    allergyLabel: "MANÍ",
    allergies:
      "Alergia al maní. Evitar frutos secos. Lleva inhalador en la mochila.",
    birthDate: "12 mar 2022",
    joinedAt: "feb 2025",
    parents: [
      {
        id: "lucia-fernandez",
        name: "Lucía Fernández",
        relation: "Mamá",
        status: "active",
        initial: "L",
        color: "#C9B6E8",
      },
      {
        id: "diego-fernandez",
        name: "Diego Fernández",
        relation: "Papá",
        status: "pending",
        initial: "D",
        color: "#A9C7E8",
      },
    ],
  },
  {
    id: "sofia-mendez",
    name: "Sofía Méndez",
    age: "2 años",
    room: "Soles",
    initial: "S",
    avatarBg: "#F4B8CC",
    avatarText: "#C44A7A",
    birthDate: "14 abr 2023",
    joinedAt: "mar 2025",
    parents: [
      {
        id: "mariana-mendez",
        name: "Mariana Méndez",
        relation: "Mamá",
        status: "active",
        initial: "M",
        color: "#F2937A",
      },
    ],
  },
  {
    id: "benjamin-ruiz",
    name: "Benjamín Ruiz",
    age: "3 años",
    room: "Soles",
    initial: "B",
    avatarBg: "#B9DEC4",
    avatarText: "#3E8B62",
    birthDate: "7 sep 2021",
    joinedAt: "abr 2024",
    parents: [
      {
        id: "paula-ruiz",
        name: "Paula Ruiz",
        relation: "Mamá",
        status: "active",
        initial: "P",
        color: "#A9C7E8",
      },
      {
        id: "jorge-ruiz",
        name: "Jorge Ruiz",
        relation: "Papá",
        status: "active",
        initial: "J",
        color: "#B9DEC4",
      },
    ],
  },
  {
    id: "valentina-soto",
    name: "Valentina Soto",
    age: "2 años",
    room: "Soles",
    initial: "V",
    avatarBg: "#F4DC8E",
    avatarText: "#9A7B1E",
    birthDate: "21 ene 2023",
    joinedAt: "ene 2025",
    parents: [],
  },
  {
    id: "tomas-diaz",
    name: "Tomás Díaz",
    age: "3 años",
    room: "Soles",
    initial: "T",
    avatarBg: "#C9B6E8",
    avatarText: "#7B5FC0",
    allergyLabel: "LACTOSA",
    allergies:
      "Alergia a la lactosa. Evitar lácteos en meriendas. Revisar etiquetas antes de servir.",
    birthDate: "29 jul 2021",
    joinedAt: "may 2024",
    parents: [
      {
        id: "carla-diaz",
        name: "Carla Díaz",
        relation: "Mamá",
        status: "active",
        initial: "C",
        color: "#C9B6E8",
      },
    ],
  },
  {
    id: "emma-castro",
    name: "Emma Castro",
    age: "2 años",
    room: "Soles",
    initial: "E",
    avatarBg: "#F4B8CC",
    avatarText: "#C44A7A",
    birthDate: "8 may 2023",
    joinedAt: "ago 2024",
    parents: [
      {
        id: "romina-castro",
        name: "Romina Castro",
        relation: "Mamá",
        status: "active",
        initial: "R",
        color: "#F4B8CC",
      },
    ],
  },
  {
    id: "lucas-romero",
    name: "Lucas Romero",
    age: "3 años",
    room: "Soles",
    initial: "L",
    avatarBg: "#A9D9E8",
    avatarText: "#1F7A93",
    birthDate: "16 feb 2022",
    joinedAt: "sep 2024",
    parents: [
      {
        id: "sergio-romero",
        name: "Sergio Romero",
        relation: "Papá",
        status: "active",
        initial: "S",
        color: "#A9D9E8",
      },
    ],
  },
  {
    id: "olivia-vega",
    name: "Olivia Vega",
    age: "2 años",
    room: "Soles",
    initial: "O",
    avatarBg: "#B9DEC4",
    avatarText: "#3E8B62",
    birthDate: "12 oct 2022",
    joinedAt: "jun 2025",
    parents: [
      {
        id: "nadia-vega",
        name: "Nadia Vega",
        relation: "Mamá",
        status: "pending",
        initial: "N",
        color: "#B9DEC4",
      },
    ],
  },
];

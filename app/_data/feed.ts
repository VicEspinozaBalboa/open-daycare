export type PostKind = "achievement" | "activity" | "announcement";

export interface FeedPost {
  id: string;
  kind: PostKind;
  authorInitial: string;
  authorName: string;
  time: string;
  postedBy: string;
  audience: string;
  body: string;
  photo?: { label: string };
  likes: number;
  comments: number;
}

export interface PostKindStyle {
  label: string;
  dot: string;
  pill: string;
  text: string;
  avatarBg: string;
  avatarText: string;
}

export interface CurrentUser {
  name: string;
  initial: string;
  role: string;
}

export interface Room {
  name: string;
  greeting: string;
  subtitle: string;
}

export const currentUser: CurrentUser = {
  name: "Caro Giménez",
  initial: "C",
  role: "Maestra · Soles",
};

export const room: Room = {
  name: "Sala Soles",
  greeting: "Buenas, Caro",
  subtitle: "12 niños · martes 17 jun",
};

export const postKindStyles: Record<PostKind, PostKindStyle> = {
  achievement: {
    label: "LOGRO",
    dot: "#3E9B6C",
    pill: "#CFEBD8",
    text: "#3E9B6C",
    avatarBg: "#A9D9E8",
    avatarText: "#1F7A93",
  },
  activity: {
    label: "ACTIVIDAD",
    dot: "#2E89A6",
    pill: "#C7E7F1",
    text: "#2E89A6",
    avatarBg: "#A9D9E8",
    avatarText: "#1F7A93",
  },
  announcement: {
    label: "ANUNCIO",
    dot: "#4E72C8",
    pill: "#CCD8F4",
    text: "#4E72C8",
    avatarBg: "#CCD8F4",
    avatarText: "#4E72C8",
  },
};

export const feedPosts: FeedPost[] = [
  {
    id: "post-achievement",
    kind: "achievement",
    authorInitial: "M",
    authorName: "Mateo",
    time: "14:20",
    postedBy: "publicado por vos",
    audience: "Para: familia de Mateo",
    body: "¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso.",
    likes: 3,
    comments: 1,
  },
  {
    id: "post-activity",
    kind: "activity",
    authorInitial: "M",
    authorName: "Mateo",
    time: "09:40",
    postedBy: "publicado por vos",
    audience: "Para: familia de Mateo",
    body: "Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores.",
    photo: { label: "Foto · pintando con témperas" },
    likes: 5,
    comments: 2,
  },
  {
    id: "post-announcement",
    kind: "announcement",
    authorInitial: "",
    authorName: "Anuncio general",
    time: "07:50",
    postedBy: "publicado por vos",
    audience: "Para: toda la sala",
    body: "El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua.",
    likes: 8,
    comments: 0,
  },
];

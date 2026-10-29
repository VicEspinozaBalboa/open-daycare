export interface Invitation {
  code: string;
  email: string;
  childName: string;
  room: string;
  childInitial: string;
  avatarBg: string;
  avatarText: string;
}

export const invitation: Invitation = {
  code: "7K4P9",
  email: "lucia.fernandez@gmail.com",
  childName: "Mateo",
  room: "Sala Soles",
  childInitial: "M",
  avatarBg: "#A9D9E8",
  avatarText: "#1F7A93",
};

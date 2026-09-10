export const LINK_URLS = {
  IG: "https://www.instagram.com",
  WA: "https://wa.me",
};

export const CONTACT_LIST = {
  phoneNumber: "+6285784146189",
  igUsername: "_highcall_",
};

export const IMGS = {
  kopiMantu: [
    "at-kopi-mantu-1.jpeg",
    "at-kopi-mantu-2.jpeg",
    "at-kopi-mantu-3.jpeg",
    "at-kopi-mantu-4.jpeg",
    "at-kopi-mantu-5.jpeg",
  ],
  libre: [
    "at-libre-1.jpeg",
    "at-libre-2.jpeg",
    "at-libre-3.jpeg",
    "at-libre-4.jpeg",
    "at-libre-5.jpeg",
  ],
  burningBar: [
    "at-burning-bar-1.jpeg",
    "at-burning-bar-2.jpeg",
    "at-burning-bar-3.jpeg",
    "at-burning-bar-4.jpeg",
    "at-burning-bar-5.jpeg",
  ],
  dopamine: [
    "at-dopamine-1.jpeg",
    "at-dopamine-1.jpeg",
    "at-dopamine-1.jpeg",
    "at-dopamine-1.jpeg",
    "at-dopamine-1.jpeg",
  ],
} as const;

export const getImages = (place: keyof typeof IMGS, idx: number) => {
  return `/images/${IMGS[place][idx]}`;
};

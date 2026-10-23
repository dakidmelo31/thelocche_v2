export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Online booking site. Every "Book" button on the site links here. */
export const BOOKING_URL = "https://booking.thelocche.com";

export const CONTACT = {
  city: "Andover, Minnesota",
  phone: "+1 502 808 4131",
  phoneTel: "+15028084131",
  phoneHref: "tel:+15028084131",
  email: "contact@locche.com",
} as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    handle: "@locche",
    href: "https://instagram.com/locche",
  },
  { label: "TikTok", handle: "@locche", href: "https://tiktok.com/@locche" },
  { label: "Facebook", handle: "LocChe", href: "https://facebook.com/LocChe" },
  {
    label: "Pinterest",
    handle: "@locche",
    href: "https://pinterest.com/locche",
  },
] as const;

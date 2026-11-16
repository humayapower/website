/** Single source for contact details used by the footer, CTAs and contact page. */
export const PHONE_DISPLAY = "(+91) 729-1000-560";
export const PHONE_TEL = "tel:+917291000560";
export const EMAIL = "info@humayapower.in";
export const ADDRESS =
  "First Floor, 25/1, Ambedkar Colony, Jeewanpur, Jawahar Nagar, New Delhi, Delhi, 110094";

/** wa.me link to the business number, with an optional prefilled message. */
export function whatsappUrl(
  message = "Hi Humaya Power, I would like to know more.",
) {
  return `https://wa.me/917291000560?text=${encodeURIComponent(message)}`;
}

/** `/contact?interest=<key>` pre-selects the enquiry dropdown. */
export const interestOptions: Record<string, string> = {
  ev: "EV batteries",
  storage: "Storage batteries",
  rental: "Battery rental",
  custom: "Custom battery pack",
  swap: "Swap station partnership",
};

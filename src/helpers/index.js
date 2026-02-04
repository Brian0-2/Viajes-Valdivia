export const currentYear = () => new Date().getFullYear();
export const yearsSince2002 = () =>  new Date().getFullYear() - 2002;
export const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
export const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
}
export function formatPhoneNumber(number) {
  const str = number.toString();
  return `(${str.slice(0, 3)}) ${str.slice(3, 6)} ${str.slice(6)}`;
}

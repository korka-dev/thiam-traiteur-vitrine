function unsplash(id: string, w = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const heroImage = unsplash("photo-1663530761401-15eefb544889", 1800);

export const productionImage = unsplash("photo-1762330018258-2cf9b8f80618", 1400);
export const tournesolImage = unsplash("photo-1526069631228-723c945bea6b", 1400);

export const dishes = [
  {
    name: "Thiéboudienne royal",
    image: unsplash("photo-1634324092526-91f5e878b72f"),
  },
  {
    name: "Yassa poulet",
    image: unsplash("photo-1772693471187-6e7d364f99ee"),
  },
  {
    name: "Mafé bœuf",
    image: unsplash("photo-1773620494047-50cb58f59bc5"),
  },
  {
    name: "Plateau de fruits de mer",
    image: unsplash("photo-1665401015549-712c0dc5ef85"),
  },
  {
    name: "Buffet cocktail",
    image: unsplash("photo-1751651054934-3fbdf1d54d8b"),
  },
  {
    name: "Pâtisserie fine",
    image: unsplash("photo-1711513335836-d6a138f7a340"),
  },
];

export const services = [
  {
    title: "Mariages",
    desc: "Menus raffinés et service impeccable pour le plus beau jour de votre vie.",
    image: unsplash("photo-1511795409834-ef04bbd61622"),
  },
  {
    title: "Anniversaires",
    desc: "Des célébrations mémorables avec des plats savoureux pour petits et grands.",
    image: unsplash("photo-1781888699466-f0daedce2f6d"),
  },
  {
    title: "Baptêmes & Cérémonies",
    desc: "Un accompagnement traditionnel et soigné pour vos moments familiaux.",
    image: unsplash("photo-1763463608728-6eeb317023d2"),
  },
  {
    title: "Événements d'entreprise",
    desc: "Séminaires, cocktails et réceptions professionnelles à la hauteur de votre image.",
    image: unsplash("photo-1768508949921-9ef52e81bf1b"),
  },
  {
    title: "Cocktails & Réceptions",
    desc: "Buffets et pièces cocktail élégantes pour toutes vos réceptions privées.",
    image: unsplash("photo-1768508663341-ed48fd1e69d8"),
  },
  {
    title: "Menus sur mesure",
    desc: "Une carte personnalisée selon vos goûts, votre budget et le nombre d'invités.",
    image: unsplash("photo-1649615644622-6d83f48e69c5"),
  },
];

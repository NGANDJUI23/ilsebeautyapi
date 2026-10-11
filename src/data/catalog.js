/* ===== Modifier ici le menu et les horaires du salon ===== */
export const SERVICES = [
  { id: "classic",  cat: "Full sets",    name: "Classic full set",  mins: 120, price: 75,  desc: "One extension on each natural lash. Clean, defined and mascara-like." },
  { id: "hybrid",   cat: "Full sets",    name: "Hybrid full set",   mins: 135, price: 90,  desc: "Classic and volume fans blended for soft texture and fullness.", sig: true },
  { id: "volume",   cat: "Full sets",    name: "Volume full set",   mins: 150, price: 105, desc: "Handmade fans of fine lashes for a dense, fluffy line.", sig: true },
  { id: "mega",     cat: "Full sets",    name: "Mega volume set",   mins: 165, price: 125, desc: "Ultra-fine fans for the darkest, most dramatic finish." },
  { id: "wet",      cat: "Full sets",    name: "Wet look set",      mins: 135, price: 95,  desc: "Closed, spiky fans that look glossy and freshly wet.", sig: true },
  { id: "fclassic", cat: "Fills",        name: "Classic fill",      mins: 75,  price: 50,  desc: "Refresh a classic set within three weeks." },
  { id: "fhybrid",  cat: "Fills",        name: "Hybrid fill",       mins: 80,  price: 60,  desc: "Refresh a hybrid set within three weeks." },
  { id: "fvolume",  cat: "Fills",        name: "Volume fill",       mins: 90,  price: 70,  desc: "Refresh a volume or mega set within three weeks." },
  { id: "lift",     cat: "Lift & brows", name: "Lash lift & tint",  mins: 60,  price: 60,  desc: "Lifts and darkens your own lashes for six to eight weeks." },
  { id: "lam",      cat: "Lift & brows", name: "Brow lamination",   mins: 45,  price: 50,  desc: "Sets brows into a brushed-up, fuller shape." },
  { id: "shape",    cat: "Lift & brows", name: "Brow shape & tint", mins: 30,  price: 30,  desc: "Wax, tidy and tint to frame the face." },
  { id: "removal",  cat: "Extras",       name: "Lash removal",      mins: 20,  price: 20,  desc: "Gentle, safe removal of extensions from any studio." },
  { id: "patch",    cat: "Extras",       name: "Patch test",        mins: 10,  price: 0,   desc: "Free. Book 48 hours before your first set." }
];

// Dimanche..Samedi, [heure d'ouverture, heure de fermeture] ou null = fermé
export const HOURS = [[12, 17], [9, 19], [9, 19], [9, 19], [9, 19], [9, 19], [9, 17]];

// Nombre de jours réservables à l'avance (à partir de demain)
export const BOOKING_WINDOW_DAYS = 21;

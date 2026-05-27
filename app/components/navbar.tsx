import { useState, useEffect } from "react";
import { Link, useLocation } from "@remix-run/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { useCartStore } from "../store/cartStore";
import { useLocalePath, useLocale } from "../hooks/useLocalePath";
import DarkModeToggle, { useDarkMode } from "./DarkModeToggle";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const lp = useLocalePath();
  const locale = useLocale();
  const otherLocale = locale === "fr" ? "en" : "fr";

  const otherLocalePath = location.pathname.replace(`/${locale}`, `/${otherLocale}`);

  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const totalItems = mounted ? getTotalItems() : 0;

  const { dark } = useDarkMode();

  const isHomePage =
    location.pathname === `/${locale}` || location.pathname === `/${locale}/`;
  const isTransparent = isHomePage && !scrolled;

  const isActive = (path: string) =>
    location.pathname === lp(path) || location.pathname.startsWith(lp(path) + "/");

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isTransparent ? "bg-transparent" : "bg-beige dark:bg-gray-950 shadow-md dark:shadow-gray-900"
    }`}>
      <div className="px-4 sm:px-6 md:px-[60px] lg:px-[120px]">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">

          {/* Left: Logo + hamburger */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 relative">

            <Link to={lp("/")} className="flex items-center">
              <img
                src={(isTransparent || dark) ? "/assets/logo_t_poulettes_white.png" : "/assets/logo_t_poulettes.png"}
                alt="Les Poulettes"
                className={`h-16 sm:h-24 md:h-28 lg:h-40 w-auto max-w-[200px] sm:max-w-[240px] lg:max-w-[300px] block object-contain transition-transform duration-500 ease-in-out ${
                  scrolled ? "scale-90" : "scale-100"
                }`}
              />
            </Link>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden group flex items-center gap-1.5 sm:gap-2 focus:outline-none px-2 sm:px-3 py-2 rounded-lg transition"
              aria-label={menuOpen ? t("nav.aria_close") : t("nav.aria_open")}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className={`w-6 h-6 transition-colors duration-300 ${
                  isTransparent ? "text-white" : "text-black dark:text-gray-100"
                } group-hover:text-benin-jaune`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              id="mobile-menu"
              aria-hidden={!menuOpen}
              className={`bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-xl rounded-2xl mt-2 p-3 absolute top-full left-0 w-64 z-50 transition-all duration-200 ease-out ${
                menuOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto animate-slide-down"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex flex-col space-y-0.5">
                {[
                  { path: "/qui-sommes-nous", label: t("nav.about") },
                  { path: "/realisations",    label: t("nav.shop") },
                  { path: "/commandes-personnalisees", label: t("nav.custom") },
                  { path: "/contact",         label: t("nav.contact") },
                ].map(({ path, label }) => (
                  <Link
                    key={path}
                    to={lp(path)}
                    onClick={() => setMenuOpen(false)}
                    className={`font-basecoat uppercase font-semibold hover:text-benin-jaune px-4 py-3 rounded-xl transition text-sm ${
                      isActive(path)
                        ? "text-benin-jaune bg-benin-jaune/10"
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-800"
                    }`}
                  >
                    {label}
                  </Link>
                ))}

                <Link
                  to={lp("/#ou-nous-trouver")}
                  onClick={() => setMenuOpen(false)}
                  className="font-basecoat uppercase font-semibold text-gray-800 dark:text-gray-200 hover:text-benin-jaune px-4 py-3 rounded-xl transition text-sm hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-800"
                >
                  {t("nav.locations")}
                </Link>

                <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mt-1 flex items-center justify-between px-2">
                  <Link
                    to={otherLocalePath}
                    onClick={() => setMenuOpen(false)}
                    className="font-basecoat text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 hover:text-benin-jaune px-2 py-2 rounded-lg transition flex items-center gap-2"
                  >
                    <span className="text-base">{otherLocale === "en" ? "🇬🇧" : "🇫🇷"}</span>
                    {otherLocale === "en" ? "English" : "Français"}
                  </Link>
                  <DarkModeToggle />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-3 xl:gap-5">
            {[
              { path: "/qui-sommes-nous",           label: t("nav.about") },
              { path: "/realisations",              label: t("nav.shop") },
              { path: "/commandes-personnalisees",  label: t("nav.custom") },
              { path: "/actualites",                label: t("nav.news") },
              { path: "/contact",                   label: t("nav.contact") },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={lp(path)}
                className={`font-basecoat font-bold uppercase tracking-wide hover:text-benin-jaune transition-colors duration-300 text-sm lg:text-base ${
                  isActive(path) ? "text-benin-jaune" : isTransparent ? "text-white" : "text-black dark:text-gray-100"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Language dropdown */}
            <div className="relative group">
              <button className={`font-basecoat font-semibold uppercase tracking-wide text-sm flex items-center gap-1 transition-colors duration-300 hover:text-benin-jaune ${
                isTransparent ? "text-white/70" : "text-gray-400 dark:text-gray-500"
              }`}>
                {locale.toUpperCase()}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-14 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
              <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-lg rounded-xl overflow-hidden">
                {["fr", "en"].map((lang) => (
                  <Link
                    key={lang}
                    to={location.pathname.replace(`/${locale}`, `/${lang}`)}
                    className={`block px-3 py-2 font-basecoat font-semibold uppercase text-xs tracking-wide text-center transition-colors hover:text-benin-jaune hover:bg-gray-50 dark:hover:bg-gray-800 ${
                      locale === lang ? "text-benin-jaune" : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </Link>
                ))}
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

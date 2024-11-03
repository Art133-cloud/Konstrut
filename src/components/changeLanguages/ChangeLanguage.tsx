// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";

// const LanguageSwitcher = () => {
//   const pathname = usePathname();
//   const locale = typeof window !== "undefined" ? new Intl.Locale(navigator.language).language : "en"; // Получаем текущий язык

//   return (
//     <div>
//       <Link href={pathname} locale="en">
//         <button disabled={locale === "en"}>English</button>
//       </Link>
//       <Link href={pathname} locale="hy">
//         <button disabled={locale === "hy"}>Հայերեն</button>
//       </Link>
//     </div>
//   );
// };

// export default LanguageSwitcher;


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { name: "Home", href: "/" },
  { name: "Bio", href: "/bio" },
  { name: "Assignment", href: "/assignment" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-900">
          My<span className="text-blue-500">Profile.</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-6">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                pathname === menu.href
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

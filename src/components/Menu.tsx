"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems, role, Role } from "@/lib/data";

export default function Menu({
  currentRole,
  onClose,
}: {
  currentRole?: Role;
  onClose?: () => void;
}) {
  const pathname = usePathname();
  const r = currentRole ?? role;

  return (
    <div className="h-full flex flex-col">
      {/* Profile Header */}
      <div className="flex items-center gap-3 border-b border-black/10 pb-4">
        <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
          <Image src="/profile.png" alt="profile" width={24} height={24} />
        </div>

        <div className="leading-tight">
          <div className="text-sm font-semibold text-black">
            {r === "admin" ? "ผู้ดูแลระบบครุภัณฑ์" : "ผู้ใช้งานระบบครุภัณฑ์"}
          </div>
          <div className="text-xs text-black/70">
            สำนักปลัดเทศบาลตำบลบ้านโตนด
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="mt-4 flex-1 space-y-1">
        {menuItems
          .filter((item) => item.visible.includes(r))
          .map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            const isLogout = item.href === "/logout";

            return (
              <Link
                key={item.href + item.label}
                href={item.href}
                onClick={onClose}
                className={[
                  "flex items-center gap-3 px-3 py-2 rounded-md transition",
                  active ? "bg-white/50" : "hover:bg-white/40",
                  isLogout ? "mt-6 text-red-600 hover:bg-red-500/10" : "",
                ].join(" ")}
              >
                <Image src={item.icon} alt={item.label} width={20} height={20} />
                <span className="text-sm text-black">{item.label}</span>
              </Link>
            );
          })}
      </nav>

      {/* Footer */}
      <div className="pt-3 border-t border-black/10 text-xs text-black/60">
        เวอร์ชันระบบ: 1.0
      </div>
    </div>
  );
}

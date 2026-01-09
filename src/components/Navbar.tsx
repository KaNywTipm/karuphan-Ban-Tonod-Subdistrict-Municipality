"use client";

import Image from "next/image";

export default function Navbar({
  onMenuClick,
}: {
  onMenuClick?: () => void;
}) {
  return (
    <header className="h-16 bg-[#D8F1FF] border-b flex items-center px-4">
      {/* Left (Mobile menu button) */}
      <button
        className="lg:hidden mr-3 w-10 h-10 rounded-md bg-white/70 hover:bg-white flex items-center justify-center"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <Image src="/list.png" alt="menu" width={20} height={20} />
      </button>

      {/* Title */}
      <div className="flex-1">
        <div className="font-semibold text-black">ระบบบันทึกครุภัณฑ์</div>
        <div className="text-xs text-black/70">
          สำนักปลัดเทศบาลตำบลบ้านโตนด
        </div>
      </div>

      {/* Right logo */}
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
        <Image
          src="/public/logoทต.โตนด.png"
          alt="logo"
          width={44}
          height={44}
          className="rounded-full"
        />
      </div>
    </header>
  );
}

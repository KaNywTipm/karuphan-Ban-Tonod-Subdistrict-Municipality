"use client";

import Image from "next/image";
import Link from "next/link";
import HelpButton from "@/components/HelpButton";

export default function HomeRolePage() {
  return (
    <div className="min-h-screen bg-[#D8F1FF] p-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-sm text-black/50 mb-3">เลือกสิทธิ์การใช้งาน</div>

        <div className="relative overflow-hidden rounded-2xl bg-white shadow">
          {/* Background */}
          <div className="relative h-140 md:h-155 w-full">
            <Image
              src="/picทต.โตนด.png"
              alt="เทศบาลตำบลบ้านโตนด"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
        </div>

        {/* Card */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-140 md:max-w-160 rounded-2xl bg-white/75 backdrop-blur-md shadow-xl p-6 md:p-8">
            <div className="flex justify-end">
              <HelpButton />
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/logoทต.โตนด.png"
                alt="logo"
                width={56}
                height={56}
                className="rounded-full"
              />

              <h1 className="mt-3 text-2xl md:text-3xl font-bold text-black">
                ระบบบันทึกครุภัณฑ์
              </h1>
              <p className="mt-1 text-sm md:text-base text-black/60">
                สำนักปลัดเทศบาลตำบลบ้านโตนด
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                <Link
                  href="/login/pin"
                  className="h-12 flex items-center justify-center gap-2 rounded-xl bg-[#D7ECFF] px-4 text-sm font-semibold text-black hover:opacity-95"
                >
                  <Image src="/search.png" alt="pin" width={18} height={18} />
                  เข้าดูครุภัณฑ์ (PIN)
                </Link>

                <Link
                  href="/login/admin"
                  className="h-12 flex items-center justify-center gap-2 rounded-xl bg-[#DFF7E8] px-4 text-sm font-semibold text-black hover:opacity-95"
                >
                  <Image src="/lock.png" alt="admin" width={18} height={18} />
                  เข้าสู่ระบบผู้ดูแล
                </Link>
              </div>

              <div className="mt-5 text-xs text-black/45">
                หากลืมรหัส PIN ให้ติดต่อผู้ดูแลระบบครุภัณฑ์
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-black/45">
        © {new Date().getFullYear()} เทศบาลตำบลบ้านโตนด
      </div>
    </div>
    </div >
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [loading, setLoading] = useState(false);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        try {
            // TODO: เรียก API auth admin
            router.push("/page/role1-ADMIN/dashboard");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#D8F1FF] p-6">
            <div className="mx-auto max-w-6xl">
                <div className="text-sm text-black/50 mb-3">
                    เข้าสู่ระบบ | เจ้าหน้าที่ผู้ดูแลครุภัณฑ์
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-white shadow">
                    <div className="relative h-140 md:h-155 w-full">
                        <Image
                            src="/picทต.โตนด.png"
                            alt="เทศบาลตำบลบ้านโตนด"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-1px]" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="w-full max-w-140 md:max-w-160 rounded-2xl bg-white/75 backdrop-blur-md shadow-xl p-6 md:p-8">
                            <div className="flex justify-end gap-2">
                                <Link
                                    href="/"
                                    className="w-11 h-11 rounded-full border border-black/10 bg-white/70 flex items-center justify-center text-black/60 hover:bg-white"
                                    title="กลับหน้าเลือกบทบาท"
                                >
                                    ✕
                                </Link>
                            </div>

                            <div className="mt-2 flex flex-col items-center text-center">
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
                                    เข้าสู่ระบบสำหรับเจ้าหน้าที่ผู้ดูแลครุภัณฑ์
                                </p>

                                <form onSubmit={onSubmit} className="mt-6 w-full space-y-4">
                                    <div className="text-left">
                                        <label className="text-sm text-black/70">ชื่อผู้ใช้งาน</label>
                                        <input
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Username"
                                            className="mt-1 h-11 md:h-12 w-full rounded-xl border border-black/10 bg-white/90 px-4 text-base outline-none focus:ring-2 focus:ring-black/10"
                                            required
                                        />
                                    </div>

                                    <div className="text-left">
                                        <label className="text-sm text-black/70">รหัสผ่าน</label>
                                        <div className="mt-1 flex items-center gap-2">
                                            <input
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                type={showPw ? "text" : "password"}
                                                placeholder="Password"
                                                className="h-11 md:h-12 w-full rounded-xl border border-black/10 bg-white/90 px-4 text-base outline-none focus:ring-2 focus:ring-black/10"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPw((v) => !v)}
                                                className="h-11 md:h-12 px-4 rounded-xl border border-black/10 bg-white/70 text-sm text-black/70 hover:bg-white"
                                                title="แสดง/ซ่อนรหัสผ่าน"
                                            >
                                                {showPw ? "ซ่อน" : "ดู"}
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        disabled={loading}
                                        className="h-12 w-full rounded-xl bg-black/10 hover:bg-black/15 text-black font-semibold disabled:opacity-60"
                                    >
                                        {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
                                    </button>

                                    <div className="flex items-center justify-between text-xs text-black/55">
                                        <Link href="/" className="hover:underline">
                                            กลับหน้าเลือกบทบาท
                                        </Link>
                                        <Link href="/login/pin" className="hover:underline">
                                            เข้าดูครุภัณฑ์ด้วย PIN
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 text-xs text-black/45">
                    หากไม่สามารถเข้าสู่ระบบได้ ให้ติดต่อผู้ดูแลระบบ
                </div>
            </div>
        </div>
    );
}

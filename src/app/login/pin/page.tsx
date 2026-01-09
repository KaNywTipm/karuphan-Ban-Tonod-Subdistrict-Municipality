"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function PinLoginPage() {
    const router = useRouter();
    const [pin, setPin] = useState<string[]>(Array(6).fill(""));
    const [loading, setLoading] = useState(false);

    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
    const pinValue = useMemo(() => pin.join(""), [pin]);

    useEffect(() => {
        inputsRef.current[0]?.focus();
    }, []);

    function onChangeDigit(idx: number, v: string) {
        const digit = v.replace(/\D/g, "").slice(-1);
        const next = [...pin];
        next[idx] = digit;
        setPin(next);
        if (digit && idx < 5) inputsRef.current[idx + 1]?.focus();
    }

    function onKeyDown(idx: number, e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Backspace") {
            if (pin[idx]) {
                const next = [...pin];
                next[idx] = "";
                setPin(next);
            } else if (idx > 0) inputsRef.current[idx - 1]?.focus();
        }
        if (e.key === "ArrowLeft" && idx > 0) inputsRef.current[idx - 1]?.focus();
        if (e.key === "ArrowRight" && idx < 5) inputsRef.current[idx + 1]?.focus();
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (pinValue.length !== 6) return;
        setLoading(true);
        try {
            // TODO: ตรวจ PIN
            router.push("/page/role2-USER/dashboard");
        } finally {
            setLoading(false);
        }
    }

    function clearPin() {
        setPin(Array(6).fill(""));
        inputsRef.current[0]?.focus();
    }

    return (
        <div className="min-h-screen bg-[#D8F1FF] p-6">
            <div className="mx-auto max-w-6xl">
                <div className="text-sm text-black/50 mb-3">
                    เข้าสู่ระบบเจ้าหน้าที่ภายในสำนักปลัด
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
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
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
                                    กรุณากรอกรหัส PIN เพื่อค้นหาข้อมูลครุภัณฑ์
                                </p>

                                <form onSubmit={onSubmit} className="mt-6 w-full">
                                    <div className="text-left text-sm text-black/70 mb-2">
                                        กรอกรหัส 6 หลัก
                                    </div>

                                    <div className="flex justify-center gap-2 md:gap-3">
                                        {pin.map((d, idx) => (
                                            <input
                                                key={idx}
                                                ref={(el) => {
                                                    inputsRef.current[idx] = el;
                                                }}
                                                inputMode="numeric"
                                                maxLength={1}
                                                value={d}
                                                onChange={(e) => onChangeDigit(idx, e.target.value)}
                                                onKeyDown={(e) => onKeyDown(idx, e)}
                                                className="w-11 h-11 md:w-12 md:h-12 text-center text-lg rounded-xl border border-black/10 bg-white/90 outline-none focus:ring-2 focus:ring-black/10"
                                            />
                                        ))}
                                    </div>

                                    <div className="mt-5 flex gap-2">
                                        <button
                                            type="button"
                                            onClick={clearPin}
                                            className="h-12 w-1/3 rounded-xl border border-black/10 bg-white/70 text-sm font-semibold text-black/70 hover:bg-white"
                                        >
                                            ล้าง
                                        </button>

                                        <button
                                            disabled={loading || pinValue.length !== 6}
                                            className="h-12 flex-1 rounded-xl bg-black/10 hover:bg-black/15 text-black font-semibold disabled:opacity-50"
                                        >
                                            {loading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
                                        </button>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between text-xs text-black/55">
                                        <Link href="/" className="hover:underline">
                                            กลับหน้าเลือกบทบาท
                                        </Link>
                                        <Link href="/login/admin" className="hover:underline">
                                            เข้าสู่ระบบผู้ดูแล
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 text-xs text-black/45">
                    หาก PIN ไม่ถูกต้อง ให้ติดต่อผู้ดูแลระบบครุภัณฑ์เพื่อขอรหัสใหม่
                </div>
            </div>
        </div>
    );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HelpButton() {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement | null>(null);

    // ปิดเมื่อคลิกนอกกล่อง
    useEffect(() => {
        function onClickOutside(e: MouseEvent) {
            if (!wrapRef.current) return;
            if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    return (
        <div ref={wrapRef} className="relative">
            {/* Button */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="group w-12 h-12 rounded-full bg-white/90 border border-black/10 shadow flex items-center justify-center hover:bg-white"
                aria-label="ช่วยเหลือ"
                title="ช่วยเหลือ"
            >
                <span className="text-xl font-semibold text-black/60">?</span>
            </button>

            {/* Popover */}
            {open && (
                <div className="absolute right-0 mt-3 w-80 rounded-xl bg-white shadow-xl border border-black/10 p-4 z-50">
                    <div className="text-sm font-semibold text-black">
                        แจ้งปัญหาการใช้งานเว็บไซต์
                    </div>
                    <div className="mt-2 text-sm text-black/70 space-y-1">
                        <div>
                            ติดต่อ: <span className="font-medium">ผู้ดูแลระบบครุภัณฑ์</span>
                        </div>
                        <div>โทร: 0XX-XXX-XXXX</div>
                        <div>อีเมล: example@email.com</div>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                        {/* เปลี่ยนเป็นไอคอนหลังได้ช่องทางการติดต่อจริง */}
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/15"
                            aria-label="Facebook"
                        >
                            <Image src="/facebook.png" alt="fb" width={18} height={18} />
                        </a>

                        <a
                            href="#"
                            className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/15"
                            aria-label="LINE"
                        >
                            <Image src="/line.png" alt="line" width={18} height={18} />
                        </a>
                    </div>

                    <button
                        onClick={() => setOpen(false)}
                        className="mt-4 w-full rounded-lg border border-black/10 py-2 text-sm hover:bg-black/5"
                    >
                        ปิด
                    </button>
                </div>
            )}
        </div>
    );
}

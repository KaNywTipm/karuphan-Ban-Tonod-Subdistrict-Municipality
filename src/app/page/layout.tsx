"use client";

import { useState } from "react";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="h-screen flex overflow-hidden">
            {/* Sidebar */}
            <aside
                className={[
                    "fixed inset-y-0 left-0 z-40 w-72 p-4 bg-[#BFE3F4]",
                    "transform transition-transform duration-300",
                    open ? "translate-x-0" : "-translate-x-full",
                    "lg:static lg:translate-x-0 lg:w-[17%]",
                ].join(" ")}
            >
                <Menu onClose={() => setOpen(false)} />
            </aside>

            {/* Overlay (Mobile) */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Main */}
            <div className="flex-1 flex flex-col bg-[#F7F8FA]">
                <Navbar onMenuClick={() => setOpen(true)} />

                <main className="flex-1 p-4 overflow-auto">{children}</main>
            </div>
        </div>
    );
}

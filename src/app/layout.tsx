import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/redux/provider/Provider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="flex h-screen">
                    {/* Main content area */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className=" ">
                            <Provider>{children}</Provider>
                        </div>
                    </div>

                    {/* Navbar on the right */}
                    <div className=" bg-gray-100 border-l">
                        <Navbar />
                    </div>
                </div>
            </body>
        </html>
    );
}

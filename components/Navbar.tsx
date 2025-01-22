"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { useTheme } from "next-themes"

const navItems = [
    { name: "Home", href: "/" },
    { name: "AI", href: "/ai" },
    { name: "FastAPI", href: "/fastapi" },
]

export function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()

    const NavLinks = () => (
        <>
        {navItems.map((item) => (
            <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname===item.href ? "bg-primary text-secondary" : "text-foreground/60 hover:text-foreground hover:bg-accent"}`}
            >
                {item.name}
            </Link>
        ))}
        </>
  )

    return (
        <nav className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image src="/logo.png" alt="Luminaries Logo" width={40} height={40} className="mr-2" />
                            <span className="font-bold text-xl">Luminaries</span>
                        </Link>
                    </div>
                <div className="hidden md:flex items-center space-x-4">
                    <NavLinks />
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle theme"
                        className="rounded-full"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
                <div className="md:hidden flex items-center">
                    <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                            <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <SheetDescription>Luminaries</SheetDescription>
                            <nav className="flex flex-col space-y-4 mt-4">
                            <NavLinks />
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
                </div>
            </div>
        </nav>
    )
}
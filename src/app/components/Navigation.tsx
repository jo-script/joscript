"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Code2 } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "الرئيسية", href: "#home" },
    { name: "معلومات عنا", href: "#about" },
    { name: "المشاريع", href: "#projects" },
    { name: "الدورات", href: "#courses" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 animate-fade-in-up ">
            <div className="p-2 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-primary text-white">
              {/* <Code2 className="h-6 w-6 text-white" /> */}
              <Image src="/jo.svg" alt="joscript" width={15} height={15} />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500  to-purple-300 bg-clip-text text-transparent">
              joscript
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-105 transform"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105">
              <a href="https://wa.me/+201032734738" target="_blank">
                ابدأ رحلتك
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden p-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-80 p-4 border-purple-400/20 bg-background/80 backdrop-blur-md "
              >
                <div className="flex flex-col gap-6 mt-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg text-foreground  hover:text-purple-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button className="bg-gradient-primary w-full mt-4 hover:scale-[1.03] ">
                    <a href="https://wa.me/+201032734738">ابدأ رحلتك</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
  Linkedin,
  // Whatsapp,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "معلومات عنا", href: "#about" },
    { name: "الدورات", href: "#courses" },
    { name: "المشاريع", href: "#projects" },
  ];

  const courses = [
    "البرمجة للأطفال",
    "أساسيات البرمجة",
    "تطوير الواجهات الأمامية",
    "تطوير التطبيقات المحمولة",
    "الأمن السيبراني",
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/joscript.io",
      color: "hover:text-blue-500",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/joscript/",
      color: "hover:text-sky-500",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/joscript.io",
      color: "hover:text-pink-500",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@jo-script",
      color: "hover:text-red-500",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-purple-900/30 border-t border-purple-900/40">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 ">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-primary p-2 rounded-lg">
                <Image src="/jo.svg" alt="joscript" width={15} height={15} />
              </div>
              <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#6402b1] to-purple-300 bg-clip-text text-transparent">
                joscript
              </span>
            </div>
            <p className="text-[#A3A3A3] leading-relaxed">
              أكاديمية البرمجة الرائدة في تعليم وتطوير المهارات التقنية. نقدم
              تعليماً عالي الجودة يؤهل طلابنا لسوق العمل.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#A3A3A3]">
                <MapPin className="h-5 w-5 text-primary" />
                <span> الأسكندرية - دمنهور</span>
              </div>
              <div className="flex items-center gap-3 text-[#A3A3A3] hover:text-purple-400 transition-colors duration-100">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+201032734738" dir="ltr">
                  +201032734738
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#A3A3A3] hover:text-purple-400 transition-colors duration-100">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:joscript.js@gmail.com">joscript.js@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#A3A3A3] hover:text-purple-400 transition-colors duration-100"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://t.me/+201032734738"
                  className="text-[#A3A3A3] hover:text-purple-400 transition-colors duration-300"
                >
                  تواصل معنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#A3A3A3] hover:text-purple-400 transition-colors duration-300"
                >
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">
              الدورات الشائعة
            </h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    className="text-[#A3A3A3] hover:text-purple-400 transition-colors duration-100"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Awards */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">تابعنا</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`p-5 rounded-lg bg-purple-700/20 text-[#A3A3A3] transition-all duration-300 hover:bg-gradient-to-r from-[#6402b1]/40 to-purple-600/20 hover:scale-110 hover:text-white ${color}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-purple-700/20" />

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A3A3A3] text-sm">
            © {new Date().getFullYear()} جوسكريبت. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#A3A3A3] hover:text-purple-400 transition-colors text-sm"
            >
              شروط الاستخدام
            </a>
            <a
              href="#"
              className="text-[#A3A3A3] hover:text-purple-400 transition-colors text-sm"
            >
              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="text-[#A3A3A3] hover:text-purple-400 transition-colors text-sm"
            >
              سياسة الاسترداد
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

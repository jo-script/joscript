import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Code, Users, Award, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="w-full  min-h-screen flex items-center pt-16 bg-gradient-to-br from-background via-purple-600/20 to-accent/20"
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Right side */}
          <div className="order-1 lg:order-1 animate-fade-in-up">
            <div className="mb-6">
              <span className="text-[#722ca8] text-lg mb-2 block">
                مرحباً بكم في
              </span>
              <h1 className="text-4xl md:text-5xl p-3 lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#6402B1] to-purple-400 bg-clip-text text-transparent">
                جوسكريبت
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                أكاديمية البرمجة الرائدة في تعليم وتطوير المهارات التقنية
              </p>
            </div>

            <p className="text-lg text-purple-300 mb-8 leading-relaxed">
              نحن أكاديمية متخصصة في تعليم البرمجة وتطوير التطبيقات، نقدم دورات
              شاملة في جميع مجالات التقنية من البرمجة الأساسية إلى تطوير
              التطبيقات المتقدمة. هدفنا هو إعداد جيل جديد من المبرمجين المحترفين
              القادرين على مواكبة سوق العمل والتميز فيه.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="p-4 bg-gradient-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-500">
                      500+
                    </div>
                    <div className="text-sm text-[#A3A3A3]">طالب متخرج</div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Code className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-500">
                      20+
                    </div>
                    <div className="text-sm text-[#A3A3A3]">دورة تدريبية</div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Award className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-500">
                      95%
                    </div>
                    <div className="text-sm text-[#A3A3A3]">معدل النجاح</div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-500">3</div>
                    <div className="text-sm text-[#A3A3A3]">سنوات خبرة</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <a href="#courses">اكتشف دوراتنا</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400/40 text-purple-500 hover:bg-purple-900 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <a href="https://wa.me/+201032734738" target="_blank">تواصل معنا</a>
              </Button>
            </div>
          </div>

          {/* Image - Left side */}
          <div className="order-1 lg:order-2 animate-float">
            <div className="relative">
              <div className="relative overflow-hidden border-0">
                <Image
                  src="/Seminar-pana.svg"
                  alt="تعليم البرمجة"
                  width={200}
                  height={200}
                  className="w-full h-full "
                />
                <div className="absolute inset-0 to-transparent"></div>
                <div className="absolute bottom-4 right-4 left-4">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

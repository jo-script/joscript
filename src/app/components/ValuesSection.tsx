import { Card } from './ui/card';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Target, 
  Lightbulb, 
  Trophy,
  Heart,
  Star
} from 'lucide-react';

export function ValuesSection() {
  const values = [
    {
      icon: GraduationCap,
      title: "مدربون مؤهلون",
      description: "فريق من المدربين المحترفين مع سنوات من الخبرة في مجال التطوير والتعليم",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "محتوى قوي ومناسب",
      description: "مناهج محدثة ومصممة خصيصاً لتناسب متطلبات سوق العمل الحالي",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Users,
      title: "بيئة تعليمية مناسبة",
      description: "بيئة تعليمية محفزة تناسب جميع الأعمار والمستويات التعليمية",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Target,
      title: "التركيز على الفهم",
      description: "نركز على فهم المفاهيم الأساسية وليس مجرد الحفظ والتلقين",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Lightbulb,
      title: "حل المشكلات",
      description: "تنمية قدرات الطلاب على التفكير النقدي وحل المشكلات البرمجية",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Trophy,
      title: "بناء المهارات",
      description: "نهتم ببناء مهارات عملية قابلة للتطبيق في مشاريع حقيقية",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Heart,
      title: "دعم مستمر",
      description: "نقدم الدعم والمتابعة المستمرة حتى بعد انتهاء الدورة التدريبية",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Star,
      title: "جودة عالية",
      description: "نلتزم بتقديم تعليم عالي الجودة يضمن تحقيق أهداف الطلاب",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl p-2 md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#6402b1] to-purple-300 bg-clip-text text-transparent">
            لماذا تختار جوسكريبت؟
          </h2>
          <p className="text-xl text-[#ac95ba] max-w-3xl mx-auto">
            نحن نقدم قيمة حقيقية من خلال منهجيتنا المتميزة في التعليم والتدريب
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full p-6 bg-gradient-card cursor-default border-purple-800/20 hover:border-purple-800/40 transition-all duration-300 hover:scale-105 text-center">
                <div className="flex flex-col items-center">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${value.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-[#A3A3A3] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-primary border-purple-800/20 transition-all duration-300 hover:scale-105 text-white">
            <h3 className="text-2xl font-bold mb-4">هل أنت مستعد لبدء رحلتك في عالم البرمجة؟</h3>
            <p className="text-lg mb-6 opacity-90">
              انضم إلى آلاف الطلاب الذين غيروا حياتهم المهنية معنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#6402b1] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                تواصل معنا الآن
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#6402b1] transition-all duration-300">
                استشارة مجانية
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
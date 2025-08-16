'use client'
import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Shield, 
  Palette, 
  Database, 
  Monitor,
  Baby,
  Clock,
  Users,
  Award,
  ScrollText,
  Dumbbell,
  BrainCircuit,
} from 'lucide-react';

export function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "البرمجة للأطفال",
      icon: Baby,
      type: "Basics children ",
      details: "تشمل الدورة تعلم أساسيات البرمجة من خلال الألعاب والأنشطة التفاعلية، برمجة بلغة  App Inventor و Scratch، تطوير الألعاب البسيطة، وبناء المشاريع الإبداعية",
      duration: "2 أشهر",
      students: "50+",
      description: "دورة مصممة خصيصاً لتعليم الأطفال أساسيات البرمجة بطريقة ممتعة وتفاعلية",
      skills: ["Scratch", "App Inventor", "التفكير المنطقي", "حل المشكلات"],
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 2,
      title: "أساسيات البرمجة",
      icon: Code,
      type: "intro to software  ",
      duration: "3 أشهر",
      students: "120+",
      description: "تعلم أساسيات البرمجة والمفاهيم الأساسية التي تحتاجها لدخول عالم التطوير",
      details: "تغطي الدورة المفاهيم الأساسية للبرمجة، هياكل البيانات، الخوارزميات الأساسية، والبرمجة الكائنية التوجه",
      skills: ["Python", "Databases", "DataStructures", "Algorithms", "OOP", 'Problem Solving'],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "تطوير الواجهات الأمامية",
      icon: Monitor,
      type: "Front-End",
      duration: "5 أشهر",
      students: "80+",
      details: "ستتعلم في هذه الدوره كيفيه بناء مواقع الانترنت من الصفر ياستخدام محتوى قوي ,المده ستكون خمس شهور من التعلم وبعد الخمس شهور نقدم لك شهرين تدريب في شركه حقيقيه لاكتساب خبره عمليه",
      description: "تعلم تطوير واجهات المستخدم التفاعلية والجذابة باستخدام أحدث التقنيات",
      skills: ["HTML", "CSS", "JavaScript", "React", 'NextJs', "Tailwind CSS", "Bootstrap", 'git', 'github', 'SwiperJs', 'Team Working', 'APIS' ],
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "تطوير الخادم والخلفية",
      icon: Database,
      type: "Back-End",
      duration: "5 أشهر",
      students: "60+",
      description: "تعلم تطوير الخوادم وقواعد البيانات وواجهات البرمجة التطبيقية",
      details: "ستتعلم في هذه الدوره كيفيه بناء الخادم والخلفية من الصفر ياستخدام محتوى قوي المده ستكون خمس شهور من التعلم وبعد الخمس شهور نقدم لك شهرين تدريب في شركه حقيقيه لاكتساب خبره عمليه",
      skills: ['Javascript', "Node.js", "Express", "MongoDB", "Mongoose", "Postman", 'SocketIo', 'Git', 'Github', "Network", 'Host & Domain', "Algorithm", 'DataStructures', "Team Working", "APIS"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "تطوير التطبيقات المحمولة",
      icon: Smartphone,
      type: "Flutter",
      duration: "5 أشهر",
      students: "70+",
      description: "تعلم تطوير التطبيقات المحمولة لنظامي Android و iOS",
      details: "ستتعلم في هذه الدوره كيفيه بناء تطبيقات الموبايل من الصفر سواء  Android او iOS ",
      skills: ["Basics of Dart", "Dart OOP", "Problem solving", "Widgets", "Git", "Github", "Design principles", "Storage", "Advance Dart", "Flutter", "APIS", "State management", "Animations", "Analytic", "Firebase", "Deployment", "Network", "Full-Project", "Google Play"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 6,
      title: "تصميم تجربة المستخدم",
      icon: Palette,
      type: "UI/UX",
      duration: "3 أشهر",
      students: "90+",
      description: "تعلم تصميم واجهات المستخدم وتحسين تجربة المستخدم",
      details: "تغطي Figma, Adobe XD, أساسيات التصميم, وبحث المستخدمين",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 7,
      title: "الأمن السيبراني",
      icon: Shield,
      type: "Cyber Security",
      duration: "7 أشهر",
      students: "40+",
      description: "تعلم حماية الأنظمة والشبكات من التهديدات السيبرانية",
      details: "تشمل اختبار الاختراق, تأمين الشبكات, والتحليل الجنائي الرقمي",
      skills: ["Penetration Testing", "Network Security", "Cryptography", "Incident Response"],
      color: "from-slate-500 to-gray-500"
    }, {
      id: 8,
      title: "الذكاء الاصطناعي",
      icon: BrainCircuit,
      type: "AI",
      duration: "5 أشهر",
      students: "40+",
      description: "تعلم أساسيات الذكاء الاصطناعي",
      details: "ستتعلم في هذه الدوره كيفيه بناء تطبيقات الذكاء الاصطناعي من الصفر",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "Natural Language Processing", "Reinforcement Learning", "AI Ethics", "AI Safety"],
      color: "from-blue-500 to-teal-500"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl p-2 md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#6402b1] to-purple-300 bg-clip-text text-transparent">
            دوراتنا التدريبية
          </h2>
          <p className="text-xl text-[#ac95ba] max-w-3xl mx-auto">
            اختر من بين مجموعة واسعة من الدورات المصممة لتناسب جميع المستويات والأعمار
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer h-full bg-gradient-card border-purple-400/20 hover:border-[#6402b1] hover:shadow-[0_0_10px_0_#6402b1] transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${course.color} text-white`}>
                          <course.icon className="h-6 w-6" />
                        </div>
                        <div className="">
                          <Badge className='text-2xl font-bold text-[#c579ff]' variant="secondary">{course.type}</Badge>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-[#e5e5e5]">{course.title}</h3>
                      <p className="text-[#ac95ba] mb-4 text-sm leading-relaxed">
                        {course.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-purple-400" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ScrollText className="h-4 w-4 text-purple-400" />
                          <span>شهاداة</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Dumbbell className="h-4 w-4 text-purple-400" />
                          <span>شهرين تدريب في شركة</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Button size="sm" className="bg-gradient-primary">
                          عرض التفاصيل
                        </Button>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl bg-gradient-to-r border-purple-400/20 bg-[#5e1c911f] backdrop-blur-xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${course.color} text-white`}>
                        <course.icon className="h-6 w-6" />
                      </div>
                      {course.title}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <p className="text-[#d1d0d0] leading-relaxed">
                      {course.details}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-400">المهارات التي ستتعلمها:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-purple-400/10 text-primary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-purple-800/20 rounded-lg">
                        <Clock className="h-5 w-5 text-purple-400 mx-auto mb-2" />
                        <div className="text-sm font-medium">{course.duration}</div>
                      </div>
                      <div className="p-3 bg-purple-800/20 rounded-lg">
                        <ScrollText className="h-5 w-5 text-purple-400 mx-auto mb-2" />
                        <div className="text-sm font-medium">شهادات</div>
                      </div>
                      <div className="p-3 bg-purple-800/20 rounded-lg">
                        <Award className="h-5 w-5 text-purple-400 mx-auto mb-2" />
                        <div className="text-sm font-medium">{course.type}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-purple-400/20">
                      <Button className="bg-gradient-primary hover:opacity-90 transition-all duration-300">
                       <a href="https://wa.me/+201032734738" target="_blank"> سجل الآن</a>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
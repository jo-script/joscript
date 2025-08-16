import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "متجر إلكتروني متكامل",
      description: "تطبيق ويب لمتجر إلكتروني مع نظام دفع وإدارة المخزون",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      student: "أحمد محمد",
      course: "تطوير الواجهات الأمامية",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "تطبيق إدارة المهام",
      description: "تطبيق محمول لإدارة المهام مع تزامن سحابي",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      student: "فاطمة أحمد",
      course: "تطوير التطبيقات المحمولة",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "نظام إدارة المدرسة",
      description: "نظام شامل لإدارة المدارس مع لوحة تحكم تفاعلية",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      student: "محمد علي",
      course: "تطوير الخادم والخلفية",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "لعبة الألغاز التفاعلية",
      description: "لعبة ألغاز تعليمية للأطفال مع مستويات متدرجة",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      student: "سارة خالد",
      course: "البرمجة للأطفال",
      technologies: ["Scratch", "JavaScript", "HTML5 Canvas"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "منصة التعلم الإلكتروني",
      description: "منصة تعليمية مع فيديوهات تفاعلية وامتحانات",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
      student: "عبدالله محمود",
      course: "تطوير الواجهات الأمامية",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "نظام مراقبة الشبكة",
      description: "نظام متقدم لمراقبة وحماية الشبكات من التهديدات",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      student: "يوسف إبراهيم",
      course: "الأمن السيبراني",
      technologies: ["Python", "Wireshark", "Splunk", "Linux"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl p-2 md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#6402b1] to-purple-300 bg-clip-text text-transparent">
            مشاريع طلابنا
          </h2>
          <p className="text-xl text-[#ac95ba] max-w-3xl mx-auto">
            تصفح مجموعة من أفضل المشاريع التي أنجزها طلابنا خلال دراستهم
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-400">
                      {project.course}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-[#A3A3A3] mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* <div className="mb-4">
                    <p className="text-sm text-primary font-medium">بواسطة: {project.student}</p>
                  </div> */}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-purple-900 text-purple-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                      <Eye className="h-4 w-4 ml-2" />
                      مشاهدة المشروع
                    </Button>
                    <Button size="sm" variant="outline" className="border-purple-900 bg-purple-900/20 text-purple-400 hover:bg-purple-900 hover:text-white">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="border-purple-900 bg-purple-900/20 text-purple-400 hover:bg-purple-900 hover:text-white transition-all duration-300 hover:scale-105">
            عرض جميع المشاريع
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
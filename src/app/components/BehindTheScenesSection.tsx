"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function BehindTheScenesSection() {
  const [showAll, setShowAll] = useState(false);

  const images = [
    "/events-imgs/photo_6_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_7_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_13_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_1_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_19_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_14_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_8_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_2_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_9_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_15_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_3_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_17_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_10_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_16_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_20_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_11_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_4_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_5_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_12_2024-12-26_16-38-36.jpg",
    "/events-imgs/photo_18_2024-12-26_16-38-36.jpg",
  ];

  const previewImages = images.slice(0, 12);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#6402B1] to-purple-300 bg-clip-text text-transparent">
            كواليس أكاديميتنا
          </h2>
          <p className="text-xl text-[#ac95ba] max-w-3xl mx-auto">
            اكتشف البيئة التعليمية المميزة في جوسكريبت، حيث نجمع بين التعليم
            النظري والتطبيق العملي
          </p>
        </motion.div>

        {/* عرض الصور الأولى (مربعات منظمة) */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {previewImages.map((image, index) => (
            <Card key={index} className="overflow-hidden border-0">
            
              <ImageWithFallback
                src={image}
                alt={`كواليس ${index + 2}`}
                className="w-full aspect-square object-cover border-0"
              />
              <div
        className="absolute inset-0 bg-gradient-to-t from-purple-800/70 via-purple-600/40 to-transparent
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
            </Card>
          ))}
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {previewImages.map((image, index) => (
            <Card
              key={index}
              className="relative group overflow-hidden rounded-xl border-0 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_20px_#6402B1]"
            >
              <ImageWithFallback
                src={image}
                alt={`كواليس ${index + 1}`}
                className="w-full aspect-square object-cover"
              />
              {/* Overlay عند الهوفر */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-purple-800/70 via-purple-600/20 to-transparent
                   opacity-0 group-hover:opacity-100 transition-[all_.4s] duration-300"
              />
            </Card>
          ))}
        </div>
        {/* زرار عرض الكل */}
        <div className="text-center mt-10">
          <Button
            onClick={() => setShowAll(true)}
            className="bg-gradient-to-r from-[#6402B1] to-purple-400 text-white px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            عرض جميع الصور
          </Button>
        </div>

        {/* نافذة الصور */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 z-50 flex flex-col p-6 overflow-y-auto"
            >
              {/* زر إغلاق */}
              <button
                onClick={() => setShowAll(false)}
                className="self-end text-white text-3xl font-bold mb-4 hover:text-red-400 transition"
              >
                ×
              </button>

              {/* شبكة الصور كاملة */}
              {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                {images.map((image, index) => (
                  <Card key={index} className="overflow-hidden border-0">
                    <ImageWithFallback
                      src={image}
                      alt={`كواليس ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </Card>
                ))}
              </div> */}

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <Card
                    key={index}
                    className="relative group overflow-hidden rounded-xl border-0 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_20px_#6402B1]"
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`كواليس ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                    {/* Overlay عند الهوفر */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-purple-800/70 via-purple-600/20 to-transparent
                   opacity-0 group-hover:opacity-100 transition-[all_.4s] duration-300"
                    />
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

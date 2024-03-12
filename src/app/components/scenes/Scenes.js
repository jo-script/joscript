import React from 'react'
import Image from 'next/image'

import img1 from './imgs/Rectangle.png'
import img2 from './imgs/Rectangle18.png'
import img3 from './imgs/Rectangle19.png'

function Scenes() {
    return (
        <div className='w-full  px-[5%] py-24 flex flex-col items-center justify-center mt-16 '>
            <div className='w-full flex flex-col items-center justify-center  '>
                <p className='bg-[#faa000] h-[3px] w-[10%] '></p>
                <h1 className='title text-[#eef6ff] text-[35px] mt-4 '> على ماذا نركز</h1>
                <p className='text text-[22px] text-[#9da1a7] text-center max-[500px]:text-[16px] max-[500px]:w-[70%]'> أهم الأشياء التي نركز على تقديمها للطلاب</p>
            </div>

            <div className='w-full mt-20 flex flex-col gap-24 '>
                <div className='w-full flex items-start justify-between gap-32 max-[1130px]:gap-10 max-[1130px]:flex-col-reverse max-[1130px]:items-center'>
                    <div className='text-end max-[1130px]:text-center'>
                        <h1 className='title font-bold text-[#eef6ff] text-[20px] mb-3'>:التوجيه الصحيح للطلاب في رحلة البرمجة</h1>
                        <p className='text text-[21px]  text-[#9da1a7] text-end max-[500px]:text-[16px]  mb-7 max-[1130px]:text-center'>
                            التوجيه الصحيح: مفتاح التعلّم واكتساب المهارات
                            التوجيه الصحيح هو بمثابة البوصلة التي ترشد الطلاب في رحلة تعلّمهم واكتسابهم للمهارات. يُساعدهم على تحديد أهدافهم وتحديد أفضل مسار لتحقيقها. كما يُقدم لهم الدعم والتشجيع الذي يحتاجون إليه للتغلب على التحديات والوصول إلى أقصى إمكاناتهم
                        </p>
                        <h1 className='title font-bold text-[#eef6ff] text-[20px] mb-3'>:فوائد التوجيه الصحيح</h1>
                        <p className='text text-[21px]  text-[#9da1a7] text-end max-[500px]:text-[16px] max-[1130px]:text-center'>
                            يُساعد التوجيه الصحيح الطلاب على تسريع عملية التعلّم واكتساب المهارات
                            <br />
                            وعلى تحسين أدائهم في مختلف المجالات
                            <br />
                            .فهو يُساعدهم على تحقيق أهدافهم ويُؤهّلهم للنجاح في حياتهم المهنية والشخصية
                        </p>

                    </div>
                    <Image src={img1} alt='' />
                </div>
                <div className='w-full flex items-start flex-row-reverse justify-between gap-32 max-[1130px]:gap-10 max-[1130px]:flex-col-reverse max-[1130px]:items-center'>
                    <div className='text-end max-[1130px]:text-center'>
                        <h1 className='title font-bold text-[#eef6ff] text-[20px] mb-4'>:التطبيقات العملية وحل المشكلات البرمجية</h1>
                        <p className='text text-[21px]  text-[#9da1a7] text-end max-[500px]:text-[16px]  mb-7 max-[1130px]:text-center'>التطبيقات العملية وحلّ المشكلات البرمجية هما عنصران أساسيان في تعلّم البرمجة. فهما يُساعدان الطلاب على فهم المفاهيم البرمجية بشكل أفضل، وتنمية مهارات حلّ المشكلات، وتعزيز مهارات التواصل، واكتساب مهارات برمجية متقدمة. كما أنّهما يُؤثّران بشكل إيجابي على تطوير الطلاب بشكل عام ويُهيّئونهم لسوق العمل</p>
                        <h1 className='title font-bold text-[#eef6ff] text-[20px] mb-3'>:تأثير التطبيقات العملية وحل المشكلات البرمجية على تطوير الطلاب</h1>
                        <p className='text text-[21px]  text-[#9da1a7] text-end max-[500px]:text-[16px] max-[1130px]:text-center'>تُساعد التطبيقات العملية الطلاب على فهم المفاهيم البرمجية بشكل أفضل من خلال تطبيقها على سيناريوهات واقعية وتساعد أيضا على تنمية مهارات البرمجة مثل تحليل البيانات، والتفكير النقدي والمنطقي وحل المشكلات</p>
                    </div>
                    <Image src={img2} alt='' />
                </div>
                <div className='w-full flex items-start justify-between gap-32 max-[1130px]:gap-10 max-[1130px]:flex-col-reverse max-[1130px]:items-center'>
                    <div className='text-end max-[1130px]:text-center'>
                        <h1 className='title font-bold text-[#eef6ff] text-[20px] mb-4'>:محاضرين مؤهلين للشرح</h1>
                        <p className='text text-[21px]  text-[#9da1a7] text-end max-[500px]:text-[16px]  mb-7 max-[1130px]:text-center'>
                            المحاضر المؤهل هو عنصرٌ أساسيٌ لنجاح الطلاب في تعلّم البرمجة
                            فمع المعرفة العميقة، ومهارات الشرح الممتازة، والصبر، والتواصل الفعّال، والخبرة العملية، والشغف بالتعليم، يُمكن للمحاضر المؤهل أن يُساعد الطلاب على تحقيق أهدافهم في تعلّم البرمجة
                        </p>

                        <h1 className='title font-bold text-[#eef6ff] text-[20px] mb-4'>:بيئة المناسبة لتعلم</h1>
                        <p className='text text-[21px]  text-[#9da1a7] text-end max-[500px]:text-[16px] max-[1130px]:text-center'>التعلم في بيئةٍ مُريحةٍ ومُحفزةٍ يُجعل تجربة تعلّم البرمجة ممتعةً وسهلة وتُساعد الطلاب على التركيز والتعلم بشكل فعّال</p>
                    </div>
                    <Image src={img3} alt='' />
                </div>


            </div>


        </div>
    )
}

export default Scenes

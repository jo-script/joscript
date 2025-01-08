import React from 'react'
import Image from 'next/image'

function Scenes() {
    return (
        <div className='w-full  px-[5%] flex flex-col items-center justify-centers gap-10 '>
            <div className='w-full flex items-center justify-center flex-col text-center gap-3'>
                <p className='h-[2px] w-40 rounded-md bg-[#17191a] dark:bg-gray-100 mb-2'></p>
                <h1 className='text-3xl font-bold text-[#17191a] dark:text-gray-100'> على ماذا نركز</h1>
                <p className='text-[#2E3539] dark:text-[#bfbfbf] text-lg'> أهم الأشياء التي نركز على تقديمها للطلاب</p>
            </div>

            <div className='w-full flex flex-col gap-24 '>
                <div className='w-full flex items-start justify-between gap-32 max-[1130px]:gap-10 max-[1130px]:flex-col-reverse max-[1130px]:items-center'>
                    <div className='text-start max-[1130px]:text-center flex flex-col gap-4'>
                        <h1 className='text-xl font-bold text-[#17191a] dark:text-gray-100'>التوجيه الصحيح للطلاب في رحلة البرمجة</h1>
                        <p className='text-[#2E3539] dark:text-[#bfbfbf] text-lg'>
                            التوجيه الصحيح مفتاح التعلّم واكتساب المهارات
                            التوجيه الصحيح هو بمثابة البوصلة التي ترشد الطلاب في رحلة تعلّمهم واكتسابهم للمهارات. يُساعدهم على تحديد أهدافهم وتحديد أفضل مسار لتحقيقها. كما يُقدم لهم الدعم والتشجيع الذي يحتاجون إليه للتغلب على التحديات والوصول إلى أقصى إمكاناتهم
                        </p>
                        <h1 className='text-xl font-bold text-[#17191a] dark:text-gray-100 mt-6'>فوائد التوجيه الصحيح</h1>
                        <p className='text-[#2E3539] dark:text-[#bfbfbf] text-lg'>
                            يُساعد التوجيه الصحيح الطلاب على تسريع عملية التعلّم واكتساب المهارات
                            <br />
                            وعلى تحسين أدائهم في مختلف المجالات
                            <br />
                            .فهو يُساعدهم على تحقيق أهدافهم ويُؤهّلهم للنجاح في حياتهم المهنية والشخصية
                        </p>

                    </div>
                    <Image src='/Rectangle.png' alt='joscript' loading='lazy' width={500} height={500} />
                </div>

                <div className='w-full flex items-start flex-row-reverse justify-between gap-32 max-[1130px]:gap-10 max-[1130px]:flex-col-reverse max-[1130px]:items-center'>
                    <div className='text-start max-[1130px]:text-center'>
                        <h1 className='text-xl font-bold text-[#17191a] dark:text-gray-100 mb-4'>التطبيقات العملية وحل المشكلات البرمجية</h1>
                        <p className='text-[#2E3539] dark:text-[#bfbfbf] text-lg'>التطبيقات العملية وحلّ المشكلات البرمجية هما عنصران أساسيان في تعلّم البرمجة. فهما يُساعدان الطلاب على فهم المفاهيم البرمجية بشكل أفضل، وتنمية مهارات حلّ المشكلات، وتعزيز مهارات التواصل، واكتساب مهارات برمجية متقدمة. كما أنّهما يُؤثّران بشكل إيجابي على تطوير الطلاب بشكل عام ويُهيّئونهم لسوق العمل</p>
                        <h1 className='text-xl font-bold text-[#17191a] dark:text-gray-100 mt-8 mb-4'>تأثير التطبيقات العملية وحل المشكلات البرمجية على تطوير الطلاب</h1>
                        <p className='text-[#2E3539] dark:text-[#bfbfbf] text-lg'>تُساعد التطبيقات العملية الطلاب على فهم المفاهيم البرمجية بشكل أفضل من خلال تطبيقها على سيناريوهات واقعية وتساعد أيضا على تنمية مهارات البرمجة مثل تحليل البيانات، والتفكير النقدي والمنطقي وحل المشكلات</p>
                    </div>
                    <Image src='/Rectangle18.png' alt='problem solveng' loading='lazy'  width={500} height={500} />
                </div>

                <div className='w-full flex items-start justify-between gap-32 max-[1130px]:gap-10 max-[1130px]:flex-col-reverse max-[1130px]:items-center'>
                    <div className='text-start max-[1130px]:text-center'>
                        <h1 className='text-xl font-bold text-[#17191a] dark:text-gray-100 mb-4'>محاضرين مؤهلين للشرح</h1>
                        <p className='text-[#2E3539] dark:text-[#bfbfbf] text-lg'>
                            المحاضر المؤهل هو عنصرٌ أساسيٌ لنجاح الطلاب في تعلّم البرمجة
                            فمع المعرفة العميقة، ومهارات الشرح الممتازة، والصبر، والتواصل الفعّال، والخبرة العملية، والشغف بالتعليم، يُمكن للمحاضر المؤهل أن يُساعد الطلاب على تحقيق أهدافهم في تعلّم البرمجة
                        </p>

                        <h1 className='text-xl font-bold text-[#17191a] dark:text-gray-100 mt-8 mb-4'>بيئة مناسبة لتعلم</h1>
                        <p className='text-[#2E3539] dark:text-[#bfbfbf] text-lg'>التعلم في بيئةٍ مُريحةٍ ومُحفزةٍ يُجعل تجربة تعلّم البرمجة ممتعةً وسهلة وتُساعد الطلاب على التركيز والتعلم بشكل فعّال</p>
                    </div>
                    <Image src='/Rectangle19.png' alt='html css javascript' loading='lazy' width={500} height={500} />
                </div>


            </div>


        </div>
    )
}

export default Scenes
'use client'
import Footer from "../../footer/Footer"
import Image from "next/image"
import { Maps } from "../page"
import { MdChevronLeft } from "react-icons/md";
import { useEffect, useState } from "react";



function FrontEnd() {

  let [mode, setMode] = useState('white')
  let [color, setColor] = useState('white')

  useEffect(() => {
    if (localStorage.getItem('joscriptTheme') === '#111827') {
      setMode('#111827')
      setColor('#eef6ff')
    } else {
      setMode('white')
      setColor('#0c0c0c')
    }
  }, [])

  return (
    <div className='card front w-fll bg-[#111827] mt-20' style={{ backgroundColor: mode }}>
      <div id="front" className="w-full h-72 bg-slate-400 flex flex-col items-center justify-center gap-4">
        <h1 className="text-white font-bold text-[50px] tracking-widest">FRONT END </h1>
        <button className='w-[250px] h-[45px] text-[19px] text-[#ffffff]  hover:bg-[#ffffff] border-[1px] border-[#ffffff9c] text-center leading-[40px] rounded-md hover:text-[#0c0c0c] shadow-[0_0_8px_0_#FA000] transition-all delay-75 '><a href="https://forms.microsoft.com/r/ELP7xVcXbS" target='_blank'>سجل معنا</a>  </button>
      </div>

      <div style={{ direction: 'rtl' }} className=" w-full pt-14 px-[10%] flex flex-col items-start justify-start gap-5">
        <div className="text-[#faa000] max-[500px]:text-[25px] text-[30px] font-bold ">
          <span>أولاً:  </span>
          <span>     ماهوا الـ Front End ؟ </span>
        </div>

        <div className="link text-[19px] text-[#0c0c0c]" style={{ color: color }}>
          بكل ‏بساطه الـ front_end ده الشخص المسؤل عن تصميم وبناء الواجهة الأمامية لمواقع الإنترنت
          <br />
          يعني اي موقع على الإنترنت ليه واجهة حضرتك بتتعامل معها وبتشوفها لما تفتح الموقع
          <br />
          زي النصوص والأزرار  والصور
          <br />
          والفورم اللي بتعمل منها تسجيل دخول
          <br />
          واللي بتكتب فيها الإسم والإيميل وكلمة المرور
          <br />

          يعني ببساطة كده أي حاجه عينك بتشوفها داخل أي موقع ده عباره عن front_end
          <br />
          وده بالظبط اللي بيصممو وبيبنيه من الصفر
          لحد مايكون موقع كامل هوا الشخص الـ front_end
          <br />

          وده طبعا محتاج مجموعة من اللغات والأدوات اللي بتشارك مع بعضها وبتتجمع مع بعضها علشان تطلع في النهاية موقع كامل
          وبيكون لكل واحده منهم وظيفة معينة بتنفزها داخل الموقع
          <br />

          وده ياخدنا للنقطة التانية واللي هيا
          <br />


          اللغات المستخدمة في مجال الـ front_end
          <br />
          <br />

          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap or Tailwind</li>
          <li>Javascript</li>
          <li>Git and GitHub</li>
          <li>React.js or Angular.js or vue.js</li>
        </div>

        <div>
          <p className="font-bold text-[#faa000] text-[23px]">1- HTML </p>
          <p className="link text-[19px] text-[#0c0c0c]" style={{ color: color }}>
            ودي اللغه المسؤله عن وضع العناصر داخل الصفحه
            زي النصوص والأزرار والصور
            <br />
            والفورم اللي بتعمل منها تسجيل دخول لأي موقع
            <br />
            اللي بتكتب فيها الاسم والإميل والباسورد وغيرها
            <br />
            تقدر تقول انها هيكل بناء الموقع بتاعك
            <br />
            هيا الأساس من غير html الموقع بتاعك عباره عن صفحه فاضيه
          </p>
        </div>

        <div>
          <p className="font-bold text-[#faa000] text-[23px]">2- CSS </p>
          <p className="link text-[19px] text-[#0c0c0c]" style={{ color: color }}>
            ودي اللغة المسؤولة عن تنسيق العناصر
            <br />
            بالبلدي كده تقدر تقول انها الديكور للموقع بتاعك
            <br />
            هيا اللي بتضيف الالوان والاحجام علي عناصر html وبتحرك العناصر وبتتحكم في ترتيبهم وتوزيعهم في الصفحه
            <br />
            مثلا تدي للخط ده لون  وخط تاني لون مختلف
            <br />
            تخلي العنصر ده كبير والعنصر ده صغير
            <br />
            تحركو تجيبو يمين او شمال في اول الصفحة او في اخرها وهكذا
            <br />
            كل شئ يخص  مظهر وشكل الموقع بتاعك المسؤال  عنو CSS
          </p>
        </div>

        <div>
          <p className="font-bold text-[#faa000] text-[23px]">3- Javascript </p>
          <p className="link text-[19px] text-[#0c0c0c]" style={{ color: color }}>
            ودي بقي اللي من غيرها هيكون الموقع بتاعك شكل بس مش هتقدر تستفيد منو
            <br />
            لانها اللغه اللي بتخلي الموقع بتاعك دينمك متفاعل
            <br />
            قابل للإستخدام
            <br />
            يعني لو عندي زرار معين داخل الموقع
            <br />
            اقدر من خلال javascript  اتحكم لما اضغط علي الزرار ده اي اللي بتنفز
            <br />
            يعني مثلا عندك فيسبوك لو من غير javascript
            <br />
            مش هتقدر تضيف بوست جديد او تخذفه او تعدل عليه
            <br />
            مش هتقدر تتدخل علي اي اككونت
            <br />
            ولا تبعت طلبات صداقه ولا تستقبلها
            <br />
            ولا تعمل كومنت ولايك وشير لأي حاجه موجوده
            <br />
            بكل بساطه الموقع من غيرها شكل بس مش اكتر
          </p>
          <br />
          <br />

          <p className="link text-[19px] text-[#0c0c0c]" style={{ color: color }}>
            ودي كده اللغات الأساسيه في تصميم المواقع
            <br />
            عندك بقي شوية أدوات ومكتبات وظيفتها إنها تساعدك وتسهل عليك
            <br />
            ودي طبعا معتمده بالكامل علي الاساس يعني مينفعش تتعلمها غير لما تعدي علي اللغه الاساسيه بتاعتها
          </p>
          <br />
          <br />

          <p className="link text-[19px] text-[#0c0c0c]" style={{ color: color }}>
            أول حاجه عندك مكتبات خاصة بالغة CSS
            <br />
            ومن أشهرهم  <span className="text-[#faa000] font-bold">Bootstrap</span>  و <span className="text-[#faa000] font-bold">Tailwind</span>
            <br />
            طبعا في غيرهم بس دول أكثر شيوعا
            <br />
            ودول برضو بينفزو نفس وظيفة اللغة من الألوان والأشكال وكل شئ يخص شكل الموقع وتخطيطه
            <br />
            بس بيضيفو ليك ميزه كويسه وانها بتسهل عليك وبتختصر عليك وقت ومجهود
            <br />
            عن طريق انها بتديك حجات جاهزه تبني بيها الموقع بدل متقعد كل مره تبني من الصفر
            <br />
            ‏دي طبعا الفكره العامه ليهم وبينهم اختلاف شويه
          </p>
          <br />
          <br />

          <p className="link text-[19px] text-[#0c0c0c]" style={{ color: color }}>
            تاني حاجه وهيا
            <br />
            الـ  <span className="text-[#faa000] font-bold">React.js</span> و <span className="text-[#faa000] font-bold">Vue.js</span> و <span className="text-[#faa000] font-bold">Angular.js</span>
            <br />
            التلاته إطارات عمل للغة javascript
            <br />
            فكرتهم في العموم واحده ومتشابهه لحد كبير
            <br />

            <br />ووظيفتهم برضو يسهلو عليك ويختصرو الوقت والمجهود  في استخدام لغة javascript داخل الموقع
            نظراً لأنها لغة مهمه جدا وشغلها كتير
            <br />
            والموقع بيعتمد عليها بشكل أساسي
            <br />
            طبعا مهمين جداً ومطلوبين بشكل أساسي في الشركات لإن كل الشغل حاليًا معتمد عليهم
            <br />
            ولا يكاد موقع يخلو من إطار عمل فيهم
          </p>
          <br />
        </div>

        <button className='link flex items-center gap-1 w-[160px] h-[45px] underline text-[19px] text-center leading-[40px] rounded-md transition-all delay-75 hover:text-blue-700' style={{ color: color }}><a href="/" className="hover:text-blue-700"> الصفحة الرئيسية </a>  <MdChevronLeft className="mt-1 " /></button>

      </div>
      <div className="w-full flex items-center justify-center">
        <Maps />
      </div>
      <br />
      <br />

      <Footer />

    </div>
  )
}

export default FrontEnd

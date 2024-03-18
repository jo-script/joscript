'use client'

import Footer from "../../footer/Footer"
import { Maps } from "../page"
import { MdChevronLeft } from "react-icons/md";


function BackEnd() {
  return (
    <div className="card bg-white">
      <div id="back" className="w-full h-72 bg-slate-400 flex flex-col items-center justify-center gap-4">
        <h1 className="text-white font-bold text-[50px] tracking-widest">BACK END </h1>
        <button className='w-[250px] h-[45px] text-[19px] text-[#ffffff]  hover:bg-[#ffffff] border-[1px] border-[#ffffff9c] text-center leading-[40px] rounded-md hover:text-[#0c0c0c] shadow-[0_0_8px_0_#FA000] transition-all delay-75 '><a href="https://forms.microsoft.com/r/ELP7xVcXbS" target='_blank'>سجل معنا</a>  </button>
      </div>

      <div style={{ direction: 'rtl' }} className=" w-full pt-14 px-[10%] flex flex-col items-start justify-start gap-5">
        <div className="text-[#faa000] text-[30px] max-[500px]:text-[25px] font-bold ">
          <span>أولاً:  </span>
          <span>     ماهوا الـ Back End ؟ </span>
        </div>

        <p className="text-[19px] text-[#0c0c0c]">
          الباك اند هو بناء وتطوير الواجهة الخلفية لمواقع الانترنت
          <br />
          الباك اند بيتعامل مع كل شئ لا يمكن للمستخدم
          رؤيته
          <br />
          زي تخزين البيانات وحذفها والتعديل عليها
          <br />
          وزي طرق الدفع علي الإنترنت وغيرها من العمليات
          <br />
          اللي بتكون خلف الكواليس في عالم الإنترنت
        </p>

        <p className="text-[19px] text-[#0c0c0c]">
          يعني مثلا زي فيسبوك
          <br />
          من غير باك اند مكنتش هتعرف تعمل حساب جديد
          مكنتش هتشوف اي منشور لأي حد
          <br />
          ولا حد هيشوف منشوراتك
          مكنتش هتشوف أي كومنت ولا طلب صداقة
          <br />
          مكنتش هتعرف تعمل بلوك لحد
          ولا كنت هتعرف تدخل شات مع أي حد
          <br />
          كل ده واكتر بيقوم بيه الباك اند
        </p>
        <div className="text-[#faa000] text-[30px] max-[500px]:text-[25px] font-bold ">
          <span>لغات تعلم الـ Back End </span>
        </div>
        <p className="text-[19px] text-[#0c0c0c]">
          فيه اكتر من لغة برمجة تقدر تتعلمهم علشان تكون باك اند
          زي
          <br />
          <span className="text-[#faa000] text-[21px]">javascript و Python و Java و PHP</span>
          <br />
          <br />
          وكل لغة من دول  شائع ليها إطار عمل أو مكتبات علشان تساعدك في بناء الباك اند
          <br />
          <br />

        <p className="p-4 bg-red-100 w-full rounded-md">
        <span className="font-bold">ملحوظة:</span>  كل المسارت اللي هيتم ذكرها بتنفذ نفس الوظيفه يعني تعلم مسار واحد بس يكفي
          مش لازم تتعلمهم كلهم
        </p>
        </p>

        <p className="text-[19px] text-[#0c0c0c] ">

          <p className="font-bold">javascript </p>
          Node.js <br />
          Express <br />
          MongoDb <br />
          Mongoose <br />
          <br />
          <p className="font-bold">Python</p>
          Djangoq <br />
          MySQL <br />
          Requests <br />
          <br />
          <p className="font-bold">PHP </p>
          Laravel <br />
          MySQL <br />
          Eloquent ORM (Laravel) <br />
          Guzzle <br />
          <br />
          <p className="font-bold">Java</p>
          Spring Framework <br />
          JDBC (Java Database Connectivity) <br />
          Spring Security <br />
          Quartz Scheduler <br />
        </p>

        <button className=' flex items-center gap-1 w-[160px] h-[45px] underline text-[19px] hover:text-blue-700  text-center leading-[40px] rounded-md transition-all delay-75 '><a href="/"> الصفحة الرئيسية </a>  <MdChevronLeft className="mt-1" /></button>

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

export default BackEnd

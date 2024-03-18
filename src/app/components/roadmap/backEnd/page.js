'use client'

import Footer from "../../footer/Footer"
import { Maps } from "../page"

function BackEnd() {
  return (
    <div className="card bg-[#f0f0f0]">
      <div id="back" className="w-full h-72 bg-slate-400 flex flex-col items-center justify-center gap-4">
        <h1 className="text-white font-bold text-[50px] tracking-widest">BACK END </h1>
        <button className='w-[250px] h-[45px] text-[19px] text-[#ffffff]  hover:bg-[#ffffff] border-[1px] border-[#ffffff9c] text-center leading-[40px] rounded-md hover:text-[#0c0c0c] shadow-[0_0_8px_0_#FA000] transition-all delay-75 '><a href="https://forms.microsoft.com/r/ELP7xVcXbS" target='_blank'>سجل معنا</a>  </button>
      </div>

      <div style={{ direction: 'rtl' }} className=" w-full pt-14 px-[10%] flex flex-col items-start justify-start gap-5">
        <div className="w-full bg-white p-3 rounded-md shadow-[0_0_10px_0_#0c0c0c10] text-[#faa000] text-[30px] font-bold ">
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
        <div className="w-full bg-white p-3 rounded-md shadow-[0_0_10px_0_#0c0c0c10] text-[#faa000] text-[30px] font-bold ">
          <span>لغات تعلم الـ Back End </span>
          
        </div>

 
      </div>

      <div className="w-full flex items-center justify-center">
        <Maps />
      </div>
      <br/>
      <br/>
      <Footer />
    </div>
  )
}

export default BackEnd

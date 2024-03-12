

function FrontEnd() {
  return (
    <div className='front w-fll bg-white' style={{ direction: 'rtl' }}>
      <div id="front" className="w-full h-72 bg-slate-400 flex items-center justify-center">
        <h1 className="text-white font-bold text-[50px]">FRONT END</h1>
      </div>

      <div style={{ direction: 'rtl' }} className=" w-full pt-14 px-[10%] flex flex-col items-start justify-start gap-5">
        <div className="text-[#faa000] text-[30px] font-bold ">
          <span>أولاً:  </span>
          <span>     ماهوا الـ Front End ؟ </span>
        </div>

        <div className="text-[19px] text-[#0c0c0c]">
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
          <p className="text-[19px] text-[#0c0c0c]">
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
          <p className="text-[19px] text-[#0c0c0c]">
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
          <p className="text-[19px] text-[#0c0c0c]">
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
        </div>
      </div>


    </div>
  )
}

export default FrontEnd

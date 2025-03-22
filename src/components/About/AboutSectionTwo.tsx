import Image from "next/image";

const AboutSectionTwo = () => {
  return (
   
    <section className="py-16 md:py-20 lg:py-28 bg-gray-100 dark:bg-gray-900">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* الصورة الجانبية */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // صورة تعبر عن الترافع والاستشارات
                alt="Legal Services"
                width={500}
                height={500}
                className="drop-shadow-lg dark:hidden"
              />
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3135/3135733.png" // صورة بديلة للوضع الليلي
                alt="Legal Services Dark Mode"
                width={500}
                height={500}
                className="drop-shadow-lg hidden dark:block"
              />
            </div>
          </div>

          {/* المحتوى النصي */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              {/* خدمة صياغة العقود */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  📜 صياغة العقود والاتفاقيات
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  نساعدك في صياغة العقود القانونية وفق أحدث التشريعات لضمان حقوقك وحماية مصالحك بشكل احترافي وقانوني.
                </p>
              </div>

              {/* خدمة الترافع والاستشارات القانونية */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  ⚖️ الترافع والاستشارات القانونية
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  مستشارون قانونيون متخصصون في تقديم الاستشارات الدقيقة والترافع أمام المحاكم لضمان حصولك على العدالة.
                </p>
              </div>

              {/* خدمة التحكيم وتسوية النزاعات */}
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  🤝 التحكيم وتسوية النزاعات
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  نقدم حلول التحكيم والوساطة القانونية لإنهاء النزاعات بطريقة ودية وعادلة، مما يوفر الوقت والجهد للأطراف المعنية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

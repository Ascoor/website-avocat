import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24 text-right">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          
          {/* مكتب المحاماة - المعلومات */}
          <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link className="mb-8 inline-block" href="/">
                <Image
                  alt="شعار المكتب"
                  loading="lazy"
                  width="100"
                  height="20"
                  decoding="async"
                  className="w-full dark:hidden"
                  src="/images/logo/logo.png"
                />
                <Image
                  alt="شعار المكتب"
                  loading="lazy"
                  width="100"
                  height="20"
                  decoding="async"
                  className="hidden w-full dark:block"
                  src="/images/logo/logo512.png"
                />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                مكتب المحاماة "أفوكات" يقدم خدمات قانونية متكاملة تشمل الاستشارات القانونية، صياغة العقود، والدفاع في المحاكم لضمان حقوق عملائنا.
              </p>
              <div className="flex items-center justify-end">
                {/* روابط التواصل الاجتماعي */}
                <Link
                  href="/"
                  aria-label="فيسبوك"
                  target="_blank"
                  className="ml-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </Link>
                <Link
                  href="/"
                  aria-label="تويتر"
                  target="_blank"
                  className="ml-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </Link>
                <Link
                  href="/"
                  aria-label="لينكدإن"
                  target="_blank"
                  className="ml-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </Link>
                <Link
                  href="/"
                  aria-label="يوتيوب"
                  target="_blank"
                  className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* روابط هامة */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">روابط هامة</h2>
              <ul>
                <li>
                  <Link
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    href="/about"
                  >
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    href="/services"
                  >
                    خدماتنا
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    href="/contact"
                  >
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* القوانين والسياسات */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">السياسات</h2>
              <ul>
                <li>
                  <Link
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    href="/privacy-policy"
                  >
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    href="/terms"
                  >
                    شروط الاستخدام
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    href="/refund-policy"
                  >
                    سياسة الاسترداد
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* الدعم والمساعدة */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">الدعم والمساعدة</h2>
              <ul>
                <li>
                  <Link
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    href="/faq"
                  >
                    الأسئلة الشائعة
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    href="/legal-advice"
                  >
                    استشارة قانونية
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    href="/contact"
                  >
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* خط فاصل */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

        {/* حقوق النشر */}
        <div className="py-6 text-center">
          <p className="text-base text-body-color dark:text-white">
            جميع الحقوق محفوظة © 2025 - مكتب المحاماة "أفوكات"
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

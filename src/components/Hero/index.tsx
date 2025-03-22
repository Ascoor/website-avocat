import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
    <div className="container">
  <div className="-mx-4 flex flex-wrap">
    <div className="w-full px-4">
      <div
        className="wow fadeInUp mx-auto max-w-[800px] text-center"
        data-wow-delay=".2s"
      >
        <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          مكتب محاماة واستشارات قانونية - خبرة، ثقة، وحلول قانونية مبتكرة
        </h1>
        <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
          نحن في <strong>أفوكات</strong> نقدم خدمات قانونية متكاملة، تشمل
          الاستشارات القانونية، الترافع أمام المحاكم، وصياغة العقود بأسلوب
          احترافي يحمي حقوقك. سواء كنت فردًا أو شركة، نحن هنا لضمان حصولك على
          الدعم القانوني الذي تستحقه بكل احترافية ودقة.
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="/contact"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            استشارة قانونية مجانية ⚖️
          </Link>
          <Link
            href="/about"
            className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
          >
            تعرف علينا 📜
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

        <div className="absolute top-0 left-0 z-[-1] opacity-30 lg:opacity-100">
    <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="173" cy="63" r="230" fill="url(#paint0_linear_25:217)"></circle>
        <circle cx="432.0003" cy="182" r="18" fill="url(#paint1_radial_25:217)"></circle>
        <circle cx="380.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)"></circle>
        <circle cx="114.514" cy="312.87" r="180" transform="rotate(37.6852 154.514 302.87)" fill="url(#paint3_linear_25:217)"></circle>
        <circle opacity="0.8" cx="265.479" cy="340.521" r="132.862" transform="rotate(-114.874 265.479 315.521)" stroke="url(#paint4_linear_25:217)"></circle>
        <circle opacity="0.8" cx="74" cy="280" r="179.5" transform="rotate(30 94 290)" stroke="url(#paint5_linear_25:217)"></circle>
        <circle opacity="0.8" cx="305.341" cy="302.659" r="133.362" transform="rotate(-133.319 288.341 302.659)" fill="url(#paint6_linear_25:217)"></circle>
        <defs>
            <linearGradient id="paint0_linear_25:217" x1="504.5003" y1="-178" x2="228" y2="288" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
            </linearGradient>
            <radialGradient id="paint1_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(432.0003 182) rotate(90) scale(18)">
                <stop offset="0.145833" stop-color="#4A6CF7" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0.08"></stop>
            </radialGradient>
            <radialGradient id="paint2_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(373.0003 288) rotate(90) scale(34)">
                <stop offset="0.145833" stop-color="#4A6CF7" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0.08"></stop>
            </radialGradient>
            <linearGradient id="paint3_linear_25:217" x1="423.225" y1="-66.1548" x2="357.843" y2="351.421" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint4_linear_25:217" x1="265.479" y1="182.159" x2="265.479" y2="448.882" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint5_linear_25:217" x1="94" y1="110" x2="94" y2="470" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint6_linear_25:217" x1="388" y1="29.2497" x2="339.965" y2="338.63" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
            </linearGradient>
        </defs>
    </svg>
</div>

        <div className="absolute bottom-0 right-0 z-[-1] opacity-30 lg:opacity-100">
    <svg width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M358.111 72.3303C330.34 66.4798 262.603 64.9086 213.822 105.427C152.845 156.076 134.41 162.093 99.667 166.607C64.924 171.12 26.282 183.657 1.111 212.24" stroke="url(#paint0_linear_25:218)"></path>
        <path d="M386.111 72.3303C358.34 66.4798 290.603 64.9086 241.822 105.427C180.845 156.076 162.41 162.093 127.667 166.607C92.924 171.12 54.282 183.657 29.111 212.24" stroke="url(#paint1_linear_25:218)"></path>
        <path d="M417.111 72.3303C389.34 66.4798 321.603 64.9086 272.822 105.427C211.845 156.076 193.41 162.093 158.667 166.607C123.924 171.12 85.282 183.657 60.111 212.24" stroke="url(#paint2_linear_25:218)"></path>
        <path d="M462.162 65.0889C432.142 60.0601 359.266 60.4882 307.927 102.431C243.752 154.86 224.095 161.419 186.863 166.956C149.63 172.493 108.425 186.165 82.144 215.481" stroke="url(#paint3_linear_25:218)"></path>
        <circle opacity="0.8" cx="149.495" cy="60.5054" r="49.7205" transform="rotate(13.421 149.495 60.5054)" stroke="url(#paint4_linear_25:218)"></circle>
        <circle cx="144" cy="63" r="43" fill="url(#paint5_radial_25:218)"></circle>
        <defs>
            <linearGradient id="paint0_linear_25:218" x1="179.611" y1="69.2405" x2="179.611" y2="212.24" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_25:218" x1="207.611" y1="69.2405" x2="207.611" y2="212.24" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient id="paint2_linear_25:218" x1="238.611" y1="69.2405" x2="238.611" y2="212.24" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient id="paint3_linear_25:218" x1="270.149" y1="67.2674" x2="274.072" y2="210.214" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient id="paint4_linear_25:218" x1="149.495" y1="10.2849" x2="151.316" y2="99.5816" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
            </linearGradient>
            <radialGradient id="paint5_radial_25:218" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(144 63) rotate(90) scale(43)">
                <stop offset="0.145833" stop-color="white" stop-opacity="0"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0.08"></stop>
            </radialGradient>
        </defs>
    </svg>
</div>

      </section>
    </>
  );
};

export default Hero;

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NewsLatterBox = () => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  if (currentTheme === undefined) {
    return null;
  }

  return (
    <div
      className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        اشترك في النشرة القانونية
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        اشترك الآن لتصلك أحدث الأحكام القضائية، القوانين الجديدة، والاستشارات القانونية الهامة مباشرة إلى بريدك الإلكتروني.
      </p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="أدخل اسمك"
          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="email"
          name="email"
          placeholder="أدخل بريدك الإلكتروني"
          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="submit"
          value="اشترك الآن"
          className="shadow-submit dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
        />
        <p className="dark:text-body-color-dark text-center text-base leading-relaxed text-body-color">
          لا قلق من البريد العشوائي، نرسل لك فقط المعلومات القانونية المفيدة.
        </p>
      </div>
    </div>
  );
};

export default NewsLatterBox;

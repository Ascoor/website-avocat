import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحة من نحن | قالب مجاني Next.js للشركات الناشئة و SaaS",
  description: "هذه هي صفحة من نحن لقالب Nextjs الخاص بالشركات الناشئة.",
  // بيانات التعريف الأخرى
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="صفحة من نحن"
        description="نحن مكتب محاماة متخصص في تقديم الخدمات القانونية والاستشارات القانونية. نساعدك في تحرير العقود ورفع الدعاوى."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
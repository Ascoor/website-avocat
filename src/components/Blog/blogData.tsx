import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "تأييد حكم السجن في قضية الابتزاز الإلكتروني",
    paragraph:
      "محكمة النقض تؤيد حكم السجن لمدة 10 سنوات لمتهم قام بابتزاز ضحية وهدد بنشر صورها الخاصة، في سابقة قضائية تعزز الحماية الإلكترونية.",
    image: "/images/legal/cybercrime-case.jpg",
    author: {
      name: "أحمد كمال",
      image: "/images/blog/author-01.png",
      designation: "خبير قانوني",
    },
    tags: ["جرائم إلكترونية", "ابتزاز"],
    publishDate: "مارس 2025",
  },
  {
    id: 2,
    title: "حكم نهائي بشأن ملكية العقارات المنزوعة للمنفعة العامة",
    paragraph:
      "أصدرت محكمة النقض حكمًا بإلزام الجهة الحكومية بدفع التعويض المناسب لأصحاب العقارات المنزوعة ملكيتها للمنفعة العامة.",
    image: "/images/legal/property-case.jpg",
    author: {
      name: "محمد عبد الرحمن",
      image: "/images/blog/author-02.png",
      designation: "محامي مختص",
    },
    tags: ["القانون العقاري", "تعويضات"],
    publishDate: "فبراير 2025",
  },
  {
    id: 3,
    title: "إلغاء حكم ضد شركة تأمين في قضية تعويضات مرورية",
    paragraph:
      "محكمة النقض تلغي حكمًا سابقًا ضد شركة تأمين، مؤكدة أن التعويض يجب أن يكون وفقًا للعقد الموقع بين الأطراف وليس بناءً على التقديرات العشوائية.",
    image: "/images/legal/insurance-case.jpeg",
    author: {
      name: "ياسر منصور",
      image: "/images/blog/author-03.png",
      designation: "مستشار قانوني",
    },
    tags: ["التأمين", "حوادث المرور"],
    publishDate: "يناير 2025",
  },
];

export default blogData;

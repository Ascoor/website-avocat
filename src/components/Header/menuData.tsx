import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "الرئيسية",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "من نحن",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "الخدمات",
    path: "/services",
    newTab: false,
  },
  {
    id: 4,
    title: "التواصل",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "المدونة",
    path: "/blog",
    newTab: false,
  },
  {
    id: 6,
    title: "صفحات",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "صفحة من نحن",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "صفحة التواصل",
        path: "/contact",
        newTab: false,
      },
      {
        id: 63,
        title: "صفحة المدونة",
        path: "/blog",
        newTab: false,
      },
      {
        id: 64,
        title: "تفاصيل المدونة",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 65,
        title: "صفحة تسجيل الدخول",
        path: "/signin",
        newTab: false,
      },
      {
        id: 66,
        title: "صفحة تسجيل",
        path: "/signup",
        newTab: false,
      },
      {
        id: 67,
        title: "صفحة خطأ",
        path: "/error",
        newTab: false,
      },
    ],
  },
];

export default menuData;
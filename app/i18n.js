import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // header
      home: "Home",
      contact: "Contact",
      blog: "Blogs",
      // log in
      access: " Access restricted. Please log in to proceed !",
      userName: "User name",
      password: "Password",
      logIn: "Log In",
      //log out
      logOut: "Log Out",
      //footer
      subscribe: "Subscribe Newsletter",
      sale: "Subscribe newsletter to get 5% on all products",
      email: "Email",
      button: "Subscribe",
      findUs: "Find Us",
      right: " © 2024 all rights reserved",
      //search
      searchCategory: "Search Category",
      sort: "Sort",
      reset: "Reset",
      available: "items are available in store",
    },
  },
  ge: {
    translation: {
      // header
      home: "მთავარი",
      contact: "კონტაქტები",
      blog: "ბლოგები",

      // log in
      access: " გთხოვთ შეიყვანეთ თქვენი მონაცემები !",
      userName: "სახელი",
      password: "პაროლი",
      logIn: "შესვლა",
      //log out
      logOut: "გასვლა",
      //footer
      subscribe: "გამოგვიწერეთ",
      sale: "გამოწერის შემთხვევში მიიღეთ 5% ყველა პროდუქტზე",
      email: "მეილი",
      button: "გამოგვიწერეთ",
      findUs: "მოგვძებნეთ",
      right: " © 2024 ყველა უფლება დაცულია",
      //search
      searchCategory: "შეარჩიეთ კატეგორია",
      sort: "დასორტე",
      reset: "დაბრუნება",
      available: "პროდუქტი ხელმისაწვდომია მაღაზიაში",
    },
  },
};

const savedLanguage = localStorage.getItem("language") || "en";
i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

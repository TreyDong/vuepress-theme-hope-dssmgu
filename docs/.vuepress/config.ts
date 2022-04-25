import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

const base = (process.env.BASE as "/" | `/${string}/`) || "/";

export default defineHopeConfig({
  base,

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Theme Demo",
    //   description: "A demo for vuepress-theme-hope",
    // },
    "/zh/": {
      lang: "zh-CN",
      title: "More",
      description: "测试开发之路",
    },
  },

  themeConfig,
});

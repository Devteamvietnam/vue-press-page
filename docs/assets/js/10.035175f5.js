(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(s,e,t){"use strict";t.r(e);var n=t(23),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use"}},[s._v("#")]),s._v(" Use")]),s._v(" "),t("h2",{attrs:{id:"prepare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare"}},[s._v("#")]),s._v(" Prepare")]),s._v(" "),t("p",[s._v("Your local environment needs to install yarn, node and git. Our technology stack is based on ES6+, Vue, Antd, learning these knowledge in advance will be very helpful.")]),s._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),t("p",[s._v("Clone this project to local")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/Devteamvietnam/vue-admin.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Installation dependencies")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\nor\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("The master branch is the standard version of the Vue Admin code. This branch code is suitable for study and research. It is not recommended to do formal development in this branch.\nWe provide the basic version of Vue  Admin code in the dev branch. For official development, please switch to this branch to facilitate subsequent version updates.")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("If you are developing based on the "),t("code",[s._v("master branch")]),s._v(", please solve the problem of code conflicts encountered during the version update. We do not provide technical support for the problems encountered during the development based on the "),t("code",[s._v("master branch")]),s._v(".\nAgain, the "),t("code",[s._v("master branch")]),s._v(" is only recommended for learning and reference. For official development, please switch to the "),t("code",[s._v("dev")]),s._v(" branch! ! !")])]),s._v(" "),t("h2",{attrs:{id:"directory-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[s._v("#")]),s._v(" Directory Structure")]),s._v(" "),t("p",[s._v("We have generated a complete development framework for you, providing various functions and pits covering middle and back-end development. Below is the directory structure of the entire project.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("├── docs "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use documentation")]),s._v("\n├── public\n│ └── img\n│   └──icons "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# images vuejs ")]),s._v("\n│ └── favicon.png "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# favicon")]),s._v("\n│ └── index.html "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Entry HTML")]),s._v("\n│ └── robots.txt "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# robots")]),s._v("\n├── src\n│ ├── assets "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Local static resources")]),s._v("\n│ ├── components "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Built-in common components")]),s._v("\n│ ├── config "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# System configuration")]),s._v("\n│ ├── layouts "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# General layout")]),s._v("\n│ ├── locales "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local vue-i18n")]),s._v("\n│ ├── pages "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Page components and general templates")]),s._v("\n│ ├── plugins "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vue plugins")]),s._v("\n│ ├── router "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# routing configuration")]),s._v("\n│ ├── services "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Data connect api service")]),s._v("\n│ ├── store "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vuex state management configuration")]),s._v("\n│ ├── theme "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Theme related")]),s._v("\n│ ├── utils "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# js tool")]),s._v("\n│ ├── App.vue "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Application entry component")]),s._v("\n│ ├── bootstrap.js "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Application startup guide js")]),s._v("\n│ └── main.js "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Application entry js")]),s._v("\n├── package.json "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# package.json")]),s._v("\n├── README.md "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# README.md")]),s._v("\n└── vue.config.js "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vue configuration file")]),s._v("\n└── webpack.config.js "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# webpack configuration file")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("h2",{attrs:{id:"local-development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local-development"}},[s._v("#")]),s._v(" Local development")]),s._v(" "),t("p",[s._v("Start service")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" serve\nor\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run serve\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("After successful startup, you will see a local preview address, usually http://localhost:8085. Then you can modify the code and preview the modification results in real time!")])])}),[],!1,null,null,null);e.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{415:function(t,s,a){t.exports=a.p+"assets/img/vite_pack.fc58f069.jpg"},442:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vite-打包后访问显示空白页的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vite-打包后访问显示空白页的问题"}},[t._v("#")]),t._v(" Vite 打包后访问显示空白页的问题")]),t._v(" "),s("p",[s("strong",[t._v("技术栈：")]),t._v(" Vue3、Vite、Nginx；")]),t._v(" "),s("p",[s("strong",[t._v("场景：")]),t._v(" vue-router 使用的是 createWebHistory 模式，在 build 打包项目并部署到服务器上时，页面访问空白，打开控制台也并没有报错；")]),t._v(" "),s("p",[t._v("首先，当页面访问出现空白页时，应当先打开控制台，查看是否出现报错的情况：")]),t._v(" "),s("ul",[s("li",[s("h3",{attrs:{id:"页面无法渲染-报错-404"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面无法渲染-报错-404"}},[t._v("#")]),t._v(" 页面无法渲染，报错 404")])])]),t._v(" "),s("p",[t._v("这种情况，往往是因为路径匹配错误。需要修改的文件如下：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vite.config.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/lnui/oumu/Craft/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改 base 属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// router/index.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  history"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebHistory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/lnui/oumu/Craft/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为 createWebHistory 路由模式传递 base 参数")]),t._v("\n  routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("解释一下，base 所填的路径来自哪里呢？ 以我的项目举例：")]),t._v(" "),s("p",[t._v("我的项目首页路径是 127.0.0.1/lnui/oumu/main.html")]),t._v(" "),s("p",[t._v("而打包出来的 dist 文件夹里面的内容，被我放在了这个目录之下，因此 base 的路径就是 /lnui/oumu/Craft/")]),t._v(" "),s("p",[s("img",{attrs:{src:a(415),alt:"image-20230813182413171"}})]),t._v(" "),s("p",[t._v("此时，我们是可以通过 127.0.0.1/lnui/oumu/Craft/Home 去访问 Vue 的首页了。")]),t._v(" "),s("p",[s("strong",[t._v("注意、注意、注意： 如果去访问 127.0.0.1/lnui/oumu/Craft/index.html   是会出现空白页的。因为访问的应该是路由，而不是 index.html ！！！")])]),t._v(" "),s("ul",[s("li",[s("h3",{attrs:{id:"页面正常显示-f5-刷新页面时-报错404"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面正常显示-f5-刷新页面时-报错404"}},[t._v("#")]),t._v(" 页面正常显示，F5 刷新页面时 报错404")]),t._v(" "),s("p",[t._v("出现这种症状呢，去访问 127.0.0.1/lnui/oumu/Craft/Home 是报错 404 的，只有访问 127.0.0.1/lnui/oumu/Craft 让它自动跳转至 127.0.0.1/lnui/oumu/Craft/Home 才会出现页面。")]),t._v(" "),s("p",[t._v("当自动为您跳转渲染出页面后，此时去刷新页面，自然是刷新了 127.0.0.1/lnui/oumu/Craft/Home 路径，也就是说，这个时候刷新 就等同于 直接去访问 127.0.0.1/lnui/oumu/Craft/Home 一样，所以报错 404 。")]),t._v(" "),s("p",[t._v("所以就需要配置一下 Nginx 来解决这个问题：")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /lnui/oumu/Craft")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" index.html\n\ttry_files "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ /lnui/oumu/Craft/index.html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在配置里的第一行出现的 /lnui/oumu/Craft，只要按照刚刚在 vite.config.ts 里面配置的 base 属性写上就行。")]),t._v(" "),s("p",[t._v("第四行最后面的 /lnui/oumu/Craft/index.html  也是一样，前面写上路径，后面拼上 index.html。")]),t._v(" "),s("p",[t._v("到这里应该是完美解决了，页面正常渲染，想怎么刷就怎么刷。")])]),t._v(" "),s("li",[s("h3",{attrs:{id:"其他可能情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他可能情况"}},[t._v("#")]),t._v(" 其他可能情况")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// router/index.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// component: import('@/pages/Home/index.vue'),       // 引发空白页")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/pages/Home/index.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确写法")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("以上情况也会导致访问页面是空白页，"),s("strong",[t._v("注意需要使用箭头函数！")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7370aed2"],{"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),o=n("d039"),i=n("ad6d"),c="toString",u=RegExp.prototype,l=u[c],s=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=c;(s||f)&&r(RegExp.prototype,c,(function(){var t=a(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in u)?i.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},2626:function(t,e,n){"use strict";var r=n("d066"),a=n("9bf2"),o=n("b622"),i=n("83ab"),c=o("species");t.exports=function(t){var e=r(t),n=a.f;i&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},2677:function(t,e,n){"use strict";var r=n("8654"),a=n("a844");function o(t,e){var n=[];for(var r in t)t.hasOwnProperty(r)&&n.push(e("template",{slot:r},t[r]));return n}function i(t){if(t.model&&t.on&&t.on.input)if(Array.isArray(t.on.input)){var e=t.on.input.indexOf(t.model.callback);e>-1&&t.on.input.splice(e,1)}else delete t.on.input}var c=n("d9bd");n.d(e,"a",(function(){return u}));var u={functional:!0,$_wrapperFor:r["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var n=e.props,l=e.data,s=e.slots,f=e.parent;i(l);var p=o(s(),t);return n.textarea&&Object(c["d"])("<v-text-field textarea>","<v-textarea outline>",u,f),n.multiLine&&Object(c["d"])("<v-text-field multi-line>","<v-textarea>",u,f),n.textarea||n.multiLine?(l.attrs.outline=n.textarea,t(a["a"],l,p)):t(r["a"],l,p)}}},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),o=n("b622"),i=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},"466d":function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),o=n("50c4"),i=n("1d80"),c=n("8aa5"),u=n("14c3");r("match",1,(function(t,e,n){return[function(e){var n=i(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=a(t),l=String(this);if(!i.global)return u(i,l);var s=i.unicode;i.lastIndex=0;var f,p=[],d=0;while(null!==(f=u(i,l))){var x=String(f[0]);p[d]=x,""===x&&(i.lastIndex=c(l,o(i.lastIndex),s)),d++}return 0===d?null:p}]}))},"4d63":function(t,e,n){var r=n("83ab"),a=n("da84"),o=n("94ca"),i=n("7156"),c=n("9bf2").f,u=n("241c").f,l=n("44e7"),s=n("ad6d"),f=n("9f7f"),p=n("6eeb"),d=n("d039"),x=n("69f3").set,v=n("2626"),g=n("b622"),h=g("match"),b=a.RegExp,E=b.prototype,y=/a/g,R=/a/g,m=new b(y)!==y,_=f.UNSUPPORTED_Y,w=r&&o("RegExp",!m||_||d((function(){return R[h]=!1,b(y)!=y||b(R)==R||"/a/i"!=b(y,"i")})));if(w){var O=function(t,e){var n,r=this instanceof O,a=l(t),o=void 0===e;if(!r&&a&&t.constructor===O&&o)return t;m?a&&!o&&(t=t.source):t instanceof O&&(o&&(e=s.call(t)),t=t.source),_&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var c=i(m?new b(t,e):b(t,e),r?this:E,O);return _&&n&&x(c,{sticky:n}),c},S=function(t){t in O||c(O,t,{configurable:!0,get:function(){return b[t]},set:function(e){b[t]=e}})},I=u(b),P=0;while(I.length>P)S(I[P++]);E.constructor=O,O.prototype=E,p(a,"RegExp",O)}v("RegExp")},"54c3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[n("v-card",[n("v-card-title",[n("h1",[t._v("Occurrences Counter")])]),n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{placeholder:"Paste your string to find"},model:{value:t.string,callback:function(e){t.string=e},expression:"string"}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-textarea",{attrs:{placeholder:"Paste your text here"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-textarea",{attrs:{placeholder:"Result"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.count()}}},[t._v("Count")])],1),n("actions",{attrs:{result:t.result}})],1)],1)],1)],1)},a=[],o=(n("4d63"),n("ac1f"),n("25f0"),n("466d"),{data:function(){return{text:"",result:"",string:""}},methods:{count:function(){var t=new RegExp(this.string,"gi");this.result=this.text.match(t||[]).length}}}),i=o,c=n("2877"),u=n("6544"),l=n.n(u),s=n("8336"),f=n("b0af"),p=n("99d9"),d=n("12b2"),x=n("a523"),v=n("0e8f"),g=n("a722"),h=n("2677"),b=n("a844"),E=Object(c["a"])(i,r,a,!1,null,null,null);e["default"]=E.exports;l()(E,{VBtn:s["a"],VCard:f["a"],VCardText:p["b"],VCardTitle:d["a"],VContainer:x["a"],VFlex:v["a"],VLayout:g["a"],VTextField:h["a"],VTextarea:b["a"]})},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),o=function(t){return function(e,n){var o,i,c=String(a(e)),u=r(n),l=c.length;return u<0||u>=l?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===l||(i=c.charCodeAt(u+1))<56320||i>57343?t?c.charAt(u):o:t?c.slice(u,u+2):i-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var o,i;return a&&"function"==typeof(o=e.constructor)&&o!==n&&r(i=o.prototype)&&i!==n.prototype&&a(t,i),t}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),o=RegExp.prototype.exec,i=String.prototype.replace,c=o,u=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=u||s||l;f&&(c=function(t){var e,n,a,c,f=this,p=l&&f.sticky,d=r.call(f),x=f.source,v=0,g=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(x="(?: "+x+")",g=" "+g,v++),n=new RegExp("^(?:"+x+")",d)),s&&(n=new RegExp("^"+x+"$(?!\\s)",d)),u&&(e=f.lastIndex),a=o.call(p?n:f,g),p?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:u&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),s&&a&&a.length>1&&i.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d2bb:function(t,e,n){var r=n("825a"),a=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(o){}return function(n,o){return r(n),a(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),o=n("b622"),i=n("9263"),c=n("9112"),u=o("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var x=o(t),v=!a((function(){var e={};return e[x]=function(){return 7},7!=""[t](e)})),g=v&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[x]=/./[x]),n.exec=function(){return e=!0,null},n[x](""),!e}));if(!v||!g||"replace"===t&&(!l||!s||p)||"split"===t&&!d){var h=/./[x],b=n(x,""[t],(function(t,e,n,r,a){return e.exec===i?v&&!a?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),E=b[0],y=b[1];r(String.prototype,t,E),r(RegExp.prototype,x,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}f&&c(RegExp.prototype[x],"sham",!0)}}}]);
//# sourceMappingURL=chunk-7370aed2.165b07a8.js.map
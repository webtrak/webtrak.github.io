(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61fc394a"],{"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var c=r.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),c=r("7b0b"),i=r("50c4"),l=r("a691"),o=r("1d80"),u=r("8aa5"),s=r("14c3"),f=Math.max,d=Math.min,v=Math.floor,x=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=n.REPLACE_KEEPS_$0,b=g?"$":"$0";return[function(r,n){var a=o(this),c=void 0==r?void 0:r[t];return void 0!==c?c.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!g&&E||"string"===typeof n&&-1===n.indexOf(b)){var c=r(e,t,this,n);if(c.done)return c.value}var o=a(t),v=String(this),x="function"===typeof n;x||(n=String(n));var p=o.global;if(p){var y=o.unicode;o.lastIndex=0}var m=[];while(1){var S=s(o,v);if(null===S)break;if(m.push(S),!p)break;var _=String(S[0]);""===_&&(o.lastIndex=u(v,i(o.lastIndex),y))}for(var I="",A=0,T=0;T<m.length;T++){S=m[T];for(var $=String(S[0]),C=f(d(l(S.index),v.length),0),P=[],w=1;w<S.length;w++)P.push(h(S[w]));var k=S.groups;if(x){var U=[$].concat(P,C,v);void 0!==k&&U.push(k);var N=String(n.apply(void 0,U))}else N=R($,v,C,P,k,n);C>=A&&(I+=v.slice(A,C)+N,A=C+$.length)}return I+v.slice(A)}];function R(t,r,n,a,i,l){var o=n+t.length,u=a.length,s=p;return void 0!==i&&(i=c(i),s=x),e.call(l,s,(function(e,c){var l;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(o);case"<":l=i[c.slice(1,-1)];break;default:var s=+c;if(0===s)return e;if(s>u){var f=v(s/10);return 0===f?e:f<=u?void 0===a[f-1]?c.charAt(1):a[f-1]+c.charAt(1):e}l=a[s-1]}return void 0===l?"":l}))}}))},6547:function(t,e,r){var n=r("a691"),a=r("1d80"),c=function(t){return function(e,r){var c,i,l=String(a(e)),o=n(r),u=l.length;return o<0||o>=u?t?"":void 0:(c=l.charCodeAt(o),c<55296||c>56319||o+1===u||(i=l.charCodeAt(o+1))<56320||i>57343?t?l.charAt(o):c:t?l.slice(o,o+2):i-56320+(c-55296<<10)+65536)}};t.exports={codeAt:c(!1),charAt:c(!0)}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=r("9f7f"),c=RegExp.prototype.exec,i=String.prototype.replace,l=c,o=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=o||s||u;f&&(l=function(t){var e,r,a,l,f=this,d=u&&f.sticky,v=n.call(f),x=f.source,p=0,h=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(x="(?: "+x+")",h=" "+h,p++),r=new RegExp("^(?:"+x+")",v)),s&&(r=new RegExp("^"+x+"$(?!\\s)",v)),o&&(e=f.lastIndex),a=c.call(d?r:f,h),d?a?(a.input=a.input.slice(p),a[0]=a[0].slice(p),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:o&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),s&&a&&a.length>1&&i.call(a[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a}),t.exports=l},"9f7f":function(t,e,r){"use strict";var n=r("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c719:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[r("v-card",[r("v-card-title",[r("h1",[t._v("Remove Line Breaks")])]),r("v-card-text",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-textarea",{attrs:{placeholder:"Paste your text here"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-textarea",{attrs:{placeholder:"Result"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.remove()}}},[t._v("Remove")])],1),r("actions",{attrs:{result:t.result}})],1)],1)],1)],1)},a=[],c=(r("ac1f"),r("5319"),{data:function(){return{text:"",result:""}},methods:{remove:function(){this.result=this.text.replace(/\n/gi,"")}}}),i=c,l=r("2877"),o=r("6544"),u=r.n(o),s=r("8336"),f=r("b0af"),d=r("99d9"),v=r("12b2"),x=r("a523"),p=r("0e8f"),h=r("a722"),g=r("a844"),E=Object(l["a"])(i,n,a,!1,null,null,null);e["default"]=E.exports;u()(E,{VBtn:s["a"],VCard:f["a"],VCardText:d["b"],VCardTitle:v["a"],VContainer:x["a"],VFlex:p["a"],VLayout:h["a"],VTextarea:g["a"]})},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),c=r("b622"),i=r("9263"),l=r("9112"),o=c("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=c("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),v=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var x=c(t),p=!a((function(){var e={};return e[x]=function(){return 7},7!=""[t](e)})),h=p&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[x]=/./[x]),r.exec=function(){return e=!0,null},r[x](""),!e}));if(!p||!h||"replace"===t&&(!u||!s||d)||"split"===t&&!v){var g=/./[x],E=r(x,""[t],(function(t,e,r,n,a){return e.exec===i?p&&!a?{done:!0,value:g.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=E[0],R=E[1];n(String.prototype,t,b),n(RegExp.prototype,x,2==e?function(t,e){return R.call(t,this,e)}:function(t){return R.call(t,this)})}f&&l(RegExp.prototype[x],"sham",!0)}}}]);
//# sourceMappingURL=chunk-61fc394a.0cadd4e1.js.map
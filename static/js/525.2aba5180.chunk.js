(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[525],{1115:function(t,e,n){!function(t){"use strict";t.defineMode("dtd",(function(t){var e,n=t.indentUnit;function r(t,n){return e=n,t}function a(t,e){var n,i,c,l=t.next();if("<"!=l||!t.eat("!")){if("<"==l&&t.eat("?"))return e.tokenize=(i="meta",c="?>",function(t,e){for(;!t.eol();){if(t.match(c)){e.tokenize=a;break}t.next()}return i}),r("meta",l);if("#"==l&&t.eatWhile(/[\w]/))return r("atom","tag");if("|"==l)return r("keyword","seperator");if(l.match(/[\(\)\[\]\-\.,\+\?>]/))return r(null,l);if(l.match(/[\[\]]/))return r("rule",l);if('"'==l||"'"==l)return e.tokenize=(n=l,function(t,e){for(var u,i=!1;null!=(u=t.next());){if(u==n&&!i){e.tokenize=a;break}i=!i&&"\\"==u}return r("string","tag")}),e.tokenize(t,e);if(t.eatWhile(/[a-zA-Z\?\+\d]/)){var o=t.current();return null!==o.substr(o.length-1,o.length).match(/\?|\+/)&&t.backUp(1),r("tag","tag")}return"%"==l||"*"==l?r("number","number"):(t.eatWhile(/[\w\\\-_%.{,]/),r(null,null))}return t.eatWhile(/[\-]/)?(e.tokenize=u,u(t,e)):t.eatWhile(/[\w]/)?r("keyword","doindent"):void 0}function u(t,e){for(var n,u=0;null!=(n=t.next());){if(u>=2&&">"==n){e.tokenize=a;break}u="-"==n?u+1:0}return r("comment","comment")}return{startState:function(t){return{tokenize:a,baseIndent:t||0,stack:[]}},token:function(t,n){if(t.eatSpace())return null;var r=n.tokenize(t,n),a=n.stack[n.stack.length-1];return"["==t.current()||"doindent"===e||"["==e?n.stack.push("rule"):"endtag"===e?n.stack[n.stack.length-1]="endtag":"]"==t.current()||"]"==e||">"==e&&"rule"==a?n.stack.pop():"["==e&&n.stack.push("["),r},indent:function(t,r){var a=t.stack.length;return r.match(/\]\s+|\]/)?a-=1:">"===r.substr(r.length-1,r.length)&&("<"===r.substr(0,1)||"doindent"==e&&r.length>1||("doindent"==e?a--:">"==e&&r.length>1||"tag"==e&&">"!==r||("tag"==e&&"rule"==t.stack[t.stack.length-1]?a--:"tag"==e?a++:">"===r&&"rule"==t.stack[t.stack.length-1]&&">"===e?a--:">"===r&&"rule"==t.stack[t.stack.length-1]||("<"!==r.substr(0,1)&&">"===r.substr(0,1)?a-=1:">"===r||(a-=1)))),null!=e&&"]"!=e||a--),t.baseIndent+a*n},electricChars:"]>"}})),t.defineMIME("application/xml-dtd","dtd")}(n(38))}}]);
//# sourceMappingURL=525.2aba5180.chunk.js.map
(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[81],{658:function(e,t,n){!function(e){"use strict";e.defineMode("julia",(function(t,n){function r(e,t){return"undefined"===typeof t&&(t="\\b"),new RegExp("^(("+e.join(")|(")+"))"+t)}var a=n.operators||r(["[<>]:","[<>=]=","<<=?",">>>?=?","=>","->","\\/\\/","[\\\\%*+\\-<>!=\\/^|&\\u00F7\\u22BB]=?","\\?","\\$","~",":","\\u00D7","\\u2208","\\u2209","\\u220B","\\u220C","\\u2218","\\u221A","\\u221B","\\u2229","\\u222A","\\u2260","\\u2264","\\u2265","\\u2286","\\u2288","\\u228A","\\u22C5","\\b(in|isa)\\b(?!.?\\()"],""),i=n.delimiters||/^[;,()[\]{}]/,s=n.identifiers||/^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,o=r(["\\\\[0-7]{1,3}","\\\\x[A-Fa-f0-9]{1,2}","\\\\[abefnrtv0%?'\"\\\\]","([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])"],"'"),u=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","where","macro","module","baremodule","struct","type","mutable","immutable","quote","typealias","abstract","primitive","bitstype"],c=["true","false","nothing","NaN","Inf"];e.registerHelper("hintWords","julia",u.concat(c));var f=r(["begin","function","type","struct","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"]),l=r(["end","else","elseif","catch","finally"]),m=r(u),p=r(c),d=/^@[_A-Za-z][\w]*/,h=/^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,k=/^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/;function b(e){return e.nestedArrays>0}function v(e,t){return"undefined"===typeof t&&(t=0),e.scopes.length<=t?null:e.scopes[e.scopes.length-(t+1)]}function F(e,t){if(e.match(/^#=/,!1))return t.tokenize=z,t.tokenize(e,t);var n=t.leavingExpr;if(e.sol()&&(n=!1),t.leavingExpr=!1,n&&e.match(/^'+/))return"operator";if(e.match(/\.{4,}/))return"error";if(e.match(/\.{1,3}/))return"operator";if(e.eatSpace())return null;var r,o,u=e.peek();if("#"===u)return e.skipToEnd(),"comment";if("["===u&&(t.scopes.push("["),t.nestedArrays++),"("===u&&(t.scopes.push("("),t.nestedGenerators++),b(t)&&"]"===u){for("if"===v(t)&&t.scopes.pop();"for"===v(t);)t.scopes.pop();t.scopes.pop(),t.nestedArrays--,t.leavingExpr=!0}if(function(e){return e.nestedGenerators>0}(t)&&")"===u){for("if"===v(t)&&t.scopes.pop();"for"===v(t);)t.scopes.pop();t.scopes.pop(),t.nestedGenerators--,t.leavingExpr=!0}if(b(t)){if("end"==t.lastToken&&e.match(/^:/))return"operator";if(e.match(/^end/))return"number"}if((r=e.match(f,!1))&&t.scopes.push(r[0]),e.match(l,!1)&&t.scopes.pop(),e.match(/^::(?![:\$])/))return t.tokenize=A,t.tokenize(e,t);if(!n&&e.match(h)||e.match(/:([<>]:|<<=?|>>>?=?|->|\/\/|\.{2,3}|[\.\\%*+\-<>!\/^|&]=?|[~\?\$])/))return"builtin";if(e.match(a))return"operator";if(e.match(/^\.?\d/,!1)){var c=RegExp(/^im\b/),P=!1;if(e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)&&(P=!0),e.match(/^0x[0-9a-f_]+/i)&&(P=!0),e.match(/^0b[01_]+/i)&&(P=!0),e.match(/^0o[0-7_]+/i)&&(P=!0),e.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)&&(P=!0),e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)&&(P=!0),P)return e.match(c),t.leavingExpr=!0,"number"}if(e.match(/^'/))return t.tokenize=x,t.tokenize(e,t);if(e.match(k))return t.tokenize=('"""'===(o=e.current()).substr(-3)?o='"""':'"'===o.substr(-1)&&(o='"'),function(e,t){if(e.eat("\\"))e.next();else{if(e.match(o))return t.tokenize=F,t.leavingExpr=!0,"string";e.eat(/[`"]/)}return e.eatWhile(/[^\\`"]/),"string"}),t.tokenize(e,t);if(e.match(d))return"meta";if(e.match(i))return null;if(e.match(m))return"keyword";if(e.match(p))return"builtin";var y=t.isDefinition||"function"==t.lastToken||"macro"==t.lastToken||"type"==t.lastToken||"struct"==t.lastToken||"immutable"==t.lastToken;return e.match(s)?y?"."===e.peek()?(t.isDefinition=!0,"variable"):(t.isDefinition=!1,"def"):e.match(/^({[^}]*})*\(/,!1)?(t.tokenize=g,t.tokenize(e,t)):(t.leavingExpr=!0,"variable"):(e.next(),"error")}function g(e,t){var n=e.match(/^(\(\s*)/);if(n&&(t.firstParenPos<0&&(t.firstParenPos=t.scopes.length),t.scopes.push("("),t.charsAdvanced+=n[1].length),"("==v(t)&&e.match(/^\)/)&&(t.scopes.pop(),t.charsAdvanced+=1,t.scopes.length<=t.firstParenPos)){var r=e.match(/^(\s*where\s+[^\s=]+)*\s*?=(?!=)/,!1);return e.backUp(t.charsAdvanced),t.firstParenPos=-1,t.charsAdvanced=0,t.tokenize=F,r?"def":"builtin"}if(e.match(/^$/g,!1)){for(e.backUp(t.charsAdvanced);t.scopes.length>t.firstParenPos;)t.scopes.pop();return t.firstParenPos=-1,t.charsAdvanced=0,t.tokenize=F,"builtin"}return t.charsAdvanced+=e.match(/^([^()]*)/)[1].length,t.tokenize(e,t)}function A(e,t){return e.match(/.*?(?=,|;|{|}|\(|\)|=|$|\s)/),e.match(/^{/)?t.nestedParameters++:e.match(/^}/)&&t.nestedParameters>0&&t.nestedParameters--,t.nestedParameters>0?e.match(/.*?(?={|})/)||e.next():0==t.nestedParameters&&(t.tokenize=F),"builtin"}function z(e,t){return e.match(/^#=/)&&t.nestedComments++,e.match(/.*?(?=(#=|=#))/)||e.skipToEnd(),e.match(/^=#/)&&(t.nestedComments--,0==t.nestedComments&&(t.tokenize=F)),"comment"}function x(e,t){var n,r=!1;if(e.match(o))r=!0;else if(n=e.match(/\\u([a-f0-9]{1,4})(?=')/i))((a=parseInt(n[1],16))<=55295||a>=57344)&&(r=!0,e.next());else if(n=e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)){var a;(a=parseInt(n[1],16))<=1114111&&(r=!0,e.next())}return r?(t.leavingExpr=!0,t.tokenize=F,"string"):(e.match(/^[^']+(?=')/)||e.skipToEnd(),e.match(/^'/)&&(t.tokenize=F),"error")}return{startState:function(){return{tokenize:F,scopes:[],lastToken:null,leavingExpr:!1,isDefinition:!1,nestedArrays:0,nestedComments:0,nestedGenerators:0,nestedParameters:0,charsAdvanced:0,firstParenPos:-1}},token:function(e,t){var n=t.tokenize(e,t),r=e.current();return r&&n&&(t.lastToken=r),n},indent:function(e,n){var r=0;return"]"!==n&&")"!==n&&"end"!==n&&"else"!==n&&"catch"!==n&&"elseif"!==n&&"finally"!==n||(r=-1),(e.scopes.length+r)*t.indentUnit},electricInput:/\b(end|else|catch|finally)\b/,blockCommentStart:"#=",blockCommentEnd:"=#",lineComment:"#",closeBrackets:'()[]{}""',fold:"indent"}})),e.defineMIME("text/x-julia","julia")}(n(42))}}]);
//# sourceMappingURL=81.d7a3859e.chunk.js.map
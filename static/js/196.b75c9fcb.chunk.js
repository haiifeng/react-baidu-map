(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[196],{445:function(a,e){!function(a){var e=a.languages.javascript,n="{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}",i="(@(?:param|arg|argument|property)\\s+(?:"+n+"\\s+)?)";a.languages.jsdoc=a.languages.extend("javadoclike",{parameter:{pattern:RegExp(i+"[$\\w\\xA0-\\uFFFF.]+(?=\\s|$)"),lookbehind:!0,inside:{punctuation:/\./}}}),a.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(i+"\\[[$\\w\\xA0-\\uFFFF.]+(?:=[^[\\]]+)?\\](?=\\s|$)"),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:e,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp("(@[a-z]+\\s+)"+n),lookbehind:!0,inside:{punctuation:/[.,:?=<>|{}()[\]]/}},{pattern:/(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,lookbehind:!0,inside:{punctuation:/\./}}],example:{pattern:/(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^(\s*(?:\*\s*)?).+$/m,lookbehind:!0,inside:e,alias:"language-javascript"}}}}),a.languages.javadoclike.addSupport("javascript",a.languages.jsdoc)}(Prism)}}]);
//# sourceMappingURL=196.b75c9fcb.chunk.js.map
(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[57],{1230:function(n,e,t){"use strict";t.r(e),e.default="InfoWindow \u4fe1\u606f\u7a97\u53e3\n===\n\n\u8868\u793a\u5730\u56fe\u4e0a\u5305\u542b\u4fe1\u606f\u7684\u7a97\u53e3\u3002\n\n```jsx\nimport { InfoWindow, useInfoWindow } from '@uiw/react-baidu-map';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,codePen,codePen,codeSandbox--\x3e\n```jsx\nimport React, { useState } from 'react';\nimport { Map, InfoWindow, APILoader } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [visiable, setVisiable] = useState(true);\n  const [ isOpen, setIsOpen ] = useState(true);\n  const [ content, setContent ] = useState('\u4e0a\u6d77\u5e02 <del>\u9752\u6d66\u533a</del> \u5f90\u6cfe\u9547\u76c8\u6e2f\u4e1c\u8def');\n\n  function infoWindowRef(props) {\n    if (props && props.infoWindow) {\n      console.log('infoWindow:', props.infoWindow, props.map, props.BMap);\n    }\n  }\n  return (\n    <>\n      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '\u5173\u95ed' : '\u6253\u5f00'} isOpen={String(isOpen)}</button>\n      <button onClick={() => setVisiable(!visiable)}>{visiable ? '\u9690\u85cf' : '\u663e\u793a'}visiable={String(visiable)}</button>\n      <input value={content} onChange={(e) => setContent(e.target.value)} />\n      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>\n        <InfoWindow\n          ref={infoWindowRef}\n          visiable={visiable}\n          isOpen={isOpen}\n          onClose={() => {\n            console.log(':onClose');\n          }}\n          position={{ lng: 121.501365, lat: 31.224942 }}\n          content={content}\n          title=\"\u5730\u5740\u4fe1\u606f\u4e00\"\n        />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '350px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u4f7f\u7528 hooks\n\n`infoWindow`, `setInfoWindow`, `isOpen`, `setIsOpen`\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport React, { useState, useEffect } from 'react';\nimport { Map, InfoWindow, useInfoWindow, APILoader } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const { setContainer, map } = useMap({\n    zoom: 13, center: { lng: 121.460977, lat: 31.227906 },\n    widget: ['GeolocationControl', 'NavigationControl']\n  });\n\n  const [title, setTitle] = useState('\u5730\u5740\u4fe1\u606f\u4e8c');\n  const position = { lng: 121.501365, lat: 31.224942 };\n  const { infoWindow, isOpen, setIsOpen } = useInfoWindow({\n    BMap, map, position, enableCloseOnClick: false, isOpen: true,\n    content: '\u4e0a\u6d77\u5e02 <del>\u9752\u6d66\u533a</del> \u5f90\u6cfe\u9547\u76c8\u6e2f\u4e1c\u8def',\n    title,\n    onClose: () => {\n      console.log('onClose:');\n    }\n  });\n  useEffect(() => {\n    if (divElm.current) {\n      setContainer(divElm.current);\n    }\n  });\n  return (\n    <>\n      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '\u663e\u793a' : '\u9690\u85cf'}</button>\n      <input value={title} onChange={(e) => setTitle(e.target.value)} />\n      <div ref={divElm} style={{ height: '100%' }} />\n    </>\n  )\n}\n\nconst Demo = () => {\n  return (\n    <div style={{ width: '100%', height: '350px' }}>\n      <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n        <Example />\n      </APILoader>\n    </div>\n  )\n};\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| position | **`\u5fc5\u586b`** \u6307\u5b9a\u7684\u7ecf\u5ea6\u548c\u7eac\u5ea6\u521b\u5efa\u4e00\u4e2a\u5730\u7406\u70b9\u5750\u6807 | `Point` | - |\n| isOpen | \u7a97\u53e3\u662f\u5426\u6253\u5f00 | `Point` | - |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002\u6b64\u5c5e\u6027\u6765\u81ea\u7ee7\u627f Overlay \u5b9e\u4f8b\u5bf9\u8c61\u3002 | `boolean` | - |\n| width | \u4fe1\u606f\u7a97\u5bbd\u5ea6\uff0c\u5355\u4f4d\u50cf\u7d20\u3002\u53d6\u503c\u8303\u56f4\uff1a0, 220 - 730\u3002\u5982\u679c\u60a8\u6307\u5b9a\u5bbd\u5ea6\u4e3a0\uff0c\u5219\u4fe1\u606f\u7a97\u53e3\u7684\u5bbd\u5ea6\u5c06\u6309\u7167\u5176\u5185\u5bb9\u81ea\u52a8\u8c03\u6574 | `number` | `true` |\n| height | \u4fe1\u606f\u7a97\u9ad8\u5ea6\uff0c\u5355\u4f4d\u50cf\u7d20\u3002\u53d6\u503c\u8303\u56f4\uff1a0, 60 - 650\u3002\u5982\u679c\u60a8\u6307\u5b9a\u5bbd\u5ea6\u4e3a0\uff0c\u5219\u4fe1\u606f\u7a97\u53e3\u7684\u5bbd\u5ea6\u5c06\u6309\u7167\u5176\u5185\u5bb9\u81ea\u52a8\u8c03\u6574 | `number` | - |\n| maxWidth | \u4fe1\u606f\u7a97\u6700\u5927\u5316\u65f6\u7684\u5bbd\u5ea6\uff0c\u5355\u4f4d\u50cf\u7d20\u3002\u53d6\u503c\u8303\u56f4\uff1a220 - 730 | `number` | - |\n| offset | \u4fe1\u606f\u7a97\u4f4d\u7f6e\u504f\u79fb\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5728\u5730\u56fe\u4e0a\u6253\u5f00\u7684\u4fe1\u606f\u7a97\u5e95\u7aef\u7684\u5c16\u89d2\u5c06\u6307\u5411\u5176\u5730\u7406\u5750\u6807\uff0c\u5728\u6807\u6ce8\u4e0a\u6253\u5f00\u7684\u4fe1\u606f\u7a97\u5e95\u7aef\u5c16\u89d2\u7684\u4f4d\u7f6e\u53d6\u51b3\u4e8e\u6807\u6ce8\u6240\u7528\u56fe\u6807\u7684 infoWindowOffset \u5c5e\u6027\u503c\uff0c\u60a8\u53ef\u4ee5\u4e3a\u4fe1\u606f\u7a97\u6dfb\u52a0\u504f\u79fb\u91cf\u6765\u6539\u53d8\u9ed8\u8ba4\u4f4d\u7f6e | `Size` | - |\n| content | \u5c55\u793a\u6587\u672c\u5185\u5bb9\uff0c\u652f\u6301 HTML \u5185\u5bb9\u5b57\u7b26\u4e32 | `string` | - |\n| maxContent | \u4fe1\u606f\u7a97\u53e3\u6700\u5927\u5316\u65f6\u6240\u663e\u793a\u5185\u5bb9\uff0c\u652f\u6301HTML\u5185\u5bb9 | `string` | - |\n| title | \u4fe1\u606f\u7a97\u6807\u9898\u6587\u5b57\uff0c\u652f\u6301HTML\u5185\u5bb9 | `string` | - |\n| message | \u81ea\u5b9a\u4e49\u90e8\u5206\u7684\u77ed\u4fe1\u5185\u5bb9\uff0c\u53ef\u9009\u9879\u3002\u5b8c\u6574\u7684\u77ed\u4fe1\u5185\u5bb9\u5305\u62ec\uff1a\u81ea\u5b9a\u4e49\u90e8\u5206+\u4f4d\u7f6e\u94fe\u63a5\uff0c\u4e0d\u8bbe\u7f6e\u65f6\uff0c\u663e\u793a\u9ed8\u8ba4\u77ed\u4fe1\u5185\u5bb9\u3002\u77ed\u4fe1\u5185\u5bb9\u6700\u957f\u4e3a140\u4e2a\u5b57 | `string` | - |\n| enableAutoPan | \u662f\u5426\u5f00\u542f\u4fe1\u606f\u7a97\u53e3\u6253\u5f00\u65f6\u5730\u56fe\u81ea\u52a8\u79fb\u52a8\uff08\u9ed8\u8ba4\u5f00\u542f\uff09 | `boolean` | - |\n| enableCloseOnClick | \u662f\u5426\u5f00\u542f\u70b9\u51fb\u5730\u56fe\u5173\u95ed\u4fe1\u606f\u7a97\u53e3\uff08\u9ed8\u8ba4\u5f00\u542f\uff09 | `boolean` | - |\n| enableMaximize | \u542f\u7528\u7a97\u53e3\u6700\u5927\u5316\u529f\u80fd\u3002\u9700\u8981\u8bbe\u7f6e\u6700\u5927\u5316\u540e\u4fe1\u606f\u7a97\u53e3\u91cc\u7684\u5185\u5bb9\uff0c\u8be5\u63a5\u53e3\u624d\u751f\u6548 | `boolean` | - |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ----- | ----- | ----- |\n| onClose | \u4fe1\u606f\u7a97\u53e3\u88ab\u5173\u95ed\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point }) => void; |\n| onOpen | \u4fe1\u606f\u7a97\u53e3\u88ab\u6253\u5f00\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point }) => void; |\n| onMaximize | \u4fe1\u606f\u7a97\u53e3\u6700\u5927\u5316\u540e\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }) => void; |\n| onRestore | \u4fe1\u606f\u7a97\u53e3\u8fd8\u539f\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }) => void; |\n| onClickclose | \u70b9\u51fb\u4fe1\u606f\u7a97\u53e3\u7684\u5173\u95ed\u6309\u94ae\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }) => void; |\n"}}]);
//# sourceMappingURL=57.a707407e.chunk.js.map
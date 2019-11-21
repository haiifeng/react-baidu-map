(window["webpackJsonp@uiw/react-baidu-map"]=window["webpackJsonp@uiw/react-baidu-map"]||[]).push([[142],{715:function(n,e,o){"use strict";o.r(e),e.default="Map \u7ec4\u4ef6\n===\n\nMap \u7ec4\u4ef6\u662f\u5176\u4ed6\u7ec4\u4ef6\u7684\u57fa\u7840\uff0c\u5176\u4ed6\u5730\u56fe\u7ec4\u4ef6\u5fc5\u987b\u4f5c\u4e3a Map \u7684\u5b50\u7ec4\u4ef6\u4f7f\u7528\uff1bMap \u7ec4\u4ef6\u4f1a\u7ed9\u6240\u6709\u7684\u5b50\u7ec4\u4ef6\u6ce8\u5165\u4e24\u4e2a\u5c5e\u6027\uff0c`<Map>` \u7ec4\u4ef6\u5fc5\u987b\u5305\u88f9\u5728 `<APILoader>` \u7ec4\u4ef6\u5185\uff0c\u8be5\u7ec4\u4ef6\u4f5c\u7528\u662f\u52a0\u8f7d\u767e\u5ea6\u5730\u56fe SDK\u3002\n\n```jsx\nimport { Map, useMap, APILoader } from '@uiw/react-baidu-map';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\nMap \u7684\u7236\u7ec4\u4ef6\u5fc5\u987b\u5177\u6709\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff1b\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nimport { Map, APILoader } from '@uiw/react-baidu-map';\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Map />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u5c0f\u5de5\u5177\n\n\u767e\u5ea6\u5730\u56fe\u4e0a\u8d1f\u8d23\u4e0e\u5730\u56fe\u4ea4\u4e92\u7684UI\u5143\u7d20\u79f0\u4e3a\u63a7\u4ef6\u3002\u767e\u5ea6\u5730\u56feAPI\u4e2d\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u63a7\u4ef6\uff0c\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7 Control \u7c7b\u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u63a7\u4ef6\uff0c[`\u767e\u5ea6\u63a7\u4ef6\u6587\u6863`](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/widget)\u3002\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nimport { Map, APILoader } from '@uiw/react-baidu-map';\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Map\n        ref={(props) => {\n          if (props && props.map) {\n            // \u542f\u7528\u6eda\u8f6e\u653e\u5927\u7f29\u5c0f\uff0c\u9ed8\u8ba4\u7981\u7528\n            props.map.enableScrollWheelZoom();\n          }\n        }}\n        widget={[\n          'GeolocationControl',\n          {\n            name: 'OverviewMapControl',\n            options: {\n              isOpen: true,\n            }\n          },\n          {\n            name: 'NavigationControl',\n            options: (BMap) => {\n              return {\n                offset: new BMap.Size(150, 5),\n                showZoomInfo: false,\n                enableGeolocation: true,\n              }\n            }\n          }\n        ]}\n      />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u53ef\u63a7\u5c5e\u6027\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nimport { Map, APILoader } from '@uiw/react-baidu-map';\n\nconst Demo = () => {\n  const [center, setCenter] = useState('\u5317\u4eac');\n  const [enableScrollWheelZoom, setEnableScrollWheelZoom] = useState(true);\n  return (\n    <div style={{ width: '100%', height: '300px' }}>\n      <button onClick={() => setCenter('\u5317\u4eac')}>\u5317\u4eac</button>\n      <button onClick={() => setCenter('\u4e0a\u6d77')}>\u4e0a\u6d77</button>\n      <button onClick={() => setEnableScrollWheelZoom(!enableScrollWheelZoom)}>{enableScrollWheelZoom ? '\u7981\u7528': '\u542f\u7528'}\u6eda\u8f6e\u653e\u5927\u7f29\u5c0f</button>\n      <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n        <Map enableScrollWheelZoom={enableScrollWheelZoom} zoom={10}  center={center}/>\n      </APILoader>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u4f7f\u7528 hooks\n\n`map`, `setMap`, `container`, `setContainer`, `zoom`, `setZoom`, `setCenter`, `autoLocalCity`, `setAutoLocalCity`,\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMap } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef();\n  const [zoom, setZoom] = useState(15)\n  const { setContainer, map, center, setCenter, setAutoLocalCity } = useMap({\n    enableScrollWheelZoom: true, // \u542f\u7528\u6eda\u8f6e\u653e\u5927\u7f29\u5c0f\uff0c\u9ed8\u8ba4\u7981\u7528\n    center: '\u5317\u4eac',\n    widget: ['GeolocationControl', 'NavigationControl']\n  });\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  });\n\n  useEffect(() => {\n    if (map) {\n      // \u542f\u7528\u6eda\u8f6e\u653e\u5927\u7f29\u5c0f\uff0c\u9ed8\u8ba4\u7981\u7528\n      map.setZoom(zoom);\n    }\n  }, [zoom, map]);\n  \n  return (\n    <>\n      <button onClick={() => setZoom(zoom-1)}>-</button>\n      <span>{zoom || 15}</span>\n      <button onClick={() => setZoom(zoom+1)}>+</button>\n      <button onClick={() => setCenter('\u5317\u4eac')}>\u5317\u4eac</button>\n      <button onClick={() => setCenter('\u4e0a\u6d77')}>\u4e0a\u6d77</button>\n      <button onClick={() => setAutoLocalCity(true)}>IP\u5b9a\u4f4d</button>\n      <div ref={divElm} style={{ height: '100%' }} />\n    </>\n  )\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| widget | \u767e\u5ea6\u5730\u56fe\u4e0a\u8d1f\u8d23\u4e0e\u5730\u56fe\u4ea4\u4e92\u7684UI\u5143\u7d20\u79f0\u4e3a\u63a7\u4ef6\u3002[`\u767e\u5ea6\u63a7\u4ef6\u6587\u6863`](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/widget) | `string[]`/`object[]` | `[]` |\n| center | \u5b9a\u4f4d, \u53ef\u4f7f\u7528\u5982 `\u4e0a\u6d77\u5e02\u9752\u6d66\u533a` \u7684\u5730\u533a\u5b57\u7b26\u4e32\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5bf9\u8c61\u5982 `{lng: 121.424333, lat: 31.228604}` \u8868\u793a\u7ecf\u7eac\u5ea6\u3002[\u767e\u5ea6\u62fe\u53d6\u5750\u6807\u7cfb\u7edf](http://api.map.baidu.com/lbsapi/getpoint/index.html) | Point,String | `\u4e0a\u6d77\u5e02` |\n| autoLocalCity | \u8bbe\u4e3a `true`, IP\u5b9a\u4f4d\u83b7\u53d6\u5f53\u524d\u57ce\u5e02\uff0c\u8fdb\u884c\u81ea\u52a8\u5b9a\u4f4d | boolean | - |\n| zoom | \u7f29\u653e\u7b49\u7ea7\uff0c\u5982\u679c `center` \u7c7b\u578b\u4e3a `Point` \u65f6\uff0czoom\u5fc5\u987b\u8d4b\u503c\uff0c\u8303\u56f4 `3-19` \u7ea7\uff0c \u82e5\u8c03\u7528\u9ad8\u6e05\u5e95\u56fe\uff08\u9488\u5bf9\u79fb\u52a8\u7aef\u5f00\u53d1\uff09\u65f6\uff0czoom \u53ef\u8d4b\u503c\u8303\u56f4\u4e3a `3-18` \u7ea7\u3002 \u5982\u679ccenter\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u65f6\uff0c\u6bd4\u5982\u201c\u5317\u4eac\u201d\uff0czoom\u53ef\u4ee5\u5ffd\u7565\uff0c\u5730\u56fe\u5c06\u81ea\u52a8\u6839\u636e `center` \u9002\u914d\u6700\u4f73 `zoom` \u7ea7\u522b | number | - |\n| minZoom | \u5730\u56fe\u5141\u8bb8\u5c55\u793a\u7684\u6700\u5c0f\u7ea7\u522b | number | - |\n| maxZoom | \u5730\u56fe\u5141\u8bb8\u5c55\u793a\u7684\u6700\u5927\u7ea7\u522b | number | - |\n| mapType | \u5730\u56fe\u7c7b\u578b | MapType | `BMAP_NORMAL_MAP` |\n| enableHighResolution | \u662f\u5426\u542f\u7528\u4f7f\u7528\u9ad8\u5206\u8fa8\u7387\u5730\u56fe\u3002\u5728iPhone4\u53ca\u5176\u540e\u7eed\u8bbe\u5907\u4e0a\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f00\u542f\u6b64\u9009\u9879\u83b7\u53d6\u66f4\u9ad8\u5206\u8fa8\u7387\u7684\u5e95\u56fe\uff0cv1.2,v1.3\u7248\u672c\u9ed8\u8ba4\u4e0d\u5f00\u542f\uff0cv1.4 \u9ed8\u8ba4\u4e3a\u5f00\u542f\u72b6\u6001 | boolean | - |\n| enableAutoResize | \u5730\u56fe\u5141\u8bb8\u5c55\u793a\u7684\u6700\u5927\u7ea7\u522b | boolean | `true` |\n| enableMapClick | \u662f\u5426\u5f00\u542f\u5e95\u56fe\u53ef\u70b9\u529f\u80fd | boolean | `true` |\n| enableDragging | \u542f\u7528\u5730\u56fe\u62d6\u62fd\uff0c\u9ed8\u8ba4\u542f\u7528 | boolean | - |\n| enableScrollWheelZoom | \u542f\u7528\u6eda\u8f6e\u653e\u5927\u7f29\u5c0f\uff0c\u9ed8\u8ba4\u7981\u7528 | boolean | - |\n| enableDoubleClickZoom | \u542f\u7528\u53cc\u51fb\u653e\u5927\uff0c\u9ed8\u8ba4\u542f\u7528 | boolean | `true` |\n| enableInertialDragging | \u542f\u7528\u5730\u56fe\u60ef\u6027\u62d6\u62fd\uff0c\u9ed8\u8ba4\u7981\u7528 | boolean | - |\n| enableContinuousZoom | \u542f\u7528\u8fde\u7eed\u7f29\u653e\u6548\u679c\uff0c\u9ed8\u8ba4\u7981\u7528 | boolean | - |\n| enablePinchToZoom | \u542f\u7528\u53cc\u6307\u64cd\u4f5c\u7f29\u653e\uff0c\u9ed8\u8ba4\u542f\u7528 | boolean | `true` |\n| enableKeyboard | \u542f\u7528\u952e\u76d8\u64cd\u4f5c\uff0c\u9ed8\u8ba4\u7981\u7528\u3002\u952e\u76d8\u7684\u4e0a\u3001\u4e0b\u3001\u5de6\u3001\u53f3\u952e\u53ef\u8fde\u7eed\u79fb\u52a8\u5730\u56fe\u3002\u540c\u65f6\u6309\u4e0b\u5176\u4e2d\u4e24\u4e2a\u952e\u53ef\u4f7f\u5730\u56fe\u8fdb\u884c\u5bf9\u89d2\u79fb\u52a8\u3002PgUp\u3001PgDn\u3001Home\u548cEnd\u952e\u4f1a\u4f7f\u5730\u56fe\u5e73\u79fb\u51761/2\u7684\u5927\u5c0f\u3002+\u3001-\u952e\u4f1a\u4f7f\u5730\u56fe\u653e\u5927\u6216\u7f29\u5c0f\u4e00\u7ea7 | boolean | - |\n"}}]);
//# sourceMappingURL=142.e8446f52.chunk.js.map
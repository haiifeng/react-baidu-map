(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[584],{1178:function(n,e,o){"use strict";o.r(e),e.default="MapTypeControl \u5730\u56fe\u7c7b\u578b\u63a7\u4ef6\n===\n\n\u5730\u56fe\u7c7b\u578b\u63a7\u4ef6\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 `Map` \u7ec4\u4ef6 `widget` \u5c5e\u6027\u6765\u8bbe\u7f6e\u63a7\u4ef6\u66f4\u65b9\u4fbf\u3002\n\n```jsx\nimport { MapTypeControl, useMapTypeControl } from '@uiw/react-baidu-map';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,noScroll--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, MapTypeControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <Map zoom={13}>\n        {show && (\n          <MapTypeControl />\n        )}\n        <MapTypeControl visiable={show} offset={new BMap.Size(40, 40)} anchor={BMAP_ANCHOR_TOP_RIGHT} />\n      </Map>\n    </>\n  );\n}\n\nReactDOM.render((\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u4f7f\u7528 hooks\n\n`mapTypeControl`, `setMapTypeControl`\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMap, useMapTypeControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const [show, setShow] = useState(true);\n  const { setContainer, map } = useMap();\n  const { mapTypeControl } = useMapTypeControl({\n    map, anchor: BMAP_NAVIGATION_CONTROL_LARGE, visiable: show,\n  });\n\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  }, [map]);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <div ref={divElm} style={{ height: '100%' }} />\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| anchor | \u63a7\u4ef6\u7684\u4f4d\u7f6e\u504f\u79fb\u503c\u3002| `ControlAnchor` | `BMAP_ANCHOR_TOP_RIGHT` |\n| offset | \u63a7\u4ef6\u7684\u6c34\u5e73\u504f\u79fb\u503c\u3002 | `BMap.Size` | - |\n| type | \u8bbe\u7f6e\u6bd4\u4f8b\u5c3a\u5355\u4f4d\u5236 | `BMap.MapTypeControlType` | - |\n| mapTypes | \u8bbe\u7f6e\u6bd4\u4f8b\u5c3a\u5355\u4f4d\u5236 | `MapType[]` | - |\n\n### BMap.MapTypeControlType\n\n\u5e38\u91cf\u8868\u793a\u957f\u5ea6\u5355\u4f4d\u5236\u3002\n\n| \u5e38\u91cf | \u503c | \u63cf\u8ff0 |\n| ----- | ----- | ----- |\n| BMAP_MAPTYPE_CONTROL_HORIZONTAL | `0` | \u6309\u94ae\u6c34\u5e73\u65b9\u5f0f\u5c55\u793a\uff0c\u9ed8\u8ba4\u91c7\u7528\u6b64\u7c7b\u578b\u5c55\u793a |\n| BMAP_MAPTYPE_CONTROL_DROPDOWN | `1` | \u6309\u94ae\u5448\u4e0b\u62c9\u5217\u8868\u65b9\u5f0f\u5c55\u793a |\n| BMAP_MAPTYPE_CONTROL_MAP | `2` | \u4ee5\u56fe\u7247\u65b9\u5f0f\u5c55\u793a\u7c7b\u578b\u63a7\u4ef6\uff0c\u8bbe\u7f6e\u8be5\u7c7b\u578b\u540e\u65e0\u6cd5\u6307\u5b9amaptypes\u5c5e\u6027 |"}}]);
//# sourceMappingURL=584.9403c8a2.chunk.js.map
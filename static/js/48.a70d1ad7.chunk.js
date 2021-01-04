(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[48],{1238:function(n,a,e){"use strict";e.r(a),a.default="CanvasLayer \u81ea\u5b9a\u4e49Canvas\n===\n\n\u7528\u4e8e\u5728\u5730\u56fe\u4e0a\u7ed8\u5236\u81ea\u5b9a\u4e49\u7684canvas2D\u6216WebGL\u56fe\u5f62\uff0c[\u767e\u5ea6 CanvasLayer \u6587\u6863](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b28)\u3002\n\n```jsx\nimport { CanvasLayer, useCanvasLayer } from '@uiw/react-baidu-map';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,codePen,codeSandbox--\x3e\n```jsx\nimport React, { useState } from 'react';\nimport { Map, CanvasLayer, APILoader } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [visiable, setVisiable] = useState(true);\n  function canvasLayerRef(props) {\n    if (props && props.canvasLayer) {\n      console.log('canvasLayer:', props.canvasLayer, props.map, props.BMap);\n    }\n  }\n  return (\n    <>\n      <button onClick={() => setVisiable(!visiable)}>{visiable ? '\u9690\u85cf' : '\u663e\u793a'}</button>\n      <Map zoom={12} widget={['NavigationControl']}>\n        <CanvasLayer\n          ref={canvasLayerRef}\n          visiable={visiable}\n          update={({ canvas, map }) => {\n            const ctx = canvas.getContext('2d');\n            if (!ctx) {\n              return;\n            }\n            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n            const temp = {};\n            ctx.fillStyle = 'rgba(50, 50, 255, 0.7)';\n            ctx.beginPath();\n            const data = [\n              new BMap.Point(121.434244,31.247173),\n              new BMap.Point(121.450916,31.200729),\n              new BMap.Point(121.519906,31.230376),\n            ];\n\n            for (let i = 0, len = data.length; i < len; i++) {\n              // \u7ed8\u5236\u65f6\u9700\u8981\u5bf9\u7ecf\u7eac\u5ea6\u8fdb\u884c\u8f6c\u6362\n              const pixel = map.pointToPixel(data[i]);\n              ctx.fillRect(pixel.x, pixel.y, 30, 30);\n            }\n          }}\n        />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '350px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u4f7f\u7528 hooks\n\n`canvasLayer`, `setCanvasLayer`\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMap, useCanvasLayer } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const [visiable, setVisiable] = useState(true);\n  const { setContainer, map } = useMap({\n    enableScrollWheelZoom: true,\n    zoom: 12, widget: ['GeolocationControl', 'NavigationControl']\n  });\n  useCanvasLayer({ map, visiable,\n    update: ({ canvas, map }) => {\n      const ctx = canvas.getContext('2d');\n      if (!ctx) {\n        return;\n      }\n      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n      const temp = {};\n      ctx.fillStyle = 'rgba(50, 50, 255, 0.7)';\n      ctx.beginPath();\n      const data = [\n        new BMap.Point(121.434244,31.247173),\n        new BMap.Point(121.450916,31.200729),\n        new BMap.Point(121.519906,31.230376),\n      ];\n\n      for (let i = 0, len = data.length; i < len; i++) {\n        // \u7ed8\u5236\u65f6\u9700\u8981\u5bf9\u7ecf\u7eac\u5ea6\u8fdb\u884c\u8f6c\u6362\n        const pixel = map.pointToPixel(data[i]);\n        ctx.fillRect(pixel.x, pixel.y, 30, 30);\n      }\n    }\n  });\n\n  useEffect(() => {\n    if (divElm.current) {\n      setContainer(divElm.current);\n    }\n  });\n\n  return (\n    <>\n      <button onClick={() => setVisiable(!visiable)}>{visiable ? '\u9690\u85cf' : '\u663e\u793a'}</button>\n      <div ref={divElm} style={{ height: '100%' }} />\n    </>\n  )\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| update | \u5177\u4f53\u7684\u7ed8\u5236\u903b\u8f91\u3002\u901a\u8fc7\u8fd4\u56de\u53c2\u6570\u83b7\u53d6\u5f53\u524d\u7684 canvas \u5bf9\u8c61 | `Point` | - |\n| zIndex | \u5bf9\u5e94canvas\u7684css z-index\u5c5e\u6027\uff0c\u5f53\u6dfb\u52a0\u4e86\u591a\u4e2aCanvasLayer\u65f6\uff0c\u53ef\u4ee5\u7528\u4e8e\u8bbe\u7f6e\u5c42\u53e0\u987a\u5e8f\u3002 | `number` | - |\n| paneName | CanvasLayer\u4f4d\u4e8e\u7684\u8986\u76d6\u7269\u5c42\u7ea7\uff0c\u4f8b\uff1a`paneName: floatPane`\u3002JSAPI\u628a\u5730\u56fe\u8986\u76d6\u7269\u5206\u4e3a\u4e868\u4e2a\u5c42\u7ea7\uff0c\u9876\u5c42\u4e3a`floatPane`\uff0c \u4f4e\u5c42\u4e3a `vertexPane`\u3002\u53ef\u4ee5\u901a\u8fc7 `Map` \u5b9e\u4f8b\u7684 `getPanes()` \u65b9\u6cd5\uff0c\u83b7\u53d6\u52308\u4e2a\u5c42\u7ea7\u7684\u540d\u79f0\u3002 | `floatPane`, `floatShadow`, `labelPane`, `mapPane`, `markerMouseTarget`, `markerPane`, `markerShadow`, `vertexPane` | - |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |"}}]);
//# sourceMappingURL=48.a70d1ad7.chunk.js.map
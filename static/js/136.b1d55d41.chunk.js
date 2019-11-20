(window["webpackJsonp@uiw/react-baidu-map"]=window["webpackJsonp@uiw/react-baidu-map"]||[]).push([[136],{715:function(n,e,t){"use strict";t.r(e),e.default="Marker \u70b9\u6807\u6ce8\u7ec4\u4ef6\n===\n\n\u8868\u793a\u5730\u56fe\u4e0a\u4e00\u4e2a\u56fe\u50cf\u6807\u6ce8\u3002\n\n```jsx\nimport { Marker } from '@uiw/react-baidu-map';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite--\x3e\n```jsx\nimport { Map, Marker, APILoader } from '@uiw/react-baidu-map';\n\nconst Demo = () => {\n  return (\n    <div style={{ width: '100%', height: '350px' }}>\n      <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n        <Map\n          widget={['NavigationControl']}\n          zoom={13}\n          // center=\"\u4e0a\u6d77\"\n          center={{ lng: 121.460977, lat: 31.227906 }}\n        >\n          <Marker position={{ lng: 121.411535, lat: 31.222965 }} animation={2} />\n          <Marker position={{ lng: 121.465145, lat: 31.241245 }} />\n          <Marker position={{ lng: 121.466008, lat: 31.220001 }} type=\"loc_red\" /> \n          <Marker position={{ lng: 121.501365, lat: 31.224942 }} type=\"simple_blue\" />\n          <Marker position={{ lng: 121.464858, lat: 31.202705 }} type=\"simple_red\" />\n          <Marker position={{ lng: 121.458534, lat: 31.224942}} type=\"start\" />\n          <Marker position={{ lng: 121.434962, lat: 31.200729 }} type=\"end\" />\n          <Marker position={{ lng: 121.478943, lat: 31.2531 }} type=\"location\" />\n          <Marker position={{ lng: 121.516888, lat: 31.249149 }} type=\"red1\" />\n          <Marker position={{ lng: 121.512576, lat: 31.240504 }} type=\"red2\" />\n          <Marker position={{ lng: 121.513726, lat: 31.233588}} type=\"blue3\" />\n          <Marker position={{ lng: 121.520912, lat: 31.234576}} type=\"blue4\" />\n          <Marker position={{ lng: 121.491879, lat: 31.195045}} type=\"dot_red\" />\n          <Marker position={{ lng: 121.485555, lat: 31.195045}} type=\"dot_blue\" />\n        </Map>\n      </APILoader>\n    </div>\n  );\n};\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u81ea\u5b9a\u4e49\u6807\u70b9\n\n\x3c!--DemoStart,bgWhite--\x3e\n```jsx\nconst CustomIcon = () => {\n  const [position, setPosition] = useState({ lng: 121.466008, lat: 31.220001 });\n  const icon = new BMap.Icon('http://developer.baidu.com/map/jsdemo/img/fox.gif', new BMap.Size(300, 157));\n  return (\n    <>\n      <button onClick={() => setPosition({lng: 121.545202, lat: 31.246679})}>\u8bbe\u7f6e position</button>\n      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>\n        <Marker position={position} icon={icon} animation={2} />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '350px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <CustomIcon />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u53ef\u62d6\u62fd\n\n\x3c!--DemoStart,bgWhite--\x3e\n```jsx\nimport { Map, Marker, APILoader } from '@uiw/react-baidu-map';\n\nconst CustomIcon = () => {\n  const [enableDragging, setEnableDragging] = useState(true);\n  const icon = new BMap.Icon('http://developer.baidu.com/map/jsdemo/img/fox.gif', new BMap.Size(300, 157));\n  return (\n    <>\n      <button onClick={() => setEnableDragging(!enableDragging)}>{enableDragging ? '\u7981\u7528\u62d6\u62fd' : '\u542f\u7528\u62d6\u62fd'}</button>\n      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>\n        <Marker title=\"title\" enableDragging={enableDragging} position={{ lng: 121.466008, lat: 31.220001 }} icon={icon} type=\"loc_red\" />\n        <Marker enableDragging={enableDragging} position={{ lng: 121.458534, lat: 31.224942}} type=\"start\" />\n        <Marker enableDragging={enableDragging} position={{ lng: 121.434962, lat: 31.200729 }} type=\"end\" />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '350px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <CustomIcon />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u4f7f\u7528 hooks\n\n`marker`, `setMarker`, `type`, `setType`\n\n\x3c!--DemoStart,bgWhite--\x3e\n```jsx\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMarkers } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const { container, setContainer, map } = useMap({ widget: ['GeolocationControl', 'NavigationControl'], zoom: 8 });\n  const { setType, marker } = useMarkers({ map, position: { lng: 121.444017, lat: 31.237787 }, });\n  useEffect(() => {\n    if (divElm.current && !container) {\n      setContainer(divElm.current);\n    }\n  });\n  return (\n    <>\n      <button onClick={() => setType('red2')}>\u8bbe\u7f6e red2</button>\n      <button onClick={() => setType('loc_blue')}>\u8bbe\u7f6e loc_blue</button>\n      <button onClick={() => marker.setPosition(new BMap.Point(121.497197, 31.232847))}>\u8bbe\u7f6e\u5750\u6807\u70b9</button>\n      <button onClick={() => marker.setAnimation(2)}>\u8bbe\u7f6e\u52a8\u753b</button>\n      <button onClick={() => marker.setAnimation(null)}>\u53d6\u6d88\u52a8\u753b</button>\n      <div ref={divElm} style={{ height: '100%' }} />\n    </>\n  )\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| position | **`\u5fc5\u586b`** \u8bbe\u7f6e\u6807\u6ce8\u7684\u5730\u7406\u5750\u6807\u3002[\u767e\u5ea6\u62fe\u53d6\u5750\u6807\u7cfb\u7edf](http://api.map.baidu.com/lbsapi/getpoint/index.html) | `Point` | - |\n| animation | \u6b64\u5e38\u91cf\u8868\u793a\u6807\u6ce8\u7684\u52a8\u753b\u6548\u679c, `1` \u5760\u843d\u52a8\u753b\uff0c`2` \u8df3\u52a8\u52a8\u753b\u3002 | `number` | - |\n| type | \u6807\u70b9\u7c7b\u578b\uff0c\u9ed8\u8ba4\u81ea\u5b9a\u4e49\u6807\u70b9 `location`, `end`, `start`, `simple_red`, `simple_blue`, `loc_blue`, `loc_red`, `dot_red`, `dot_blue', 'red1`, `red2`, `red3`, `red4`, `red5`, `red6`, `red7`, `red8`, `red9', 'blue1`, `blue2`, `blue3`, `blue4`, `blue5`, `blue6`, `blue7`, `blue8`, `blue9`\u3002| `string` | - |\n| offset | \u6807\u6ce8\u7684\u4f4d\u7f6e\u504f\u79fb\u503c | `Size` | - |\n| enableMassClear | \u662f\u5426\u5728\u8c03\u7528 `map.clearOverlays` \u6e05\u9664\u6b64\u8986\u76d6\u7269 | `boolean` | `true` |\n| icon | \u6807\u6ce8\u6240\u7528\u7684\u56fe\u6807\u5bf9\u8c61 | `Icon` | - |\n| enableDragging | \u662f\u5426\u542f\u7528\u62d6\u62fd | `boolean` | `false` |\n| enableClicking | \u662f\u5426\u54cd\u5e94\u70b9\u51fb\u4e8b\u4ef6 | `boolean` | `true` |\n| enableMassClear | \u5141\u8bb8\u8986\u76d6\u7269\u5728map.clearOverlays\u65b9\u6cd5\u4e2d\u88ab\u6e05\u9664 | `boolean` | `true` |\n| raiseOnDrag | \u62d6\u62fd\u6807\u6ce8\u65f6\uff0c\u6807\u6ce8\u662f\u5426\u5f00\u542f\u79bb\u5f00\u5730\u56fe\u8868\u9762\u6548\u679c\u3002 | `boolean` | `false` |\n| draggingCursor | \u62d6\u62fd\u6807\u6ce8\u65f6\u7684\u9f20\u6807\u6307\u9488\u6837\u5f0f\u3002\u6b64\u5c5e\u6027\u503c\u9700\u9075\u5faaCSS\u7684cursor\u5c5e\u6027\u89c4\u8303 | `string` | - |\n| rotation | \u662f\u5426\u54cd\u5e94\u70b9\u51fb\u4e8b\u4ef6 | `number` | - |\n| shadow | \u9634\u5f71\u56fe\u6807 | `Icon` | - |\n| title | \u9f20\u6807\u79fb\u5230 marker \u4e0a\u7684\u663e\u793a\u5185\u5bb9 | `string` | - |\n\n### ShapeType\n\n| \u5e38\u91cf | \u63cf\u8ff0 |\n| ---- | ---- |\n| BMAP_ANIMATION_DROP | \u5760\u843d\u52a8\u753b |\n| BMAP_ANIMATION_BOUNCE | \u8df3\u52a8\u52a8\u753b |\n"}}]);
//# sourceMappingURL=136.b1d55d41.chunk.js.map
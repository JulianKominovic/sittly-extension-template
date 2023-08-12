// index.tsx
import React3 from "react";
import { sendNotification } from "sittly-devtools/dist/api/notifications";

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/lib/esm/iconBase.js
import React2 from "react";

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/lib/esm/iconContext.js
import React from "react";
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && React.createContext(DefaultContext);

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return React2.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return React2.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return React2.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React2.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? React2.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/bs/index.esm.js
function BsAppIndicator(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" } }, { "tag": "path", "attr": { "d": "M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" } }] })(props);
}

// index.tsx
var items = () => {
  return [
    {
      title: "Example item",
      description: "My beautiful description",
      icon: /* @__PURE__ */ React3.createElement(BsAppIndicator, null),
      onClick: () => {
        sendNotification({
          title: "Example notification",
          body: "This is a **test!**",
          icon: "dialog-information"
        });
      }
    }
  ];
};
var metadata = {
  name: "Example extension",
  description: "This is an example extension",
  icon: /* @__PURE__ */ React3.createElement(BsAppIndicator, null),
  repoUrl: "https://github.com/JulianKominovic/sittly-extension-template"
};
export {
  items,
  metadata
};

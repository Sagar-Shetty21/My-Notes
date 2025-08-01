import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate } from './astro/server_ixCSCnnp.mjs';
import 'clsx';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const IconMoon = createSvgComponent({"meta":{"src":"/_astro/IconMoon.CRxdR147.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-moon"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z\" />"});

const IconSunHigh = createSvgComponent({"meta":{"src":"/_astro/IconSunHigh.EHu4P2Sl.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-sun-high"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z\" /><path d=\"M6.343 17.657l-1.414 1.414\" /><path d=\"M6.343 6.343l-1.414 -1.414\" /><path d=\"M17.657 6.343l1.414 -1.414\" /><path d=\"M17.657 17.657l1.414 1.414\" /><path d=\"M4 12h-2\" /><path d=\"M12 4v-2\" /><path d=\"M20 12h2\" /><path d=\"M12 20v2\" />"});

export { IconMoon as I, IconSunHigh as a, createSvgComponent as c };

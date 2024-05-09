declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGAttributes<SVGAElement>>;
  const src: string;
  export default src;
}
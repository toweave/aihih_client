import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
  },
  sassOptions: {
    additionalData: `$var: red;`,
    silenceDeprecations: ['legacy-js-api'],
    quietDeps: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;

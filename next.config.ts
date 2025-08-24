import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  experimental: {
    reactCompiler: false,
  },
};

export default withPayload(nextConfig);

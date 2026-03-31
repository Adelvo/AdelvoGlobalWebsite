import type { Config } from "tailwindcss";
import lightswind from "lightswind/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [lightswind],
};

export default config;

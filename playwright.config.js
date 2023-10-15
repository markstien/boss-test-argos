import { devices } from "@playwright/test";

const config = {
  webServer: {
    port: 3000,
    command: "npm run preview ",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;

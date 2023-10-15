import { devices } from "@playwright/test";

const config = {
  webServer: {
    command: 'npm run dev -- test',
    url: 'http://127.0.0.1:3000/',
    timeout: 10 * 1000,
    reuseExistingServer: !process.env.CI,
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

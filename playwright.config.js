import { devices } from "@playwright/test";

const port = 3000;

const config = {
  webServer: {
    command: `npx vite --port ${port}`,
    timeout: 10 * 1000,
    port,
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

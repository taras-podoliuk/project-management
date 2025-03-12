module.exports = {
  apps: [
    {
      name: "project-menegement",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};

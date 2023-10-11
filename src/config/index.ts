const config = {

  schedule: {
    host: import.meta.env.VITE_SCHEDULE_HOST || "http://localhost:3500",
  },
  bus: {
    host: import.meta.env.VITE_SCHEDULE_SOCKET,
  },  
};

export default config;

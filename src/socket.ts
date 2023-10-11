import  io  from "socket.io-client";
import config from "@/config";
import { useCookies } from "vue3-cookies"; 
const { cookies } = useCookies();

export const socket = io(config.bus.host, { 
    auth: {group: 1},
  autoConnect: true,
  reconnection: true
});

socket.on("connect", () => {
  console.log("Socket: connect")
});

socket.on("disconnect", () => {
  console.log("Socket: disconnect")
});

socket.on("connect_error", (error) => {
  console.log("Socket: connect_error", error)
});

socket.on("getNotification", async (notification: any) => {
  console.log('получено уведомление по socket.io');
  console.log(notification);
});
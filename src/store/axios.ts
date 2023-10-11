import config from "@/config";
import axios from "axios";
import { useCookies } from "vue3-cookies"; 

const { cookies } = useCookies();

export const instanceCampus= axios.create({
  baseURL: config.schedule.host,
});

instanceCampus.interceptors.request.use();
instanceCampus.interceptors.response.use(responseHandler, errorHandler);

function requestHandler(request: any) {  
  return request;
}

function responseHandler(response: any) {
  return response
}

function errorHandler(error: any) {
  const {
    response: { status },
  } = error;
}


import { defineStore } from 'pinia';
import { StoreFragment, transformClass } from 'pinia-class-transformer';
import { AxiosResponse } from 'axios';
import { instanceCampus } from '@/store/axios';

class State {
}

class Fragment extends StoreFragment<State, Fragment> {
  
  async initApp() {
  }

  async getData() {
    try {
      const response: AxiosResponse = await instanceCampus.get(
        "/readonly/facultet/list"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

}

const useStore = defineStore('facultet', transformClass(State, Fragment));

export default useStore;
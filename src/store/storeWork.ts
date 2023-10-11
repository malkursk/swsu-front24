import { defineStore } from 'pinia';
import { StoreFragment, transformClass } from 'pinia-class-transformer';
import { AxiosResponse } from 'axios';
import { instanceCampus } from '@/store/axios';

class State {
}

class Fragment extends StoreFragment<State, Fragment> {
  
  async initApp() {
  }

  async loadWeekType() {
    try {
      const response: AxiosResponse = await instanceCampus.get(
        `/readonly/week`
      );      
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async loadGroups() {
    try {
      const response: AxiosResponse = await instanceCampus.get(
        `/schedule/groups`
      );      
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async allByGroup(groupName: string) {
    try {
      const response: AxiosResponse = await instanceCampus.get(
        `/schedule/allByGroup?groupname=${groupName}`
      );
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  
}

const useStore = defineStore('work', transformClass(State, Fragment));

export default useStore;
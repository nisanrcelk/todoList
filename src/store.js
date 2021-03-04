import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import {router} from "router"

Vue.use(Vuex)
axios.defaults.baseURL="https://aodapi.eralpsoftware.net"
const store =new Vuex.Store({
  state: {
    token:"",

  },
  mutations: {
    setToken(state,token){
      state.token=token
      //state içindeki token değerini gelen token ile değiştirme işlemi
    },
    clearToken(state){
      state.token=""
    }
  },

  actions: {
    initlogin({commit,dispatch}) //sayfa ilk çalıştığında localstorage'daki token geliyor.
    {
      let token=localStorage.getItem("token")
      if(token){
        commit("setToken",token),
          router.push("/list")
      }
      else{
        router.push("/")
        return false

      }
    },
    login ({commit,dispatch,state},authData){

      return axios.post("/login/apply",
        {username: authData.username,password:authData.password,returnSecureToken: true}
      ).then(response => {
        commit("setToken",response.data.token) //setToken methodunu response içinde gelen token ile çalıştırma işlemi
        localStorage.setItem("token",response.data.token) //sayfa yenilendiğinde tokenı kaybetmemek için localstorage kullanıldı
        console.log(response)

      })

    }
  },
  getters :{
    Islogin(state){
      return state.token!==""
      //state içinde token boş mu kontrol ediliiyor,diğer sayfaya geçmek için kontrol
    }
  },
})
export default store

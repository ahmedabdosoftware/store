<template>
    <header>
      <div class="logo-cont">
        <span class="logo">gndra</span>
      </div>
      <ul id="nav">
        <li>
           <router-link exact to="/"> shop</router-link>
        </li>
        <li>
          <router-link to="/Category">about</router-link>
        </li>
        <li>
          <router-link to="/products">products</router-link>
        </li>
        <li>
          <router-link to="/brands">contact us</router-link>
        </li>
        <span v-on:click="disappear()" id="x">x</span>
      </ul>
      <div>
        <div class="contIcon">
            <font-awesome-icon class="icon" :icon="['fas', 'cart-shopping']" />
            <span>4</span>
        </div>
        <div  class="contIcon">
            <font-awesome-icon class="icon" :icon="['fas', 'bell']" />
            <span>2</span>
        </div>
        <div  class="contIcon account">
          <font-awesome-icon v-on:click="appearAccountMenue()" class="icon accountIcon" :icon="['fas', 'user']" />
          <!-- <span>23</span> -->
          <div id="accountMenue" class="accountMenue">
              <div>
                <div id="closeMenu" v-on:click="disappearAccountMenue()" class="closeMenu">x</div>
              </div>
              <div>
                  <font-awesome-icon  class="icon" :icon="['fas', 'user']" />
                  <span>washlist</span>
              </div>
              <div  v-if="!isLogin" v-on:click="disappearAccountMenue()">
                <router-link  class="accountMenueLink" :to="{ name: 'SingUPAndSingIn'}">
                  <font-awesome-icon class="icon" :icon="['fas', 'user']" />
                  <span>sign up</span>
                </router-link>
              </div>
              <div v-if="!isLogin" v-on:click="disappearAccountMenue()">
                <router-link    class="accountMenueLink" :to="{ name: 'SingUPAndSingIn'}">
                  <font-awesome-icon class="icon" :icon="['fas', 'user']" />
                  <span>login</span>
                </router-link>
              </div>
              <div  v-else v-on:click="disappearAccountMenue()">
                  <font-awesome-icon class="icon" :icon="['fas', 'user']" />
                  <span v-on:click="logOut()">logout</span>
              </div>
          </div>
        </div>
        <font-awesome-icon v-on:click="appearMenue()" class="icon-menu" :icon="['fas', 'bars']" />
        
      </div>
    </header>
  </template>
  <script>
  export default {
    name: "Header",
    computed: {
      isLogin () {
        // console.log( this.$store.getters.isLogin)
        return this.$store.getters.isLogin
      }
    },
    methods: {
        appearMenue() {
          document.getElementById("nav").style.cssText = "right:0%;";
          },
       disappear() {
          document.getElementById("nav").style.cssText = "right:-100%;";
       },
       appearAccountMenue() {
          document.getElementById("accountMenue").style.cssText = "visibility:visible;";
          },
       disappearAccountMenue() {
          document.getElementById("accountMenue").style.cssText = "visibility:hidden;";
       },
       logOut() {
        this.$store.commit('logOut')
       },
    },
  };
  </script>
  
  <style scoped lang="scss">
  header {
    height: 100px;
    width: 100%;
    background-color:var(--popularCalar);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0px;
    z-index: 100;
  }
  ul {
    width: 400px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30px;
    // background-color:red;
  }
  .logo-cont {
    width: 150px;
    height: 40px;
    // background-color:red;
    margin-left: 150px;
    //   scss code
    >span {
      text-align: center;
      line-height: 40px;
      color: black;
      font-weight: bold;
      font-size: 40px;
    //   text-transform: uppercase;
      font-family: "Dancing Script", cursive;
    }
  }
  header > div:nth-child(3) {
    // background-color:red;
    width: 150px;
    height: 40px;
    // margin-left: 360px;
    margin-right: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    >div{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    width: 40px;
    height: 100%;
    background-color: rgb(224, 224, 226);
    position: relative;
    border-radius: 4px;
    >span{
      background-color:red;
      position: absolute;
      bottom: 20px;
    left: 2px;
    height: 15px;
    width: 15px;
    border-radius: 7.5px;
    color: var(--popularCalar);
    // background-color:red;
    font-size: 14px;
    
  }
}
>div:hover{
  background-color: rgb(22, 175, 22);
  cursor: pointer;
}
  

}
.account{
position: relative;

.accountMenue{
  transition:  visibility 500ms ease-in-out;
  visibility: hidden;
  box-shadow: 0px 0px 40px -20px rgb(172, 172, 172);
  // box-shadow: 0px 10px 25px rgb(172, 172, 172);
  width: 220px;
  height: 240px;
  position:absolute ;
  top: 60px;
  right: -13px;
  background-color:  rgb(248, 243, 243);
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  >div{
    width: 100%;
    height: 25%;
    // background-color: greenyellow;
    
  }
  >div:not(.accountMenue >div:first-child):hover{
    background-color:  rgb(231, 229, 229);
  }
  >div:not(.accountMenue >div:first-child){
    // background-color: rgb(29, 99, 69);
    font-size: 19px;
    font-weight: 600;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 20px;
    span{
      // background-color: red;
      margin-left: 13px;
    }
    
  }
  >div:first-child{
    // background-color: rgb(47, 78, 255);
    padding-left: 15px;
    padding-top: 20px;
    .closeMenu{
        font-size: 24px;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        width: 27px;
        height: 27px;
        border-radius: 13.5px;
        background-color: rgb(206, 203, 203);

    }

  }
 

}
.accountMenue::after{
  content: "";
  position: absolute;
  right: 20px;
  top: -26px;
  // background-color: darkgoldenrod;
  border-width: 15px;
  border-color:transparent transparent white transparent ;
  border-style: solid;
  
}
}

  .router-link-exact-active:not(.accountMenueLink) {
    color:var(--active);
    position: relative;
  }
  .router-link-exact-active:not(.accountMenueLink)::after{
    content: "";
    position: absolute;
    bottom: -5px;
    left: 5px;
    background-color: var(--active);
    width: 28px;
    height: 3px;
    border: 2px;
  }
  .icon-menu,#x{
    display: none;
  }
  /* media => ipad */
@media(max-width:799px){


   header ul{
    flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 240px;
        height:100vh;
        background-color:#eeeeef;
        opacity: 0,4;
        position: fixed;
        right: -240px;
        top: 0px;
        padding-top: 50px;
        padding-left: 17px;
        z-index: 1;
        transition: 0.5s;
   }
   header ul li {
        padding-top: 15px;
    }
   .icon-menu{
    display: block;
   }
   #x{
        display: block;
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 24px;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        width: 27px;
        height: 27px;
        border-radius: 13.5px;
        background-color: rgb(206, 203, 203);

    }
    header > div:nth-child(3) {
        margin-left: 40px ;
    }

}



@media(max-width:799px){
  
  
  header {
      display: flex;
      justify-content: space-evenly;
    }
  
    .logo-cont {
      // background-color:red;
      margin-left:0px;
      //   scss code
     
    }
    header > div:nth-child(3) {
      // background-color:rgb(0, 255, 85);
      margin-right: 0px;
      width: 200px;
     
  }

}

  </style>
  
<template>
  <div id="formWrapper">
    <div id="headingDiv">
      <h1 id="heading">{{ getHeader }}</h1>
    </div>

    <div id="formBlock">
      <div id="emailInput" v-if="signUp">
        <h2>Email adres</h2>
        <input id="inputEmail" type="text" placeholder="jan@jansen.com" />
      </div>

      <h2>Gebruikersnaam</h2>
      <input
        id="inputUser"
        type="text"
        placeholder="Jan Janssen"
        v-model="login.username"
      />
      <h2>Wachtwoord</h2>
      <input
        id="inputPass"
        :type="getPasswordInputType"
        placeholder="Wachtwoord"
        v-model="login.password"
      />
      <img @click="togglePassVisibility" v-if="!showPass" src="../../assets/eye_open.svg">
      <img @click="togglePassVisibility" v-if="showPass" src="../../assets/eye_shut.svg">
      <p v-if="wrongCreds" id="wrongCredDiv">
        Wrong credentials, please try again.
      </p>
      <base-button @click="submitLogin" id="submitButton" buttonStyle="solid"
        >Inloggen</base-button
      >
      <div id="createAcc">
        <p>
          <a v-on:click="toggleSignUp" href="#">{{ getA }}</a>
        </p>
      </div>
    </div>

    <p id="gdprP">
      We use cookies and similar tools to improve your shopping experience,
      provide our services, understand how customers use our services so that we
      can make improvements, and to display advertising, including
      interest-based advertising.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signUp: false,
      wrongCreds: false,
      showPass: false,
      login: {
        username: "",
        password: "",
      },
      userDatabase: this.$store.getters.getUserDatabase,
    };
  },
  methods: {
    toggleSignUp() {
      this.signUp = !this.signUp;
    },
    submitLogin() {
      if (!this.signUp) {
        const database = this.userDatabase;

        for (var i = 0; i < database.length; i++) {
          if (this.login.username == database[i].username) {
              if (this.login.password == database[i].password) {
                  this.$store.dispatch('updateLogin', database[i])
                  this.$router.push('/');
              }else {this.wrongCreds = true; this.login.password = ''}
          }else {this.wrongCreds = true; this.login.password = ''}
        }
      }
    },
    togglePassVisibility(){
        this.showPass = !this.showPass
    }
  },
  computed: {
    getHeader() {
      if (this.signUp) {
        return "Maak een account";
      } else {
        return "Inloggen";
      }
    },
    getA() {
      if (this.signUp) {
        return "Inloggen";
      } else {
        return "Account maken";
      }
    },
    getPasswordInputType(){
        if(this.showPass)   {return 'text'}
        else                {return 'password'}
    },
  },
};
</script>

<style scoped>
#formWrapper {
  width: 700px;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#formWrapper input {
  width: 75%;
  color: black;
  margin: 15px 0px;
  border: none;
  padding: 14px 14px;
  border-radius: 10px;
  background-color: #a6c9d831;
  margin-bottom: 40px;
}

#formWrapper h1 {
  font-family: "open-sans", sans-serif;
  font-weight: 800;
  font-size: 42px;
}

#formWrapper h2 {
  font-family: "raleway", sans-serif;
  font-weight: 600;
  font-size: 18px;
}

#submitButton:hover {
  background-color: rgba(255, 255, 255, 0);
  color: var(--orange);
}

a {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;

  width: 90%;
  color: var(--orange);
}

#gdprP {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  width: 75%;
  color: black;
}

#formBlock p {
  color: crimson;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 20px;
}

#formBlock img{
    position: absolute;
    height: 24px;
    margin: 25px 0 0 -45px;
    opacity: 50%;
    cursor: pointer;
}

#createAcc {
  margin-top: 40px;
}
</style>
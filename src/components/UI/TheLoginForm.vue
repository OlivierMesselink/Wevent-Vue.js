<template>
  <div id="formWrapper">
    <div id="headingDiv">
      <h1 id="heading">{{ getHeader }}</h1>
    </div>

    <div id="formBlock">
      <div v-if="signUp" id="userInput">
        <h2>Voor en achternaam</h2>
        <div id="nameDiv">
        <input v-model="register.firstname" placeholder="Voornaam" />
        <input v-model="register.lastname" placeholder="Achternaam" />
        </div>
      </div>

      <div id="emailInput">
        <h2>Email adres</h2>
        <input
          id="inputEmail"
          v-if="!signUp"
          type="text"
          v-model="login.email"
          placeholder="jan@jansen.com"
        />
        <input
          id="inputEmail"
          v-if="signUp"
          type="text"
          v-model="register.email"
          placeholder="jan@jansen.com"
        />
      </div>

      <h2>Wachtwoord</h2>
      <input
        id="inputPass"
        v-on:keyup.enter="registerUser"
        v-if="signUp"
        :type="getPasswordInputType"
        placeholder="Wachtwoord"
        v-model="register.password"
      />

      <input
        id="inputPass"
        v-on:keyup.enter="registerUser"
        v-if="!signUp"
        :type="getPasswordInputType"
        placeholder="Wachtwoord"
        v-model="login.password"
      />

      <img
        @click="togglePassVisibility"
        v-if="!showPass"
        src="../../assets/eye_open.svg"
      />
      <img
        @click="togglePassVisibility"
        v-if="showPass"
        src="../../assets/eye_shut.svg"
      />
      <p v-if="wrongCreds" id="wrongCredDiv">
        Ongeldige inloggegevens, probeer het opnieuw.
      </p>
      <base-button
        @click="registerUser"
        id="submitButton"
        buttonStyle="solid"
        >{{ getButtonTxt }}</base-button
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
import { projectAuth } from "../../firebaseConfig.js";

export default {
  data() {
    return {
      signUp: false,
      wrongCreds: false,
      showPass: false,
      login: {
        email: "",
        password: "",
      },
      register: {
        email: "",
        password: "",
        firstname: "",
        lastname: ""
      },
      userDatabase: this.$store.getters.getUserDatabase,
    };
  },
  methods: {
    toggleSignUp() {
      this.signUp = !this.signUp;
      this.wrongCreds = false;
    },
    togglePassVisibility() {
      this.showPass = !this.showPass;
    },
    loginUser() {
      projectAuth
        .signInWithEmailAndPassword(this.login.email, this.login.password)
        .then((userCredential) => {
          this.user = userCredential.user;
          this.$store.dispatch("updateLogin", userCredential.user);
          this.$router.push("/");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorMessage || errorCode) {
            this.wrongCreds = true;
          }
        });
    },
    registerUser() {
      if (this.signUp) {
        projectAuth
          .createUserWithEmailAndPassword(
            this.register.email,
            this.register.password
          )
          .then((userCredential) => {
            this.addUserToDb(userCredential.user.uid);
            this.$router.push("/")
          })
          .catch((error) => {
            alert(error.message);
          });
      } else {
        this.loginUser();
      }
    },
    addUserToDb(userId) {
      const fetchUrl = "https://vuejs-e4bad-default-rtdb.europe-west1.firebasedatabase.app/Customers/" + userId + ".json"
      fetch(
        fetchUrl,
        {method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: this.register.firstname,
          lastname: this.register.lastname,
          email: this.register.email, 
        }),}
      )
        .then((response) => response.json())
        .then((data) => (this.postId = data.id));
    },
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
    getPasswordInputType() {
      if (this.showPass) {
        return "text";
      } else {
        return "password";
      }
    },
    getButtonTxt() {
      if (this.signUp) {
        return "Maak account";
      } else {
        return "Inloggen";
      }
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

#formBlock img {
  position: absolute;
  height: 24px;
  margin: 25px 0 0 -45px;
  opacity: 50%;
  cursor: pointer;
}

#formBlock input::placeholder {
  opacity: 0.6;
}

#createAcc {
  margin-top: 40px;
}

#nameDiv{
  display: flex;
  width: 79%;
  justify-content: space-between;
}

#nameDiv input{
  width: 43%;
  margin: 20px 0px 40px 0;
}
</style>
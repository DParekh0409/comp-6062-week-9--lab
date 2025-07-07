const app= Vue.createApp({
    data(){
        return{
            greeting: "Welcome to the Vue.js!",
            message: "This message is displayed based on a Boolean property.",
            showMessage: true
        };
    }
});
app.mount("#app");
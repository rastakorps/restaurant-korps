import axios from 'axios';
import { defineStore } from 'pinia';


export const useAuthStore = defineStore('auth', {
    state: () => ({ authUser: null, authToken:null }),
    getters: {
        user:(state) => state.authUser,
        token:(state) => state.authToken
    },
    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie');
        },
        async login(form) {
            await this.getToken();
            await axios.post('/api/auth/login', form).then(
                (res) => {
                    this.authToken = res.data.token;
                    this.authUser = res.data.data;
                    this.router.push('/');
                }
            ).catch(
                (errors) => {
                    let desc = '';
                    errors.response.data.errors.map(
                        (e) => {desc = desc + ' '+e}
                    )
                    alert(desc);
                }
            )
        },
        async register(form) {
            await this.getToken();
            await axios.post('/api/auth/register', form).then(
                (res) => {
                    alert(res.data.message);
                    setTimeout(() => {
                        this.router.push('/login');
                    }, 2000);
                }
            ).catch(
                (errors) => {
                    let desc = '';
                    errors.response.data.errors.map(
                        (e) => {desc = desc + ' '+e}
                    )
                    alert(desc);
                }
            )
        },
        async logout() {
            await axios.get('/api/auth/logout', this.authToken);
            this.authToken = null;
            this.authUser = null;
            this.router.push('login');
        },
        persist: true
    }
})
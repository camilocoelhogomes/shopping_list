import axios from "axios";
import { Redirect } from "react-router";

class AuthService {

    private token:string = '';
    private email:string = '';
    private password:string = '';

    async signUp(data: {username: string, password: string,email: string,confirmPassword: string}) {
        try {
            console.log('data:',data);
            const response = await axios.post('http://localhost:3001/users', {
                name: data.username, email: data.email, password: data.password, confirmPassword: data.confirmPassword}
            );
            return response.data;
        } catch (error) {
            console.error('Error signing up:',error);
            throw error;
        }
    }

    async signIn(data: {email: string, password: string}) { 
        try {
            const response = await axios.post('http://localhost:3001/auth/login', {
                email: data.email, password: data.password
            });
            this.token = response.data.token;
            this.email = data.email;
            this.password = data.password;
            return response.data;
        } catch (error) {
            console.error('Error signing in:',error);
            throw error;
        }
    }

    async autoSignIn() { 
        try {
            const response = await axios.post('http://localhost:3001/auth/login', {
                email: this.email, password: this.password
            });
            this.token = response.data.token;
            return response.data;
        } catch (error) {
            console.error('Error signing in:',error);
            throw error;
        }
    }

    getToken():string{
        if(this.token === ''){
            throw new Error('No token available');
        }
        return this.token;
    }

}

const authService = new AuthService();

export default authService;
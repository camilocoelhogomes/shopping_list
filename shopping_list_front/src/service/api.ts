import axios from "axios";

class Api {

    async signUp(data: {username: string, password: string,email: string,confirmPassword: string}) {
        try {
            console.log('data:',data);
            const response = await axios.post('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {name: data.username, email: data.email, password: data.password, confirmPassword: data.confirmPassword}
            });
            return response.data;
        } catch (error) {
            console.error('Error signing up:',error);
            throw error;
        }

    }

}

const api = new Api();

export default api;
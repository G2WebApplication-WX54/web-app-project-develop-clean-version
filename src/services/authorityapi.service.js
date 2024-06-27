import axios from "axios";

export class AuthorityApiService {
    baseUrl = ""
    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    async getAllGovernments() {
        let response = null;

        try {
            response = await axios.get(`${this.baseUrl}/governments`)
        }catch(e) {
            console.error('Error to obtain government data', e)
        }

        return response;
    }

    async createAuthority(data) {
        let response = null;

        try {
            response = await axios.post(`${this.baseUrl}/governments`, data);
        }catch(e){
            console.error('Error creating a government', e)
        }
        return response;
    }

    async getAuthorityByEmail(email) {
        let response = null;

        try {
            response = await axios.get(`${this.baseUrl}/governments?email=${email}`);
        }catch(e){
            console.error('Error getting government by email', e)
        }
        return response;
    }

}
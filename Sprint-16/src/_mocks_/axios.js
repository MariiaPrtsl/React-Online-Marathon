import axios from "axios";


function mockAxios (username){
    const resp = {
        data:{
            name: 'yurkovskiy',
            url : `https://api.github.com/users/${username}`,
        },
    };
    
    return jest.spyOn(axios, "get").mockResolvedValueOnce(resp);
}

export default mockAxios;
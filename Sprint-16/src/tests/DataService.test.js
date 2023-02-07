import getGitHubUser from '../services/DataService/index.js'
import axios from 'axios';

jest.mock("axios");

describe("Test servives", () => {
    const someData = {
      login: "user1",
      id: "123123",
    };
  
    let response;
  
    beforeEach(() => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: someData }));
    });
  
    it("should call axios.get 1 time", async () => {
      response = await getGitHubUser("queen");
      expect(axios.get).toBeCalledTimes(1);
    });
  
    it("should test services axios request with some github data", async () => {
      response = await getGitHubUser("queen");
      expect(response.data.login).toMatch("user1");
    });
  });
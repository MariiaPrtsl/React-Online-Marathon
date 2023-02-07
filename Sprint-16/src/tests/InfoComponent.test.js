import mockAxios from "../_mocks_/axios"
import renderer from 'react-test-renderer'; 
import getGitHubUser from "../services/DataService";

describe("Test comnonent Info", () => {
  test('should return gitHub user information', async () => {
    const userInfo = {data:{name:'yurkovskiy', url: 'https://api.github.com/users/yurkovskiy'}}
    
    mockAxios(userInfo.data.name);
    const resp = await getGitHubUser('yurkovskiy');
    expect(userInfo.data.url).toMatch(resp.data.url);
  });

  test('header renders correctly', () => {
    const wrapper = renderer.create(<h3>GitHub User Info</h3>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  test('first item renders correctly', () => {
    const wrapper = renderer.create(<li>"login: yurkovskiy"</li>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
   
});
   

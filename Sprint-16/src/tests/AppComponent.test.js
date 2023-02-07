import renderer from 'react-test-renderer'
import App from '../components/App/index.js'

// TODO: Your test need to be here instead of fake tests

describe("test App Component", () => {
  it("matches the snapshot", () => {
      const wrapper = renderer.create(<App/>).toJSON();
      expect(wrapper).toMatchSnapshot();
  });
});
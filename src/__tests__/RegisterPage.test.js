import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Register from '../pages/Register';

describe(
  'Renders correctly Register page component',
  () => {
    let container;
    beforeEach(() => {
      container = shallow(
        <Provider store={store}>
          <Router>
            <Register />
          </Router>
        </Provider>,
      );
    });

    it(
      'Contains \'Sign me up!\' button',
      () => {
        expect(container.find('Sign me up')).toBeTruthy();
      },
    );

    it(
      'Matches Register snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <Register />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);

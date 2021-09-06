import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Login from '../pages/Login';

describe(
  'Renders correctly Login page component',
  () => {
    let container;
    beforeEach(() => {
      container = shallow(
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>,
      );
    });

    it(
      'Contains \'Log me in\' button',
      () => {
        expect(container.find('Log me in')).toBeTruthy();
      },
    );

    it(
      'Matches Login snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <Login />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);

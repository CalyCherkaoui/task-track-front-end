import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Admin from '../pages/Admin';

describe(
  'Renders correctly the Admin page',
  () => {
    it(
      'Matches Admin snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <Admin />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);

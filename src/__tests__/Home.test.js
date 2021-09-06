import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from '../pages/Home';

describe(
  'Renders correctly the Home page',
  () => {
    it(
      'Matches Home snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <Home />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);

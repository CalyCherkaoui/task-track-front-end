import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import About from '../pages/About';

describe(
  'Renders correctly the About page',
  () => {
    it(
      'Matches About snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <About />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);

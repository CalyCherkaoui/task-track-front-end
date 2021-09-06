import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import FooterNav from '../component/FooterNav';

describe(
  'Renders correctly The Footer navigation component',
  () => {
    it(
      'Matches Footer Navigation snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <FooterNav />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Navigation from '../component/Navigation';

describe(
  'Renders correctly The navigation bar component',
  () => {
    let container;
    beforeEach(() => {
      container = shallow(
        <Provider store={store}>
          <Router>
            <Navigation />
          </Router>
        </Provider>,
      );
    });

    it(
      'Contains About page link',
      () => {
        expect(container.find('About')).toBeTruthy();
      },
    );

    it(
      'Matches Navigation snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <Navigation />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);

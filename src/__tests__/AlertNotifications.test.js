import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import AlertsNotifications from '../component/AlertNotifications';

describe(
  'Renders correctly The navigation bar component',
  () => {
    let container;
    const message = 'Test Notification';
    beforeEach(() => {
      container = shallow(
        <Provider store={store}>
          <Router>
            <AlertsNotifications message={message} />
          </Router>
        </Provider>,
      );
    });

    it(
      'Contains Alert\'s message',
      () => {
        expect(container.find('Test Notification')).toBeTruthy();
      },
    );

    it(
      'Matches AlertNotifications snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <AlertsNotifications message={message} />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);

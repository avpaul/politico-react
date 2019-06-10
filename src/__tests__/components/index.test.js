import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import localStorageMock from '../__mocks__/localStorage';
import Badge from '../../components/badge/badge';
import Navbar from '../../components/navbarComponent/navbar';
import ResultCard from '../../components/resultsComponent/resultCard';
import Home from '../../components/homeComponent/home';
import Login from '../../components/loginComponent/login';
import Signup from '../../components/signupComponent/signup';

const mockStore = configureStore();

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('components', () => {
  it('should render a badge component', () => {
    const message = { text: 'Profile updated', type: 'success' };
    const wrapper = shallow(<Badge message={message.text} type={message.type} duration={6000} />);
    expect(wrapper.find('span').text()).toEqual(message.text);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a navbar component', () => {
    const wrapper = shallow(<Navbar />);
    expect(
      wrapper
        .find('img')
        .first()
        .hasClass('logo-img'),
    ).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the home component', () => {
    const wrapper = shallow(<Home />);
    wrapper.setState({ auth: false });
    expect(
      wrapper
        .find('.btn.btn-signup')
        .dive()
        .text(),
    ).toEqual('');
  });

  it('render result card', () => {
    const wrapper = shallow(<ResultCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render result card', () => {
    const store = mockStore({ redirectTo: {}, errors: {} });
    const wrapper = shallow(
      <Provider store={store}>
        <Signup />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('render result card', () => {
    const store = mockStore({ redirectTo: {}, errors: {} });
    const wrapper = shallow(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import App from '../App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import renderer from 'react-test-renderer';
import Plaintext from '../components/Plaintext';
import Ciphertext from '../components/Ciphertext';
import Shift from '../components/Shift';
import TextField from '@material-ui/core/TextField';

configure({ adapter: new Adapter() });

describe("CaesarsCipher <App />", () => {

  let mount;

  beforeEach(() => {
    mount = createMount(); 
  });

  it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });


  it('check default/initial state of the application', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Shift).text()).toEqual('Enter shift amount');
    expect(wrapper.find(Plaintext).text()).toEqual('Plaintext');
    expect(wrapper.find(Ciphertext).text()).toEqual('Ciphertext');
  });

  it('check if plaintext to ciphertext conversion works', () => {
    const wrapper = mount(<App />);
    wrapper.find(Shift).instance().handleChange({ target: { value: '5' } });
    wrapper.find(Plaintext).instance().onChange({ target: { value: 'hackerrank' } });

    // two outputs exist because Material-UIs <Textfield> stores it that way.
    expect(wrapper.find(Ciphertext).text()).toEqual('Ciphertextmfhpjwwfspmfhpjwwfsp');
  });

  it('check if ciphertext to plaintext conversion works', () => {
    const wrapper = mount(<App />);
    wrapper.find(Shift).instance().handleChange({ target: { value: '7' } });
    wrapper.find(Ciphertext).instance().onChange({ target: { value: 'hackerrank' } });

    // two outputs exist because Material-UIs <Textfield> stores it that way.
    expect(wrapper.find(Plaintext).text()).toEqual('Plaintextatvdxkktgdatvdxkktgd');
  });

  it('check if case-sensitivity is handled', () => {
    const wrapper = mount(<App />);
    wrapper.find(Shift).instance().handleChange({ target: { value: '1' } });
    wrapper.find(Plaintext).instance().onChange({ target: { value: 'SDK' } });

    // two outputs exist because Material-UIs <Textfield> stores it that way.
    expect(wrapper.find(Ciphertext).text()).toEqual('CiphertextTELTEL');
  });

  it('check if sentence conversion is handled', () => {
    const wrapper = mount(<App />);
    wrapper.find(Shift).instance().handleChange({ target: { value: '1' } });
    wrapper.find(Plaintext).instance().onChange({ target: { value: 'hackerrank is amazing' } });

    // two outputs exist because Material-UIs <Textfield> stores it that way.
    expect(wrapper.find(Ciphertext).text()).toEqual('Ciphertextibdlfssbol jt bnbajohibdlfssbol jt bnbajoh');
  });
 
});
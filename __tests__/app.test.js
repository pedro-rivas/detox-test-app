import * as React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import App from '../App';

describe('app', () => {
  let getByTestId;
  let queryByText;

  beforeEach(() => {
    ({getByTestId, queryByText} = render(<App />));
  });

  it('components should render', () => {
    const button = getByTestId('multiplyButton');
    const mainLabel = queryByText('Multiply something');
    const numericInput = getByTestId('numericInput');
    // expected to be rendered
    expect(button).not.toBeNull();
    expect(mainLabel).not.toBeNull();
    expect(numericInput).not.toBeNull();
  });

  it('button submits the number', async () => {
    const button = getByTestId('multiplyButton');
    const numericInput = getByTestId('numericInput');

    // label 25 must exist
    fireEvent.changeText(numericInput, '5');
    fireEvent.press(button);
    await waitFor(() => expect(queryByText('25')).toBeTruthy());

    // label 36 must exist
    fireEvent.changeText(numericInput, '6');
    fireEvent.press(button);
    await waitFor(() => expect(queryByText('30')).toBeTruthy());

    // label 12 must not exist
    fireEvent.changeText(numericInput, '2');
    fireEvent.press(button);
    await waitFor(() => expect(queryByText('12')).toBeFalsy());
  });
});

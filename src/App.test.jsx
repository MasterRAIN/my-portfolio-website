import { render, act } from '@testing-library/react';
import App from './App';

jest.mock('./Components/Reveal', () => ({
  __esModule: true,
  default: ({ children }) => <div>{children}</div>,
}));

jest.mock('./Components/Particle', () => ({
  __esModule: true,
  default: () => <div data-testid="particle" />,
}));

describe('App', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('schedules the preloader timeout only once during the initial load', () => {
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

    render(<App />);

    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
  });
});

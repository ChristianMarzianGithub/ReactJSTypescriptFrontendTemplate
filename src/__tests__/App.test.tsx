import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders navigation links and cookie banner', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole('switch', { name: /toggle dark mode/i })).toBeInTheDocument();

    const acceptButton = screen.getByRole('button', { name: /accept cookies/i });
    expect(acceptButton).toBeInTheDocument();

    await userEvent.click(acceptButton);

    expect(screen.queryByRole('button', { name: /accept cookies/i })).not.toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('render "Hello World" as a text', () => {
        render(<Greeting />);

        const helloWorldElement = screen.getByText('Hello World');

        expect(helloWorldElement).toBeInTheDocument;
    });

    test('render "good to see you" if the button was NOT clicked', () => {
        render(<Greeting />);

        const paragraphElement = screen.getByText('good to see you', { exact: false });

        expect(paragraphElement).toBeInTheDocument;
    });

    test('render "Changed!" if the button was clicked', () => {
        render(<Greeting />);

        const buttonelement = screen.getByRole('button');
        userEvent.click(buttonelement);

        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument;
    });

    test('does not render "good to see you" if the button was clicked', () => {
        render(<Greeting />);

        const buttonelement = screen.getByRole('button');
        userEvent.click(buttonelement);

        const outputElement = screen.queryByText('good to see you', { expect: false });
        expect(outputElement).toBeNull();
    });
});


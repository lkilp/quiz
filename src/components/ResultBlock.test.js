import { render, screen } from '@testing-library/react';
import ResultBlock from './ResultBlock';

test('renders 50% when half of the questions are answered correctly', () => {
    render(<ResultBlock correct={5} incorrect={5} />);
    expect(screen.getByText(/50%/i)).toBeInTheDocument();
});

test('renders 55% when 6 of 11 questions are answered correctly', () => {
    render(<ResultBlock correct={6} incorrect={5} />);
    expect(screen.getByText(/55%/i)).toBeInTheDocument();
});

test('renders "Flapdrol! You should really try again ehh..." when result is 20% or less.', () => {
    render(<ResultBlock correct={1} incorrect={4} />);
    expect(screen.getByText('Flapdrol! You should really try again ehh...')).toBeInTheDocument();
}); 

test('renders "Pannenkoek! I really expected more from you..." when result is between 21% and 40%.', () => {
    render(<ResultBlock correct={2} incorrect={3} />);
    expect(screen.getByText('Pannenkoek! I really expected more from you...')).toBeInTheDocument();
}); 

test('renders "Halve bak! I can see you are trying..." when result is between 41% and 60%.', () => {
    render(<ResultBlock correct={3} incorrect={2} />);
    expect(screen.getByText('Halve bak! I can see you are trying...')).toBeInTheDocument();
}); 

test('renders "Toppertje Kate! You are really getting there..." when result is between 61% and 80%.', () => {
    render(<ResultBlock correct={4} incorrect={1} />);
    expect(screen.getByText('Toppertje Kate! You are really getting there...')).toBeInTheDocument();
}); 

test('renders "Helemaal perfect mooi! You are the Netherlands expert!" when result is between 81% and 100%.', () => {
    render(<ResultBlock correct={7} incorrect={0} />);
    expect(screen.getByText('Helemaal perfect mooi! You are the Netherlands expert!')).toBeInTheDocument();
}); 
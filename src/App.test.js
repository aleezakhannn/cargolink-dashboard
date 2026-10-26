import { render, screen } from '@testing-library/react';
import App from './App';
import sampleData from './gapsData.json';

const gaps = sampleData.gaps;
const count = (p) => gaps.filter((g) => g.priority === p).length;

test('renders the dashboard title', () => {
  render(<App />);
  expect(screen.getByText('CargoLink Remediation Dashboard')).toBeInTheDocument();
});

test('shows the metric cards', () => {
  render(<App />);
  expect(screen.getByText('Total Gaps Identified')).toBeInTheDocument();
  expect(screen.getByText('High Priority')).toBeInTheDocument();
  expect(screen.getByText('Medium Priority')).toBeInTheDocument();
  expect(screen.getByText('Low Priority')).toBeInTheDocument();
});

test('metric values match the JSON data', () => {
  render(<App />);
  expect(screen.getByText('Total Gaps Identified').parentElement)
    .toHaveTextContent(String(gaps.length));
  expect(screen.getByText('High Priority').parentElement)
    .toHaveTextContent(String(count('High')));
  expect(screen.getByText('Medium Priority').parentElement)
    .toHaveTextContent(String(count('Medium')));
  expect(screen.getByText('Low Priority').parentElement)
    .toHaveTextContent(String(count('Low')));
});

test('shows the remediation progress bar', () => {
  render(<App />);
  expect(screen.getByText('Remediation Progress')).toBeInTheDocument();
  expect(screen.getByText('25% Complete')).toBeInTheDocument();
});

test('table has one row per gap plus the header', () => {
  render(<App />);
  expect(screen.getAllByRole('row')).toHaveLength(gaps.length + 1);
});
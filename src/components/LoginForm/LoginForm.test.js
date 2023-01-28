import { render, screen } from '@testing-library/react';
import LoginForm from '.';
import validatePassword from '.';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here

test('password is valid', () => {
  let valid = validatePassword('aB+4567');
  expect(valid).toBe(true);
})

test('password is to short', () => {
  let valid = validatePassword('aB+456');
  expect(valid).toBe(false);
})

test('password is no lower', () => {
  let valid = validatePassword('AB+4567');
  expect(valid).toBe(false);
})

test('password is no upper', () => {
  let valid = validatePassword('ab+4567');
  expect(valid).toBe(false);
})

test('password is no special', () => {
  let valid = validatePassword('aBc4567');
  expect(valid).toBe(false);
})

test('password is no nums', () => {
  let valid = validatePassword('aB+defg');
  expect(valid).toBe(false);
})

test('password lower middle', () => {
  let valid = validatePassword('gB+4567');
  expect(valid).toBe(true);
})

test('password lower end', () => {
  let valid = validatePassword('zB+4567');
  expect(valid).toBe(true);
})

test('password upper start', () => {
  let valid = validatePassword('gA+4567');
  expect(valid).toBe(true);
})

test('password upper end', () => {
  let valid = validatePassword('gZ+4567');
  expect(valid).toBe(true);
})

test('password upper middle', () => {
  let valid = validatePassword('gK+4567');
  expect(valid).toBe(true);
})

test('password diffrent special )', () => {
  let valid = validatePassword('gK)4567');
  expect(valid).toBe(true);
})

test('password diffrent special *', () => {
  let valid = validatePassword('gK*4567');
  expect(valid).toBe(true);
})

test('password diffrent special ~', () => {
  let valid = validatePassword('gK~4567');
  expect(valid).toBe(true);
})

test('password middle num', () => {
  let valid = validatePassword('gK~abc5');
  expect(valid).toBe(true);
})

test('password start num', () => {
  let valid = validatePassword('gK~abc0');
  expect(valid).toBe(true);
})

test('password end num', () => {
  let valid = validatePassword('gK~abc9');
  expect(valid).toBe(true);
})


test('password is very long', () => {
  let valid = validatePassword('gK~abc987654321_)$@JFDS43NDSJKASFSESBs2SDFgd1asdfrASFSFASFSFSFSFSFOAJHFSAOJIUNI');
  expect(valid).toBe(true);
})

test('password num at end of very long', () => {
  let valid = validatePassword('gK~abcASFVSAFAFASF_)$@JFDS43NDSJKASFSESBs2SDFgdAasdfrASFSFASFSFSFSFSFOAJHFSAOJIUNIASDA(()()()8');
  expect(valid).toBe(true);
})
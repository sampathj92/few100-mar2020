import { add } from './utils';

describe('writing specs in typescript', () => {
    it('is easy', () => {
        expect(true).toBe(false);
    });
    it('can add', () => {
        expect(add(2, 2)).toBe(5);
    });
});

describe('writing a basic spec', () => {
    it('an example of this', () => {
        const myName = 'Joe';
        expect(myName.length).toBe(4)
    });
});

describe('using the snippet', () => {
    it('should behave...', () => {

    });
});
describe('declaring variables in typescript', () => {
    describe('typing', () => {
        it('implicitly typed variables', () => {
            let name = 'Joe';
            name = 'Ray';

            name = 1137;

            const age = 50;

            it('explicitly typed variables', () => {
                let name: string;
                name = 'Sue';
            });

            it('union types', () => {
                let thingy: string | number | string[] = 'Tacos';

                thingy = 'Enchiladas';
                thingy = 42;
                thingy = ['Tacos', 'Enchiladas'];
            });

            it('type aliases', () => {
                type ThingWithLettersAndStuff = string;

                const name: ThingWithLettersAndStuff = 'Joe';

                type MathOperation = (a: number, b: number) => Number;

                const add: MathOperation = (a, b) => a + b;

                expect(add(2, 2)).toBe(4);
            });
        });
    });
});

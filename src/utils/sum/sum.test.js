export function sum_test() {
    describe("sum of two numbers", () => {
        it("should return 3, sum of two numbers 1 and 2", () => {
            const result = sum(1, 2)
            const expected = 3
            expect(result).toBe(expected)
        })
    })
}

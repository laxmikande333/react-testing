// LifeCycleMethods

// 3
// beforeEach(() => {
//     console.log('before-each-global console');
// })

// 2
// beforeAll(() => {
//     console.log('before-all-global console');
// })

// 1
describe('Describe-1', () => {
    console.log('Describe-1 console');

    // 4
    // beforeEach(() => {
    //     console.log('before-each-describe-1 console');
    // })

    // 5
    test('Test-1', () => {
        console.log('Test-1 console');
    })

    // test('Test-2', () => {
    //     console.log('Test-2 console');
    // })
})

// describe('Describe-2', () => {
//     console.log('Describe-2 console');

//     test('Test-3', () => {
//         console.log('Test-3 console');
//     })

//     test('Test-4', () => {
//         console.log('Test-4 console');
//     })
// })
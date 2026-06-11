const conta = {
    email: 'tiago@dev',
    password: '123456',
    name: 'TiagoDev',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})

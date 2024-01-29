import { login } from "./autenticationLogin"

describe('login', () => {

    const mockEmail = 'mkawan@dio.bank'
    const mockPassword = '123456'
    it('Deve retornar false e erro se o email e senha sejam inválido', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com', '')
        expect(response).toBeFalsy()
    })
})
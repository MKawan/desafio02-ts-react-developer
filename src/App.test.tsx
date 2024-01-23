import {WelcomeLogin} from "./hooks/welcomeLogin/index";
describe("WelcomeLogin", () => {

  const mockAlert = jest.fn()
  window.alert = mockAlert

  it("deve exibir alert com Welcome(bem vindo)", () =>{

    WelcomeLogin()
    expect(mockAlert).toBeCalledWith('Welcome')
  })
}) 
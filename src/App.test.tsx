import {WelcomeLogin} from "../src/hooks/welcomeLogin";
describe("welcomeLogin", () => {

  const mockAlert = jest.fn()
  window.alert = mockAlert

  it("bem vindo", () =>{

    WelcomeLogin()
    expect(mockAlert).toBeCalledWith('bem vindo')
  })
}) 
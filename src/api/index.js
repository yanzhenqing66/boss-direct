import ajax from './ajax'

export const reqRegister = payload => ajax('/register', payload, 'POST')

export const reqLogin = payload => ajax('/login', payload, 'POST')

export const reqUpdateUserInfo = payload => ajax('/userUpdate', payload, 'POST')

export const reqUser = () => ajax('user')

export const reqUserList = payload => ajax('/userlist', payload)

export const reqChatMsg = () => ajax('/msglist')

export const reqReadMsg = payload => ajax('/updread', payload, 'POST')
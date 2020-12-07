import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'

const Header = Card.Header
const Body = Card.Body

class UserList extends Component {

  static propsTypes = {
    userList: PropTypes.array.isRequired
  }

  render() {
    return (
      <WingBlank style={{marginTop: 45, marginBottom: 55}}>
        {
          this.props.userList.map(user => (
            <div key={user._id}>
              <WhiteSpace />
              <Card onClick={() => this.props.history.push(`/chat/${user._id}`)}>
                <Header
                  thumb={user.header ?
                    require(`../../assets/images/header/${user.header}.png`).default : null}
                  extra={user.username}
                />
                <Body>
                  <div>职位: {user.post}</div>
                  {user.company ? <div>公司: {user.company}</div> : null}
                  {user.salary ? <div>月薪: {user.salary}</div> : null}
                  <div>描述: {user.info}</div>
                </Body>
              </Card>
            </div>
          ))
        }
      </WingBlank>
    )
  }
}
export default withRouter(UserList)
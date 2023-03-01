import React, { Component } from 'react'
import { SearchWrapper, Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style'
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载</NavItem>
          <NavItem className='right'>
            <i className='iconfont icon-Aa'></i>
          </NavItem>
          <NavItem className='right'>登录</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch onFocus={() => this.handleInputFocus()} onBlur={() => this.handleInputBlur()} className={this.state.focused ? 'focused' : ''}></NavSearch>
            </CSSTransition>
            <i className={this.state.focused ? 'focused iconfont icon-fangdajing' : 'iconfont icon-fangdajing'} ></i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='iconfont icon-quill-pen-fill'></i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  handleInputFocus() {
    console.log('pppp');
    this.setState({
      focused: true
    })
  }
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header
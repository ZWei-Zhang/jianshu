import React from 'react'
import { SearchWrapper, Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

const Header = (props) => {
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
            in={props.focused}
            timeout={200}
            classNames='slide'
          >
            <NavSearch onFocus={props.handleInputFocus} onBlur={props.handleInputBlur} className={props.focused ? 'focused' : ''}></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont icon-fangdajing' : 'iconfont icon-fangdajing'} ></i>
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

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused')
  }
}

const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus() {
      dispath(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispath(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)
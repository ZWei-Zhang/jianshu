import React, { Component } from 'react'
import { SearchWrapper, Addition, SearchInfo, SearchInfoTitle, SearchInfoList, SearchInfoSwitch, SearchInfoItem, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Header extends Component {
  getListArea() {
    const { focused, list } = this.props
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputBlur, handleInputFocus } = this.props
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
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch onFocus={handleInputFocus} onBlur={handleInputBlur} className={focused ? 'focused' : ''}></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont icon-fangdajing' : 'iconfont icon-fangdajing'} ></i>
            {this.getListArea()}
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
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus() {
      dispath(actionCreators.getList())
      dispath(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispath(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)
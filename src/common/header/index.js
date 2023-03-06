import React, { Component } from 'react'
import { SearchWrapper, Addition, SearchInfo, SearchInfoTitle, SearchInfoList, SearchInfoSwitch, SearchInfoItem, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'

class Header extends Component {
  getListArea() {
    const { focused, list, page, totalPage, handelMouseEnter, handelMouseLeave, mouseIn, handleChangPage } = this.props
    const newList = list.toJS()
    const pageList = []

    if (newList.length) {
      for (let i = (page - 1) * 5; i < page * 5; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => { handleChangPage(page, totalPage, this.spinIcon) }}
            >
              <i ref={icon => this.spinIcon = icon} className='iconfont icon-spin spin'></i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputBlur, handleInputFocus, list } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
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
              <NavSearch onFocus={() => { handleInputFocus(list) }} onBlur={handleInputBlur} className={focused ? 'focused' : ''}></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont icon-fangdajing zoom' : 'iconfont icon-fangdajing zoom'} ></i>
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.get('header').get('mouseIn')
  }
}

const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispath(actionCreators.getList())
      dispath(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispath(actionCreators.searchBlur())
    },
    handelMouseEnter() {
      dispath(actionCreators.mouseEnter())
    },
    handelMouseLeave() {
      dispath(actionCreators.mouseLeave())
    },
    handleChangPage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispath(actionCreators.changePage(page + 1))
      } else {
        dispath(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)
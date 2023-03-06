import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeLeft, HomeRight, HomeWrapper } from './style'

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='' src='https://upload.jianshu.io/admin_banners/web_images/5090/3260e43d0cbb78d21d3f39cbe1a59c067ab6b7ce.png?imageMogr2/quality/50' />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

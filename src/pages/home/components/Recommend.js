import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem, AppWrapper } from '../style'
import { connect } from 'react-redux'
import qrcode from '../../../statics/qrcode.png'

class Recommend extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        <RecommendWrapper>
          {
            list.map(item => (
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
            ))
          }
        </RecommendWrapper>
        <AppWrapper>
          <img class="qrcode" src={qrcode} alt="Download index side qrcode" />
          <div class="info">
            <div class="title">下载简书手机App<i class="iconfont ic-link"></i></div>
            <div class="description">随时随地发现和创作内容</div>
          </div>
        </AppWrapper>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState)(Recommend)

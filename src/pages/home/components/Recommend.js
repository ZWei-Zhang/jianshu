import React, { PureComponent } from 'react'
import { RecommendWrapper, RecommendItem, AppWrapper } from '../style'
import { connect } from 'react-redux'
import qrcode from '../../../statics/qrcode.png'

class Recommend extends PureComponent {
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
          <img className="qrcode" src={qrcode} alt="Download index side qrcode" />
          <div className="info">
            <div className="title">下载简书手机App<i className="iconfont icon-right1"></i></div>
            <div className="description">随时随地发现和创作内容</div>
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

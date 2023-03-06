import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriteWrapper, WriteItem } from '../style'

class Writer extends PureComponent {
  render() {
    const { list } = this.props
    return (
      <WriteWrapper>
        <div className="title">
          <span>推荐作者</span>
          <a className="page-change">
            <i className="iconfont icon-spin" style={{ transform: 'rotate(90deg)' }}></i>
            换一批
          </a>
        </div>
        <div className='list'>
          {
            list.map((item) => (
              <WriteItem key={item.get('id')}>
                <div className='list-item'>
                  <div className="avatar">
                    <img src={item.get('imgUrl')} alt='' />
                  </div>
                  <span className="follow" state="0">
                    <i className="iconfont icon-add"></i>
                    关注
                  </span>
                  <div className="name">
                    {item.get('name')}
                  </div>
                  <p>
                    写了2218.8k字 · 34.8k喜欢
                  </p>
                </div>
              </WriteItem>
            ))
          }
        </div>
        <a className="find-more">
          查看全部
          <i className="iconfont icon-right1"></i>
        </a>
      </WriteWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writeItem'])
})

export default connect(mapState)(Writer)

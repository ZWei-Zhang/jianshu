import { fromJS } from "immutable";
import * as actionTypes from './actionTypes'
import dailyPic from '../../../statics/banner-s-daily.png'
import clubPic from '../../../statics/banner-s-club.png'
import goodPic from '../../../statics/banner-s-7.png'
import safePic from '../../../statics/banner-s.png'


const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [{
    id: 1,
    imgUrl: dailyPic
  }, {
    id: 2,
    imgUrl: clubPic
  }, {
    id: 3,
    imgUrl: goodPic
  }, {
    id: 4,
    imgUrl: safePic
  }],
  writeItem: [],
  articlePage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        writeItem: fromJS(action.writeItem)
      })
    case actionTypes.ADD_HOME_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
      })
    default:
      return state
  }
}
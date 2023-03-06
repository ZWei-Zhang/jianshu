import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  writeItem: result.writeItem
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('api/home.json').then((res) => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}
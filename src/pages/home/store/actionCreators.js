import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  writeItem: result.writeItem
})

const addHomeList = (result, nextPage) => ({
  type: actionTypes.ADD_HOME_LIST,
  list: fromJS(result),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('api/home.json').then((res) => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data.list
      dispatch(addHomeList(result, page + 1))
    })
  }
}
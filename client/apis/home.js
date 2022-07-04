import request from 'superagent'

const rootUrl = '/api/v1'

export function getHome() {
  return request.get(rootUrl + '/home').then((res) => {
    return res.body.home
  })
}

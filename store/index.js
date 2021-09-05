import eqpayinfoAPI from '@/services/qtuminfo-api'
import {getLocale} from '@/plugins/i18n'

export const actions = {
  async nuxtServerInit({commit}, {req}) {
    let {data} = await eqpayinfoAPI.get('/info', {headers: {'X-Forwarded-For': req.ip}})
    commit('blockchain/height', data.height)
    commit('locale/language', getLocale(req))
  }
}

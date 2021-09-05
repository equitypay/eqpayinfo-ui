import * as EqPayinfoAPI from '@/services/qtuminfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return EqPayinfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return EqPayinfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return EqPayinfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return EqPayinfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return EqPayinfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return EqPayinfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction

import * as EqPayinfoAPI from '@/services/qtuminfo-api'

class Contract {
  static get(id, options = {}) {
    return EqPayinfoAPI.get(`/contract/${id}`, options)
  }

  static getUtxo(id, options = {}) {
    return EqPayinfoAPI.get(`/contract/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return EqPayinfoAPI.get(`/contract/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static listTokens({page, pageSize}, options = {}) {
    return EqPayinfoAPI.get(`/qrc20`, {params: {page, pageSize}, ...options})
  }

  static richList(id, {page, pageSize}, options = {}) {
    return EqPayinfoAPI.get(`/qrc20/${id}/rich-list`, {params: {page, pageSize}, ...options})
  }
}

export default Contract

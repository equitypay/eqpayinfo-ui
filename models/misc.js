import * as EqPayinfoAPI from '@/services/qtuminfo-api'

class Misc {
  static info(options = {}) {
    return EqPayinfoAPI.get('/info', options)
  }

  static dailyTransactions(options = {}) {
    return EqPayinfoAPI.get('/stats/daily-transactions', options)
  }

  static blockInterval(options = {}) {
    return EqPayinfoAPI.get('/stats/block-interval', options)
  }

  static coinstake(options = {}) {
    return EqPayinfoAPI.get('/stats/coinstake', options)
  }

  static addressGrowth(options = {}) {
    return EqPayinfoAPI.get('/stats/address-growth', options)
  }

  static richList({from, to}, options = {}) {
    return EqPayinfoAPI.get(`/misc/rich-list`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }

  static biggestMiners({from, to}, options = {}) {
    return EqPayinfoAPI.get(`/misc/biggest-miners`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }
}

export default Misc

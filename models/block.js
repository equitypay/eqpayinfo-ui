import * as EqPayinfoAPI from '@/services/qtuminfo-api'

function formatTimestamp(date) {
  let yyyy = date.getUTCFullYear().toString()
  let mm = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  let dd = date.getUTCDate().toString().padStart(2, '0')
  return yyyy + '-' + mm + '-' + dd
}

class Block {
  static get(id, options = {}) {
    return EqPayinfoAPI.get(`/block/${id}`, options)
  }

  static getRecentBlocks(options = {}) {
    return EqPayinfoAPI.get('/recent-blocks', options)
  }

  static getBlocksByDate(date = new Date(), options = {}) {
    return EqPayinfoAPI.get('/blocks', {params: {date: formatTimestamp(date)}, ...options})
  }
}

export default Block

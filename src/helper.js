export default class DistrictRepository {
  constructor(data) {
    this.data = this.reduceData(data);
  }

  reduceData(data) {
    return data.reduce((obj, val) => {
      if (!obj[val.Location]) {
        obj[val.Location] = []
      }
      obj[val.Location].push(val)
      return obj
    }, {})
  }
}

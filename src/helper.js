export default class DistrictRepository {
  constructor(data) {
    this.data = this.reduceData(data);
  }

  reduceData(data) {
    return data.reduce((obj, val) => {
      let { Location, TimeFrame, Data } = val;
      Location = Location.toUpperCase()
      if (!obj[Location]) {
        obj[Location] = {}
        obj[Location].location = Location
        obj[Location].data = {}
      }
      Data = typeof Data !== 'number' ? 0 : Math.round(1000*val.Data)/1000
      obj[Location].data[TimeFrame] = Data
      return obj
    }, {})
  }

  findByName(searchKey='') {
    return this.data[searchKey.toUpperCase()]
  }

  findAllMatches(searchKey='') {
    const keys = Object.keys(this.data).filter( location => location.includes(searchKey.toUpperCase()))
    return keys.map( key => this.data[key])
  }
};

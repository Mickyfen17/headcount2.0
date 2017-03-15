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
      Data = Data !== typeof 'number' ? 0 : Math.round(1000*val.Data)/1000
      obj[Location].data[TimeFrame] = Data
      return obj
    }, {})
  }

  findByName(searchKey) {
    if(searchKey === undefined || !this.data[searchKey.toUpperCase()]) {
      return undefined;
    }
    searchKey = searchKey.toUpperCase()
    const { data, location } = this.data[searchKey]
    const filteredObj = {
      location,
      data
    }
    return filteredObj;
  }

  findAllMatches(searchKey) {
    if(!searchKey) {
      return Object.keys(this.data);
    }
    const keys = Object.keys(this.data).filter( location => location.includes(searchKey.toUpperCase()))
    return keys.map( key => this.data[key])
  }
};

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
        obj[Location].data = {}
      }
      Data = Data === 'N/A' ? 0 : Math.round(1000*val.Data)/1000
      obj[Location].data[TimeFrame] = Data
      return obj
    }, {})
  }

  findByName(location) {
    if(location === undefined || !this.data[location.toUpperCase()]) {
      return undefined;
    }
    location = location.toUpperCase()
    const { data } = this.data[location]
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
    return Object.keys(this.data).filter( location => location.includes(searchKey.toUpperCase()))
  }
};

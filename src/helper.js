export default class DistrictRepository {
  constructor(data) {
    this.data = this.reduceData(data);
  }

  reduceData(data) {
    return data.reduce((obj, val) => {
      let { Location, TimeFrame, Data } = val;
      Location = Location.toUpperCase()
      if (!obj[Location]) {
        obj[Location] = []
        obj[Location].CombinedData = []
      }
      Data = Data === 'N/A' ? 0 : Math.round(1000*val.Data)/1000
      obj[Location].push(val)
      obj[Location].CombinedData.push([TimeFrame, Data])
      return obj
    }, {})
  }

  findByName(location) {
    if(location === undefined || !this.data[location.toUpperCase()]) {
      return undefined;
    }
    location = location.toUpperCase()
    const { CombinedData } = this.data[location]
    const currLocation = this.data[location][0].Location

    return CombinedData.sort((a, b) => a[0] - b[0])
    .reduce((obj, val) => {
      const [ year, data ] = val
      !obj.location && (obj.location = currLocation)
      obj.data[year] = data;
      return obj
    }, { data : {} })
  }

  findAllMatches(searchKey) {
    if(!searchKey) {
      return Object.keys(this.data);
    }
    return Object.keys(this.data).filter( location => location.includes(searchKey.toUpperCase()))
  }
};

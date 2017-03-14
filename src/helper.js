export default class DistrictRepository {
  constructor(data) {
    this.data = this.reduceData(data);
  }

  reduceData(data) {
    return data.reduce((obj, val) => {
      let { Location, TimeFrame, Data } = val;
      if (!obj[Location]) {
        Location = Location.toUpperCase()
        obj[Location] = []
        obj[Location].CombinedData = []
      }
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
    .reduce((arr, val) => {
      const [ year, data ] = val
      !arr.location && (arr.location = currLocation)
      arr.data[year] = data === 'N/A' ? 0 : Math.round(1000*data)/1000;
      return arr
    }, { data : {} })
  }

};

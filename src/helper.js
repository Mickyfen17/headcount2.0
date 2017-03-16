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

  findAverage(searchKey) {
    const countyStats = this.data[searchKey.toUpperCase()]
    const average = Object.keys(countyStats.data).reduce((acc, year) => {
      acc += countyStats.data[year] / 11
      return acc
    },0)
    return Math.round(1000*average)/1000;
  }

  compareDistrictAverages(firstCounty, secondCounty) {
    const firstCountyStats = this.findAverage(firstCounty)
    const secondCountyStats = this.findAverage(secondCounty)
    const min = Math.min(firstCountyStats, secondCountyStats)
    const max = Math.max(firstCountyStats, secondCountyStats)
    const value = Math.round(1000*(min/max))/1000
    return {
      [firstCounty.toUpperCase()] : firstCountyStats,
      [secondCounty.toUpperCase()] : secondCountyStats,
      compared : value
    }
  }
};

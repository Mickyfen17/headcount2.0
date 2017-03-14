export default class DistrictRepository {
  constructor(data) {
    this.data = this.reduceData(data);
  }

  reduceData(data) {
    return data.reduce((obj, val) => {
      const { Location, TimeFrame, Data } = val;
      if (!obj[Location]) {
        obj[Location] = []
        obj[Location].CombinedData = []
      }
      obj[Location].push(val)
      obj[Location].CombinedData.push({ [TimeFrame] : Data })
      return obj
    }, {})
  }
  // console.log(obj['Colorado'].sort((a, b) => a.TimeFrame - b.TimeFrame));

  // findByName(location) {
  //   const reduced = Object.keys(this.data).reduce((arr, val) => {
  //     val === location && (arr.push(...this.data[val]));
  //     return arr
  //   }, [])
  //   .reduce((acc, obj, i) => {
  //     const { Location, TimeFrame, DataFormat, Data } = obj;
  //     console.log(TimeFrame);
  //     !acc.location && (acc.location = Location)
  //     let test = { [TimeFrame] : Data }
      // console.log(test)
      // acc.data = {};
      // console.log(test);
      // acc.data = test
      // if(test[TimeFrame]) {
      //   console.log(i);
      //   test[TimeFrame] = Data
      // }
      // if(acc.data) {
      //   acc.data[TimeFrame] = Data
      // }
      // acc.data {
      //   [TimeFrame] : Data
      // }
      // acc.data = {[TimeFrame] : Data}
      // console.log(acc.data)
    //   return acc
    // }, {})
    // console.log(reduced.data);
    // return reduced
  // }
};

import axios from "axios"

export default class Story {
  constructor(info) {
    Object.getOwnPropertyNames(info).forEach((property) => { this[property] = info[property] })
  }

  fetch() {

  }

  update() {

  }

  save() {

  }

  static set(metaInfo) {
    this.projectId = metaInfo.projectId
    this.token = metaInfo.token
  }

  static getList() {
    let request = this._requestObject()
    request.method = "GET"

    return new Promise( (resolve, reject) => {
      axios(request)
        .then((response) => {
          resolve(this._createStoriesFrom(response.data))
        }).catch(reject)
    })
  }

  static _requestObject() {
    return {
      url: `https://www.pivotaltracker.com/services/v5/projects/${this.projectId}/stories`,
      protocol: "https",
      headers: {
        "X-TrackerToken": this.token,
        "Content-Type": "application/json",
      },
      transformRequest: [function (data) {
        return JSON.stringify(data)
      }],
    }
  }

  static _createStoriesFrom(storyInfoArray) {
    return storyInfoArray.map((storyInfo) => { return new this(storyInfo) })
  }
}

export class APOD{
  constructor(data){
    this.copyright = data.copyright
    this.date = data.date
    this.explanation = data.explanation
    this.img = data.hdurl
    this.mediaType = data.media_type
    this.title = data.title
  }
}
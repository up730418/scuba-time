export class Course {
  constructor(
     public id: string,
     public header: string,
     public footer: string,
     public name: string,
     public price: number,
     public pageOrder: number,
     public details: [ QA ],
     public breakDown: [ QA ],
     public img: string,
     public gallery:  string,
     ) { }
}
export class QA {
  constructor(
    public question: string,
    public answer: string,
    ) { }

}

export class EmailModel {
  constructor(
    public name: string,
    public contactNo: string,
    public intrest: string,
    public email: string,
    public extraDetails: string,
  ) { }
}

export class TeamMember {
  constructor(
    public name: string,
    public level: string,
    public diveSite: string,
    public course: string,
    public img: string,
  ) { }
}

export class DiveLocation {
  constructor(
    public title: string,
    public name: string,
    public shortDescription: string,
    public description: string,
    public details: {},
    public address: string,
    public img: string,
    public gallery: string,
    public map: string,
    public mapEmbed: string,
  ) { }
}

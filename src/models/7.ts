export enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  export function getDayType(day: Day): "Weekday" | "Weekend" {
    switch (day) {
      case Day.Saturday:
      case Day.Sunday:
        return "Weekend";
      default:
        return "Weekday";
    }
  }
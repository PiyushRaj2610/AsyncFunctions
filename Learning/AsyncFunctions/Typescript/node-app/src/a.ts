type Employee = {
  name: string;
  startDate: Date;
};

// this can also be a type
interface Manager {
  name: string,
  department: string;
};

type TechLead = Employee & Manager;
const t: TechLead = {
  name: "piyush",
  startDate: new Date(),
  department: "asdasd"
}
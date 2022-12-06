"use strict";
/*
Написати клас User(ім'я, прізвище, стать ) і клас Student(все, що має User і додатково рік вступу).
За допомогою вбудованого об'єкту Date перевіряєте, щоб рік вступу був не більше за поточний рік.
У студента буде метод, який повертає кількість років які начається студент, тобто курс.
Якщо рік вступу дорівнює поточному року - то це 1 курс. Місяці і дні вступу не враховуємо.

Скрізь попрописувати сетери і гетери. Використати try...catch
*/
const MAX_COURSE = 2016;
class User {
  /**
   *
   * @param {string} name
   * @param {string} lname
   * @param {string} gender
   */
  constructor(name, lname, gender) {
    this.name = name;
    this.lname = lname;
    this.gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("name must be a string");
    }
    this._name = name;
  }
  get lname() {
    return this._lname;
  }
  set lname(lname) {
    if (typeof lname !== "string") {
      throw new TypeError("lname must be a string");
    }
    this._lname = lname;
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    if (typeof gender !== "string") {
      throw new TypeError("name must be a string");
    }
    if (gender !== "male" || gender !== "female") {
      new TypeError("wrong gender");
    }
    this._gender = gender;
  }
}
let currentTime = new Date();
class Student extends User {
  /**
   *
   * @param {string} name
   * @param {string} lname
   * @param {string} gender
   * @param {number} joinYear
   */
  constructor(name, lname, gender, joinYear) {
    super(name, lname, gender);
    this.joinYear = joinYear;
  }
  get joinYear() {
    return this._joinYear;
  }
  set joinYear(joinYear) {
    if (typeof joinYear !== "number") {
      throw new TypeError("joinYear must be a string");
    }
    if (joinYear > currentTime.getFullYear()) {
      throw new RangeError("join year must be less or equal to current year");
    }
    this._joinYear = joinYear;
  }
  getCourse() {
    if (this.joinYear === currentTime.getFullYear()) {
      return "1st course";
    }
    return currentTime.getFullYear() - this.joinYear + 1;
  }
}
const user = new User("Ron", "Lakes", "male");
const student = new Student("Ron", "Lakes", "male", 2017);
try {
  console.log(student);
  console.log(student.getCourse());
} catch (error) {
  console.log(error);
}

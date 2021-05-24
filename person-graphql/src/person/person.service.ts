import {Injectable} from '@nestjs/common';
import {CreatePersonInput} from './dto/create-person.input';
import {UpdatePersonInput} from './dto/update-person.input';
import {Person} from "./entities/person.entity";

@Injectable()
export class PersonService {

  persons: Person[] = [];

  constructor() {
    this.persons.push({id: 1, name: "Amar"})
    this.persons.push({id: 2, name: "Vicky"})
  }

  create(createPersonInput: CreatePersonInput) {
    let person = new Person();
    person.id = createPersonInput.id;
    person.name = createPersonInput.name;
    this.persons.push(person);
    return person;
  }

  findAll() {
    return this.persons;
  }

  findOne(id: number) {
    return this.persons.find(value => value.id === id);
  }

  update(id: number, updatePersonInput: UpdatePersonInput) {
    const person = this.persons.find((value, index) => value.id === id);
    person.name = updatePersonInput.name;
    return person;
  }

  remove(id: number) {
    const person = this.persons.find(value => value.id === id);
    this.persons = this.persons.filter(value => value.id !== id);
    return person;
  }
}

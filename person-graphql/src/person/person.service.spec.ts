import { Test, TestingModule } from '@nestjs/testing';
import { PersonService } from './person.service';
import {CreatePersonInput} from "./dto/create-person.input";
import {UpdatePersonInput} from "./dto/update-person.input";

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonService],
    }).compile();

    service = module.get<PersonService>(PersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be add a person', () => {
    let createPersonInput = new CreatePersonInput();
    createPersonInput.id = 1;
    createPersonInput.name = "Amar";
    let person = service.create(createPersonInput);
    expect(person.id).toEqual(1)
  });

  it('should be return a person by id', () => {
    let createPersonInput = new CreatePersonInput();
    createPersonInput.id = 1;
    createPersonInput.name = "Amar";
    service.create(createPersonInput);
    let person = service.findOne(1);
    expect(person.id).toEqual(1)
  });

  it('should be return a updated person', () => {
    let createPersonInput = new CreatePersonInput();
    createPersonInput.id = 1;
    createPersonInput.name = "Amar";
    service.create(createPersonInput);
    let updatePersonInput = new UpdatePersonInput();
    updatePersonInput.name = "UpdatedName"
    let person = service.update(1, updatePersonInput);
    expect(person.name).toEqual("UpdatedName");
    let person1 = service.findOne(1);
    expect(person1.name).toEqual("UpdatedName")
  });

  it('should delete a person', () => {
    let createPersonInput = new CreatePersonInput();
    createPersonInput.id = 1;
    createPersonInput.name = "Amar";
    service.create(createPersonInput);
    let createPersonInput1 = new CreatePersonInput();
    createPersonInput1.id = 2;
    createPersonInput1.name = "Amar2";
    service.create(createPersonInput1);
    service.remove(1);
    let person1 = service.findOne(2);
    expect(person1.name).toEqual("Amar2")
    expect(service.findOne(1)).toBeUndefined();
  });
});

import { Component, OnInit } from "@angular/core";
import { PersonService } from "../services/person.service";

@Component({
    selector:'person-app',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
    persons:any = [];

    constructor(private personService: PersonService){}

    ngOnInit(): void {    
        this.personService.getPersons().subscribe(data => {
            this.persons = [...data];
        });
    }

}
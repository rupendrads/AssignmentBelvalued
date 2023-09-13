import { Component, OnInit } from "@angular/core";
import { PersonService } from "../services/person.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'person-details-app',
    templateUrl: './person.details.component.html',
    styleUrls: ['./person.details.component.css']
})
export class PersonDetailComponent implements OnInit {
    person:any;

    constructor(private personService: PersonService, private route: ActivatedRoute){}

    ngOnInit(): void {
        const personId:any = this.route.snapshot.paramMap.get('id');

        this.personService.getPerson(+personId).subscribe(person => {
            this.person = person;
        })
    }

}
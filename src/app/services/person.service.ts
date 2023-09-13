import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class PersonService {
    persons = [
        { Id: 1, Title: "Mr", Forename: "Barney", Surname: "McGrew", JobTitle: "Fireman", Town: "Trumpton" },
        { Id: 2, Title: "Mr", Forename: "Windy", Surname: "Miller", JobTitle: "Miller", Town: "Camberwick Green" },
        { Id: 3, Title: "Mr", Forename: "Chippy", Surname: "Minton", JobTitle: "Carpenter", Town: "Trumpton" },
        { Id: 4, Title: "Mrs", Forename: "Dora", Surname: "Minton", JobTitle: "Housewife", Town: "Trumpton" },
        { Id: 5, Title: "Mstr", Forename: "Nibs", Surname: "Minton", JobTitle: "Apprentice", Town: "Trumpton" },
        { Id: 6, Title: "Mr", Forename: "Nick", Surname: "Fisher", JobTitle: "Bill sticker", Town: "Trumpton" },
        { Id: 7, Title: "Mr", Forename: "Jonathon", Surname: "Bell", JobTitle: "Farmer", Town: "Camberwick Green" },
        { Id: 8, Title: "Mr", Forename: "Mickey", Surname: "Murphy", JobTitle: "Baker", Town: "Camberwick Green" },
        { Id: 9, Title: "Mr", Forename: "Peter", Surname: "Hazell", JobTitle: "Postman", Town: "Camberwick Green" },
        { Id: 10, Title: "Mr", Forename: "Thomas", Surname: "Tripp", JobTitle: "Milkman", Town: "Camberwick Green" }
    ];

    getPersons(){
        return of(this.persons.sort(this.compareSurname));
    }

    getPerson(id: number){
        return of(this.persons.find(p => p.Id == id));
    }

    compareSurname = (a:any, b:any) => {
        const surname1 = a.Surname.toUpperCase();
        const surname2 = b.Surname.toUpperCase();

        const firstname1 = a.Forename.toUpperCase();
        const firstname2 = b.Forename.toUpperCase();
    
        let comparison = 0;
        
        if (firstname1 > firstname2) {
            comparison = 1;
        } else if (firstname1 < firstname2) {
            comparison = -1;
        }

        if (surname1 > surname2) {
            comparison = 1;
        } else if (surname1 < surname2) {
            comparison = -1;
        } else {
            comparison = 0;
        }

        return comparison;
    }
}
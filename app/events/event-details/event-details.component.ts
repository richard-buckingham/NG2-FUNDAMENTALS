//  the url will be /event/1

import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'

//  this component will be routed to directly, so we don't need a selector 
@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [` 
        .container { padding-left: 20px; padding-right: 20px; } 
        .event-image { height: 100px; } `   
    ]
})
export class EventDetailsComponent implements OnInit{

    event: any;

    constructor(private eventService: EventService,
                private route: ActivatedRoute){
    }
    
    ngOnInit(): void {
        // to do, get id from activated route
        let eventParam: number = +this.route.snapshot.params['id'];
        console.log("eventParam = " + eventParam);
        this.event = this.eventService.getEvent(eventParam);
    }
}
import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate{

    constructor(private eventService: EventService,
                private _router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id:number = route.params['id'];
        console.log('eventid in the route = ' + id);
       
        const eventExists = this.eventService.getEvent(id);
        console.log('eventExists = ' + eventExists);

        if (! eventExists)
        {
            this._router.navigate(['/404']);
            return false;
        }

        return true;
    }
}
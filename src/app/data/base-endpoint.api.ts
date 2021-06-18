import { NbAuthService } from '@nebular/auth';
import { HttpHeaders } from "@angular/common/http";

export class BaseEndpoint {
    private readonly baseEndpoint: string = 'http://luanaspnet-001-site1.ftempurl.com/api/';
    private controller: string;

    constructor(ctrl: string) {
        this.controller = ctrl;
    }

    get Root_URL() {
        return this.baseEndpoint + this.controller + '/';
    }
}
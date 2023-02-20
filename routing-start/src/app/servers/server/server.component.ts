import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      console.log(data);
      this.server = data['server'];
    }) // server phải giống với tên khai báo bên app-routing
    // const id = +this.route.snapshot.params.id;
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((params: Params) => {
    //   console.log(params);
    //   this.server = this.serversService.getServer(+params['id']);
    // })
  }

  onEdit(){
    console.log(this.route.snapshot);
    // this.router.navigate(['/servers', this.server.id,  'edit'])
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'merge'})
  }

}

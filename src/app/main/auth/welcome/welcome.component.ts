import { Component, OnInit } from "@angular/core";
import { CoreConfigService } from "@core/services/config.service";
// import { IdentityService } from "app/identity-api";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  public coreConfig: any;

  // Private
  private unsubscribeAll: Subject<any>;

  @BlockUI() blockUI: NgBlockUI;

  /**
   * Constructor
   *
   * @param {CoreConfigService} coreConfigService
   */
  constructor(
    private coreConfigService: CoreConfigService,
  ) {
    this.unsubscribeAll = new Subject();

    // Configure the layout
    this.coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true,
        },
        menu: {
          hidden: true,
        },
        footer: {
          hidden: true,
        },
        customizer: false,
      },
    };
  }
  
  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
    this.coreConfigService.config
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((config) => {
        this.coreConfig = config;
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}

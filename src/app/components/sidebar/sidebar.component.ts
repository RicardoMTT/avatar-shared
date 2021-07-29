import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  filePath: string =
    'https://foundersguide.com/wp-content/uploads/2020/11/programming-1.jpg';

  constructor(
    private avatarService: AvatarService,
    private cdr: ChangeDetectorRef
  ) {
    this.avatarService.avatarObservable.pipe().subscribe((val) => {
      console.log('val', val);

      this.filePath = val;
      console.log('filePath', this.filePath);
      this.cdr.markForCheck();
    });
  }

  ngOnInit(): void {}
}

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  filePath: string =
    'https://foundersguide.com/wp-content/uploads/2020/11/programming-1.jpg';
  constructor(
    private avatarService: AvatarService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.avatarService.avatarObservable.pipe().subscribe((val) => {
      console.log('val', val);

      this.filePath = val;
      console.log('filePath', this.filePath);
      this.cdr.markForCheck();
    });
  }
}

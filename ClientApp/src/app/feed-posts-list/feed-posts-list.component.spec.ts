import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostsListComponent } from './feed-posts-list.component';

describe('FeedPostsListComponent', () => {
  let component: FeedPostsListComponent;
  let fixture: ComponentFixture<FeedPostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedPostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

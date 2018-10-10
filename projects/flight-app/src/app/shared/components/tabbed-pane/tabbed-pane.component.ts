import {AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss']
})
export class TabbedPaneComponent implements OnInit, OnDestroy, AfterContentInit {

  @Input() activeId: number;
  @Output() activeIdChange = new EventEmitter<number>();

  currentTab: TabComponent;

  @ContentChildren(TabComponent)
  tabList: QueryList<TabComponent>;

  get tabs() {
    if (!this.tabList) {
      return [];
    }
    return this.tabList.toArray();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.activate();
  }

  ngOnDestroy(): void {
  }

  activate() {
    this.tabs.forEach(tab => {
      tab.active = tab.id === this.activeId;
    });
  }

  jump(id: number) {
    this.activeId = id;
    this.activate();
    this.activeIdChange.emit(id);
  }

  get currentTitle(): string {
    return this
      .tabs
      .find(t => t.id === this.activeId)
      .title;
  }

  expand() {
    for (const tab of this.tabs) {
      tab.active = true;
    }
  }

  collapse() {
    this.activate();
  }
}

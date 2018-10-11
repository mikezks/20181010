import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule, MatTableModule, MatBadgeModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { TabComponent } from './components/tab/tab.component';
import { TabbedPaneComponent } from './components/tabbed-pane/tabbed-pane.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatBadgeModule
  ],
  declarations: [
    TabComponent,
    TabbedPaneComponent
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatBadgeModule,
    TabComponent,
    TabbedPaneComponent
  ]
})
export class SharedModule { }

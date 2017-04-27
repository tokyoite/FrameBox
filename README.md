# FrameBox
Angular Components for Generating Beautiful Framing around Images

Step 1: npm install framebox@4.3.0

Step 2: import { FrameBoxModule } from 'framebox';

Step 3: Add FrameBoxModule to @ngModule imports.
        @NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                AboutComponent,
                ContactComponent,
                DocsComponent,
                NavbarComponent,
                FooterComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                FrameBoxModule,
                RouterModule.forRoot([
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: 'home', component: HomeComponent },
                    { path: 'about', component: AboutComponent },
                    { path: 'docs', component: DocsComponent },
                    { path: 'contact', component: ContactComponent },
                ]),
            ],
            providers: [DataService],
            bootstrap: [AppComponent]
        })
        
Step 4: Framebox component usage as follows,
        <framebox [image]="'http://wylandflorida.com/Images/JimWarren/65/thumbsXL/thumb_Dog Heaven 4.jpg'"
          [pieceName]="'My Image Name'"
          [frameStyle]="'Package_2552'"
          [EnableSelection]="true">
        </framebox>

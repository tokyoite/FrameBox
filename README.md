# FrameBox
Angular Components for Generating Beautiful Framing around Images

<b>Step 1</b>: npm install framebox@4.3.0

<b>Step 2</b>: import { FrameBoxModule } from 'framebox';

<b>Step 3</b>: Add FrameBoxModule to @ngModule imports.
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
        
<b>Step 4</b>: Framebox component usage as follows,
        <framebox [image]="'http://wylandflorida.com/Images/JimWarren/65/thumbsXL/thumb_Dog Heaven 4.jpg'"
          [pieceName]="'My Image Name'"
          [frameStyle]="'Package_2552'"
          [EnableSelection]="true">
        </framebox>

# FrameBox
Angular Components for Generating Beautiful Framing around Images

<b>Step 1</b>: npm install framebox@4.3.0

<b>Step 2</b>: import { FrameBoxModule } from 'framebox';

<b>Step 3</b>: Add FrameBoxModule to @ngModule imports.
        
<b>Step 4</b>: Framebox component usage as follows,
<code>
        <framebox [image]="'http://wylandflorida.com/Images/JimWarren/65/thumbsXL/thumb_Dog Heaven 4.jpg'"
          [pieceName]="'My Image Name'"
          [frameStyle]="'Package_2552'"
          [EnableSelection]="true">
        </framebox>
</code>

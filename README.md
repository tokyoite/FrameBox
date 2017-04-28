FrameBox

Angular Components for Generating Beautiful Framing around Images

View Demo Here: https://tokyoite.github.io/FrameBox4Demo

Step 1: npm install framebox@4.3.0

Step 2: import { FrameBoxModule } from 'framebox';

Step 3: Add FrameBoxModule to @ngModule imports.

Step 4: Framebox component usage as follows,

<framebox [image]="'http://wylandflorida.com/Images/JimWarren/65/thumbsXL/thumb_Dog Heaven 4.jpg'" [pieceName]="'My Image Name'" [frameStyle]="'Package_2552'" [EnableSelection]="true">

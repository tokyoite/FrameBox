<br />
    <hr />
    <h2 class='h2'>Install <a onclick="ga.push(['_trackEvent','Download','zip',this.href]);" href="{{data.project.download}}" class="btn btn-primary btn-lg pull-right">Download Zip</a></h2>
    <hr />

            <span><b>Download FrameBox from npm.</b></span>
            <pre><code class="TypeScript" pCode>npm install framebox@4.3.0 </code></pre>

            <span><b>Import FrameBoxModule from node_modules folder </b></span>
            <pre><code class="TypeScript" pCode>import &#123; FrameBoxModule &#125; from 'framebox';</code></pre>

            <span><b>Add FrameBoxModule to @ngModule imports. </b></span>
            <pre>
<code >
@NgModule(&#123;
    &nbsp;declarations: [
        &nbsp;&nbsp;AppComponent,
        &nbsp;&nbsp;NavbarComponent,
        &nbsp;&nbsp;FooterComponent
    &nbsp;],
    &nbsp;imports: [
        &nbsp;&nbsp;BrowserModule,
        &nbsp;&nbsp;FormsModule,
        &nbsp;&nbsp;HttpModule,
        &nbsp;&nbsp;<b>FrameBoxModule</b>
    &nbsp;],
    &nbsp;providers: [DataService],
    &nbsp;bootstrap: [AppComponent]
&#125;)   
                </code>
</pre>

   

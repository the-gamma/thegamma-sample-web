# The Gamma sample web

This project shows how to use [thegamma-script](https://www.npmjs.com/package/thegamma-script) 
NPM package to build open and reproducible data-driven visualizations. You can see the result
of running this [sample web live](http://thegamma-sample-web.azurewebsites.net/).

After referencing `thegamma-script` and `monaco-editor` (the web-based editor that we are 
extending), you can load all the packages using something like:

```
<script src="/node_modules/requirejs/require.js"></script>
<script>
  require.config({
    paths:{'vs':'node_modules/monaco-editor/min/vs'},
    map:{ "*":{"monaco":"vs/editor/editor.main"}}
  });
  require(["monaco","node_modules/thegamma-script/dist/thegamma.js"], function (_,g) {
    // (...)
  });
</script>  
```

In practice, you can do something more clever (bundling etc.), but this is the simplest thing
that will work for now. Once The Gamma is loaded - in the `(...)` part - you can configure what
data sources are available, run The Gamma scripts and create the editor component.

In the sample, we use a service that provides Olympic medal data. We also specify 
libraries that are available to use in the user code:

```
var services = "http://thegamma-services.azurewebsites.net/";

var olympicColumns = 
  { Games: "string", Year: "number", Sport: "string", 
    Discipline: "string", Athlete: "string", Team: "string", 
    Gender: "string", Event: "string", Medal: "string",
    Gold: "number", Silver: "number", Bronze: "number" };

var providers = 
  g.providers.createProviders({
    "libraries": g.providers.library("/node_modules/thegamma-script/dist/libraries.json?s"),
    "olympics": g.providers.pivot(services + "pdata/olympics", olympicColumns) });
          
var ctx = g.gamma.createContext(providers);
```

The `g.providers` API lets you define two kinds of "type providers" that define what code
can users write in The Gamma editor:

 - The `library` provider takes a JSON that specifies the types and structure of JavaScript 
   libraries - the `thegamma-script` package comes with a couple of wrappers for Google Charts
   and for generating tables that you can see in the [Olympic Medallists demo](http://rio2016.thegamma.net/).
   You can create your own too, but it's not documented yet...
   
 - The `pivot` provider takes a service that can evaluate "data aggregation" requests.
   The above uses a [sample implementation](https://github.com/the-gamma/thegamma-services/blob/master/src/pdata/server.fsx).
   It also takes the columns that the data source has - it then lets you write data 
   aggregations and transformations using `.` as in the example below.
   
Here, the first (larger) block uses the `pivot` provier and the second one uses the `library` provider (`chart`):

```
let data = olympics
  .'group data'.'by Athlete'.'sum Gold'.then
  .'sort data'.'by Gold descending'.then
  .paging.take(10)
  .'get series'.'with key Athlete'.'and value Gold'
  
chart.column(data)
```

Once we configured The Gamma providers, we can run the code - assuming `code` contains the above 
snippet and `out1` is an ID of an element on a page, the following runs the code and renders
chart into `out1`:

```
ctx.evaluate(code, "out1");
```

The other feature that is currently exposed is creating an editor that lets users modify code snippets.
To create the editor, we first need to provide options. The available options are [defined in this F#
record](https://github.com/the-gamma/thegamma-script/blob/master/src/main/main.fsx#L465). Then you just
need to call `createEditor` function and give it an ID of a HTML element to use:

```
var opts =
  { height: document.getElementById("sizer").clientHeight - 100,
    width: document.getElementById("sizer").clientWidth - 40,
    monacoOptions: function(m) {
      m.fontFamily = "Inconsolata";
      m.fontSize = 15;
      m.lineHeight = 20;
      m.lineNumbers = false;
    } };

ctx.createEditor("ed1", code, opts);
```

#if INTERACTIVE
#I "../packages"
#r "Suave/lib/net40/Suave.dll"
#r "DotLiquid/lib/NET45/DotLiquid.dll"
#r "Suave.DotLiquid/lib/net40/Suave.DotLiquid.dll"
#r "FSharp.Formatting/lib/net40/FSharp.Markdown.dll"
#r "Newtonsoft.Json/lib/net40/Newtonsoft.Json.dll"
#else
module OlympicsWeb
#endif

open Suave
open System
open Suave.Filters
open Suave.Operators
open FSharp.Markdown
open Newtonsoft.Json

let (</>) a b = IO.Path.Combine(a, b)

let asm, debug = 
  if System.Reflection.Assembly.GetExecutingAssembly().IsDynamic then __SOURCE_DIRECTORY__, true
  else IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location), false
let root = IO.Path.GetFullPath(asm </> ".." </> "web")
let templ = IO.Path.GetFullPath(asm </> ".." </> "templates")

module Filters = 
  let idEncode (id:string) = 
    id.Replace('/', '-')
  let urlEncode (url:string) =
    System.Web.HttpUtility.UrlEncode(url)
  let mailEncode (url:string) =
    urlEncode(url).Replace("+", "%20")

let inits = Lazy.Create(fun () ->
  DotLiquid.setTemplatesDir templ 
  DotLiquid.setCSharpNamingConvention()
  System.Reflection.Assembly.GetExecutingAssembly().GetTypes()
  |> Seq.find (fun ty -> ty.Name = "Filters")
  |> DotLiquid.registerFiltersByType )  
   
let app = request (fun _ ->
  inits.Value
  choose [
    path "/" >=> DotLiquid.page "index.html" ()
    Files.browse root ])

 google.charts.load("current", {
     packages: ["corechart", "bar"]
 });
 google.charts.setOnLoadCallback(drawGrafico);


 //Função geral de erro na query 
 //---------------------------------------------------------------------------------------------------------------------
 function handleQueryErro(response) {
     {
         alert("Error in query: " + response.getMessage() + " " + response.getDetailedMessage());
         return
     }
 }
 //---------------------------------------------------------------------------------------------------------------------

 //Objeto generico que contem a forma dos graficos 
 //---------------------------------------------------------------------------------------------------------------------
 var formatoGraficoGenerico = {
     titlePosition: "none",
     chartArea: {
         left: "10%",
         top: "5%",
         bottom: 0,
         right: "20%",
         width: "85%"
     },
     bar: {
         groupWidth: "80%"
     },
     width: 750,
     height: 1300,
     fontSize: 12,
     colors: ["#5b5b5b", "#22497e"],
     legend: {
         position: "right",
         alignment: "center",
         textStyle: {
             fontSize: 15
         }
     },
     hAxis: {
         baseline: 0,
         baselineColor: "#51565a",
         textPosition: "none",
         gridlines: {
             color: "#000"
         }
     },
     tooltip: {
         textStyle: {
             fontSize: 15
         }
     },
     vAxis: {
         textStyle: {
             fontSize: 14,
             bold: true
         }
     }
 };
 //---------------------------------------------------------------------------------------------------------------------

 //Objeto generico que contem a forma dos graficos 
 //---------------------------------------------------------------------------------------------------------------------
 var options = [0, 1, {
     calc: "stringify",
     sourceColumn: 1,
     type: "string",
     role: "annotation"
                                            }, 2, {
     calc: "stringify",
     sourceColumn: 2,
     type: "string",
     role: "annotation"
                                            }];
 //---------------------------------------------------------------------------------------------------------------------

 //--------------------------------------------------- Função grafico ---------------------------------------------------------------------------
 function drawGrafico() {
     var i = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=BI2:BK26&Sheet=Sheet1&headers=1&gid=1908291467");
     i.send(handleQueryResponse1);
     var h = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=A2:C26&Sheet=Sheet1&headers=1&gid=1908291467");
     h.send(handleQueryResponse2);
     var i = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=BO2:BQ26&Sheet=Sheet1&headers=1&gid=1908291467");
     i.send(handleQueryResponse3);
     var g = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=G2:I26&Sheet=Sheet1&headers=1&gid=1908291467");
     g.send(handleQueryResponse4);
     var f = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=K2:M26&Sheet=Sheet1&headers=1&gid=1908291467");
     f.send(handleQueryResponse5);
     var e = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=O2:Q26&Sheet=Sheet1&headers=1&gid=1908291467");
     e.send(handleQueryResponse6);
     var c = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=U2:W26&Sheet=Sheet1&headers=1&gid=1908291467");
     c.send(handleQueryResponse7);
     var d = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=AA2:AC26&Sheet=Sheet1&headers=1&gid=1908291467");
     d.send(handleQueryResponse81);
     var b = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=AG2:AI26&Sheet=Sheet1&headers=1&gid=1908291467");
     b.send(handleQueryResponse82);
     var a = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=AM2:AO26&Sheet=Sheet1&headers=1&gid=1908291467");
     a.send(handleQueryResponse9);
     var l = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=AS2:AU26&Sheet=Sheet1&headers=1&gid=1908291467");
     l.send(handleQueryResponse10);
     var k = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=AY2:BA26&Sheet=Sheet1&headers=1&gid=1908291467");
     k.send(handleQueryResponse11);
     var j = new google.visualization.Query("https://docs.google.com/spreadsheets/d/11GhhMrk8SWHH_BPJa0yW3bsbmPuCgSmrekoBuHoIrF4/gviz/tq?range=BE2:BG26&Sheet=Sheet1&headers=1&gid=1908291467");
     j.send(handleQueryResponse13)
 }
//--------------------------------------------------- função Gráfico --------------------------------------------------------------------------------------
 function handleQueryResponse1(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }

     var dt = response.getDataTable();
     var dv = new google.visualization.DataView(dt);
     dv.setColumns(options);
     var d = new google.visualization.BarChart(document.getElementById('div_grafico_igovpessoas'));
     d.draw(dv, formatoGraficoGenerico)
 }
 //--------------------------------------------------- Final da funcação Grafico IgovPessoa --------------------------------------------------------------------------------------
 function handleQueryResponse2(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }

     var dt = response.getDataTable(); //Returns the data table as returned by the data source. Returns null if the query execution failed and no data was returned.
     var dv = new google.visualization.DataView(dt); //Represents a two-dimensional, mutable table of values, copia da Datable read-only
     dv.setColumns(options);
     var d = new google.visualization.BarChart(document.getElementById('div_grafico_ieod')); // diz onde é para aparecer o grafico
     d.draw(dv, formatoGraficoGenerico) // desenha o grafico com onde é para desenhar o grafico e o formato do grafico
 }
 //------------------------------------------------------------------------------------------Final da funcação Grafico IEOD-------------------------------------------------------
 function handleQueryResponse3(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }

     var dt = response.getDataTable();
     var dv = new google.visualization.DataView(dt);
     dv.setColumns(options);
     var d = new google.visualization.BarChart(document.getElementById('div_grafico_igovti'));
     d.draw(dv, formatoGraficoGenerico)
 }
//------------------------------------------------------------------------------------------Final da funcação Grafico IGOVTI-------------------------------------------------------
 function handleQueryResponse4(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }

     var dt = response.getDataTable();
     var dv = new google.visualization.DataView(dt);
     dv.setColumns(options);
     var c = new google.visualization.BarChart(document.getElementById('div_grafico_tmdp2'));
     c.draw(dv, formatoGraficoGenerico)
 }
 //-----------------------------------------------------------------------------------Final da funcaçãoGrafico TMDP2---------------------------------------------------------------

 function handleQueryResponse5(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }
     var dt = response.getDataTable();
     var dv = new google.visualization.DataView(dt);
     dv.setColumns(options);
     var c = new google.visualization.BarChart(document.getElementById('div_grafico_tmdp1c'));
     c.draw(dv, formatoGraficoGenerico)
 }
 //-----------------------------------------------------------------------------------Final da funcação Grafico TMDP1c-------------------------------------------------------------
 function handleQueryResponse6(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }
     var dt = response.getDataTable();
     var dv = new google.visualization.DataView(dt);
     dv.setColumns(options);
     var c = new google.visualization.BarChart(document.getElementById('div_grafico_ipj'));
     c.draw(dv, formatoGraficoGenerico)
 }
 //-----------------------------------------------------------------------------------Final da funcação Grafico IPJ----------------------------------------------------------------
 function handleQueryResponse7(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }
     var dt = response.getDataTable();
     var dv = new google.visualization.DataView(dt);
     dv.setColumns(options);
     var c = new google.visualization.BarChart(document.getElementById('div_grafico_ipa'));
     c.draw(dv, formatoGraficoGenerico)
 }
 //-----------------------------------------------------------------------------------Final da funcação Grafico IPA----------------------------------------------------------------
 function handleQueryResponse81(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }
     var dt = response.getDataTable();
     var dv = new google.visualization.DataView(dt);
     dv.setColumns(options);
     var a = new google.visualization.BarChart(document.getElementById('div_grafico_iacj1'));
     a.draw(dv, formatoGraficoGenerico)
 }
 //-----------------------------------------------------------------------------------Final da funcação Grafico IACJ1--------------------------------------------------------------

 function handleQueryResponse82(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }
     var dt = response.getDataTable();
     var dv = new google.visualization.DataView(dt);
     dv.setColumns(options);
     var a = new google.visualization.BarChart(document.getElementById('div_grafico_iacj2'));
     a.draw(dv, formatoGraficoGenerico)
 }
 //-----------------------------------------------------------------------------------Final da funcação Grafico IACJ2--------------------------------------------------------------


 function handleQueryResponse9(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }
     var dt = response.getDataTable();
     var dv = new google.visualization.DataView(dt);
     dv.setColumns(options);
     var b = new google.visualization.BarChart(document.getElementById('div_grafico_iconc'));
     b.draw(dv, formatoGraficoGenerico)
 }
 //-----------------------------------------------------------------------------------Final da funcação Grafico ICONc--------------------------------------------------------------


 function handleQueryResponse10(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }
     var dt = response.getDataTable();
     var dv = new google.visualization.DataView(dt);
     dv.setColumns(options);
     var d = new google.visualization.BarChart(document.getElementById('div_grafico_ira'));
     d.draw(dv, formatoGraficoGenerico)
 }
 //-----------------------------------------------------------------------------------Final da funcação Grafico ICP--------------------------------------------------------------


 function handleQueryResponse11(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }
     var dt = response.getDataTable();
     var dv = new google.visualization.DataView(dt);
     dv.setColumns(options);
     var d = new google.visualization.BarChart(document.getElementById('div_grafico_ie'));
     d.draw(dv, formatoGraficoGenerico)
 }
 //-----------------------------------------------------------------------------------Final da funcação Grafico IAM--------------------------------------------------------------

 //---
 function handleQueryResponse13(response) {
     if (response.isError()) {
         handleQueryErro(response);
     }
     var dt = response.getDataTable();
     var dv = new google.visualization.DataView(dt);
     dv.setColumns(options);
     var d = new google.visualization.BarChart(document.getElementById('div_grafico_iam'));
     d.draw(dv, formatoGraficoGenerico)
 };
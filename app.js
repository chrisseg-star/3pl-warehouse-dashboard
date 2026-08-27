(function(){
  var REGIONS=['US','CA','UK','EU'];
  var BRANDS=['Big Fudge Vinyl','Cat Ladies','Encha'];
  var COMBOS=[['US','Big Fudge Vinyl'],['US','Cat Ladies'],['US','Encha'],['CA','Big Fudge Vinyl'],['UK','Big Fudge Vinyl'],['EU','Big Fudge Vinyl']];
  var MONTHS=['Jun 2026','Jul 2026'];

  var ACC=[["Jun 2026","US","Big Fudge Vinyl",0.9303,0.9888,392,1408.94,240,650.2],["Jun 2026","US","Cat Ladies",0.538,0.9377,25142,41601.37,-13426,3659.37],["Jun 2026","US","Encha",0.2452,0.988,259,2318.05,0,0],["Jun 2026","CA","Big Fudge Vinyl",1,1,0,0,0,0],["Jun 2026","UK","Big Fudge Vinyl",0.9683,1,0,0,0,0],["Jun 2026","EU","Big Fudge Vinyl",0.9931,1,0,0,0,0],["Jul 2026","US","Big Fudge Vinyl",0.8816,1,0,0,425,2308.8],["Jul 2026","US","Cat Ladies",0.8232,0.992,2840,4798.45,-4782,-8316.64],["Jul 2026","US","Encha",0.2347,1,0,0,-1029,-14673.3],["Jul 2026","CA","Big Fudge Vinyl",-0.4109,1,0,0,0,0],["Jul 2026","UK","Big Fudge Vinyl",1,1,0,0,-65,-28.87],["Jul 2026","EU","Big Fudge Vinyl",0.4264,0.9973,0,0,120,162.29]];

  var VAL=[["Jun 2026","US","Big Fudge Vinyl",23810,157212.13,null,null,null,null],["Jun 2026","US","Cat Ladies",390721,355600.17,null,null,null,null],["Jun 2026","US","Encha",21609,290472.35,null,null,5750,52588.8],["Jun 2026","CA","Big Fudge Vinyl",4411,22728.69,null,null,null,null],["Jun 2026","UK","Big Fudge Vinyl",10618,51071.58,null,null,null,null],["Jun 2026","EU","Big Fudge Vinyl",17467,78306.09,null,null,null,null],["Jul 2026","US","Big Fudge Vinyl",25237,161574.55,null,null,null,null],["Jul 2026","US","Cat Ladies",394474,387978.98,null,null,null,null],["Jul 2026","US","Encha",37390,551237,null,null,5750,52588.8],["Jul 2026","CA","Big Fudge Vinyl",2339,12069.79,null,null,null,null],["Jul 2026","UK","Big Fudge Vinyl",10813,52844.43,null,null,null,null],["Jul 2026","EU","Big Fudge Vinyl",15521,68820.63,null,null,null,null]];

  var COSTS=[["Jun 2026","US","Big Fudge Vinyl","USD",1479.28,598.5,139,0,0,7.32,3.02,1.64,0,0],["Jun 2026","US","Cat Ladies","USD",8962.54,715,1895.5,0,0,14.15,2.78,0.49,0,0],["Jun 2026","US","Encha","USD",163.84,560,308.75,0,0,8.82,2.89,3.68,0,0],["Jun 2026","CA","Big Fudge Vinyl","USD",627.27,0,88.5,0,0,null,null,null,0,0],["Jun 2026","UK","Big Fudge Vinyl","GBP",104.17,0,212.8,0,0,null,null,null,0,0],["Jun 2026","EU","Big Fudge Vinyl","EUR",500,0,250.8,0,0,null,null,null,0,0],["Jul 2026","US","Big Fudge Vinyl","USD",1234.76,179.5,2937.8,0,0,41.97,3.54,22,0,0],["Jul 2026","US","Cat Ladies","USD",18374.9,2070.5,2397,0,0,18.16,1.61,2.13,0,25.1],["Jul 2026","US","Encha","USD",455.95,452,508.7,0,0,3.3,2.34,3.05,0,0],["Jul 2026","CA","Big Fudge Vinyl","USD",627.27,152.85,533.32,0,0,266.66,null,null,0,0],["Jul 2026","UK","Big Fudge Vinyl","GBP",100.03,0,69.92,0,0,null,null,null,0,0],["Jul 2026","EU","Big Fudge Vinyl","EUR",500,638,0,0,0,null,null,null,0,0]];

  var SVC=[["Jun 2026","US","Big Fudge Vinyl",7,1.09],["Jun 2026","US","Cat Ladies",2.52,0.92],["Jun 2026","US","Encha",1.4,1.67],["Jun 2026","CA","Big Fudge Vinyl",1.67,1],["Jun 2026","UK","Big Fudge Vinyl",2,7],["Jun 2026","EU","Big Fudge Vinyl","No data","No data"],["Jul 2026","US","Big Fudge Vinyl",4.33,0],["Jul 2026","US","Cat Ladies",1.33,0.08],["Jul 2026","US","Encha",3.43,0],["Jul 2026","CA","Big Fudge Vinyl",3,1.33],["Jul 2026","UK","Big Fudge Vinyl",4,"No data"],["Jul 2026","EU","Big Fudge Vinyl",5,3.75]];

  var CLAIMS=[["Jun 2026","US","Big Fudge Vinyl",588.98,0,0],["Jun 2026","US","Cat Ladies",4549.08,0,0],["Jun 2026","US","Encha",0,0,"No data"],["Jun 2026","CA","Big Fudge Vinyl",0,0,"No data"],["Jun 2026","UK","Big Fudge Vinyl",0,0,"No data"],["Jun 2026","EU","Big Fudge Vinyl",0,0,"No data"],["Jul 2026","US","Big Fudge Vinyl",136.63,0,0],["Jul 2026","US","Cat Ladies",14509.15,0,0],["Jul 2026","US","Encha",134.59,0,0],["Jul 2026","CA","Big Fudge Vinyl",0,0,"No data"],["Jul 2026","UK","Big Fudge Vinyl",0,0,"No data"],["Jul 2026","EU","Big Fudge Vinyl",0,0,"No data"]];

  function keyFind(arr,month,region,brand){for(var i=0;i<arr.length;i++){if(arr[i][0]===month&&arr[i][1]===region&&arr[i][2]===brand)return arr[i];}return null;}
  function fmtN(v,d){return v===null||v===undefined?'–':(typeof v==='string'?v:v.toLocaleString(undefined,{minimumFractionDigits:d,maximumFractionDigits:d}));}
  function fmtPct(v){return (v===null||v===undefined||typeof v==='string')?(v||'–'):(v*100).toFixed(1)+'%';}
  function fmtCur(v,sym){
    if(v===null||v===undefined) return '–';
    if(typeof v==='string') return v;
    var neg=v<0, abs=Math.abs(v);
    return (neg?'-':'')+sym+abs.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
  }
  var CUR_SYM={USD:'$',GBP:'£',EUR:'€'};
  // Mid-market FX rates as of the last business day of each month (source: exchange-rates.org)
  var FX_RATES={'Jun 2026':{GBP:1.32595,EUR:1.1394},'Jul 2026':{GBP:1.3481,EUR:1.15365}};
  function toUSD(v,curr,month){
    if(v===null||v===undefined) return null;
    if(curr==='USD') return v;
    var rates=FX_RATES[month];
    var r=rates?rates[curr]:null;
    return r?v*r:v;
  }

  function th(text,align){return '<th style="font-weight:600; color:#6B6A63; text-align:'+(align||'right')+'; border-bottom:0.5px solid #E4E2D8; text-transform:uppercase; letter-spacing:0.02em; font-size:10.5px;">'+text+'</th>';}
  function td(text){return '<td style="text-align:right; color:#2C2C2A; border-bottom:0.5px solid #F0EEE5;">'+text+'</td>';}

  function statTile(value,label,sub,bg,fg){
    return '<div style="flex:1; background:'+bg+'; color:'+fg+'; border-radius:10px; padding:16px 12px; text-align:center;"><div style="font-size:24px; font-weight:700;">'+value+'</div><div style="font-size:12px; font-weight:600; margin-top:3px;">'+label+'</div><div style="font-size:11px; opacity:0.85;">'+sub+'</div></div>';
  }

  function avgNumeric(vals){
    var n=vals.filter(function(v){return typeof v==='number';});
    return n.length?n.reduce(function(a,b){return a+b;},0)/n.length:null;
  }

  function seriesFor(arr,month,fRegion,fBrand){
    return arr.filter(function(r){return r[0]===month&&(fRegion==='All'||r[1]===fRegion)&&(fBrand==='All'||r[2]===fBrand);});
  }

  var chartInstances=[];
  function destroyCharts(){chartInstances.forEach(function(c){c.destroy();});chartInstances=[];}

  function deltaBadge(vals,labels,fmt,higherIsBetter){
    var nums=vals;
    if(nums.length<2) return '';
    var last=nums[nums.length-1],prev=nums[nums.length-2];
    if(typeof last!=='number'||typeof prev!=='number') return '';
    var diff=last-prev;
    var pct=prev!==0?(diff/Math.abs(prev)*100):null;
    var good=higherIsBetter===false?diff<=0:diff>=0;
    var arrow=diff>0?'▲':diff<0?'▼':'—';
    var prevLabel=labels[labels.length-2];
    var text=pct!==null?arrow+' '+Math.abs(pct).toFixed(1)+'% vs '+prevLabel:arrow+' '+fmt(Math.abs(diff))+' vs '+prevLabel;
    return '<span style="font-size:10px; font-weight:600; padding:1px 6px; border-radius:8px; white-space:nowrap; background:'+(good?'#EAF3DE':'#FCEBEB')+'; color:'+(good?'#27500A':'#791F1F')+';">'+text+'</span>';
  }

  // ---- Month-over-month table trend arrows ----
  function trendArrow(curr,prev,goodDir){
    if(typeof curr!=='number'||typeof prev!=='number'||isNaN(curr)||isNaN(prev)) return '';
    var diff=curr-prev;
    if(diff===0) return '';
    var up=diff>0;
    var good=null;
    if(goodDir==='higher') good=up;
    else if(goodDir==='lower') good=!up;
    else if(goodDir==='abs') good=Math.abs(curr)<=Math.abs(prev);
    var color=good===null?'#9A988F':(good?'#3B6D11':'#C0392B');
    var glyph=up?'▲':'▼';
    return ' <span style="color:'+color+'; font-size:9px; font-weight:700;">'+glyph+'</span>';
  }

  // ---- Export to Excel (SheetJS) ----
  function exportTableToExcel(tableId,filename){
    var el=document.getElementById(tableId);
    if(!el||typeof XLSX==='undefined') return;
    var wb=XLSX.utils.table_to_book(el,{raw:false});
    XLSX.writeFile(wb,filename);
  }
  window.exportTableToExcel=exportTableToExcel;

  function exportBtn(tableId,filename){
    return '<div style="display:flex; justify-content:flex-end; margin-bottom:6px;"><button type="button" class="export-btn" onclick="exportTableToExcel(\''+tableId+'\',\''+filename+'\')">Export to Excel</button></div>';
  }

  // ---- Export chart data to Excel (SheetJS, built from arrays rather than a DOM table) ----
  function exportChartData(filename,sheetName,headers,rows){
    if(typeof XLSX==='undefined') return;
    var data=[headers].concat(rows);
    var ws=XLSX.utils.aoa_to_sheet(data);
    var wb=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,sheetName||'Sheet1');
    XLSX.writeFile(wb,filename);
  }
  window.exportChartData=exportChartData;

  function chartCardHeader(title,sub,btnId){
    return '<div style="display:flex; align-items:flex-start; justify-content:space-between; gap:10px; margin-bottom:2px;">'+
      '<div><div style="font-size:12.5px; font-weight:600; color:#1F1F1D; margin-bottom:2px;">'+title+'</div><div style="font-size:10.5px; color:#9A988F;">'+sub+'</div></div>'+
      '<button type="button" id="'+btnId+'" class="export-btn" style="flex-shrink:0; white-space:nowrap;">Export to Excel</button>'+
    '</div>';
  }

  function chartCard(id,title,sub,labels,data,fmt,color,higherIsBetter){
    return '<div style="background:#FFFFFF; border:0.5px solid #E4E2D8; border-radius:8px; padding:10px 12px;">'+
      '<div style="display:flex; align-items:center; justify-content:space-between; gap:6px; margin-bottom:1px;">'+
        '<div style="font-size:11.5px; font-weight:600; color:#1F1F1D;">'+title+'</div>'+
        deltaBadge(data,labels,fmt,higherIsBetter)+
      '</div>'+
      '<div style="font-size:10px; color:#9A988F; margin-bottom:6px; line-height:1.3;">'+sub+'</div>'+
      '<div style="height:80px;"><canvas id="'+id+'"></canvas></div>'+
    '</div>';
  }

  function drawChart(id,labels,data,color){
    var el=document.getElementById(id);
    if(!el||typeof Chart==='undefined') return;
    var ctx=el.getContext('2d');
    var grad=ctx.createLinearGradient(0,0,0,80);
    grad.addColorStop(0,color+'33');
    grad.addColorStop(1,color+'00');
    var c=new Chart(ctx,{
      type:'line',
      data:{labels:labels,datasets:[{data:data,borderColor:color,backgroundColor:grad,fill:true,tension:0.3,pointRadius:3,pointBackgroundColor:color,pointBorderColor:'#fff',pointBorderWidth:1.5,borderWidth:2,spanGaps:true}]},
      options:{
        responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{backgroundColor:'#2C2C2A',padding:6,cornerRadius:6,titleFont:{size:10},bodyFont:{size:10}}},
        scales:{
          x:{grid:{display:false},ticks:{color:'#9A988F',font:{size:9}}},
          y:{grid:{color:'#F0EEE5'},ticks:{color:'#9A988F',font:{size:9}}}
        }
      }
    });
    chartInstances.push(c);
  }

  function drawValCombo(id,labels,totalV,agedV){
    var el=document.getElementById(id);
    if(!el||typeof Chart==='undefined') return;
    var ctx=el.getContext('2d');
    var gradTotal=ctx.createLinearGradient(0,0,0,230);
    gradTotal.addColorStop(0,'#089AA066');
    gradTotal.addColorStop(1,'#089AA000');
    var gradAged=ctx.createLinearGradient(0,0,0,230);
    gradAged.addColorStop(0,'#E24B4A55');
    gradAged.addColorStop(1,'#E24B4A00');
    var c=new Chart(ctx,{
      type:'line',
      data:{labels:labels,datasets:[
        {label:'Total inventory value',data:totalV,borderColor:'#089AA0',backgroundColor:gradTotal,fill:true,tension:0.3,pointRadius:4,borderWidth:2,spanGaps:true},
        {label:'Value above 180 days',data:agedV,borderColor:'#E24B4A',backgroundColor:gradAged,fill:true,tension:0.3,pointRadius:4,borderWidth:2,spanGaps:true}
      ]},
      options:{
        responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:10,font:{size:10.5},color:'#6B6A63'}},tooltip:{backgroundColor:'#2C2C2A',padding:8,cornerRadius:6}},
        scales:{
          x:{grid:{display:false},ticks:{color:'#9A988F',font:{size:10}}},
          y:{grid:{color:'#F0EEE5'},ticks:{color:'#9A988F',font:{size:10},callback:function(v){return '$'+Math.round(v).toLocaleString();}}}
        }
      }
    });
    chartInstances.push(c);
  }

  // Grouped + stacked bar chart: per month, a Units bar and a Value bar side by side,
  // each split into a normal-color base segment and a red "above 180 days" segment.
  function drawValueBars(id,labels,unitsNormalV,unitsAgedV,valueNormalV,valueAgedV){
    var el=document.getElementById(id);
    if(!el||typeof Chart==='undefined') return;
    var ctx=el.getContext('2d');
    var c=new Chart(ctx,{
      type:'bar',
      data:{labels:labels,datasets:[
        {label:'Units (normal)',data:unitsNormalV,backgroundColor:'#089AA0',stack:'units',yAxisID:'y1',borderRadius:2,barPercentage:1,categoryPercentage:0.6},
        {label:'Units (above 180 days)',data:unitsAgedV,backgroundColor:'#E24B4A',stack:'units',yAxisID:'y1',borderRadius:2,barPercentage:1,categoryPercentage:0.6},
        {label:'Value (normal)',data:valueNormalV,backgroundColor:'#2C2C2A',stack:'value',yAxisID:'y',borderRadius:2,barPercentage:1,categoryPercentage:0.6},
        {label:'Value (above 180 days)',data:valueAgedV,backgroundColor:'#E24B4A',stack:'value',yAxisID:'y',borderRadius:2,barPercentage:1,categoryPercentage:0.6}
      ]},
      options:{
        responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:10,font:{size:10.5},color:'#6B6A63'}},tooltip:{backgroundColor:'#2C2C2A',padding:8,cornerRadius:6}},
        scales:{
          x:{stacked:true,offset:true,grid:{display:false},ticks:{color:'#9A988F',font:{size:10}}},
          y:{position:'left',stacked:true,grid:{color:'#F0EEE5'},ticks:{color:'#9A988F',font:{size:10},callback:function(v){return '$'+Math.round(v).toLocaleString();}}},
          y1:{position:'right',stacked:true,grid:{drawOnChartArea:false},ticks:{color:'#9A988F',font:{size:10},callback:function(v){return Math.round(v).toLocaleString();}}}
        }
      }
    });
    chartInstances.push(c);
  }

  function drawAccCombo(id,labels,rawV,bridgedV,adjV){
    var el=document.getElementById(id);
    if(!el||typeof Chart==='undefined') return;
    var ctx=el.getContext('2d');
    var barColors=adjV.map(function(v){return v===null||v===undefined?'#D8D6CA':(v>=0?'#3B6D11':'#C0392B');});
    var c=new Chart(ctx,{
      data:{labels:labels,datasets:[
        {type:'bar',label:'Net adjustment value ($)',data:adjV,backgroundColor:barColors,yAxisID:'y1',borderRadius:4,barPercentage:0.45,order:2},
        {type:'line',label:'Raw accuracy %',data:rawV,borderColor:'#089AA0',backgroundColor:'#089AA022',tension:0.3,pointRadius:4,borderWidth:2,yAxisID:'y',spanGaps:true,order:1},
        {type:'line',label:'Bridged accuracy %',data:bridgedV,borderColor:'#7A5AF8',backgroundColor:'#7A5AF822',tension:0.3,pointRadius:4,borderWidth:2,yAxisID:'y',spanGaps:true,order:1}
      ]},
      options:{
        responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:10,font:{size:10.5},color:'#6B6A63'}},tooltip:{backgroundColor:'#2C2C2A',padding:8,cornerRadius:6}},
        scales:{
          x:{grid:{display:false},ticks:{color:'#9A988F',font:{size:10}}},
          y:{position:'left',grid:{color:'#F0EEE5'},ticks:{color:'#9A988F',font:{size:10},callback:function(v){return v+'%';}}},
          y1:{position:'right',grid:{drawOnChartArea:false},ticks:{color:'#9A988F',font:{size:10},callback:function(v){return '$'+Math.round(v).toLocaleString();}}}
        }
      }
    });
    chartInstances.push(c);
  }

  function trendsIntro(){
    return '<div style="background:#F1EFE8; border-radius:8px; padding:10px 14px; font-size:11.5px; color:#6B6A63; margin-bottom:12px;">Trend lines cover every month in your Monthly KPI export ('+MONTHS.join(' → ')+') and compare the latest month to the one before it. They\'ll automatically extend as more months land.</div>';
  }
  function chartsGridOpen(){ return '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; align-items:start;">'; }
  function scopeNote(text){ return '<div style="font-size:11px; color:#9A988F; margin-top:10px;">'+text+'</div>'; }
  function noDataCallout(){
    return '<div style="background:#F1EFE8; border-radius:8px; padding:16px; font-size:12.5px; color:#6B6A63;">No data for this Region / Brand combination yet.</div>';
  }

  // ---------------- Generic category filter pills ----------------
  var filterState={acc:{region:'All',brand:'All'},val:{region:'All',brand:'All'},costs:{region:'All',brand:'All'},svc:{region:'All',brand:'All'},claims:{region:'All',brand:'All'},value:{region:'All',brand:'All'}};

  // ---------------- Overview / SKU Details sub-tab (all live sections except SLA Compliance) ----------------
  var subTabState={acc:'overview',val:'overview',costs:'overview',svc:'overview',claims:'overview',value:'overview',aging:'overview'};
  function renderSubTabs(tab){
    var st=subTabState[tab];
    return '<div style="display:inline-flex; gap:2px; margin-bottom:14px; background:#EFEDE4; border-radius:8px; padding:3px;">'+
      [['overview','Overview'],['details','SKU Details']].map(function(pair){
        var active=st===pair[0];
        return '<span class="filter-pill" data-subtab="'+tab+'" data-subtabval="'+pair[0]+'" style="border-radius:6px; border:none;'+(active?' background:#089AA0; color:#FFFFFF; font-weight:600;':' background:transparent; color:#6B6A63;')+'">'+pair[1]+'</span>';
      }).join('')+
    '</div>';
  }
  function comingSoonPanel(){
    return '<div style="background:#FFFFFF; border:0.5px solid #E4E2D8; border-radius:8px; padding:40px 20px; text-align:center;">'+
      '<div style="font-size:15px; font-weight:600; color:#1F1F1D; margin-bottom:6px;">SKU-level breakdown</div>'+
      '<div style="font-size:12.5px; color:#9A988F; max-width:480px; margin:0 auto;">Coming soon — per-SKU quantities, values, and adjustment reasons will appear here once the detail export is connected.</div>'+
    '</div>';
  }
  function bindSubTabHandlers(tab,rerenderFn){
    document.querySelectorAll('.filter-pill[data-subtab="'+tab+'"]').forEach(function(el){
      el.addEventListener('click',function(){
        subTabState[tab]=el.getAttribute('data-subtabval');
        rerenderFn();
      });
    });
  }

  function pillsRow(label,options,current,kind){
    return '<div style="display:flex; align-items:center; gap:7px; flex-wrap:wrap; margin-bottom:6px;">'+
      '<span style="font-size:11px; font-weight:600; color:#9A988F; letter-spacing:0.02em; width:52px; flex-shrink:0;">'+label+'</span>'+
      options.map(function(o){
        return '<span class="filter-pill'+(o===current?' active':'')+'" data-kind="'+kind+'" data-value="'+o+'">'+o+'</span>';
      }).join('')+
    '</div>';
  }
  function brandsForRegion(region){
    return (region==='CA'||region==='UK'||region==='EU')?['Big Fudge Vinyl']:BRANDS;
  }
  function renderCatFilters(tab){
    var fs=filterState[tab];
    return '<div style="margin-bottom:12px;">'+pillsRow('REGION',['All'].concat(REGIONS),fs.region,'region')+pillsRow('BRAND',['All'].concat(brandsForRegion(fs.region)),fs.brand,'brand')+'</div>';
  }
  function hasAnyMatch(source,fRegion,fBrand){
    return MONTHS.some(function(m){return seriesFor(source,m,fRegion,fBrand).length>0;});
  }

  // ---------- Generic months-as-columns table builder (with trend arrows + Excel export) ----------
  function tableFromRows(rowsDef,aggFn,fRegion,fBrand,tableId,filename){
    var aggByMonth=MONTHS.map(function(m){return aggFn(m,fRegion,fBrand);});
    var head='<tr>'+th('Metric','left')+MONTHS.map(function(m){return th(m);}).join('')+'</tr>';
    var body=rowsDef.map(function(rd){
      var label=rd[0],fmt=rd[1],rawFn=rd[2],goodDir=rd[3];
      var cells=MONTHS.map(function(m,i){
        var a=aggByMonth[i];
        var text=a?fmt(a):'–';
        if(a&&rawFn&&i>0){
          var prevA=aggByMonth[i-1];
          if(prevA){
            var curr=rawFn(a),prev=rawFn(prevA);
            text+=trendArrow(curr,prev,goodDir);
          }
        }
        return td(text);
      }).join('');
      return '<tr><td style="color:#1F1F1D; border-bottom:0.5px solid #F0EEE5;">'+label+'</td>'+cells+'</tr>';
    }).join('');
    return exportBtn(tableId,filename)+'<div class="table-scroll"><table id="'+tableId+'">'+head+body+'</table></div>';
  }

  // ---------- Inventory accuracy ----------
  function accAgg(month,fRegion,fBrand){
    var rows=seriesFor(ACC,month,fRegion,fBrand);
    if(!rows.length) return null;
    return {
      raw:avgNumeric(rows.map(function(r){return r[3];})),
      bridged:avgNumeric(rows.map(function(r){return r[4];})),
      discUnits:rows.reduce(function(a,r){return a+r[5];},0),
      discValue:rows.reduce(function(a,r){return a+r[6];},0),
      adjUnits:rows.reduce(function(a,r){return a+r[7];},0),
      adjValue:rows.reduce(function(a,r){return a+r[8];},0)
    };
  }
  var ACC_ROWS=[
    ['Raw inventory-system accuracy %',function(a){return fmtPct(a.raw);},function(a){return a.raw;},'higher'],
    ['Bridged inventory-system accuracy %',function(a){return fmtPct(a.bridged);},function(a){return a.bridged;},'higher'],
    ['Absolute unexplainable discrepancy units',function(a){return fmtN(a.discUnits,0);},function(a){return a.discUnits;},'lower'],
    ['Absolute unexplainable discrepancy value',function(a){return fmtCur(a.discValue,'$');},function(a){return a.discValue;},'lower'],
    ['Net inventory adjustment units (all reasons)',function(a){return fmtN(a.adjUnits,0);},function(a){return a.adjUnits;},'abs'],
    ['Net inventory adjustment value (all reasons)',function(a){return fmtCur(a.adjValue,'$');},function(a){return a.adjValue;},'abs']
  ];

  // ---------- Inventory valuation ----------
  function valAgg(month,fRegion,fBrand){
    var rows=seriesFor(VAL,month,fRegion,fBrand);
    if(!rows.length) return null;
    return {units:rows.reduce(function(a,r){return a+r[3];},0),value:rows.reduce(function(a,r){return a+r[4];},0),above180Units:rows.reduce(function(a,r){return a+(r[7]||0);},0),above180Value:rows.reduce(function(a,r){return a+(r[8]||0);},0)};
  }
  var VAL_ROWS=[
    ['Total inventory units',function(a){return fmtN(a.units,0);},function(a){return a.units;},null],
    ['Total inventory value',function(a){return fmtCur(a.value,'$');},function(a){return a.value;},null],
    ['Above 180 days units',function(a){return a.above180Units?fmtN(a.above180Units,0):'–';},function(a){return a.above180Units||null;},'lower'],
    ['Above 180 days value',function(a){return a.above180Value?fmtCur(a.above180Value,'$'):'–';},function(a){return a.above180Value||null;},'lower']
  ];

  // ---------- Warehouse costs ----------
  function costsAgg(month,fRegion,fBrand){
    var rows=seriesFor(COSTS,month,fRegion,fBrand);
    if(!rows.length) return null;
    var conv=rows.map(function(r){
      var curr=r[3];
      return {
        storage:toUSD(r[4],curr,month),
        inbound:toUSD(r[5],curr,month),
        outbound:toUSD(r[6],curr,month),
        kitting:toUSD(r[7],curr,month),
        disposal:toUSD(r[8],curr,month),
        costPerOrder:toUSD(r[9],curr,month),
        costPerCartonShip:toUSD(r[10],curr,month),
        costPerCartonRecv:toUSD(r[11],curr,month),
        costPerKit:toUSD(r[12],curr,month),
        creditsRecovered:toUSD(r[13],curr,month)
      };
    });
    return {
      sym:'$',
      storage:conv.reduce(function(a,c){return a+(c.storage||0);},0),
      inbound:conv.reduce(function(a,c){return a+(c.inbound||0);},0),
      outbound:conv.reduce(function(a,c){return a+(c.outbound||0);},0),
      kitting:conv.reduce(function(a,c){return a+(c.kitting||0);},0),
      disposal:conv.reduce(function(a,c){return a+(c.disposal||0);},0),
      costPerOrder:avgNumeric(conv.map(function(c){return c.costPerOrder;})),
      costPerCartonShip:avgNumeric(conv.map(function(c){return c.costPerCartonShip;})),
      costPerCartonRecv:avgNumeric(conv.map(function(c){return c.costPerCartonRecv;})),
      costPerKit:avgNumeric(conv.map(function(c){return c.costPerKit;})),
      creditsRecovered:conv.reduce(function(a,c){return a+(c.creditsRecovered||0);},0)
    };
  }
  var COSTS_ROWS=[
    ['Storage cost',function(a){return fmtCur(a.storage,'$');},function(a){return a.storage;},'lower'],
    ['Inbound handling cost',function(a){return fmtCur(a.inbound,'$');},function(a){return a.inbound;},'lower'],
    ['Outbound handling cost',function(a){return fmtCur(a.outbound,'$');},function(a){return a.outbound;},'lower'],
    ['Kitting cost',function(a){return fmtCur(a.kitting,'$');},function(a){return a.kitting;},'lower'],
    ['Disposal cost',function(a){return fmtCur(a.disposal,'$');},function(a){return a.disposal;},'lower'],
    ['Cost per order shipped',function(a){return fmtCur(a.costPerOrder,'$');},function(a){return a.costPerOrder;},'lower'],
    ['Cost per carton shipped',function(a){return fmtCur(a.costPerCartonShip,'$');},function(a){return a.costPerCartonShip;},'lower'],
    ['Cost per carton received',function(a){return fmtCur(a.costPerCartonRecv,'$');},function(a){return a.costPerCartonRecv;},'lower'],
    ['Cost per kit produced',function(a){return fmtCur(a.costPerKit,'$');},function(a){return a.costPerKit;},'lower'],
    ['3PL credits recovered',function(a){return fmtCur(a.creditsRecovered,'$');},function(a){return a.creditsRecovered;},'higher']
  ];
  var COSTS_STACK_DEFS=[
    {key:'storage',label:'Storage',color:'#089AA0'},
    {key:'inbound',label:'Inbound handling',color:'#045458'},
    {key:'outbound',label:'Outbound handling',color:'#EF9F27'},
    {key:'kitting',label:'Kitting',color:'#7A5AF8'},
    {key:'disposal',label:'Disposal',color:'#C0392B'}
  ];
  var COST_LINE_DEFS=[
    {key:'costPerOrder',label:'Cost per order shipped',color:'#089AA0'},
    {key:'costPerCartonShip',label:'Cost per carton shipped',color:'#7A5AF8'},
    {key:'costPerCartonRecv',label:'Cost per carton received',color:'#B4531F'},
    {key:'costPerKit',label:'Cost per kit produced',color:'#3B6D11'}
  ];
  var costsLineFilter={costPerOrder:true,costPerCartonShip:true,costPerCartonRecv:true,costPerKit:true};

  function fxScopeNote(){
    return scopeNote('Amounts converted to USD using mid-market FX rates as of the last business day of each month: Jun 2026 — 1 GBP = $1.3260, 1 EUR = $1.1394 · Jul 2026 — 1 GBP = $1.3481, 1 EUR = $1.1537. Kitting, disposal, and cost-per-kit figures currently read $0 across every brand/region — no kitting activity has come through your export yet.');
  }
  function costTypePillsRow(){
    return '<div style="display:flex; align-items:center; gap:7px; flex-wrap:wrap; margin-bottom:10px;">'+
      '<span style="font-size:11px; font-weight:600; color:#9A988F; letter-spacing:0.02em;">COST TYPE</span>'+
      COST_LINE_DEFS.map(function(d){
        return '<span class="filter-pill'+(costsLineFilter[d.key]?' active':'')+'" data-costtype="'+d.key+'">'+d.label+'</span>';
      }).join('')+
    '</div>';
  }
  function drawCostsStack(id,labels,seriesDefs){
    var el=document.getElementById(id);
    if(!el||typeof Chart==='undefined') return;
    var ctx=el.getContext('2d');
    var datasets=seriesDefs.map(function(s){return {label:s.label,data:s.data,backgroundColor:s.color,stack:'costs',borderRadius:2,maxBarThickness:56};});
    var c=new Chart(ctx,{
      type:'bar',
      data:{labels:labels,datasets:datasets},
      options:{
        responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:10,font:{size:10.5},color:'#6B6A63'}},tooltip:{backgroundColor:'#2C2C2A',padding:8,cornerRadius:6,callbacks:{label:function(c){return c.dataset.label+': $'+Math.abs(c.parsed.y).toLocaleString(undefined,{maximumFractionDigits:0});}}}},
        scales:{
          x:{stacked:true,grid:{display:false},ticks:{color:'#9A988F',font:{size:10}}},
          y:{stacked:true,grid:{color:'#F0EEE5'},ticks:{color:'#9A988F',font:{size:10},callback:function(v){return '$'+v.toLocaleString();}}}
        }
      }
    });
    chartInstances.push(c);
  }
  function drawCostsLines(id,labels,seriesDefs){
    var el=document.getElementById(id);
    if(!el||typeof Chart==='undefined') return;
    var ctx=el.getContext('2d');
    var datasets=seriesDefs.map(function(s){return {label:s.label,data:s.data,borderColor:s.color,backgroundColor:s.color+'22',tension:0.3,pointRadius:3,borderWidth:2,spanGaps:true};});
    var c=new Chart(ctx,{
      type:'line',
      data:{labels:labels,datasets:datasets},
      options:{
        responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:10,font:{size:10.5},color:'#6B6A63'}},tooltip:{backgroundColor:'#2C2C2A',padding:8,cornerRadius:6}},
        scales:{
          x:{grid:{display:false},ticks:{color:'#9A988F',font:{size:10}}},
          y:{grid:{color:'#F0EEE5'},ticks:{color:'#9A988F',font:{size:10},callback:function(v){return '$'+v.toFixed(2);}}}
        }
      }
    });
    chartInstances.push(c);
  }

  function drawSvcCombo(id,labels,timeLabel,timeV,timeColor,targetLabel,targetV){
    var el=document.getElementById(id);
    if(!el||typeof Chart==='undefined') return;
    var ctx=el.getContext('2d');
    var c=new Chart(ctx,{
      data:{labels:labels,datasets:[
        {type:'line',label:timeLabel,data:timeV,borderColor:timeColor,backgroundColor:timeColor+'22',tension:0.3,pointRadius:4,borderWidth:2,spanGaps:true},
        {type:'line',label:targetLabel,data:targetV,borderColor:'#B4531F',backgroundColor:'#B4531F22',borderDash:[5,3],tension:0,pointRadius:3,borderWidth:2,spanGaps:true}
      ]},
      options:{
        responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:10,font:{size:10.5},color:'#6B6A63'}},tooltip:{backgroundColor:'#2C2C2A',padding:8,cornerRadius:6}},
        scales:{
          x:{grid:{display:false},ticks:{color:'#9A988F',font:{size:10}}},
          y:{grid:{color:'#F0EEE5'},ticks:{color:'#9A988F',font:{size:10},callback:function(v){return v.toFixed(2)+'d';}}}
        }
      }
    });
    chartInstances.push(c);
  }

  // ---------- Service levels ----------
  function svcAgg(month,fRegion,fBrand){
    var rows=seriesFor(SVC,month,fRegion,fBrand);
    if(!rows.length) return null;
    return {avgShip:avgNumeric(rows.map(function(r){return r[3];})),avgReceive:avgNumeric(rows.map(function(r){return r[4];}))};
  }
  var SVC_ROWS=[
    ['Average order-to-ship time (days)',function(a){return a.avgShip===null?'–':fmtN(a.avgShip,2);},function(a){return a.avgShip;},'lower'],
    ['Average inbound receiving time (days)',function(a){return a.avgReceive===null?'–':fmtN(a.avgReceive,2);},function(a){return a.avgReceive;},'lower']
  ];

  // ---------- SLA target-days lookup (used to compare actual days vs. the SLA's own day target, not a % roll-up) ----------
  function extractTargetDays(str){
    if(typeof str!=='string') return null;
    var m=/(\d+(?:\.\d+)?)\s*(?:business|working)?\s*days?\b/i.exec(str);
    return m?parseFloat(m[1]):null;
  }
  function pickTargetDays(metrics){
    for(var i=0;i<metrics.length;i++){
      var d=metrics[i].days!=null?metrics[i].days:extractTargetDays(metrics[i].target);
      if(d!=null) return d;
    }
    return null;
  }
  var SVC_RECEIVE_PATTERN=/receiv|dock-to-stock|inbound/i;
  function svcTargetDaysForWarehouse(wh,kind){
    var spec=SLA_SPECS[wh];
    if(!spec) return null;
    if(kind==='receive'){
      return pickTargetDays(spec.metrics.filter(function(mm){return SVC_RECEIVE_PATTERN.test(mm.label);}));
    }
    // Ship/outbound: prefer metrics explicitly labeled "outbound" (most specific), and never
    // fall back onto an "inbound"/"dispatch"-adjacent receiving metric like "Inbound processing (ready to dispatch)".
    var outbound=spec.metrics.filter(function(mm){return /outbound/i.test(mm.label);});
    var d=pickTargetDays(outbound);
    if(d!=null) return d;
    var fallback=spec.metrics.filter(function(mm){return /dispatch|\bship\b/i.test(mm.label)&&!/inbound/i.test(mm.label);});
    return pickTargetDays(fallback);
  }
  function svcTargetDaysLine(fRegion,fBrand,kind){
    var whs=slaWarehousesForRegionBrand(fRegion,fBrand);
    var vals=whs.map(function(wh){return svcTargetDaysForWarehouse(wh,kind);});
    var avg=avgNumeric(vals);
    return MONTHS.map(function(){return avg;});
  }

  function drawClaimsCombo(id,labels,filedV,rateV){
    var el=document.getElementById(id);
    if(!el||typeof Chart==='undefined') return;
    var ctx=el.getContext('2d');
    var c=new Chart(ctx,{
      data:{labels:labels,datasets:[
        {type:'bar',label:'Claims filed value ($)',data:filedV,backgroundColor:'#E24B4A',yAxisID:'y',borderRadius:4,barPercentage:0.5,order:2},
        {type:'line',label:'Claims recovery rate (%)',data:rateV,borderColor:'#3B6D11',backgroundColor:'#3B6D1122',tension:0.3,pointRadius:4,borderWidth:2,yAxisID:'y1',spanGaps:true,order:1}
      ]},
      options:{
        responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:10,font:{size:10.5},color:'#6B6A63'}},tooltip:{backgroundColor:'#2C2C2A',padding:8,cornerRadius:6}},
        scales:{
          x:{grid:{display:false},ticks:{color:'#9A988F',font:{size:10}}},
          y:{position:'left',grid:{color:'#F0EEE5'},ticks:{color:'#9A988F',font:{size:10},callback:function(v){return '$'+Math.round(v).toLocaleString();}}},
          y1:{position:'right',min:0,max:100,grid:{drawOnChartArea:false},ticks:{color:'#9A988F',font:{size:10},callback:function(v){return v.toFixed(2)+'%';}}}
        }
      }
    });
    chartInstances.push(c);
  }

  // ---------- Claims ----------
  function claimsAgg(month,fRegion,fBrand){
    var rows=seriesFor(CLAIMS,month,fRegion,fBrand);
    if(!rows.length) return null;
    return {filed:rows.reduce(function(a,r){return a+r[3];},0),recovered:rows.reduce(function(a,r){return a+r[4];},0),rate:avgNumeric(rows.map(function(r){return typeof r[5]==='number'?r[5]:null;}))};
  }
  var CLAIMS_ROWS=[
    ['Claims filed value',function(a){return fmtN(a.filed,2);},function(a){return a.filed;},'lower'],
    ['Claims recovered value',function(a){return fmtN(a.recovered,2);},function(a){return a.recovered;},'higher'],
    ['Claims recovery rate %',function(a){return a.rate===null?'–':(a.rate*100).toFixed(1)+'%';},function(a){return a.rate;},'higher']
  ];

  var CATEGORY={
    acc:{
      title:'Inventory accuracy',
      source:ACC,
      kpis:function(fRegion,fBrand){
        var lm=MONTHS[MONTHS.length-1];
        var a=accAgg(lm,fRegion,fBrand);
        if(!a) return '';
        return '<div style="display:flex; gap:12px; margin-bottom:16px;">'+
          statTile(fmtPct(a.bridged),'Bridged accuracy',lm,'#089AA0','#FFFFFF')+
          statTile(fmtCur(a.adjValue,'$'),'Net adjustment value',lm,(a.adjValue||0)>=0?'#3B6D11':'#C0392B','#FFFFFF')+
          statTile(fmtCur(a.discValue,'$'),'Unexplainable discrepancy',lm,'#2C2C2A','#FFFFFF')+
        '</div>';
      },
      table:function(fRegion,fBrand){
        return tableFromRows(ACC_ROWS,accAgg,fRegion,fBrand,'table-acc','Inventory_Accuracy.xlsx')+scopeNote('Only Big Fudge Vinyl reports for CA, UK, and EU so far — Cat Ladies and Encha data for those regions is coming soon.');
      },
      trends:function(){
        return trendsIntro()+'<div style="background:#FFFFFF; border:0.5px solid #E4E2D8; border-radius:8px; padding:14px 16px;">'+
          chartCardHeader('Accuracy % (left axis) vs. Net adjustment value (right axis)','Bars green = net positive adjustment, red = net negative','export-acc-combo')+
          '<div style="height:230px; margin-top:8px;"><canvas id="chart-acc-combo"></canvas></div></div>';
      },
      drawCharts:function(fRegion,fBrand){
        var kpis=MONTHS.map(function(m){return accAgg(m,fRegion,fBrand);});
        var rawV=kpis.map(function(k){return k?k.raw*100:null;});
        var bridgedV=kpis.map(function(k){return k?k.bridged*100:null;});
        var adjV=kpis.map(function(k){return k?k.adjValue:null;});
        drawAccCombo('chart-acc-combo',MONTHS,rawV,bridgedV,adjV);
        var btn=document.getElementById('export-acc-combo');
        if(btn) btn.addEventListener('click',function(){
          exportChartData('Inventory_Accuracy_Chart.xlsx','Accuracy',['Month','Raw accuracy (%)','Bridged accuracy (%)','Net adjustment value ($)'],
            MONTHS.map(function(m,i){return [m,rawV[i],bridgedV[i],adjV[i]];}));
        });
      }
    },
    val:{
      title:'Inventory valuation',
      source:VAL,
      kpis:function(fRegion,fBrand){
        var lm=MONTHS[MONTHS.length-1];
        var a=valAgg(lm,fRegion,fBrand);
        if(!a) return '';
        return '<div style="display:flex; gap:12px; margin-bottom:16px;">'+
          statTile(fmtCur(a.value,'$'),'Total inventory value',lm,'#2C2C2A','#FFFFFF')+
          statTile(fmtN(a.units,0),'Total inventory units',lm,'#089AA0','#FFFFFF')+
          statTile(a.above180Value?fmtCur(a.above180Value,'$'):'–','Value above 180 days',lm,'#E24B4A','#FFFFFF')+
        '</div>';
      },
      table:function(fRegion,fBrand){
        return tableFromRows(VAL_ROWS,valAgg,fRegion,fBrand,'table-val','Inventory_Valuation.xlsx')+scopeNote('"Above 180 days" is blank except Encha (US) — the rest of your export doesn\'t report it yet.');
      },
      trends:function(){
        return trendsIntro()+'<div style="background:#FFFFFF; border:0.5px solid #E4E2D8; border-radius:8px; padding:14px 16px;">'+
          chartCardHeader('Total inventory value vs. value above 180 days','Value above 180 days (red) is a subset of total inventory value (teal)','export-val-combo')+
          '<div style="height:230px; margin-top:8px;"><canvas id="chart-val-combo"></canvas></div></div>';
      },
      drawCharts:function(fRegion,fBrand){
        var kpis=MONTHS.map(function(m){return valAgg(m,fRegion,fBrand);});
        var totalV=kpis.map(function(k){return k?k.value:null;});
        var agedV=kpis.map(function(k){return k?k.above180Value:null;});
        drawValCombo('chart-val-combo',MONTHS,totalV,agedV);
        var btn=document.getElementById('export-val-combo');
        if(btn) btn.addEventListener('click',function(){
          exportChartData('Inventory_Valuation_Chart.xlsx','Valuation',['Month','Total inventory value ($)','Value above 180 days ($)'],
            MONTHS.map(function(m,i){return [m,totalV[i],agedV[i]];}));
        });
      }
    },
    costs:{
      title:'Warehouse costs',
      source:COSTS,
      kpis:function(fRegion,fBrand){
        var lm=MONTHS[MONTHS.length-1];
        var a=costsAgg(lm,fRegion,fBrand);
        if(!a) return '';
        var total=(a.storage||0)+(a.inbound||0)+(a.outbound||0)+(a.kitting||0)+(a.disposal||0);
        return '<div style="display:flex; gap:12px; margin-bottom:16px;">'+
          statTile(fmtCur(total,'$'),'Total warehouse costs',lm,'#2C2C2A','#FFFFFF')+
          statTile(fmtCur(a.creditsRecovered,'$'),'3PL credits recovered',lm,'#3B6D11','#FFFFFF')+
          statTile(a.costPerOrder!==null?fmtCur(a.costPerOrder,'$'):'–','Cost per order shipped',lm,'#089AA0','#FFFFFF')+
        '</div>';
      },
      table:function(fRegion,fBrand){
        return tableFromRows(COSTS_ROWS,costsAgg,fRegion,fBrand,'table-costs','Warehouse_Costs.xlsx')+fxScopeNote();
      },
      trends:function(fRegion,fBrand){
        return trendsIntro()+
          '<div style="background:#FFFFFF; border:0.5px solid #E4E2D8; border-radius:8px; padding:14px 16px; margin-bottom:14px;">'+
            chartCardHeader('Cost breakdown by month','Storage, handling, kitting &amp; disposal costs stack above the line; 3PL credits recovered shown below','export-costs-stack')+
            '<div style="height:260px; margin-top:8px;"><canvas id="chart-costs-stack"></canvas></div>'+
          '</div>'+
          '<div style="background:#FFFFFF; border:0.5px solid #E4E2D8; border-radius:8px; padding:14px 16px;">'+
            chartCardHeader('Per-unit cost trends','', 'export-costs-lines')+
            costTypePillsRow()+
            '<div style="height:220px;"><canvas id="chart-costs-lines"></canvas></div>'+
          '</div>'+
          fxScopeNote();
      },
      drawCharts:function(fRegion,fBrand){
        var kpis=MONTHS.map(function(m){return costsAgg(m,fRegion,fBrand);});
        var stackSeries=COSTS_STACK_DEFS.map(function(d){
          return {label:d.label,color:d.color,data:kpis.map(function(k){return k?k[d.key]:null;})};
        });
        stackSeries.push({label:'3PL credits recovered',color:'#3B6D11',data:kpis.map(function(k){return k?-(k.creditsRecovered||0):null;})});
        drawCostsStack('chart-costs-stack',MONTHS,stackSeries);

        var lineSeries=COST_LINE_DEFS.filter(function(d){return costsLineFilter[d.key];}).map(function(d){
          return {label:d.label,color:d.color,data:kpis.map(function(k){return k?k[d.key]:null;})};
        });
        drawCostsLines('chart-costs-lines',MONTHS,lineSeries);

        document.querySelectorAll('.filter-pill[data-costtype]').forEach(function(el){
          el.addEventListener('click',function(){
            costsLineFilter[el.getAttribute('data-costtype')]=!costsLineFilter[el.getAttribute('data-costtype')];
            renderCategoryPage('costs');
          });
        });

        var stackBtn=document.getElementById('export-costs-stack');
        if(stackBtn) stackBtn.addEventListener('click',function(){
          exportChartData('Warehouse_Costs_Breakdown.xlsx','Cost breakdown',['Month'].concat(stackSeries.map(function(s){return s.label;})),
            MONTHS.map(function(m,i){return [m].concat(stackSeries.map(function(s){return s.data[i];}));}));
        });
        var linesBtn=document.getElementById('export-costs-lines');
        if(linesBtn) linesBtn.addEventListener('click',function(){
          exportChartData('Warehouse_Costs_PerUnit.xlsx','Per-unit costs',['Month'].concat(lineSeries.map(function(s){return s.label;})),
            MONTHS.map(function(m,i){return [m].concat(lineSeries.map(function(s){return s.data[i];}));}));
        });
      }
    },
    svc:{
      title:'Service levels',
      source:SVC,
      kpis:function(fRegion,fBrand){
        var lm=MONTHS[MONTHS.length-1];
        var a=svcAgg(lm,fRegion,fBrand);
        if(!a) return '';
        var slaV=svcSlaLine(fRegion,fBrand);
        var latestSla=slaV[slaV.length-1];
        return '<div style="display:flex; gap:12px; margin-bottom:16px;">'+
          statTile(a.avgShip!==null?fmtN(a.avgShip,2)+'d':'–','Avg order-to-ship time',lm,'#7A5AF8','#FFFFFF')+
          statTile(a.avgReceive!==null?fmtN(a.avgReceive,2)+'d':'–','Avg inbound receiving time',lm,'#3B6D11','#FFFFFF')+
          statTile(typeof latestSla==='number'?Math.round(latestSla)+'%':'–','SLA compliance',lm,'#B4531F','#FFFFFF')+
        '</div>';
      },
      table:function(fRegion,fBrand){
        return tableFromRows(SVC_ROWS,svcAgg,fRegion,fBrand,'table-svc','Service_Levels.xlsx')+scopeNote('Real figures from your Service levels tab.');
      },
      trends:function(){
        return trendsIntro()+
          '<div style="background:#FFFFFF; border:0.5px solid #E4E2D8; border-radius:8px; padding:14px 16px; margin-bottom:14px;">'+
            chartCardHeader('Avg order-to-ship time vs. SLA target','Days — our actual average vs. the SLA\'s own day target (dashed)','export-svc-ship')+
            '<div style="height:210px; margin-top:8px;"><canvas id="chart-svc-ship"></canvas></div>'+
          '</div>'+
          '<div style="background:#FFFFFF; border:0.5px solid #E4E2D8; border-radius:8px; padding:14px 16px;">'+
            chartCardHeader('Avg inbound receiving time vs. SLA target','Days — our actual average vs. the SLA\'s own day target (dashed)','export-svc-receive')+
            '<div style="height:210px; margin-top:8px;"><canvas id="chart-svc-receive"></canvas></div>'+
          '</div>';
      },
      drawCharts:function(fRegion,fBrand){
        var kpis=MONTHS.map(function(m){return svcAgg(m,fRegion,fBrand);});
        var shipV=kpis.map(function(k){return k?k.avgShip:null;});
        var recV=kpis.map(function(k){return k?k.avgReceive:null;});
        var shipTargetV=svcTargetDaysLine(fRegion,fBrand,'ship');
        var recTargetV=svcTargetDaysLine(fRegion,fBrand,'receive');
        drawSvcCombo('chart-svc-ship',MONTHS,'Avg order-to-ship time (days)',shipV,'#7A5AF8','SLA target (days)',shipTargetV);
        drawSvcCombo('chart-svc-receive',MONTHS,'Avg inbound receiving time (days)',recV,'#3B6D11','SLA target (days)',recTargetV);
        var shipBtn=document.getElementById('export-svc-ship');
        if(shipBtn) shipBtn.addEventListener('click',function(){
          exportChartData('Service_Levels_Ship.xlsx','Order-to-ship',['Month','Avg order-to-ship time (days)','SLA target (days)'],
            MONTHS.map(function(m,i){return [m,shipV[i],shipTargetV[i]];}));
        });
        var recBtn=document.getElementById('export-svc-receive');
        if(recBtn) recBtn.addEventListener('click',function(){
          exportChartData('Service_Levels_Receive.xlsx','Inbound receiving',['Month','Avg inbound receiving time (days)','SLA target (days)'],
            MONTHS.map(function(m,i){return [m,recV[i],recTargetV[i]];}));
        });
      }
    },
    claims:{
      title:'Claims',
      source:CLAIMS,
      kpis:function(fRegion,fBrand){
        var lm=MONTHS[MONTHS.length-1];
        var a=claimsAgg(lm,fRegion,fBrand);
        if(!a) return '';
        return '<div style="display:flex; gap:12px; margin-bottom:16px;">'+
          statTile(fmtN(a.filed,2),'Claims filed value',lm,'#E24B4A','#FFFFFF')+
          statTile(fmtN(a.recovered,2),'Claims recovered value',lm,'#3B6D11','#FFFFFF')+
          statTile(a.rate!==null?(a.rate*100).toFixed(1)+'%':'–','Claims recovery rate',lm,'#2C2C2A','#FFFFFF')+
        '</div>';
      },
      table:function(fRegion,fBrand){
        return tableFromRows(CLAIMS_ROWS,claimsAgg,fRegion,fBrand,'table-claims','Claims.xlsx')+scopeNote('Real figures from your Claims tab.');
      },
      trends:function(){
        return trendsIntro()+'<div style="background:#FFFFFF; border:0.5px solid #E4E2D8; border-radius:8px; padding:14px 16px;">'+
          chartCardHeader('Claims filed value vs. recovery rate','Filed value (left axis, bars) · Recovery rate % (right axis, line)','export-claims-combo')+
          '<div style="height:230px; margin-top:8px;"><canvas id="chart-claims-combo"></canvas></div></div>';
      },
      drawCharts:function(fRegion,fBrand){
        var kpis=MONTHS.map(function(m){return claimsAgg(m,fRegion,fBrand);});
        var recV=kpis.map(function(k){return k&&k.rate!==null?k.rate*100:null;});
        var filedV=kpis.map(function(k){return k?k.filed:null;});
        drawClaimsCombo('chart-claims-combo',MONTHS,filedV,recV);
        var btn=document.getElementById('export-claims-combo');
        if(btn) btn.addEventListener('click',function(){
          exportChartData('Claims_Chart.xlsx','Claims',['Month','Claims filed value ($)','Claims recovery rate (%)'],
            MONTHS.map(function(m,i){return [m,filedV[i],recV[i]];}));
        });
      }
    }
  };

  function renderCategoryPage(tab){
    var fs=filterState[tab];
    var kpiHtml=CATEGORY[tab].kpis?CATEGORY[tab].kpis(fs.region,fs.brand):'';
    var filtersHtml=renderCatFilters(tab);
    var subTabHtml=renderSubTabs(tab);
    var showOverview=subTabState[tab]==='overview';
    var match=hasAnyMatch(CATEGORY[tab].source,fs.region,fs.brand);
    var bodyHtml=showOverview?(match?CATEGORY[tab].trends(fs.region,fs.brand):noDataCallout()):comingSoonPanel();
    document.getElementById('content-host').innerHTML=kpiHtml+filtersHtml+subTabHtml+bodyHtml;
    document.querySelectorAll('.filter-pill[data-kind]').forEach(function(el){
      el.addEventListener('click',function(){
        var kind=el.getAttribute('data-kind'),val=el.getAttribute('data-value');
        filterState[tab][kind]=val;
        if(kind==='region'){
          var allowed=brandsForRegion(val);
          if(filterState[tab].brand!=='All'&&allowed.indexOf(filterState[tab].brand)===-1){
            filterState[tab].brand='All';
          }
        }
        renderCategoryPage(tab);
      });
    });
    bindSubTabHandlers(tab,function(){ renderCategoryPage(tab); });
    destroyCharts();
    if(showOverview&&match&&CATEGORY[tab].drawCharts) CATEGORY[tab].drawCharts(fs.region,fs.brand);
  }

  function renderAging(){
    var tiles='<div style="display:flex; gap:12px; margin-bottom:16px;">'+
      statTile('5,750','Units above 180 days','Encha · US, unchanged Jun–Jul','#E24B4A','#FFFFFF')+
      statTile('$52,588.80','Value above 180 days','Encha · US','#2C2C2A','#FFFFFF')+
      statTile('0','Brands reporting elsewhere','CA, UK, EU, or other US brands','#B4B2A9','#FFFFFF')+
      '</div>';
    var head='<tr>'+th('Metric','left')+th('Value')+th('Scope','left')+'</tr>';
    var rows=[
      ['Units above 180 days','5,750','Encha · US, unchanged Jun–Jul'],
      ['Value above 180 days','$52,588.80','Encha · US']
    ];
    var body=rows.map(function(r){
      return '<tr><td style="color:#1F1F1D; border-bottom:0.5px solid #F0EEE5;">'+r[0]+'</td>'+td(r[1])+'<td style="text-align:left; color:#6B6A63; font-size:11px; border-bottom:0.5px solid #F0EEE5;">'+r[2]+'</td></tr>';
    }).join('');
    var tableHtml=exportBtn('table-aging','Aging_Inventory.xlsx')+'<div class="table-scroll"><table id="table-aging">'+head+body+'</table></div>';
    var note='<div style="background:#F1EFE8; border-radius:8px; padding:16px; font-size:13px; color:#6B6A63; max-width:640px; margin-top:14px;">Only Encha (US) has aging inventory reported so far, and only the "above 180 days" bucket — SKU count above 180 days and units expiring within 120 days are coming soon for every brand and region, and above-180-day figures for Big Fudge Vinyl, Cat Ladies, and the CA/UK/EU warehouses are coming soon too.</div>';
    var subTabHtml=renderSubTabs('aging');
    var showOverview=subTabState.aging==='overview';
    var bodyHtml=showOverview?(tableHtml+note):comingSoonPanel();
    document.getElementById('content-host').innerHTML=tiles+subTabHtml+bodyHtml;
    bindSubTabHandlers('aging',renderAging);
  }

  function renderInventoryValue(){
    var fs=filterState.value;
    var lm=MONTHS[MONTHS.length-1];
    var latest=valAgg(lm,fs.region,fs.brand);
    var kpiHtml=latest?('<div style="display:flex; gap:12px; margin-bottom:16px;">'+
      statTile(fmtCur(latest.value,'$'),'Total inventory value',lm,'#2C2C2A','#FFFFFF')+
      statTile(fmtN(latest.units,0),'Total inventory units',lm,'#089AA0','#FFFFFF')+
      statTile(latest.above180Value?fmtCur(latest.above180Value,'$'):'–','Value above 180 days',lm,'#E24B4A','#FFFFFF')+
    '</div>'):'';
    var filtersHtml=renderCatFilters('value');
    var subTabHtml=renderSubTabs('value');
    var showOverview=subTabState.value==='overview';
    var match=hasAnyMatch(VAL,fs.region,fs.brand);
    var bodyHtml=showOverview?(match?(trendsIntro()+'<div style="background:#FFFFFF; border:0.5px solid #E4E2D8; border-radius:8px; padding:14px 16px;">'+
      chartCardHeader('Units vs. value by month','Each bar splits into a normal (base color) segment and an above-180-days (red) segment · Units (right axis) · Value (left axis, $)','export-value-bars')+
      '<div style="height:280px; margin-top:8px;"><canvas id="chart-value-bars"></canvas></div></div>'):noDataCallout()):comingSoonPanel();
    document.getElementById('content-host').innerHTML=kpiHtml+filtersHtml+subTabHtml+bodyHtml;
    document.querySelectorAll('.filter-pill[data-kind]').forEach(function(el){
      el.addEventListener('click',function(){
        var kind=el.getAttribute('data-kind'),val=el.getAttribute('data-value');
        filterState.value[kind]=val;
        if(kind==='region'){
          var allowed=brandsForRegion(val);
          if(filterState.value.brand!=='All'&&allowed.indexOf(filterState.value.brand)===-1){
            filterState.value.brand='All';
          }
        }
        renderInventoryValue();
      });
    });
    bindSubTabHandlers('value',renderInventoryValue);
    destroyCharts();
    if(showOverview&&match){
      var kpis=MONTHS.map(function(m){return valAgg(m,fs.region,fs.brand);});
      var unitsNormalV=kpis.map(function(k){return k?(k.units-(k.above180Units||0)):null;});
      var unitsAgedV=kpis.map(function(k){return k?(k.above180Units||0):null;});
      var valueNormalV=kpis.map(function(k){return k?(k.value-(k.above180Value||0)):null;});
      var valueAgedV=kpis.map(function(k){return k?(k.above180Value||0):null;});
      drawValueBars('chart-value-bars',MONTHS,unitsNormalV,unitsAgedV,valueNormalV,valueAgedV);
      var btn=document.getElementById('export-value-bars');
      if(btn) btn.addEventListener('click',function(){
        exportChartData('Inventory_Value_Bars.xlsx','Inventory value',['Month','Units (normal)','Units (above 180d)','Value ($, normal)','Value ($, above 180d)'],
          MONTHS.map(function(m,i){return [m,unitsNormalV[i],unitsAgedV[i],valueNormalV[i],valueAgedV[i]];}));
      });
    }
  }

  var SLA_US_MONTHLY=[["November 2025", "Big Fudge Vinyl", "No data", "No data", "No data", 0.6363636363636364, 3.727272727272727, -0.27272727272727293, "No data", "No data", "No data"], ["November 2025", "Cat Ladies", 0.8333333333333334, 2.3333333333333335, -1.6666666666666665, 0.5217391304347826, 4.826086956521739, 0.8260869565217392, "No data", "No data", "No data"], ["November 2025", "Encha", "No data", "No data", "No data", 1, 0, -4, "No data", "No data", "No data"], ["November 2025", "Total", 0.8333333333333334, 2.3333333333333335, -1.6666666666666665, 0.5666666666666667, 4.383333333333334, 0.38333333333333375, "No data", "No data", "No data"], ["December 2025", "Big Fudge Vinyl", 0.6666666666666666, 3, -1, 0.7857142857142857, 3.2142857142857144, -0.7857142857142856, "No data", "No data", "No data"], ["December 2025", "Cat Ladies", 0.45, 4.5, 0.5, 0.43, 5.39, 1.3899999999999997, "No data", "No data", "No data"], ["December 2025", "Encha", "No data", "No data", "No data", 0.6, 4.2, 0.20000000000000018, "No data", "No data", "No data"], ["December 2025", "Total", 0.4782608695652174, 4.304347826086956, 0.3043478260869561, 0.4838709677419355, 5.048387096774194, 1.048387096774194, "No data", "No data", "No data"], ["January 2026", "Big Fudge Vinyl", 0.75, 4.5, 0.5, 0.8, 3.2, -0.7999999999999998, "No data", "No data", "No data"], ["January 2026", "Cat Ladies", 0.8, 3.4, -0.6000000000000001, 0.926829268292683, 2.7560975609756095, -1.2439024390243905, "No data", "No data", "No data"], ["January 2026", "Encha", 0, 11, 7, "No data", "No data", "No data", "No data", "No data", "No data"], ["January 2026", "Total", 0.7333333333333333, 4.2, 0.20000000000000018, 0.8852459016393442, 2.901639344262295, -1.098360655737705, "No data", "No data", "No data"], ["February 2026", "Big Fudge Vinyl", "No data", "No data", "No data", 0.5454545454545454, 5.303030303030303, 1.3030303030303028, "No data", "No data", "No data"], ["February 2026", "Cat Ladies", 0.7333333333333333, 10.933333333333334, 6.933333333333334, 0.5291828793774319, 5.116731517509727, 1.1167315175097272, "No data", "No data", "No data"], ["February 2026", "Encha", 1, 0.3333333333333333, -3.6666666666666665, 0.6, 5.2, 1.2000000000000002, "No data", "No data", "No data"], ["February 2026", "Total", 0.7777777777777778, 9.166666666666666, 5.166666666666666, 0.5322033898305085, 5.138983050847457, 1.1389830508474574, "No data", "No data", "No data"], ["March 2026", "Big Fudge Vinyl", 1, 1.1111111111111112, -2.888888888888889, 0.6875, 3.4375, -0.5625, "No data", "No data", "No data"], ["March 2026", "Cat Ladies", 0.8333333333333334, 5.777777777777778, 1.7777777777777777, 0.6925795053003534, 3.8091872791519434, -0.19081272084805656, "No data", "No data", "No data"], ["March 2026", "Encha", 1, 0.6666666666666666, -3.3333333333333335, 0.6923076923076923, 3.3846153846153846, -0.6153846153846154, "No data", "No data", "No data"], ["March 2026", "Total", 0.9, 3.8666666666666667, -0.1333333333333333, 0.6923076923076923, 3.7724358974358974, -0.22756410256410264, "No data", "No data", "No data"], ["April 2026", "Big Fudge Vinyl", 1, 2, -2, 0.14285714285714285, 5.142857142857143, 1.1428571428571432, "No data", "No data", "No data"], ["April 2026", "Cat Ladies", 0.6875, 4.0625, 0.0625, 0.8982035928143712, 3.5748502994011977, -0.4251497005988023, "No data", "No data", "No data"], ["April 2026", "Encha", 1, 0, -4, 0.8333333333333334, 1.5, -2.5, 0.9411764705882353, 0.7254901960784313, -0.27450980392156865], ["April 2026", "Total", 0.782608695652174, 3.0869565217391304, -0.9130434782608696, 0.8666666666666667, 3.566666666666667, -0.4333333333333331, 0.9411764705882353, "No data", "No data"], ["May 2026", "Big Fudge Vinyl", 1, 0.25, -3.75, 0.8571428571428571, 2.2857142857142856, -1.7142857142857144, "No data", "No data", "No data"], ["May 2026", "Cat Ladies", 0.9545454545454546, 0.45454545454545453, -3.5454545454545454, 0.9454545454545454, 1.3454545454545455, -2.6545454545454543, "No data", "No data", "No data"], ["May 2026", "Encha", 1, 0.25, -3.75, 0.3333333333333333, 5, 1, 0.9107142857142857, 0.8125, -0.1875], ["May 2026", "Total", 0.9666666666666667, 0.4, -3.6, 0.9076923076923077, 1.6153846153846154, -2.3846153846153846, 0.9107142857142857, "No data", "No data"], ["June 2026", "Big Fudge Vinyl", 1, 1.0909090909090908, -2.909090909090909, 0.16666666666666666, 5, 1, "No data", "No data", "No data"], ["June 2026", "Cat Ladies", 0.9230769230769231, 0.9230769230769231, -3.0769230769230766, 0.7368421052631579, 2.3947368421052633, -1.6052631578947367, "No data", "No data", "No data"], ["June 2026", "Encha", 0.6666666666666666, 1.6666666666666667, -2.333333333333333, 1, 2, -2, 0.875, 0.875, -0.125], ["June 2026", "Total", 0.9259259259259259, 1.0740740740740742, -2.9259259259259256, 0.6739130434782609, 2.717391304347826, -1.2826086956521738, 0.875, "No data", "No data"], ["July 2026", "Big Fudge Vinyl", 1, 0, -4, 0.21428571428571427, 4.5, 0.5, "No data", "No data", "No data"], ["July 2026", "Cat Ladies", 1, 0.08333333333333333, -3.9166666666666665, 0.8333333333333334, 1.3571428571428572, -2.642857142857143, "No data", "No data", "No data"], ["July 2026", "Encha", 1, 0, -4, 0.5, 4, 0, 1, 0.33088235294117646, -0.6691176470588236], ["July 2026", "Total", 1, 0.058823529411764705, -3.9411764705882355, 0.6833333333333333, 2.2333333333333334, -1.7666666666666666, 1, "No data", "No data"]];
  var SLA_US_AGG=[["Past 9 Months (Nov25-Jul26)", "Big Fudge Vinyl", 1, 0, -4, 0.578125, 4.1015625, 0.1015625, "No data", "No data", "No data"], ["Past 9 Months (Nov25-Jul26)", "Cat Ladies", 0.7465753424657534, 3.6420091324200916, -0.3579908675799084, 0.6822157434402333, 3.9708454810495626, -0.029154518950437414, "No data", "No data", "No data"], ["Past 9 Months (Nov25-Jul26)", "Encha", 0.8888888888888888, 1.9365079365079367, -2.0634920634920633, 0.6666666666666666, 3.4166666666666665, -0.5833333333333335, 0.952513966480447, 0.6061452513966481, -0.3938547486033519], ["Past 9 Months (Nov25-Jul26)", "Total", 0.8034934497816594, 3.444761904761905, -0.5552380952380949, 0.6716541978387365, 3.9609310058187863, -0.03906899418121368, 0.952513966480447, 0.6061452513966481, -0.3938547486033519]];
  var SLA_CA=[["June 2026","Big Fudge Vinyl",1,1,-3,1,1,1.6667,-2.3333,"No data"],["July 2026","Big Fudge Vinyl",1,1.3333,-2.6667,1,1,3,-1,"No data"]];
  var SLA_UK=[["June 2026","Big Fudge Vinyl",0,7,3,"No data","No data","No data","No data","No data",1,2,-2,"No data","No data","No data","No data","No data"],["July 2026","Big Fudge Vinyl","No data","No data","No data","No data","No data","No data","No data","No data",1,4,0,"No data","No data","No data","No data","No data"]];
  var SLA_EU=[["June 2026","Big Fudge Vinyl","No data","No data","No data","No data","No data",0.5,"No data","No data",0.5,"No data","Insufficient data"],["July 2026","Big Fudge Vinyl","No data","No data",0.5,3.75,0.75,1,5,0,1,-1,"Insufficient data"]];

  var SLA_SPECS={
    US:{months:['November 2025','December 2025','January 2026','February 2026','March 2026','April 2026','May 2026','June 2026','July 2026'],
      brands:['Big Fudge Vinyl','Cat Ladies','Encha','Total'],
      metrics:[
        {label:'Receiving / dock-to-stock',target:'>=95% within 4 business days',kind:'triple',idx:2,dir:'min',t:95,days:4},
        {label:'B2B and FBA outbound',target:'>=95% within 4 business days',kind:'triple',idx:5,dir:'min',t:95,days:4},
        {label:'B2C outbound on-time',target:'>=99% same day / next business day',kind:'triple',idx:8,dir:'min',t:99,days:1}
      ]},
    CA:{months:['June 2026','July 2026'],brands:['Big Fudge Vinyl'],
      metrics:[
        {label:'Receiving / dock-to-stock',target:'>=95% within 4 business days',kind:'triple',idx:2,dir:'min',t:95,days:4},
        {label:'Discrepancy resolution time',target:'<=48 hours',kind:'single',idx:5,dir:'max',t:48,unit:'hours'},
        {label:'B2B and FBA outbound',target:'>=95% within 4 business days',kind:'triple',idx:6,dir:'min',t:95,days:4},
        {label:'B2C outbound on-time',target:'>=99% within 1 business day',kind:'single',idx:9,dir:'min',t:99}
      ]},
    UK:{months:['June 2026','July 2026'],brands:['Big Fudge Vinyl'],
      metrics:[
        {label:'Dock-to-stock',target:'>=95% within 4 business days',kind:'triple',idx:2,dir:'min',t:95,days:4},
        {label:'Urgent / cross-dock receiving',target:'>=99% within 2 business days',kind:'single',idx:5,dir:'min',t:99},
        {label:'Inbound slot confirmation',target:'100% within 7 business days',kind:'single',idx:6,dir:'min',t:100},
        {label:'Returns processing',target:'>=95% within 2 business days',kind:'single',idx:7,dir:'min',t:95},
        {label:'Discrepancy resolution time',target:'<24 hours',kind:'single',idx:8,dir:'max',t:24,unit:'hours'},
        {label:'Documentation accuracy (complaint rate)',target:'<=0.5% of orders',kind:'single',idx:9,dir:'max',t:0.5},
        {label:'FBA transfer orders',target:'>=95% within 4 business days',kind:'triple',idx:10,dir:'min',t:95,days:4},
        {label:'B2C outbound',target:'>=99% within 1 business day',kind:'single',idx:13,dir:'min',t:99},
        {label:'B2B outbound',target:'>=95% within 4 business days',kind:'single',idx:14,dir:'min',t:95},
        {label:'Last-mile shipping accuracy',target:'>=99.9% confirmed by Day 3',kind:'single',idx:15,dir:'min',t:99.9},
        {label:'System uptime (optional)',target:'>=99.985%',kind:'single',idx:16,dir:'min',t:99.985},
        {label:'API response time (optional)',target:'>=95% within 400ms',kind:'single',idx:17,dir:'min',t:95}
      ]},
    EU:{months:['June 2026','July 2026'],brands:['Big Fudge Vinyl'],
      metrics:[
        {label:'B2C same-day dispatch',target:'>=95% received by 1PM',kind:'single',idx:2,dir:'min',t:95},
        {label:'B2C next-day dispatch',target:'>=98% by following working day',kind:'single',idx:3,dir:'min',t:98},
        {label:'Inbound processing (ready to dispatch)',target:'~100% within 3 working days',kind:'triple',idx:4,dir:'min',t:98,days:3},
        {label:'B2B outbound (5 working days)',target:'>=95% received by 1PM',kind:'triple',idx:7,dir:'min',t:95,days:5},
        {label:'B2B outbound (6 working days)',target:'>=98%',kind:'double',idx:10,dir:'min',t:98},
        {label:'Inventory shrinkage',target:'<=1% of on-hand (annual)',kind:'single',idx:12,dir:'max',t:1}
      ]}
  };
  var SLA_DATA={US:{monthly:SLA_US_MONTHLY,agg:SLA_US_AGG},CA:{monthly:SLA_CA},UK:{monthly:SLA_UK},EU:{monthly:SLA_EU}};

  function pctOrRaw(v){return typeof v==='string'?v:(v*100);}

  function tierColors(ratio){
    if(ratio>=1.05) return {bg:'#FCE9B0',fg:'#7A5B00',label:'Best'};
    if(ratio>=1.0) return {bg:'#EAF3DE',fg:'#27500A',label:'Met'};
    if(ratio>=0.85) return {bg:'#FCF3D9',fg:'#8A6D1D',label:'Near'};
    return {bg:'#FCEBEB',fg:'#791F1F',label:'Below'};
  }
  function pctTier(pctVal,target,dir){
    if(typeof pctVal!=='number'||!target) return null;
    var ratio=dir==='min'?pctVal/target:(pctVal===0?0:target/pctVal);
    return tierColors(ratio);
  }
  function daysTier(avgDays,target){
    if(typeof avgDays!=='number'||!target) return null;
    var ratio=avgDays===0?1.1:target/avgDays;
    return tierColors(ratio);
  }
  function tierChip(t,text){
    if(!t) return '<span style="font-weight:600;">'+text+'</span>';
    return '<span style="background:'+t.bg+'; color:'+t.fg+'; padding:2px 8px; border-radius:6px; font-weight:600; font-size:10.5px; white-space:nowrap;">'+text+'</span>';
  }

  function slaLegend(){
    var items=[['Below Target',tierColors(0.5)],['Near Target',tierColors(0.9)],['Met',tierColors(1.0)],['Best',tierColors(1.1)]];
    return '<div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap; background:#FFFFFF; border:0.5px solid #E4E2D8; border-radius:8px; padding:9px 14px; margin-bottom:12px; font-size:11.5px; color:#6B6A63;">'+
      '<span style="font-weight:600; color:#1F1F1D;">Rating:</span>'+
      items.map(function(it){return '<span style="display:flex; align-items:center; gap:5px;"><span style="width:9px; height:9px; border-radius:50%; background:'+it[1].fg+'; display:inline-block;"></span>'+it[0]+'</span>';}).join('')+
      '</div>';
  }

  function displayBrand(b){ return b==='Total'?'All':b; }
  function periodShortLabel(p){
    if(p==='Past 9 Months (Nov25-Jul26)') return 'PAST 9 MO';
    if(p==='YTD 2026') return 'YTD 2026';
    var parts=p.split(' ');
    return parts[0].slice(0,3).toUpperCase()+" '"+parts[1].slice(2);
  }

  var slaWarehouse='US';
  function defaultBrandFor(wh){
    var spec=SLA_SPECS[wh];
    return spec.brands.indexOf('Total')!==-1?'Total':spec.brands[0];
  }
  var slaBrand=defaultBrandFor(slaWarehouse);
  var slaSubTab='overview'; // 'overview' | 'inbound' | 'outbound' | 'offenders'
  var slaOffenderOpen={}; // expanded-row tracker for Top Offenders, keyed by row id
  var slaInboundFilters={brand:'All',dateFrom:'',dateTo:'',within:'All',search:''};
  var slaOutboundFilters={brand:'All',channel:'All',dateFrom:'',dateTo:'',within:'All',search:''};
  var slaSearchFocus=null; // {kind,pos} — preserves cursor position across the full re-render on each keystroke
  var slaInboundSort={col:null,dir:'desc'};
  var slaOutboundSort={b2b:{col:null,dir:'desc'},b2c:{col:null,dir:'desc'}};

  // ---------------- Order table sort helpers (Inbound / Outbound tabs) ----------------
  function sortRowsBy(rows,colSpecs,sortState){
    if(!sortState||sortState.col===null) return rows;
    var spec=null;
    for(var i=0;i<colSpecs.length;i++){ if(colSpecs[i].key===sortState.col){ spec=colSpecs[i]; break; } }
    if(!spec) return rows;
    var sorted=rows.slice();
    sorted.sort(function(a,b){
      var va=a[spec.idx],vb=b[spec.idx],cmp;
      if(spec.type==='date'){
        var da=parseMDY(va),db=parseMDY(vb);
        cmp=(da?da.getTime():-Infinity)-(db?db.getTime():-Infinity);
      } else if(spec.type==='number'){
        var na=typeof va==='number'?va:-Infinity,nb=typeof vb==='number'?vb:-Infinity;
        cmp=na-nb;
      } else {
        cmp=String(va==null?'':va).localeCompare(String(vb==null?'':vb));
      }
      return sortState.dir==='asc'?cmp:-cmp;
    });
    return sorted;
  }
  function sortableTh(spec,sortState,tableKind,groupKey){
    var active=sortState&&sortState.col===spec.key;
    var arrow=active?(sortState.dir==='asc'?' ▲':' ▼'):'';
    return '<th class="sla-sort-th" data-sort-col="'+spec.key+'" data-kind="'+tableKind+'"'+(groupKey?' data-group="'+groupKey+'"':'')+
      ' style="font-weight:600; color:'+(active?'#089AA0':'#6B6A63')+'; text-align:'+(spec.align||'right')+'; border-bottom:0.5px solid #E4E2D8; text-transform:uppercase; letter-spacing:0.02em; font-size:10.5px; cursor:pointer; white-space:nowrap; user-select:none; position:sticky; top:0; z-index:2; background:#FFFFFF;">'+spec.label+arrow+'</th>';
  }
  function stickyBlankTh(width){
    return '<th style="width:'+width+'px; border-bottom:0.5px solid #E4E2D8; position:sticky; top:0; z-index:2; background:#FFFFFF;"></th>';
  }
  function bindOrderSortHandlers(){
    document.querySelectorAll('.sla-sort-th').forEach(function(el){
      el.addEventListener('click',function(){
        var kind=el.getAttribute('data-kind'),colKey=el.getAttribute('data-sort-col'),group=el.getAttribute('data-group');
        var state=kind==='inbound'?slaInboundSort:(group==='b2b'?slaOutboundSort.b2b:slaOutboundSort.b2c);
        if(state.col===colKey){ state.dir=state.dir==='asc'?'desc':'asc'; }
        else { state.col=colKey; state.dir='desc'; }
        renderSLA(slaBrand);
      });
    });
  }
  var INBOUND_COLS=[
    {key:'po',label:'PO Number',idx:0,type:'string',align:'left'},
    {key:'brand',label:'Brand',idx:1,type:'string',align:'left'},
    {key:'qty',label:'Received Qty',idx:2,type:'number',align:'right'},
    {key:'inyard',label:'In-Yard Date',idx:3,type:'date',align:'right'},
    {key:'receive',label:'Receiving Date',idx:4,type:'date',align:'right'},
    {key:'dock',label:'Receiving Dock to Stock (Business Days)',idx:5,type:'number',align:'right'},
    {key:'within',label:'Within Target?',idx:6,type:'string',align:'center'}
  ];
  function outboundCols(inclPallet){
    var cols=[
      {key:'ordnum',label:'Order Number',idx:0,type:'string',align:'left'},
      {key:'channel',label:'Channel',idx:1,type:'string',align:'left'},
      {key:'brand',label:'Brand',idx:2,type:'string',align:'left'},
      {key:'qty',label:'Shipped Qty',idx:3,type:'number',align:'right'}
    ];
    var next=4;
    if(inclPallet){ cols.push({key:'pallet',label:'Pallet Qty',idx:4,type:'number',align:'right'}); next=5; }
    cols.push({key:'odate',label:'Order Date',idx:next,type:'date',align:'right'}); next++;
    cols.push({key:'sdate',label:'Ship Date',idx:next,type:'date',align:'right'}); next++;
    cols.push({key:'days',label:'Order to Ship Days',idx:next,type:'number',align:'right'}); next++;
    cols.push({key:'within',label:'Within Target?',idx:next,type:'string',align:'center'});
    return cols;
  }

  // ---------------- Order Details filter helpers (Inbound / Outbound tabs) ----------------
  function parseMDY(s){
    if(!s||typeof s!=='string') return null;
    var p=s.split('/');
    if(p.length!==3) return null;
    var d=new Date(parseInt(p[2],10),parseInt(p[0],10)-1,parseInt(p[1],10));
    return isNaN(d.getTime())?null:d;
  }
  function dateInRange(dateStr,fromStr,toStr){
    if(!fromStr&&!toStr) return true;
    var d=parseMDY(dateStr);
    if(!d) return true; // don't exclude rows with unparseable/missing dates
    if(fromStr){ var f=new Date(fromStr+'T00:00:00'); if(d<f) return false; }
    if(toStr){ var t=new Date(toStr+'T00:00:00'); if(d>t) return false; }
    return true;
  }
  function brandMatchesFilter(rowBrand,filterBrand){
    if(filterBrand==='All') return true;
    if(!rowBrand) return false;
    return rowBrand.indexOf(filterBrand)!==-1;
  }
  function renderOrderFilterBar(kind,filters,brandOptions,channelOptions,searchLabel){
    var searchHtml='<div style="display:flex; align-items:center; gap:6px;"><span style="font-size:11px; font-weight:600; color:#6B6A63;">Search</span>'+
      '<input type="text" class="sla-filter-search" data-kind="'+kind+'" placeholder="'+searchLabel+'" value="'+(filters.search||'').replace(/"/g,'&quot;')+'" style="font-size:12px; padding:5px 8px; border-radius:6px; border:0.5px solid #D8D6CA; color:#2C2C2A; min-width:180px;">'+
      '</div>';
    var brandSel='<select class="sla-filter-select" data-filter="brand" data-kind="'+kind+'" style="font-size:12px; padding:5px 8px; border-radius:6px; border:0.5px solid #D8D6CA; background:#FFFFFF; color:#2C2C2A;">'+
      ['All'].concat(brandOptions).map(function(b){return '<option value="'+b+'"'+(b===filters.brand?' selected':'')+'>'+b+'</option>';}).join('')+
      '</select>';
    var channelHtml='';
    if(channelOptions){
      channelHtml='<div style="display:flex; align-items:center; gap:6px;"><span style="font-size:11px; font-weight:600; color:#6B6A63;">Channel</span>'+
        '<select class="sla-filter-select" data-filter="channel" data-kind="'+kind+'" style="font-size:12px; padding:5px 8px; border-radius:6px; border:0.5px solid #D8D6CA; background:#FFFFFF; color:#2C2C2A;">'+
        ['All'].concat(channelOptions).map(function(c){return '<option value="'+c+'"'+(c===filters.channel?' selected':'')+'>'+c+'</option>';}).join('')+
        '</select></div>';
    }
    var withinHtml='<div style="display:inline-flex; gap:2px; background:#EFEDE4; border-radius:8px; padding:3px;">'+
      ['All','Hit','Miss'].map(function(v){
        var active=filters.within===v;
        return '<span class="filter-pill sla-filter-within" data-kind="'+kind+'" data-value="'+v+'" style="border-radius:6px; border:none; cursor:pointer;'+(active?' background:#089AA0; color:#FFFFFF; font-weight:600;':' background:transparent; color:#6B6A63;')+'">'+v+'</span>';
      }).join('')+'</div>';
    var dateHtml='<input type="date" class="sla-filter-date" data-filter="dateFrom" data-kind="'+kind+'" value="'+filters.dateFrom+'" style="font-size:12px; padding:5px 8px; border-radius:6px; border:0.5px solid #D8D6CA; color:#2C2C2A;">'+
      '<span style="font-size:11px; color:#9A988F;">to</span>'+
      '<input type="date" class="sla-filter-date" data-filter="dateTo" data-kind="'+kind+'" value="'+filters.dateTo+'" style="font-size:12px; padding:5px 8px; border-radius:6px; border:0.5px solid #D8D6CA; color:#2C2C2A;">';
    return '<div style="display:flex; align-items:center; gap:18px; flex-wrap:wrap; background:#FFFFFF; border:0.5px solid #E4E2D8; border-radius:8px; padding:10px 14px; margin-bottom:14px;">'+
      searchHtml+
      '<div style="display:flex; align-items:center; gap:6px;"><span style="font-size:11px; font-weight:600; color:#6B6A63;">Brand</span>'+brandSel+'</div>'+
      channelHtml+
      '<div style="display:flex; align-items:center; gap:6px;"><span style="font-size:11px; font-weight:600; color:#6B6A63;">Date range</span>'+dateHtml+'</div>'+
      '<div style="display:flex; align-items:center; gap:6px;"><span style="font-size:11px; font-weight:600; color:#6B6A63;">Within Target</span>'+withinHtml+'</div>'+
    '</div>';
  }
  function bindOrderFilterHandlers(){
    document.querySelectorAll('.sla-filter-select').forEach(function(el){
      el.addEventListener('change',function(){
        var kind=el.getAttribute('data-kind'),filt=el.getAttribute('data-filter');
        var target=kind==='inbound'?slaInboundFilters:slaOutboundFilters;
        target[filt]=el.value;
        renderSLA(slaBrand);
      });
    });
    document.querySelectorAll('.sla-filter-date').forEach(function(el){
      el.addEventListener('change',function(){
        var kind=el.getAttribute('data-kind'),filt=el.getAttribute('data-filter');
        var target=kind==='inbound'?slaInboundFilters:slaOutboundFilters;
        target[filt]=el.value;
        renderSLA(slaBrand);
      });
    });
    document.querySelectorAll('.sla-filter-within').forEach(function(el){
      el.addEventListener('click',function(){
        var kind=el.getAttribute('data-kind'),val=el.getAttribute('data-value');
        var target=kind==='inbound'?slaInboundFilters:slaOutboundFilters;
        target.within=val;
        renderSLA(slaBrand);
      });
    });
    document.querySelectorAll('.sla-filter-search').forEach(function(el){
      el.addEventListener('input',function(){
        var kind=el.getAttribute('data-kind');
        var target=kind==='inbound'?slaInboundFilters:slaOutboundFilters;
        target.search=el.value;
        slaSearchFocus={kind:kind,pos:el.selectionStart};
        renderSLA(slaBrand);
      });
    });
  }

  // ---------------- SLA compliance % lookup (used by Service Levels trends + KPI cards) ----------------
  var MONTH_TO_SLA_PERIOD={'Jun 2026':'June 2026','Jul 2026':'July 2026'};
  function slaCompliancePct(period,warehouse,brand){
    var spec=SLA_SPECS[warehouse];
    if(!spec) return null;
    var isAgg=(period==='Past 9 Months (Nov25-Jul26)'||period==='YTD 2026');
    var srcArr=isAgg?SLA_DATA[warehouse].agg:SLA_DATA[warehouse].monthly;
    if(!srcArr) return null;
    var row=null;
    for(var i=0;i<srcArr.length;i++){ if(srcArr[i][0]===period&&srcArr[i][1]===brand){ row=srcArr[i]; break; } }
    if(!row) return null;
    var metCount=0,dataCount=0;
    spec.metrics.forEach(function(m){
      var pctVal;
      if(m.kind==='triple'||m.kind==='double') pctVal=pctOrRaw(row[m.idx]);
      else pctVal=m.unit==='hours'?row[m.idx]:pctOrRaw(row[m.idx]);
      if(typeof pctVal==='number'){
        dataCount++;
        var met=m.dir==='min'?pctVal>=m.t:pctVal<=m.t;
        if(met) metCount++;
      }
    });
    return dataCount>0?(metCount/dataCount*100):null;
  }
  function slaWarehousesForRegionBrand(fRegion,fBrand){
    if(fRegion!=='All') return [fRegion];
    if(fBrand==='Cat Ladies'||fBrand==='Encha') return ['US'];
    return ['US','CA','UK','EU'];
  }
  function svcSlaLine(fRegion,fBrand){
    var whs=slaWarehousesForRegionBrand(fRegion,fBrand);
    return MONTHS.map(function(m){
      var period=MONTH_TO_SLA_PERIOD[m];
      var vals=whs.map(function(wh){
        var brandForWh=fBrand==='All'?defaultBrandFor(wh):fBrand;
        return slaCompliancePct(period,wh,brandForWh);
      });
      return avgNumeric(vals);
    });
  }

  function renderSLA(brand){
    var spec=SLA_SPECS[slaWarehouse];
    var periods=spec.months.slice();
    var aggPeriods=slaWarehouse==='US'?['Past 9 Months (Nov25-Jul26)']:[];
    var allPeriods=periods.concat(aggPeriods);

    function rowFor(period){
      var isAgg=(period==='Past 9 Months (Nov25-Jul26)'||period==='YTD 2026');
      var srcArr=isAgg?SLA_DATA[slaWarehouse].agg:SLA_DATA[slaWarehouse].monthly;
      if(!srcArr) return null;
      for(var i=0;i<srcArr.length;i++){ if(srcArr[i][0]===period&&srcArr[i][1]===brand) return srcArr[i]; }
      return null;
    }

    var latestPeriod=periods[periods.length-1];
    var latestRow=rowFor(latestPeriod);
    var metCount=0,dataCount=0;
    spec.metrics.forEach(function(m){
      var pctVal;
      if(!latestRow) pctVal=null;
      else if(m.kind==='triple'||m.kind==='double') pctVal=pctOrRaw(latestRow[m.idx]);
      else pctVal=m.unit==='hours'?latestRow[m.idx]:pctOrRaw(latestRow[m.idx]);
      if(typeof pctVal==='number'){
        dataCount++;
        var met=m.dir==='min'?pctVal>=m.t:pctVal<=m.t;
        if(met) metCount++;
      }
    });
    var pct=dataCount>0?Math.round(metCount/dataCount*100):0;
    var tileBg=dataCount===0?'#B4B2A9':pct>=90?'#3B6D11':pct>=75?'#EF9F27':'#E24B4A';
    var tiles='<div style="display:flex; gap:12px; margin-bottom:16px;">'+
      statTile(metCount+' / '+dataCount,'SLA areas met',slaWarehouse+' · '+latestPeriod+' · '+displayBrand(brand),tileBg,'#FFFFFF')+
      statTile(dataCount>0?pct+'%':'–','Compliance','of areas with data, latest month','#2C2C2A','#FFFFFF')+
      '</div>';

    var thStyleLeft='font-weight:600; color:#6B6A63; text-align:left; border-bottom:0.5px solid #E4E2D8; text-transform:uppercase; letter-spacing:0.02em; font-size:10.5px; padding:7px 9px; vertical-align:bottom; white-space:nowrap;';
    var headTop='<tr><th rowspan="2" style="'+thStyleLeft+'">SLA area</th><th rowspan="2" style="'+thStyleLeft+'">Contract target</th>'+
      allPeriods.map(function(p){return '<th colspan="3" style="text-align:center; font-weight:600; color:#6B6A63; border-bottom:0.5px solid #E4E2D8; border-left:1px solid #E4E2D8; text-transform:uppercase; letter-spacing:0.02em; font-size:10.5px; padding:7px 8px; white-space:nowrap;">'+periodShortLabel(p)+'</th>';}).join('')+
      '</tr>';
    function subTh(text,align,groupStart){
      return '<th style="font-weight:600; color:#6B6A63; text-align:'+(align||'right')+'; border-bottom:0.5px solid #E4E2D8;'+(groupStart?' border-left:1px solid #E4E2D8;':'')+' text-transform:uppercase; letter-spacing:0.02em; font-size:10px; padding:6px 8px; white-space:nowrap;">'+text+'</th>';
    }
    var headSub='<tr>'+allPeriods.map(function(){return subTh('Actual','right',true)+subTh('Avg days','right',false)+subTh('Status','center',false);}).join('')+'</tr>';

    var body=spec.metrics.map(function(m){
      var cells=allPeriods.map(function(p){
        var row=rowFor(p);
        var pctVal,avgDaysRaw=null;
        if(!row){ pctVal=null; }
        else if(m.kind==='triple'){
          pctVal=pctOrRaw(row[m.idx]);
          if(typeof row[m.idx+1]!=='undefined') avgDaysRaw=row[m.idx+1];
        } else if(m.kind==='double'){
          pctVal=pctOrRaw(row[m.idx]);
        } else {
          pctVal=m.unit==='hours'?row[m.idx]:pctOrRaw(row[m.idx]);
        }
        var actualCell,statusCell,avgDaysCell;
        if(pctVal===null||typeof pctVal==='string'){
          actualCell='<span style="color:#B4B2A9; font-size:11px;">'+(pctVal||'No data')+'</span>';
          statusCell='<span style="background:#F1EFE8; color:#6B6A63; padding:2px 9px; border-radius:10px; font-weight:600; font-size:10.5px; white-space:nowrap;">No data</span>';
          avgDaysCell='–';
        } else {
          var met=m.dir==='min'?pctVal>=m.t:pctVal<=m.t;
          var pt=pctTier(pctVal,m.t,m.dir);
          actualCell=tierChip(pt,pctVal.toFixed(2)+(m.unit==='hours'?'h':'%'));
          statusCell='<span style="background:'+(met?'#EAF3DE':'#FCEBEB')+'; color:'+(met?'#27500A':'#791F1F')+'; padding:2px 9px; border-radius:10px; font-weight:600; font-size:10.5px; white-space:nowrap;">'+(met?'Met':'Missed')+'</span>';
          if(typeof avgDaysRaw==='number'){
            var dt=m.days?daysTier(avgDaysRaw,m.days):null;
            avgDaysCell=dt?tierChip(dt,avgDaysRaw.toFixed(2)):avgDaysRaw.toFixed(2);
          } else { avgDaysCell='–'; }
        }
        return '<td style="text-align:right; padding:6px 8px; border-bottom:0.5px solid #F0EEE5; border-left:1px solid #F0EEE5;">'+actualCell+'</td>'+
               '<td style="text-align:right; padding:6px 8px; border-bottom:0.5px solid #F0EEE5; font-size:11px;">'+avgDaysCell+'</td>'+
               '<td style="text-align:center; padding:6px 8px; border-bottom:0.5px solid #F0EEE5;">'+statusCell+'</td>';
      }).join('');
      return '<tr><td style="color:#1F1F1D; border-bottom:0.5px solid #F0EEE5; padding:7px 9px; white-space:nowrap;">'+m.label+'</td>'+
             '<td style="font-size:11px; color:#6B6A63; border-bottom:0.5px solid #F0EEE5; padding:7px 9px; white-space:nowrap;">'+m.target+'</td>'+cells+'</tr>';
    }).join('');

    var footnotes='<div style="font-size:11px; color:#9A988F; margin-top:10px;">Real data from your SLA Tracking export. US covers Nov 2025–Jul 2026 across 3 brands; CA, UK, and EU only have Jun–Jul 2026 for Big Fudge Vinyl so far, with most columns not yet reported — coming soon as more months and brands land.</div>';
    if(slaWarehouse==='US'){
      var p9Row=rowFor('Past 9 Months (Nov25-Jul26)');
      if(p9Row&&typeof p9Row[11]==='number'){
        footnotes+='<div style="margin-top:8px; font-size:12px; color:#6B6A63;">Absolute net adjustment rate (target &lt;=0.5%, Past 9 Months, '+displayBrand(brand)+'): <strong style="color:#1F1F1D;">'+(p9Row[11]*100).toFixed(2)+'%</strong></div>';
      }
    }

    var subTabHtml=renderSlaSubTabs();
    var mainHtml;
    if(slaSubTab==='inbound'){
      mainHtml=renderSlaInboundTab();
    } else if(slaSubTab==='outbound'){
      mainHtml=renderSlaOutboundTab();
    } else if(slaSubTab==='offenders'){
      mainHtml=renderSlaTopOffenders();
    } else {
      mainHtml=slaLegend()+tiles+
        exportBtn('table-sla','SLA_Compliance_'+slaWarehouse+'.xlsx')+
        '<div class="table-scroll"><table id="table-sla">'+headTop+headSub+body+'</table></div>'+footnotes;
    }

    document.getElementById('content-host').innerHTML=subTabHtml+mainHtml;

    if(slaSearchFocus){
      var sEl=document.querySelector('.sla-filter-search[data-kind="'+slaSearchFocus.kind+'"]');
      if(sEl){
        sEl.focus();
        try{ sEl.setSelectionRange(slaSearchFocus.pos,slaSearchFocus.pos); }catch(e){}
      }
      slaSearchFocus=null;
    }
    bindSlaSubTabHandlers();
    bindOrderFilterHandlers();
    bindOrderSortHandlers();
    document.querySelectorAll('.sla-expand-row').forEach(function(row){
      row.addEventListener('click',function(){
        var rid=row.getAttribute('data-toggle');
        var detail=document.getElementById(rid);
        var arrow=document.getElementById(rid+'-arrow');
        if(!detail) return;
        var open=detail.style.display!=='none';
        detail.style.display=open?'none':'table-row';
        if(arrow) arrow.textContent=open?'▶':'▼';
      });
    });
  }

  // ---------------- SLA Overview / Order Details / Top Offenders sub-tabs ----------------
  function renderSlaSubTabs(){
    var st=slaSubTab;
    var opts=[['overview','Overview'],['inbound','Inbound'],['outbound','Outbound'],['offenders','Top Offenders']];
    return '<div style="display:inline-flex; gap:2px; margin-bottom:14px; background:#EFEDE4; border-radius:8px; padding:3px;">'+
      opts.map(function(pair){
        var active=st===pair[0];
        return '<span class="filter-pill" data-slasubtab="'+pair[0]+'" style="border-radius:6px; border:none;'+(active?' background:#089AA0; color:#FFFFFF; font-weight:600;':' background:transparent; color:#6B6A63;')+'">'+pair[1]+'</span>';
      }).join('')+
    '</div>';
  }
  function bindSlaSubTabHandlers(){
    document.querySelectorAll('.filter-pill[data-slasubtab]').forEach(function(el){
      el.addEventListener('click',function(){
        slaSubTab=el.getAttribute('data-slasubtab');
        renderSLA(slaBrand);
      });
    });
  }

  function slaTargetChip(target){
    var hit=target==='Hit';
    return '<span style="background:'+(hit?'#EAF3DE':'#FCEBEB')+'; color:'+(hit?'#27500A':'#791F1F')+'; padding:2px 9px; border-radius:10px; font-weight:600; font-size:10.5px; white-space:nowrap;">'+(target||'–')+'</span>';
  }
  function slaSectionHeader(title,count){
    return '<div style="margin:18px 0 6px; font-size:12.5px; font-weight:600; color:#1F1F1D;">'+title+' <span style="color:#9A988F; font-weight:400; font-size:11px;">('+count+' order'+(count===1?'':'s')+')</span></div>';
  }

  function renderInboundOrdersTable(rows,tableId,filename,sortState){
    var sortedRows=sortRowsBy(rows,INBOUND_COLS,sortState);
    var head='<tr>'+stickyBlankTh(24)+INBOUND_COLS.map(function(c){return sortableTh(c,sortState,'inbound',null);}).join('')+'</tr>';
    var body=sortedRows.map(function(r,idx){
      var rid=tableId+'-row-'+idx;
      var skus=r[7]||[];
      var summary='<tr class="sla-expand-row" data-toggle="'+rid+'" style="cursor:pointer;">'+
        '<td id="'+rid+'-arrow" style="text-align:center; color:#9A988F; border-bottom:0.5px solid #F0EEE5; font-size:9px;">▶</td>'+
        '<td style="text-align:left; color:#1F1F1D; border-bottom:0.5px solid #F0EEE5; white-space:nowrap;">'+r[0]+'</td>'+
        '<td style="text-align:left; color:#2C2C2A; border-bottom:0.5px solid #F0EEE5; white-space:nowrap;">'+r[1]+'</td>'+
        td(fmtN(r[2],0))+td(r[3])+td(r[4])+td(fmtN(r[5],1))+
        '<td style="text-align:center; border-bottom:0.5px solid #F0EEE5;">'+slaTargetChip(r[6])+'</td>'+
      '</tr>';
      var detail='<tr id="'+rid+'" style="display:none;"><td colspan="8" style="padding:0; border-bottom:0.5px solid #F0EEE5;">'+skuBreakdownBlock(skus)+'</td></tr>';
      return summary+detail;
    }).join('');
    return exportBtn(tableId,filename)+'<div class="table-scroll" style="max-height:440px; overflow-y:auto;"><table id="'+tableId+'" style="border-collapse:separate; border-spacing:0;">'+head+body+'</table></div>';
  }

  function renderOutboundOrdersTable(rows,tableId,filename,inclPallet,sortState,groupKey){
    var cols=outboundCols(inclPallet);
    var sortedRows=sortRowsBy(rows,cols,sortState);
    var head='<tr>'+stickyBlankTh(24)+cols.map(function(c){return sortableTh(c,sortState,'outbound',groupKey);}).join('')+'</tr>';
    var body=sortedRows.map(function(r,idx){
      var rid=tableId+'-row-'+idx;
      var i=0;
      var ordnum=r[i++],channel=r[i++],brand=r[i++],qty=r[i++],pallet=inclPallet?r[i++]:null,odate=r[i++],sdate=r[i++],days=r[i++],target=r[i++],skus=r[i++]||[];
      var summary='<tr class="sla-expand-row" data-toggle="'+rid+'" style="cursor:pointer;">'+
        '<td id="'+rid+'-arrow" style="text-align:center; color:#9A988F; border-bottom:0.5px solid #F0EEE5; font-size:9px;">▶</td>'+
        '<td style="text-align:left; color:#1F1F1D; border-bottom:0.5px solid #F0EEE5; white-space:nowrap;">'+ordnum+'</td>'+
        '<td style="text-align:left; color:#2C2C2A; border-bottom:0.5px solid #F0EEE5; white-space:nowrap;">'+channel+'</td>'+
        '<td style="text-align:left; color:#2C2C2A; border-bottom:0.5px solid #F0EEE5; white-space:nowrap;">'+brand+'</td>'+
        td(fmtN(qty,0))+(inclPallet?td(fmtN(pallet,0)):'')+td(odate)+td(sdate)+td(fmtN(days,1))+
        '<td style="text-align:center; border-bottom:0.5px solid #F0EEE5;">'+slaTargetChip(target)+'</td>'+
      '</tr>';
      var detail='<tr id="'+rid+'" style="display:none;"><td colspan="'+(inclPallet?10:9)+'" style="padding:0; border-bottom:0.5px solid #F0EEE5;">'+skuBreakdownBlock(skus)+'</td></tr>';
      return summary+detail;
    }).join('');
    return exportBtn(tableId,filename)+'<div class="table-scroll" style="max-height:440px; overflow-y:auto;"><table id="'+tableId+'" style="border-collapse:separate; border-spacing:0;">'+head+body+'</table></div>';
  }

  function renderSlaInboundTab(){
    if(slaWarehouse!=='US'||typeof window.SLA_ORDERS_US==='undefined') return comingSoonPanel();
    var d=window.SLA_ORDERS_US;
    var brandOptions=SLA_SPECS.US.brands.filter(function(b){return b!=='Total';});
    var searchTerm=(slaInboundFilters.search||'').trim().toLowerCase();
    var filtered=d.inbound.filter(function(r){
      return brandMatchesFilter(r[1],slaInboundFilters.brand)&&
        dateInRange(r[3],slaInboundFilters.dateFrom,slaInboundFilters.dateTo)&&
        (slaInboundFilters.within==='All'||r[6]===slaInboundFilters.within)&&
        (!searchTerm||(r[0]||'').toLowerCase().indexOf(searchTerm)!==-1);
    });
    return '<div style="font-size:11.5px; color:#9A988F; margin-bottom:2px;">Order-level detail from your UNIS in/out export, Nov 2025–Jul 2026. Date range filters by In-Yard Date.</div>'+
      renderOrderFilterBar('inbound',slaInboundFilters,brandOptions,null,'Search PO number...')+
      slaSectionHeader('Inbound orders',filtered.length)+
      renderInboundOrdersTable(filtered,'table-sla-inbound','SLA_Inbound_Orders.xlsx',slaInboundSort);
  }

  function renderSlaOutboundTab(){
    if(slaWarehouse!=='US'||typeof window.SLA_ORDERS_US==='undefined') return comingSoonPanel();
    var d=window.SLA_ORDERS_US;
    var brandOptions=SLA_SPECS.US.brands.filter(function(b){return b!=='Total';});
    var channelOptions=[];
    d.outboundB2B.concat(d.outboundB2C).forEach(function(r){ if(r[1]&&channelOptions.indexOf(r[1])===-1) channelOptions.push(r[1]); });
    channelOptions.sort();
    var searchTerm=(slaOutboundFilters.search||'').trim().toLowerCase();
    function matches(r,dateIdx,withinIdx){
      return brandMatchesFilter(r[2],slaOutboundFilters.brand)&&
        (slaOutboundFilters.channel==='All'||r[1]===slaOutboundFilters.channel)&&
        dateInRange(r[dateIdx],slaOutboundFilters.dateFrom,slaOutboundFilters.dateTo)&&
        (slaOutboundFilters.within==='All'||r[withinIdx]===slaOutboundFilters.within)&&
        (!searchTerm||String(r[0]||'').toLowerCase().indexOf(searchTerm)!==-1);
    }
    var filteredB2B=d.outboundB2B.filter(function(r){ return matches(r,5,8); });
    var filteredB2C=d.outboundB2C.filter(function(r){ return matches(r,4,7); });
    return '<div style="font-size:11.5px; color:#9A988F; margin-bottom:2px;">Order-level detail from your UNIS in/out export, Nov 2025–Jul 2026. Date range filters by Order Date.</div>'+
      renderOrderFilterBar('outbound',slaOutboundFilters,brandOptions,channelOptions,'Search order number...')+
      slaSectionHeader('B2B outbound orders',filteredB2B.length)+
      renderOutboundOrdersTable(filteredB2B,'table-sla-outbound-b2b','SLA_B2B_Outbound_Orders.xlsx',true,slaOutboundSort.b2b,'b2b')+
      slaSectionHeader('B2C outbound orders',filteredB2C.length)+
      renderOutboundOrdersTable(filteredB2C,'table-sla-outbound-b2c','SLA_B2C_Outbound_Orders.xlsx',false,slaOutboundSort.b2c,'b2c');
  }

  function skuBreakdownBlock(skus){
    return '<div style="padding:8px 14px 8px 40px; background:#FAF8F2;">'+
      skus.map(function(s){
        return '<div style="display:flex; gap:14px; font-size:11px; color:#6B6A63; padding:2px 0; border-bottom:0.5px solid #EFEDE4;">'+
          '<span style="min-width:150px; font-weight:600; color:#2C2C2A;">'+(s[0]||'–')+'</span>'+
          '<span style="flex:1;">'+(s[1]||'–')+'</span>'+
          '<span style="min-width:70px; text-align:right;">Qty: '+fmtN(s[2],0)+'</span>'+
        '</div>';
      }).join('')+
    '</div>';
  }

  function renderTopOffendersInboundTable(rows,tableId,filename){
    var head='<tr><th style="width:24px; border-bottom:0.5px solid #E4E2D8;"></th>'+th('PO Number','left')+th('Brand','left')+th('Received Qty')+th('In-Yard Date')+th('Receiving Date')+th('Receiving Dock to Stock (Business Days)')+th('Within Target?','center')+'</tr>';
    var body=rows.map(function(r,idx){
      var rid='off-in-'+idx;
      var skus=r[7];
      var summary='<tr class="sla-expand-row" data-toggle="'+rid+'" style="cursor:pointer;">'+
        '<td id="'+rid+'-arrow" style="text-align:center; color:#9A988F; border-bottom:0.5px solid #F0EEE5; font-size:9px;">▶</td>'+
        '<td style="text-align:left; color:#1F1F1D; border-bottom:0.5px solid #F0EEE5; white-space:nowrap;">'+r[0]+'</td>'+
        '<td style="text-align:left; color:#2C2C2A; border-bottom:0.5px solid #F0EEE5; white-space:nowrap;">'+r[1]+'</td>'+
        td(fmtN(r[2],0))+td(r[3])+td(r[4])+td(fmtN(r[5],1))+
        '<td style="text-align:center; border-bottom:0.5px solid #F0EEE5;">'+slaTargetChip(r[6])+'</td>'+
      '</tr>';
      var detail='<tr id="'+rid+'" style="display:none;"><td colspan="8" style="padding:0; border-bottom:0.5px solid #F0EEE5;">'+skuBreakdownBlock(skus)+'</td></tr>';
      return summary+detail;
    }).join('');
    return exportBtn(tableId,filename)+'<div class="table-scroll"><table id="'+tableId+'">'+head+body+'</table></div>';
  }

  function renderTopOffendersOutboundTable(rows,tableId,filename){
    var head='<tr><th style="width:24px; border-bottom:0.5px solid #E4E2D8;"></th>'+th('Order Number','left')+th('Channel','left')+th('Brand','left')+th('Shipped Qty')+th('Pallet Qty')+th('Order Date')+th('Ship Date')+th('Order to Ship Days')+th('Within Target?','center')+'</tr>';
    var body=rows.map(function(r,idx){
      var rid='off-ob-'+idx;
      var skus=r[9];
      var summary='<tr class="sla-expand-row" data-toggle="'+rid+'" style="cursor:pointer;">'+
        '<td id="'+rid+'-arrow" style="text-align:center; color:#9A988F; border-bottom:0.5px solid #F0EEE5; font-size:9px;">▶</td>'+
        '<td style="text-align:left; color:#1F1F1D; border-bottom:0.5px solid #F0EEE5; white-space:nowrap;">'+r[0]+'</td>'+
        '<td style="text-align:left; color:#2C2C2A; border-bottom:0.5px solid #F0EEE5; white-space:nowrap;">'+r[1]+'</td>'+
        '<td style="text-align:left; color:#2C2C2A; border-bottom:0.5px solid #F0EEE5; white-space:nowrap;">'+r[2]+'</td>'+
        td(fmtN(r[3],0))+td(fmtN(r[4],0))+td(r[5])+td(r[6])+td(fmtN(r[7],1))+
        '<td style="text-align:center; border-bottom:0.5px solid #F0EEE5;">'+slaTargetChip(r[8])+'</td>'+
      '</tr>';
      var detail='<tr id="'+rid+'" style="display:none;"><td colspan="10" style="padding:0; border-bottom:0.5px solid #F0EEE5;">'+skuBreakdownBlock(skus)+'</td></tr>';
      return summary+detail;
    }).join('');
    return exportBtn(tableId,filename)+'<div class="table-scroll"><table id="'+tableId+'">'+head+body+'</table></div>';
  }

  function renderSlaTopOffenders(){
    if(slaWarehouse!=='US'||typeof window.SLA_ORDERS_US==='undefined') return comingSoonPanel();
    var d=window.SLA_ORDERS_US;
    return '<div style="font-size:11.5px; color:#9A988F; margin-bottom:2px;">The 10 slowest inbound receipts and 10 slowest B2B outbound shipments, Nov 2025–Jul 2026. Click a row to see its SKU breakdown.</div>'+
      slaSectionHeader('Top 10 slowest inbound (by dock-to-stock days)',d.topInbound.length)+
      renderTopOffendersInboundTable(d.topInbound,'table-sla-top-inbound','SLA_Top_Offenders_Inbound.xlsx')+
      slaSectionHeader('Top 10 slowest B2B outbound (by order-to-ship days)',d.topOutboundB2B.length)+
      renderTopOffendersOutboundTable(d.topOutboundB2B,'table-sla-top-outbound','SLA_Top_Offenders_Outbound.xlsx');
  }

  function buildWhButtons(){
    var host=document.getElementById('wh-buttons');
    host.style.display='flex';
    host.innerHTML=['US','CA','UK','EU'].map(function(r){
      return '<span class="filter-pill'+(r===slaWarehouse?' active':'')+'" data-wh="'+r+'">'+r+'</span>';
    }).join('');
    host.querySelectorAll('[data-wh]').forEach(function(btn){
      btn.addEventListener('click',function(){
        slaWarehouse=btn.getAttribute('data-wh');
        slaBrand=defaultBrandFor(slaWarehouse);
        buildWhButtons();
        render();
      });
    });
  }

  // ---------------- Nav / icons / sidebar ----------------
  var ICONS={
    calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    trending:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/></svg>',
    dollar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
    wallet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7H5a2 2 0 00-2 2v8a2 2 0 002 2h16v-6"/><path d="M21 7V5a2 2 0 00-2-2H5"/><circle cx="17" cy="13" r="1"/></svg>',
    gauge:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 13l4-4"/><path d="M9 5.5L8 4M15 5.5l1-1.5M4.5 13H3M21 13h-1.5"/></svg>',
    shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
    box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
    refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.13-3.36L23 10"/><path d="M1 14l5.36 4.36A9 9 0 0020.49 15"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>'
  };
  var ICON_COLORS={
    calendar:'#9A988F',
    trending:'#0E7C90',
    dollar:'#3B6D11',
    wallet:'#B4531F',
    gauge:'#7A5AF8',
    shield:'#C0392B',
    clock:'#B98900',
    box:'#2456C4',
    refresh:'#9A988F',
    check:'#089AA0'
  };

  var NAV_CONFIG=[
    {type:'section',label:'KPI SCORECARDS'},
    {type:'item',tab:'weekly',label:'Weekly scorecard',icon:'calendar',disabled:true},
    {type:'section',label:'MONTHLY SCORECARD'},
    {type:'item',tab:'acc',label:'Inventory accuracy',icon:'trending'},
    {type:'item',tab:'val',label:'Inventory valuation',icon:'dollar'},
    {type:'item',tab:'costs',label:'Warehouse costs',icon:'wallet'},
    {type:'item',tab:'svc',label:'Service levels',icon:'gauge'},
    {type:'item',tab:'claims',label:'Claims',icon:'shield'},
    {type:'section',label:'INVENTORY HIGHLIGHTS'},
    {type:'item',tab:'aging',label:'Aging inventory',icon:'clock'},
    {type:'item',tab:'value',label:'Inventory value',icon:'box'},
    {type:'item',tab:'turnover',label:'Inventory turnover',icon:'refresh',disabled:true},
    {type:'section',label:'SLA TRACKING'},
    {type:'item',tab:'sla',label:'SLA compliance',icon:'check'}
  ];

  var titles={acc:'Inventory accuracy',val:'Inventory valuation',costs:'Warehouse costs',svc:'Service levels',claims:'Claims',aging:'Aging inventory',value:'Inventory value',sla:'SLA compliance'};
  var current='acc';

  function buildSidebar(){
    var host=document.getElementById('sidebar-nav');
    host.innerHTML=NAV_CONFIG.map(function(n){
      if(n.type==='section') return '<div class="nav-section">'+n.label+'</div>';
      var isActive=n.tab===current;
      var cls='nav-item'+(n.disabled?' disabled':'')+(isActive?' active':'');
      var iconColor=n.disabled?'#C2C0B6':(isActive?'var(--accent-dark)':(ICON_COLORS[n.icon]||'#6B6A63'));
      return '<div class="'+cls+'"'+(n.disabled?'':' data-tab="'+n.tab+'"')+'><span class="nav-icon" style="color:'+iconColor+';">'+ICONS[n.icon]+'</span><span>'+n.label+'</span></div>';
    }).join('');
    host.querySelectorAll('.nav-item[data-tab]').forEach(function(el){
      el.addEventListener('click',function(){
        current=el.getAttribute('data-tab');
        buildSidebar();
        fillControls(); render();
      });
    });
  }

  function fillControls(){
    var periodSel=document.getElementById('period-select');
    var brandSel=document.getElementById('brand-select');
    var whHost=document.getElementById('wh-buttons');
    var viewHost=document.getElementById('view-toggle');
    if(current==='sla'){
      whHost.style.display='flex';
      viewHost.style.display='none';
      brandSel.style.display='none';
      buildWhButtons();
      periodSel.style.display='none';
    } else if(CATEGORY[current]||current==='value'){
      whHost.style.display='none';
      viewHost.style.display='none';
      brandSel.style.display='none';
      periodSel.style.display='none';
    } else {
      whHost.style.display='none';
      viewHost.style.display='none';
      brandSel.style.display='none';
      periodSel.style.display='none';
    }
  }

  function render(){
    document.getElementById('tab-title').textContent=titles[current];
    if(CATEGORY[current]){
      renderCategoryPage(current);
    }
    else if(current==='aging') renderAging();
    else if(current==='value') renderInventoryValue();
    else if(current==='sla') renderSLA(slaBrand);
  }

  document.getElementById('period-select').addEventListener('change',render);
  document.getElementById('sidebar-toggle-btn').addEventListener('click',function(){
    document.getElementById('sidebar').classList.toggle('collapsed');
  });

  buildSidebar();
  fillControls();
  render();
})();

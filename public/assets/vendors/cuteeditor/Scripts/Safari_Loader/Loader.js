var OxOed86=["ua","userAgent","isOpera","opera","isSafari","safari","isGecko","gecko","isWinIE","msie","compatMode","document","CSS1Compat","head","script","language","javascript","type","text/javascript","src","id","undefined","Microsoft.XMLHTTP","readyState","onreadystatechange","","length","all","childNodes","nodeType","\x0D\x0A","caller","onchange","oninitialized","command","commandui","commandvalue","returnValue","oncommand","string","_fireEventFunction","event","parentNode","_IsCuteEditor","True","readOnly","_IsRichDropDown","null","value","selectedIndex","nodeName","TR","cells","display","style","nextSibling","innerHTML","\x3Cimg src=\x22","/Images/t-minus.gif\x22\x3E","onclick","CuteEditor_CollapseTreeDropDownItem(this,\x22","\x22)","onmousedown","none","/Images/t-plus.gif\x22\x3E","CuteEditor_ExpandTreeDropDownItem(this,\x22","contains","UNSELECTABLE","on","tabIndex","-1","//TODO: event not found? throw error ?","contentWindow","contentDocument","parentWindow","frames","frameElement","//TODO:frame contentWindow not found?","preventDefault","arguments","parent","top","opener","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","cancelBubble","stopPropagation",";CuteEditor_GetEditor(this).ExecImageCommand(this.getAttribute(\x27Command\x27),this.getAttribute(\x27CommandUI\x27),this.getAttribute(\x27CommandArgument\x27))","this.onmouseout();CuteEditor_GetEditor(this).DropMenu(this.getAttribute(\x27Group\x27),this)","ResourceDir","Theme","/Themes/","/Images/all.png","/Images/blank2020.png","IMG","alt","title","Command","Group","ThemeIndex","width","20px","height","backgroundImage","url(",")","backgroundPosition","0 -","px","onload","className","separator","CuteEditorButton","onmouseover","CuteEditor_ButtonCommandOver(this)","onmouseout","CuteEditor_ButtonCommandOut(this)","CuteEditor_ButtonCommandDown(this)","onmouseup","CuteEditor_ButtonCommandUp(this)","oncontextmenu","ondragstart","ondblclick","_ToolBarID","_CodeViewToolBarID","_FrameID"," CuteEditorFrame"," CuteEditorToolbar","cursor","no-drop","ActiveTab","Edit","Code","View","buttonInitialized","isover","CuteEditorButtonOver","CuteEditorButtonDown","CuteEditorDown","border","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","cmd_fromfullpage","(","href","location",",DanaInfo=",",","+","scriptProperties","GetScriptProperty","/Scripts/Safar_Implementation/CuteEditorImplementation.js?i=1","CuteEditorImplementation","function","GET","\x26getModified=1","status","Failed to load impl time!","Failed to load impl code!","body","InitializeCode","block","contentEditable"," \x3Cbr /\x3E ","designMode","/Scripts/resource.php","?type=license\x26_ver=","Failed to load editor license data.","responseText","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","0000000000000840",";","/",":","//",".","www","?type=serverip\x26_ver=","Failed to load editor license info!","You are using an incorrect license file.","Invalid lcparts count:","Invalid product version.","Invalid license type.","(0) license expired!","(0) only localhost!","(1) host not match!","(2) ip not match!","(3) host not match!","(4) license expired!","License Error : ","CuteEditorInitialize"];var _Browser_TypeInfo=null;function Browser__InitType(){if(_Browser_TypeInfo!=null){return ;} ;var Ox118={};Ox118[OxOed86[0]]=navigator[OxOed86[1]].toLowerCase();Ox118[OxOed86[2]]=(Ox118[OxOed86[0]].indexOf(OxOed86[3])>-1);Ox118[OxOed86[4]]=(Ox118[OxOed86[0]].indexOf(OxOed86[5])>-1);Ox118[OxOed86[6]]=(!Ox118[OxOed86[2]]&&!Ox118[OxOed86[4]]&&Ox118[OxOed86[0]].indexOf(OxOed86[7])>-1);Ox118[OxOed86[8]]=(!Ox118[OxOed86[2]]&&Ox118[OxOed86[0]].indexOf(OxOed86[9])>-1);_Browser_TypeInfo=Ox118;} ;Browser__InitType();function Browser_IsWinIE(){return _Browser_TypeInfo[OxOed86[8]];} ;function Browser_IsGecko(){return _Browser_TypeInfo[OxOed86[6]];} ;function Browser_IsOpera(){return _Browser_TypeInfo[OxOed86[2]];} ;function Browser_IsSafari(){return _Browser_TypeInfo[OxOed86[4]];} ;function Browser_UseIESelection(){return _Browser_TypeInfo[OxOed86[8]];} ;function Browser_IsCSS1Compat(){return window[OxOed86[11]][OxOed86[10]]==OxOed86[12];} ;function include(Ox17f,Ox180){var Ox181=document.getElementsByTagName(OxOed86[13]).item(0);var Ox182=document.getElementById(Ox17f);if(Ox182){Ox181.removeChild(Ox182);} ;var Ox183=document.createElement(OxOed86[14]);Ox183.setAttribute(OxOed86[15],OxOed86[16]);Ox183.setAttribute(OxOed86[17],OxOed86[18]);Ox183.setAttribute(OxOed86[19],Ox180);Ox183.setAttribute(OxOed86[20],Ox17f);Ox181.appendChild(Ox183);} ;function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxOed86[21]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxOed86[21]){return  new ActiveXObject(OxOed86[22]);} ;} catch(x){return null;} ;} ;function LoadXMLAsync(Ox96d,Ox180,Ox126,Ox96e){var Ox7af=CreateXMLHttpRequest();function Ox96f(){if(Ox7af[OxOed86[23]]!=4){return ;} ;Ox7af[OxOed86[24]]= new Function();var Ox188=Ox7af;Ox7af=null;if(Ox126){Ox126(Ox188);} ;} ;Ox7af[OxOed86[24]]=Ox96f;Ox7af.open(Ox96d,Ox180,true);Ox7af.send(Ox96e||OxOed86[25]);} ;function Element_GetAllElements(p){var arr=[];if(Browser_IsWinIE()){for(var i=0;i<p[OxOed86[27]][OxOed86[26]];i++){arr.push(p[OxOed86[27]].item(i));} ;return arr;} ;Ox134(p);function Ox134(Ox132){var Ox135=Ox132[OxOed86[28]];var Ox3d=Ox135[OxOed86[26]];for(var i=0;i<Ox3d;i++){var Ox8d=Ox135.item(i);if(Ox8d[OxOed86[29]]!=1){continue ;} ;arr.push(Ox8d);Ox134(Ox8d);} ;} ;return arr;} ;var __ISDEBUG=false;function Debug_Todo(msg){if(!__ISDEBUG){return ;} ;throw ( new Error(msg+OxOed86[30]+Debug_Todo[OxOed86[31]]));} ;function Window_GetElement(Ox90,Oxaa,Ox131){var Ox132=Ox90[OxOed86[11]].getElementById(Oxaa);if(Ox132){return Ox132;} ;var Ox1f=Ox90[OxOed86[11]].getElementsByName(Oxaa);if(Ox1f[OxOed86[26]]>0){return Ox1f.item(0);} ;return null;} ;function CuteEditor_AddMainMenuItems(Ox54b){} ;function CuteEditor_AddDropMenuItems(Ox54b,Ox552){} ;function CuteEditor_AddTagMenuItems(Ox54b,Ox554){} ;function CuteEditor_AddVerbMenuItems(Ox54b,Ox554){} ;function CuteEditor_OnInitialized(editor){} ;function CuteEditor_OnCommand(editor,Ox558,Ox559,Ox7){} ;function CuteEditor_OnChange(editor){} ;function CuteEditor_FilterCode(editor,Ox15e){return Ox15e;} ;function CuteEditor_FilterHTML(editor,Ox177){return Ox177;} ;function CuteEditor_FireChange(editor){window.CuteEditor_OnChange(editor);CuteEditor_FireEvent(editor,OxOed86[32],null);} ;function CuteEditor_FireInitialized(editor){window.CuteEditor_OnInitialized(editor);CuteEditor_FireEvent(editor,OxOed86[33],null);} ;function CuteEditor_FireCommand(editor,Ox558,Ox559,Ox7){var Ox27=window.CuteEditor_OnCommand(editor,Ox558,Ox559,Ox7);if(Ox27==true){return true;} ;var Ox560={};Ox560[OxOed86[34]]=Ox558;Ox560[OxOed86[35]]=Ox559;Ox560[OxOed86[36]]=Ox7;Ox560[OxOed86[37]]=true;CuteEditor_FireEvent(editor,OxOed86[38],Ox560);if(Ox560[OxOed86[37]]==false){return true;} ;} ;function CuteEditor_FireEvent(editor,Ox562,Ox563){if(Ox563==null){Ox563={};} ;var Ox564=editor.getAttribute(Ox562);if(Ox564){if( typeof (Ox564)==OxOed86[39]){editor[OxOed86[40]]= new Function(OxOed86[41],Ox564);} else {editor[OxOed86[40]]=Ox564;} ;editor._fireEventFunction(Ox563);} ;} ;function CuteEditor_GetEditor(element){for(var Ox3a=element;Ox3a!=null;Ox3a=Ox3a[OxOed86[42]]){if(Ox3a.getAttribute(OxOed86[43])==OxOed86[44]){return Ox3a;} ;} ;return null;} ;function CuteEditor_DropDownCommand(element,Ox971){var editor=CuteEditor_GetEditor(element);if(editor[OxOed86[45]]){return ;} ;if(element.getAttribute(OxOed86[46])==OxOed86[44]){var Ox2b=element.GetValue();if(Ox2b==OxOed86[47]){Ox2b=OxOed86[25];} ;var Oxed=element.GetText();if(Oxed==OxOed86[47]){Oxed=OxOed86[25];} ;element.SetSelectedIndex(0);editor.ExecCommand(Ox971,false,Ox2b,Oxed);} else {if(element[OxOed86[48]]){var Ox2b=element[OxOed86[48]];if(Ox2b==OxOed86[47]){Ox2b=OxOed86[25];} ;element[OxOed86[49]]=0;editor.ExecCommand(Ox971,false,Ox2b,Oxed);} else {element[OxOed86[49]]=0;} ;} ;editor.FocusDocument();} ;function CuteEditor_ExpandTreeDropDownItem(src,Ox638){var Oxcf=null;while(src!=null){if(src[OxOed86[50]]==OxOed86[51]){Oxcf=src;break ;} ;src=src[OxOed86[42]];} ;var Oxd0=Oxcf[OxOed86[52]].item(0);Oxcf[OxOed86[55]][OxOed86[54]][OxOed86[53]]=OxOed86[25];Oxd0[OxOed86[56]]=OxOed86[57]+Ox638+OxOed86[58];Oxcf[OxOed86[59]]= new Function(OxOed86[60]+Ox638+OxOed86[61]);Oxcf[OxOed86[62]]= new Function(OxOed86[60]+Ox638+OxOed86[61]);} ;function CuteEditor_CollapseTreeDropDownItem(src,Ox638){var Oxcf=null;while(src!=null){if(src[OxOed86[50]]==OxOed86[51]){Oxcf=src;break ;} ;src=src[OxOed86[42]];} ;var Oxd0=Oxcf[OxOed86[52]].item(0);Oxcf[OxOed86[55]][OxOed86[54]][OxOed86[53]]=OxOed86[63];Oxd0[OxOed86[56]]=OxOed86[57]+Ox638+OxOed86[64];Oxcf[OxOed86[59]]= new Function(OxOed86[65]+Ox638+OxOed86[61]);Oxcf[OxOed86[62]]= new Function(OxOed86[65]+Ox638+OxOed86[61]);} ;function Element_Contains(element,Ox68){if(!Browser_IsOpera()){if(element[OxOed86[66]]){return element.contains(Ox68);} ;} ;for(;Ox68!=null;Ox68=Ox68[OxOed86[42]]){if(element==Ox68){return true;} ;} ;return false;} ;function Element_SetUnselectable(element){element.setAttribute(OxOed86[67],OxOed86[68]);element.setAttribute(OxOed86[69],OxOed86[70]);var arr=Element_GetAllElements(element);var len=arr[OxOed86[26]];if(!len){return ;} ;for(var i=0;i<len;i++){arr[i].setAttribute(OxOed86[67],OxOed86[68]);arr[i].setAttribute(OxOed86[69],OxOed86[70]);} ;} ;function Event_GetEvent(Ox138){Ox138=Event_FindEvent(Ox138);if(Ox138==null){Debug_Todo(OxOed86[71]);} ;return Ox138;} ;function Frame_GetContentWindow(Ox246){if(Ox246[OxOed86[72]]){return Ox246[OxOed86[72]];} ;if(Ox246[OxOed86[73]]){if(Ox246[OxOed86[73]][OxOed86[74]]){return Ox246[OxOed86[73]][OxOed86[74]];} ;} ;var Ox90;if(Ox246[OxOed86[20]]){Ox90=window[OxOed86[75]][Ox246[OxOed86[20]]];if(Ox90){return Ox90;} ;} ;var len=window[OxOed86[75]][OxOed86[26]];for(var i=0;i<len;i++){Ox90=window[OxOed86[75]][i];if(Ox90[OxOed86[76]]==Ox246){return Ox90;} ;if(Ox90[OxOed86[11]]==Ox246[OxOed86[73]]){return Ox90;} ;} ;Debug_Todo(OxOed86[77]);} ;function Array_IndexOf(arr,Ox13a){for(var i=0;i<arr[OxOed86[26]];i++){if(arr[i]==Ox13a){return i;} ;} ;return -1;} ;function Array_Contains(arr,Ox13a){return Array_IndexOf(arr,Ox13a)!=-1;} ;function Event_FindEvent(Ox138){if(Ox138&&Ox138[OxOed86[78]]){return Ox138;} ;if(Browser_IsGecko()){return Event_FindEvent_FindEventFromCallers();} else {if(window[OxOed86[41]]){return window[OxOed86[41]];} ;return Event_FindEvent_FindEventFromWindows();} ;return null;} ;function Event_FindEvent_FindEventFromCallers(){var Ox75=Event_GetEvent[OxOed86[31]];for(var i=0;i<100;i++){if(!Ox75){break ;} ;var Ox138=Ox75[OxOed86[79]][0];if(Ox138&&Ox138[OxOed86[78]]){return Ox138;} ;Ox75=Ox75[OxOed86[31]];} ;} ;function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox141(window);function Ox141(Ox90){if(Ox90==null){return null;} ;if(Ox90[OxOed86[41]]){return Ox90[OxOed86[41]];} ;if(Array_Contains(arr,Ox90)){return null;} ;arr.push(Ox90);var Ox142=[];if(Ox90[OxOed86[80]]!=Ox90){Ox142.push(Ox90.parent);} ;if(Ox90[OxOed86[81]]!=Ox90[OxOed86[80]]){Ox142.push(Ox90.top);} ;if(Ox90[OxOed86[82]]){Ox142.push(Ox90.opener);} ;for(var i=0;i<Ox90[OxOed86[75]][OxOed86[26]];i++){Ox142.push(Ox90[OxOed86[75]][i]);} ;for(var i=0;i<Ox142[OxOed86[26]];i++){try{var Ox138=Ox141(Ox142[i]);if(Ox138){return Ox138;} ;} catch(x){} ;} ;return null;} ;} ;function Event_GetSrcElement(Ox138){Ox138=Event_GetEvent(Ox138);if(Ox138[OxOed86[83]]){return Ox138[OxOed86[83]];} ;if(Ox138[OxOed86[84]]){return Ox138[OxOed86[84]];} ;Debug_Todo(OxOed86[85]);return null;} ;function Event_GetFromElement(Ox138){Ox138=Event_GetEvent(Ox138);if(Ox138[OxOed86[86]]){return Ox138[OxOed86[86]];} ;if(Ox138[OxOed86[87]]){return Ox138[OxOed86[87]];} ;return null;} ;function Event_GetToElement(Ox138){Ox138=Event_GetEvent(Ox138);if(Ox138[OxOed86[88]]){return Ox138[OxOed86[88]];} ;if(Ox138[OxOed86[87]]){return Ox138[OxOed86[87]];} ;return null;} ;function Event_GetKeyCode(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOed86[89]];} ;function Event_GetClientX(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOed86[90]];} ;function Event_GetClientY(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOed86[91]];} ;function Event_GetOffsetX(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOed86[92]];} ;function Event_GetOffsetY(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOed86[93]];} ;function Event_IsLeftButton(Ox138){Ox138=Event_GetEvent(Ox138);if(Browser_IsWinIE()){return Ox138[OxOed86[94]]==1;} ;if(Browser_IsGecko()){return Ox138[OxOed86[94]]==0;} ;return Ox138[OxOed86[94]]==0;} ;function Event_IsCtrlKey(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOed86[95]];} ;function Event_IsAltKey(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOed86[96]];} ;function Event_IsShiftKey(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOed86[97]];} ;function Event_PreventDefault(Ox138){Ox138=Event_GetEvent(Ox138);Ox138[OxOed86[37]]=false;if(Ox138[OxOed86[78]]){Ox138.preventDefault();} ;} ;function Event_CancelBubble(Ox138){Ox138=Event_GetEvent(Ox138);Ox138[OxOed86[98]]=true;if(Ox138[OxOed86[99]]){Ox138.stopPropagation();} ;return false;} ;function Event_CancelEvent(Ox138){Ox138=Event_GetEvent(Ox138);Event_PreventDefault(Ox138);return Event_CancelBubble(Ox138);} ;function CuteEditor_BasicInitialize(editor){var Ox5c4=Browser_IsOpera();var Ox601= new Function(OxOed86[100]);var Ox975= new Function(OxOed86[101]);var Ox976=editor.GetScriptProperty(OxOed86[102]);var Ox977=editor.GetScriptProperty(OxOed86[103]);var Ox978=Ox976+OxOed86[104]+Ox977+OxOed86[105];var Ox979=Ox976+OxOed86[106];var images=editor.getElementsByTagName(OxOed86[107]);var len=images[OxOed86[26]];for(var i=0;i<len;i++){var img=images[i];if(img.getAttribute(OxOed86[108])&&!img.getAttribute(OxOed86[109])){img.setAttribute(OxOed86[109],img.getAttribute(OxOed86[108]));} ;var Ox1e=img.getAttribute(OxOed86[110]);var Ox552=img.getAttribute(OxOed86[111]);if(!(Ox1e||Ox552)){continue ;} ;var Ox97a=img.getAttribute(OxOed86[112]);if(parseInt(Ox97a)>=0){img[OxOed86[54]][OxOed86[113]]=OxOed86[114];img[OxOed86[54]][OxOed86[115]]=OxOed86[114];img[OxOed86[19]]=Ox979;img[OxOed86[54]][OxOed86[116]]=OxOed86[117]+Ox978+OxOed86[118];img[OxOed86[54]][OxOed86[119]]=OxOed86[120]+(Ox97a*20)+OxOed86[121];img[OxOed86[54]][OxOed86[53]]=OxOed86[25];} ;if(!Ox1e&&!Ox552){if(Ox5c4){img[OxOed86[122]]=CuteEditor_OperaHandleImageLoaded;} ;continue ;} ;if(img[OxOed86[123]]!=OxOed86[124]){img[OxOed86[123]]=OxOed86[125];img[OxOed86[126]]= new Function(OxOed86[127]);img[OxOed86[128]]= new Function(OxOed86[129]);img[OxOed86[62]]= new Function(OxOed86[130]);img[OxOed86[131]]= new Function(OxOed86[132]);} ;if(!img[OxOed86[133]]){img[OxOed86[133]]=Event_CancelEvent;} ;if(!img[OxOed86[134]]){img[OxOed86[134]]=Event_CancelEvent;} ;if(Ox1e){var Ox75=Ox601;if(img[OxOed86[59]]==null){img[OxOed86[59]]=Ox75;} ;if(img[OxOed86[135]]==null){img[OxOed86[135]]=Ox75;} ;} else {if(Ox552){if(img[OxOed86[59]]==null){img[OxOed86[59]]=Ox975;} ;} ;} ;} ;var Ox66d=Window_GetElement(window,editor.GetScriptProperty(OxOed86[136]),true);var Ox66e=Window_GetElement(window,editor.GetScriptProperty(OxOed86[137]),true);var Ox66a=Window_GetElement(window,editor.GetScriptProperty(OxOed86[138]),true);Ox66a[OxOed86[123]]+=OxOed86[139];Ox66d[OxOed86[123]]+=OxOed86[140];Ox66e[OxOed86[123]]+=OxOed86[140];Element_SetUnselectable(Ox66d);Element_SetUnselectable(Ox66e);try{editor[OxOed86[54]][OxOed86[141]]=OxOed86[142];} catch(x){} ;var Ox6f6=editor.GetScriptProperty(OxOed86[143]);switch(Ox6f6){case OxOed86[144]:Ox66d[OxOed86[54]][OxOed86[53]]=OxOed86[25];break ;;case OxOed86[145]:Ox66e[OxOed86[54]][OxOed86[53]]=OxOed86[25];break ;;case OxOed86[146]:break ;;} ;} ;function CuteEditor_OperaHandleImageLoaded(){var img=this;if(img[OxOed86[54]][OxOed86[53]]){img[OxOed86[54]][OxOed86[53]]=OxOed86[63];setTimeout(function Ox97c(){img[OxOed86[54]][OxOed86[53]]=OxOed86[25];} ,1);} ;} ;function CuteEditor_ButtonOver(element){if(!element[OxOed86[147]]){element[OxOed86[133]]=Event_CancelEvent;element[OxOed86[128]]=CuteEditor_ButtonOut;element[OxOed86[62]]=CuteEditor_ButtonDown;element[OxOed86[131]]=CuteEditor_ButtonUp;Element_SetUnselectable(element);element[OxOed86[147]]=true;} ;element[OxOed86[148]]=true;element[OxOed86[123]]=OxOed86[149];} ;function CuteEditor_ButtonOut(){var element=this;element[OxOed86[123]]=OxOed86[125];element[OxOed86[148]]=false;} ;function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this;element[OxOed86[123]]=OxOed86[150];} ;function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxOed86[148]]){element[OxOed86[123]]=OxOed86[149];} else {element[OxOed86[123]]=OxOed86[151];} ;} ;function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxOed86[147]]){element[OxOed86[133]]=Event_CancelEvent;element[OxOed86[128]]=CuteEditor_ColorPicker_ButtonOut;element[OxOed86[62]]=CuteEditor_ColorPicker_ButtonDown;Element_SetUnselectable(element);element[OxOed86[147]]=true;} ;element[OxOed86[148]]=true;element[OxOed86[54]][OxOed86[152]]=OxOed86[153];element[OxOed86[54]][OxOed86[154]]=OxOed86[155];element[OxOed86[54]][OxOed86[156]]=OxOed86[157];} ;function CuteEditor_ColorPicker_ButtonOut(){var element=this;element[OxOed86[148]]=false;element[OxOed86[54]][OxOed86[152]]=OxOed86[158];element[OxOed86[54]][OxOed86[154]]=OxOed86[25];element[OxOed86[54]][OxOed86[156]]=OxOed86[157];} ;function CuteEditor_ColorPicker_ButtonDown(){var element=this;element[OxOed86[54]][OxOed86[152]]=OxOed86[159];element[OxOed86[54]][OxOed86[154]]=OxOed86[25];element[OxOed86[54]][OxOed86[156]]=OxOed86[157];} ;function CuteEditor_ButtonCommandOver(element){element[OxOed86[148]]=true;if(element[OxOed86[160]]){element[OxOed86[123]]=OxOed86[161];} else {element[OxOed86[123]]=OxOed86[149];} ;} ;function CuteEditor_ButtonCommandOut(element){element[OxOed86[148]]=false;if(element[OxOed86[162]]){element[OxOed86[123]]=OxOed86[163];} else {if(element[OxOed86[160]]){element[OxOed86[123]]=OxOed86[161];} else {if(element[OxOed86[20]]!=OxOed86[164]){element[OxOed86[123]]=OxOed86[125];} ;} ;} ;} ;function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ;element[OxOed86[123]]=OxOed86[150];} ;function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxOed86[160]]){element[OxOed86[123]]=OxOed86[161];return ;} ;if(element[OxOed86[148]]){element[OxOed86[123]]=OxOed86[149];} else {if(element[OxOed86[162]]){element[OxOed86[123]]=OxOed86[163];} else {element[OxOed86[123]]=OxOed86[125];} ;} ;} ;var CuteEditorGlobalFunctions=[CuteEditor_GetEditor,CuteEditor_ButtonOver,CuteEditor_ButtonOut,CuteEditor_ButtonDown,CuteEditor_ButtonUp,CuteEditor_ColorPicker_ButtonOver,CuteEditor_ColorPicker_ButtonOut,CuteEditor_ColorPicker_ButtonDown,CuteEditor_ButtonCommandOver,CuteEditor_ButtonCommandOut,CuteEditor_ButtonCommandDown,CuteEditor_ButtonCommandUp,CuteEditor_DropDownCommand,CuteEditor_ExpandTreeDropDownItem,CuteEditor_CollapseTreeDropDownItem,CuteEditor_OnInitialized,CuteEditor_OnCommand,CuteEditor_OnChange,CuteEditor_AddVerbMenuItems,CuteEditor_AddTagMenuItems,CuteEditor_AddMainMenuItems,CuteEditor_AddDropMenuItems,CuteEditor_FilterCode,CuteEditor_FilterHTML];function SetupCuteEditorGlobalFunctions(){for(var i=0;i<CuteEditorGlobalFunctions[OxOed86[26]];i++){var Ox75=CuteEditorGlobalFunctions[i];var name=Ox75+OxOed86[25];name=name.substr(8,name.indexOf(OxOed86[165])-8).replace(/\s/g,OxOed86[25]);if(!window[name]){window[name]=Ox75;} ;} ;} ;SetupCuteEditorGlobalFunctions();var __danainfo=null;var danaurl=window[OxOed86[167]][OxOed86[166]];var danapos=danaurl.indexOf(OxOed86[168]);if(danapos!=-1){var pluspos1=danaurl.indexOf(OxOed86[169],danapos+10);var pluspos2=danaurl.indexOf(OxOed86[170],danapos+10);if(pluspos1!=-1&&pluspos1<pluspos2){pluspos2=pluspos1;} ;__danainfo=danaurl.substring(danapos,pluspos2)+OxOed86[170];} ;function CuteEditor_GetScriptProperty(name){return this[OxOed86[171]][name];} ;function CuteEditor_SetScriptProperty(name,Ox2b){if(Ox2b==null){this[OxOed86[171]][name]=null;} else {this[OxOed86[171]][name]=String(Ox2b);} ;} ;function CuteEditorInitialize(Ox987,Ox988){var editor=Window_GetElement(window,Ox987,true);editor[OxOed86[171]]=Ox988;editor[OxOed86[172]]=CuteEditor_GetScriptProperty;var Ox66a=Window_GetElement(window,editor.GetScriptProperty(OxOed86[138]),true);var editwin,editdoc;try{editwin=Frame_GetContentWindow(Ox66a);editdoc=editwin[OxOed86[11]];} catch(x){} ;var Ox989=false;var Ox98a;var Ox98b=false;var Ox98c=editor.GetScriptProperty(OxOed86[102])+OxOed86[173];function Ox98d(){if( typeof (window[OxOed86[174]])==OxOed86[175]){return ;} ;LoadXMLAsync(OxOed86[176],Ox98c+OxOed86[177],Ox98e);} ;function Ox98e(Ox188){if(Ox188[OxOed86[178]]!=200){alert(OxOed86[179]);return ;} ;CuteEditorInstallScriptCode(Ox188.responseText,OxOed86[174]);if(Ox989){Ox990();} ;} ;function Ox98f(Ox188){if(Ox188[OxOed86[178]]!=200){alert(OxOed86[180]);return ;} ;CuteEditorInstallScriptCode(Ox188.responseText,OxOed86[174]);if(Ox989){Ox990();} ;} ;function Ox990(){if(Ox98b){return ;} ;Ox98b=true;window.CuteEditorImplementation(editor);try{editor[OxOed86[54]][OxOed86[141]]=OxOed86[25];} catch(x){} ;try{editdoc[OxOed86[181]][OxOed86[54]][OxOed86[141]]=OxOed86[25];} catch(x){} ;var Ox991=editor.GetScriptProperty(OxOed86[182]);if(Ox991){editor.Eval(Ox991);} ;} ;function Ox992(){if(!Element_Contains(window[OxOed86[11]].body,editor)){return ;} ;try{Ox66a=Window_GetElement(window,editor.GetScriptProperty(OxOed86[138]),true);editwin=Frame_GetContentWindow(Ox66a);editdoc=editwin[OxOed86[11]];var Oxbf=editdoc[OxOed86[181]];} catch(x){setTimeout(Ox992,100);return ;} ;if(!editdoc[OxOed86[181]]){setTimeout(Ox992,100);return ;} ;if(!Ox989){Ox66a[OxOed86[54]][OxOed86[53]]=OxOed86[183];if(Browser_IsOpera()){editdoc[OxOed86[181]][OxOed86[184]]=true;} else {if(Browser_IsGecko()){editdoc[OxOed86[181]][OxOed86[56]]=OxOed86[185];} ;editdoc[OxOed86[186]]=OxOed86[68];} ;Ox989=true;setTimeout(Ox992,50);return ;} ;if( typeof (window[OxOed86[174]])==OxOed86[175]){Ox990();} else {try{editdoc[OxOed86[181]][OxOed86[54]][OxOed86[141]]=OxOed86[142];} catch(x){} ;} ;} ;var Ox993=0;var Ox3a=CuteEditor_Find_DisplayNone(editor);if(Ox3a){function Ox994(){if(Ox3a[OxOed86[54]][OxOed86[53]]!=OxOed86[63]){window.clearInterval(Ox993);Ox993=OxOed86[25];CuteEditorInitialize(Ox987,Ox988);} ;} ;Ox993=setInterval(Ox994,1000);return ;} ;function CuteEditor_Find_DisplayNone(element){var Ox9dc;for(var Ox3a=element;Ox3a!=null;Ox3a=Ox3a[OxOed86[42]]){if(Ox3a[OxOed86[54]]&&Ox3a[OxOed86[54]][OxOed86[53]]==OxOed86[63]){Ox9dc=Ox3a;break ;} ;} ;return Ox9dc;} ;function Ox995(Ox996){function Ox997(Ox1c9,Ox998,Ox999,Ox103,Ox99a,Ox99b){var Ox99c= new Array(0x1010400,0,0x10000,0x1010404,0x1010004,0x10404,0x4,0x10000,0x400,0x1010400,0x1010404,0x400,0x1000404,0x1010004,0x1000000,0x4,0x404,0x1000400,0x1000400,0x10400,0x10400,0x1010000,0x1010000,0x1000404,0x10004,0x1000004,0x1000004,0x10004,0,0x404,0x10404,0x1000000,0x10000,0x1010404,0x4,0x1010000,0x1010400,0x1000000,0x1000000,0x400,0x1010004,0x10000,0x10400,0x1000004,0x400,0x4,0x1000404,0x10404,0x1010404,0x10004,0x1010000,0x1000404,0x1000004,0x404,0x10404,0x1010400,0x404,0x1000400,0x1000400,0,0x10004,0x10400,0,0x1010004);var Ox99d= new Array(-0x7fef7fe0,-0x7fff8000,0x8000,0x108020,0x100000,0x20,-0x7fefffe0,-0x7fff7fe0,-0x7fffffe0,-0x7fef7fe0,-0x7fef8000,-0x80000000,-0x7fff8000,0x100000,0x20,-0x7fefffe0,0x108000,0x100020,-0x7fff7fe0,0,-0x80000000,0x8000,0x108020,-0x7ff00000,0x100020,-0x7fffffe0,0,0x108000,0x8020,-0x7fef8000,-0x7ff00000,0x8020,0,0x108020,-0x7fefffe0,0x100000,-0x7fff7fe0,-0x7ff00000,-0x7fef8000,0x8000,-0x7ff00000,-0x7fff8000,0x20,-0x7fef7fe0,0x108020,0x20,0x8000,-0x80000000,0x8020,-0x7fef8000,0x100000,-0x7fffffe0,0x100020,-0x7fff7fe0,-0x7fffffe0,0x100020,0x108000,0,-0x7fff8000,0x8020,-0x80000000,-0x7fefffe0,-0x7fef7fe0,0x108000);var Ox99e= new Array(0x208,0x8020200,0,0x8020008,0x8000200,0,0x20208,0x8000200,0x20008,0x8000008,0x8000008,0x20000,0x8020208,0x20008,0x8020000,0x208,0x8000000,0x8,0x8020200,0x200,0x20200,0x8020000,0x8020008,0x20208,0x8000208,0x20200,0x20000,0x8000208,0x8,0x8020208,0x200,0x8000000,0x8020200,0x8000000,0x20008,0x208,0x20000,0x8020200,0x8000200,0,0x200,0x20008,0x8020208,0x8000200,0x8000008,0x200,0,0x8020008,0x8000208,0x20000,0x8000000,0x8020208,0x8,0x20208,0x20200,0x8000008,0x8020000,0x8000208,0x208,0x8020000,0x20208,0x8,0x8020008,0x20200);var Ox99f= new Array(0x802001,0x2081,0x2081,0x80,0x802080,0x800081,0x800001,0x2001,0,0x802000,0x802000,0x802081,0x81,0,0x800080,0x800001,0x1,0x2000,0x800000,0x802001,0x80,0x800000,0x2001,0x2080,0x800081,0x1,0x2080,0x800080,0x2000,0x802080,0x802081,0x81,0x800080,0x800001,0x802000,0x802081,0x81,0,0,0x802000,0x2080,0x800080,0x800081,0x1,0x802001,0x2081,0x2081,0x80,0x802081,0x81,0x1,0x2000,0x800001,0x2001,0x802080,0x800081,0x2001,0x2080,0x800000,0x802001,0x80,0x800000,0x2000,0x802080);var Ox9a0= new Array(0x100,0x2080100,0x2080000,0x42000100,0x80000,0x100,0x40000000,0x2080000,0x40080100,0x80000,0x2000100,0x40080100,0x42000100,0x42080000,0x80100,0x40000000,0x2000000,0x40080000,0x40080000,0,0x40000100,0x42080100,0x42080100,0x2000100,0x42080000,0x40000100,0,0x42000000,0x2080100,0x2000000,0x42000000,0x80100,0x80000,0x42000100,0x100,0x2000000,0x40000000,0x2080000,0x42000100,0x40080100,0x2000100,0x40000000,0x42080000,0x2080100,0x40080100,0x100,0x2000000,0x42080000,0x42080100,0x80100,0x42000000,0x42080100,0x2080000,0,0x40080000,0x42000000,0x80100,0x2000100,0x40000100,0x80000,0,0x40080000,0x2080100,0x40000100);var Ox9a1= new Array(0x20000010,0x20400000,0x4000,0x20404010,0x20400000,0x10,0x20404010,0x400000,0x20004000,0x404010,0x400000,0x20000010,0x400010,0x20004000,0x20000000,0x4010,0,0x400010,0x20004010,0x4000,0x404000,0x20004010,0x10,0x20400010,0x20400010,0,0x404010,0x20404000,0x4010,0x404000,0x20404000,0x20000000,0x20004000,0x10,0x20400010,0x404000,0x20404010,0x400000,0x4010,0x20000010,0x400000,0x20004000,0x20000000,0x4010,0x20000010,0x20404010,0x404000,0x20400000,0x404010,0x20404000,0,0x20400010,0x10,0x4000,0x20400000,0x404010,0x4000,0x400010,0x20004010,0,0x20404000,0x20000000,0x400010,0x20004010);var Ox9a2= new Array(0x200000,0x4200002,0x4000802,0,0x800,0x4000802,0x200802,0x4200800,0x4200802,0x200000,0,0x4000002,0x2,0x4000000,0x4200002,0x802,0x4000800,0x200802,0x200002,0x4000800,0x4000002,0x4200000,0x4200800,0x200002,0x4200000,0x800,0x802,0x4200802,0x200800,0x2,0x4000000,0x200800,0x4000000,0x200800,0x200000,0x4000802,0x4000802,0x4200002,0x4200002,0x2,0x200002,0x4000000,0x4000800,0x200000,0x4200800,0x802,0x200802,0x4200800,0x802,0x4000002,0x4200802,0x4200000,0x200800,0,0x2,0x4200802,0,0x200802,0x4200000,0x800,0x4000002,0x4000800,0x800,0x200002);var Ox9a3= new Array(0x10001040,0x1000,0x40000,0x10041040,0x10000000,0x10001040,0x40,0x10000000,0x40040,0x10040000,0x10041040,0x41000,0x10041000,0x41040,0x1000,0x40,0x10040000,0x10000040,0x10001000,0x1040,0x41000,0x40040,0x10040040,0x10041000,0x1040,0,0,0x10040040,0x10000040,0x10001000,0x41040,0x40000,0x41040,0x40000,0x10041000,0x1000,0x40,0x10040040,0x1000,0x41040,0x10001000,0x40,0x10000040,0x10040000,0x10040040,0x10000000,0x40000,0x10001040,0,0x10041040,0x40040,0x10000040,0x10040000,0x10001000,0x10001040,0,0x10041040,0x41000,0x41000,0x1040,0x1040,0x40040,0x10000000,0x10041000);var Ox1cc=Ox9b1(Ox1c9);var m=0,i,Ox5a,Oxf6,Ox9a4,Ox9a5,Ox9a6,Ox5b7,Ox948,Ox9a7;var Ox9a8,Ox9a9,Ox9aa,Ox9ab;var Ox9ac,Ox9ad;var len=Ox998[OxOed86[26]];var Ox9ae=0;var Ox9af=Ox1cc[OxOed86[26]]==32?3:9;if(Ox9af==3){Ox9a7=Ox999? new Array(0,32,2): new Array(30,-2,-2);} else {Ox9a7=Ox999? new Array(0,32,2,62,30,-2,64,96,2): new Array(94,62,-2,32,64,2,30,-2,-2);} ;var Oxf7=OxOed86[25];var Ox9b0=OxOed86[25];if(Ox103==1){Ox9a8=(Ox99a.charCodeAt(m++)<<24)|(Ox99a.charCodeAt(m++)<<16)|(Ox99a.charCodeAt(m++)<<8)|Ox99a.charCodeAt(m++);Ox9aa=(Ox99a.charCodeAt(m++)<<24)|(Ox99a.charCodeAt(m++)<<16)|(Ox99a.charCodeAt(m++)<<8)|Ox99a.charCodeAt(m++);m=0;} ;while(m<len){Ox5b7=(Ox998.charCodeAt(m++)<<24)|(Ox998.charCodeAt(m++)<<16)|(Ox998.charCodeAt(m++)<<8)|Ox998.charCodeAt(m++);Ox948=(Ox998.charCodeAt(m++)<<24)|(Ox998.charCodeAt(m++)<<16)|(Ox998.charCodeAt(m++)<<8)|Ox998.charCodeAt(m++);if(Ox103==1){if(Ox999){Ox5b7^=Ox9a8;Ox948^=Ox9aa;} else {Ox9a9=Ox9a8;Ox9ab=Ox9aa;Ox9a8=Ox5b7;Ox9aa=Ox948;} ;} ;Oxf6=((Ox5b7>>>4)^Ox948)&0x0f0f0f0f;Ox948^=Oxf6;Ox5b7^=(Oxf6<<4);Oxf6=((Ox5b7>>>16)^Ox948)&0x0000ffff;Ox948^=Oxf6;Ox5b7^=(Oxf6<<16);Oxf6=((Ox948>>>2)^Ox5b7)&0x33333333;Ox5b7^=Oxf6;Ox948^=(Oxf6<<2);Oxf6=((Ox948>>>8)^Ox5b7)&0x00ff00ff;Ox5b7^=Oxf6;Ox948^=(Oxf6<<8);Oxf6=((Ox5b7>>>1)^Ox948)&0x55555555;Ox948^=Oxf6;Ox5b7^=(Oxf6<<1);Ox5b7=((Ox5b7<<1)|(Ox5b7>>>31));Ox948=((Ox948<<1)|(Ox948>>>31));for(Ox5a=0;Ox5a<Ox9af;Ox5a+=3){Ox9ac=Ox9a7[Ox5a+1];Ox9ad=Ox9a7[Ox5a+2];for(i=Ox9a7[Ox5a];i!=Ox9ac;i+=Ox9ad){Ox9a5=Ox948^Ox1cc[i];Ox9a6=((Ox948>>>4)|(Ox948<<28))^Ox1cc[i+1];Oxf6=Ox5b7;Ox5b7=Ox948;Ox948=Oxf6^(Ox99d[(Ox9a5>>>24)&0x3f]|Ox99f[(Ox9a5>>>16)&0x3f]|Ox9a1[(Ox9a5>>>8)&0x3f]|Ox9a3[Ox9a5&0x3f]|Ox99c[(Ox9a6>>>24)&0x3f]|Ox99e[(Ox9a6>>>16)&0x3f]|Ox9a0[(Ox9a6>>>8)&0x3f]|Ox9a2[Ox9a6&0x3f]);} ;Oxf6=Ox5b7;Ox5b7=Ox948;Ox948=Oxf6;} ;Ox5b7=((Ox5b7>>>1)|(Ox5b7<<31));Ox948=((Ox948>>>1)|(Ox948<<31));Oxf6=((Ox5b7>>>1)^Ox948)&0x55555555;Ox948^=Oxf6;Ox5b7^=(Oxf6<<1);Oxf6=((Ox948>>>8)^Ox5b7)&0x00ff00ff;Ox5b7^=Oxf6;Ox948^=(Oxf6<<8);Oxf6=((Ox948>>>2)^Ox5b7)&0x33333333;Ox5b7^=Oxf6;Ox948^=(Oxf6<<2);Oxf6=((Ox5b7>>>16)^Ox948)&0x0000ffff;Ox948^=Oxf6;Ox5b7^=(Oxf6<<16);Oxf6=((Ox5b7>>>4)^Ox948)&0x0f0f0f0f;Ox948^=Oxf6;Ox5b7^=(Oxf6<<4);if(Ox103==1){if(Ox999){Ox9a8=Ox5b7;Ox9aa=Ox948;} else {Ox5b7^=Ox9a9;Ox948^=Ox9ab;} ;} ;Ox9b0+=String.fromCharCode((Ox5b7>>>24),((Ox5b7>>>16)&0xff),((Ox5b7>>>8)&0xff),(Ox5b7&0xff),(Ox948>>>24),((Ox948>>>16)&0xff),((Ox948>>>8)&0xff),(Ox948&0xff));Ox9ae+=8;if(Ox9ae==512){Oxf7+=Ox9b0;Ox9b0=OxOed86[25];Ox9ae=0;} ;} ;return Oxf7+Ox9b0;} ;function Ox9b1(Ox1c9){var Ox9b2= new Array(0,0x4,0x20000000,0x20000004,0x10000,0x10004,0x20010000,0x20010004,0x200,0x204,0x20000200,0x20000204,0x10200,0x10204,0x20010200,0x20010204);var Ox9b3= new Array(0,0x1,0x100000,0x100001,0x4000000,0x4000001,0x4100000,0x4100001,0x100,0x101,0x100100,0x100101,0x4000100,0x4000101,0x4100100,0x4100101);var Ox9b4= new Array(0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808,0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808);var Ox9b5= new Array(0,0x200000,0x8000000,0x8200000,0x2000,0x202000,0x8002000,0x8202000,0x20000,0x220000,0x8020000,0x8220000,0x22000,0x222000,0x8022000,0x8222000);var Ox9b6= new Array(0,0x40000,0x10,0x40010,0,0x40000,0x10,0x40010,0x1000,0x41000,0x1010,0x41010,0x1000,0x41000,0x1010,0x41010);var Ox9b7= new Array(0,0x400,0x20,0x420,0,0x400,0x20,0x420,0x2000000,0x2000400,0x2000020,0x2000420,0x2000000,0x2000400,0x2000020,0x2000420);var Ox9b8= new Array(0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002,0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002);var Ox9b9= new Array(0,0x10000,0x800,0x10800,0x20000000,0x20010000,0x20000800,0x20010800,0x20000,0x30000,0x20800,0x30800,0x20020000,0x20030000,0x20020800,0x20030800);var Ox9ba= new Array(0,0x40000,0,0x40000,0x2,0x40002,0x2,0x40002,0x2000000,0x2040000,0x2000000,0x2040000,0x2000002,0x2040002,0x2000002,0x2040002);var Ox9bb= new Array(0,0x10000000,0x8,0x10000008,0,0x10000000,0x8,0x10000008,0x400,0x10000400,0x408,0x10000408,0x400,0x10000400,0x408,0x10000408);var Ox9bc= new Array(0,0x20,0,0x20,0x100000,0x100020,0x100000,0x100020,0x2000,0x2020,0x2000,0x2020,0x102000,0x102020,0x102000,0x102020);var Ox9bd= new Array(0,0x1000000,0x200,0x1000200,0x200000,0x1200000,0x200200,0x1200200,0x4000000,0x5000000,0x4000200,0x5000200,0x4200000,0x5200000,0x4200200,0x5200200);var Ox9be= new Array(0,0x1000,0x8000000,0x8001000,0x80000,0x81000,0x8080000,0x8081000,0x10,0x1010,0x8000010,0x8001010,0x80010,0x81010,0x8080010,0x8081010);var Ox9bf= new Array(0,0x4,0x100,0x104,0,0x4,0x100,0x104,0x1,0x5,0x101,0x105,0x1,0x5,0x101,0x105);var Ox9af=Ox1c9[OxOed86[26]]>8?3:1;var Ox1cc= new Array(32*Ox9af);var Ox9c0= new Array(0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0);var Ox9c1,Ox9c2,m=0,Ox8d=0,Oxf6;var Ox5b7,Ox948;for(var Ox5a=0;Ox5a<Ox9af;Ox5a++){Ox5b7=(Ox1c9.charCodeAt(m++)<<24)|(Ox1c9.charCodeAt(m++)<<16)|(Ox1c9.charCodeAt(m++)<<8)|Ox1c9.charCodeAt(m++);Ox948=(Ox1c9.charCodeAt(m++)<<24)|(Ox1c9.charCodeAt(m++)<<16)|(Ox1c9.charCodeAt(m++)<<8)|Ox1c9.charCodeAt(m++);Oxf6=((Ox5b7>>>4)^Ox948)&0x0f0f0f0f;Ox948^=Oxf6;Ox5b7^=(Oxf6<<4);Oxf6=((Ox948>>>-16)^Ox5b7)&0x0000ffff;Ox5b7^=Oxf6;Ox948^=(Oxf6<<-16);Oxf6=((Ox5b7>>>2)^Ox948)&0x33333333;Ox948^=Oxf6;Ox5b7^=(Oxf6<<2);Oxf6=((Ox948>>>-16)^Ox5b7)&0x0000ffff;Ox5b7^=Oxf6;Ox948^=(Oxf6<<-16);Oxf6=((Ox5b7>>>1)^Ox948)&0x55555555;Ox948^=Oxf6;Ox5b7^=(Oxf6<<1);Oxf6=((Ox948>>>8)^Ox5b7)&0x00ff00ff;Ox5b7^=Oxf6;Ox948^=(Oxf6<<8);Oxf6=((Ox5b7>>>1)^Ox948)&0x55555555;Ox948^=Oxf6;Ox5b7^=(Oxf6<<1);Oxf6=(Ox5b7<<8)|((Ox948>>>20)&0x000000f0);Ox5b7=(Ox948<<24)|((Ox948<<8)&0xff0000)|((Ox948>>>8)&0xff00)|((Ox948>>>24)&0xf0);Ox948=Oxf6;for(i=0;i<Ox9c0[OxOed86[26]];i++){if(Ox9c0[i]){Ox5b7=(Ox5b7<<2)|(Ox5b7>>>26);Ox948=(Ox948<<2)|(Ox948>>>26);} else {Ox5b7=(Ox5b7<<1)|(Ox5b7>>>27);Ox948=(Ox948<<1)|(Ox948>>>27);} ;Ox5b7&=-0xf;Ox948&=-0xf;Ox9c1=Ox9b2[Ox5b7>>>28]|Ox9b3[(Ox5b7>>>24)&0xf]|Ox9b4[(Ox5b7>>>20)&0xf]|Ox9b5[(Ox5b7>>>16)&0xf]|Ox9b6[(Ox5b7>>>12)&0xf]|Ox9b7[(Ox5b7>>>8)&0xf]|Ox9b8[(Ox5b7>>>4)&0xf];Ox9c2=Ox9b9[Ox948>>>28]|Ox9ba[(Ox948>>>24)&0xf]|Ox9bb[(Ox948>>>20)&0xf]|Ox9bc[(Ox948>>>16)&0xf]|Ox9bd[(Ox948>>>12)&0xf]|Ox9be[(Ox948>>>8)&0xf]|Ox9bf[(Ox948>>>4)&0xf];Oxf6=((Ox9c2>>>16)^Ox9c1)&0x0000ffff;Ox1cc[Ox8d++]=Ox9c1^Oxf6;Ox1cc[Ox8d++]=Ox9c2^(Oxf6<<16);} ;} ;return Ox1cc;} ;var Ox998=[];for(var i=0;i<Ox996[OxOed86[26]];i++){Ox998.push(String.fromCharCode(Ox996[i]));} ;Ox998=Ox998.join(OxOed86[25]);var Ox9c3=[0x46,0x35,0x32,0x42,0x31,0x38,0x36,0x46];var Ox1c9=[];for(var i=0;i<Ox9c3[OxOed86[26]];i++){Ox1c9.push(String.fromCharCode(Ox9c3[i]));} ;Ox1c9=Ox1c9.join(OxOed86[25]);var Ox99a=Ox1c9;return Ox997(Ox1c9,Ox998,0,1,Ox99a);} ;var Ox9c4;var Ox9c5;var Ox9c6;var Ox9c7;function Ox9c8(Ox9c9){var Ox188=CreateXMLHttpRequest();var Ox9ca=Ox9d9;if(!Ox9c4){Ox188.open(OxOed86[176],editor.GetScriptProperty(OxOed86[102])+OxOed86[187]+OxOed86[188]+ new Date().getTime(),false);Ox188.send(OxOed86[25]);if(Ox188[OxOed86[178]]!=200){return Ox9ca(1000,OxOed86[189]);} ;Ox9c4=Ox188[OxOed86[190]].toUpperCase();} ;if(!Ox9c5){Ox9c5={};var Ox9cb=[OxOed86[191],OxOed86[192],OxOed86[193],OxOed86[194],OxOed86[195],OxOed86[196],OxOed86[197],OxOed86[198],OxOed86[199],OxOed86[200],OxOed86[201],OxOed86[202],OxOed86[203],OxOed86[204],OxOed86[205],OxOed86[206]];for(var i=0;i<Ox9cb[OxOed86[26]];i++){Ox9c5[Ox9cb[i]]=i;} ;} ;try{if(!Ox9c6){if(Ox9c4.substring(0,16)!=OxOed86[207]){return Ox9ca(1001);} ;var Ox9cc=[];for(var i=0;i<Ox9c4[OxOed86[26]];i+=2){Ox9cc.push(Ox9c5[Ox9c4.charAt(i)]*16+Ox9c5[Ox9c4.charAt(i+1)]);} ;Ox9cc.splice(0,8);Ox9cc.splice(0,123);var Ox9cd=Ox9cc[0]+Ox9cc[1]*256;Ox9cc.splice(0,4);var Ox9ce=Ox9cc.slice(0,Ox9cd);var Ox9cf=Ox995(Ox9ce);Ox9cf=Ox9cf.replace(/^\xEF\xBB\xBF/,OxOed86[25]).replace(/[\x00-\x08]*$/,OxOed86[25]);Ox9c6=Ox9cf.split(OxOed86[208]);} ;if(Ox9c6[OxOed86[26]]!=10){return Ox9ca(1002,Ox9c6.length);} ;var Ox9d0=Ox9c6[9].split(OxOed86[209]);var Ox9d1= new Date(parseFloat(Ox9d0[2]),parseFloat(Ox9d0[1])-1,parseFloat(Ox9d0[0]));var Ox9d2=Ox9d1.getTime();if((Ox9c6[5]<<2)!=1200685124){return Ox9ca(1003,Ox9c6[5]);} ;var Ox9d3=window[OxOed86[167]][OxOed86[166]].split(OxOed86[211])[1].split(OxOed86[209])[0].split(OxOed86[210])[0].toLowerCase();var Ox9d4=false;if(Ox9d3==String.fromCharCode(108,111,99,97,108,104,111,115,116)){Ox9d4=true;} ;if(Ox9d3==String.fromCharCode(49,50,55,46,48,46,48,46,49)){Ox9d4=true;} ;function Ox9d5(Ox9d6){var Oxe=Ox9d6.split(OxOed86[212]);if(Oxe[0]==OxOed86[213]){Oxe.splice(0,1);} ;return Oxe.join(OxOed86[212]);} ;Ox9d3=Ox9d5(Ox9d3);var Ox9d7=Ox9c6[7].toLowerCase();var Ox9d8=Ox9c6[8];switch(parseInt(Ox9c6[6])){case 0:if(Ox9d2< new Date().getTime()){return Ox9ca(20000,Ox9d1);} ;if(Ox9d4){break ;} ;return Ox9ca(20001,Ox9d3);;case 1:if(Ox9d4){break ;} ;if(Ox9d7!=Ox9d3&&Ox9d7.indexOf(Ox9d3)==-1){return Ox9ca(20010,Ox9d3,Ox9d7);} ;break ;;case 2:if(Ox9d4){break ;} ;if(!Ox9c7){Ox188.open(OxOed86[176],editor.GetScriptProperty(OxOed86[102])+OxOed86[187]+OxOed86[214]+ new Date().getTime(),false);Ox188.send(OxOed86[25]);if(Ox188[OxOed86[178]]!=200){return Ox9ca(1000,OxOed86[215]);} ;Ox9c7=Ox188[OxOed86[190]];} ;if(Ox9d8!=Ox9c7&&Ox9d8.indexOf(Ox9c7)==-1){return Ox9ca(20020,Ox9c7,Ox9d8);} ;break ;;case 3:if(Ox9d4){break ;} ;if(Ox9d7.indexOf(Ox9d3)==-1){return Ox9ca(20030,Ox9d3,Ox9d7);} ;break ;;case 4:if(Ox9d2< new Date().getTime()){return Ox9ca(20040,Ox9d1);} ;break ;;case 5:break ;;default:return Ox9ca(1004,parseInt(Ox9c6[6]));;} ;} catch(x){return Ox9ca(1000,x.message);} ;return Ox9c9();} ;function Ox9d9(Ox9da,Ox616){var msg=OxOed86[25];switch(Ox9da){case 1000:msg=Ox616;break ;;case 1001:msg=OxOed86[216];break ;;case 1002:msg=OxOed86[217]+Ox616;break ;;case 1003:msg=OxOed86[218];break ;;case 1004:msg=OxOed86[219];break ;;case 20000:msg=OxOed86[220];break ;;case 20001:msg=OxOed86[221];break ;;case 20010:msg=OxOed86[222];break ;;case 20020:msg=OxOed86[223];break ;;case 20030:msg=OxOed86[224];break ;;case 20040:msg=OxOed86[225];break ;;} ;try{return alert(OxOed86[226]+msg);} catch(x){} ;} ;CuteEditor_BasicInitialize(editor);Ox98d();Ox9c8(Ox992);} ;function CuteEditorInstallScriptCode(Ox8c0,Ox8c1){eval(Ox8c0);window[Ox8c1]=eval(Ox8c1);} ;window[OxOed86[227]]=CuteEditorInitialize;
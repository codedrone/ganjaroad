var OxO25e0=["top","dialogArguments","opener","_dialog_arguments","document","onload","value","","uploader1","browse_Frame","contentWindow","btn_CreateDir","btn_zoom_in","btn_zoom_out","btn_Actualsize","divpreview","TargetUrl","Button1","Button2","editor","window","\x3Cbr\x3E",".",".jpeg",".jpg",".gif",".png","\x3CIMG src=\x27","\x27 width=\x27150\x27\x3E",".bmp","\x26nbsp;\x3Cembed src=\x22","\x22 quality=\x22high\x22 width=\x22150\x22 height=\x22150\x22 type=\x22application/x-shockwave-flash\x22 pluginspage=\x22http://www.macromedia.com/go/getflashplayer\x22\x3E\x3C/embed\x3E\x0A","\x26nbsp;",".swf",".avi",".mpg",".mp3",".mpeg","\x26nbsp;\x3Cembed name=\x22MediaPlayer1\x22 src=\x22","\x22 autostart=-1 showcontrols=-1  type=\x22application/x-mplayer2\x22 width=\x22150\x22 height=\x22150\x22 pluginspage=\x22http://www.microsoft.com/Windows/MediaPlayer\x22 \x3E\x3C/embed\x3E\x0A",".wav","URL: ","innerHTML","inp","zoom","style","display","none","wrapupPrompt","iepromptfield","body","div","id","IEPromptBox","promptBlackout","border","1px solid #b0bec7","backgroundColor","#f0f0f0","position","absolute","width","330px","zIndex","100","\x3Cdiv style=\x22width: 100%; padding-top:3px;background-color: #DCE7EB; font-family: verdana; font-size: 10pt; font-weight: bold; height: 22px; text-align:center; background:url(../Images/formbg2.gif) repeat-x left top;\x22\x3E","\x3C/div\x3E","\x3Cdiv style=\x22padding: 10px\x22\x3E","\x3CBR\x3E\x3CBR\x3E","\x3Cform action=\x22\x22 onsubmit=\x22return wrapupPrompt()\x22\x3E","\x3Cinput id=\x22iepromptfield\x22 name=\x22iepromptdata\x22 type=text size=46 value=\x22","\x22\x3E","\x3Cbr\x3E\x3Cbr\x3E\x3Ccenter\x3E","\x3Cinput type=\x22submit\x22 value=\x22\x26nbsp;\x26nbsp;\x26nbsp;","\x26nbsp;\x26nbsp;\x26nbsp;\x22\x3E","\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;","\x3Cinput type=\x22button\x22 onclick=\x22wrapupPrompt(true)\x22 value=\x22\x26nbsp;","\x26nbsp;\x22\x3E","\x3C/form\x3E\x3C/div\x3E","100px","left","offsetWidth","px","block","onmouseover","CuteEditor_ColorPicker_ButtonOver(this)"];function Window_FindDialogArguments(Ox90){var Ox12d=Ox90[OxO25e0[0]];if(Ox12d[OxO25e0[1]]){return Ox12d[OxO25e0[1]];} ;var Ox12e=Ox12d[OxO25e0[2]];if(Ox12e==null){return Ox12d[OxO25e0[4]][OxO25e0[3]];} ;var Ox34a=Ox12e[OxO25e0[4]][OxO25e0[3]];if(Ox34a==null){return Window_FindDialogArguments(Ox12e);} ;return Ox34a;} ;function reset_hiddens(){} ;Event_Attach(window,OxO25e0[5],reset_hiddens);function RequireFileBrowseScript(){} ;function reset_hiddens(){if(TargetUrl[OxO25e0[6]]!=OxO25e0[7]&&TargetUrl[OxO25e0[6]]!=null){do_preview();} ;} ;RequireFileBrowseScript();var uploader1=Window_GetElement(window,OxO25e0[8],true);var browse_Frame=Window_GetElement(window,OxO25e0[9],true);browse_Frame=browse_Frame[OxO25e0[10]];var btn_CreateDir=Window_GetElement(window,OxO25e0[11],true);var btn_zoom_in=Window_GetElement(window,OxO25e0[12],true);var btn_zoom_out=Window_GetElement(window,OxO25e0[13],true);var btn_Actualsize=Window_GetElement(window,OxO25e0[14],true);var divpreview=Window_GetElement(window,OxO25e0[15],true);var TargetUrl=Window_GetElement(window,OxO25e0[16],true);var Button1=Window_GetElement(window,OxO25e0[17],true);var Button2=Window_GetElement(window,OxO25e0[18],true);var arg=Window_FindDialogArguments(window);var editor=arg[OxO25e0[19]];var editwin=arg[OxO25e0[20]];var editdoc=arg[OxO25e0[4]];do_preview();function do_preview(Ox177){var Ox1b;Ox1b=OxO25e0[7];if(Ox177!=OxO25e0[7]&&Ox177!=null){Ox1b=Ox177;} ;Ox1b=Ox1b+OxO25e0[21];var Ox180=TargetUrl[OxO25e0[6]];if(Ox180==OxO25e0[7]){return ;} ;var Ox29e=Ox180.substring(Ox180.lastIndexOf(OxO25e0[22])).toLowerCase();switch(Ox29e){case OxO25e0[23]:;case OxO25e0[24]:;case OxO25e0[25]:;case OxO25e0[26]:;case OxO25e0[29]:Ox1b=Ox1b+OxO25e0[27]+Ox180+OxO25e0[28];break ;;case OxO25e0[33]:var Ox29f=OxO25e0[30]+Ox180+OxO25e0[31];Ox1b=Ox1b+Ox29f+OxO25e0[32];break ;;case OxO25e0[34]:;case OxO25e0[35]:;case OxO25e0[36]:;case OxO25e0[37]:;case OxO25e0[40]:var Ox2a0=OxO25e0[38]+Ox180+OxO25e0[39];Ox1b=Ox1b+Ox2a0+OxO25e0[32];break ;;default:Ox1b=Ox1b+OxO25e0[41]+TargetUrl[OxO25e0[6]];break ;;} ;divpreview[OxO25e0[42]]=Ox1b;} ;function do_insert(){var Ox34c=arg[OxO25e0[43]];if(Ox34c){try{Ox34c[OxO25e0[6]]=TargetUrl[OxO25e0[6]];} catch(x){} ;} ;Window_SetDialogReturnValue(window,TargetUrl.value);Window_CloseDialog(window);} ;function do_Close(){Window_SetDialogReturnValue(window,null);Window_CloseDialog(window);} ;function Zoom_In(){if(divpreview[OxO25e0[45]][OxO25e0[44]]!=0){divpreview[OxO25e0[45]][OxO25e0[44]]*=1.2;} else {divpreview[OxO25e0[45]][OxO25e0[44]]=1.2;} ;} ;function Zoom_Out(){if(divpreview[OxO25e0[45]][OxO25e0[44]]!=0){divpreview[OxO25e0[45]][OxO25e0[44]]*=0.8;} else {divpreview[OxO25e0[45]][OxO25e0[44]]=0.8;} ;} ;function Actualsize(){divpreview[OxO25e0[45]][OxO25e0[44]]=1;do_preview();} ;function ResetFields(){TargetUrl[OxO25e0[6]]=OxO25e0[7];} ;if(!Browser_IsWinIE()){btn_zoom_in[OxO25e0[45]][OxO25e0[46]]=btn_zoom_out[OxO25e0[45]][OxO25e0[46]]=btn_Actualsize[OxO25e0[45]][OxO25e0[46]]=OxO25e0[47];} ;if(!Browser_IsWinIE()){btn_zoom_in[OxO25e0[45]][OxO25e0[46]]=btn_zoom_out[OxO25e0[45]][OxO25e0[46]]=btn_Actualsize[OxO25e0[45]][OxO25e0[46]]=OxO25e0[47];} else {} ;if(Browser_IsIE7()){var _dialogPromptID=null;function IEprompt(Ox10d,Ox10e,Ox10f){that=this;this[OxO25e0[48]]=function (Ox110){val=document.getElementById(OxO25e0[49])[OxO25e0[6]];_dialogPromptID[OxO25e0[45]][OxO25e0[46]]=OxO25e0[47];document.getElementById(OxO25e0[49])[OxO25e0[6]]=OxO25e0[7];if(Ox110){val=OxO25e0[7];} ;Ox10d(val);return false;} ;if(Ox10f==undefined){Ox10f=OxO25e0[7];} ;if(_dialogPromptID==null){var Ox111=document.getElementsByTagName(OxO25e0[50])[0];tnode=document.createElement(OxO25e0[51]);tnode[OxO25e0[52]]=OxO25e0[53];Ox111.appendChild(tnode);_dialogPromptID=document.getElementById(OxO25e0[53]);tnode=document.createElement(OxO25e0[51]);tnode[OxO25e0[52]]=OxO25e0[54];Ox111.appendChild(tnode);_dialogPromptID[OxO25e0[45]][OxO25e0[55]]=OxO25e0[56];_dialogPromptID[OxO25e0[45]][OxO25e0[57]]=OxO25e0[58];_dialogPromptID[OxO25e0[45]][OxO25e0[59]]=OxO25e0[60];_dialogPromptID[OxO25e0[45]][OxO25e0[61]]=OxO25e0[62];_dialogPromptID[OxO25e0[45]][OxO25e0[63]]=OxO25e0[64];} ;var Ox112=OxO25e0[65]+InputRequired+OxO25e0[66];Ox112+=OxO25e0[67]+Ox10e+OxO25e0[68];Ox112+=OxO25e0[69];Ox112+=OxO25e0[70]+Ox10f+OxO25e0[71];Ox112+=OxO25e0[72];Ox112+=OxO25e0[73]+OK+OxO25e0[74];Ox112+=OxO25e0[75];Ox112+=OxO25e0[76]+Cancel+OxO25e0[77];Ox112+=OxO25e0[78];_dialogPromptID[OxO25e0[42]]=Ox112;_dialogPromptID[OxO25e0[45]][OxO25e0[0]]=OxO25e0[79];_dialogPromptID[OxO25e0[45]][OxO25e0[80]]=parseInt((document[OxO25e0[50]][OxO25e0[81]]-315)/2)+OxO25e0[82];_dialogPromptID[OxO25e0[45]][OxO25e0[46]]=OxO25e0[83];var Ox113=document.getElementById(OxO25e0[49]);try{var Ox114=Ox113.createTextRange();Ox114.collapse(false);Ox114.select();} catch(x){Ox113.focus();} ;} ;} ;if(btn_CreateDir){btn_CreateDir[OxO25e0[84]]= new Function(OxO25e0[85]);} ;if(btn_zoom_in){btn_zoom_in[OxO25e0[84]]= new Function(OxO25e0[85]);} ;if(btn_zoom_out){btn_zoom_out[OxO25e0[84]]= new Function(OxO25e0[85]);} ;if(btn_Actualsize){btn_Actualsize[OxO25e0[84]]= new Function(OxO25e0[85]);} ;
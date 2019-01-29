var OxO6af3=["onerror","onload","onclick","btnCancel","btnOK","onkeyup","txtHSB_Hue","onkeypress","txtHSB_Saturation","txtHSB_Brightness","txtRGB_Red","txtRGB_Green","txtRGB_Blue","txtHex","btnWebSafeColor","rdoHSB_Hue","rdoHSB_Saturation","rdoHSB_Brightness","rdoRGB_Red","rdoRGB_Green","rdoRGB_Blue","onmousemove","onmousedown","onmouseup","{format}","length","\x5C{","\x5C}","BadNumber","A number between {0} and {1} is required. Closest value inserted.","Title","Color Picker","SelectAColor","Select a color:","OKButton","OK","CancelButton","Cancel","AboutButton","About","Recent","WebSafeWarning","Warning: not a web safe color","WebSafeClick","Click to select web safe color","HsbHue","H:","HsbHueTooltip","Hue","HsbHueUnit","%","HsbSaturation","S:","HsbSaturationTooltip","Saturation","HsbSaturationUnit","HsbBrightness","B:","HsbBrightnessTooltip","Brightness","HsbBrightnessUnit","RgbRed","R:","RgbRedTooltip","Red","RgbGreen","G:","RgbGreenTooltip","Green","RgbBlue","RgbBlueTooltip","Blue","Hex","#","RecentTooltip","Recent:","\x0D\x0ALewies Color Pickerversion 1.1\x0D\x0A\x0D\x0AThis form was created by Lewis Moten in May of 2004.\x0D\x0AIt simulates the color picker in a popular graphics application.\x0D\x0AIt gives users a visual way to choose colors from a large and dynamic palette.\x0D\x0A\x0D\x0AVisit the authors web page?\x0D\x0Awww.lewismoten.com\x0D\x0A","UNDEFINED","FFFFFF","value","checked","ColorMode","ColorType","RecentColors","","pnlRecent","all","border","style","0px","backgroundColor","srcElement","display","none","title","innerHTML","backgroundPosition","px ","px","000000","zIndex","01234567879","keyCode","abcdef","01234567879ABCDEF","returnValue","0123456789ABCDEFabcdef","0","id","pnlGradient_Top","pnlVertical_Top","top","opacity","filters","backgroundImage","url(../Images/cpie_GradientPositionDark.gif)","url(../Images/cpie_GradientPositionLight.gif)","cancelBubble","clientX","clientY","className","GradientNormal","button","GradientFullScreen","=","; path=/;"," expires=",";","cookie","00336699CCFF","0x","do_select","frm","__cphex"];var POSITIONADJUSTX=21;var POSITIONADJUSTY=46;var POSITIONADJUSTZ=43;var msg= new Object();window[OxO6af3[0]]=alert;var ColorMode=1;var GradientPositionDark= new Boolean(false);var frm= new Object();window[OxO6af3[1]]=window_load;function initialize(){frm[OxO6af3[3]][OxO6af3[2]]=btnCancel_Click;frm[OxO6af3[4]][OxO6af3[2]]=btnOK_Click;frm[OxO6af3[6]][OxO6af3[5]]=Hsb_Changed;frm[OxO6af3[6]][OxO6af3[7]]=validateNumber;frm[OxO6af3[8]][OxO6af3[5]]=Hsb_Changed;frm[OxO6af3[8]][OxO6af3[7]]=validateNumber;frm[OxO6af3[9]][OxO6af3[5]]=Hsb_Changed;frm[OxO6af3[9]][OxO6af3[7]]=validateNumber;frm[OxO6af3[10]][OxO6af3[5]]=Rgb_Changed;frm[OxO6af3[10]][OxO6af3[7]]=validateNumber;frm[OxO6af3[11]][OxO6af3[5]]=Rgb_Changed;frm[OxO6af3[11]][OxO6af3[7]]=validateNumber;frm[OxO6af3[12]][OxO6af3[5]]=Rgb_Changed;frm[OxO6af3[12]][OxO6af3[7]]=validateNumber;frm[OxO6af3[13]][OxO6af3[5]]=Hex_Changed;frm[OxO6af3[13]][OxO6af3[7]]=validateHex;frm[OxO6af3[14]][OxO6af3[2]]=btnWebSafeColor_Click;frm[OxO6af3[15]][OxO6af3[2]]=rdoHsb_Hue_Click;frm[OxO6af3[16]][OxO6af3[2]]=rdoHsb_Saturation_Click;frm[OxO6af3[17]][OxO6af3[2]]=rdoHsb_Brightness_Click;frm[OxO6af3[18]][OxO6af3[2]]=rdoRgb_Red_Click;frm[OxO6af3[19]][OxO6af3[2]]=rdoRgb_Green_Click;frm[OxO6af3[20]][OxO6af3[2]]=rdoRgb_Blue_Click;pnlGradient_Top[OxO6af3[2]]=pnlGradient_Top_Click;pnlGradient_Top[OxO6af3[21]]=pnlGradient_Top_MouseMove;pnlGradient_Top[OxO6af3[22]]=pnlGradient_Top_MouseDown;pnlGradient_Top[OxO6af3[23]]=pnlGradient_Top_MouseUp;pnlVertical_Top[OxO6af3[2]]=pnlVertical_Top_Click;pnlVertical_Top[OxO6af3[21]]=pnlVertical_Top_MouseMove;pnlVertical_Top[OxO6af3[22]]=pnlVertical_Top_MouseDown;pnlVertical_Top[OxO6af3[23]]=pnlVertical_Top_MouseUp;pnlWebSafeColor[OxO6af3[2]]=btnWebSafeColor_Click;pnlWebSafeColorBorder[OxO6af3[2]]=btnWebSafeColor_Click;pnlOldColor[OxO6af3[2]]=pnlOldClick_Click;lblHSB_Hue[OxO6af3[2]]=rdoHsb_Hue_Click;lblHSB_Saturation[OxO6af3[2]]=rdoHsb_Saturation_Click;lblHSB_Brightness[OxO6af3[2]]=rdoHsb_Brightness_Click;lblRGB_Red[OxO6af3[2]]=rdoRgb_Red_Click;lblRGB_Green[OxO6af3[2]]=rdoRgb_Green_Click;lblRGB_Blue[OxO6af3[2]]=rdoRgb_Blue_Click;pnlGradient_Top.focus();} ;function formatString(Ox1ac){if(!Ox1ac){return OxO6af3[24];} ;for(var i=1;i<arguments[OxO6af3[25]];i++){Ox1ac=Ox1ac.replace( new RegExp(OxO6af3[26]+(i-1)+OxO6af3[27]),arguments[i]);} ;return Ox1ac;} ;function AddValue(Ox1ae,Ox7){Ox7=Ox7.toLowerCase();for(var i=0;i<Ox1ae[OxO6af3[25]];i++){if(Ox1ae[i]==Ox7){return ;} ;} ;Ox1ae[Ox1ae[OxO6af3[25]]]=Ox7;} ;function SniffLanguage(Ox3d){} ;function LoadLanguage(){msg[OxO6af3[28]]=OxO6af3[29];msg[OxO6af3[30]]=OxO6af3[31];msg[OxO6af3[32]]=OxO6af3[33];msg[OxO6af3[34]]=OxO6af3[35];msg[OxO6af3[36]]=OxO6af3[37];msg[OxO6af3[38]]=OxO6af3[39];msg[OxO6af3[40]]=OxO6af3[40];msg[OxO6af3[41]]=OxO6af3[42];msg[OxO6af3[43]]=OxO6af3[44];msg[OxO6af3[45]]=OxO6af3[46];msg[OxO6af3[47]]=OxO6af3[48];msg[OxO6af3[49]]=OxO6af3[50];msg[OxO6af3[51]]=OxO6af3[52];msg[OxO6af3[53]]=OxO6af3[54];msg[OxO6af3[55]]=OxO6af3[50];msg[OxO6af3[56]]=OxO6af3[57];msg[OxO6af3[58]]=OxO6af3[59];msg[OxO6af3[60]]=OxO6af3[50];msg[OxO6af3[61]]=OxO6af3[62];msg[OxO6af3[63]]=OxO6af3[64];msg[OxO6af3[65]]=OxO6af3[66];msg[OxO6af3[67]]=OxO6af3[68];msg[OxO6af3[69]]=OxO6af3[57];msg[OxO6af3[70]]=OxO6af3[71];msg[OxO6af3[72]]=OxO6af3[73];msg[OxO6af3[74]]=OxO6af3[75];msg[OxO6af3[39]]=OxO6af3[76];} ;function localize(){} ;function window_load(){frm=frmColorPicker;LoadLanguage();localize();initialize();var Ox1c=OxO6af3[77];if(Ox1c==OxO6af3[77]){Ox1c=OxO6af3[78];} ;if(Ox1c[OxO6af3[25]]==7){Ox1c=Ox1c.substr(1,6);} ;frm[OxO6af3[13]][OxO6af3[79]]=Ox1c;Hex_Changed();Ox1c=Form_Get_Hex();SetBg(pnlOldColor,Ox1c);frm[OxO6af3[82]][ new Number(GetCookie(OxO6af3[81])||0)][OxO6af3[80]]=true;ColorMode_Changed();var Ox1a1=GetCookie(OxO6af3[83])||OxO6af3[84];var Ox1b3=msg[OxO6af3[74]];for(var i=1;i<33;i++){if(Ox1a1[OxO6af3[25]]/6>=i){Ox1c=Ox1a1.substr((i-1)*6,6);var Ox1b4=HexToRgb(Ox1c);var title=formatString(msg.RecentTooltip,Ox1c,Ox1b4[0],Ox1b4[1],Ox1b4[2]);SetBg(document[OxO6af3[86]][OxO6af3[85]+i],Ox1c);SetTitle(document[OxO6af3[86]][OxO6af3[85]+i],title);document[OxO6af3[86]][OxO6af3[85]+i][OxO6af3[2]]=pnlRecent_Click;} else {document[OxO6af3[86]][OxO6af3[85]+i][OxO6af3[88]][OxO6af3[87]]=OxO6af3[89];} ;} ;} ;function pnlRecent_Click(){frm[OxO6af3[13]][OxO6af3[79]]=event[OxO6af3[91]][OxO6af3[88]][OxO6af3[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function pnlOldClick_Click(){frm[OxO6af3[13]][OxO6af3[79]]=pnlOldColor[OxO6af3[88]][OxO6af3[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function rdoHsb_Hue_Click(){frm[OxO6af3[15]][OxO6af3[80]]=true;ColorMode_Changed();} ;function rdoHsb_Saturation_Click(){frm[OxO6af3[16]][OxO6af3[80]]=true;ColorMode_Changed();} ;function rdoHsb_Brightness_Click(){frm[OxO6af3[17]][OxO6af3[80]]=true;ColorMode_Changed();} ;function rdoRgb_Red_Click(){frm[OxO6af3[18]][OxO6af3[80]]=true;ColorMode_Changed();} ;function rdoRgb_Green_Click(){frm[OxO6af3[19]][OxO6af3[80]]=true;ColorMode_Changed();} ;function rdoRgb_Blue_Click(){frm[OxO6af3[20]][OxO6af3[80]]=true;ColorMode_Changed();} ;function Hide(){for(var i=0;i<arguments[OxO6af3[25]];i++){arguments[i][OxO6af3[88]][OxO6af3[92]]=OxO6af3[93];} ;} ;function Show(){for(var i=0;i<arguments[OxO6af3[25]];i++){arguments[i][OxO6af3[88]][OxO6af3[92]]=OxO6af3[84];} ;} ;function SetValue(){for(var i=0;i<arguments[OxO6af3[25]];i+=2){arguments[i][OxO6af3[79]]=arguments[i+1];} ;} ;function SetTitle(){for(var i=0;i<arguments[OxO6af3[25]];i+=2){arguments[i][OxO6af3[94]]=arguments[i+1];} ;} ;function SetHTML(){for(var i=0;i<arguments[OxO6af3[25]];i+=2){arguments[i][OxO6af3[95]]=arguments[i+1];} ;} ;function SetBg(){for(var i=0;i<arguments[OxO6af3[25]];i+=2){arguments[i][OxO6af3[88]][OxO6af3[90]]=OxO6af3[73]+arguments[i+1];} ;} ;function SetBgPosition(){for(var i=0;i<arguments[OxO6af3[25]];i+=3){arguments[i][OxO6af3[88]][OxO6af3[96]]=arguments[i+1]+OxO6af3[97]+arguments[i+2]+OxO6af3[98];} ;} ;function ColorMode_Changed(){for(var i=0;i<6;i++){if(frm[OxO6af3[82]][i][OxO6af3[80]]){ColorMode=i;} ;} ;SetCookie(OxO6af3[81],ColorMode,60*60*24*365);Hide(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background,pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);switch(ColorMode){case 0:Show(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background);Hsb_Changed();break ;;case 1:Show(pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxO6af3[78],pnlGradientRgb_Overlay2,OxO6af3[99]);pnlGradientRgb_Overlay1[OxO6af3[88]][OxO6af3[100]]=5;pnlGradientRgb_Overlay2[OxO6af3[88]][OxO6af3[100]]=6;Hsb_Changed();break ;;case 2:Show(pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxO6af3[99],pnlGradientRgb_Overlay2,OxO6af3[78]);pnlGradientRgb_Overlay1[OxO6af3[88]][OxO6af3[100]]=6;pnlGradientRgb_Overlay2[OxO6af3[88]][OxO6af3[100]]=5;Hsb_Changed();break ;;case 3:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,0,pnlGradientRgb_Invert,256,0);Rgb_Changed();break ;;case 4:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,0,256,pnlGradientRgb_Invert,0,256);Rgb_Changed();break ;;case 5:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,256,pnlGradientRgb_Invert,256,256);Rgb_Changed();break ;;default:break ;;} ;} ;function btnWebSafeColor_Click(){var Ox1b4=HexToRgb(frm[OxO6af3[13]].value);Ox1b4=RgbToWebSafeRgb(Ox1b4);frm[OxO6af3[13]][OxO6af3[79]]=RgbToHex(Ox1b4);Hex_Changed();} ;function checkWebSafe(){var Ox1b4=Form_Get_Rgb();if(RgbIsWebSafe(Ox1b4)){Hide(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} else {Ox1b4=RgbToWebSafeRgb(Ox1b4);SetBg(pnlWebSafeColor,RgbToHex(Ox1b4));Show(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} ;} ;function validateNumber(){var Ox1c9=String.fromCharCode(event.keyCode);if(IgnoreKey()){return ;} ;if(OxO6af3[101].indexOf(Ox1c9)!=-1){return ;} ;event[OxO6af3[102]]=0;} ;function validateHex(){if(IgnoreKey()){return ;} ;var Ox1c9=String.fromCharCode(event.keyCode);if(OxO6af3[103].indexOf(Ox1c9)!=-1){event[OxO6af3[102]]=Ox1c9.toUpperCase().charCodeAt(0);return ;} ;if(OxO6af3[104].indexOf(Ox1c9)!=-1){return ;} ;event[OxO6af3[102]]=0;} ;function IgnoreKey(){var Ox1c9=String.fromCharCode(event.keyCode);var Ox1cc= new Array(0,8,9,13,27);if(Ox1c9==null){return true;} ;for(var i=0;i<5;i++){if(event[OxO6af3[102]]==Ox1cc[i]){return true;} ;} ;return false;} ;function btnCancel_Click(){top.close();} ;function btnOK_Click(){var Ox1c= new String(frm[OxO6af3[13]].value);try{window[OxO6af3[105]]=Ox1c;} catch(e){} ;recent=GetCookie(OxO6af3[83])||OxO6af3[84];for(var i=0;i<recent[OxO6af3[25]];i+=6){if(recent.substr(i,6)==Ox1c){recent=recent.substr(0,i)+recent.substr(i+6);i-=6;} ;} ;if(recent[OxO6af3[25]]>31*6){recent=recent.substr(0,31*6);} ;recent=frm[OxO6af3[13]][OxO6af3[79]]+recent;SetCookie(OxO6af3[83],recent,60*60*24*365);top.close();} ;function SetGradientPosition(Oxf1,Oxbf){Oxf1=Oxf1-POSITIONADJUSTX+5;Oxbf=Oxbf-POSITIONADJUSTY+5;Oxf1-=7;Oxbf-=27;Oxf1=Oxf1<0?0:Oxf1>255?255:Oxf1;Oxbf=Oxbf<0?0:Oxbf>255?255:Oxbf;SetBgPosition(pnlGradientPosition,Oxf1-5,Oxbf-5);switch(ColorMode){case 0:var Ox1d0= new Array(0,0,0);Ox1d0[1]=Oxf1/255;Ox1d0[2]=1-(Oxbf/255);frm[OxO6af3[8]][OxO6af3[79]]=Math.round(Ox1d0[1]*100);frm[OxO6af3[9]][OxO6af3[79]]=Math.round(Ox1d0[2]*100);Hsb_Changed();break ;;case 1:var Ox1d0= new Array(0,0,0);Ox1d0[0]=Oxf1/255;Ox1d0[2]=1-(Oxbf/255);frm[OxO6af3[6]][OxO6af3[79]]=Ox1d0[0]==1?0:Math.round(Ox1d0[0]*360);frm[OxO6af3[9]][OxO6af3[79]]=Math.round(Ox1d0[2]*100);Hsb_Changed();break ;;case 2:var Ox1d0= new Array(0,0,0);Ox1d0[0]=Oxf1/255;Ox1d0[1]=1-(Oxbf/255);frm[OxO6af3[6]][OxO6af3[79]]=Ox1d0[0]==1?0:Math.round(Ox1d0[0]*360);frm[OxO6af3[8]][OxO6af3[79]]=Math.round(Ox1d0[1]*100);Hsb_Changed();break ;;case 3:var Ox1b4= new Array(0,0,0);Ox1b4[1]=255-Oxbf;Ox1b4[2]=Oxf1;frm[OxO6af3[11]][OxO6af3[79]]=Ox1b4[1];frm[OxO6af3[12]][OxO6af3[79]]=Ox1b4[2];Rgb_Changed();break ;;case 4:var Ox1b4= new Array(0,0,0);Ox1b4[0]=255-Oxbf;Ox1b4[2]=Oxf1;frm[OxO6af3[10]][OxO6af3[79]]=Ox1b4[0];frm[OxO6af3[12]][OxO6af3[79]]=Ox1b4[2];Rgb_Changed();break ;;case 5:var Ox1b4= new Array(0,0,0);Ox1b4[0]=Oxf1;Ox1b4[1]=255-Oxbf;frm[OxO6af3[10]][OxO6af3[79]]=Ox1b4[0];frm[OxO6af3[11]][OxO6af3[79]]=Ox1b4[1];Rgb_Changed();break ;;} ;} ;function Hex_Changed(){var Ox1c=Form_Get_Hex();var Ox1b4=HexToRgb(Ox1c);var Ox1d0=RgbToHsb(Ox1b4);Form_Set_Rgb(Ox1b4);Form_Set_Hsb(Ox1d0);SetBg(pnlNewColor,Ox1c);SetupCursors();SetupGradients();checkWebSafe();} ;function Rgb_Changed(){var Ox1b4=Form_Get_Rgb();var Ox1d0=RgbToHsb(Ox1b4);var Ox1c=RgbToHex(Ox1b4);Form_Set_Hsb(Ox1d0);Form_Set_Hex(Ox1c);SetBg(pnlNewColor,Ox1c);SetupCursors();SetupGradients();checkWebSafe();} ;function Hsb_Changed(){var Ox1d0=Form_Get_Hsb();var Ox1b4=HsbToRgb(Ox1d0);var Ox1c=RgbToHex(Ox1b4);Form_Set_Rgb(Ox1b4);Form_Set_Hex(Ox1c);SetBg(pnlNewColor,Ox1c);SetupCursors();SetupGradients();checkWebSafe();} ;function Form_Set_Hex(Ox1c){frm[OxO6af3[13]][OxO6af3[79]]=Ox1c;} ;function Form_Get_Hex(){var Ox1c= new String(frm[OxO6af3[13]].value);for(var i=0;i<Ox1c[OxO6af3[25]];i++){if(OxO6af3[106].indexOf(Ox1c.substr(i,1))==-1){Ox1c=OxO6af3[99];frm[OxO6af3[13]][OxO6af3[79]]=Ox1c;alert(formatString(msg.BadNumber,OxO6af3[99],OxO6af3[78]));break ;} ;} ;while(Ox1c[OxO6af3[25]]<6){Ox1c=OxO6af3[107]+Ox1c;} ;return Ox1c;} ;function Form_Get_Hsb(){var Ox1d0= new Array(0,0,0);Ox1d0[0]= new Number(frm[OxO6af3[6]].value)/360;Ox1d0[1]= new Number(frm[OxO6af3[8]].value)/100;Ox1d0[2]= new Number(frm[OxO6af3[9]].value)/100;if(Ox1d0[0]>1||isNaN(Ox1d0[0])){Ox1d0[0]=1;frm[OxO6af3[6]][OxO6af3[79]]=360;alert(formatString(msg.BadNumber,0,360));} ;if(Ox1d0[1]>1||isNaN(Ox1d0[1])){Ox1d0[1]=1;frm[OxO6af3[8]][OxO6af3[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;if(Ox1d0[2]>1||isNaN(Ox1d0[2])){Ox1d0[2]=1;frm[OxO6af3[9]][OxO6af3[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;return Ox1d0;} ;function Form_Set_Hsb(Ox1d0){SetValue(frm.txtHSB_Hue,Math.round(Ox1d0[0]*360),frm.txtHSB_Saturation,Math.round(Ox1d0[1]*100),frm.txtHSB_Brightness,Math.round(Ox1d0[2]*100));} ;function Form_Get_Rgb(){var Ox1b4= new Array(0,0,0);Ox1b4[0]= new Number(frm[OxO6af3[10]].value);Ox1b4[1]= new Number(frm[OxO6af3[11]].value);Ox1b4[2]= new Number(frm[OxO6af3[12]].value);if(Ox1b4[0]>255||isNaN(Ox1b4[0])||Ox1b4[0]!=Math.round(Ox1b4[0])){Ox1b4[0]=255;frm[OxO6af3[10]][OxO6af3[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox1b4[1]>255||isNaN(Ox1b4[1])||Ox1b4[1]!=Math.round(Ox1b4[1])){Ox1b4[1]=255;frm[OxO6af3[11]][OxO6af3[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox1b4[2]>255||isNaN(Ox1b4[2])||Ox1b4[2]!=Math.round(Ox1b4[2])){Ox1b4[2]=255;frm[OxO6af3[12]][OxO6af3[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;return Ox1b4;} ;function Form_Set_Rgb(Ox1b4){frm[OxO6af3[10]][OxO6af3[79]]=Ox1b4[0];frm[OxO6af3[11]][OxO6af3[79]]=Ox1b4[1];frm[OxO6af3[12]][OxO6af3[79]]=Ox1b4[2];} ;function SetupCursors(){var Ox1d0=Form_Get_Hsb();var Ox1b4=Form_Get_Rgb();if(RgbToYuv(Ox1b4)[0]>=0.5){SetGradientPositionDark();} else {SetGradientPositionLight();} ;if(event[OxO6af3[91]]!=null){if(event[OxO6af3[91]][OxO6af3[108]]==OxO6af3[109]){return ;} ;if(event[OxO6af3[91]][OxO6af3[108]]==OxO6af3[110]){return ;} ;} ;var Oxf1;var Oxbf;var Ox1db;if(ColorMode>=0&&ColorMode<=2){for(var i=0;i<3;i++){Ox1d0[i]*=255;} ;} ;switch(ColorMode){case 0:Oxf1=Ox1d0[1];Oxbf=Ox1d0[2];Ox1db=Ox1d0[0]==0?1:Ox1d0[0];break ;;case 1:Oxf1=Ox1d0[0]==0?1:Ox1d0[0];Oxbf=Ox1d0[2];Ox1db=Ox1d0[1];break ;;case 2:Oxf1=Ox1d0[0]==0?1:Ox1d0[0];Oxbf=Ox1d0[1];Ox1db=Ox1d0[2];break ;;case 3:Oxf1=Ox1b4[2];Oxbf=Ox1b4[1];Ox1db=Ox1b4[0];break ;;case 4:Oxf1=Ox1b4[2];Oxbf=Ox1b4[0];Ox1db=Ox1b4[1];break ;;case 5:Oxf1=Ox1b4[0];Oxbf=Ox1b4[1];Ox1db=Ox1b4[2];break ;;} ;Oxbf=255-Oxbf;Ox1db=255-Ox1db;SetBgPosition(pnlGradientPosition,Oxf1-5,Oxbf-5);pnlVerticalPosition[OxO6af3[88]][OxO6af3[111]]=(Ox1db+27)+OxO6af3[98];} ;function SetupGradients(){var Ox1d0=Form_Get_Hsb();var Ox1b4=Form_Get_Rgb();switch(ColorMode){case 0:SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox1d0[0])));break ;;case 1:var Ox3b= new Array();for(var i=0;i<3;i++){Ox3b[i]=Math.round(Ox1d0[2]*255);} ;SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox1d0[0])),pnlVerticalHsbSaturation_Hue,RgbToHex(HsbToRgb( new Array(Ox1d0[0],1,Ox1d0[2]))),pnlVerticalHsbSaturation_White,RgbToHex(Ox3b));pnlGradientRgb_Overlay1[OxO6af3[113]][0][OxO6af3[112]]=(100-Math.round(Ox1d0[1]*100));break ;;case 2:SetBg(pnlVerticalHsbBrightness_Hue,RgbToHex(HsbToRgb( new Array(Ox1d0[0],Ox1d0[1],1))));pnlGradientRgb_Overlay1[OxO6af3[113]][0][OxO6af3[112]]=(100-Math.round(Ox1d0[2]*100));break ;;case 3:pnlGradientRgb_Invert[OxO6af3[113]][3][OxO6af3[112]]=100-Math.round((Ox1b4[0]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(0xFF,Ox1b4[1],Ox1b4[2])),pnlVerticalRgb_End,RgbToHex( new Array(0x00,Ox1b4[1],Ox1b4[2])));break ;;case 4:pnlGradientRgb_Invert[OxO6af3[113]][3][OxO6af3[112]]=100-Math.round((Ox1b4[1]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox1b4[0],0xFF,Ox1b4[2])),pnlVerticalRgb_End,RgbToHex( new Array(Ox1b4[0],0x00,Ox1b4[2])));break ;;case 5:pnlGradientRgb_Invert[OxO6af3[113]][3][OxO6af3[112]]=100-Math.round((Ox1b4[2]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox1b4[0],Ox1b4[1],0xFF)),pnlVerticalRgb_End,RgbToHex( new Array(Ox1b4[0],Ox1b4[1],0x00)));break ;;default:;} ;} ;function SetGradientPositionDark(){if(GradientPositionDark){return ;} ;GradientPositionDark=true;pnlGradientPosition[OxO6af3[88]][OxO6af3[114]]=OxO6af3[115];} ;function SetGradientPositionLight(){if(!GradientPositionDark){return ;} ;GradientPositionDark=false;pnlGradientPosition[OxO6af3[88]][OxO6af3[114]]=OxO6af3[116];} ;function pnlGradient_Top_Click(){event[OxO6af3[117]]=true;SetGradientPosition(event[OxO6af3[118]]-5,event[OxO6af3[119]]-5);pnlGradient_Top[OxO6af3[120]]=OxO6af3[121];} ;function pnlGradient_Top_MouseMove(){event[OxO6af3[117]]=true;if(event[OxO6af3[122]]!=1){return ;} ;SetGradientPosition(event[OxO6af3[118]]-5,event[OxO6af3[119]]-5);} ;function pnlGradient_Top_MouseDown(){event[OxO6af3[117]]=true;SetGradientPosition(event[OxO6af3[118]]-5,event[OxO6af3[119]]-5);pnlGradient_Top[OxO6af3[120]]=OxO6af3[123];} ;function pnlGradient_Top_MouseUp(){event[OxO6af3[117]]=true;SetGradientPosition(event[OxO6af3[118]]-5,event[OxO6af3[119]]-5);pnlGradient_Top[OxO6af3[120]]=OxO6af3[121];} ;function Document_MouseUp(){event[OxO6af3[117]]=true;pnlGradient_Top[OxO6af3[120]]=OxO6af3[121];} ;function SetVerticalPosition(Ox1db){var Ox1db=Ox1db-POSITIONADJUSTZ;if(Ox1db<27){Ox1db=27;} ;if(Ox1db>282){Ox1db=282;} ;pnlVerticalPosition[OxO6af3[88]][OxO6af3[111]]=Ox1db+OxO6af3[98];Ox1db=1-((Ox1db-27)/255);switch(ColorMode){case 0:if(Ox1db==1){Ox1db=0;} ;frm[OxO6af3[6]][OxO6af3[79]]=Math.round(Ox1db*360);Hsb_Changed();break ;;case 1:frm[OxO6af3[8]][OxO6af3[79]]=Math.round(Ox1db*100);Hsb_Changed();break ;;case 2:frm[OxO6af3[9]][OxO6af3[79]]=Math.round(Ox1db*100);Hsb_Changed();break ;;case 3:frm[OxO6af3[10]][OxO6af3[79]]=Math.round(Ox1db*255);Rgb_Changed();break ;;case 4:frm[OxO6af3[11]][OxO6af3[79]]=Math.round(Ox1db*255);Rgb_Changed();break ;;case 5:frm[OxO6af3[12]][OxO6af3[79]]=Math.round(Ox1db*255);Rgb_Changed();break ;;} ;} ;function pnlVertical_Top_Click(){SetVerticalPosition(event[OxO6af3[119]]-5);event[OxO6af3[117]]=true;} ;function pnlVertical_Top_MouseMove(){if(event[OxO6af3[122]]!=1){return ;} ;SetVerticalPosition(event[OxO6af3[119]]-5);event[OxO6af3[117]]=true;} ;function pnlVertical_Top_MouseDown(){SetVerticalPosition(event[OxO6af3[119]]-5);event[OxO6af3[117]]=true;} ;function pnlVertical_Top_MouseUp(){SetVerticalPosition(event[OxO6af3[119]]-5);event[OxO6af3[117]]=true;} ;function SetCookie(name,Ox7,Ox8){var Ox9=name+OxO6af3[124]+escape(Ox7)+OxO6af3[125];if(Ox8){var Oxa= new Date();Oxa.setSeconds(Oxa.getSeconds()+Ox8);Ox9+=OxO6af3[126]+Oxa.toUTCString()+OxO6af3[127];} ;document[OxO6af3[128]]=Ox9;} ;function GetCookie(name){var Oxc=document[OxO6af3[128]].split(OxO6af3[127]);for(var i=0;i<Oxc[OxO6af3[25]];i++){var Oxe=Oxc[i].split(OxO6af3[124]);if(name==Oxe[0].replace(/\s/g,OxO6af3[84])){return unescape(Oxe[1]);} ;} ;} ;function GetCookieDictionary(){var Ox10={};var Oxc=document[OxO6af3[128]].split(OxO6af3[127]);for(var i=0;i<Oxc[OxO6af3[25]];i++){var Oxe=Oxc[i].split(OxO6af3[124]);Ox10[Oxe[0].replace(/\s/g,OxO6af3[84])]=unescape(Oxe[1]);} ;return Ox10;} ;function RgbIsWebSafe(Ox1b4){var Ox1c=RgbToHex(Ox1b4);for(var i=0;i<3;i++){if(OxO6af3[129].indexOf(Ox1c.substr(i*2,2))==-1){return false;} ;} ;return true;} ;function RgbToWebSafeRgb(Ox1b4){var Ox1eb= new Array(Ox1b4[0],Ox1b4[1],Ox1b4[2]);if(RgbIsWebSafe(Ox1b4)){return Ox1eb;} ;var Ox1ec= new Array(0x00,0x33,0x66,0x99,0xCC,0xFF);for(var i=0;i<3;i++){for(var Ox5a=1;Ox5a<6;Ox5a++){if(Ox1eb[i]>Ox1ec[Ox5a-1]&&Ox1eb[i]<Ox1ec[Ox5a]){if(Ox1eb[i]-Ox1ec[Ox5a-1]>Ox1ec[Ox5a]-Ox1eb[i]){Ox1eb[i]=Ox1ec[Ox5a];} else {Ox1eb[i]=Ox1ec[Ox5a-1];} ;break ;} ;} ;} ;return Ox1eb;} ;function RgbToYuv(Ox1b4){var Ox1ee= new Array();Ox1ee[0]=(Ox1b4[0]*0.299+Ox1b4[1]*0.587+Ox1b4[2]*0.114)/255;Ox1ee[1]=(Ox1b4[0]*-0.169+Ox1b4[1]*-0.332+Ox1b4[2]*0.500+128)/255;Ox1ee[2]=(Ox1b4[0]*0.500+Ox1b4[1]*-0.419+Ox1b4[2]*-0.0813+128)/255;return Ox1ee;} ;function RgbToHsb(Ox1b4){var Ox1f0= new Array(Ox1b4[0],Ox1b4[1],Ox1b4[2]);var Ox1f1= new Number(1);var Ox1f2= new Number(0);var Ox1f3= new Number(1);var Ox1d0= new Array(0,0,0);var Ox1f4= new Array();for(var i=0;i<3;i++){Ox1f0[i]=Ox1b4[i]/255;if(Ox1f0[i]<Ox1f1){Ox1f1=Ox1f0[i];} ;if(Ox1f0[i]>Ox1f2){Ox1f2=Ox1f0[i];} ;} ;Ox1f3=Ox1f2-Ox1f1;Ox1d0[2]=Ox1f2;if(Ox1f3==0){return Ox1d0;} ;Ox1d0[1]=Ox1f3/Ox1f2;for(var i=0;i<3;i++){Ox1f4[i]=(((Ox1f2-Ox1f0[i])/6)+(Ox1f3/2))/Ox1f3;} ;if(Ox1f0[0]==Ox1f2){Ox1d0[0]=Ox1f4[2]-Ox1f4[1];} else {if(Ox1f0[1]==Ox1f2){Ox1d0[0]=(1/3)+Ox1f4[0]-Ox1f4[2];} else {if(Ox1f0[2]==Ox1f2){Ox1d0[0]=(2/3)+Ox1f4[1]-Ox1f4[0];} ;} ;} ;if(Ox1d0[0]<0){Ox1d0[0]+=1;} else {if(Ox1d0[0]>1){Ox1d0[0]-=1;} ;} ;return Ox1d0;} ;function HsbToRgb(Ox1d0){var Ox1b4=HueToRgb(Ox1d0[0]);var Ox49=Ox1d0[2]*255;for(var i=0;i<3;i++){Ox1b4[i]=Ox1b4[i]*Ox1d0[2];Ox1b4[i]=((Ox1b4[i]-Ox49)*Ox1d0[1])+Ox49;Ox1b4[i]=Math.round(Ox1b4[i]);} ;return Ox1b4;} ;function RgbToHex(Ox1b4){var Ox1c= new String();for(var i=0;i<3;i++){Ox1b4[2-i]=Math.round(Ox1b4[2-i]);Ox1c=Ox1b4[2-i].toString(16)+Ox1c;if(Ox1c[OxO6af3[25]]%2==1){Ox1c=OxO6af3[107]+Ox1c;} ;} ;return Ox1c.toUpperCase();} ;function HexToRgb(Ox1c){var Ox1b4= new Array();for(var i=0;i<3;i++){Ox1b4[i]= new Number(OxO6af3[130]+Ox1c.substr(i*2,2));} ;return Ox1b4;} ;function HueToRgb(Ox1f9){var Ox1fa=Ox1f9*360;var Ox1b4= new Array(0,0,0);var Ox1fb=(Ox1fa%60)/60;if(Ox1fa<60){Ox1b4[0]=255;Ox1b4[1]=Ox1fb*255;} else {if(Ox1fa<120){Ox1b4[1]=255;Ox1b4[0]=(1-Ox1fb)*255;} else {if(Ox1fa<180){Ox1b4[1]=255;Ox1b4[2]=Ox1fb*255;} else {if(Ox1fa<240){Ox1b4[2]=255;Ox1b4[1]=(1-Ox1fb)*255;} else {if(Ox1fa<300){Ox1b4[2]=255;Ox1b4[0]=Ox1fb*255;} else {if(Ox1fa<360){Ox1b4[0]=255;Ox1b4[2]=(1-Ox1fb)*255;} ;} ;} ;} ;} ;} ;return Ox1b4;} ;function CheckHexSelect(){if(window[OxO6af3[131]]&&window[OxO6af3[132]]&&frm[OxO6af3[13]]){var Ox16=OxO6af3[73]+frm[OxO6af3[13]][OxO6af3[79]];if(Ox16[OxO6af3[25]]==7){if(window[OxO6af3[133]]!=Ox16){window[OxO6af3[133]]=Ox16;window.do_select(Ox16);} ;} ;} ;} ;setInterval(CheckHexSelect,10);
var OxO53e3=["inp_width","inp_height","sel_align","sel_valign","inp_bgColor","inp_borderColor","inp_borderColorLight","inp_borderColorDark","inp_class","inp_id","inp_tooltip","value","bgColor","backgroundColor","style","","id","borderColor","borderColorLight","borderColorDark","className","width","height","align","vAlign","title","ValidNumber","ValidID","class","valign","cssText","border-image: none;","onclick"];var inp_width=Window_GetElement(window,OxO53e3[0],true);var inp_height=Window_GetElement(window,OxO53e3[1],true);var sel_align=Window_GetElement(window,OxO53e3[2],true);var sel_valign=Window_GetElement(window,OxO53e3[3],true);var inp_bgColor=Window_GetElement(window,OxO53e3[4],true);var inp_borderColor=Window_GetElement(window,OxO53e3[5],true);var inp_borderColorLight=Window_GetElement(window,OxO53e3[6],true);var inp_borderColorDark=Window_GetElement(window,OxO53e3[7],true);var inp_class=Window_GetElement(window,OxO53e3[8],true);var inp_id=Window_GetElement(window,OxO53e3[9],true);var inp_tooltip=Window_GetElement(window,OxO53e3[10],true);SyncToView=function SyncToView_Tr(){inp_bgColor[OxO53e3[11]]=element.getAttribute(OxO53e3[12])||element[OxO53e3[14]][OxO53e3[13]]||OxO53e3[15];inp_id[OxO53e3[11]]=element.getAttribute(OxO53e3[16])||OxO53e3[15];inp_bgColor[OxO53e3[14]][OxO53e3[13]]=inp_bgColor[OxO53e3[11]];inp_borderColor[OxO53e3[11]]=element.getAttribute(OxO53e3[17])||OxO53e3[15];inp_borderColor[OxO53e3[14]][OxO53e3[13]]=inp_borderColor[OxO53e3[11]];inp_borderColorLight[OxO53e3[11]]=element.getAttribute(OxO53e3[18])||OxO53e3[15];inp_borderColorLight[OxO53e3[14]][OxO53e3[13]]=inp_borderColorLight[OxO53e3[11]];inp_borderColorDark[OxO53e3[11]]=element.getAttribute(OxO53e3[19])||OxO53e3[15];inp_borderColorDark[OxO53e3[14]][OxO53e3[13]]=inp_borderColorDark[OxO53e3[11]];inp_class[OxO53e3[11]]=element[OxO53e3[20]];inp_width[OxO53e3[11]]=element.getAttribute(OxO53e3[21])||element[OxO53e3[14]][OxO53e3[21]]||OxO53e3[15];inp_height[OxO53e3[11]]=element.getAttribute(OxO53e3[22])||element[OxO53e3[14]][OxO53e3[22]]||OxO53e3[15];sel_align[OxO53e3[11]]=element.getAttribute(OxO53e3[23])||OxO53e3[15];sel_valign[OxO53e3[11]]=element.getAttribute(OxO53e3[24])||OxO53e3[15];inp_tooltip[OxO53e3[11]]=element.getAttribute(OxO53e3[25])||OxO53e3[15];} ;SyncTo=function SyncTo_Tr(element){if(inp_bgColor[OxO53e3[11]]){if(element[OxO53e3[14]][OxO53e3[13]]){element[OxO53e3[14]][OxO53e3[13]]=inp_bgColor[OxO53e3[11]];} else {element[OxO53e3[12]]=inp_bgColor[OxO53e3[11]];} ;} else {element.removeAttribute(OxO53e3[12]);} ;element[OxO53e3[17]]=inp_borderColor[OxO53e3[11]];element[OxO53e3[18]]=inp_borderColorLight[OxO53e3[11]];element[OxO53e3[19]]=inp_borderColorDark[OxO53e3[11]];element[OxO53e3[20]]=inp_class[OxO53e3[11]];if(element[OxO53e3[14]][OxO53e3[21]]||element[OxO53e3[14]][OxO53e3[22]]){try{element[OxO53e3[14]][OxO53e3[21]]=inp_width[OxO53e3[11]];element[OxO53e3[14]][OxO53e3[22]]=inp_height[OxO53e3[11]];} catch(er){alert(CE_GetStr(OxO53e3[26]));} ;} else {try{element[OxO53e3[21]]=inp_width[OxO53e3[11]];element[OxO53e3[22]]=inp_height[OxO53e3[11]];} catch(er){alert(CE_GetStr(OxO53e3[26]));} ;} ;var Ox276=/[^a-z\d]/i;if(Ox276.test(inp_id.value)){alert(CE_GetStr(OxO53e3[27]));return ;} ;element[OxO53e3[23]]=sel_align[OxO53e3[11]];element[OxO53e3[16]]=inp_id[OxO53e3[11]];element[OxO53e3[24]]=sel_valign[OxO53e3[11]];element[OxO53e3[25]]=inp_tooltip[OxO53e3[11]];if(element[OxO53e3[16]]==OxO53e3[15]){element.removeAttribute(OxO53e3[16]);} ;if(element[OxO53e3[12]]==OxO53e3[15]){element.removeAttribute(OxO53e3[12]);} ;if(element[OxO53e3[17]]==OxO53e3[15]){element.removeAttribute(OxO53e3[17]);} ;if(element[OxO53e3[18]]==OxO53e3[15]){element.removeAttribute(OxO53e3[18]);} ;if(element[OxO53e3[19]]==OxO53e3[15]){element.removeAttribute(OxO53e3[19]);} ;if(element[OxO53e3[20]]==OxO53e3[15]){element.removeAttribute(OxO53e3[20]);} ;if(element[OxO53e3[20]]==OxO53e3[15]){element.removeAttribute(OxO53e3[28]);} ;if(element[OxO53e3[23]]==OxO53e3[15]){element.removeAttribute(OxO53e3[23]);} ;if(element[OxO53e3[24]]==OxO53e3[15]){element.removeAttribute(OxO53e3[29]);} ;if(element[OxO53e3[25]]==OxO53e3[15]){element.removeAttribute(OxO53e3[25]);} ;if(element[OxO53e3[21]]==OxO53e3[15]){element.removeAttribute(OxO53e3[21]);} ;if(element[OxO53e3[22]]==OxO53e3[15]){element.removeAttribute(OxO53e3[22]);} ;if(element[OxO53e3[14]][OxO53e3[30]]==OxO53e3[31]){element.removeAttribute(OxO53e3[14]);} ;} ;inp_borderColor[OxO53e3[32]]=function inp_borderColor_onclick(){SelectColor(inp_borderColor);} ;inp_bgColor[OxO53e3[32]]=function inp_bgColor_onclick(){SelectColor(inp_bgColor);} ;inp_borderColorLight[OxO53e3[32]]=function inp_borderColorLight_onclick(){SelectColor(inp_borderColorLight);} ;inp_borderColorDark[OxO53e3[32]]=function inp_borderColorDark_onclick(){SelectColor(inp_borderColorDark);} ;
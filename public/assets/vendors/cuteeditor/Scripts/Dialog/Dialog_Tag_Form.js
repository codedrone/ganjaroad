var OxO3ea3=["inp_action","sel_Method","inp_name","inp_id","inp_encode","sel_target","Name","value","name","id","action","method","encoding","application/x-www-form-urlencoded","","target"];var inp_action=Window_GetElement(window,OxO3ea3[0],true);var sel_Method=Window_GetElement(window,OxO3ea3[1],true);var inp_name=Window_GetElement(window,OxO3ea3[2],true);var inp_id=Window_GetElement(window,OxO3ea3[3],true);var inp_encode=Window_GetElement(window,OxO3ea3[4],true);var sel_target=Window_GetElement(window,OxO3ea3[5],true);UpdateState=function UpdateState_Form(){} ;SyncToView=function SyncToView_Form(){if(element[OxO3ea3[6]]){inp_name[OxO3ea3[7]]=element[OxO3ea3[6]];} ;if(element[OxO3ea3[8]]){inp_name[OxO3ea3[7]]=element[OxO3ea3[8]];} ;inp_id[OxO3ea3[7]]=element[OxO3ea3[9]];if(element[OxO3ea3[10]]){inp_action[OxO3ea3[7]]=element[OxO3ea3[10]];} ;if(element[OxO3ea3[11]]){sel_Method[OxO3ea3[7]]=element[OxO3ea3[11]];} ;if(element[OxO3ea3[12]]==OxO3ea3[13]){inp_encode[OxO3ea3[7]]=OxO3ea3[14];} else {inp_encode[OxO3ea3[7]]=element[OxO3ea3[12]];} ;if(element[OxO3ea3[15]]){sel_target[OxO3ea3[7]]=element[OxO3ea3[15]];} ;} ;SyncTo=function SyncTo_Form(element){element[OxO3ea3[8]]=inp_name[OxO3ea3[7]];if(element[OxO3ea3[6]]){element[OxO3ea3[6]]=inp_name[OxO3ea3[7]];} else {if(element[OxO3ea3[8]]){element.removeAttribute(OxO3ea3[8],0);element[OxO3ea3[6]]=inp_name[OxO3ea3[7]];} else {element[OxO3ea3[6]]=inp_name[OxO3ea3[7]];} ;} ;element[OxO3ea3[9]]=inp_id[OxO3ea3[7]];element[OxO3ea3[10]]=inp_action[OxO3ea3[7]];element[OxO3ea3[11]]=sel_Method[OxO3ea3[7]];try{element[OxO3ea3[12]]=inp_encode[OxO3ea3[7]];} catch(e){} ;element[OxO3ea3[15]]=sel_target[OxO3ea3[7]];if(element[OxO3ea3[15]]==OxO3ea3[14]){element.removeAttribute(OxO3ea3[15]);} ;if(element[OxO3ea3[6]]==OxO3ea3[14]){element.removeAttribute(OxO3ea3[6]);} ;if(element[OxO3ea3[10]]==OxO3ea3[14]){element.removeAttribute(OxO3ea3[10]);} ;} ;
var OxO98e1=["onload","contentWindow","idSource","innerHTML","body","document","","designMode","on","contentEditable","fontFamily","style","Tahoma","fontSize","11px","color","black","background","white","length","\x3C$1$3","\x26nbsp;","\x22","\x27","$1","\x26amp;","\x26lt;","\x26gt;","\x26#39;","\x26quot;"];var editor=Window_GetDialogArguments(window);function cancel(){Window_CloseDialog(window);} ;window[OxO98e1[0]]=function (){var iframe=document.getElementById(OxO98e1[2])[OxO98e1[1]];iframe[OxO98e1[5]][OxO98e1[4]][OxO98e1[3]]=OxO98e1[6];iframe[OxO98e1[5]][OxO98e1[7]]=OxO98e1[8];iframe[OxO98e1[5]][OxO98e1[4]][OxO98e1[9]]=true;iframe[OxO98e1[5]][OxO98e1[4]][OxO98e1[11]][OxO98e1[10]]=OxO98e1[12];iframe[OxO98e1[5]][OxO98e1[4]][OxO98e1[11]][OxO98e1[13]]=OxO98e1[14];iframe[OxO98e1[5]][OxO98e1[4]][OxO98e1[11]][OxO98e1[15]]=OxO98e1[16];iframe[OxO98e1[5]][OxO98e1[4]][OxO98e1[11]][OxO98e1[17]]=OxO98e1[18];iframe.focus();} ;function insertContent(){var iframe=document.getElementById(OxO98e1[2])[OxO98e1[1]];var Ox190=iframe[OxO98e1[5]][OxO98e1[4]][OxO98e1[3]];if(Ox190&&Ox190[OxO98e1[19]]>0){Ox190=_CleanCode(Ox190);if(Ox190.match(/<*>/g)){Ox190=String_HtmlEncode(Ox190);} ;editor.PasteHTML(Ox190);Window_CloseDialog(window);} ;} ;function _CleanCode(Ox237){Ox237=Ox237.replace(/<\\?\??xml[^>]>/gi,OxO98e1[6]);Ox237=Ox237.replace(/<([\w]+) class=([^ |>]*)([^>]*)/gi,OxO98e1[20]);Ox237=Ox237.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi,OxO98e1[20]);Ox237=Ox237.replace(/\s*mso-[^:]+:[^;"]+;?/gi,OxO98e1[6]);Ox237=Ox237.replace(/<o:p>\s*<\/o:p>/g,OxO98e1[6]);Ox237=Ox237.replace(/<o:p>.*?<\/o:p>/g,OxO98e1[21]);Ox237=Ox237.replace(/<\/?\w+:[^>]*>/gi,OxO98e1[6]);Ox237=Ox237.replace(/<\!--.*-->/g,OxO98e1[6]);Ox237=Ox237.replace(/[\�\�]/gi,OxO98e1[22]);Ox237=Ox237.replace(/[\�\�]/gi,OxO98e1[23]);Ox237=Ox237.replace(/<\\?\?xml[^>]*>/gi,OxO98e1[6]);Ox237=Ox237.replace(/<(\w+)[^>]*\sstyle="[^"]*DISPLAY\s?:\s?none(.*?)<\/\1>/ig,OxO98e1[6]);Ox237=Ox237.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/gi,OxO98e1[21]);Ox237=Ox237.replace(/<span\s*[^>]*><\/span>/gi,OxO98e1[6]);Ox237=Ox237.replace(/\s*style="\s*"/gi,OxO98e1[6]);Ox237=Ox237.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxO98e1[6]);Ox237=Ox237.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxO98e1[6]);Ox237=Ox237.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxO98e1[6]);while(Ox237.match(/<span\s*>(.*?)<\/span>/gi)){Ox237=Ox237.replace(/<span\s*>(.*?)<\/span>/gi,OxO98e1[24]);} ;while(Ox237.match(/<font\s*>(.*?)<\/font>/gi)){Ox237=Ox237.replace(/<font\s*>(.*?)<\/font>/gi,OxO98e1[24]);} ;Ox237=Ox237.replace(/<a name="?OLE_LINK\d+"?>((.|[\r\n])*?)<\/a>/gi,OxO98e1[24]);Ox237=Ox237.replace(/<a name="?_Hlt\d+"?>((.|[\r\n])*?)<\/a>/gi,OxO98e1[24]);Ox237=Ox237.replace(/<a name="?_Toc\d+"?>((.|[\r\n])*?)<\/a>/gi,OxO98e1[24]);Ox237=Ox237.replace(/<p([^>])*>(&nbsp;)*\s*<\/p>/gi,OxO98e1[6]);Ox237=Ox237.replace(/<p([^>])*>(&nbsp;)<\/p>/gi,OxO98e1[6]);return Ox237;} ;function String_HtmlEncode(Ox177){if(Ox177==null){return OxO98e1[6];} ;Ox177=Ox177.replace(/&/g,OxO98e1[25]);Ox177=Ox177.replace(/</g,OxO98e1[26]);Ox177=Ox177.replace(/>/g,OxO98e1[27]);Ox177=Ox177.replace(/'/g,OxO98e1[28]);Ox177=Ox177.replace(/\x22/g,OxO98e1[29]);return Ox177;} ;

 function subtotales(val,cat){	 
	 subtotal = val*cat;	 
	 return subtotal;
}

 function Iva(tot,por){	 
	 Tiva = (tot*por)/100; 
	 return Tiva;
}



 function procesar(){
	
	 var TotPan= subtotales(document.getElementById('valPan1').value, document.getElementById('cantPan1').value);
	 var TotLeche= subtotales(document.getElementById('valLeche').value, document.getElementById('cantLeche').value);
	 var TotHuevo= subtotales(document.getElementById('valHuevo1').value, document.getElementById('canHuevo1').value);
	 
	 TotalsubtotalesViv = (TotLeche+TotPan+TotHuevo);	
	 TotalIVAViv = Iva(TotalsubtotalesViv, document.getElementById('valIVA1').value);		

     iva1.value= TotalIVAViv; 
	 subtotal1.value= TotalsubtotalesViv; 

	 var TotJabon= subtotales(document.getElementById('cantjabon').value, document.getElementById('valJabon').value);
	 var TotShampo= subtotales(document.getElementById('cantShampoo').value, document.getElementById('valShampoo').value);
	 var TotCrema= subtotales(document.getElementById('canCrema').value, document.getElementById('valCrema').value);
	 
	 TotalsubtotalesAS = (TotJabon+TotShampo+TotCrema);	
	 TotalIVAAseo = Iva(TotalsubtotalesAS, document.getElementById('valIVA2').value);		 

	 iva2.value= TotalIVAAseo; 
	 subtotal2.value= TotalsubtotalesAS;	

	 totSubtotal.value=  TotalsubtotalesViv+TotalsubtotalesAS;
	 totiva.value= TotalIVAViv+TotalIVAAseo;
	 
	 total.value= (TotalsubtotalesViv+TotalsubtotalesAS+TotalIVAViv+TotalIVAAseo);
	  
}


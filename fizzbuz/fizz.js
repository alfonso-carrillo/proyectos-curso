ciclon(1,100);

function ciclon(inicio,final)
{
	for (var i = inicio; i <= final; i++) 
{
	if (esDivisible(i,3)) 
	{
		document.write("Fizz");
	}
	if (esDivisible(i,5)) 
	{
		document.write("Buzz");
	}
	if (!esDivisible(i,3) && !esDivisible(i,5))
	{
	document.write(i);
	}

	document.write("<br />");
}	
}

function esDivisible(num, divisor)
{
	if (num % divisor == 0) 
	{
		return true;
	}

	else
	{
		return false;
	}
}
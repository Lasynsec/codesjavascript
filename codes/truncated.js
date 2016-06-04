function truncate(str, num) 
{
  // Clear out that junk in your trunk
  if(str.length > num)
  {
  	return str.slice(0, num - 3) + '...';
  }
  else
  {
  	return str;
  }
 	
}

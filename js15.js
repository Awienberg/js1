//js15 fahrenheit til celcius
'use strict';
var a = Number(prompt('Indtast fahrenheit'));
var b = (a - 32) * 5 / 9;
console.log('Omregnet til celcius ' + b);

//js201 skudår
'use strict';
var a = Number(prompt('Indtast år'));
console.log(a % 100 === 0 || a % 400 === 0 || a % 4 === 0);

//js202 mand eller kvinde
'use strict';
var a = Number(prompt('Indtast dit cpr nummer'));
var b = a % 2;
console.log(b === 0);

//js25c Conjunction
'use strict';
console.log('Truth Table Conjunction');
console.log('var1\tvar2\tvar1 && var2');
var var1 = true;
var var2 = false;
console.log(var1 + '\t' + !var2 + '\t' + (var1 && !var2));
console.log(var1 + '\t' + var2 + '\t' + (var1 && var2));
console.log(!var1 + '\t' + !var2 + '\t' + (!var1 && !var2));
console.log(!var1 + '\t' + var2 + '\t' + (!var1 && var2));

//js25d Disjunction
'use strict';
console.log('Truth Table Disjunction');
console.log('var1\tvar2\tvar1 || var2');
var var1 = true;
var var2 = false;
console.log(var1 + '\t' + !var2 + '\t' + (var1 || !var2));
console.log(var1 + '\t' + var2 + '\t' + (var1 || var2));
console.log(!var1 + '\t' + !var2 + '\t' + (!var1 || !var2));
console.log(!var1 + '\t' + var2 + '\t' + (!var1 || var2));

//js25c3 Conjunction.2
'use strict';
console.log('Truth Table Conjunction');
console.log('var1\tvar2\tvar1 && var2 && var3');
var var1 = true;
var var2 = false;
var var3 = true;
console.log(var1 + '\t' + !var2 + '\t' + var3 + '\t' + (var1 && !var2 && var3));
console.log(var1 + '\t' + var2 + '\t' + !var3 + '\t' + (var1 && var2 && !var3));
console.log(!var1 + '\t' + !var2 + '\t' + !var3 + '\t' + (!var1 && !var2 && !var3));
console.log(!var1 + '\t' + var2 + '\t' + !var3 + '\t' + (!var1 && var2 && !var3));
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 && var2 && var3));
console.log(!var1 + '\t' + var2 + '\t' + var3 + '\t' + (!var1 && var2 && var3));
console.log(var1 + '\t' + !var2 + '\t' + !var3 + '\t' + (var1 && !var2 && !var3));
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 && var2 && var3));

//js25d3 Disjunction.2
'use strict';
console.log('Truth Table Disjunction');
console.log('var1\tvar2\tvar1 || var2 || var3');
var var1 = true;
var var2 = false;
var var3 = true;
console.log(var1 + '\t' + !var2 + '\t' + var3 + '\t' + (var1 || !var2 || var3));
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 || var2 || !var3));
console.log(!var1 + '\t' + !var2 + '\t' + var3 + '\t' + (!var1 || !var2 || var3));
console.log(!var1 + '\t' + var2 + '\t' + !var3 + '\t' + (!var1 || var2 || !var3));
console.log(!var1 + '\t' + var2 + '\t' + var3 + '\t' + (!var1 || var2 || var3));
console.log(var1 + '\t' + var2 + '\t' + !var3 + '\t' + (var1 || var2 || !var3));
console.log(var1 + '\t' + var2 + '\t' + !var3 + '\t' + (var1 || var2 || !var3));
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 || var2 || var3));
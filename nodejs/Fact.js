function factorial (n)
{
    
    if(n==0 || n==1)
    {
        return 1;
    }
    else
    {
        fact=n*factorial(n-1);
        return fact;
    }
}

let f = factorial(6);
console.log("Factorial is "+ f);
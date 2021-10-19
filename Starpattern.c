#include<stdio.h>
void main()
{
int i,j,n;
printf("\n Enter How many lines of Heart do you need");
scanf("%d",&n);
printf("\n");
  for(i=n/2;i<=n;i+=2)
	{
		for(j=1;j<n-i;j+=2)
			printf(" ");
		for(j=1;j<=i;j++)
			printf("*");
		for(j=1;j<=n-i;j++)
			printf(" ");
		for(j=1;j<=i;j++)
			printf("*");
		printf("\n");
	}
  for(i=n;i>=1;i--)
	{
		for(j=i;j<n;j++)
			printf(" ");
 
		for(j=1;j<=(i*2)-1;j++)
			printf("*");
		printf("\n");
    }

}

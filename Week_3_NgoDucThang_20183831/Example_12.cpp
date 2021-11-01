//Ngô Đức Thắng - 20183831
#include "stdio.h"
#include "conio.h"
#include "stdlib.h"
 
bool is_a_contain_b(int A[], int n, int B[], int m);
 
int main()
{
    int A[] = {1, -2, 5, 6, 8, -9, 4, 5, 11, -7};
    int B[] = {6, 8, -9, 4};
    int n = sizeof(A)/sizeof(int);
    int m = sizeof(B)/sizeof(int);
    int k = 5;
 
    if(is_a_contain_b(A, n, B, m))
        printf("\nA contains B");
    else
        printf("\nA doesn't contain B");
 
    getch();
}
bool is_a_contain_b(int A[], int n, int B[], int m)
{
    int i, j, k;
    bool res = false;
    if(n < m)
        return false;
    for(i = 0; i < n; i++)
    {
        if(B[0] == A[i] && n - i >= m)
        {
            k = i + 1;
            res = true;
            for(j = 1; j < m; j++, k++)
            {
                if(B[j] != A[k])
                {
                    res = false;
                    break; 
                }
            }
            if(res)
                break;
        }
    }
    return res;
}
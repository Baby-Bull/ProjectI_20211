//Ngô Đức Thắng - 2018381
#include <bits/stdc++.h>
using namespace std;
int main(){
    int a[100];
    int n;
    cout<<"Nhap so luong phan tu n = ";
    do{
        cin>>n;
        if(n <= 0){
            cout<<"Nhap lai n = ";
        }
    }while(n <= 0);
    
    for(int i = 0; i < n; i++){
        cout << "Nhap a[" <<i<< "] : " ;
        cin >> a[i];
    }
    int tg;
    for(int i = 0; i < n - 1; i++){
        for(int j = i + 1; j < n; j++){
            if(a[i] < a[j]){
                // Hoan vi 2 so a[i] va a[j]
                tg = a[i];
                a[i] = a[j];
                a[j] = tg;        
            }
        }
    }
    cout<<"Mang da sap xep la: ";
    for(int i = 0; i < n; i++){
        cout<<a[i]<<"  ";
    }
    
    
}
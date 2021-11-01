#include <bits/stdc++.h>
using namespace std;
int Nhap(){
    int x;
    do{
        cin >> x;
        if (x < 1)
            cout << "Nhap sai, yeu cau nhap lai!";
    } while (x < 1);
    return x;
}
int tinhGiaiThua(int temp){
    int res=1;
    for(int i =1; i<= temp; i++){
        res *= i;
    }
    return res;
}
float Tinh(int n){
    float s = 0, t = 0;
    for (int i = 1; i <= n; i++){
        t = t + tinhGiaiThua(i);
        s = s + (float)1 / t;
    }
    return s;
}

int main(){
    int n;

    cout << "Nhap so nguyen n: ";
    n = Nhap();
    cout << "Ket qua la: " << Tinh(n);

    cout << endl;
    return 0;
}
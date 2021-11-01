#include <bits/stdc++.h>

using namespace std;

int main(int argc, char *argv[])
{
    int h;
    cout << "nhap: ";
    cin >> h;
    while (2 > h || 10 < h)
    {
        cout << "nhap lai:";
        cin >> h;
    }
    for (int i = 1; i <= h + 1; i++)
    {
        for (int j = h + 1 - i; j >= 1; --j)
            cout << "* ";
        cout << "\n";
    }
    return 0;
}
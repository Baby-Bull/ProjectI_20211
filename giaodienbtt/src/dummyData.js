export const dummyData = {
    week1: [
        {
            no: "1",
            title: "Bài số 1",
            request: "In ra màn hình tất cả các hợp số <100",
            input: "",
            result: "4,6,8,9,10,12,14,15,16,18,20,21,22,24,28,30,32,36,38,39,40,42,45,46,48,49,50,51,52,54,55,56,58,60,62,63,64,65,66,68,69,70,72,74,75,76,77,78,80,82,84,85,86,87,88,89,90,92,93,94,95,96,98,99",
            code: `for (let num = 1; num < 100; num++) {
                var count = 0; // đếm số ước của a
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i == 0) {
                        count++;
                    }
                }
                if (count != 0 && num > 1)
                    console.log(num+",");
            }`
        },
        {
            no: "1",
            title: "Bài số 2",
            request: "In ra màn hình 20 số nguyên tố đầu tiên",
            input: "",
            result: `2,
            3,
            5,
            7,
            11,
            13,
            17,
            19,
            23,
            29,
            31,
            37,
            41,
            43,
            47,
            53,
            59,
            61,
            67,
            71,`,
            code: `var temp1 = 1;
            var cnt = 1;
            while (cnt < 21) {
                var count = 0; // đếm số ước của a
                for (let i = 2; i <= Math.sqrt(temp1); i++) {
                    (temp1 % i == 0) && count++;
                }
                if (count == 0 && temp1 > 1) {
                    console.log(temp1);
                    cnt++;
                }
                temp1++;
            }`
        },
        {
            no: "1",
            title: "Bài số 3",
            request: "In ra màn hình tất cả các số nguyên tố từ 1000 đến 2000",
            input: "",
            result: `1009
            1013
            1019
            1021
            1031
            1033
            1039
            1049
            1051
            1061
            1063
            1069
            1087
            1091
            1093
            1097
            1103
            1109
            1117
            1123
            1129
            1151
            1153
            1163
            1171
            1181
            1187
            1193
            1201
            1213
            1217
            1223
            1229
            1231
            1237
            1249
            1259
            1277
            1279
            1283
            1289
            1291
            1297
            1301
            1303
            1307
            1319
            1321
            1327
            1361
            1367
            1373
            1381
            1399
            1409
            1423
            1427
            1429
            1433
            1439
            1447
            1451
            1453
            1459
            1471
            1481
            1483
            1487
            1489
            1493
            1499
            1511
            1523
            1531
            1543
            1549
            1553
            1559
            1567
            1571
            1579
            1583
            1597
            1601
            1607
            1609
            1613
            1619
            1621
            1627
            1637
            1657
            1663
            1667
            1669
            1693
            1697
            1699
            1709
            1721
            1723
            1733
            1741
            1747
            1753
            1759
            1777
            1783
            1787
            1789
            1801
            1811
            1823
            1831
            1847
            1861
            1867
            1871
            1873
            1877
            1879
            1889
            1901
            1907
            1913
            1931
            1933
            1949
            1951
            1973
            1979
            1987
            1993
            1997
            1999`,
            code: `for (let num = 1000; num <= 2000; num++) {
                var count = 0; // đếm số ước của a
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i == 0) {
                        count++;
                    }
                }
                if (count == 0 && num > 1)
                    console.log(num);
            }`
        },
        {
            no: "1",
            title: "Bài số 4",
            request: "In ra màn hình các số <100 và chia hết cho 3,7",
            input: "",
            result: `0
            21
            42
            63
            84`,
            code: `for(let i = 0; i< 100; i++){
                (i%3==0 && i%7==0) && console.log(i);
            }`
        },
        {
            no: "1",
            title: "Bài số 5",
            request: "In ra màn hình các số nằm giữa 1000 và 2000 đồng thời chia hết cho 3,5,7",
            input: "",
            result: `1050
            1155
            1260
            1365
            1470
            1575
            1680
            1785
            1890
            1995`,
            code: `for(let i = 1000; i< 2000; i++){
                (i%3==0 && i%5==0 && i%7==0) && console.log(i);
            }`
        },
        {
            no: "1",
            title: "Bài số 6",
            request: "In ra màn hình 5 số hoàn hảo đầu tiên (Số hoàn hảo là số có tổng bằng các ước số của mình kể cả 1",
            input: "",
            result: `6
            28
            496
            8128
            33550336`,
            code: `function check(test) {
                var count = 0; // đếm số ước của a
                for (let i = 2; i <= Math.sqrt(test); i++) {
                    (test % i == 0) && count++;
                }
                return (count == 0 && test > 1) ? true : false;
            }
            var count = 1;
            var k = 1;
            while (count < 6) {
                if (check(Math.pow(2, k) - 1)) {
                    console.log(Math.pow(2, k - 1) * (Math.pow(2, k) - 1));
                    count++;
                }
                k++;
            }`
        },
        {
            no: "1",
            title: "Bài số 7",
            request: `Trong các số tự nhiên <=100 hãy đếm xem có bao nhiêu số

            a. Chia hết cho 5
            
            b. Chia 5 dư 1
            
            c. Chia 5 dư 2
            
            d. Chia 5 dư 3`,
            input: "",
            result: "21 20 20 20",
            code: `var a = b = c = d = 0;
            for (let i = 0; i <= 100; i++) {
                (i % 5 == 0) && a++;
                (i % 5 == 1) && b++;
                (i % 5 == 2) && c++;
                (i % 5 == 3) && d++;
            }
            console.log(a, b, c, d);`
        },
        {
            no: "1",
            title: "Bài số 8",
            request: "Cho số tự nhiên N bất kỳ (đã gán trước đó), tìm và in ra ước số nguyên tố nhỏ nhất của N",
            input: "107",
            result: "107",
            code: `var number = 107;
            for (let i = 2; i <= number; i++) {
                if (number % i == 0) {
                    console.log(i);
                    break;
                }
            }`
        },
        {
            no: "1",
            title: "Bài số 9",
            request: "Cho số tự nhiên N>1 bất kỳ (đã gán trước đó). In ra khai triển thành tích các số nguyên tố tính từ nhỏ đến lớn VD: 9🡪3.3; 12🡪2.2.3.",
            input: "120",
            result: "120 = 2*2*2*3*5*",
            code: `var a = [];
            var number = 120;
            var oldNumber = 120;
            var i = 2;
            while (i <= number) {
                if (number % i == 0) {
                    a.push(i);
                    number /= i;
                } else {
                    i++;
                }
            }
            var resString = oldNumber + " = "
            for (let j = 0; j < a.length; j++) {
                resString += (a[j].toString() + "*");
            }
            console.log(resString);`
        },
        {
            no: "1",
            title: "Bài số 10",
            request: "Cho trước số tự nhiên N bất kỳ (đã gán trước đó). In ra màn hình tất cả các ước số nguyên tố khác nhau của N",
            input: "120",
            result: `2
            2
            2
            3
            5`,
            code: `var number = 120;
            var oldNumber = 120;
            var i = 2;
            while (i <= number) {
                if (number % i == 0) {
                    console.log(i);
                    number /= i;
                } else {
                    i++;
                }
            }`
        },
        {
            no: "1",
            title: "Bài số 11",
            request: "Viết chương trình tráo đổi ngẫu nhiên vị trí một dãy số cho trước. Để lấy một số int ngẫu nhiên từ 0 đến n-1 ta dùng lệnh int i = Random.nextInt(n",
            input: "[1, 2, 3, 4, 5]",
            result: `1
            2
            4
            3
            5`,
            code: `var arr = [1, 2, 3, 4, 5];
            var i = Math.floor(Math.random() * arr.length)
            var j = Math.floor(Math.random() * arr.length)
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            }
            `
        },
        {
            no: "1",
            title: "Bài số 1",
            request: "Viết chương trình nhập chiều cao h từ bàn phím, sau đó hiển thị các tam giác hình sao có chiều cao h như dưới đây. Chú ý có kiểm tra điều kiện của h: 2<=h<=10. Nếu h nằm ngoài đoạn trên, yêu cầu người dùng nhập lại. (cho lựa chọn in tam giác xuôi hoặc ngược).",
            input: "7",
            result: `* * * * * * * 
            * * * * * *   
            * * * * *     
            * * * *       
            * * *
            * *
            *`,
            code: `#include <bits/stdc++.h>

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
            }`
        }
    ],
    week2:[
        {
            title: "Bài số 1",
            request: `Cho số tự nhiên N bất kỳ

            Tính tổng S=1+1/(1+2) + 1/(1+2+3) +…+ 1/(1+2+3+..+N)`,
            input: `6`,
            result: `1.71429`,
            code: `#include <bits/stdc++.h>
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
            float Tinh(int n){
                float s = 0, t = 0;
                for (int i = 1; i <= n; i++){
                    t = t + i;
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
            }`
        },
        {
            title: "Bài số 2",
            request: `Cho số tự nhiên N bất kỳ, tính tổng

            S= 1+ 1/2! + 1/3! + … + 1/N`,
            input: `6`,
            result: `1.71806`,
            code: `#include <bits/stdc++.h>
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
            float Tinh(int n){
                float s = 0, t = 1;
                for (int i = 1; i <= n; i++){
                    t = t * i;
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
            }`
        },
        {
            title: "Bài số 3",
            request: `Cho số tự nhiên N bất kỳ,

            tính tổng S=1+1/(1+2!) + 1/(1+2!+3!)+ ..+ 1/(1+2!+3!+..+N!)`,
            input: `7`,
            result: `1.4826`,
            code: `#include <bits/stdc++.h>
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
            }`
        },
        {
            title: "Bài số 4",
            request: `Dãy Fibonaxi 1, 2, 3, … F(k) = F(k-1) + F(k-2). Tính số Fibonaxi thứ N`,
            input: `10`,
            result: `So Fibonacci thu 10 la: 55`,
            code: `#include <iostream>
            using namespace std;
            int Fibonacci(int n)
            {
                if (n == 1 || n == 2)
                    return 1;
                return Fibonacci(n - 1) + Fibonacci(n - 2);
            }
            int main()
            {
                int n;
                cout << "nhap n: ";
                cin >> n;
                cout << "So Fibonacci thu " << n << " la: " << Fibonacci(n);
                return 0;
            }`
        }
    ],
    week3:[
        {
            title: "Bài số 1",
            request: `Cho một dãy số tự nhiên, viết chương trình sắp xếp dãy này theo thứ tự giảm dần.`,
            input: `Nhap so luong phan tu n = 10
            Nhap a[0] : 1
            Nhap a[1] : 2
            Nhap a[2] : 4
            Nhap a[3] : 5
            Nhap a[4] : 6
            Nhap a[5] : 3
            Nhap a[6] : 4
            Nhap a[7] : 56
            Nhap a[8] : 23
            Nhap a[9] : 76`,
            result: `76  56  23  6  5  4  4  3  2  1  `,
            code: `//Ngô Đức Thắng - 2018381
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
                
                
            }`
        },
        {
            title: "Bài số 2",
            request: `Cho dãy số tự nhiên, in ra màn hình tất cả các số nguyên tố của dãy này.`,
            input: ` [13, 2, 5, 27, 23, 56, 34, 997, 4564, 45, 7676]`,
            result: `13
            2
            5
            23
            997`,
            code: `//Ngô Đức Thắng - 2018381
            function check(test) {
                var count = 0; // đếm số ước của a
                for (let i = 2; i <= Math.sqrt(test); i++) {
                    (test % i == 0) && count++;
                }
                return (count == 0 && test > 1) ? true : false;
            }
            var arr = [13, 2, 5, 27, 23, 56, 34, 997, 4564, 45, 7676];
            for (let i = 0; i < arr.length; i++) {
                (check(arr[i])) && console.log(arr[i]);
            }`
        },
        {
            title: "Bài số 3",
            request: `Cho một dãy các số tự nhiên, tìm và in ra 1 giá trị min của dãy này và tất cả các chỉ số ứng với giá trị min này.`,
            input: `22, 5, 223, 45, 6, 15, 34, 66, 34, 565`,
            result: `5
            1`,
            code: `//Ngô Đức Thắng - 2018381
            function min(arr, n) {
                var min = arr[0];
                for (let i = 1; i < n; i++)
                    if (min > arr[i])
                        min = arr[i];
                return min;
            }
            var array = [22, 5, 223, 45, 6, 15, 34, 66, 34, 565];
            console.log(min(array, array.length));
            for (let i = 0; i < array.length; i++) {
                (array[i] == min(array, array.length)) && console.log(i);
            }`
        },
        {
            title: "Bài số 4",
            request: `Cho một dãy các số tự nhiên, tìm và in ra 1 giá trị max của dãy này và tất cả các chỉ số ứng với giá trị max này.`,
            input: `22, 5, 223, 45, 6, 15, 34, 66, 34, 565`,
            result: `565
            9`,
            code: `//Ngô Đức Thắng - 2018381
            function max(arr, n) {
                var max = arr[0];
                for (let i = 1; i < n; i++)
                    if (max < arr[i])
                        max = arr[i];
                return max;
            }
            var array = [22, 5, 223, 45, 6, 15, 34, 66, 34, 565];
            console.log(max(array, array.length));
            for (let i = 0; i < array.length; i++) {
                (array[i] == max(array, array.length)) && console.log(i);
            }`
        },
        {
            title: "Bài số 5",
            request: `Cho một dãy số tự nhiên, hãy đếm xem trong dãy số trên có bao nhiêu số nguyên tố, có bao nhiêu hợp số.`,
            input: `22, 5, 223, 45, 6, 15, 34, 66, 34, 565`,
            result: `so nguyen to la: 5,223
            hop so la: 22,45,6,15,34,66,34,565`,
            code: `//Ngô Đức Thắng - 2018381
            function check(test) {
                var count = 0; // đếm số ước của a
                for (let i = 2; i <= Math.sqrt(test); i++) {
                    (test % i == 0) && count++;
                }
                return (count == 0 && test > 1) ? true : false;
            }
            var array = [22, 5, 223, 45, 6, 15, 34, 66, 34, 565];
            var hs = [];
            var nt = [];
            for(let i = 0; i< array.length; i++){
                check(array[i]) ? nt.push(array[i]) : hs.push(array[i]);
            }
            console.log("so nguyen to la: "+ nt);
            console.log("hop so la: "+ hs);`
        },
        {
            title: "Bài số 6",
            request: `Cho một dãy số tự nhiên, hãy in ra tất cả các số hạng của dãy trên thỏa mãn: số này là ước số thực sự của 1 số hạng khác trong dãy trên.`,
            input: `3, 5, 22, 56, 344, 54, 7, 43, 2, 34, 6, 745`,
            result: `3 la uoc cua :54
            3 la uoc cua :6
            5 la uoc cua :745
            2 la uoc cua :22
            7 la uoc cua :56
            2 la uoc cua :56
            43 la uoc cua :344
            2 la uoc cua :344
            2 la uoc cua :54
            6 la uoc cua :54
            2 la uoc cua :34
            2 la uoc cua :6`,
            code: `//Ngô Đức Thắng - 2018381
            var array = [3, 5, 22, 56, 344, 54, 7, 43, 2, 34, 6, 745];
            for (let i = 0; i < array.length; i++) {
                for (let j = i + 1; j < array.length; j++) {
                    if (array[i] % array[j] == 0) {
                        console.log(array[j] + " la uoc cua :" + array[i]);
                    } else if (array[j] % array[i] == 0) {
                        console.log(array[i] + " la uoc cua :" + array[j]);
                    }
                }
            }`
        },
        {
            title: "Bài số 7",
            request: `Cho một dãy số tự nhiên, hãy tìm 1 số tự nhiên nhỏ nhất c không bằng bất cứ số nào trong dãy trên.`,
            input: `5,343,32,234,5,46,4,34,456,34,23`,
            result: `so nho hon tat ca cac so trong day la : 3`,
            code: `//Ngô Đức Thắng - 2018381
            var array = [5,343,32,234,5,46,4,34,456,34,23];
            console.log("so nho hon tat ca cac so trong day la : " + (Math.min.apply(Math,array)-1));`
        },
        {
            title: "Bài số 8",
            request: `Cho một dãy số nguyên bất kỳ, hãy xóa đi trong dãy này các số hạng =0 và in ra màn hình các số còn lại.`,
            input: `5, 343, 32, 234, 5, 46, 40, 34, 456, 34, 23`,
            result: `so so = c la : 1
            so so < c la : 6
            so so > c la : 4`,
            code: `//Ngô Đức Thắng - 2018381
            var array = [5, 343, 32, 234, 5, 46, 40, 34, 456, 34, 23];
            var c = 40;
            var x = 0, y = 0, z = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] == c) x++;
                else if (array[i] > c) y++;
                else if (array[i] < c) z++;
            }
            console.log("so so = c la : "+ x);
            console.log("so so < c la : "+ z);
            console.log("so so > c la : "+ y);`
        },
        {
            title: "Bài số 9",
            request: `Cho một dãy số nguyên bất kỳ, cho trước 1 số c. Hãy đếm có bao nhiêu số của dãy trên =c; >c; <c.`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 10",
            request: `Cho một dãy số nguyên bất kỳ, hãy tìm ra 1 một dãy số liền nhau dài nhất bao gồm các số bằng nhau. Hãy in ra số lượng và các chỉ số đầu tiên của dãy con này.`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 11",
            request: `Cho một dãy số nguyên bất kỳ. Hãy tìm 1 một dãy con liên tục đơn điệu tăng dài nhất của dãy trên.`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 12",
            request: `Dãy số a[ ] được gọi là dãy con của b[ ] nếu từ b [ ] xóa đi 1 vài số sẽ thu được a[ ]. Cho trước 2 dãy số nguyên a[ ]; b[ ]. Hãy kiểm tra xem a[ ] có là dãy con của b[ ] hay không?.`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 13",
            request: `Nhập vào kích thước ô vuông n*n, kiểm tra 3<=n<= 8. Hiển thị ra màn hình kết quả như màn hình

            1 2 3 4
            
            12 13 14 5
            
            11 16 15 6
            
            10 9 8 7`,
            input: ``,
            result: ``,
            code: ``
        }
    ],
    week4:[
        {
            title: "Bài số 1",
            request: `Cho trước 1 xâu ký tự là họ tên người đầy đủ nhưng khi nhập có thể thừa một số dấu cách. Hãy xóa đi các dấu cách thừa và in ra họ tên chính xác.`,
            input: `     Ngo           Duc     Thang    `,
            result: `Ngo Duc Thang`,
            code: `//Ngô Đức Thắng - 20183831
            var string = "     Ngo           Duc     Thang    ";
            console.log(string.replace(/\s+/g,' ').trim());`
        },
        {
            title: "Bài số 2",
            request: `Cho trước xâu ký tự bất kỳ. Hãy đếm xem trong xâu có bao nhiêu lần xuất hiện xâu con “abc”`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 3",
            request: `Cho trước 1 xâu ký tự là họ tên người đầy đủ, hãy tách ra phần tên của người này`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 4",
            request: `Cho trước 1 xâu ký tự là họ tên người đầy đủ, hãy tách ra phần họ của người này`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 5",
            request: `Cho một xâu ký tự bao gồm toàn các ký tự 0,1. Hãy biến đổi xâu này theo cách 0🡪1, 1🡪0 và in ra kết quả.`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 6",
            request: `Cho trước xâu ký tự S, in ra xâu S1 ngược lại xâu S.`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 7",
            request: `Cho trước xâu ký tự S. Hãy biến đổi S theo quy tắc sau: Chữ số thì biến thành “$”, ký tự thì giữ nguyên`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 8",
            request: `Cho trước 2 xâu ký tự S1, S2. Hãy đếm xem xâu S1 xuất hiện trong S2 tại bao nhiêu vị trí.`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 9",
            request: `Cho xâu S và 2 chỉ số i, j. Hãy đổi chỗ 2 vị trí i, j trong S.`,
            input: `day la chuoi can doi vi tri
            4
            8`,
            result: `day ha cluoi can doi vi tri`,
            code: `//Ngô Đức Thắng 20183831
            var string = "day la chuoi can doi vi tri";
            var i = 4;
            var j = 8;
            var temp = string.split("");
            var temp1 = temp[i];
            temp[i] = temp[j];
            temp[j] = temp1;
            console.log(temp.join(""));`
        },
        {
            title: "Bài số 10",
            request: `Cho mảng xâu ký tự S1, S2, ..Sn. Hãy tìm và in ra phần tử xâu có độ dài lớn nhất.`,
            input: `"mang1", "mangso2", "mangso3","daylamangdainhat","mangcuoicung"`,
            result: `daylamangdainhat`,
            code: `//Ngô Đức Thắng 20183831 
            var array = ["mang1", "mangso2", "mangso3","daylamangdainhat","mangcuoicung"];
            var temp;
            count = 1;
            for(let i = 0; i< array.length; i++){
                if(array[i].length > count){
                    temp = array[i];
                    count = array[i].length;
                }
            }
            
            console.log(temp);`
        },
        {
            title: "Bài số 11",
            request: `Cho danh sách họ tên đầy đủ học sinh. Hãy đếm xem có bao nhiêu bạn tên “An”.`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 12",
            request: `Cho danh sách họ tên đầy đủ học sinh. Hãy đếm xem có bao nhiêu bạn có phần đệm là “Thị”`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 13",
            request: `Cho danh sách họ tên đầy đủ học sinh. Hãy đếm xem có bao nhiêu bạn có tên bắt đầu bằng chữ “H”.`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 14",
            request: `: Dãy xâu ký tự S1, S2,… được cho theo quy tắc sau: S1= “1111100000”, Sk thu được từ Sk-1 bằng cách thay đổi cho lần lượt các vị trí 1-2; 2-3; 3-4; 4-5; 5-6; 6-7; 7-8; 8-9; 9-10. Cho trước số tự nhiên N, Hãy in ra xâu Sn`,
            input: `1111100000`,
            result: `1110000011`,
            code: `//Ngô Đức Thắng 20183831
            var initial = "1111100000";
            var n = 2;
            var string = initial.split("")
            for (let i = 1; i <= n; i++) {
                var temp = string[0];
                for (let j = 0; j < string.length; j++) {
                    string[j] = string[j + 1];
                }
                string[9] = temp;
            }
            console.log(string.join(""));`
        },
        {
            title: "Bài số 15",
            request: `Cho trước 2 xâu ký tự S, S2. Hãy chèn xâu S1 vào giữa xâu S2 và in kết quả.`,
            input: `" day la chuoi can them "`,
            result: `day la chuoi  day la chuoi can them  ban dau`,
            code: `//Ngô Đức Thắng 20183831 
            var s1 = "day la chuoi + ban dau";
            var s2 = " day la chuoi can them ";
            console.log(s1.replace("+", s2));`
        },
        {
            title: "Bài số 16",
            request: `Cho trước 2 xâu S1, S2. Hãy xét xem xâu S1 có phải là xâu con của S2 nếu xóa bỏ vài kí tự của xâu S2 ta được xâu S1.`,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 1",
            request: ``,
            input: ``,
            result: ``,
            code: ``
        },
        {
            title: "Bài số 1",
            request: ``,
            input: ``,
            result: ``,
            code: ``
        }
    ]
}


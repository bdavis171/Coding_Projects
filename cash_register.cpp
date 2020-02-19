//This program will simulate a cash register (hopefully)
#include <iostream>
using namespace std;

float round(float var) {//Will round to the nearest 100th place decimal
    float value = (int)(var * 100 + 0.5);
    return (float)(value/100);
}

float totalPrice (float a[], int b) {//This calculates the total price without sales tax
    float total = 0;
    for (int i = 0; i < b;i++){
        total += a[i];
    }
    return total;
}

float setSalesTax (float total) {//This calculates the total price with sales tax
    float amountDue = (total*0.0925) + total;
    return amountDue;
}

int main() {
    int itemCount;
    cout << "How many items are there? ";//Asks the amount of items a customer has
    cin >> itemCount;//Collects the number of items that the customer has

    float items[itemCount];//Creates an array the size of the customers item count

    cout << "Enter the price for each item: \n";//Asks for the price of each item
    for (int i = 1; i <= itemCount; i++){//Puts the price of each item into the array
        cin >> items[i-1];
    }
float subtotal = round(totalPrice(items, itemCount));//stores the subtotal
float total = round(setSalesTax(subtotal));//stores the total
cout << "The subtotal is: $" << subtotal << "\n";//Displays subtotal
cout << "The total is : $" << total << "\n";//Displays total

float paidAmount;//Creates the float variable

cout << "\n" << "\n" << "How much will be paid? ";//Asks how much was paid
cin >> paidAmount;//Obtains the amount paid

if (paidAmount < total) {//If the amount paid is not enough

    cout << "Insufficient amount... \n";
}
else if (paidAmount > total) {//If the amount paid is more
float changeDue = paidAmount - total;
cout << "Your change is: $" << changeDue << "\n";
}
else {//If the amount paid is exact
    cout << "Thank you, have a good day! \n";
}
}